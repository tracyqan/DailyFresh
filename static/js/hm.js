(function(){var h={},mt={},c={id:"20170dabc7764ef39f6add724c1a2599",dm:["ttsx.newzn.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,aet:'',hca:'BD769743AF50AA3B',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,e){var d;e.V&&(d=new Date,d.setTime(d.getTime()+e.V));document.cookie=b+"="+a+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Ib?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};
mt.lang.ta=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.aa=function(){return mt.lang.d(c.aet,"String")};mt.lang.j=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.C=function(b,a){var e=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return e;if(Array.prototype.indexOf)e=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){e=s;break}return e};
(function(){var b=mt.lang;mt.e={};mt.e.Na=function(a){return document.getElementById(a)};mt.e.Z=function(a,b){var d=[],k=[];if(!a)return k;for(;a.parentNode!=t;){for(var l=0,n=0,p=a.parentNode.childNodes.length,f=0;f<p;f++){var g=a.parentNode.childNodes[f];if(g.nodeName===a.nodeName&&(l++,g===a&&(n=l),0<n&&1<l))break}if((p=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<d.length?p+">"+d.join(">"):p,k.push(p)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<l?"["+n+"]":""));a=a.parentNode}k.push(d.join(">"));return k};mt.e.Ta=function(a){return(a=mt.e.Z(a,s))&&a.length?String(a[0]):""};mt.e.Db=function(a){return mt.e.Z(a,u)};mt.e.Bb=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Oa=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.Cb=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.e.Oa(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.e.getAttribute=function(a,b){var d=a.getAttribute&&a.getAttribute(b)||t;if(!d&&a.attributes&&a.attributes.length)for(var k=a.attributes,l=k.length,n=0;n<l;n++)k[n].nodeName===b&&(d=k[n].nodeValue);return d};mt.e.J=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.Va=function(a){var e="";a.textContent?e=b.trim(a.textContent):
a.innerText&&(e=b.trim(a.innerText));e&&(e=e.replace(/\s+/g," ").substring(0,255));return e};mt.e.Pa=function(a){var b=mt.e.J(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.Va(a);return String(a).substring(0,255)};(function(){(mt.e.gb=function(){function a(){if(!a.M){a.M=s;for(var b=0,d=k.length;b<d;b++)k[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,
1);return}a()}var d=u,k=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,u);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!d)if(d=s,"complete"===document.readyState)a.M=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",l,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
l);window.attachEvent("onload",a);var k=u;try{k=window.frameElement==t}catch(p){}document.documentElement.doScroll&&k&&b()}})();return function(b){a.M?b():k.push(b)}}()).M=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,e){b.attachEvent?b.attachEvent("on"+a,function(a){e.call(b,a)}):b.addEventListener&&b.addEventListener(a,e,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.sa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.cb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.ib=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.K=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.B=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var e=["["],l=d.length,n,p,f;for(p=0;p<l;p++)switch(f=d[p],typeof f){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.l.stringify(f)),n=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';n=["{"];p=mt.l.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(f=
d[l],typeof f){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(p(l)+":"+p(f))}n.push("}");return n.join("")}}}();mt.localStorage={};mt.localStorage.P=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.P()&&(mt.localStorage.h.expires=d.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(b,a),mt.localStorage.h.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),e=b.substring(0,a)-0;if(e&&e>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.P())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(b)}catch(d){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.P())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(b),mt.localStorage.h.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(e){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.xa={};mt.xa.log=function(b,a){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=t;e=window[d]=t;a&&a(b)};e.src=b};mt.ha={};
mt.ha.Wa=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return b};
mt.ha.Ab=function(b,a,e,d,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+e+'" height="'+d+'" src="'+a+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var e=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return e?e[3]:t};mt.url.Eb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.Ra=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.Y=function(b){return(b=mt.url.Ra(b))?b.replace(/:\d+$/,""):b};mt.url.Z=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,k=0;k<d;k++){var l=b[k].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.Ma=b})();var A=h.Ma;
h.p={Fb:"http://tongji.baidu.com/hm-web/welcome/ico",wa:"hm.baidu.com/hm.gif",Ca:"tongji.baidu.com",$a:"hmmd",ab:"hmpl",ub:"utm_medium",Za:"hmkw",wb:"utm_term",Xa:"hmci",tb:"utm_content",bb:"hmsr",vb:"utm_source",Ya:"hmcu",rb:"utm_campaign",w:0,m:Math.round(+new Date/1E3),z:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",ca:A()||"https:"===document.location.protocol?"https:":"http:",Gb:0,yb:6E5,fb:6E5,Hb:5E3,zb:5,T:1024,xb:1,da:2147483647,ya:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
D:s,na:["a","input","button"],Ea:{id:"data-hm-id",S:"data-hm-class",ka:"data-hm-xpath",content:"data-hm-content",O:"data-hm-tag",link:"data-hm-link"},ma:"data-hm-enabled",la:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},I:function(a,b){this.r[a]=this.r[a]||[];for(var d=this.r[a].length,k=0;k<d;k++)this.r[a][k](b)}};return h.A=b})();
(function(){function b(b,d){var k=document.createElement("script");k.charset="utf-8";a.d(d,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=t,d()}:k.onload=function(){d()});k.src=b;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var a=mt.lang;return h.load=b})();
(function(){var b=mt.lang,a=mt.e,e=mt.event,d=mt.g,k=h.p,l=h.A,n=+new Date,p=[],f={oa:function(){return function(g){if(h.b&&h.b.D&&c.aet&&c.aet.length){var d=g.target||g.srcElement;if(d){var m=h.b.na,q=a.getAttribute(d,k.ma)!=t?s:u;if(a.getAttribute(d,k.la)==t)if(q)f.Q(f.X(d,g));else{var e=a.J(d);if(b.C(m,"*")||b.C(m,e))f.Q(f.X(d,g));else for(;d.parentNode!=t;){var q=d.parentNode,e=a.J(q),v="a"===e&&b.C(m,"a")?s:u,e="button"===e&&b.C(m,"button")?s:u,y=a.getAttribute(q,k.ma)!=t?s:u;if(a.getAttribute(q,
k.la)==t&&(v||e||y)){f.Q(f.X(q,g));break}d=d.parentNode}}}}}},X:function(g,e){var m={},q=k.Ea;m.id=a.getAttribute(g,q.id)||a.getAttribute(g,"id")||"";m.S=a.getAttribute(g,q.S)||a.getAttribute(g,"class")||"";m.ka=a.getAttribute(g,q.ka)||a.Ta(g);m.content=a.getAttribute(g,q.content)||a.Pa(g);m.O=a.getAttribute(g,q.O)||a.J(g);m.link=a.getAttribute(g,q.link)||a.getAttribute(g,"href")||"";m.type=e.type||"click";q=b.ta(g.offsetTop)?g.offsetTop:0;"click"===e.type?q=d.sa?e.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):e.pageY:"touchend"===e.type&&(e.ea&&b.d(e.ea.changedTouches,"Array")&&e.ea.changedTouches.length)&&(q=e.ea.changedTouches[0].pageY);m.qb=q;return m},Q:function(g){var a=b.j,a=[+new Date-(h.b.s!==r?h.b.s:n),a(g.id),a(g.S),a(g.O),a(g.ka),a(g.link),a(g.content),g.type,g.qb].join("*");f.R(a);b.C(["a"],g.O)&&b.d(this.G(),"Function")&&this.G()()},R:function(a){a.length>k.T||(encodeURIComponent(p.join("!")+a).length>k.T&&(f.H(p.join("!")),p=[]),p.push(a))},H:function(a){h.b.a.et=
5;h.b.a.ep=a;h.b.i()},G:function(){return function(){p&&p.length&&(f.H(p.join("!")),p=[])}}};b.aa()&&""!==c.aet&&l.c("pv-b",function(){e.c(document,"click",f.oa());"ontouchend"in document&&e.c(window,"touchend",f.oa());e.c(window,"unload",f.G())});return f})();
(function(){var b=mt.event,a=mt.g,e=h.p,d=h.A,k=+new Date,l=[],n=t,p={Ia:function(){return function(){h.b&&(h.b.D&&c.aet&&c.aet.length)&&(window.clearTimeout(n),n=window.setTimeout(function(){p.Aa(a.K()+a.B())},150))}},Aa:function(a){p.R([+new Date-(h.b.s!==r?h.b.s:k),a].join("*"))},R:function(a){if(encodeURIComponent(l.join("!")+a).length>e.T||5<l.length)p.H(l.join("!")),l=[];l.push(a)},H:function(b){h.b.a.et=6;h.b.a.vh=a.B();h.b.a.ep=b;h.b.i()},G:function(){return function(){l&&l.length&&(p.H(l.join("!")),
l=[])}}};mt.lang.aa()&&""!==c.aet&&d.c("pv-b",function(){b.c(window,"scroll",p.Ia());b.c(window,"unload",p.G())});return p})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.U.Sa()+","+h.U.Qa();h.b.i()}}function a(){clearTimeout(z);var b;v&&(b="visible"==document[v]);y&&(b=!document[y]);p="undefined"==typeof b?s:b;if((!n||!f)&&p&&g)x=s,m=+new Date;else if(n&&f&&(!p||!g))x=u,q+=+new Date-m;n=p;f=g;z=setTimeout(a,100)}function e(a){var g=document,b="";if(a in g)b=a;else for(var m=["webkit","ms","moz","o"],q=0;q<m.length;q++){var e=m[q]+a.charAt(0).toUpperCase()+a.slice(1);if(e in g){b=
e;break}}return b}function d(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))g="focus"==b.type||"focusin"==b.type?s:u,a()}var k=mt.event,l=h.A,n=s,p=s,f=s,g=s,w=+new Date,m=w,q=0,x=s,v=e("visibilityState"),y=e("hidden"),z;a();(function(){var g=v.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,g,a);k.c(window,"pageshow",a);k.c(window,"pagehide",a);"object"==typeof document.onfocusin?(k.c(document,"focusin",d),k.c(document,"focusout",d)):(k.c(window,"focus",d),
k.c(window,"blur",d))})();h.U={Sa:function(){return+new Date-w},Qa:function(){return x?+new Date-m+q:q}};l.c("pv-b",function(){k.c(window,"unload",b())});return h.U})();
(function(){var b=mt.lang,a=h.p,e=h.load,d={eb:function(d){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.W();e([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},pb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ga=d})();
(function(){function b(a,b,m,q){if(!(a===r||b===r||q===r)){if(""===a)return[b,m,q].join("*");a=String(a).split("!");for(var e,d=u,f=0;f<a.length;f++)if(e=a[f].split("*"),String(b)===e[0]){e[1]=m;e[2]=q;a[f]=e.join("*");d=s;break}d||a.push([b,m,q].join("*"));return a.join("!")}}function a(g){for(var b in g)if({}.hasOwnProperty.call(g,b)){var m=g[b];e.d(m,"Object")||e.d(m,"Array")?a(m):g[b]=String(m)}}var e=mt.lang,d=mt.l,k=mt.g,l=h.p,n=h.A,p=h.Ga,f={F:[],N:0,ua:u,o:{ia:"",page:""},init:function(){f.f=
0;n.c("pv-b",function(){f.Ha();f.Ka()});n.c("pv-d",function(){f.La();f.o.page=""});n.c("stag-b",function(){h.b.a.api=f.f||f.N?f.f+"_"+f.N:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f.o.ia,f.o.page].join("!")});n.c("stag-d",function(){h.b.a.api=0;f.f=0;f.N=0})},Ha:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var g=arguments[b];e.d(g,"Array")&&(a.cmd[a.id].push(g),"_setAccount"===
g[0]&&(1<g.length&&/^[0-9a-f]{32}$/.test(g[1]))&&(g=g[1],a.id=g,a.cmd[g]=a.cmd[g]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Ka:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],m=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,d=b.length;e<d;e++){var v=b[e];m.test(v[0])?f.F.push(v):f.fa(v)}a.cmd[c.id]={push:f.fa}},La:function(){if(0<f.F.length)for(var a=0,b=f.F.length;a<b;a++)f.fa(f.F[a]);f.F=t},fa:function(a){var b=a[0];if(f.hasOwnProperty(b)&&
e.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))f.f|=2,h.b.qa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=k.K()+k.B();h.b.a.kb=0;h.b.$?(h.b.a.nv=0,h.b.a.st=4):h.b.$=s;var b=h.b.a.u,m=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+a[1];f.ua||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;h.b.a.su=
m;h.b.s=+new Date}},_trackEvent:function(a){2<a.length&&(f.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=e.j(a[1])+"*"+e.j(a[2])+(a[3]?"*"+e.j(a[3]):"")+(a[4]?"*"+e.j(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],m=a[4]||3;if(0<b&&6>b&&0<m&&4>m){f.N++;for(var d=(h.b.a.cv||"*").split("!"),k=d.length;k<b-1;k++)d.push("*");d[b-1]=m+"*"+e.j(a[2])+"*"+e.j(a[3]);h.b.a.cv=d.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.hb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var m=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),m=b(m,d,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(m),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var m=f.o.ia,m=b(m,d,2,a);f.o.ia=m}}},_setPageTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var m=f.o.page,
m=b(m,d,3,a);f.o.page=m}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],f.ua=s)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),f.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=d.stringify(b),
512>=encodeURIComponent(b).length&&(f.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var k=function(a){var b=h.b.a.rt;f.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},m=b.length;if(900>=m)k.call(this,b);else for(var m=Math.ceil(m/900),q="block|"+Math.round(Math.random()*l.da).toString(16)+"|"+m+"|",n=[],v=0;v<m;v++)n.push(v),n.push(b.substring(900*v,900*v+900)),k.call(this,q+n.join("|")),n=[]}},_setUserId:function(a){a=a[1];p.eb();
p.pb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.ra=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.D=a}};f.init();h.Da=f;return h.Da})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.ra=this.qa=s,this.D=g.D,this.na=k.aa()&&0<c.aet.length?c.aet.split(","):"",this.$=u,this.init())}var a=mt.url,e=mt.xa,d=mt.ha,k=mt.lang,l=mt.cookie,n=mt.g,p=mt.localStorage,f=mt.sessionStorage,g=h.p,w=h.A;b.prototype={ba:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},va:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},L:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.va(b,c.dm[d]))return s}else{var e=a.Y(b);if(e&&this.ba(e,c.dm[d]))return s}return u},W:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ba(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},pa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.va(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+
"/"}return"/"},Ua:function(){if(!document.referrer)return g.m-g.w>c.vdur?1:4;var b=u;this.L(document.referrer)&&this.L(document.location.href)?b=s:(b=a.Y(document.referrer),b=this.ba(b||"",document.location.hostname));return b?g.m-g.w>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||f.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.W(),path:this.pa(),V:d}),d?p.set(a,b,d):f.set(a,b)}catch(e){}},hb:function(a){try{l.set(a,"",{domain:this.W(),path:this.pa(),V:-1}),
f.remove(a),p.remove(a)}catch(b){}},nb:function(){var a,b,d,e,f;g.w=this.getData("Hm_lpvt_"+c.id)||0;13===g.w.length&&(g.w=Math.round(g.w/1E3));b=this.Ua();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<g.m-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.m);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.m,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,
g.m);d=g.m===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.L(document.location.href)&&(""===document.referrer||this.L(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},mb:function(){for(var a=[],b=this.a.et,d=+new Date,e=0,f=g.ya.length;e<f;e++){var k=g.ya[e],l=this.a[k];"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+
g.z);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+g.z);break;case 5:a.push("sn="+g.z);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+g.z);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+g.z);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},ob:function(){this.nb();this.a.si=c.id;this.a.hca="0"===c.hca?r:c.hca;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=n.ib;this.a.cl=n.colorDepth+
"-bit";this.a.ln=String(n.language).toLowerCase();this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.Wa();this.a.v="1.2.39";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=n.K()+n.B();var b=document.location.href;this.a.cm=a.k(b,g.$a)||"";this.a.cp=a.k(b,g.ab)||a.k(b,g.ub)||"";this.a.cw=a.k(b,g.Za)||a.k(b,g.wb)||"";this.a.ci=a.k(b,g.Xa)||a.k(b,g.tb)||"";this.a.cf=a.k(b,g.bb)||a.k(b,g.vb)||
"";this.a.cu=a.k(b,g.Ya)||a.k(b,g.rb)||""},init:function(){try{this.ob(),0===this.a.nv?this.lb():this.ga(".*"),h.b=this,this.Fa(),w.I("pv-b"),this.jb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(g.ca+"//"+g.wa+"?"+b.join("&"))}},jb:function(){function a(){w.I("pv-d")}this.qa?(this.$=s,this.a.et=0,this.a.ep="",this.a.vl=n.K()+n.B(),this.i(a)):a();this.s=+new Date},i:function(a){if(this.ra){var b=
this;b.a.rnd=Math.round(Math.random()*g.da);w.I("stag-b");var d=g.ca+"//"+g.wa+"?"+b.mb();w.I("stag-d");b.Ba(d);e.log(d,function(d){b.ga(d);k.d(a,"Function")&&a.call(b)})}},Fa:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.Y(document.referrer)===g.Ca?1:0,f=a.k(b,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&k)&&(this.a.rnd=Math.round(Math.random()*g.da),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset",
"utf-8"),b.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},Ba:function(a){var b=f.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");f.set("Hm_unsent_"+c.id,b)},ga:function(a){var b=f.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+
"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?f.set("Hm_unsent_"+c.id,b):f.remove("Hm_unsent_"+c.id))},lb:function(){var a=this,b=f.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(g.ca+"//"+decodeURIComponent(b),function(b){a.ga(b)})},k=0,l=b.length;k<l;k++)d(b[k])}};return new b})();
(function(){var b=mt.event,a=mt.lang,e=h.p;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.ta(h.b.a.kb)?h.b.a.kb:0;var d=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){d()});setInterval(d,e.fb)}})();var B=h.p,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.g,a=mt.lang,e=mt.event,d=mt.l;if("undefined"!==typeof h.b&&(c.med||(!b.sa||7<b.cb)&&c.cvcc)){var k,l,n,p,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},g=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(b,e){var f={};f.n=k;f.t="clk";f.v=b;if(e){var g=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):t,m=e.getAttribute("id")||"";n.test(g)?(f.sn="mediate",
f.snv=g):a.d(l,"String")&&n.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.i();for(f=+new Date;400>=+new Date-f;);};if(c.med)l="/zoosnet",k="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";k="other";n=c.cvcc.q||r;var m=c.cvcc.id||r;p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],n!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),m?(d=d.getAttribute("id"),(n.test(e)||n.test(g)||m.test(d))&&
a.push(b[k])):(n.test(e)||n.test(g))&&a.push(b[k])):m!==r&&(d=d.getAttribute("id"),m.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof n){var q;l+=/\/$/.test(l)?"":"/";var x=function(b,d){if(q===d)return w(l+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return w(l+b+"/"+(e+1),d[e]),u};e.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(g(p,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&g(d,x)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,e=mt.event,d=mt.l;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={za:function(){for(var a=c.cvcf.length,d,p=0;p<a;p++)(d=b.Na(decodeURIComponent(c.cvcf[p])))&&e.c(d,"click",k.Ja())},Ja:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.i()}}};b.gb(function(){k.za()})}})();
(function(){var b=mt.event,a=mt.l;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=a.stringify(d);h.b.i()};b.c(document,"click",function(){d.clk++});b.c(document,"keyup",function(){d.kb=1});b.c(window,"scroll",function(){d.sb++});b.c(window,"unload",function(){d.t=+new Date-e;k()});b.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
