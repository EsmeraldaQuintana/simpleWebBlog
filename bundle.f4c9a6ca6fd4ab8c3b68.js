!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(e){u=e}function i(){u.innerHTML=o.default}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n(7);var u=void 0,s={render:i,setContainer:r};t.default=s},function(e,t,n){"use strict";function r(e){o=e}function i(){o.innerHTML=a}Object.defineProperty(t,"__esModule",{value:!0}),n(8);var a='\n    <div class="Blog">\n        <h2>Blog</h2>\n        <p>Cras at blandit ligula, id viverra nibh. Ut convallis malesuada sem,\n        et pretium elit varius quis. Quisque risus orci, maximus non nunc vitae,\n         bibendum faucibus dolor. Donec eu odio orci. Duis quis scelerisque dolo\n         r, eu tempor tellus. Aliquam varius, eros a ullamcorper malesuada, feli\n         s diam suscipit enim, vitae condimentum elit libero ac risus. Suspendis\n         se neque est, ornare lacinia mollis gravida, sagittis et mi. Sed ullam\n         corper lacus nec ligula semper, nec vestibulum eros luctus. Etiam tempo\n         r enim malesuada, ultricies magna in, facilisis metus. Duis ante nisi,\n         hendrerit id magna nec, tempor dictum nisi. Quisque id egestas est, nec\n          condimentum felis. Nulla a varius nulla. Vestibulum cursus urna at tur\n          pis egestas, vel interdum lorem malesuada. Donec scelerisque tincidunt\n           pellentesque.</p>\n    </div>',o=void 0,u={render:i,setContainer:r};t.default=u},function(e,t,n){"use strict";function r(e){o=e}function i(){o.innerHTML=a}Object.defineProperty(t,"__esModule",{value:!0}),n(9);var a='\n    <div class="Home">\n        <h2>Home</h2>\n        <p>Maecenas porttitor purus at lacus faucibus, sed eleifend erat eleifen\n        d. Mauris pulvinar enim odio, et tempus ante fringilla sed. In porttitor\n         sodales lacus, eu tempor sem commodo vitae. Maecenas sollicitudin lectu\n         s sed facilisis aliquam. Lorem ipsum dolor sit amet, consectetur adipis\n         cing elit. Sed tincidunt magna eu augue volutpat, nec ultricies mauris\n         gravida. Sed id convallis ligula. Vivamus ultrices metus eu turpis ulla\n         mcorper varius. Nullam dignissim congue gravida. Phasellus imperdiet ma\n         uris vitae sem porta porttitor. Vestibulum ac libero at mi pretium pell\n         entesque. Aenean ac facilisis ligula. Nunc ultrices rutrum metus ut eff\n         icitur. Vestibulum nisi odio, venenatis varius felis vel, gravida condi\n         mentum nulla.</p>\n    </div>',o=void 0,u={render:i,setContainer:r};t.default=u},function(e,t,n){"use strict";function r(e){u=e}function i(){u.innerHTML=o.default}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n(10);var u=void 0,s={setContainer:r,render:i};t.default=s},function(e,t){},function(e,t,n){"use strict";(function(t){function r(e,t){if("function"==typeof e)return r("*",e);if("function"==typeof t)for(var n=new u(e),i=1;i<arguments.length;++i)r.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?r["string"==typeof t?"redirect":"show"](e,t):r.start(e)}function i(e){if(!e.handled){var t;t=w?y+m.hash.replace("#!",""):m.pathname+m.search,t!==e.canonicalPath&&(r.stop(),e.handled=!1,m.href=e.canonicalPath)}}function a(e){return"string"!=typeof e?e:g?decodeURIComponent(e.replace(/\+/g," ")):e}function o(e,t){"/"===e[0]&&0!==e.indexOf(y)&&(e=y+(w?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(y,"")||"/",w&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?a(e.slice(n+1)):"",this.pathname=a(~n?e.slice(0,n):e),this.params={},this.hash="",!w){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=r[0],this.hash=a(r[1])||"",this.querystring=this.querystring.split("#")[0]}}function u(e,t){t=t||{},this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=f(this.path,this.keys=[],t)}function s(e){if(1===c(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var n=e.path?e.path[0]:e.target;n&&"A"!==n.nodeName;)n=n.parentNode;if(n&&"A"===n.nodeName&&!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")){var i=n.getAttribute("href");if((w||n.pathname!==m.pathname||!n.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!n.target&&l(n.href)){var a=n.pathname+n.search+(n.hash||"");void 0!==t&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var o=a;0===a.indexOf(y)&&(a=a.substr(y.length)),w&&(a=a.replace("#!","")),y&&o===a||(e.preventDefault(),r.show(o))}}}}function c(e){return e=e||window.event,null===e.which?e.button:e.which}function l(e){var t=m.protocol+"//"+m.hostname;return m.port&&(t+=":"+m.port),e&&0===e.indexOf(t)}var f=n(14);e.exports=r;var p,d,h="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",m="undefined"!=typeof window&&(window.history.location||window.location),v=!0,g=!0,y="",w=!1;r.callbacks=[],r.exits=[],r.current="",r.len=0,r.base=function(e){if(0===arguments.length)return y;y=e},r.start=function(e){if(e=e||{},!p&&(p=!0,!1===e.dispatch&&(v=!1),!1===e.decodeURLComponents&&(g=!1),!1!==e.popstate&&window.addEventListener("popstate",b,!1),!1!==e.click&&document.addEventListener(h,s,!1),!0===e.hashbang&&(w=!0),v)){var t=w&&~m.hash.indexOf("#!")?m.hash.substr(2)+m.search:m.pathname+m.search+m.hash;r.replace(t,null,!0,v)}},r.stop=function(){p&&(r.current="",r.len=0,p=!1,document.removeEventListener(h,s,!1),window.removeEventListener("popstate",b,!1))},r.show=function(e,t,n,i){var a=new o(e,t);return r.current=a.path,!1!==n&&r.dispatch(a),!1!==a.handled&&!1!==i&&a.pushState(),a},r.back=function(e,t){r.len>0?(history.back(),r.len--):e?setTimeout(function(){r.show(e,t)}):setTimeout(function(){r.show(y,t)})},r.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&r(e,function(e){setTimeout(function(){r.replace(t)},0)}),"string"==typeof e&&void 0===t&&setTimeout(function(){r.replace(e)},0)},r.replace=function(e,t,n,i){var a=new o(e,t);return r.current=a.path,a.init=n,a.save(),!1!==i&&r.dispatch(a),a},r.dispatch=function(e){function t(){var e=r.exits[u++];if(!e)return n();e(a,t)}function n(){var t=r.callbacks[o++];return e.path!==r.current?void(e.handled=!1):t?void t(e,n):i(e)}var a=d,o=0,u=0;d=e,a?t():n()},r.exit=function(e,t){if("function"==typeof e)return r.exit("*",e);for(var n=new u(e),i=1;i<arguments.length;++i)r.exits.push(n.middleware(arguments[i]))},r.Context=o,o.prototype.pushState=function(){r.len++,history.pushState(this.state,this.title,w&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},o.prototype.save=function(){history.replaceState(this.state,this.title,w&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},r.Route=u,u.prototype.middleware=function(e){var t=this;return function(n,r){if(t.match(n.path,n.params))return e(n,r);r()}},u.prototype.match=function(e,t){var n=this.keys,r=e.indexOf("?"),i=~r?e.slice(0,r):e,o=this.regexp.exec(decodeURIComponent(i));if(!o)return!1;for(var u=1,s=o.length;u<s;++u){var c=n[u-1],l=a(o[u]);void 0===l&&hasOwnProperty.call(t,c.name)||(t[c.name]=l)}return!0};var b=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(t){if(e)if(t.state){var n=t.state.path;r.replace(n,t.state)}else r.show(m.pathname+m.hash,void 0,void 0,!1)}}();r.sameOrigin=l}).call(t,n(15))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(4);var i=n(5),a=r(i),o=n(3),u=r(o),s=n(2),c=r(s),l=n(0),f=r(l),p=n(1),d=r(p),h=document.querySelector("#root");u.default.setContainer(h),u.default.render();var m=h.querySelector(".Shell__contents");c.default.setContainer(m),f.default.setContainer(m),d.default.setContainer(m),(0,a.default)("/",c.default.render),(0,a.default)("/about",f.default.render),(0,a.default)("/blog",d.default.render),(0,a.default)("*",c.default.render),a.default.start()},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports="<div class=About> <h2>NUEVO About</h2> <p>Lorem ipsum dolor sit amet, pri idque debet accusam at, ea sea adhuc con stituam. Ut amet mediocrem pri, accusam comprehensam vim te, ei inani ex petendis incorrupte mel. Minim verterem id nam, malorum suscipit id nam. Ei nostrud volumus sadipscing per. Usu nulla praesent argumentum te. Vi m iracundia constituam definitiones ut, zril omnesque his in, cu est vo cent omnesque repudiare.</p> </div> "},function(e,t){e.exports="<div class=Shell> <header class=Shell__header> <h1 class=Shell__title> <a href=/home>Tiiiiitleeeeee</a> </h1> <nav class=Shell__nav> <a href=/blog>blog</a> <a href=/about>about</a> </nav> </header> <div class=Shell__contents> </div> <footer class=Shell__footer> <p>Party in the footer, woo~ </p> </footer> </div> "},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){function r(e){for(var t,n=[],r=0,i=0,a="";null!=(t=v.exec(e));){var o=t[0],s=t[1],c=t.index;if(a+=e.slice(i,c),i=c+o.length,s)a+=s[1];else{a&&(n.push(a),a="");var l=t[2],f=t[3],p=t[4],d=t[5],h=t[6],m=t[7],g="+"===h||"*"===h,y="?"===h||"*"===h,w=l||"/",b=p||d||(m?".*":"[^"+w+"]+?");n.push({name:f||r++,prefix:l||"",delimiter:w,optional:y,repeat:g,pattern:u(b)})}}return i<e.length&&(a+=e.substr(i)),a&&n.push(a),n}function i(e){return a(r(e))}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(n){for(var r="",i=n||{},a=0;a<e.length;a++){var o=e[a];if("string"!=typeof o){var u,s=i[o.name];if(null==s){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to be defined')}if(m(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received "'+s+'"');if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var c=0;c<s.length;c++){if(u=encodeURIComponent(s[c]),!t[a].test(u))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received "'+u+'"');r+=(0===c?o.prefix:o.delimiter)+u}}else{if(u=encodeURIComponent(s),!t[a].test(u))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+u+'"');r+=o.prefix+u}}else r+=o}return r}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e,t){return e.keys=t,e}function c(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return s(e,t)}function f(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(h(e[i],t,n).source);return s(new RegExp("(?:"+r.join("|")+")",c(n)),t)}function p(e,t,n){for(var i=r(e),a=d(i,n),o=0;o<i.length;o++)"string"!=typeof i[o]&&t.push(i[o]);return s(a,t)}function d(e,t){t=t||{};for(var n=t.strict,r=!1!==t.end,i="",a=e[e.length-1],u="string"==typeof a&&/\/$/.test(a),s=0;s<e.length;s++){var l=e[s];if("string"==typeof l)i+=o(l);else{var f=o(l.prefix),p=l.pattern;l.repeat&&(p+="(?:"+f+p+")*"),p=l.optional?f?"(?:"+f+"("+p+"))?":"("+p+")?":f+"("+p+")",i+=p}}return n||(i=(u?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=r?"$":n&&u?"":"(?=\\/|$)",new RegExp("^"+i,c(t))}function h(e,t,n){return t=t||[],m(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?l(e,t,n):m(e)?f(e,t,n):p(e,t,n)}var m=n(13);e.exports=h,e.exports.parse=r,e.exports.compile=i,e.exports.tokensToFunction=a,e.exports.tokensToRegExp=d;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!m){var e=i(o);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||i(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}]);