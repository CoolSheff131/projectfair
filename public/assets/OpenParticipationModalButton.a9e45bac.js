import{c,b as i,S as d,B as p}from"./index.be7b4c1b.js";import{b as l,K as f,h as a,c as m,e as b,f as h,l as v,t as S}from"./vendor.813f09f8.js";const _=S(" \u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 "),C=l({props:{project:null,variant:{default:"outlined"}},setup(r){const e=r,o=c(),n=i(),u=f(()=>{var t;return e.project.state.id===d.ArchivedState||((t=n.profileData)==null?void 0:t.is_teacher)});return(t,s)=>a(u)?v("",!0):(m(),b(p,{key:0,case:"uppercase",variant:e.variant,disabled:a(o).loading,onClick:s[0]||(s[0]=B=>a(o).openParticipationModal(e.project))},{default:h(()=>[_]),_:1},8,["variant","disabled"]))}});export{C as _};
