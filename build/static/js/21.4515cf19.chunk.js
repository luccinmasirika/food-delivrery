(this.webpackJsonpBienfafood=this.webpackJsonpBienfafood||[]).push([[21],{100:function(e,a,t){"use strict";t(0);var c=t(1);a.a=function(e){var a=e.parent,t=e.title,s=e.content,n=e.create,l=e.handelClick,r=e.text;return Object(c.jsxs)("div",{className:"row page-header",children:[Object(c.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsxs)("ol",{className:"breadcrumb",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsx)("a",{href:"/",children:a})}),Object(c.jsx)("li",{className:"breadcrumb-item active",children:s})]})]}),n&&Object(c.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(c.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:r,onClick:l,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(c.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},101:function(e,a,t){"use strict";var c=t(0),s=t.n(c),n=t(5),l=t.n(n),r=t(10),i=t(24),o=t(15),j=t(2),d=t(12),b=t(14),m=t(1),h=function(e,a){if(e.location.pathname===a)return"active"},u=Object(j.g)((function(e){var a=e.history,t=(e.window,Object(d.b)()),n=t.user,j=(t.token,s.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(i.a)(j,2),u=b[0],O=b[1];var x=function(e,a){var t=s.a.useState(localStorage.getItem(e)||a),n=Object(i.a)(t,2),l=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem(e,l)}),[e,l]),[l,r]}("dropDown","none"),N=Object(i.a)(x,2),f=N[0],v=N[1],g=function(){var e=Object(r.a)(l.a.mark((function e(){var a,t,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.firstName,t=n.lastName,c=n.role,s=n.avatar,O({firstName:a,lastName:t,role:c,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){g()}),[]);u.firstName,u.lastName;var p=u.role;u.avatar;return Object(m.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(m.jsx)("div",{className:"nano",children:Object(m.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(m.jsx)("div",{className:"card-body nav-profile",children:Object(m.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcSet:"",width:190})}),Object(m.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/")),children:Object(m.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-home"}),Object(m.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Application Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/type")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-tasks"}),Object(m.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/ets")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-building"}),Object(m.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/menu")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-ticket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/meal")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-coffee"}),Object(m.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/order")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-shopping-basket"}),Object(m.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"Website Management"})}),Object(m.jsx)("li",{className:"nav-item ".concat("active"===f?"active":""),onClick:function(){v((function(){return"active"===f?"none":"active"}))},children:Object(m.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-th-large"}),Object(m.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(m.jsx)("span",{className:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(m.jsxs)("ul",{className:"nav-second-level nav flex-column",style:{display:"active"===f?"flex":"none"},children:[Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/banner")),children:Object(m.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/why-choose-us")),children:Object(m.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/features")),children:Object(m.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/download")),children:Object(m.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/app-screen")),children:Object(m.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/contact-us")),children:Object(m.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(m.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===p||1===p)&&Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"User management"})}),(0===p||1===p)&&Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/users")),children:Object(m.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-group"}),Object(m.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(m.jsx)("li",{className:"nav-heading",children:Object(m.jsx)("span",{children:"SETTING"})}),Object(m.jsx)("li",{className:"nav-item ".concat(h(a,"/setting")),onClick:function(){return v("none")},children:Object(m.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(m.jsx)("i",{className:"fa fa-cogs"}),Object(m.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),O=t(26),x=t(27),N=t(25),f=Object(j.g)((function(e){var a,t=e.history,s=(e.window,Object(d.b)()),n=s.user,j=s.token,h=Object(c.useContext)(x.a),u=Object(c.useState)({firstName:"",lastName:"",role:"",avatar:""}),f=Object(i.a)(u,2),v=f[0],g=f[1],p=h.logo,k=h.icon,w=v.firstName,y=v.lastName;v.role,v.avatar;return Object(c.useEffect)((function(){Object(r.a)(l.a.mark((function e(){var a,t,c,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)("/user/".concat(n._id),j);case 2:a=e.sent,t=a.firstName,c=a.lastName,s=a.role,r=a.avatar,g({firstName:t,lastName:c,role:s,avatar:r});case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(m.jsx)("div",{className:"top-bar primary-top-bar",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("a",{className:"admin-logo",href:"/",children:Object(m.jsxs)("h1",{children:[Object(m.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(p),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(m.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(k),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(m.jsx)("div",{className:"left-nav-toggle",children:Object(m.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("div",{className:"left-nav-collapsed",children:Object(m.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(m.jsx)("i",{className:"fa fa-bars"})})}),Object(m.jsx)("ul",{className:"list-inline top-right-nav",children:Object(m.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(m.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(m.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),w," ",y]}),Object(m.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,(a={className:"dropdown-item",to:"/setting"},Object(O.a)(a,"className","nav-link"),Object(O.a)(a,"children",[Object(m.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),a))}),Object(m.jsx)("li",{className:"dropdown-divider"}),Object(m.jsx)("li",{children:Object(m.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(d.d)((function(){t.push("/login")}))},children:[Object(m.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));a.a=function(e){var a=e.children;return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(u,{}),a]})}},634:function(e,a,t){"use strict";t.r(a);var c=t(5),s=t.n(c),n=t(9),l=t(10),r=t(24),i=t(0),o=t.n(i),j=t(99),d=t(101),b=t(100),m=t(594),h=t(1),u=function(e){var a=e.title,t=e.number,c=e.color,s=e.loading;return Object(h.jsxs)("div",{className:"col-md-6 col-lg-4 col-xlg-2",children:[s&&Object(h.jsx)(m.a,{backdrop:!0,content:"loading...",style:{zIndex:2}}),Object(h.jsx)("div",{className:"widget card-".concat(c),children:Object(h.jsxs)("div",{className:"box bg-".concat(c," text-center"),children:[Object(h.jsx)("h1",{className:"font-light text-white",children:t}),Object(h.jsx)("h6",{className:"text-white",children:a})]})})]})},O=t(12),x=t(25),N=t(593),f=t(310),v=t(317);var g=function(){var e=Object(O.b)(),a=e.user,t=e.token,c=Object(i.useState)([]),n=Object(r.a)(c,2),j=n[0],d=n[1],b=Object(i.useState)(!1),u=Object(r.a)(b,2),g=u[0],p=u[1],k=function(e){var a=e.map((function(e,a){return e.x.month})),t=["January","February","March","April","May","June","July","August","September","October","November","December"],c=Object(v.a)(new Set(a)),s=c.map((function(e,a){return t[e-1]})),n=[],l=[],r=[];e.map((function(e){return"PAYIED"===e.color&&n.push({x:e.x.month,y:e.y}),"DENIED"===e.color&&l.push({x:e.x.month,y:e.y}),"CANCELED"===e.color&&r.push({x:e.x.month,y:e.y}),null}));var i=[],o=[],j=[];e:for(var d=0;d<c.length;d++){for(var b=0;b<n.length;b++)if(n[b].x===c[d]){i.push(n[b].y);continue e}i.push(0)}e:for(var m=0;m<c.length;m++){for(var h=0;h<l.length;h++)if(l[h].x===c[m]){o.push(l[h].y);continue e}o.push(0)}e:for(var u=0;u<c.length;u++){for(var O=0;O<r.length;O++)if(r[O].x===c[u]){j.push(r[O].y);continue e}j.push(0)}return{PAYIED:i,CANCELED:o,DENIED:j,LABELS:s}}(j),w={labels:k.LABELS,datasets:[{label:"PAYIED",data:k.PAYIED,backgroundColor:"#7BCB4D"},{label:"CANCELED",data:k.CANCELED,backgroundColor:"#F4516C"},{label:"DENIED",data:k.DENIED,backgroundColor:"#F6BC51"}]};return o.a.useEffect((function(){Object(l.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,Object(x.b)("/chart/un/commande/".concat(a._id),t);case 3:c=e.sent,d(c),p(!1);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-12",children:[g&&Object(h.jsx)(m.a,{backdrop:!0,content:"loading...",style:{zIndex:2}}),Object(h.jsx)(N.a,{data:w,height:f.isMobile?0:70,style:{marginBottom:"30px"}})]})})};a.default=function(){var e=Object(O.b)(),a=e.user,t=e.token,c=Object(i.useState)({user:0,ets:0,commande:0}),o=Object(r.a)(c,2),m=o[0],N=o[1],f=Object(i.useState)(!1),v=Object(r.a)(f,2),p=v[0],k=v[1];return Object(i.useEffect)((function(){Object(l.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Object(x.b)("/stats/un/".concat(a._id),t);case 3:c=e.sent,N(Object(n.a)(Object(n.a)({},m),{},{user:c.user,ets:c.ets,commande:c.commande})),k(!1);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b.a,{parent:"Home",content:"Dashboard",title:"Dashboard",create:!1}),Object(h.jsxs)("section",{className:"main-content",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(u,{title:"Client",loading:p,number:m.user,color:"success"}),Object(h.jsx)(u,{title:"Establishment",loading:p,number:m.ets,color:"warning"}),Object(h.jsx)(u,{title:"Order",loading:p,number:m.commande,color:"indigo"})]}),Object(h.jsx)("div",{className:"card pt-4 pl-4 pr-4",children:Object(h.jsx)(g,{})}),Object(h.jsx)(j.a,{})]})]})}},99:function(e,a,t){"use strict";t(0);var c=t(1);a.a=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(c.jsx)("span",{children:Object(c.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}}}]);
//# sourceMappingURL=21.4515cf19.chunk.js.map