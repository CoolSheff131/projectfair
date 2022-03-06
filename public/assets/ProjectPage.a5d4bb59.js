import{d as v,o as u,h as l,F as k,l as B,u as s,t as n,c as b,w as a,k as _,a6 as w,i,A as y,n as A,j as t,p as D,q as S,a5 as N,m as $}from"./vendor.c7c73a5f.js";import{_ as m,D as L,B as R,P as T,b as C,a as V,u as q,c as H,h as M}from"./useAsyncData.aa192360.js";import{R as I}from"./index.6609c294.js";const x=()=>window.history.length>2;const O={class:"breadcrumbs"},z=["onClick"],G={key:2},J=v({props:{breadcrumbs:null},setup(e){return(r,d)=>(u(),l("ul",O,[(u(!0),l(k,null,B(e.breadcrumbs,({to:c,title:o,back:f},p)=>(u(),l("li",{key:p,class:"breadcrumbs-item"},[f?(u(),l("button",{key:0,class:"breadcrumbs-link",onClick:g=>s(x)()?r.$router.back():r.$router.push({name:s(I).HOME})},n(o),9,z)):c?(u(),b(s(w),{key:1,to:c,class:"breadcrumbs-link"},{default:a(()=>[_(n(o),1)]),_:2},1032,["to"])):(u(),l("span",G,n(o),1))]))),128))]))}});var K=m(J,[["__scopeId","data-v-da1cae2c"]]);const Q={class:"project-panel"},U=v({props:{cols:{type:Number,default:1}},setup(e){return(r,d)=>(u(),l("div",Q,[i("div",{class:A(["row",`row-${e.cols}`])},[y(r.$slots,"default",{},void 0,!0)],2)]))}});var P=m(U,[["__scopeId","data-v-43a7628e"]]);const W={class:"info-list-title"},X=v({props:{title:{type:String,required:!0},bold:{type:Boolean,default:!0},wide:Boolean},setup(e){return(r,d)=>(u(),l("li",{class:A(["info-list-item",{wide:e.wide}])},[i("h2",W,n(e.title),1),i("span",{class:A(["info-list-value",{bold:e.bold}])},[y(r.$slots,"default",{},void 0,!0)],2)],2))}});var E=m(X,[["__scopeId","data-v-1b4192c9"]]);const Y={class:"info-list"},Z=v({props:{items:{type:Array,default:()=>[]}},setup(e){return(r,d)=>(u(),l("ul",Y,[y(r.$slots,"default",{},()=>[(u(!0),l(k,null,B(e.items,({title:c,value:o,bold:f,wide:p})=>(u(),b(E,{key:c+o,title:c,bold:f,wide:p},{default:a(()=>[_(n(o),1)]),_:2},1032,["title","bold","wide"]))),128))],!0)]))}});var j=m(Z,[["__scopeId","data-v-071f84c8"]]);const ee={},ue={class:"col"};function te(e,r){return u(),l("div",ue,[y(e.$slots,"default",{},void 0,!0)])}var h=m(ee,[["render",te],["__scopeId","data-v-8d551498"]]);const F=e=>(D("data-v-b5ab27c6"),e=e(),S(),e),ae=F(()=>i("h2",{class:"info-title"},"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",-1)),se=F(()=>i("h2",{class:"info-title mt-4"},"\u041A\u043E\u043B-\u0432\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432",-1)),le=_("\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"),re={class:"tags"},oe=v({props:{project:null},setup(e){return(r,d)=>(u(),l("section",null,[t(P,{cols:3},{default:a(()=>[t(h,null,{default:a(()=>[t(j,{items:[{title:"\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430",value:e.project.supervisor_name},{title:"\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A",value:e.project.customer},{title:"\u0421\u0440\u043E\u043A\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438",value:`${e.project.date_start} - ${e.project.date_end}`},{title:"\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C",value:s(L)[e.project.difficulty]}]},null,8,["items"])]),_:1}),t(h,null,{default:a(()=>[t(j,{items:[{title:"\u0422\u0438\u043F \u043F\u0440\u043E\u0435\u043A\u0442\u0430",value:e.project.type_name},{title:"\u0426\u0435\u043B\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430",value:e.project.goal}]},null,8,["items"])]),_:1}),t(h,null,{default:a(()=>[i("div",null,[ae,t(R,{class:"badge mt-2"},{default:a(()=>[_(n(e.project.state_name),1)]),_:1}),se,t(T,{class:"mt-2",count:e.project.vacant_places,total:e.project.places},null,8,["count","total"]),t(C,{class:"mt-4"},{default:a(()=>[le]),_:1})])]),_:1})]),_:1}),t(P,{cols:2},{default:a(()=>[t(h,null,{default:a(()=>[t(j,{items:[{title:"\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",value:e.project.expected_result}]},null,8,["items"])]),_:1}),t(h,null,{default:a(()=>[t(j,{items:[{title:"\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C",value:e.project.requirements}]},null,8,["items"])]),_:1})]),_:1}),t(P,{cols:1},{default:a(()=>[t(j,null,{default:a(()=>[t(E,{title:"\u0418\u0434\u0435\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430",bold:!1,wide:!0},{default:a(()=>[_(n(e.project.idea),1)]),_:1}),t(E,{title:"\u0422\u0435\u0433\u0438",bold:!1,wide:!0},{default:a(()=>[i("span",re,[(u(!0),l(k,null,B(e.project.tags,c=>(u(),b(V,{key:c.id},{default:a(()=>[_(n(c.tag),1)]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1})]))}});var ce=m(oe,[["__scopeId","data-v-b5ab27c6"]]);function ne(e){return q(H.getSingleProject(e))}const ie={class:"header"},de={class:"page-title"},_e={key:0},me={key:1},fe={key:2},pe={class:"d-flex justify-content-center mt-3"},ve=_(" \u043D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 "),be=v({setup(e){const r=N(),{error:d,loading:c,data:o}=ne(Number(r.params.id));return(f,p)=>(u(),b(M,null,{default:a(()=>{var g;return[i("header",ie,[t(K,{class:"breadcrumbs",breadcrumbs:[{title:"\u0412\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B",back:!0},{title:((g=s(o))==null?void 0:g.title)||""}]},null,8,["breadcrumbs"]),i("h1",de,[s(c)?(u(),l("span",_e,"\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")):$("",!0),s(d)?(u(),l("span",me,n(s(d)),1)):$("",!0),s(o)?(u(),l("span",fe,n(s(o).title),1)):$("",!0)])]),s(o)&&!s(c)&&!s(d)?(u(),b(ce,{key:0,project:s(o)},null,8,["project"])):$("",!0),i("div",pe,[t(C,{variant:"link",onClick:p[0]||(p[0]=je=>s(x)()?f.$router.back():f.$router.push({name:s(I).HOME}))},{default:a(()=>[ve]),_:1})])]}),_:1}))}});var ge=m(be,[["__scopeId","data-v-51bfae18"]]);export{ge as default};
