(this.webpackJsonpBienfafood=this.webpackJsonpBienfafood||[]).push([[22],{100:function(e,a,t){"use strict";t(0);var c=t(1);a.a=function(e){var a=e.parent,t=e.title,s=e.content,n=e.create,i=e.handelClick,r=e.text;return Object(c.jsxs)("div",{className:"row page-header",children:[Object(c.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsxs)("ol",{className:"breadcrumb",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)("a",{href:"/",children:a})}),Object(c.jsx)("li",{className:"breadcrumb-item active",children:s})]})]}),n&&Object(c.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(c.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:r,onClick:i,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(c.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},101:function(e,a,t){"use strict";var c=t(0),s=t.n(c),n=t(5),i=t.n(n),r=t(10),l=t(24),o=t(15),j=t(2),d=t(12),b=t(14),m=t(1),u=function(e,a){if(e.location.pathname===a)return"active"},O=Object(j.g)((function(e){var a=e.history,t=(e.window,Object(d.b)()),n=t.user,j=(t.token,s.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(l.a)(j,2),O=b[0],h=b[1];var x=function(e,a){var t=s.a.useState(localStorage.getItem(e)||a),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem(e,i)}),[e,i]),[i,r]}("dropDown","none"),p=Object(l.a)(x,2),f=p[0],g=p[1],v=function(){var e=Object(r.a)(i.a.mark((function e(){var a,t,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.firstName,t=n.lastName,c=n.role,s=n.avatar,h({firstName:a,lastName:t,role:c,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v()}),[]);O.firstName,O.lastName;var N=O.role;O.avatar;return Object(m.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(m.jsx)("div",{className:"nano",children:Object(m.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(m.jsx)("div",{className:"card-body nav-profile",children:Object(m.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcSet:"",width:190})}),Object(m.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/")),children:Object(m.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-home"}),Object(m.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Application Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/type")),onClick:function(){return g("none")},children:Object(m.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-tasks"}),Object(m.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/ets")),onClick:function(){return g("none")},children:Object(m.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-building"}),Object(m.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/menu")),onClick:function(){return g("none")},children:Object(m.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-ticket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/meal")),onClick:function(){return g("none")},children:Object(m.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-coffee"}),Object(m.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/order")),onClick:function(){return g("none")},children:Object(m.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-shopping-basket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Website Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat("active"===f?"active":""),onClick:function(){g((function(){return"active"===f?"none":"active"}))},children:Object(m.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-th-large"}),Object(m.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(m.jsx)("span",{className:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(m.jsxs)("ul",{className:"nav-second-level nav flex-column",style:{display:"active"===f?"flex":"none"},children:[Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/banner")),children:Object(m.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/why-choose-us")),children:Object(m.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/features")),children:Object(m.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/download")),children:Object(m.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/app-screen")),children:Object(m.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/contact-us")),children:Object(m.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===N||1===N)&&Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"User management"})}),(0===N||1===N)&&Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/users")),children:Object(m.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-group"}),Object(m.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"SETTING"})}),Object(m.jsx)("li",{className:"nav-item ".concat(u(a,"/setting")),onClick:function(){return g("none")},children:Object(m.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-cogs"}),Object(m.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),h=t(26),x=t(27),p=t(25),f=Object(j.g)((function(e){var a,t=e.history,s=(e.window,Object(d.b)()),n=s.user,j=s.token,u=Object(c.useContext)(x.a),O=Object(c.useState)({firstName:"",lastName:"",role:"",avatar:""}),f=Object(l.a)(O,2),g=f[0],v=f[1],N=u.logo,y=u.icon,w=g.firstName,k=g.lastName;g.role,g.avatar;return Object(c.useEffect)((function(){Object(r.a)(i.a.mark((function e(){var a,t,c,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)("/user/".concat(n._id),j);case 2:a=e.sent,t=a.firstName,c=a.lastName,s=a.role,r=a.avatar,v({firstName:t,lastName:c,role:s,avatar:r});case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(m.jsx)("div",{className:"top-bar primary-top-bar",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("a",{className:"admin-logo",href:"/",children:Object(m.jsxs)("h1",{children:[Object(m.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(N),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(m.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(y),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(m.jsx)("div",{className:"left-nav-toggle",children:Object(m.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("div",{className:"left-nav-collapsed",children:Object(m.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("ul",{className:"list-inline top-right-nav",children:Object(m.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(m.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(m.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),w," ",k]}),Object(m.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,(a={className:"dropdown-item",to:"/setting"},Object(h.a)(a,"className","nav-link"),Object(h.a)(a,"children",[Object(m.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),a))}),Object(m.jsx)("li",{className:"dropdown-divider"}),Object(m.jsx)("li",{children:Object(m.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(d.d)((function(){t.push("/login")}))},children:[Object(m.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));a.a=function(e){var a=e.children;return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(O,{}),a]})}},636:function(e,a,t){"use strict";t.r(a);var c=t(26),s=t(9),n=t(5),i=t.n(n),r=t(10),l=t(24),o=t(0),j=t(1),d=function(e){var a=e.icon,t=e.placeholder,c=e.value,s=e.type,n=e.action;return Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("div",{className:"input-group m-b",children:[Object(j.jsx)("span",{className:"input-group-addon",children:Object(j.jsx)("i",{className:a})}),Object(j.jsx)("input",{type:s,value:c,onChange:n,placeholder:t,className:"form-control"})]})})},b=t(99),m=t(101),u=t(100),O=t(12),h=t(27),x=t(14),p=t(630),f=t(594),g=t(637),v=t(638),N=t(617),y=t(639),w=t(595),k=t(297);function C(e){var a=e.data,t=e.state,c=e.showModal,s=e.closeModal,n=e.handelChange,i=e.onSubmit;return Object(j.jsxs)(p.a,{size:"xs",show:c,onHide:s,children:[t.loading&&Object(j.jsx)(f.a,{backdrop:!0,content:"loading...",style:{zIndex:10},vertical:!0}),Object(j.jsx)(p.a.Header,{children:Object(j.jsx)(p.a.Title,{children:"Configuration"})}),Object(j.jsxs)(p.a.Body,{children:[t.error&&Object(j.jsx)(g.a,{type:"error",description:t.error,style:{marginBottom:"15px"}}),Object(j.jsxs)(v.a,{fluid:!0,children:[Object(j.jsxs)(N.a,{children:[Object(j.jsxs)(y.a,{children:["Delivrery radius ",Object(j.jsx)("code",{children:"*"})]}),Object(j.jsx)(w.a,{postfix:"Km",placeholder:1,defaultValue:a.rayonLimite,min:1,step:1,onChange:n("rayonLimite"),block:!0})]}),Object(j.jsxs)(N.a,{children:[Object(j.jsxs)(y.a,{children:["Fee per Km ",Object(j.jsx)("code",{children:"*"})]}),Object(j.jsx)(w.a,{postfix:"$",placeholder:.1,min:.1,step:.1,defaultValue:a.fraisParKm,onChange:n("fraisParKm"),block:!0})]})]})]}),Object(j.jsxs)(p.a.Footer,{children:[Object(j.jsx)(k.a,{onClick:i,appearance:"primary",children:"Submit"}),Object(j.jsx)(k.a,{onClick:s,appearance:"subtle",children:"Cancel"})]})]})}var S=t(263);function E(e){var a=e.data,t=e.state,c=e.showModal,s=e.closeModal,n=e.handelChange,i=(e.deviseData,e.onSubmit);return Object(j.jsxs)(p.a,{size:"xs",show:c,onHide:s,children:[t.loading&&Object(j.jsx)(f.a,{backdrop:!0,content:"loading...",style:{zIndex:10},vertical:!0}),Object(j.jsx)(p.a.Header,{children:Object(j.jsxs)(p.a.Title,{children:["Update ",a.nom," currency data"]})}),Object(j.jsxs)(p.a.Body,{children:[t.error&&Object(j.jsx)(g.a,{type:"error",description:t.error,style:{marginBottom:"15px"}}),Object(j.jsxs)(v.a,{fluid:!0,children:[Object(j.jsxs)(N.a,{children:[Object(j.jsxs)(y.a,{children:["Currency ",Object(j.jsx)("code",{children:"*"})]}),Object(j.jsx)(S.a,{defaultValue:a.nom,min:1,step:1,onChange:n("nom"),block:!0})]}),Object(j.jsxs)(N.a,{children:[Object(j.jsxs)(y.a,{children:["Exchange rate ",Object(j.jsx)("code",{children:"*"})]}),Object(j.jsx)(w.a,{min:.1,step:.1,disabled:1===a.taux,defaultValue:a.taux,onChange:n("taux"),block:!0})]})]})]}),Object(j.jsxs)(p.a.Footer,{children:[Object(j.jsx)(k.a,{onClick:i,appearance:"primary",children:"Submit"}),Object(j.jsx)(k.a,{onClick:s,appearance:"subtle",children:"Cancel"})]})]})}var z=t(25),D=t(640),M=t(641),_=t(318),P=t(315),T=t(642),K=t(284);function L(e,a){var t=new FileReader;t.onloadend=function(){a(t.result)},t.readAsDataURL(e)}a.default=function(){var e=Object(O.b)(),a=e.user,t=e.token,n=Object(o.useContext)(h.a),p=Object(o.useContext)(h.b),g=Object(o.useState)(!1),v=Object(l.a)(g,2),N=v[0],y=v[1],w=Object(o.useState)(null),k=Object(l.a)(w,2),S=k[0],U=k[1],A=Object(o.useState)(null),F=Object(l.a)(A,2),I=F[0],B=F[1],V=Object(o.useState)({firstName:"",lastName:"",role:"",avatar:"",email:"",password:""}),H=Object(l.a)(V,2),G=H[0],J=H[1],R=G.firstName,W=G.lastName,$=G.email,Y=G.role,q=G.password,Q=G.avatar;Object(o.useEffect)((function(){Object(r.a)(i.a.mark((function e(){var c,s,n,r,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.b)("/user/".concat(a._id),t);case 2:c=e.sent,s=c.firstName,n=c.lastName,r=c.role,l=c.email,o=c.avatar,J({firstName:s,lastName:n,role:r,email:l,avatar:o});case 5:case"end":return e.stop()}}),e)})))()}),[]);var X=Object(o.useState)({error:"",success:"",loading:!1}),Z=Object(l.a)(X,2),ee=Z[0],ae=Z[1],te=Object(o.useState)(),ce=Object(l.a)(te,2),se=ce[0],ne=ce[1],ie=Object(o.useState)({fraisParKm:n.fraisParKm,rayonLimite:n.rayonLimite,devise:"",logo:"",icon:""}),re=Object(l.a)(ie,2),le=re[0],oe=re[1],je=Object(o.useState)({nom:"",taux:"",title:"",_id:""}),de=Object(l.a)(je,2),be=de[0],me=de[1],ue=Object(o.useState)(!1),Oe=Object(l.a)(ue,2),he=Oe[0],xe=Oe[1],pe=Object(o.useState)(!1),fe=Object(l.a)(pe,2),ge=fe[0],ve=fe[1],Ne=Object(o.useState)(""),ye=Object(l.a)(Ne,2),we=ye[0],ke=ye[1],Ce=n.fraisParKm,Se=n.rayonLimite,Ee=n.devise,ze=n.logo,De=n.icon,Me=ee.loading,_e=be.title,Pe=(be.nom,be.taux,function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.b)("/read/all/devise/".concat(a._id));case 2:t=e.sent,ne(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());function Te(){ve(!0)}function Ke(){ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1,error:""})),me({title:"",nom:"",taux:"",_id:""}),ve(!1)}var Le=function(e){return function(a){ae(Object(s.a)(Object(s.a)({},ee),{},{error:""})),J(Object(s.a)(Object(s.a)({},G),{},Object(c.a)({},e,a.target.value)))}},Ue=function(){var e=Object(r.a)(i.a.mark((function e(a){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={firstName:R,lastName:W,email:$,role:Y,password:q},ae(Object(s.a)(Object(s.a)({},ee),{},{error:"",loading:!0})),e.next=4,Object(z.c)("/update/profil/user/".concat(a),t);case 4:(c=e.sent).error&&(ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1})),D.a.error({title:"Error",placement:"bottomEnd",description:c.error})),ae(Object(s.a)(Object(s.a)({},ee),{},{loader:!1,success:!0}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(r.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(Object(s.a)(Object(s.a)({},ee),{},{error:"",loading:!0})),e.next=3,Object(z.c)("/update/config/".concat(a._id),t);case 3:(c=e.sent)&&c.error&&(ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1})),D.a.error({title:"Error",placement:"bottomEnd",description:c.error})),D.a.success({title:"Success",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "}),ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1,success:c.message})),p(),xe(!1);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!0})),e.next=3,Object(z.a)("/create/devise/".concat(a._id),{nom:t.nom,taux:t.taux});case 3:e.sent.error&&D.a.error({title:"Error",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "}),D.a.success({title:"Success",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "}),ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1})),Ke(),ke(!we);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(r.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!0})),e.next=3,Object(z.c)("/update/devise/".concat(a._id,"?_id=").concat(t._id),{nom:t.nom,taux:t.taux});case 3:(c=e.sent).error&&D.a.error({title:"Error",placement:"bottomEnd",description:c.error}),D.a.success({title:"Success",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "}),ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1})),Ke(),ke(!we);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){Pe()}),[we]),Object(j.jsxs)(m.a,{children:[Object(j.jsx)(u.a,{parent:"Accueil",content:"Param\xe8tres",title:"Profile",create:!1}),Object(j.jsxs)("section",{className:"main-content",children:[Object(j.jsx)(C,{data:n,showModal:he,state:ee,closeModal:function(){ae(Object(s.a)(Object(s.a)({},ee),{},{loading:!1,error:""})),oe({devise:"",fraisParKm:n.fraisParKm,rayonLimite:n.rayonLimite}),xe(!1)},handelChange:function(e){return function(a){oe(Object(s.a)(Object(s.a)({},le),{},Object(c.a)({},e,a)))}},onSubmit:function(){return Ae({fraisParKm:le.fraisParKm,rayonLimite:le.rayonLimite})}}),Object(j.jsx)(E,{data:be,showModal:ge,state:ee,closeModal:Ke,handelChange:function(e){return function(a){me(Object(s.a)(Object(s.a)({},be),{},Object(c.a)({},e,a)))}},onSubmit:function(){return _e?Ie(be):Fe(be)}}),Object(j.jsxs)(M.a,{accordion:!0,bordered:!0,children:[Object(j.jsx)(_.a,{header:"Account settings",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"padding-20 text-center",children:[Object(j.jsx)("img",{alt:"Profile",width:140,className:"rounded-circle mar-btm margin-b-10 circle-border ",src:"".concat(x.a,"/").concat(Q)}),Object(j.jsxs)("p",{className:"lead font-500 margin-b-0",children:[R," ",W]}),Object(j.jsx)("p",{className:"text-muted",children:0===Y?"Administrator":"User"})]})}),Object(j.jsxs)("div",{className:"col-md-8",children:[Me&&Object(j.jsx)(f.a,{backdrop:!0,center:!0,style:{zIndex:3}}),Object(j.jsx)("div",{className:"card-header card-default",children:"Update profile"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{method:"post",className:"well well-default",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(j.jsx)(d,{icon:"fa fa-user",action:Le("firstName"),placeholder:"Nom",type:"text",value:R})}),Object(j.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(j.jsx)(d,{icon:"fa fa-user",action:Le("lastName"),placeholder:"Postnom",type:"text",value:W})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(j.jsx)(d,{icon:"fa fa-at",action:Le("email"),placeholder:"Email",type:"text",value:$})}),Object(j.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(j.jsx)(d,{icon:"fa fa-unlock",action:Le("password"),placeholder:"Mot de passe",type:"text",value:q})})]}),Object(j.jsxs)("button",{type:"button",onClick:function(){return Ue(a._id)},className:"btn btn-success btn-icon",children:[Object(j.jsx)("i",{className:"fa ".concat(Me?"fa-spinner":"fa-floppy-o "),style:{background:"".concat(Me&&"transparent")}}),"Sauvegarder"]})]})})]})]})})}),Object(j.jsx)(_.a,{header:"Application settings",defaultExpanded:!0,children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-body d-flex align-items-center justify-content-center",children:Object(j.jsx)(P.a,{fileListVisible:!1,listType:"picture",name:"image",action:"".concat(x.a,"/api/update/logo/").concat(a._id),onUpload:function(e){y(!0),L(e.blobFile,(function(e){U(e)}))},onSuccess:function(e,a){y(!1),p(),D.a.success({title:"Success",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "})},onError:function(){U(null),y(!1),D.a.error({title:"Error",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "})},children:Object(j.jsxs)("button",{style:{width:250,height:"auto"},children:[N&&Object(j.jsx)(f.a,{backdrop:!0,center:!0}),S?Object(j.jsx)("div",{style:{margin:"40px",boxSizing:"border-box"},children:Object(j.jsx)("img",{src:S,alt:"logo",width:"100%",height:"auto"})}):Object(j.jsx)("div",{style:{margin:"40px",boxSizing:"border-box"},children:Object(j.jsx)("img",{src:"".concat(x.a,"/").concat(ze),alt:"logo",width:"100%",height:"auto"})})]})})}),Object(j.jsx)("div",{className:"card-footer d-flex",children:"Update Logo"})]})}),Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-body d-flex align-items-center justify-content-center",children:Object(j.jsx)(P.a,{fileListVisible:!1,listType:"picture",name:"image",action:"".concat(x.a,"/api/update/icon/").concat(a._id),onUpload:function(e){y(!0),L(e.blobFile,(function(e){B(e)}))},onSuccess:function(e,a){y(!1),B(null),p(),D.a.success({title:"Success",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "})},onError:function(){B(null),y(!1),ke(!we),D.a.error({title:"Error",placement:"bottomEnd",description:"Done. The realization of this operation was completely successful "})},children:Object(j.jsxs)("button",{style:{width:"100%",height:"auto"},children:[N&&Object(j.jsx)(f.a,{backdrop:!0,center:!0}),I?Object(j.jsx)("div",{style:{margin:"4px",boxSizing:"border-box"},children:Object(j.jsx)("img",{src:I,alt:"logo",width:"100%",height:"auto"})}):Object(j.jsx)("div",{style:{margin:"4px",boxSizing:"border-box"},children:Object(j.jsx)("img",{src:"".concat(x.a,"/").concat(De),alt:"logo",width:"100%",height:"auto"})})]})})}),Object(j.jsx)("div",{className:"card-footer d-flex",children:"Update Icon"})]})}),Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsxs)("div",{className:"card",style:{height:240},children:[Object(j.jsx)("div",{className:"card-body h-100 overflow-auto",children:Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[!se&&Object(j.jsx)(f.a,{backdrop:!0,content:"loading...",style:{zIndex:2}}),se&&se.map((function(e){return Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(j.jsxs)("span",{children:[e.nom," ",Object(j.jsxs)("em",{title:"Exchange rate",className:"badge badge-primary",children:[e.taux," "]})]}),Object(j.jsx)("span",{title:"Edit currency",children:Object(j.jsx)(T.a,{onClick:function(){return a=e,Te(),void me(Object(s.a)(Object(s.a)({},be),{},{title:"Update currency data",nom:a.nom,taux:a.taux,_id:a._id}));var a},icon:Object(j.jsx)(K.a,{icon:"edit2"})})})]},e._id)}))]})}),Object(j.jsxs)("div",{className:"card-footer ",children:[Object(j.jsx)("h6",{className:"float-left",children:"Currency"}),Object(j.jsx)("span",{title:"Add new currency",className:"float-right",children:Object(j.jsx)(T.a,{onClick:Te,icon:Object(j.jsx)(K.a,{icon:"plus-circle"})})})]})]})}),Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsxs)("div",{className:"card",style:{height:240},children:[Object(j.jsx)("div",{className:"card-body h-100 overflow-auto",children:Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[!se&&Object(j.jsx)(f.a,{backdrop:!0,content:"loading...",style:{zIndex:2}}),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Main Currency"," ",Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"mr-2",children:[Object(j.jsxs)("em",{className:"text-indigo",children:[Ee&&Ee.nom," "]}),Object(j.jsxs)("em",{className:"badge badge-primary",children:[Ee&&Ee.taux," "]})]})})]},1),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Delivery radius"," ",Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"mr-2",children:[Object(j.jsxs)("em",{className:"text-indigo",children:[Se," "]}),Object(j.jsx)("em",{className:"badge badge-primary",children:"Km "})]})})]},2),Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Fee per Km"," ",Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"mr-2",children:[Object(j.jsxs)("em",{className:"text-indigo",children:[Ce,"$ "]}),Object(j.jsx)("em",{className:"badge badge-primary",children:"Km "})]})})]},3)]})}),Object(j.jsxs)("div",{className:"card-footer ",children:[Object(j.jsx)("h6",{className:"float-left",children:"Global config"}),Object(j.jsx)("span",{title:"Add new currency",className:"float-right",children:Object(j.jsx)(T.a,{onClick:function(){xe(!0)},icon:Object(j.jsx)(K.a,{icon:"edit2"})})})]})]})})]})})]}),Object(j.jsx)(b.a,{})]})]})}},99:function(e,a,t){"use strict";t(0);var c=t(1);a.a=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(c.jsx)("span",{children:Object(c.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}}}]);
//# sourceMappingURL=22.7f7f0d79.chunk.js.map