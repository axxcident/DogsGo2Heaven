/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(){t=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new O(r||[]);return a(i,"_invoke",{value:L(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p={};function h(){}function m(){}function g(){}var y={};l(y,c,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(j([])));b&&b!==n&&o.call(b,c)&&(y=b);var w=g.prototype=h.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(a,i,c,s){var u=f(t[a],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==r(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=N(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function N(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(S.prototype),l(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(d(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,s,"next",t)}function s(t){e(i,o,a,c,s,"throw",t)}c(void 0)}))}}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=document.getElementById("post-formularet"),a=(document.getElementById("post-publishing"),document.querySelector("body > main > section")),i=JSON.parse(sessionStorage.getItem("info"));if(null!==i&&null!==sessionStorage.getItem("mypost")){var c=JSON.parse(sessionStorage.getItem("mypost"));console.log(r(c)),console.log(c);var s=i.profileDogPic,u=i.firstName,l=i.lastName;c.forEach((function(t){var e=document.createElement("article");e.setAttribute("class","inlagg");var n=document.querySelector("body > main > section > article:nth-child(2)");e.innerHTML='\n    <img class="user-inlagg" src="'.concat(s,'" alt="user profile picture" width="50" height="50">\n    <h5 class="post-name">').concat(u," ").concat(l,'</h5>\n    <p class="post-text">\n      ').concat(t,"\n    </p>\n    "),a.insertBefore(e,n)}))}if(null!==i){var d="temporärt";fetch("https://avancera.app/cities/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return d=t[t.length-1].id})),console.log("IDet fetchen har körts."),console.log(r(d)+d)}o.addEventListener("submit",(function(t){t.preventDefault();var e=document.getElementById("post-typing").value,n=document.createElement("article");if(n.setAttribute("class","inlagg"),null!==i){var r=i.profileDogPic,o=i.firstName,c=i.lastName;n.innerHTML='\n    <img class="user-inlagg" src="'.concat(r,'" alt="user profile picture" width="50" height="50">\n    <h5 class="post-name">').concat(o," ").concat(c,'</h5>\n    <p class="post-text">\n      ').concat(e,"\n    </p>\n    "),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[];if(null!==t)if(null===JSON.parse(sessionStorage.getItem("mypost"))||Array.isArray(JSON.parse(sessionStorage.getItem("mypost"))))if(null!==JSON.parse(sessionStorage.getItem("mypost"))&&Array.isArray(JSON.parse(sessionStorage.getItem("mypost")))){e.push(t);for(var n=0;n<JSON.parse(sessionStorage.getItem("mypost")).length;n++)e.push(JSON.parse(sessionStorage.getItem("mypost"))[n]);sessionStorage.setItem("mypost",JSON.stringify(e))}else sessionStorage.setItem("mypost",JSON.stringify(t)),e.push(t);else e.push(t),e.push(JSON.parse(sessionStorage.getItem("mypost"))),sessionStorage.setItem("mypost",JSON.stringify(e))}(e)}else n.innerHTML='\n    <img class="npc-user" src="img/npc.png" alt="non-playable character" width="50" height="50">\n    <h5 class="post-name">John Doe</h5>\n    <p class="post-text">\n      '.concat(e,"\n    </p>\n    ");var s=document.querySelector("body > main > section > article:nth-child(2)");a.insertBefore(n,s)}));var f=document.querySelectorAll("#jokeText"),p=function(){var e=n(t().mark((function e(n){var r,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:o=t.sent,n.innerHTML=o.joke;case 7:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();f.forEach((function(t){t=p(t)}));var h=document.querySelectorAll("#fejknamn"),m=function(){var e=n(t().mark((function e(n){var r,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://randomuser.me/api/?inc=name",{headers:{Accept:"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:o=t.sent,n.innerHTML=o.results[0].name.first,n.innerHTML+=" ",n.innerHTML+=o.results[0].name.last;case 9:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();h.forEach((function(t){t=m(t)}));var g=function t(){fetch("https://random.dog/woof.json").then((function(t){return t.json()})).then((function(e){console.log("Är gif: "+!e.url.includes("jpg")),e.url.includes("gif")||e.url.includes("mp4")?t():(sessionStorage.setItem("dogpicture",JSON.stringify(e.url)),console.log("Är bild: "+e.url.includes("jpg")))}))};g();var y=document.querySelector("#dogHome"),v=JSON.parse(sessionStorage.getItem("dogpicture"));y.setAttribute("src",v),document.getElementById("medlem-formular");var b=document.getElementById("firstName"),w=document.getElementById("lastName"),E=document.getElementById("consent"),S=(document.getElementById("hometown"),document.getElementById("nrofdogs"),document.getElementById("send")),L=document.getElementById("refresh"),N=document.getElementById("profilelink"),x=document.querySelector(".cta-knappen"),I=document.getElementById("form-tagaren");if(console.log("Har profildata laddats up? "+i),null!==i){N.style.display="flex",N.setAttribute("src",i.profileDogPic),x.style.display="none",I.innerHTML="\n  <dl>\n    <dt>Namn:</dt>\n    <dd>".concat(i.firstName,'<input type="button" id="editName" value="Ändra" class="btn btn-primary"></dd>\n    <dt>Efternamn:</dt>\n    <dd>').concat(i.lastName,'<input type="button" id="editLastName" value="Ändra" class="btn btn-primary"></dd>\n    <dt>Hemstad:</dt>\n    <dd>').concat(i.hometown,'<input type="button" id="editHome" value="Ändra" class="btn btn-primary"></dd>\n    <dt>Owner of x dogs:</dt>\n    <dd>').concat(i.nrofdogs,'<input type="button" id="editNrDogs" value="Ändra" class="btn btn-primary"></dd>\n  </dl>\n  ');var O=document.querySelectorAll("#form-tagaren > dl > dd");O.forEach((function(t){t.style.display="flex"})),O.forEach((function(t){t.style.justifyContent="space-between"})),O.forEach((function(t){t.style.alignItems="center"})),O.forEach((function(t){t.style.padding="4px"}))}else I.innerHTML="";var j=document.getElementById("editName"),k=document.getElementById("editLastName"),T=document.getElementById("editHome"),J=document.getElementById("editNrDogs"),B=function(){var e=n(t().mark((function e(n){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://avancera.app/cities/".concat(d),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,population:Number("".concat(i.nrofdogs)),id:"".concat(d)})});case 2:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=n(t().mark((function e(n){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://avancera.app/cities/".concat(d),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(i.hometown),population:Number(n),id:"".concat(d)})});case 2:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function H(t){var e=JSON.parse(sessionStorage.getItem("info"));Object.keys(t).forEach((function(n,r){e[n]=t[n]})),sessionStorage.setItem("info",JSON.stringify(e))}j.addEventListener("click",(function(){H({firstName:prompt("Vad heter du?")}),setInterval(document.location.reload(),3e3)})),k.addEventListener("click",(function(){H({lastName:prompt("Vad är ditt efternamn?")}),setInterval(document.location.reload(),3e3)})),T.addEventListener("click",(function(){var t=prompt("Vart bor du?");console.log(d),H({hometown:t}),B(t),alert("Uppdaterar.."),document.location.reload()})),J.addEventListener("click",(function(){var t=Number(prompt("Hur många hundar har du egentligen?"));H({nrofdogs:t}),A(t),alert("Uppdaterar.."),document.location.reload()})),L.addEventListener("click",(function(){g(),v=JSON.parse(sessionStorage.getItem("dogpicture")),y.setAttribute("src",v)})),S.disabled=!0,E.addEventListener("input",(function(t){!0!==t.target.checked?S.disabled=!0:!0===t.target.checked&&(""===b.value||""===w.value?S.disabled=!0:""!==b.value&&""!==w.value&&(S.disabled=!1))})),b.addEventListener("input",(function(t){""===t.target.value?S.disabled=!0:""!==t.target.value&&(!1===E.checked||""===w.value?S.disabled=!0:!0===E.checked&&""!==w.value&&(S.disabled=!1))})),w.addEventListener("input",(function(t){""===t.target.value?S.disabled=!0:""!==t.target.value&&(""===b.value||!1===E.checked?S.disabled=!0:""!==b.value&&!0===E.checked&&(S.disabled=!1))}))})();