var suitLoader=function(){"use strict";var t={UserInterfaceApp:"0.3.14"};function e(t){return{...t,data:{...t.data,loader_type:"loader"}}}function r(e){return t[e]||"0.3.14"}return function(t){let{serviceName:n}=t;const c=r(n||"version"),a="".concat(function(t){const e=t.split(".");return"dev"===e.shift()&&e.length>=2?"https://www.upwork.com/static/dev/suit2-tracker/PR-".concat(e[0],"/").concat(e[1]):"https://www.upwork.com/static/suit2-tracker/".concat(t)}(c),"/index.iife.min.js");let o;try{o=localStorage.getItem("suit2AssetDevOverride")}catch(t){}return window.addEventListener("suit2_loaded",t=>{let{detail:r}=t;const{tracker:n}=r;n.addEventModifier(e,{tracker:"snowplow"})},{once:!0}),(i=o||a,new Promise((t,e)=>{const r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=i,r.addEventListener("load",t),r.addEventListener("error",e),document.head.appendChild(r)})).then(()=>c);var i}}();
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/SUIT2AppS3Nuxt/loader.nuxt.js.map