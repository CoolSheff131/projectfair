var y=Object.defineProperty,O=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var l=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&l(r,t,e[t]);if(i)for(var t of i(e))P.call(e,t)&&l(r,t,e[t]);return r},m=(r,e)=>O(r,g(e));import{d as v,o as A,c as b,u as C,R as T,a as H,b as L,e as R,f as N}from"./vendor.c7c73a5f.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};j();const q=v({setup(r){return(e,t)=>(A(),b(C(T)))}}),F="modulepreload",d={},M="/",p=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${M}${o}`,o in d)return;d[o]=!0;const n=o.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=n?"stylesheet":F,n||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),n)return new Promise((h,E)=>{u.addEventListener("load",h),u.addEventListener("error",E)})})).then(()=>e())};var a;(function(r){r.HOME="HOME",r.PROJECT="PROJECT",r.FAQ="FAQ",r.CONTACTS="CONTACTS"})(a||(a={}));const S=(r,e,t)=>{const o=Number(r.query.page);return!o||isNaN(o)||o<1?t({name:r.name||a.HOME,query:m(f({},e.query),{page:1})}):t()},k=()=>p(()=>import("./HomePage.170fbbeb.js"),["assets/HomePage.170fbbeb.js","assets/HomePage.3e1acec8.css","assets/useAsyncData.aa192360.js","assets/useAsyncData.e6fa2c19.css","assets/vendor.c7c73a5f.js"]),B=()=>p(()=>import("./ProjectPage.a5d4bb59.js"),["assets/ProjectPage.a5d4bb59.js","assets/ProjectPage.1d5848b3.css","assets/vendor.c7c73a5f.js","assets/useAsyncData.aa192360.js","assets/useAsyncData.e6fa2c19.css"]),$=[{path:"/",component:k,name:a.HOME,meta:{nav:"\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"},beforeEnter:[S]},{path:"/project/:id",component:B,name:a.PROJECT},{path:"/faq",redirect:{name:a.HOME},name:a.FAQ,meta:{nav:"\u0432\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442"}},{path:"/contacts",name:a.CONTACTS,redirect:{name:a.HOME},meta:{nav:"\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"}}],w=H({scrollBehavior(r,e,t){return t||{top:0}},history:L("/"),routes:$}),c=R(q);c.use(w);c.use(N());c.mount("#app");export{a as R};
