(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[24],{619:function(e,t,a){"use strict";a.r(t);var r=a(23),s=a(14),c=a.n(s),n=a(8),o=a(22),l=a(75),i=a(0),d=a(234),u=a(81),j=a(84),b=a(82),p=a(235),m=a(145),f=a(643),O=a(114),x=a(10),h=a(622),v=a(1);t.default=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],N=Object(i.useState)({updateFirstName:"",updateLastName:"",updateRole:"",id:""}),y=Object(l.a)(N,2),w=y[0],g=y[1],k=Object(i.useState)({firstName:"",lastName:"",email:"",password:"",role:""}),L=Object(l.a)(k,2),D=L[0],M=L[1],_=Object(i.useState)({loader:!1,success:!1,error:""}),R=Object(l.a)(_,2),C=R[0],S=R[1],E=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(Q._id,T);case 2:(t=e.sent).error&&S(Object(n.a)(Object(n.a)({},C),{},{error:t.error})),s(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=C.loader,A=C.success,J=C.error,P=D.firstName,U=D.lastName,V=D.role,H=D.password,q=D.email,z=w.updateFirstName,B=w.updateLastName,G=w.updateRole,I=w.id,K=Object(x.b)(),Q=K.user,T=K.token;Object(i.useEffect)((function(){E()}),[]);var W=function(e){return function(t){S({error:!1,success:!1,loader:!1}),M(Object(n.a)(Object(n.a)({},D),{},Object(r.a)({},e,t.target.value)))}},X=function(){var e=Object(o.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(t);case 2:if(!(a=e.sent).error){e.next=5;break}return e.abrupt("return",S({error:a.error,loader:!1,success:!1}));case 5:g({updateFirstName:a.firstName,updateLastName:a.lastName,updateRole:a.role,id:a._id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){return function(t){S({error:!1,success:!1,loader:!1}),g(Object(n.a)(Object(n.a)({},w),{},Object(r.a)({},e,t.target.value)))}},Z=function(){var e=Object(o.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),S({error:!1,success:!1,loader:!0}),e.next=4,Object(O.a)(T,D);case 4:if(!(a=e.sent).error){e.next=7;break}return e.abrupt("return",S({error:a.error,loader:!1}));case 7:E(),S({error:!1,success:a.message,loader:!1}),M({firstName:"",lastName:"",role:"",password:"",email:""});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),S({error:!1,success:!1,loader:!0}),t.next=4,Object(O.g)(e,T,{firstName:z,lastName:B,role:G});case 4:if(!(r=t.sent).error){t.next=7;break}return t.abrupt("return",S(Object(n.a)(Object(n.a)({},C),{},{error:r.error,loader:!1})));case 7:S(Object(n.a)(Object(n.a)({},C),{},{loader:!1,success:r.message})),g(Object(n.a)(Object(n.a)({},w),{},{updateFirstName:r.firstName,updateLastName:r.lastName,updateRole:r.role})),E();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ee=function(){M({firstName:"",lastName:"",role:"",password:"",email:""}),S({error:!1,success:!1,loader:!1})},te=function(){var e=Object(o.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S({error:!1,success:!1,loader:!0}),e.next=3,Object(O.f)(t,T);case 3:if(!(a=e.sent).error){e.next=6;break}return e.abrupt("return",S({error:a.error,success:!1,loader:!1}));case 6:E(),S({error:!1,success:!1,loader:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{parent:"Accueil",content:"Utilisateurs",title:"Liste de utitlisateurs",create:!0}),Object(v.jsx)("div",{class:"modal fade myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myDefaultModalLabel",children:Object(v.jsx)("div",{class:"modal-dialog",role:"document",children:Object(v.jsxs)("div",{class:"modal-content",children:[Object(v.jsxs)("div",{class:"modal-header",children:[Object(v.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:ee,children:Object(v.jsx)("span",{"aria-hidden":"true",class:"fa fa-times"})}),Object(v.jsx)("h5",{class:"modal-title",id:"myDefaultModalLabel",children:"Nouvel utilisateur"})]}),F&&Object(v.jsx)(f.a,{color:"secondary",style:{width:"100%"}}),Object(v.jsxs)("div",{class:"modal-body",children:[(J||A)&&Object(v.jsxs)("div",{class:"alert bg-".concat(J?"danger":"success"," alert-dismissible fade show"),role:"alert",children:[Object(v.jsxs)("strong",{children:[J?"Erreur":"Succ\xe8s","!"]})," ",J||A]}),Object(v.jsx)(m.a,{icon:"fa fa-user",action:W("firstName"),value:P,type:"text",placeholder:"Nom"}),Object(v.jsx)(m.a,{icon:"fa fa-user",action:W("lastName"),value:U,type:"text",placeholder:"Postnom"}),Object(v.jsx)(m.a,{icon:"fa fa-at",action:W("email"),value:q,type:"text",placeholder:"Email"}),Object(v.jsx)(m.a,{icon:"fa fa-unlock",action:W("password"),value:H,type:"password",placeholder:"Mot de passe"}),0===Q.role&&Object(v.jsx)("div",{className:"form-group",children:Object(v.jsxs)("select",{onChange:W("role"),class:"form-control",value:V,children:[Object(v.jsx)("option",{value:"",children:"R\xf4le"}),Object(v.jsx)("option",{value:0,children:"Administrateur"}),Object(v.jsx)("option",{value:1,children:"Distributeur"}),Object(v.jsx)("option",{value:2,children:"Vendeur"})]})})]}),Object(v.jsx)(p.a,{save:Z,loader:F,cancel:ee})]})})}),Object(v.jsx)("div",{class:"modal fade myModalUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"myDefaultModalLabel",children:Object(v.jsx)("div",{class:"modal-dialog",role:"document",children:Object(v.jsxs)("div",{class:"modal-content",children:[Object(v.jsxs)("div",{class:"modal-header",children:[Object(v.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:ee,children:Object(v.jsx)("span",{"aria-hidden":"true",class:"fa fa-times"})}),Object(v.jsx)("h5",{class:"modal-title",id:"myDefaultModalLabel",children:"Modifier l'utilisateur"})]}),F&&Object(v.jsx)(f.a,{color:"secondary",style:{width:"100%"}}),Object(v.jsxs)("div",{class:"modal-body",children:[(J||A)&&Object(v.jsxs)("div",{class:"alert bg-".concat(J?"danger":"success"," alert-dismissible fade show"),role:"alert",children:[Object(v.jsxs)("strong",{children:[J?"Erreur":"Succ\xe8s","!"]})," ",J||A]}),Object(v.jsx)(m.a,{icon:"fa fa-user",action:Y("updateFirstName"),value:z,type:"text",placeholder:"Nom"}),Object(v.jsx)(m.a,{icon:"fa fa-user",action:Y("updateLastName"),value:B,type:"text",placeholder:"Postnom"}),Q._id!==I&&Object(v.jsx)("div",{className:"form-group",children:Object(v.jsxs)("select",{onChange:Y("updateRole"),class:"form-control",value:G,children:[Object(v.jsx)("option",{value:"",children:"R\xf4le"}),Object(v.jsx)("option",{value:0,children:"Administrateur"}),Object(v.jsx)("option",{value:1,children:"Distributeur"}),Object(v.jsx)("option",{value:2,children:"Vendeur"})]})})]}),Object(v.jsx)(p.a,{save:$(I),loader:F,cancel:ee})]})})}),Object(v.jsxs)("section",{className:"main-content",children:[Object(v.jsxs)("div",{className:"row",style:{position:"relative",minHeight:400},children:[(!a||F)&&Object(v.jsx)("div",{className:"table-flex-center-user",children:Object(v.jsx)(h.a,{})}),a&&a.map((function(e,t){if(e._id!==Q._id)return Object(v.jsx)(d.a,{data:e,onLoad:F,onEdit:function(){return X(e._id)},onDisable:function(){return te(e._id)}},e._id)}))]}),Object(v.jsx)(u.a,{})]})]})}}}]);
//# sourceMappingURL=24.37de1f02.chunk.js.map