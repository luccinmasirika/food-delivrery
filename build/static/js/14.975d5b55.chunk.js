(this.webpackJsonpBienfafood=this.webpackJsonpBienfafood||[]).push([[14],{625:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(81),c=a(83),s=a(82),r=a(1);function i(){return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(s.a,{parent:"Home",content:"AppScreen",title:"Edit AppScreen Section",create:!1}),Object(r.jsx)(n.a,{})]})}},75:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,c=!1,s=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(l){c=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(c)throw s}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return c}))},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(15),c=a.n(n),s=a(22),r=a(14),i=a(10),l=Object(i.b)().token,o=a(16).create({baseURL:"".concat(r.a,"/api"),timeout:1e3,headers:{Accept:"application/json",Authorization:"Bearer ".concat(l)}}),j=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post(t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.put(t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},81:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}},82:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(e){var t=e.parent,a=e.title,c=e.content,s=e.create,r=e.handelClick,i=e.text;return Object(n.jsxs)("div",{className:"row page-header",children:[Object(n.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(n.jsx)("h2",{children:a}),Object(n.jsxs)("ol",{className:"breadcrumb",children:[Object(n.jsx)("li",{className:"breadcrumb-item",children:Object(n.jsx)("a",{href:"/",children:t})}),Object(n.jsx)("li",{className:"breadcrumb-item active",children:c})]})]}),s&&Object(n.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(n.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:i,onClick:r,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(n.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},83:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(15),r=a.n(s),i=a(22),l=a(75),o=a(12),j=a(2),d=a(10),b=a(14),u=a(1),m=function(e,t){if(e.location.pathname===t)return"active"},h=Object(j.g)((function(e){var t=e.history,a=(e.window,Object(d.b)()),s=a.user,j=(a.token,c.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(l.a)(j,2),h=b[0],f=b[1];var p=function(e,t){var a=c.a.useState(localStorage.getItem(e)||t),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,i]}("dropDown","none"),O=Object(l.a)(p,2),x=O[0],v=O[1],N=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s.firstName,a=s.lastName,n=s.role,c=s.avatar,f({firstName:t,lastName:a,role:n,avatar:c});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);h.firstName,h.lastName;var g=h.role;h.avatar;return Object(u.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(u.jsx)("div",{className:"nano",children:Object(u.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(u.jsx)("div",{className:"card-body nav-profile",children:Object(u.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcset:"",width:190})}),Object(u.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/")),children:Object(u.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-home"}),Object(u.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"Application Management"})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/type")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-tasks"}),Object(u.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/ets")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-building"}),Object(u.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/menu")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-ticket"}),Object(u.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/meal")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-coffee"}),Object(u.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/order")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-shopping-basket"}),Object(u.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"Website Management"})}),Object(u.jsx)("li",{className:"nav-item ".concat("active"===x?"active":""),onClick:function(){v((function(){return"active"===x?"none":"active"}))},children:Object(u.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-th-large"}),Object(u.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(u.jsx)("span",{class:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(u.jsxs)("ul",{class:"nav-second-level nav flex-column",style:{display:"active"===x?"flex":"none"},children:[Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/banner")),children:Object(u.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/why-choose-us")),children:Object(u.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/features")),children:Object(u.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/download")),children:Object(u.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/app-screen")),children:Object(u.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/contact-us")),children:Object(u.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===g||1===g)&&Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"User management"})}),(0===g||1===g)&&Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/users")),children:Object(u.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-group"}),Object(u.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"SETTING"})}),Object(u.jsx)("li",{className:"nav-item ".concat(m(t,"/setting")),onClick:function(){return v("none")},children:Object(u.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-cogs"}),Object(u.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),f=a(23),p=a(8),O=a(78),x=Object(j.g)((function(e){var t,a=e.history,c=(e.window,Object(d.b)().user),s=Object(n.useState)({firstName:"",lastName:"",role:"",avatar:""}),j=Object(l.a)(s,2),m=j[0],h=j[1],x=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.firstName,a=c.lastName,n=c.role,s=c.avatar,h({firstName:t,lastName:a,role:n,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(n.useState)({logo:"icon.png",icon:"icon.png"}),N=Object(l.a)(v,2),g=N[0],w=N[1],k=g.logo,y=g.icon;Object(n.useEffect)((function(){x(),Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)("/read/config/");case 2:t=e.sent,w(Object(p.a)(Object(p.a)({},g),{},{logo:t.logo,icon:t.icon}));case 4:case"end":return e.stop()}}),e)})))()}),[]);var S=m.firstName,A=m.lastName;m.role,m.avatar;return Object(u.jsx)("div",{className:"top-bar primary-top-bar",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("a",{className:"admin-logo",href:"/",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(k),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(u.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(y),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(u.jsx)("div",{className:"left-nav-toggle",children:Object(u.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(u.jsx)("i",{className:"fa fa-bars"})})}),Object(u.jsx)("div",{className:"left-nav-collapsed",children:Object(u.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(u.jsx)("i",{className:"fa fa-bars"})})}),Object(u.jsx)("ul",{className:"list-inline top-right-nav",children:Object(u.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(u.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(u.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),S," ",A]}),Object(u.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,(t={className:"dropdown-item",to:"/setting"},Object(f.a)(t,"className","nav-link"),Object(f.a)(t,"children",[Object(u.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),t))}),Object(u.jsx)("li",{className:"dropdown-divider"}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(d.d)((function(){a.push("/login")}))},children:[Object(u.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));t.a=function(e){var t=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(h,{}),t]})}}}]);
//# sourceMappingURL=14.975d5b55.chunk.js.map