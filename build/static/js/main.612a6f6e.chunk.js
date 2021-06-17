(this["webpackJsonptest-ihub"]=this["webpackJsonptest-ihub"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},125:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(34),i=a.n(s),r=(a(109),a(110),a(13)),l=a(10),o=a(24),u=(a(111),a(3)),j=function(e){var t=e.history;return Object(u.jsxs)("div",{className:"page-404",children:[Object(u.jsx)("h2",{children:"404"}),Object(u.jsx)("h3",{children:"Page not found"}),Object(u.jsxs)("div",{className:"button-block",children:[Object(u.jsx)(o.b,{className:"page404-button",onClick:t.goBack,children:"Go back"}),Object(u.jsx)(o.b,{className:"page404-button",to:"/",children:"Go to the home page"})]})]})},d=(a(117),a(14)),p=function(e){return e.allItems.data},b=function(e){return e.allItems.isLoading},h=a(26),f=(a(118),a(20)),m=a.n(f),v=a(31),O=(a(120),"ALL_ITEMS_LOADING"),x="LOAD_ALL_ITEMS",y="ADD_NEW_ITEM",_="TOGGLE_ITEM",g=function(e){return{type:O,payload:e}},N=function(e){return{type:y,payload:e}},w=function(e,t){return{type:_,payload:{newItem:e,id:t}}},D=a(72),F=(D.a.initializeApp({apiKey:"AIzaSyBYIWdex_YmrGYP20rQGyzEX87MDXyw3ko",authDomain:"test-ihub.firebaseapp.com",projectId:"test-ihub",storageBucket:"test-ihub.appspot.com",messagingSenderId:"279374863024",appId:"1:279374863024:web:f3e392561b4d04ec5cf975"}),D.a.firestore()),S=function(e){return function(){var t=Object(v.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(w(e,e.id)),t.next=3,F.collection("specialists").doc(e.name).update(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(v.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(N(e)),t.next=3,F.collection("specialists").doc(e.name).set(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){var t=e.isFavourite,a=e.isDisfavourite,c=e.textContent,n=e.id,s=Object(d.b)(),i=Object(d.c)(p).find((function(e){return e.id===n})),l=i.isFavourite,o=i.isDisfavourite,j=function(){var e=Object(v.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==t?(l=!l,o&&(o=!o)):(o=!o,l&&(l=!l)),a=Object(r.a)(Object(r.a)({},i),{},{isFavourite:l,isDisfavourite:o}),s(S(a));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("button",{className:t||a?"active__button":"non-active__button",onClick:j,children:c})},C=function(e){var t=e.className,a=e.name,c=e.email,n=e.isFavourite,s=e.isDisfavourite,i=e.specialty,r=e.id;return Object(u.jsxs)("li",{className:t,children:[Object(u.jsx)("h3",{children:a}),Object(u.jsxs)("p",{children:["Specialty: ",i]}),Object(u.jsxs)("p",{children:["Email: ",c]}),Object(u.jsx)(A,{id:r,isFavourite:n,textContent:"Favourites"}),Object(u.jsx)(A,{id:r,isDisfavourite:s,textContent:"Disfavourites"})]})},I=C;C.defaultProps={className:"",name:"",email:"",article:""};var T=a(58),L=(a(125),function(e){var t,a=e.items,n=[{label:"All specialists",value:"all"},{label:"Psychologists",value:"psychologist"},{label:"Psychotherapists",value:"psychotherapist"},{label:"Psychiatrists",value:"psychiatrist"}],s=Object(c.useState)(n[0]),i=Object(h.a)(s,2),r=i[0],l=i[1];switch(r.value){case n[1].value:t=a.filter((function(e){return e.specialty===n[1].value}));break;case n[2].value:t=a.filter((function(e){return e.specialty===n[2].value}));break;case n[3].value:t=a.filter((function(e){return e.specialty===n[3].value}));break;default:t=a}var o=t.map((function(e,t){return Object(u.jsx)(I,{name:e.name,email:e.email,isFavourite:e.isFavourite,isDisfavourite:e.isDisfavourite,specialty:e.specialty,id:e.id},t)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"specialists__select",children:[Object(u.jsx)("h4",{className:"specialists__select--title",children:"Choose the required specialty"}),Object(u.jsx)(T.a,{type:"text",options:n,defaultValue:r,className:"specialists__select--field",onChange:function(e){return l(e)}})]}),Object(u.jsx)("ul",{className:"specialists__content",children:o.length?o:Object(u.jsx)("h3",{className:"specialists__empty",children:"Unfortunately, there are no such specialists."})})]})}),P=function(e){var t,a=e.content,c=Object(d.c)(p);switch(a){case"favourites":t=c.filter((function(e){return e.isFavourite}));break;case"disfavourites":t=c.filter((function(e){return e.isDisfavourite}));break;default:t=c}var n=t.length?Object(u.jsx)(L,{items:t}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"none-items",children:"At the moment there are no specialists"}),Object(u.jsx)(o.b,{className:"page404-button",to:"/add-specialist",children:"Add a new specialist"})]});return Object(u.jsx)("div",{className:"tab__container",children:n})},E=a(40),q=a(45),G=q.a().shape({name:q.b().required("Required").min(2,"The name is too short!").max(50,"The name is too long!"),email:q.b().email("Invalid email").required("Required"),specialty:q.b().required("Required")}),M=[{value:"psychologist",label:"Psychologist"},{value:"psychotherapist",label:"Psychotherapist"},{value:"psychiatrist",label:"Psychiatrist"}],B=function(){var e=Object(d.b)(),t=Object(c.useState)(null),a=Object(h.a)(t,2),n=a[0],s=a[1],i=function(){var t=Object(v.a)(m.a.mark((function t(a){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=Object(r.a)(Object(r.a)({},a),{},{isFavourite:!1,isDisfavourite:!1,id:"".concat(a.name.split(" ").join(""),"-").concat(a.specialty)}),e(k(c)),s(null);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)(E.c,{initialValues:{name:"",email:"",specialty:null},validationSchema:G,onSubmit:function(e,t){var a=t.resetForm;i(e),a()},children:function(e){var t=e.errors,a=e.touched,c=e.setFieldValue;e.values;return Object(u.jsxs)(E.b,{className:"add-spec__form",children:[Object(u.jsx)("label",{className:"add-spec__label",children:"Specialist name"}),Object(u.jsx)(E.a,{type:"text",name:"name",placeholder:"Add specialist name",className:"add-spec__input"}),t.name&&a.name?Object(u.jsx)("div",{children:t.name}):null,Object(u.jsx)("label",{className:"add-spec__label",children:"Specialty"}),Object(u.jsx)(T.a,{name:"specialty",options:M,placeholder:"Choose specialty",value:n,className:"add-spec__select",onChange:function(e){s({label:M.find((function(t){return t.value===e.value})).label,value:e.value}),c("specialty",e.value)}}),t.specialty&&a.specialty?Object(u.jsx)("div",{children:t.specialty}):null,Object(u.jsx)("label",{className:"add-spec__label",children:"Specialist email"}),Object(u.jsx)(E.a,{type:"email",name:"email",placeholder:"Add specialist email",label:"Specialist email",className:"add-spec__input"}),t.email&&a.email?Object(u.jsx)("div",{children:t.email}):null,Object(u.jsx)(E.a,{type:"submit",name:"submit",value:"Add new specialist to DB",className:"add-spec__submit"})]})}})},R=(a(234),function(e){var t=e.title,a=e.result;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{className:"analitycs__title",children:t}),Object(u.jsx)("p",{className:"analitycs__result",children:a})]})}),z=function(){var e=Object(d.c)(p),t=e.filter((function(e){return"psychologist"===e.specialty})),a=e.filter((function(e){return"psychotherapist"===e.specialty})),c=e.filter((function(e){return"psychiatrist"===e.specialty})),n=e.filter((function(e){return e.isFavourite})),s=e.filter((function(e){return e.isDisfavourite}));return Object(u.jsxs)("div",{className:"analityc__container",children:[Object(u.jsx)("h2",{className:"analityc__header",children:"Analitycs"}),Object(u.jsxs)("div",{className:"amalityc__content",children:[Object(u.jsx)(R,{title:"Total specialists",result:e.length}),Object(u.jsx)(R,{title:"Total psychologist",result:t.length}),Object(u.jsx)(R,{title:"Total psychotherapist",result:a.length}),Object(u.jsx)(R,{title:"Total psychiatrist",result:c.length}),Object(u.jsx)(R,{title:"Total favourites",result:n.length}),Object(u.jsx)(R,{title:"Total disfavourites",result:s.length})]})]})},V=function(){return Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)(P,{content:"all"})}}),Object(u.jsx)(l.a,{path:"/favourites",exact:!0,component:function(){return Object(u.jsx)(P,{content:"favourites"})}}),Object(u.jsx)(l.a,{exact:!0,path:"/disfavourites",component:function(){return Object(u.jsx)(P,{content:"disfavourites"})}}),Object(u.jsx)(l.a,{exact:!0,path:"/add-specialist",component:B}),Object(u.jsx)(l.a,{exact:!0,path:"/analitycs",component:z}),Object(u.jsx)(l.a,{path:"*",component:function(e){return Object(u.jsx)(j,Object(r.a)({},e))}})]})},W=(a(235),[{path:"/",textContent:"All Specialists"},{path:"/favourites",textContent:"Favorites Specialists",counter:!0},{path:"/disfavourites",textContent:"Disfavourites Specialists",counter:!0},{path:"/add-specialist",textContent:"Add Specialist"},{path:"/analitycs",textContent:"Analytics"}]),Y=function(){var e=Object(d.c)(p),t=e.filter((function(e){return e.isFavourite})).length,a=e.filter((function(e){return e.isDisfavourite})).length,c="header__counter",n=W.map((function(e,n){return Object(u.jsxs)(o.c,{exact:!0,to:e.path,activeStyle:{color:"coral"},className:"header__item",children:[e.textContent,e.counter&&"/favourites"===e.path?t>0&&Object(u.jsx)("span",{className:c,children:t}):"/disfavourites"===e.path?a>0&&Object(u.jsx)("span",{className:c,children:a}):null]},n)}));return Object(u.jsx)("div",{className:"header__bg",children:Object(u.jsx)("div",{className:"header__container",children:Object(u.jsx)("nav",{className:"header__content",children:n})})})},J=(a(236),function(){return Object(u.jsx)("div",{className:"loader-window",children:Object(u.jsx)("div",{className:"loader"})})}),X=function(){var e=Object(d.b)(),t=Object(d.c)(b);return Object(c.useEffect)((function(){e(function(){var e=Object(v.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0)),e.next=3,F.collection("specialists").get();case 3:a=e.sent,t((c=a.docs.map((function(e){return e.data()})),{type:x,payload:c})),t(g(!1));case 6:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(u.jsx)(J,{}):Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(Y,{}),Object(u.jsx)(V,{})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,238)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))},Q=a(39),U=a(103),H=a(17),Z={isLoading:!1,data:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});case O:return Object(r.a)(Object(r.a)({},e),{},{isLoading:t.payload});case y:return Object(r.a)(Object(r.a)({},e),{},{data:[].concat(Object(H.a)(e.data),[t.payload])});case _:var a=t.payload,c=a.newItem,n=a.id,s=e.data.map((function(e){return e.id===n?c:e}));return Object(r.a)(Object(r.a)({},e),{},{data:s});default:return e}},ee=Object(Q.combineReducers)({allItems:$}),te=a(104),ae=Object(Q.createStore)(ee,Object(U.composeWithDevTools)(Object(Q.applyMiddleware)(te.a)));i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d.a,{store:ae,children:Object(u.jsx)(o.a,{children:Object(u.jsx)(X,{})})})}),document.getElementById("root")),K()}},[[237,1,2]]]);
//# sourceMappingURL=main.612a6f6e.chunk.js.map