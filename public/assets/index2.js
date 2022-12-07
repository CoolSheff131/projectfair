import{f as j,h as t,p as s,F as A,H as E,m as e,A as _,i as m,j as o,z as d,G as b,v as i,s as l,c as B,C as P,o as R,l as k,R as g}from"./vendor.js";import{_ as y,R as c,S as C,u as S,B as T}from"./index.js";import{_ as x}from"./PageLayout.js";import"./datetime.js";const I=()=>window.history.length>2;const F={class:"breadcrumbs"},N=["onClick"],O={key:2},w=j({props:{breadcrumbs:null},setup(h){return(r,p)=>(t(),s("ul",F,[(t(!0),s(A,null,E(h.breadcrumbs,({to:n,title:u,back:a},f)=>(t(),s("li",{key:f,class:"breadcrumbs-item"},[a?(t(),s("button",{key:0,class:"breadcrumbs-link",onClick:v=>e(I)()?r.$router.back():r.$router.push({name:e(c).HOME})},_(u),9,N)):n?(t(),m(e(b),{key:1,to:n,class:"breadcrumbs-link"},{default:o(()=>[d(_(u),1)]),_:2},1032,["to"])):(t(),s("span",O,_(u),1))]))),128))]))}});var D=y(w,[["__scopeId","data-v-63ee3ec2"]]);const H={class:"wrapper"},V=d(" \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435 "),L=d(" \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u044F\u0432\u043E\u043A "),M=d(" \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 "),J=j({props:{projectState:null},setup(h){return(r,p)=>(t(),s("div",H,[i(e(b),{class:"project-tab",to:{name:e(c).PROJECT_DETAILS}},{default:o(()=>[V]),_:1},8,["to"]),i(e(b),{class:"project-tab",to:{name:e(c).PROJECT_PARTICIPATIONS}},{default:o(()=>[L]),_:1},8,["to"]),r.$props.projectState.id!==e(C).RecruitingState?(t(),m(e(b),{key:0,class:"project-tab",to:{name:e(c).PROJECT_PARTICIPANTS}},{default:o(()=>[M]),_:1},8,["to"])):l("",!0)]))}});var z=y(J,[["__scopeId","data-v-27c8889f"]]);const G={class:"header"},q={class:"page-title"},K={key:0},Q={key:1},U={key:2},W={class:"d-flex justify-content-center mt-3"},X=d(" \u043D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 "),Y=j({setup(h){const r=B(),p=S(),{loading:n,error:u,openedProject:a}=P(p);return R(()=>{p.getSingleProject(Number(r.params.id))}),(f,v)=>(t(),m(x,null,{default:o(()=>{var $;return[k("header",G,[i(D,{class:"breadcrumbs",breadcrumbs:[{title:"\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B",to:{name:e(c).HOME}},{title:(($=e(a))==null?void 0:$.title)||""}]},null,8,["breadcrumbs"]),k("h1",q,[e(n)?(t(),s("span",K,"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")):l("",!0),e(u)?(t(),s("span",Q,_(e(u)),1)):l("",!0),e(a)?(t(),s("span",U,_(e(a).title),1)):l("",!0)])]),!e(u)&&!e(n)&&e(a)?(t(),m(z,{key:0,"project-state":e(a).state},null,8,["project-state"])):l("",!0),i(e(g)),k("div",W,[i(T,{case:"uppercase",variant:"link",onClick:v[0]||(v[0]=Z=>f.$router.push({name:e(c).HOME}))},{default:o(()=>[X]),_:1})])]}),_:1}))}});var ae=y(Y,[["__scopeId","data-v-41ebdeb5"]]);export{ae as default};
