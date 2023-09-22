(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),l=t.n(c),s=new URL(t(436),t.b),d=i()(r());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Borel&display=swap);"]);var u=l()(s);d.push([n.id,`/* General Properties */\n\n:root {\n    --text-color: rgb(255, 255, 255);\n    --background-block-color: rgba(15, 15, 16, 0.8);\n    --selection-color: rgb(255, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    margin: 0px;\n    background-image: url(${u});\n    background-size: cover;\n    background-clip: content-box;\n    background-attachment: fixed;\n    color: var(--text-color);\n    font-family: 'Borel', cursive, sans-serif;\n    min-height: 100%;\n}\n\n#content {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n\n#content header {\n    background-color: var(--background-block-color);\n    padding: 0rem 2rem 0.5rem 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#content header h1 {\n    margin: 5px 0px 0px 0px;\n    font-size: 38px;\n}\n\n#content .tabbed-buttons button {\n    color: var(--text-color);\n    background: transparent;\n    font-family: 'Borel', cursive, sans-serif;\n    border: 0px;\n    font-size: 1.35rem;\n    width: 6rem;\n    margin: 0px 20px;\n    cursor: pointer;\n    position: relative;\n}\n\n#content .tabbed-buttons button::before {\n    content: "";\n    background: var(--text-color);\n    display: block;\n    position: absolute;\n    left: 0px;\n    bottom: 5px;\n    width: 0px;\n    height: 3px;\n    transition: all 0.3s ease-in-out;\n    border-radius: 12px;\n    width: 100%;\n    transform: scaleX(0);\n}\n\n#content .tabbed-buttons button:hover::before {\n    transform: scaleX(1);\n}\n\n#content .tabbed-buttons button:hover {\n    transform: scale(1.1);\n}\n\n#content .tabbed-buttons .selected {\n    color: var(--selection-color);\n}\n\n\n/* Main */\n\n#content main {\n    margin: 20px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#content main .main-block {\n    background-color: var(--background-block-color);\n    font-family: Arial, Helvetica, sans-serif;\n    width: 50%;\n    padding: 10px;\n    border-radius: 22px;\n}\n\n/* Home Content */\n\n.home-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-content h1 {\n    text-align: center;\n}\n\n.home-content .intro {\n    width: 70%;\n    line-height: 1.5rem;\n    padding: 10px;\n    text-align: center;\n    border-radius: 12px;\n}\n\n.home-content .intro img {\n    padding: 5px 0px;\n    width: 60%;\n    border-radius: 22px;\n}\n\n.home-content .hours h2 {\n    text-align: center;\n    margin: 10px 0px;\n}\n\n.home-content .hours ul {\n    list-style: none;\n    line-height: 1.5rem;\n    padding: 0px;\n    text-align: center;\n}\n\n/* Menu Content */\n\n.menu-content {\n    display: none;\n    text-align: center;\n}\n\n.menu-content ul {\n    list-style: none;\n    padding: 0px;\n    line-height: 1.5rem;\n}\n\n.menu-content ul a {\n    text-decoration: none;\n    display: inline-block;\n    color: var(--text-color);\n}\n\n.menu-content ul a:hover {\n    color: var(--selection-color);\n    transform: scale(1.05);\n}\n\n/* Contact Content */\n\n.contact-content {\n    display: none;\n    text-align: center;\n}\n\n#content main .contact-content {\n    padding: 25px;\n}\n\n.contact-content div {\n    font-size: 22px;\n    padding: 5px;\n}\n\n.contact-content div img {\n    height: 22px;\n    vertical-align: top;\n}\n\n.contact-content > img {\n    width: 80%;\n    border-radius: 22px;\n}\n\n/* Footer */\n\nfooter {\n    background-color: rgba(15, 15, 16, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: auto;\n}\n\nfooter p {\n    font-size: 20px;\n    margin-bottom: 5px;\n}`,""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},436:(n,e,t)=>{n.exports=t.p+"bb7d7f5236b67993a485.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"e5d7e1e93f20c2089a4e.jpg",e=t.p+"ef6b09082d1bc4096e5d.png",o=t.p+"a23d73286fb56e34413f.png",r=t.p+"597f7dd69a072825e70b.jpg";var a=t(379),i=t.n(a),c=t(795),l=t.n(c),s=t(569),d=t.n(s),u=t(565),p=t.n(u),m=t(216),h=t.n(m),f=t(589),b=t.n(f),g=t(426),y={};function v(n,...e){if(!n.classList.contains("selected")){n.classList.add("selected");for(let n=0;n<e.length;n++)e[n].classList.contains("selected")&&e[n].classList.remove("selected")}}y.styleTagTransform=b(),y.setAttributes=p(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),i()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals,function(){(function(){const n=document.querySelector("div#content");!function(n){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Mamma Mia Pizzeria",e.appendChild(t);const o=document.createElement("div");o.classList.add("tabbed-buttons");let r=[];for(let n=0;n<3;n++){const n=document.createElement("button");n.setAttribute("type","button"),r.push(n)}r[0].setAttribute("id","home-button"),r[0].classList.add("selected"),r[0].textContent="Home",r[1].setAttribute("id","menu-button"),r[1].textContent="Menu",r[2].setAttribute("id","contact-button"),r[2].textContent="Contact";for(let n=0;n<3;n++)o.appendChild(r[n]);e.appendChild(o),n.appendChild(e)}(n),function(n){const e=document.createElement("main"),t=document.createElement("div");t.classList.add("home-content"),t.classList.add("main-block"),e.appendChild(t);const o=document.createElement("div");o.classList.add("menu-content"),o.classList.add("main-block"),e.appendChild(o);const r=document.createElement("div");r.classList.add("contact-content"),r.classList.add("main-block"),e.appendChild(r),n.appendChild(e)}(n),function(n){const e=document.createElement("footer");e.innerHTML="<p>Copyright &copy; Anabil Hoque</p>",n.appendChild(e)}(n)})(),function(){const e=document.querySelector(".home-content.main-block"),t=document.createElement("h1");t.textContent="Home to the best Pizza in the world!";const o=document.createElement("div");o.classList.add("intro"),o.textContent="Welcome to Mamma Mia Pizzeria, where culinary excellence meets the art of pizza-making.  Nestled in the heart of Venice, our pizzeria is more than just a place to satisfy your cravings; it's an extraordinary culinary journey that promises to tantalize your taste buds like never before. With a passion for perfection and a commitment to using only the finest ingredients, we proudly present to you the best pizza in the world.",o.appendChild(document.createElement("br"));const r=document.createElement("img");r.src=n,r.alt="pizza",o.appendChild(r);const a=document.createElement("div");a.classList.add("hours");const i=document.createElement("h2");i.textContent="Hours",a.appendChild(i);const c=document.createElement("ul");c.innerHTML="<li>Monday: 9am - 6pm</li><li>Tuesday: 9am - 6pm</li><li>Wednesday: 9am - 6pm</li><li>Thursday: 9am - 6pm</li><li>Friday: 9am - 6pm</li><li>Saturday: 10am - 6pm</li><li>Sunday: 10am - 6pm</li>",a.appendChild(c),e.appendChild(t),e.appendChild(o),e.appendChild(a)}(),function(){const n=document.querySelector(".menu-content.main-block"),e=document.createElement("h1");e.textContent="Menu";const t=document.createElement("ul");t.innerHTML='<li><a href="#">Margherita, £6.00</a></li><li><a href="#">Pizza Peperoni, £7.00</a></li><li><a href="#">Pizza Zucchine, £7.00</a></li><li><a href="#">Pizza Napoletana, £8.00</a></li><li><a href="#">Pizza Funghi, £8.00</a></li><li><a href="#">Pizza Romana, £8.00</a></li><li><a href="#">Pizza Capricciosa, £9.00</a></li><li><a href="#">Pizza Asparagi & Gamberetti, £9.50</a></li>',n.appendChild(e),n.appendChild(t)}(),function(){const n=document.querySelector(".contact-content.main-block"),t=document.createElement("div"),a=document.createElement("img");a.src=e,a.alt="phone",t.innerHTML=`${a.outerHTML} Call us! This is our number: 123456789`;const i=document.createElement("div"),c=document.createElement("img");c.src=o,c.alt="pin",i.innerHTML=`${c.outerHTML} Mamma Mia Pizzeria, via San Donato 48, Venice`;const l=document.createElement("h2");l.textContent="Visit us at the heart of Venice!";const s=document.createElement("img");s.src=r,s.alt="Venice",n.appendChild(t),n.appendChild(i),n.appendChild(l),n.appendChild(s)}();const t=document.querySelector("#home-button"),a=document.querySelector("#menu-button"),i=document.querySelector("#contact-button"),c=document.querySelector(".home-content"),l=document.querySelector(".menu-content"),s=document.querySelector(".contact-content");t.addEventListener("click",(n=>{v(t,a,i),c.style.display="flex",l.style.display="none",s.style.display="none"})),a.addEventListener("click",(n=>{v(a,t,i),c.style.display="none",l.style.display="block",s.style.display="none"})),i.addEventListener("click",(n=>{v(i,t,a),c.style.display="none",l.style.display="none",s.style.display="block"}))}()})()})();