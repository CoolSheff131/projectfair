var q=Object.defineProperty,X=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var I=(s,e,t)=>e in s?q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))K.call(e,t)&&I(s,t,e[t]);if(R)for(var t of R(e))Q.call(e,t)&&I(s,t,e[t]);return s},S=(s,e)=>X(s,J(e));import{_ as m,a as Z,i as ee,b as te,c as C,B as se,d as ue,R as T,e as oe}from"./index.js";import{h as a,p as r,q as E,l as o,F as $,f as v,S as L,m as l,x as O,y as F,z as p,b as M,H as b,v as _,j as i,A as h,G as D,r as k,g as ae,i as g,s as B,c as ne,w as le,n as re,V as ie,W as ce,o as _e,D as de,T as pe,B as ve}from"./vendor.js";import{D as z}from"./datetime.js";const me={},fe={class:"main"};function he(s,e){return a(),r($,null,[E(s.$slots,"header",{},void 0,!0),o("main",fe,[E(s.$slots,"content",{},void 0,!0)]),E(s.$slots,"footer",{},void 0,!0)],64)}var ye=m(me,[["render",he],["__scopeId","data-v-24040f65"]]);const ge=v({props:{size:null},setup(s){const e=s;let t=0;switch(e.size){case"lg":t=1800;break;case"md":t=1400;break}return(u,n)=>(a(),r("div",{class:"container",style:L({maxWidth:`calc(${l(t)}px + var(--side-padding) * 2)`})},[E(u.$slots,"default",{},void 0,!0)],4))}});var x=m(ge,[["__scopeId","data-v-6e387a60"]]);const $e={},H=s=>(O("data-v-809f7cb2"),s=s(),F(),s),ke={class:"logo"},Be=H(()=>o("span",{class:"logo-icon"},null,-1)),De=H(()=>o("span",null,[p("\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C "),o("br"),o("small",{class:"small"},"\u0432 \u0418\u0420\u041D\u0418\u0422\u0423")],-1)),Ee=[Be,De];function be(s,e){return a(),r("div",ke,Ee)}var U=m($e,[["render",be],["__scopeId","data-v-809f7cb2"]]);const Ae=()=>M().getRoutes().filter(e=>{var t;return(t=e.meta.type)==null?void 0:t.includes("user-nav")}).sort((e,t)=>(e.meta.order||0)-(t.meta.order||0)),P=()=>Ae().filter(e=>!e.meta.role||Z(e.meta.role)),j=()=>M().getRoutes().filter(e=>{var t;return(t=e.meta.type)==null?void 0:t.includes("main-nav")}).sort((e,t)=>(e.meta.order||0)-(t.meta.order||0)),xe=()=>{const e=M().getRoutes().filter(u=>{var n;return(n=u.meta.type)==null?void 0:n.includes("mobile-nav")}).sort((u,n)=>(u.meta.order||0)-(n.meta.order||0));return[...e.filter(u=>{var n;return(n=u.meta.type)==null?void 0:n.includes("main-nav")}),...e.filter(u=>{var n;return!((n=u.meta.type)==null?void 0:n.includes("main-nav"))})]};const Ne={class:"nav"},we={class:"nav-list"},Ce=v({setup(s){const e=j();return(t,u)=>(a(),r("nav",Ne,[o("ul",we,[(a(!0),r($,null,b(l(e),n=>(a(),r("li",{key:n.name,class:"nav-item"},[_(l(D),{class:"nav-link",to:{name:n.name}},{default:i(()=>[p(h(n.meta.title),1)]),_:2},1032,["to"])]))),128))])]))}});var Me=m(Ce,[["__scopeId","data-v-c6116f6e"]]),Re="/assets/dropdown-arrow.svg",V="/assets/user-picture.svg",Ie="/assets/user-picture-gray.svg";const Se=v({props:{isOpen:{type:Boolean},handleNode:null,position:{default:()=>({})}},emits:["close"],setup(s,{emit:e}){const t=s,u=k(null);return ae(u,n=>{ee(n.target,t.handleNode)||e("close")}),(n,f)=>t.isOpen?(a(),g(te,{key:0,ref_key:"root",ref:u,style:L(w({},s.position)),class:"dropdown"},{default:i(()=>[E(n.$slots,"default",{},void 0,!0)]),_:3},8,["style"])):B("",!0)}});var Te=m(Se,[["__scopeId","data-v-24cfd57c"]]);const Le=["href"],Oe=["onClick"],Fe=v({props:{isOpen:{type:Boolean},handleNode:null,itemList:{default:()=>[]},position:{default:()=>({})}},emits:["close"],setup(s){return(e,t)=>(a(),g(Te,{"is-open":s.isOpen,"handle-node":s.handleNode,position:s.position,onClose:t[0]||(t[0]=u=>e.$emit("close"))},{default:i(()=>[o("ul",null,[(a(!0),r($,null,b(s.itemList,u=>(a(),r("li",{key:u.content,class:"item"},[u.type==="link"?(a(),r($,{key:0},[u.routeName?(a(),g(l(D),{key:0,class:"action",to:{name:u.routeName}},{default:i(()=>[p(h(u.content),1)]),_:2},1032,["to"])):(a(),r("a",{key:1,href:u.href,class:"action"},h(u.content),9,Le))],64)):u.type==="button"?(a(),r("button",{key:1,class:"action",onClick:u.action},h(u.content),9,Oe)):B("",!0)]))),128))])]),_:1},8,["is-open","handle-node","position"]))}});var ze=m(Fe,[["__scopeId","data-v-df98d4be"]]);const He=v({props:{isOpen:{type:Boolean},handleNode:null},emits:["close"],setup(s,{emit:e}){const t=s,u=ne(),n=C(),f=P();le(()=>u.path,()=>e("close"));const d=f.map(c=>({content:c.meta.title,routeName:c.name,type:"link"}));return d.push({content:"\u0412\u044B\u0439\u0442\u0438",type:"button",action:()=>{n.exit(),e("close")}}),(c,y)=>(a(),g(ze,{"handle-node":t.handleNode,"is-open":t.isOpen,"item-list":l(d),onClose:y[0]||(y[0]=N=>e("close"))},null,8,["handle-node","is-open","item-list"]))}});const Ue={class:"actions"},Pe={class:"dropdown-container"},je=["src"],Ve={class:"username"},Ge=["src"],We=["src"],Ye=["src"],qe=p(" \u0412\u043E\u0439\u0442\u0438 "),Xe=v({setup(s){const e=C(),t=k(),u=k(!1),n=()=>u.value=!1,f=()=>u.value=!u.value;return(d,c)=>{var y;return a(),r("div",Ue,[l(e).isAuth?(a(),r($,{key:0},[B("",!0),o("div",Pe,[o("div",{ref_key:"handleMenuNode",ref:t,class:"user",onClick:f},[o("img",{src:l(V),alt:"",class:"user-icon"},null,8,je),o("span",Ve,h((y=l(e).profileData)==null?void 0:y.fio),1),o("button",{class:re(["menu-btn",{active:u.value}])},[o("img",{src:l(Re),alt:"\u2193"},null,8,Ge)],2)],512),_(He,{"handle-node":t.value,"is-open":u.value,onClose:n},null,8,["handle-node","is-open"])])],64)):(a(),g(se,{key:1,class:"auth-btn",variant:"link",disabled:l(e).loading,onClick:c[0]||(c[0]=N=>l(e).auth())},{default:i(()=>[l(e).loading?(a(),r("img",{key:0,src:l(Ie),alt:"",class:"user-icon"},null,8,We)):(a(),r("img",{key:1,src:l(V),alt:"",class:"user-icon"},null,8,Ye)),qe]),_:1},8,["disabled"]))])}}});var Je=m(Xe,[["__scopeId","data-v-4595a61e"]]);const Ke=s=>{const e=k(void 0),t=k(""),u=k(!1);function n(){const d=s.getTime()-Date.now();if(d<=0)return u.value=!0,f();const c=z.fromMillis(d),y=Math.floor(c.as("days")),N=Math.floor(c.as("hours")%24),G=Math.floor(c.as("minutes")%60),W=Math.floor(c.as("seconds")%60),Y=y>0?`d ${ue(y,["\u0434\u0435\u043D\u044C","\u0434\u043D\u044F","\u0434\u043D\u0435\u0439"])} hh:mm:ss`:"hh:mm:ss";t.value=z.fromObject({day:y,hour:N,minutes:G,seconds:W}).toFormat(Y)}function f(){window.clearInterval(e.value)}return ie(()=>{n(),e.value=window.setInterval(n,1e3)}),ce(f),{isTimePass:u,duration:t}};const Qe={key:0,class:"timer"},Ze={class:"text"},et={class:"time"},tt=v({props:{deadline:null,timerText:null},setup(s){const e=s,{duration:t,isTimePass:u}=Ke(e.deadline);return(n,f)=>l(u)?B("",!0):(a(),r("div",Qe,[o("div",Ze,h(e.timerText),1),o("div",et,h(l(t)),1)]))}});var st=m(tt,[["__scopeId","data-v-6b3ffbf9"]]);const ut={class:"header"},ot=v({setup(s){return(e,t)=>(a(),r("header",ut,[_(x,{class:"container",size:"lg"},{default:i(()=>[_(l(D),{class:"logo clear-link align-self-center",to:{name:l(T).HOME}},{default:i(()=>[_(U)]),_:1},8,["to"]),_(Me,{class:"navigation"}),_(st,{deadline:new Date("2022/12/02"),"timer-text":"\u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043F\u0440\u0438\u0435\u043C\u0430 \u0437\u0430\u044F\u0432\u043E\u043A"},null,8,["deadline"]),_(Je,{class:"actions"})]),_:1})]))}});var at=m(ot,[["__scopeId","data-v-cabc4d26"]]);const A=s=>(O("data-v-9824a3c0"),s=s(),F(),s),nt={id:"footer",class:"footer"},lt=A(()=>o("a",{class:"initials",href:"https://www.istu.edu/",target:"_blank"},[o("span",{class:"thin"}," \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0411\u044E\u0434\u0436\u0435\u0442\u043D\u043E\u0435 \u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F "),o("br"),o("span",null,' "\u0418\u0440\u043A\u0443\u0442\u0441\u043A\u0438\u0439 \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442" ')],-1)),rt={class:"nav-list"},it={key:0,class:"info-block"},ct=A(()=>o("h3",{class:"title info-title"},"\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u0435\u043D\u0442",-1)),_t={class:"info-list"},dt=A(()=>o("div",{class:"divider"},null,-1)),pt=A(()=>o("section",{class:"info-block"},[o("h3",{class:"title info-title"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:"),o("ul",{class:"info-list"},[o("li",{class:"info-item"},[p(" \u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),o("a",{class:"link",href:"tel:+73952405164"},"+7 (3952) 40-51-64")]),o("li",{class:"info-item"},[p(" E-mail: "),o("a",{class:"link",href:"mailto:arshinskyv@istu.edu"}," arshinskyv@istu.edu ")])])],-1)),vt=A(()=>o("section",{class:"info-block"},[o("h3",{class:"title info-title"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:"),o("ul",{class:"info-list"},[o("li",{class:"info-item"},"664074, \u0433. \u0418\u0440\u043A\u0443\u0442\u0441\u043A \u0443\u043B. \u041B\u0435\u0440\u043C\u043E\u043D\u0442\u043E\u0432\u0430 83"),o("li",{class:"info-item"},[p(" \u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),o("a",{class:"link",href:"tel:+73952405000"},"+7 (3952) 405-000")]),o("li",{class:"info-item"},[p(" \u0424\u0430\u043A\u0441: "),o("a",{class:"link",href:"tel:+73952405100"},"+7 (3952) 405-100")]),o("li",{class:"info-item"},[p(" \u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0430\u044F: "),o("a",{class:"link",href:"tel:+73952405009"},"+7 (3952) 405-009")]),o("li",{class:"info-item"},[p(" E-mail: "),o("a",{class:"link",href:"mailto:info@istu.edu"},"info@istu.edu")])])],-1)),mt=v({setup(s){const e=C(),t=j(),u=P();return(n,f)=>(a(),r("footer",nt,[_(x,{size:"lg",class:"container"},{default:i(()=>[o("div",null,[_(l(D),{class:"clear-link",to:{name:l(T).HOME}},{default:i(()=>[_(U,{class:"logo"})]),_:1},8,["to"]),lt]),o("nav",null,[o("ul",rt,[(a(!0),r($,null,b(l(t),d=>(a(),r("li",{key:d.name},[_(l(D),{class:"title link nav-link",to:{name:d.name}},{default:i(()=>[p(h(d.meta.title),1)]),_:2},1032,["to"])]))),128))])]),l(e).isAuth?(a(),r("section",it,[ct,o("ul",_t,[(a(!0),r($,null,b(l(u),d=>(a(),r("li",{key:d.name,class:"info-item"},[_(l(D),{class:"link",to:{name:d.name}},{default:i(()=>[p(h(d.meta.title),1)]),_:2},1032,["to"])]))),128))])])):B("",!0),dt,pt,vt]),_:1})]))}});var ft=m(mt,[["__scopeId","data-v-9824a3c0"]]);const ht={key:0,class:"navigation"},yt=["innerHTML"],gt=v({setup(s){const e=xe(),t=k(Number.MAX_SAFE_INTEGER),u=k(!0);function n(){u.value=t.value>scrollY,t.value=scrollY}return _e(()=>{window.addEventListener("scroll",n)}),de(()=>{window.removeEventListener("scroll",n)}),(f,d)=>(a(),g(pe,{name:"nav"},{default:i(()=>[u.value?(a(),r("nav",ht,[_(x,{class:"container",size:"lg"},{default:i(()=>[(a(!0),r($,null,b(l(e),c=>(a(),g(l(D),{key:c.name,class:"link",to:{name:c.name}},{default:i(()=>[c.meta.svg?(a(),r("div",{key:0,innerHTML:c.meta.svg},null,8,yt)):B("",!0),p(" "+h(c.meta.title),1)]),_:2},1032,["to"]))),128))]),_:1})])):B("",!0)]),_:1}))}});var $t=m(gt,[["__scopeId","data-v-e2f38674"]]);const kt=v({inheritAttrs:!1}),At=v(S(w({},kt),{setup(s){const e=oe();return(t,u)=>(a(),g(ye,null,{header:i(()=>[_(at),l(e)?(a(),g($t,{key:0})):B("",!0)]),content:i(()=>[_(x,ve(t.$attrs,{size:"md"}),{default:i(()=>[E(t.$slots,"default")]),_:3},16)]),footer:i(()=>[_(ft)]),_:3}))}}));export{At as _,Ke as a,P as u};
