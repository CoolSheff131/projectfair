import{_,d as f,o as t,c as s,j as n,m as l,E as o,F as d,r as h,a as w,w as p,b as m,t as u,k as y}from"./index.f15b241b.js";const x={class:"info-list-title"},A=f({__name:"AppListItem",props:{bold:{type:Boolean,default:!0},wide:{type:Boolean,default:!1}},setup(e){return(a,c)=>(t(),s("li",{class:o(["info-list-item",{wide:e.wide}])},[n("h2",x,[l(a.$slots,"title",{},void 0,!0)]),n("span",{class:o(["info-list-value",{bold:e.bold}])},[l(a.$slots,"default",{},void 0,!0)],2)],2))}});var L=_(A,[["__scopeId","data-v-07092631"]]);const b=f({__name:"AppList",props:{items:{default:()=>[]},rowGap:{default:"l"}},setup(e){return(a,c)=>(t(),s("ul",{class:o(["info-list",`gap-${e.rowGap}`])},[l(a.$slots,"default",{},()=>[(t(!0),s(d,null,h(e.items,({title:r,content:i,bold:v,wide:g})=>(t(),s(d,{key:r+i},[i?(t(),w(L,{key:0,bold:v,wide:g},{title:p(()=>[m(u(r),1)]),default:p(()=>[m(u(i),1)]),_:2},1032,["bold","wide"])):y("",!0)],64))),128))],!0)],2))}});var B=_(b,[["__scopeId","data-v-55762662"]]);export{B as A,L as a};
