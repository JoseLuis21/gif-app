(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(25),r=a.n(c),i=a(16),s=a(11),o=a(24);a(61),a(52);o.a.initializeApp({apiKey:"AIzaSyDPWxFud-iEAmc-9vuHZm5KvOevS9HP3tU",authDomain:"react-app-escalab.firebaseapp.com",projectId:"react-app-escalab",storageBucket:"react-app-escalab.appspot.com",messagingSenderId:"1041021507893",appId:"1:1041021507893:web:c491f07dc68338c77e147c"});o.a.firestore();var u=new o.a.auth.GoogleAuthProvider,j=a(20),l=a.n(j),d=a(28),b=a(38),O=a.n(b),p="[Auth Login]",h="[Auth Logout]",m="[UI] Start Loading",f="[UI] Finish Loading",x="[UI] Set error",g="[UI] Remove error",v=function(){return{type:f}},y=function(e,t){return function(a){a({type:m}),o.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(N(t.uid,"jose")),a(v())})).catch((function(e){O.a.fire({title:"Error!",text:e,icon:"error",confirmButtonText:"OK"}),a(v())}))}},N=function(e,t){return{type:p,payload:{uid:e,displayName:t}}},w=function(){return{type:h}},E=a(26),_=a(5),S=a(29),I=a(7),A=a(2),k=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],r=a[1];return[c,function(e){var t=e.target;r(Object(I.a)(Object(I.a)({},c),{},Object(S.a)({},t.name,t.value)))},function(){r(e)}]}({email:"escalab@gmail.com",password:"123456"}),c=Object(s.a)(a,2),r=c[0],j=c[1],l=r.email,d=r.password;return Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsx)("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto",children:Object(A.jsx)("div",{className:"card card-signin my-5",children:Object(A.jsxs)("div",{className:"card-body",children:[Object(A.jsx)("h2",{className:"card-title text-center",children:"Iniciar sesion"}),Object(A.jsxs)("form",{className:"form-signin",onSubmit:function(t){t.preventDefault(),e(y(l,d))},children:[Object(A.jsxs)("div",{className:"form-label-group",children:[Object(A.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",name:"email",value:l,onChange:j,placeholder:"Email address",required:!0}),Object(A.jsx)("label",{children:"Email address"})]}),Object(A.jsxs)("div",{className:"form-label-group",children:[Object(A.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",name:"password",value:d,onChange:j,placeholder:"Password",required:!0}),Object(A.jsx)("label",{children:"Password"})]}),Object(A.jsx)("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",disabled:t,children:"Iniciar sesion"}),Object(A.jsx)("hr",{className:"my-4"}),Object(A.jsxs)("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",onClick:function(t){t.preventDefault(),e((function(e){o.a.auth().signInWithPopup(u).then((function(t){var a=t.user;e(N(a.uid,a.displayName))}))}))},children:[Object(A.jsx)("i",{className:"fab fa-google mr-2"})," Sign in with Google"]})]})]})})})})})},P=function(){return Object(A.jsx)("div",{children:"Register Page"})},C=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)(_.d,{children:[Object(A.jsx)(_.b,{path:"/auth/login",exact:!0,children:Object(A.jsx)(k,{})}),Object(A.jsx)(_.b,{path:"/auth/register",exact:!0,children:Object(A.jsx)(P,{})}),Object(A.jsx)(_.a,{to:"/auth/login"})]})})},D=a(30),R=function(e){var t=e.isAuthenticated,a=e.component,n=Object(D.a)(e,["isAuthenticated","component"]);return Object(A.jsx)(_.b,Object(I.a)(Object(I.a)({},n),{},{component:function(e){return t?Object(A.jsx)(a,Object(I.a)({},e)):Object(A.jsx)(_.a,{to:"/auth/login"})}}))},U=a(40),L=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(A.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(U.a)(e))})),i(""))},children:Object(A.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)}})})},B=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=5&api_key=TtJ29sB0NxRh2NkE73VtOvEoFeEtZRNR"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.title,a=e.url;return Object(A.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(A.jsx)("img",{src:a,alt:t}),Object(A.jsxs)("p",{children:[" ",t," "]})]})},T=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){B(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),r&&Object(A.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(A.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(A.jsx)(F,Object(I.a)({},e),e.id)}))})]})},q=function(){var e=Object(i.b)(),t=Object(n.useState)(["Dragon Ball Z","Madara"]),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"Escalab Gif Search... Escribe y presiona enter para buscar"}),Object(A.jsx)(L,{setCategories:r}),Object(A.jsx)("hr",{}),Object(A.jsx)("ol",{children:c.map((function(e){return Object(A.jsx)(T,{category:e},e)}))}),Object(A.jsx)("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",onClick:function(){e(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.auth().signOut();case 2:t(w());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Salir"})]})},z=function(e){var t=e.isAuthenticated,a=e.component,n=Object(D.a)(e,["isAuthenticated","component"]);return Object(A.jsx)(_.b,Object(I.a)(Object(I.a)({},n),{},{component:function(e){return t?Object(A.jsx)(_.a,{to:"/"}):Object(A.jsx)(a,Object(I.a)({},e))}}))},G=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(!1),j=Object(s.a)(u,2),l=j[0],d=j[1];return Object(n.useEffect)((function(){o.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(N(t.uid,t.displayName)),d(!0)):d(!1),r(!1)}))}),[e,r]),c?Object(A.jsx)("h1",{children:"Espera un Momento...."}):Object(A.jsx)(E.a,{children:Object(A.jsx)("div",{children:Object(A.jsxs)(_.d,{children:[Object(A.jsx)(z,{path:"/auth",isAuthenticated:l,component:C}),Object(A.jsx)(R,{path:"/",exact:!0,isAuthenticated:l,component:q}),Object(A.jsx)(_.a,{to:"/auth/login"})]})})})},J=a(17),K=a(39),M={loading:!1,msgError:null},W=Object(J.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{uid:t.payload.uid,name:t.payload.displayName};case h:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case f:return Object(I.a)(Object(I.a)({},e),{},{loading:!1});case x:return Object(I.a)(Object(I.a)({},e),{},{msgError:t.payload});case g:return Object(I.a)(Object(I.a)({},e),{},{msgError:null});default:return e}}}),Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,H=Object(J.e)(W,Z(Object(J.a)(K.a))),V=function(){return Object(A.jsx)(i.a,{store:H,children:Object(A.jsx)(G,{})})};a(59);r.a.render(Object(A.jsx)(V,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.aab0e012.chunk.js.map