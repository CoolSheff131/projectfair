import{b as F,w as C,f as m,h as t,p as r,F as f,H as S,n,v as c,j as _,z as b,A as d,m as a,G as g,l as i,s as v,i as h,R as A,x as T,y as k}from"./vendor.js";import{c as E,R as B,_ as x,e as N}from"./index.js";import{S as R}from"./SidebarContainer.js";import{u as j,a as w,_ as I}from"./PageLayout.js";import"./datetime.js";const V=()=>{const u=F(),e=E();C(()=>e.isAuth,s=>{s||u.replace({name:B.HOME})})};const $=m({props:{variant:{default:"desktop"}},setup(u){const e=u,s=E(),o=j();return(y,p)=>(t(),r("ul",{class:n(["list",e.variant])},[(t(!0),r(f,null,S(a(o),l=>(t(),r("li",{key:l.name,class:n(["item",e.variant])},[c(a(g),{class:n(["action",e.variant]),to:{name:l.name}},{default:_(()=>[b(d(l.meta.title),1)]),_:2},1032,["class","to"])],2))),128)),i("li",{class:n(["item",e.variant])},[i("button",{class:n(["action",e.variant]),onClick:p[0]||(p[0]=l=>a(s).exit())}," \u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F ",2)],2)],2))}});var D=x($,[["__scopeId","data-v-c27cde90"]]);const z={class:"timer"},L={class:"title time"},M={key:1,class:"title"},U=m({props:{deadline:null,timerText:null,afterTimerText:null},setup(u){const e=u,{duration:s,isTimePass:o}=w(e.deadline);return(y,p)=>(t(),r("div",z,[a(o)?v("",!0):(t(),r(f,{key:0},[i("div",L,d(a(s)),1),i("div",null,d(e.timerText),1)],64)),a(o)?(t(),r("div",M,d(e.afterTimerText),1)):v("",!0)]))}});var H=x(U,[["__scopeId","data-v-d1b25410"]]);const P=u=>(T("data-v-78cc0908"),u=u(),k(),u),G=P(()=>i("header",{class:"header"},[i("h1",{class:"title page-title"},"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")],-1)),O=m({setup(u){const e=N();return V(),(s,o)=>(t(),h(I,null,{default:_(()=>[a(e)?(t(),h(D,{key:0,variant:"mobile"})):v("",!0),G,c(R,{class:"sidebar-container"},{sidebar:_(()=>[c(D,{variant:"desktop"}),c(H,{deadline:new Date("2022/12/01"),"timer-text":"\u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043F\u0440\u0438\u0435\u043C\u0430 \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435","after-timer-text":"\u041F\u0440\u0438\u0435\u043C \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D"},null,8,["deadline"])]),main:_(()=>[c(a(A))]),_:1})]),_:1}))}});var X=x(O,[["__scopeId","data-v-78cc0908"]]);export{X as default};
