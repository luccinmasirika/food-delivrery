/*! For license information please see 4.f8d52777.chunk.js.LICENSE.txt */
(this.webpackJsonpBienfafood=this.webpackJsonpBienfafood||[]).push([[4],{122:function(e,i,n){var s=n(253),r=n(117);e.exports=function(e,i,n){(void 0!==n&&!r(e[i],n)||void 0===n&&!(i in e))&&s(e,i,n)}},123:function(e,i){e.exports=function(e,i){if(("constructor"!==i||"function"!==typeof e[i])&&"__proto__"!=i)return e[i]}},163:function(e,i,n){var s=n(172),r=n(164)((function(e,i,n){s(e,i,n)}));e.exports=r},164:function(e,i,n){var s=n(255),r=n(177);e.exports=function(e){return s((function(i,n){var s=-1,t=n.length,o=t>1?n[t-1]:void 0,a=t>2?n[2]:void 0;for(o=e.length>3&&"function"==typeof o?(t--,o):void 0,a&&r(n[0],n[1],a)&&(o=t<3?void 0:o,t=1),i=Object(i);++s<t;){var l=n[s];l&&e(i,l,s,o)}return i}))}},172:function(e,i,n){var s=n(247),r=n(122),t=n(267),o=n(173),a=n(96),l=n(142),d=n(123);e.exports=function e(i,n,u,c,w){i!==n&&t(n,(function(t,l){if(w||(w=new s),a(t))o(i,n,l,u,e,c,w);else{var m=c?c(d(i,l),t,l+"",i,n,w):void 0;void 0===m&&(m=t),r(i,l,m)}}),l)}},173:function(e,i,n){var s=n(122),r=n(268),t=n(269),o=n(246),a=n(270),l=n(174),d=n(90),u=n(254),c=n(175),w=n(94),m=n(96),b=n(151),f=n(248),p=n(123),h=n(176);e.exports=function(e,i,n,v,g,y,x){var O=p(e,n),E=p(i,n),k=x.get(E);if(k)s(e,n,k);else{var S=y?y(O,E,n+"",e,i,x):void 0,C=void 0===S;if(C){var N=d(E),F=!N&&c(E),A=!N&&!F&&f(E);S=E,N||F||A?d(O)?S=O:u(O)?S=o(O):F?(C=!1,S=r(E,!0)):A?(C=!1,S=t(E,!0)):S=[]:b(E)||l(E)?(S=O,l(O)?S=h(O):m(O)&&!w(O)||(S=a(E))):C=!1}C&&(x.set(E,S),g(S,E,v,y,x),x.delete(E)),s(e,n,S)}}},176:function(e,i,n){var s=n(152),r=n(142);e.exports=function(e){return s(e,r(e))}},177:function(e,i,n){var s=n(117),r=n(108),t=n(162),o=n(96);e.exports=function(e,i,n){if(!o(n))return!1;var a=typeof i;return!!("number"==a?r(n)&&t(i,n.length):"string"==a&&i in n)&&s(n[i],e)}},310:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,r=n(0),t=(s=r)&&"object"===typeof s&&"default"in s?s.default:s,o=new(n(337)),a=o.getBrowser(),l=(o.getCPU(),o.getDevice()),d=o.getEngine(),u=o.getOS(),c=o.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},b=function(e){var i=m();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function h(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function v(){return(v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function g(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,s)}return n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,i){return(x=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function O(e,i){if(null==e)return{};var n,s,r=function(e,i){if(null==e)return{};var n,s,r={},t=Object.keys(e);for(s=0;s<t.length;s++)n=t[s],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)n=t[s],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k="mobile",S="tablet",C="smarttv",N="console",F="wearable",A=void 0,P={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},M={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},T={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},_=function(e,i,n,s){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?g(n,!0).forEach((function(i){h(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(s)})},V=function(e){switch(e){case k:return{isMobile:!0};case S:return{isTablet:!0};case C:return{isSmartTV:!0};case N:return{isConsole:!0};case F:return{isWearable:!0};case A:return{isBrowser:!0};default:return T}}(l.type);var W=function(){return"string"===typeof c&&-1!==c.indexOf("Edg/")},j=function(){return l.type===A},B=function(){return a.name===P.Edge},I=function(){return b("iPad")},L=l.type===C,z=l.type===N,R=l.type===F,q=a.name===P.MobileSafari||I(),U=a.name===P.Chromium,D=function(){switch(l.type){case k:case S:return!0;default:return!1}}()||I(),G=l.type===k,H=l.type===S||I(),Z=j(),Y=j(),$=u.name===M.Android,X=u.name===M.WindowsPhone,J=u.name===M.IOS||I(),K=a.name===P.Chrome,Q=a.name===P.Firefox,ee=a.name===P.Safari||a.name===P.MobileSafari,ie=a.name===P.Opera,ne=a.name===P.InternetExplorer||a.name===P.Ie,se=w(u.version),re=w(u.name),te=w(a.version),oe=w(a.major),ae=w(a.name),le=w(l.vendor),de=w(l.model),ue=w(d.name),ce=w(d.version),we=w(c),me=B()||W(),be=a.name===P.Yandex,fe=w(l.type,"browser"),pe=function(){var e=m();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),he=I(),ve=b("iPhone"),ge=b("iPod"),ye=function(){var e=m(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),xe=W(),Oe=B()&&!W(),Ee=u.name===M.Windows,ke=u.name===M.MAC_OS,Se=a.name===P.MIUI,Ce=a.name===P.SamsungBrowser;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return $?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.BrowserTypes=P,i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return Z?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return z?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=e.condition,l=O(e,["renderWithFragment","children","viewClassName","style","condition"]);return a?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},l),n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return ne?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return J?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return G?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return D?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.OsTypes=M,i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return L?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return H?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return R?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return X?i?t.createElement(r.Fragment,null,n):t.createElement("div",v({className:s,style:o},a),n):null},i.browserName=ae,i.browserVersion=oe,i.deviceDetect=function(){var e=V.isBrowser,i=V.isMobile,n=V.isTablet,s=V.isSmartTV,r=V.isConsole,t=V.isWearable;return e?function(e,i,n,s,r){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(s.name),osVersion:w(s.version),userAgent:w(r)}}(e,a,d,u,c):s?function(e,i,n,s){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}}(s,d,u,c):r?function(e,i,n,s){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}}(r,d,u,c):i||n?_(V,l,u,c):t?function(e,i,n,s){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}}(t,d,u,c):void 0},i.deviceType=fe,i.engineName=ue,i.engineVersion=ce,i.fullBrowserVersion=te,i.getUA=we,i.isAndroid=$,i.isBrowser=Z,i.isChrome=K,i.isChromium=U,i.isConsole=z,i.isDesktop=Y,i.isEdge=me,i.isEdgeChromium=xe,i.isElectron=ye,i.isFirefox=Q,i.isIE=ne,i.isIOS=J,i.isIOS13=pe,i.isIPad13=he,i.isIPhone13=ve,i.isIPod13=ge,i.isLegacyEdge=Oe,i.isMIUI=Se,i.isMacOs=ke,i.isMobile=D,i.isMobileOnly=G,i.isMobileSafari=q,i.isOpera=ie,i.isSafari=ee,i.isSamsungBrowser=Ce,i.isSmartTV=L,i.isTablet=H,i.isWearable=R,i.isWinPhone=X,i.isWindows=Ee,i.isYandex=be,i.mobileModel=de,i.mobileVendor=le,i.osName=re,i.osVersion=se,i.withOrientationChange=function(e){return function(i){function n(e){var i,s,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),s=this,(i=!(r=y(n).call(this,e))||"object"!==typeof r&&"function"!==typeof r?E(s):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(E(i)),i.onOrientationChange=i.onOrientationChange.bind(E(i)),i.onPageLoad=i.onPageLoad.bind(E(i)),i.state={isLandscape:!1,isPortrait:!1},i}var s,r,o;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&x(e,i)}(n,i),s=n,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":f(window))&&D&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,v({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&p(s.prototype,r),o&&p(s,o),n}(t.Component)}},337:function(e,i,n){var s;!function(r,t){"use strict";var o="function",a="undefined",l="object",d="string",u="model",c="name",w="type",m="vendor",b="version",f="architecture",p="console",h="mobile",v="tablet",g="smarttv",y="wearable",x="embedded",O={extend:function(e,i){var n={};for(var s in e)i[s]&&i[s].length%2===0?n[s]=i[s].concat(e[s]):n[s]=e[s];return n},has:function(e,i){return typeof e===d&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===d?e.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof i===a?e:e.substring(0,255)}},E={rgx:function(e,i){for(var n,s,r,a,d,u,c=0;c<i.length&&!d;){var w=i[c],m=i[c+1];for(n=s=0;n<w.length&&!d;)if(d=w[n++].exec(e))for(r=0;r<m.length;r++)u=d[++s],typeof(a=m[r])===l&&a.length>0?2==a.length?typeof a[1]==o?this[a[0]]=a[1].call(this,u):this[a[0]]=a[1]:3==a.length?typeof a[1]!==o||a[1].exec&&a[1].test?this[a[0]]=u?u.replace(a[1],a[2]):t:this[a[0]]=u?a[1].call(this,u,a[2]):t:4==a.length&&(this[a[0]]=u?a[3].call(this,u.replace(a[1],a[2])):t):this[a]=u||t;c+=2}},str:function(e,i){for(var n in i)if(typeof i[n]===l&&i[n].length>0){for(var s=0;s<i[n].length;s++)if(O.has(i[n][s],e))return"?"===n?t:n}else if(O.has(i[n],e))return"?"===n?t:n;return e}},k={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},S={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[c,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[b,[c,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[c,b],[/opios[\/\s]+([\w\.]+)/i],[b,[c,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[b,[c,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,b],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[b,[c,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[b,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[b,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[c,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[b,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[b,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure Browser"],b],[/focus\/([\w\.]+)/i],[b,[c,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[b,[c,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[b,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[c,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[b,[c,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[b,[c,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[c,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 Browser"],b],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],b],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[c,b],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[c],[/;fbav\/([\w\.]+);/i],[b,[c,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[c,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[c,b],[/\bgsa\/([\w\.]+)\s.*safari\//i],[b,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[b,[c,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[c,"Chrome WebView"],b],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[b,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[c,b],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[b,[c,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[b,c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[c,[b,E.str,k.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[c,b],[/(navigator|netscape)\/([\w\.-]+)/i],[[c,"Netscape"],b],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[b,[c,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[c,b]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,O.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[f,/ower/,"",O.lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,O.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[u,[m,"Samsung"],[w,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[u,[m,"Samsung"],[w,h]],[/\((ip(?:hone|od)[\s\w]*);/i],[u,[m,"Apple"],[w,h]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[m,"Apple"],[w,v]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[u,[m,"Huawei"],[w,v]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[u,[m,"Huawei"],[w,h]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[u,/_/g," "],[m,"Xiaomi"],[w,h]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[u,/_/g," "],[m,"Xiaomi"],[w,v]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[u,[m,"OPPO"],[w,h]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[u,[m,"Vivo"],[w,h]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[u,[m,"Realme"],[w,h]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[u,[m,"Motorola"],[w,h]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[m,"Motorola"],[w,v]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[u,[m,"LG"],[w,v]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[u,[m,"LG"],[w,h]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[u,[m,"Lenovo"],[w,v]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[u,/_/g," "],[m,"Nokia"],[w,h]],[/droid.+;\s(pixel\sc)[\s)]/i],[u,[m,"Google"],[w,v]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[u,[m,"Google"],[w,h]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[m,"Sony"],[w,h]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[u,"Xperia Tablet"],[m,"Sony"],[w,v]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[u,[m,"OnePlus"],[w,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[u,[m,"Amazon"],[w,v]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[u,"Fire Phone"],[m,"Amazon"],[w,h]],[/\((playbook);[\w\s\),;-]+(rim)/i],[u,m,[w,v]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[u,[m,"BlackBerry"],[w,h]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[u,[m,"ASUS"],[w,v]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[u,[m,"ASUS"],[w,h]],[/(nexus\s9)/i],[u,[m,"HTC"],[w,v]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[m,[u,/_/g," "],[w,h]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[m,"Acer"],[w,v]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[u,[m,"Meizu"],[w,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,u,[w,h]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[m,u,[w,v]],[/\s(surface\sduo)\s/i],[u,[m,"Microsoft"],[w,v]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[u,[m,"Fairphone"],[w,h]],[/\s(u304aa)\sbuild/i],[u,[m,"AT&T"],[w,h]],[/sie-(\w*)/i],[u,[m,"Siemens"],[w,h]],[/[;\/]\s?(rct\w+)\sbuild/i],[u,[m,"RCA"],[w,v]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[u,[m,"Dell"],[w,v]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[u,[m,"Verizon"],[w,v]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[u,[m,"Barnes & Noble"],[w,v]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[u,[m,"NuVision"],[w,v]],[/;\s(k88)\sbuild/i],[u,[m,"ZTE"],[w,v]],[/;\s(nx\d{3}j)\sbuild/i],[u,[m,"ZTE"],[w,h]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[u,[m,"Swiss"],[w,h]],[/[;\/]\s?(zur\d{3})\sbuild/i],[u,[m,"Swiss"],[w,v]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[u,[m,"Zeki"],[w,v]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[m,"Dragon Touch"],u,[w,v]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[u,[m,"Insignia"],[w,v]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[u,[m,"NextBook"],[w,v]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[m,"Voice"],u,[w,h]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[m,"LvTel"],u,[w,h]],[/;\s(ph-1)\s/i],[u,[m,"Essential"],[w,h]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[u,[m,"Envizen"],[w,v]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[u,[m,"MachSpeed"],[w,v]],[/[;\/]\s?tu_(1491)\sbuild/i],[u,[m,"Rotor"],[w,v]],[/(shield[\w\s]+)\sbuild/i],[u,[m,"Nvidia"],[w,v]],[/(sprint)\s(\w+)/i],[m,u,[w,h]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[m,"Microsoft"],[w,h]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[m,"Zebra"],[w,v]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[m,"Zebra"],[w,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[m,u,[w,p]],[/droid.+;\s(shield)\sbuild/i],[u,[m,"Nvidia"],[w,p]],[/(playstation\s[345portablevi]+)/i],[u,[m,"Sony"],[w,p]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[u,[m,"Microsoft"],[w,p]],[/smart-tv.+(samsung)/i],[m,[w,g]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[m,"Samsung"],[w,g]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[m,"LG"],[w,g]],[/(apple)\s?tv/i],[m,[u,"Apple TV"],[w,g]],[/crkey/i],[[u,"Chromecast"],[m,"Google"],[w,g]],[/droid.+aft([\w])(\sbuild\/|\))/i],[u,[m,"Amazon"],[w,g]],[/\(dtv[\);].+(aquos)/i],[u,[m,"Sharp"],[w,g]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,O.trim],[u,O.trim],[w,g]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[w,g]],[/((pebble))app\/[\d\.]+\s/i],[m,u,[w,y]],[/droid.+;\s(glass)\s\d/i],[u,[m,"Google"],[w,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[u,[m,"Zebra"],[w,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[m,[w,x]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[u,[w,h]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[u,[w,v]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[w,O.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[m,"Generic"]],[/(phone)/i],[[w,h]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[b,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,b],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[c,[b,E.str,k.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[b,E.str,k.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[c,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[c,"Mac OS"],[b,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[c,b],[/\(bb(10);/i],[b,[c,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[b,[c,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[b,[c,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],b],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[c,b],[/(sunos)\s?([\w\.\d]*)/i],[[c,"Solaris"],b],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[c,b]]},C=function e(i,n){if("object"===typeof i&&(n=i,i=t),!(this instanceof e))return new e(i,n).getResult();var s=i||("undefined"!==typeof r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=n?O.extend(S,n):S;return this.getBrowser=function(){var e={name:t,version:t};return E.rgx.call(e,s,o.browser),e.major=O.major(e.version),e},this.getCPU=function(){var e={architecture:t};return E.rgx.call(e,s,o.cpu),e},this.getDevice=function(){var e={vendor:t,model:t,type:t};return E.rgx.call(e,s,o.device),e},this.getEngine=function(){var e={name:t,version:t};return E.rgx.call(e,s,o.engine),e},this.getOS=function(){var e={name:t,version:t};return E.rgx.call(e,s,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=typeof e===d&&e.length>255?O.trim(e,255):e,this},this.setUA(s),this};C.VERSION="0.7.28",C.BROWSER={NAME:c,MAJOR:"major",VERSION:b},C.CPU={ARCHITECTURE:f},C.DEVICE={MODEL:u,VENDOR:m,TYPE:w,CONSOLE:p,MOBILE:h,SMARTTV:g,TABLET:v,WEARABLE:y,EMBEDDED:x},C.ENGINE={NAME:c,VERSION:b},C.OS={NAME:c,VERSION:b},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=C),i.UAParser=C):(s=function(){return C}.call(i,n,i,e))===t||(e.exports=s);var N="undefined"!==typeof r&&(r.jQuery||r.Zepto);if(N&&!N.ua){var F=new C;N.ua=F.getResult(),N.ua.get=function(){return F.getUA()},N.ua.set=function(e){F.setUA(e);var i=F.getResult();for(var n in i)N.ua[n]=i[n]}}}("object"===typeof window?window:this)}}]);
//# sourceMappingURL=4.f8d52777.chunk.js.map