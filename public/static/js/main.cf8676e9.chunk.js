(this.webpackJsonpimparoredux=this.webpackJsonpimparoredux||[]).push([[0],{139:function(e,t,n){},142:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(11),c=n.n(s),r=(n(139),n(140),n(141),n(142),n(18)),o=n(19),l=n(21),j=n(20),u=n(10),h=n(14),d=n.n(h),b=n(1),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={value:"",risultato:[],ricerca:!1,studente:{}},e.onChange=function(t){e.setState({value:t}),console.log(e.state)},e.clear=function(){e.setState({value:""})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=u.c.Item,n={headers:{Authorization:"Bearer "+localStorage.getItem("COToken")}},i=this.state.risultato.map((function(i){return Object(b.jsx)(t,{onClick:function(){return t=i.id,e.setState({ricerca:null}),void d.a.get("/api/visualizza?id="+t,n).then((function(t){console.log(t),e.setState({studente:t.data.studente})}));var t},extra:Object(b.jsxs)("a",{href:"https://instagram.com/"+i.instagram,children:["@",i.instagram]}),children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{style:{height:"100%"},src:"https://eu.ui-avatars.com/api/?name="+i.nome+"&rounded=true&background=random&size=75&color=fff"}),i.nome]})})}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.d,{style:{width:"200px",marginTop:"-25%"},placeholder:"Cerca uno studente",cancelText:"Cancella",onChange:function(t){e.onChange(t)},onSubmit:function(t){d.a.get("/api/ricerca?ricerca="+e.state.value,n).then((function(t){console.log(t),e.setState({ricerca:!0,risultato:t.data.risposta})}))},maxLength:50}),Object(b.jsxs)("div",{children:[!1===this.state.ricerca&&Object(b.jsxs)("p",{style:{marginLeft:"3%",marginRight:"3%",color:"#888",fontSize:"16px"},children:["Effettua una ricerca.",Object(b.jsx)("br",{}),"I risultati appariranno qui. "]}),!0===this.state.ricerca&&this.state.risultato!==[]&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.c,{style:{width:"300px"},children:i})]}),!0===this.state.ricerca&&0===this.state.risultato.length&&Object(b.jsx)("p",{style:{marginLeft:"3%",marginRight:"3%",color:"#888",fontSize:"16px"},children:"Nessun risultato trovato. "}),null===this.state.ricerca&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsxs)("center",{children:[Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.a,{style:{backgroundColor:"black",color:"white",width:"300px"},onClick:function(){e.setState({ricerca:!0})},children:"Indietro"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)("img",{style:{height:"100%"},src:"https://eu.ui-avatars.com/api/?name="+this.state.studente.name+"&rounded=true&background=0fb340&size=175&color=fff"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsxs)(u.c,{style:{width:"300px"},children:[Object(b.jsx)(t,{extra:this.state.studente.name,children:"Nome"}),Object(b.jsx)(t,{extra:this.state.studente.status,children:"Stato"}),Object(b.jsx)(t,{extra:Object(b.jsx)("a",{href:"https://instagram.com/"+this.state.studente.instagram,children:"@"+this.state.studente.instagram}),children:"Profilo Instagram"}),Object(b.jsx)(t,{extra:Object(b.jsx)(u.a,{onClick:function(){var t;alert(e.state.studente.phonenumber),t=e.state.studente.id,d.a.get("/api/inviamail?id="+t,n).then((function(e){console.log(e)}))},children:"Visualizza"}),children:"Numero di telefono"}),Object(b.jsx)(t,{extra:this.state.studente.email,children:"Indirizzo istituzionale"})]}),Object(b.jsxs)("p",{style:{marginLeft:"3%",marginRight:"3%",color:"#888",fontSize:"16px"},children:["Per tutelare la privacy degli utenti, ogni volta che si visualizza un numero di telefono l'interessato riceve una mail.",Object(b.jsx)("br",{}),"Se questo studente non si \xe8 registrato, non potrai vedere il suo numero di telefono, e a lui non arriver\xe0 la mail di notifica.",Object(b.jsx)("br",{})]})]})]})]})]})}}]),n}(a.a.Component),g=n(90),O=n(240),f=n(241),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).refreshPage=function(e){e&&(window.location.hash=e),window.location.reload()},i.state={mostra:!1,ISBN:"",esiste:null,titolo:null,autori:null,info:null},i}return Object(o.a)(n,[{key:"toastSuccess",value:function(){u.f.success("Annuncio Eliminato",3)}},{key:"render",value:function(){var e=this,t=(f.a,u.c.Item),n=d.a.create({timeout:2e4,headers:{Authorization:"Bearer "+localStorage.getItem("COToken")}}),i={headers:{Authorization:"Bearer "+localStorage.getItem("COToken")}};return Object(b.jsxs)("div",{children:[Object(b.jsx)(g.Get,{url:"/api/me",instance:n,children:function(e,n,i,a,s){return e?Object(b.jsxs)("div",{children:["Qualcosa \xe8 andato storto: ",e.message," ",Object(b.jsx)("button",{onClick:function(){return a({params:{reload:!0}})},children:"Riprova"})]}):i?Object(b.jsx)(O.a,{active:!0}):null!==n?Object(b.jsxs)("center",{children:[Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)("img",{style:{height:"100%"},src:"https://eu.ui-avatars.com/api/?name="+n.data.name+"&rounded=true&background=0fb340&size=175&color=fff"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsxs)(u.c,{style:{width:"300px"},children:[Object(b.jsx)(t,{extra:n.data.name,children:"Nome"}),Object(b.jsx)(t,{extra:n.data.status,children:"Stato"}),Object(b.jsx)(t,{extra:Object(b.jsx)("a",{href:"https://instagram.com/"+n.data.instagram,children:"@"+n.data.instagram}),children:"Profilo Instagram"}),Object(b.jsx)(t,{extra:n.data.phonenumber,children:"Numero di telefono"}),Object(b.jsx)(t,{extra:n.data.email,children:"Indirizzo istituzionale"})]}),Object(b.jsxs)("p",{style:{marginLeft:"3%",marginRight:"3%",color:"#888",fontSize:"16px"},children:["Riceverai una mail ogni volta che qualcuno visualizza il tuo numero di telefono.",Object(b.jsx)("br",{}),"Per cambiare i tuoi dati personali, come lo stato, il profilo instagram e il telefono, contatta Giulio Zingrillo."]}),Object(b.jsx)(u.g,{size:"xl"})]}):null}}),Object(b.jsx)("h1",{style:{fontFamily:"Righteous"},children:"I miei annunci"}),Object(b.jsx)(g.Get,{url:"/api/lemievendite",instance:n,children:function(n,a,s,c,r){if(n)return n.message;if(s)return Object(b.jsx)(O.a,{active:!0});if(null!==a&&a.data.length>0){var o=a.data.map((function(n){return Object(b.jsx)(t,{extra:Object(b.jsx)(u.a,{inline:!0,size:"small",style:{marginRight:"4px",cursor:"pointer"},onClick:function(){var t;t=n.id,d.a.delete("/api/elimina?id="+t,i).then((function(){e.refreshPage("#profilo")}))},children:"Elimina"}),children:n.isbn})}));return Object(b.jsxs)("center",{children:[Object(b.jsx)(u.c,{style:{width:"300px"},children:Object(b.jsx)("ul",{children:o})}),Object(b.jsx)(u.g,{size:"xl"})]})}return Object(b.jsx)("p",{style:{marginLeft:"3%",marginRight:"3%",color:"#888",fontSize:"16px"},children:"Al momento non hai annunci attivi"})}}),!0===this.state.mostra&&Object(b.jsxs)(u.c,{style:{width:"300px"},children:[Object(b.jsx)(u.b,{name:"ISBN",clear:!0,type:"number",placeholder:"non inserire lettere",onChange:function(t){e.setState({ISBN:t}),console.log(e.state)},children:"ISBN"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{onClick:function(){d.a.get("/api/vediseesiste?isbn="+e.state.ISBN,i).then((function(t){console.log(t),e.setState({esiste:t.data.Esiste,mostra:null}),console.log(e.state)}))},style:{cursor:"pointer",fontFamily:"Righteous"},children:"Invia"})]}),!1===this.state.mostra&&Object(b.jsx)(u.a,{onClick:function(){e.setState({mostra:!0})},style:{cursor:"pointer",fontFamily:"Righteous"},children:"Vendi"}),!1===this.state.esiste&&Object(b.jsxs)(u.c,{style:{width:"300px"},children:[Object(b.jsx)("h3",{children:"Sei il primo a vendere questo libro. Aggiungi un po' di dati."}),Object(b.jsx)(u.b,{name:"Titolo completo",clear:!0,placeholder:"",onChange:function(t){e.setState({titolo:t}),console.log(e.state)},children:"Titolo"}),Object(b.jsx)(u.b,{name:"Autori",clear:!0,placeholder:"",onChange:function(t){e.setState({autori:t}),console.log(e.state)},children:"Autori"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{onClick:function(){d.a.get("/api/aggiungi?isbn="+e.state.ISBN+"&autori="+e.state.autori+"&titolo="+e.state.titolo,i).then((function(t){console.log(t),e.setState({esiste:!0}),u.f.success("Libro inserito con successo",3)}))},style:{cursor:"pointer",fontFamily:"Righteous"},children:"Invia"})]}),!0===this.state.esiste&&Object(b.jsxs)(u.c,{style:{width:"300px"},children:[Object(b.jsx)("h3",{children:"Aggiungi, se vuoi, delle info sullo stato del tuo libro"}),Object(b.jsx)(u.b,{name:"Info",clear:!0,placeholder:"",onChange:function(t){e.setState({info:t}),console.log(e.state)},children:"Info"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{onClick:function(){d.a.get("/api/vendi?isbn="+e.state.ISBN+"&note="+e.state.info,i).then((function(t){u.f.success("Annuncio inserito con successo. Ricarica la pagina per vederlo qui.",3),e.refreshPage("#profilo"),e.setState({mostra:!1,ISBN:"",esiste:null,titolo:null,autori:null,info:null})}))},style:{cursor:"pointer",fontFamily:"Righteous"},children:"Invia"})]}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{})]})}}]),n}(a.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={value:"",risultato:[],ricerca:!1,studente:{},ISBN:"",libro:{}},e.infoautore=function(t){d.a.get("/api/visualizza?id="+t,e.config).then((function(e){return console.log(e),console.log(e.data.studente.name),e.data.studente.name}))},e.config={headers:{Authorization:"Bearer "+localStorage.getItem("COToken")}},e.onChange=function(t){e.setState({value:t}),console.log(e.state)},e.clear=function(){e.setState({value:""})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=u.c.Item,n=(d.a.create({timeout:2e3,headers:{Authorization:localStorage.getItem("COToken")}}),function(){d.a.get("/api/mostralibri?isbn="+e.state.ISBN,i).then((function(t){console.log(t),e.setState({libro:t.data})})),d.a.get("/api/cercavendita?isbn="+e.state.ISBN,i).then((function(t){console.log(t),e.setState({ricerca:!0,risultato:t.data})}))}),i={headers:{Authorization:"Bearer "+localStorage.getItem("COToken")}},a=this.state.risultato.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(t,{extra:"Venditore",thumb:"https://eu.ui-avatars.com/api/?name="+e.nomevenditore+"&rounded=true&background=random&size=75&color=fff",children:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("b",{children:e.nomevenditore})})}),Object(b.jsx)(t,{wrap:!0,multipleLine:!0,extra:Object(b.jsx)("span",{children:"Note"}),children:e.note})]})}));return Object(b.jsxs)("div",{children:[!1===this.state.ricerca&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.c,{style:{width:"300px",marginTop:"-15%"},children:Object(b.jsx)(u.b,{name:"ISBN",clear:!0,type:"number",placeholder:"non inserire lettere",onChange:function(t){e.setState({ISBN:t}),console.log(e.state)},children:"ISBN"})}),Object(b.jsx)(u.a,{onClick:function(){return n()},style:{cursor:"pointer",fontFamily:"Righteous"},children:"Invia"})]}),!0===this.state.ricerca&&0===this.state.libro.length&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.c,{style:{marginTop:"-15%",width:"300px"},children:Object(b.jsx)(u.b,{name:"ISBN",style:{width:"300px"},clear:!0,type:"number",placeholder:"non inserire lettere",onChange:function(t){e.setState({ISBN:t}),console.log(e.state)},children:"ISBN"})}),Object(b.jsx)(u.a,{onClick:function(){return n()},style:{cursor:"pointer",fontFamily:"Righteous"},children:"Invia"}),Object(b.jsx)("p",{style:{marginLeft:"3%",marginRight:"3%",color:"#888",fontSize:"16px"},children:" Spiacente, questo libro non \xe8 presente sul nostro database."})]}),!0===this.state.ricerca&&this.state.libro&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{style:{backgroundColor:"black",color:"white"},onClick:function(){e.setState({ricerca:!1})},children:"Indietro"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)("img",{style:{marginTop:"-50px",height:"200px"},src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2Fios7%2FFiles%2Fopen_book1600.png&f=1&nofb=1"}),Object(b.jsxs)("center",{children:[Object(b.jsxs)(u.c,{style:{width:"300px"},children:[Object(b.jsx)(t,{extra:Object(b.jsx)("b",{children:this.state.libro.titolo}),children:"Titolo"}),Object(b.jsx)(t,{extra:this.state.libro.autori,children:"Autori"}),Object(b.jsx)(t,{extra:this.state.libro.isbn,children:"Codice ISBN"})]}),Object(b.jsx)(u.g,{})]}),Object(b.jsx)("h2",{children:Object(b.jsx)("b",{children:"Annunci"})}),Object(b.jsx)(u.c,{children:a}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{})]})]})}}]),n}(a.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).refreshPage=function(e){e&&(window.location.hash=e)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[(null===localStorage.getItem("COToken")&&(window.location="/accedi"),null),Object(b.jsxs)(u.e,{tabs:[{title:"Studenti"},{title:"Mercatino"},{title:"Il mio profilo"}],initialPage:function(){switch(window.location.hash){case"#profilo":return 2;default:case"#mercatino":return 1;case"#studenti":return 0}}(),tabBarPosition:"bottom",renderTab:function(e){return Object(b.jsx)("span",{children:e.title})},animated:!0,tabBarUnderlineStyle:{backgroundColor:"black",border:"1px solid black"},useOnPan:!0,tabBarActiveTextColor:"black",children:[Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"500px",backgroundColor:"#fff"},children:Object(b.jsx)(x,{})}),Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"500px",backgroundColor:"#fff"},children:Object(b.jsx)(p,{})}),Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"500px",backgroundColor:"#fff"},children:Object(b.jsx)(m,{})})]})]})}}]),n}(a.a.Component),y=n(37),S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",error:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)("h1",{style:{fontFamily:"Righteous"},children:"Accedi"}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.b,{name:"email",clear:!0,onChange:function(t){e.setState({email:t}),console.log(e.state)},children:"Email"}),Object(b.jsx)(u.b,{type:"password",name:"password",clear:!0,onChange:function(t){e.setState({password:t}),console.log(e.state)},children:"Password"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{onClick:function(){return function(){var t={email:e.state.email,password:e.state.password};d.a.post("/api/login",t).then((function(t){console.log(t),!1===t.data.token?e.setState({error:!0}):(e.setState({error:!1}),localStorage.setItem("COToken",t.data.token),window.location="/")}))}()},children:"Invia"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(y.b,{style:{color:"#0fb340"},to:"/registrati",children:"Non hai un account? Registrati qui!"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),!0===this.state.error&&Object(b.jsx)("p",{style:{color:"red"},children:"I dati inseriti non sono corretti."})]})]})}}]),n}(a.a.Component),z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={hash:e.match.params.hash,email:"",success:null,error:!1,instagram:"",phonenumber:"",password:"",status:"",OK:!1},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/confirm?hash="+this.state.hash).then((function(t){console.log(t),!1===t.data.Success?e.setState({success:!1}):e.setState({success:!0})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsxs)("h1",{style:{fontFamily:"Righteous"},children:["Registrati.",Object(b.jsx)("br",{}),"Ci basta la tua mail istituzionale."]}),!1===this.state.success&&!1===this.state.OK&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Il codice che hai inserito \xe8 gi\xe0 stato utilizzato o \xe8 corrotto."}),Object(b.jsx)("h2",{children:"Se il problema persiste, contattaci."}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{})]}),!0===this.state.success&&!1===this.state.OK&&Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("h1",{children:"Aggiungi qualche dato per completare la registrazione."}),Object(b.jsxs)("h3",{children:["Numero di telefono e instagram sono facoltativi, ma aiutano gli altri a trovarti pi\xf9 facilmente.",Object(b.jsx)("br",{}),"Riceverai una mail di notifica ogni volta che qualcuno vede il tuo numero di telefono."]}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.b,{clear:!0,placeholder:"Senza la @",onChange:function(t){e.setState({instagram:t}),console.log(e.state)},children:"Instagram"}),Object(b.jsx)(u.b,{type:"number",clear:!0,onChange:function(t){e.setState({phonenumber:t}),console.log(e.state)},children:"Telefono"}),Object(b.jsx)(u.b,{type:"password",extra:"Campo Obbligatorio",clear:!0,onChange:function(t){e.setState({password:t}),console.log(e.state)},children:"Password"}),Object(b.jsx)(u.b,{clear:!0,onChange:function(t){e.setState({status:t}),console.log(e.state)},children:"Stato"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{onClick:function(){return function(){var t={instagram:e.state.instagram,password:e.state.password,phonenumber:e.state.phonenumber,status:e.state.status,hash:e.state.hash};""!==e.state.password&&d.a.post("/api/finalize",t).then((function(t){console.log(t),e.setState({OK:!0})}))}()},children:"Invia"}),"  "]}),"  "]}),!0===this.state.OK&&Object(b.jsxs)("h1",{children:["La tua registrazione \xe8 completata.",Object(b.jsx)("br",{}),Object(b.jsx)(y.b,{style:{color:"#0fb340"},to:"/accedi",children:"Vai al Login"})]}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{})]})}}]),n}(a.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={email:"",success:!1,error:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsx)(u.g,{size:"xl"}),Object(b.jsxs)("h1",{style:{fontFamily:"Righteous"},children:["Registrati.",Object(b.jsx)("br",{}),"Ci basta la tua mail istituzionale."]}),!0===this.state.success&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Ti abbiamo inviato una mail. Clicca sull'indirizzo in essa contenuto."}),Object(b.jsx)("h2",{children:"Controlla anche la spam"})]}),!1===this.state.success&&Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.b,{name:"email",clear:!0,onChange:function(t){e.setState({email:t}),console.log(e.state)},children:"Email"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.a,{onClick:function(){return function(){var t={email:e.state.email};d.a.post("/api/preregister",t).then((function(t){console.log(t),!1===t.data.Success?e.setState({error:!0}):e.setState({success:!0})}))}()},children:"Invia"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),Object(b.jsx)(y.b,{style:{color:"#0fb340"},to:"/accedi",children:"Hai gi\xe0 un account? Accedi!"}),Object(b.jsx)(u.g,{}),Object(b.jsx)(u.g,{}),!0===this.state.error&&Object(b.jsxs)("p",{style:{color:"red"},children:["La registrazione non \xe8 andata a buon fine. Controlla che l'indirizzo che hai inserito sia corretto e di non esserti gi\xe0 registrato.",Object(b.jsx)("br",{}),"Se proprio non riesci, potrebbe esserci un errore di trascrizione. Contatta il Collettivo Locke."]})]})]})}}]),n}(a.a.Component),C=n(15);var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(y.a,{children:[Object(b.jsxs)("header",{style:{fontFamily:"Righteous",height:"15%",padding:"2%",backgroundColor:"#0fb340",fontFace:"Verdana",fontSize:"xx-large",marginBottom:"0%",zIndex:900,width:"100%",marginTop:0},children:[Object(b.jsx)("span",{style:{color:"white"},children:"Cavour"}),".me"]}),Object(b.jsxs)(C.c,{children:[Object(b.jsx)(C.a,{path:"/",exact:!0,component:v}),Object(b.jsx)(C.a,{path:"/accedi",component:S}),Object(b.jsx)(C.a,{path:"/registrati",exact:!0,component:w}),Object(b.jsx)(C.a,{path:"/registrati/:hash",component:z}),Object(b.jsx)(C.a,{children:Object(b.jsx)("h1",{children:"Pagina non trovata. Ti consigliamo di tornare alla pagina principale."})})]}),Object(b.jsx)("footer",{style:{color:"white",fontFamily:"Righteous",height:"5%",padding:"2%",backgroundColor:"#0fb340",fontFace:"Verdana",fontSize:"small",marginBottom:"0%",width:"100%",marginTop:0},children:"Liceo Cavour di Roma - Tutti i diritti riservati"})]})})},I=n(55),A=n(93),F=n.n(A),B=n(131);function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var N=Object(I.b)("counter/fetchCount",function(){var e=Object(B.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(I.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(N.pending,(function(e){e.status="loading"})).addCase(N.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),P=T.actions,L=(P.increment,P.decrement,P.incrementByAmount,T.reducer),q=Object(I.a)({reducer:{counter:L}}),E=n(132),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E.a,{store:q,children:Object(b.jsx)(k,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}},[[236,1,2]]]);
//# sourceMappingURL=main.cf8676e9.chunk.js.map