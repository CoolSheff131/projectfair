import{c as i,b as c,S as d,B as p}from"./index.9feb1555.js";import{b as l,z as f,h as a,c as m,e as S,f as _,l as h,t as v}from"./vendor.da625174.js";const B=v(" \u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 "),C=l({props:{project:null,variant:{default:"outlined"}},setup(r){const t=r,o=i(),n=c(),u=f(()=>{var e;return t.project.state.id!==d.RecruitingState||((e=n.profileData)==null?void 0:e.is_teacher)});return(e,s)=>a(u)?h("",!0):(m(),S(p,{key:0,case:"uppercase",variant:t.variant,disabled:a(o).loading,onClick:s[0]||(s[0]=b=>a(o).openParticipationModal(t.project))},{default:_(()=>[B]),_:1},8,["variant","disabled"]))}});export{C as _};
