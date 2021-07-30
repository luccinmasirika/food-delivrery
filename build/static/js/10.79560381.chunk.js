(this["webpackJsonpstock-mgt"]=this["webpackJsonpstock-mgt"]||[]).push([[10],{125:function(e,a,t){var n=t(97),s=t(143);e.exports=function(e){return s(n(e).toLowerCase())}},126:function(e,a,t){"use strict";var n=t(76),s=t(73);a.__esModule=!0,a.default=void 0;var c=s(t(77)),r=s(t(80)),i=s(t(83)),l=n(t(0)),o=s(t(11)),d=s(t(72)),j=t(89),b=function(e){function a(){return e.apply(this,arguments)||this}return(0,i.default)(a,e),a.prototype.render=function(){for(var e,t=this.props,n=t.className,s=t.rows,i=t.rowHeight,o=t.rowMargin,b=t.graph,u=t.active,h=t.classPrefix,p=(0,r.default)(t,["className","rows","rowHeight","rowMargin","graph","active","classPrefix"]),m=(0,j.prefix)(h),O=(0,j.getUnhandledProps)(a,p),f=!0===b?"square":b,g=[],x=0;x<s;x++){var v={width:75*Math.random()+25+"%",height:i,marginTop:x>0?o:Number(o)/2};g.push(l.createElement("p",{key:x,style:v}))}var N=(0,d.default)(n,h,m("paragraph"),((e={})[m("active")]=u,e)),E=(0,d.default)(m("paragraph-graph"),m("paragraph-graph-"+f));return l.createElement("div",(0,c.default)({className:N},O),f&&l.createElement("div",{className:E},l.createElement("span",{className:m("paragraph-graph-inner")})),l.createElement("div",{className:m("paragraph-rows")},g))},a}(l.Component);b.propTypes={className:o.default.string,classPrefix:o.default.string,rows:o.default.number,rowHeight:o.default.number,rowMargin:o.default.number,graph:o.default.oneOfType([o.default.bool,o.default.oneOf(["circle","square","image"])]),active:o.default.bool},b.defaultProps={rows:2,rowHeight:10,rowMargin:20};var u=(0,j.defaultProps)({classPrefix:"placeholder"})(b);a.default=u,e.exports=a.default},143:function(e,a,t){var n=t(144)("toUpperCase");e.exports=n},144:function(e,a,t){var n=t(165),s=t(167),c=t(166),r=t(97);e.exports=function(e){return function(a){a=r(a);var t=s(a)?c(a):void 0,i=t?t[0]:a.charAt(0),l=t?n(t,1).join(""):a.slice(1);return i[e]()+l}}},335:function(e,a,t){"use strict";var n=t(9),s=t(3),c=t(4),r=t(87),i=t.n(r),l=t(91),o=t.n(l),d=t(86),j=t.n(d),b=t(0),u=t(11),h=t.n(u),p=t(72),m=t.n(p),O=t(125),f=t.n(O),g=t(78),x=t(113),v=t(169),N={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var E=function(e){function a(a){var t;return(t=e.call(this,a)||this).transitionRef=void 0,t.handleEnter=function(e){var a=t.dimension();Object(g.addStyle)(e,a,0)},t.handleEntering=function(e){var a=t.dimension();Object(g.addStyle)(e,a,function(e,a){return i()(e,"scroll"+f()(a))+"px"}(e,a))},t.handleEntered=function(e){var a=t.dimension();Object(g.addStyle)(e,a,"auto")},t.handleExit=function(e){var a=t.dimension(),n=t.props.getDimensionValue,s=n?n(a,e):0;Object(g.addStyle)(e,a,s+"px")},t.handleExiting=function(e){var a,n=t.dimension();a=e,i()(a,"offsetHeight"),Object(g.addStyle)(e,n,0)},t.transitionRef=b.createRef(),t}Object(c.a)(a,e);var t=a.prototype;return t.getTransitionInstance=function(){return this.transitionRef.current},t.dimension=function(){var e=this.props.dimension;return"function"===typeof e?e():e},t.render=function(){var e=this.props,a=e.role,t=e.className,n=e.onExited,c=e.onEnter,r=e.onEntering,i=e.onEntered,l=e.onExit,d=e.onExiting,j=Object(v.a)(this.handleEnter,c),u=Object(v.a)(this.handleEntering,r),h=Object(v.a)(this.handleEntered,i),p=Object(v.a)(this.handleExit,l),O=Object(v.a)(this.handleExiting,d);return b.createElement(x.a,Object(s.a)({},o()(this.props,Object.keys(x.b)),{ref:this.transitionRef,"aria-expanded":a?this.props.in:null,className:m()(t,{width:"width"===this.dimension()}),onEnter:j,onEntering:u,onEntered:h,onExit:p,onExiting:O,onExited:n}))},a}(b.Component);E.propTypes=Object(s.a)({},x.b,{dimension:h.a.oneOfType([h.a.string,h.a.func]),getDimensionValue:h.a.func,role:h.a.string}),E.displayName="Collapse",E.defaultProps={timeout:300,dimension:"height",exitedClassName:"collapse",exitingClassName:"collapsing",enteredClassName:"collapse in",enteringClassName:"collapsing",getDimensionValue:function(e,a){var t=i()(a,"offset"+f()(e)),n=N[e];return t+parseInt(Object(g.getStyle)(a,n[0]),10)+parseInt(Object(g.getStyle)(a,n[1]),10)}};var C=E,w=t(134),y=t(509),k=t(605),P=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleSelect=function(e){e.persist();var a=t.props,n=a.onSelect,s=a.eventKey;n&&n(s,e),t.handleToggle()},t.handleToggle=function(){t.setState({expanded:!t.state.expanded})},t.addPrefix=function(e){return Object(w.a)(t.props.classPrefix)(e)},t.state={expanded:a.defaultExpanded},t}Object(c.a)(a,e);var t=a.prototype;return t.isExpanded=function(){return j()(this.props.expanded)?this.state.expanded:this.props.expanded},t.renderCollapsibleTitle=function(e,a){return b.createElement("span",{className:this.addPrefix("title"),role:"presentation"},this.renderAnchor(e,a))},t.renderCollapsibleBody=function(e){var a=this,t=this.props.id,c=Object(s.a)({},o()(this.props,Object.keys(C.propTypes)),{in:this.isExpanded()}),r={id:t?""+t:null,"aria-hidden":!this.isExpanded()};return e&&(r.role=e),b.createElement(C,c,(function(e,t){var c=e.className,i=Object(n.a)(e,["className"]);return b.createElement("div",Object(s.a)({},r,i,{className:m()(a.addPrefix("collapse"),c),ref:t}),a.renderBody())}))},t.renderBody=function(){var e,a=this.props,t=a.children,n=a.bodyFill,s=m()(this.addPrefix("body"),((e={})[this.addPrefix("body-fill")]=n,e));return b.createElement("div",{className:s},t)},t.renderHeading=function(e){var a=this.props.header;if(!a)return null;if(!b.isValidElement(a)||Array.isArray(a))a=this.props.collapsible?this.renderCollapsibleTitle(a,e):a;else{var t=m()(this.addPrefix("title"),i()(a,"props.className"));a=b.cloneElement(a,{className:t})}return b.createElement("div",{role:"rowheader",className:this.addPrefix("heading"),onClick:this.handleSelect,tabIndex:-1},a)},t.renderAnchor=function(e,a){var t=this.props,n=t.id,s=t.collapsible;return b.createElement("span",{"aria-controls":s?""+n:null,className:this.isExpanded()?null:"collapsed","aria-expanded":this.isExpanded(),"aria-selected":this.isExpanded(),role:a},e)},t.render=function(){var e,t=this.props,c=t.headerRole,r=t.panelRole,i=t.className,l=t.collapsible,o=t.bordered,d=t.shaded,j=t.classPrefix,u=t.id,h=Object(n.a)(t,["headerRole","panelRole","className","collapsible","bordered","shaded","classPrefix","id"]),p=m()(i,j,this.addPrefix("default"),((e={})[this.addPrefix("in")]=this.isExpanded(),e[this.addPrefix("collapsible")]=l,e[this.addPrefix("bordered")]=o,e[this.addPrefix("shaded")]=d,e)),O=Object(y.a)(a,h);return b.createElement("div",Object(s.a)({},O,{className:p,id:l?null:u}),this.renderHeading(c),l?this.renderCollapsibleBody(r):this.renderBody())},a}(b.Component);P.propTypes={collapsible:h.a.bool,bordered:h.a.bool,shaded:h.a.bool,bodyFill:h.a.bool,header:h.a.any,defaultExpanded:h.a.bool,expanded:h.a.bool,eventKey:h.a.any,headerRole:h.a.string,panelRole:h.a.string,classPrefix:h.a.string,children:h.a.node,onSelect:h.a.func,onEnter:h.a.func,onEntering:h.a.func,onEntered:h.a.func,onExit:h.a.func,onExiting:h.a.func,onExited:h.a.func,className:h.a.string};var D=Object(k.a)({classPrefix:"panel"})(P);a.a=D},638:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var n=t(14),s=t.n(n),c=t(22),r=t(8),i=t(75),l=t(81),o=t(84),d=t(82),j=t(0),b=(t(15),t(141)),u=t.n(b),h=t(18),p=t.n(h),m=t(335),O=t(625),f=t(126),g=t.n(f),x=t(1);function v(e){var a=e.data,t=e.total,n=e.page,s=(e.pages,e.loading),c=e.handleChangePage,r=e.handleChangeLength,i=e.displayLength,l=e.handleAction;return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{header:"Filters",collapsible:!0,children:Object(x.jsx)(g.a,{})}),Object(x.jsxs)(O.a,{height:370,data:a,rowHeight:60,loading:s,children:[Object(x.jsxs)(O.a.Column,{width:150,align:"center",resizable:!0,children:[Object(x.jsx)(O.a.HeaderCell,{children:"Reference"}),Object(x.jsx)(O.a.Cell,{children:function(e){return Object(x.jsx)("span",{className:"badge badge-primary badge-pill",children:e.reference})}})]}),Object(x.jsxs)(O.a.Column,{width:200,resizable:!0,children:[Object(x.jsx)(O.a.HeaderCell,{children:"Produit"}),Object(x.jsx)(O.a.Cell,{children:function(e){return e.produit.nom}})]}),Object(x.jsxs)(O.a.Column,{width:180,resizable:!0,children:[Object(x.jsx)(O.a.HeaderCell,{children:"State"}),Object(x.jsx)(O.a.Cell,{children:function(e){return function(e){switch(e){case"PENDING_FOR_VALIDATION":return Object(x.jsx)("span",{className:"badge badge-primary badge-pill",children:"PENDING FOR VALIDATION"});case"VALIDATED":return Object(x.jsx)("span",{className:"badge badge-success badge-pill",children:"VALIDATED"});case"DENIED":return Object(x.jsx)("span",{className:"badge badge-danger badge-pill",children:"DENIED"});case"PENDING_FOR_PAYMENT":return Object(x.jsx)("span",{className:"badge badge-waring badge-pill",children:"PENDING FOR PAYMENT"});case"PAYIED":return Object(x.jsx)("span",{className:"badge badge-info badge-pill",children:"PAYIED"});case"CANCELED":return Object(x.jsx)("span",{className:"badge badge-teal badge-pill",children:"CANCELED"});case"CLOSED":return Object(x.jsx)("span",{className:"badge badge-indigo badge-pill",children:"CLOSED"})}}(e.etat)}})]}),Object(x.jsxs)(O.a.Column,{width:250,resizable:!0,children:[Object(x.jsx)(O.a.HeaderCell,{children:"Client"}),Object(x.jsx)(O.a.Cell,{children:function(e){return Object(x.jsxs)("span",{children:[e.client.firstName," ",e.client.lastName]})}})]}),Object(x.jsxs)(O.a.Column,{width:300,resizable:!0,children:[Object(x.jsx)(O.a.HeaderCell,{children:"Date"}),Object(x.jsx)(O.a.Cell,{children:function(e){return p()(e.updatedAt).format("DD MMMM YYYY - HH:mm")}})]}),Object(x.jsxs)(O.a.Column,{width:120,fixed:"right",children:[Object(x.jsx)(O.a.HeaderCell,{children:"Action"}),Object(x.jsx)(O.a.Cell,{children:function(e){return Object(x.jsxs)("button",{disabled:"PAYIED"!==e.etat,onClick:function(){return l(e)},class:"btn btn-indigo  btn-border btn-rounded btn-sm",children:[Object(x.jsx)("i",{class:"fa ".concat("CLOSED"===e.etat||"CANCELED"===e.etat?"fa-check-circle":"PAYIED"!==e.etat?"fa-spinner":"fa-check")})," ","PAYIED"===e.etat?"Close":"CLOSED"===e.etat||"CANCELED"===e.etat?"Closed":"Pending"]})}})]})]}),console.log("tot",n,t),Object(x.jsx)(u.a,{lengthMenu:[{value:5,label:5},{value:10,label:10},{value:20,label:20},{value:50,label:50}],activePage:n,displayLength:i,total:t,onChangePage:c,onChangeLength:r})]})}var N=t(627),E=t(639),C=t(640),w=t(641),y=t(610),k=t(642),P=t(634),D=t(591),S=t(630),A=t(173),I=t(172);function M(e){var a=e.title,t=e.data,n=e.state,s=e.showModal,c=e.closeModal,r=e.btnStatus,i=e.handleChange,l=e.handleImageChange,o=e.onSubmit;return Object(x.jsxs)(N.a,{size:"xs",show:s,onHide:c,children:[Object(x.jsx)(N.a.Header,{children:Object(x.jsx)(N.a.Title,{children:a})}),Object(x.jsxs)(N.a.Body,{children:[n.loading&&Object(x.jsx)(E.a,{description:Object(x.jsx)(C.a,{content:"Loading..."}),style:{marginBottom:"15px"}}),n.error&&Object(x.jsx)(E.a,{type:"error",description:n.error,style:{marginBottom:"15px"}}),Object(x.jsxs)(w.a,{fluid:!0,onChange:i,children:[Object(x.jsxs)(y.a,{children:[Object(x.jsxs)(k.a,{children:["Name ",Object(x.jsx)("code",{children:"*"})]}),Object(x.jsx)(P.a,{name:"nom",value:t.nom})]}),Object(x.jsxs)(y.a,{children:[Object(x.jsxs)(k.a,{children:["Description ",Object(x.jsx)("code",{children:"*"})]}),Object(x.jsx)(P.a,{rows:3,name:"description",value:t.description,componentClass:"textarea"})]})]}),Object(x.jsx)(D.a,{children:"Image"}),Object(x.jsx)(S.a,{name:"image",listType:"picture",disabled:r,autoUpload:!1,onChange:l,children:Object(x.jsx)("button",{children:Object(x.jsx)(A.a,{icon:"camera-retro",size:"lg"})})})]}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(I.a,{onClick:o,appearance:"primary",children:"Submit"}),Object(x.jsx)(I.a,{onClick:c,appearance:"subtle",children:"Cancel"})]})]})}var T=t(10),L=t(79),H=t(635);function R(){var e=Object(j.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],b=Object(T.b)().user,u=Object(j.useState)({title:"",nom:"",description:"",image:"",formData:new FormData,update:!1}),h=Object(i.a)(u,2),p=h[0],m=h[1],O=Object(j.useState)([]),f=Object(i.a)(O,2),g=f[0],N=f[1],E=Object(j.useState)({total:0,page:0,pages:0,limit:10}),C=Object(i.a)(E,2),w=C[0],y=C[1],k=Object(j.useState)({error:"",success:"",loading:!1}),P=Object(i.a)(k,2),D=P[0],S=P[1],A=Object(j.useState)(!1),I=Object(i.a)(A,2),R=I[0],F=I[1],B=D.loading,Y=w.total,_=w.page,z=w.pages,U=w.limit,V=p.title,G=p.image,q=p.update,J=p.formData;var K=function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(Object(r.a)(Object(r.a)({},D),{},{loading:!0})),e.next=3,Object(L.a)("/create/type/".concat(b._id),a);case 3:if(!(t=e.sent)||!t.error){e.next=6;break}return e.abrupt("return",S(Object(r.a)(Object(r.a)({},D),{},{error:t.error,loading:!1})));case 6:H.a.success(t.message,3e3),S(Object(r.a)(Object(r.a)({},D),{},{loading:!1,success:t.message})),n(!1),F(!0);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Comming Soon !");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){Object(c.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(Object(r.a)(Object(r.a)({},D),{},{loading:!0})),e.next=3,Object(L.b)("/read/all/commande/".concat(b._id,"?limit=").concat(U,"&page=").concat(_));case 3:if(!(a=e.sent)||!a.error){e.next=6;break}return e.abrupt("return",S(Object(r.a)(Object(r.a)({},D),{},{loading:!1,error:a.error})));case 6:N(a&&a.data),y(Object(r.a)(Object(r.a)({},w),{},{total:a.total,page:a.page})),S(Object(r.a)(Object(r.a)({},D),{},{loading:!1}));case 9:case"end":return e.stop()}}),e)})))()}),[U,R,_]),Object(x.jsxs)(o.a,{children:[Object(x.jsx)(d.a,{parent:"Home",content:"Order",title:"Order management",create:!1}),Object(x.jsxs)("section",{className:"main-content",children:[Object(x.jsx)(M,{title:V,data:p,showModal:t,state:D,closeModal:function(){S(Object(r.a)(Object(r.a)({},D),{},{loading:!1,error:""})),n(!1),m(Object(r.a)(Object(r.a)({},p),{},{title:"",nom:"",description:"",image:""}))},btnStatus:!!G,handleChange:function(e,a){S(Object(r.a)(Object(r.a)({},D),{},{loading:!1,error:""}));var t=e.nom,n=e.description;m(Object(r.a)(Object(r.a)({},p),{},{nom:t,description:n})),J.set(a.target.name,a.target.value)},handleImageChange:function(e){S(Object(r.a)(Object(r.a)({},D),{},{loading:!1,error:""})),m(Object(r.a)(Object(r.a)({},p),{},{image:e[0]&&e[0].blobFile})),p.formData.append("image",e[0]&&e[0].blobFile)},onSubmit:function(){return q?W(J):K(J)}}),Object(x.jsx)("div",{className:"card",children:Object(x.jsx)(v,{data:g,total:Y,page:_,pages:z,displayLength:U,loading:B,handleChangePage:function(e){y(Object(r.a)(Object(r.a)({},w),{},{page:e}))},handleChangeLength:function(e){S(Object(r.a)(Object(r.a)({},D),{},{loading:!0})),y(Object(r.a)(Object(r.a)({},w),{},{limit:e,page:1}))},handleAction:function(e){var a=e.nom,t=e.description;m(Object(r.a)(Object(r.a)({},p),{},{title:"Update ".concat(a,"'s informations"),nom:a,description:t,update:!0})),n(!0)}})})]}),Object(x.jsx)(l.a,{})]})}},79:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return j}));var n=t(14),s=t.n(n),c=t(22),r=t(15),i=t(10),l=Object(i.b)().token,o=t(16).create({baseURL:"".concat(r.a,"/api"),timeout:1e3,headers:{Accept:"application/json",Authorization:"Bearer ".concat(l)}}),d=function(){var e=Object(c.a)(s.a.mark((function e(a,t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post(a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a,t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get(a);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},81:function(e,a,t){"use strict";t(0);var n=t(1);a.a=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("span",{children:["Copyright \xa9 ",(new Date).getFullYear()," Bienfafood and Designed by"," ",Object(n.jsx)("span",{children:Object(n.jsx)("a",{id:"copyright-link",target:"_blank",href:"https://uptodatedevelopers.com",children:"Uptodate Developers"})})," ","All rights reserved."]})})}},82:function(e,a,t){"use strict";t(0);var n=t(1);a.a=function(e){var a=e.parent,t=e.title,s=e.content,c=e.create,r=e.handelClick,i=e.text;return Object(n.jsxs)("div",{className:"row page-header",children:[Object(n.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsxs)("ol",{className:"breadcrumb",children:[Object(n.jsx)("li",{className:"breadcrumb-item",children:Object(n.jsx)("a",{href:"/",children:a})}),Object(n.jsx)("li",{className:"breadcrumb-item active",children:s})]})]}),c&&Object(n.jsx)("div",{className:"col-md-6 align-self-center text-right",children:Object(n.jsxs)("button",{href:"#","data-toggle":"modal","data-target":".myModal",title:i,onClick:r,className:"btn btn-success box-shadow btn-icon btn-rounded",children:[Object(n.jsx)("i",{className:"fa fa-plus"})," Create new"]})})]})}},84:function(e,a,t){"use strict";var n=t(0),s=t.n(n),c=t(14),r=t.n(c),i=t(22),l=t(75),o=t(12),d=t(2),j=t(10),b=t(15),u=t(1),h=function(e,a){if(e.location.pathname===a)return"active"},p=Object(d.g)((function(e){var a=e.history,t=(e.window,Object(j.b)()),c=t.user,d=(t.token,s.a.useState({firstName:"",lastName:"",role:"",avatar:""})),b=Object(l.a)(d,2),p=b[0],m=b[1];var O=function(e,a){var t=s.a.useState(localStorage.getItem(e)||a),c=Object(l.a)(t,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[e,r]),[r,i]}("dropDown","none"),f=Object(l.a)(O,2),g=f[0],x=f[1],v=function(){var e=Object(i.a)(r.a.mark((function e(){var a,t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.firstName,t=c.lastName,n=c.role,s=c.avatar,m({firstName:a,lastName:t,role:n,avatar:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[]);p.firstName,p.lastName;var N=p.role;p.avatar;return Object(u.jsx)("div",{className:"main-sidebar-nav default-navigation",children:Object(u.jsx)("div",{className:"nano",children:Object(u.jsxs)("div",{className:"nano-content sidebar-nav",children:[Object(u.jsx)("div",{className:"card-body nav-profile",children:Object(u.jsx)("img",{src:"/assets/img/icon1.png",alt:"",srcset:"",width:190})}),Object(u.jsxs)("ul",{className:"metisMenu nav flex-column",id:"menu",children:[Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/")),children:Object(u.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-home"}),Object(u.jsx)("span",{className:"toggle-none",children:"Home"})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"Application Management"})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/type")),onClick:function(){return x("none")},children:Object(u.jsxs)(o.b,{to:"/type",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-tasks"}),Object(u.jsx)("span",{className:"toggle-none",children:"Type "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/ets")),onClick:function(){return x("none")},children:Object(u.jsxs)(o.b,{to:"/ets",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-building"}),Object(u.jsx)("span",{className:"toggle-none",children:"Establishment "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/menu")),onClick:function(){return x("none")},children:Object(u.jsxs)(o.b,{to:"/menu",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-ticket"}),Object(u.jsx)("span",{className:"toggle-none",children:"Menu "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/meal")),onClick:function(){return x("none")},children:Object(u.jsxs)(o.b,{to:"/meal",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-coffee"}),Object(u.jsx)("span",{className:"toggle-none",children:"Meal "})]})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/order")),onClick:function(){return x("none")},children:Object(u.jsxs)(o.b,{to:"/order",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-shopping-basket"}),Object(u.jsx)("span",{className:"toggle-none",children:"Order "})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"Website Management"})}),Object(u.jsx)("li",{className:"nav-item ".concat("active"===g?"active":""),onClick:function(){x((function(){return"active"===g?"none":"active"}))},children:Object(u.jsxs)(o.b,{to:"#",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-th-large"}),Object(u.jsxs)("span",{className:"toggle-none",children:["Landing Page",Object(u.jsx)("span",{class:"fa arrow",style:{transform:"rotate(180deg)"}})]})]})}),Object(u.jsxs)("ul",{class:"nav-second-level nav flex-column",style:{display:"active"===g?"flex":"none"},children:[Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/banner")),children:Object(u.jsx)(o.b,{to:"/banner",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Banner"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/why-choose-us")),children:Object(u.jsx)(o.b,{to:"/why-choose-us",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Why choose us"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/features")),children:Object(u.jsx)(o.b,{to:"/features",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Features"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/download")),children:Object(u.jsx)(o.b,{to:"/download",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Download"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/app-screen")),children:Object(u.jsx)(o.b,{to:"/app-screen",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"App screen"})})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/contact-us")),children:Object(u.jsx)(o.b,{to:"/contact-us",className:"nav-link",children:Object(u.jsx)("span",{className:"toggle-none drop-item",children:"Contact us"})})})]}),(0===N||1===N)&&Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"User management"})}),(0===N||1===N)&&Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/users")),children:Object(u.jsxs)(o.b,{to:"/users",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-group"}),Object(u.jsx)("span",{className:"toggle-none",children:"User "})]})}),Object(u.jsx)("li",{className:"nav-heading",children:Object(u.jsx)("span",{children:"SETTING"})}),Object(u.jsx)("li",{className:"nav-item ".concat(h(a,"/setting")),onClick:function(){return x("none")},children:Object(u.jsxs)(o.b,{to:"/setting",className:"nav-link",children:[Object(u.jsx)("i",{className:"fa fa-cogs"}),Object(u.jsx)("span",{className:"toggle-none",children:"Setting "})]})})]})]})})})})),m=t(23),O=t(8),f=t(79),g=Object(d.g)((function(e){var a,t=e.history,s=(e.window,Object(j.b)().user),c=Object(n.useState)({firstName:"",lastName:"",role:"",avatar:""}),d=Object(l.a)(c,2),h=d[0],p=d[1],g=function(){var e=Object(i.a)(r.a.mark((function e(){var a,t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=s.firstName,t=s.lastName,n=s.role,c=s.avatar,p({firstName:a,lastName:t,role:n,avatar:c});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(n.useState)({logo:"icon.png",icon:"icon.png"}),v=Object(l.a)(x,2),N=v[0],E=v[1],C=N.logo,w=N.icon;Object(n.useEffect)((function(){g(),Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)("/read/config/");case 2:a=e.sent,E(Object(O.a)(Object(O.a)({},N),{},{logo:a.logo,icon:a.icon}));case 4:case"end":return e.stop()}}),e)})))()}),[]),console.log("Config",N);var y=h.firstName,k=h.lastName;h.role,h.avatar;return Object(u.jsx)("div",{className:"top-bar primary-top-bar",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("a",{className:"admin-logo",href:"/",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("img",{alt:"Avatar",src:"".concat(b.a,"/").concat(C),style:{height:"30px"},id:"logo",className:"toggle-none hidden-xs"}),Object(u.jsx)("img",{alt:"icon",src:"".concat(b.a,"/").concat(w),style:{height:"30px"},className:"logo-icon margin-r-10 hidden",id:"icon"})]})}),Object(u.jsx)("div",{className:"left-nav-toggle",children:Object(u.jsx)("a",{href:"#",id:"toogleMenu",className:"nav-collapse",children:Object(u.jsx)("i",{className:"fa fa-bars"})})}),Object(u.jsx)("div",{className:"left-nav-collapsed",children:Object(u.jsx)("a",{href:"#",className:"nav-collapsed",children:Object(u.jsx)("i",{className:"fa fa-bars"})})}),Object(u.jsx)("ul",{className:"list-inline top-right-nav",children:Object(u.jsxs)("li",{className:"dropdown avtar-dropdown",children:[Object(u.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",href:"#",children:[Object(u.jsx)("img",{alt:"prodil",className:"rounded-circle",src:"/assets/img/avtar-4.png",width:30}),y," ",k]}),Object(u.jsxs)("ul",{className:"dropdown-menu top-dropdown",children:[Object(u.jsx)("li",{children:Object(u.jsxs)(o.b,(a={className:"dropdown-item",to:"/setting"},Object(m.a)(a,"className","nav-link"),Object(m.a)(a,"children",[Object(u.jsx)("i",{className:"icon-settings"}),"Param\xe8tres"]),a))}),Object(u.jsx)("li",{className:"dropdown-divider"}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){Object(j.d)((function(){t.push("/login")}))},children:[Object(u.jsx)("i",{className:"icon-logout"})," Se d\xe9connecter"]})})]})]})})]})})})})}));a.a=function(e){var a=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsx)(p,{}),a]})}}}]);
//# sourceMappingURL=10.79560381.chunk.js.map