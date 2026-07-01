# Cavour Online

Cavour Online was a social network built in 2021 for the students of **Liceo Scientifico Cavour** (Rome, Italy). Access was restricted to holders of an official school e-mail address, which let students:

- buy and sell used textbooks,
- find peer-to-peer tutors for specific subjects,
- discover and connect with classmates,
- book a slot for the school's Open Day.

The project is no longer in production. This repository is published as an archive of the original source code, mainly for educational/portfolio purposes.

## Tech stack

- **Backend:** [Laravel 8](https://laravel.com/) (PHP 7.3 / 8.0), exposing a JSON API.
- **Authentication:** [`tymon/jwt-auth`](https://github.com/tymondesigns/jwt-auth) (stateless JWT bearer tokens).
- **Database:** MySQL (via Eloquent ORM).
- **Frontend:** a React + Redux single-page application. Only the production build is bundled under `public/` in this repository — the frontend source lives in a separate project and is not included here.

## Project structure

```
app/Http/Controllers/   API controllers (users, books, tutoring, sales, open day)
app/Models/             Eloquent models
routes/api.php          API route definitions
config/                 Laravel configuration (auth, CORS, JWT, mail, ...)
database/migrations/    Database schema
public/                 Web root, including the pre-built React frontend
```

### Main API endpoints

| Method | Endpoint             | Description                                   | Auth |
|--------|----------------------|------------------------------------------------|------|
| POST   | `/api/preregister`   | Start registration for a pre-loaded school e-mail | – |
| POST   | `/api/finalize`      | Complete registration (set password/profile)   | one-time token |
| POST   | `/api/login`         | Log in, returns a JWT                          | – |
| GET    | `/api/me`            | Current authenticated user                     | JWT |
| GET    | `/api/ricerca`       | Search users by name                           | JWT |
| GET    | `/api/vendi`         | Publish a book sale ad                         | JWT |
| GET    | `/api/lemievendite`  | List your own sale ads                         | JWT |
| DELETE | `/api/elimina`       | Delete one of your own sale ads                | JWT |
| GET    | `/api/cercatutor`    | Search available tutors                        | JWT |
| GET    | `/api/aggiungitutoraggio` | Offer yourself as a tutor                 | JWT |
| DELETE | `/api/eliminatutoraggio`  | Remove your own tutoring offer            | JWT |
| POST   | `/api/prenotaopenday`| Book an Open Day slot                          | – |
| GET    | `/api/confermaopenday`| Confirm an Open Day booking                   | – |

See `routes/api.php` for the full list.

## Getting started

### Requirements

- PHP 7.3+ or 8.0, with the extensions Laravel requires
- Composer
- MySQL (or another database supported by Laravel)
- Node.js + npm (only needed if you want to rebuild frontend assets with Laravel Mix)

### Setup

```bash
git clone <this-repo>
cd CavourOnline

composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
```

Edit `.env` with your database credentials and mail settings, then run the migrations:

```bash
php artisan migrate
```

Start the development server:

```bash
php artisan serve
```

The API will be available at `http://localhost:8000/api`.

### Configuration notes

- `JWT_SECRET` and `APP_KEY` must be generated per-deployment (`php artisan jwt:secret`, `php artisan key:generate`) — never reuse the values from another environment.
- `APP_DEBUG` must be `false` in any environment reachable from the internet, to avoid leaking stack traces and configuration values.
- `config/cors.php` currently allows all origins (`allowed_origins => ['*']`) with `supports_credentials` set to `false`. Since the API uses bearer tokens rather than cookies for authentication, this is safe as shipped, but you should scope it down to your actual frontend origin(s) if you deploy this.
- Outgoing mail (registration links, Open Day confirmations, notification e-mails) uses PHP's built-in `mail()`. For real deployments, configure a proper mail driver (SMTP, SES, etc.) via `config/mail.php` instead.

## Known limitations

This codebase was written by a high-school student as a personal/school project and was later revisited to harden the most impactful issues before publishing (see below). It was never meant to be a hardened production system, so a few things are still worth knowing if you build on it:

- Some mutating actions (e.g. adding a book, adding a tutoring offer) are exposed on `GET` routes instead of `POST`, which is not RESTful and can make them easier to trigger unintentionally (e.g. via link prefetching). Fixing this would require corresponding frontend changes.
- Open Day booking confirmation uses a timestamp (`time()`) combined with the student's e-mail as the confirmation token, rather than a dedicated random token. This is a much smaller information leak than the registration flow (fixed below), but a future revision should replace it with a random, single-use token as well.
- There is no automated test suite covering the controllers beyond the default Laravel example tests.

## Security fixes applied before publication

A security review of this archived codebase found and fixed the following issues:

1. **Predictable account-registration token** — `UserVariables::preregister` generated the one-time registration link using `md5($email)`. Since school e-mail addresses follow a predictable pattern, anyone could compute a valid token for any student and call `/api/finalize` directly to set that student's password (full account takeover) without ever intercepting the e-mail. Fixed by generating a random, unguessable token (`Str::random(40)`) and invalidating it after use.
2. **SSRF via image proxy endpoints** — `UserVariables::prendiimg` fetched an arbitrary, fully attacker-controlled URL server-side (via Guzzle) and returned the response body, which could be used to probe internal network services or cloud metadata endpoints. Fixed by restricting the endpoint to Instagram's CDN hosts (`*.cdninstagram.com`, `*.fbcdn.net`) and validating the URL scheme. The related `trovaimmagine` endpoint was similarly hardened to only accept a valid Instagram username.
3. **Broken object-level authorization (IDOR)** — `VenditeController::elimina` and `TutorController::eliminatutoraggio` deleted a sale ad / tutoring offer by ID without checking that it belonged to the authenticated user, allowing any logged-in user to delete anyone else's listings. Fixed by verifying ownership before deletion.
4. **E-mail header injection** — several endpoints (`preregister`, `prenotaopenday`, notification e-mails) passed user-supplied e-mail addresses straight into PHP's `mail()` function without validation, which could allow header injection (e.g. adding `Bcc`/`Cc` headers to send spam through the application's mail relay). Fixed by validating all addresses with `filter_var(..., FILTER_VALIDATE_EMAIL)` before sending.

No secrets, credentials, or `.env` files were ever committed to this repository.

## License

This project is released under the [MIT License](LICENSE).
