import{d as i,u as c,j as u,k as d,c as p,I as h,w as m,o,F as f,E as _,b}from"./chunks/framework.BHRvbJ9z.js";import{P as g}from"./chunks/PageWrapper.D5Rz0aSk.js";import{P}from"./chunks/PhotoList.DyrGeYMp.js";import{c as v}from"./chunks/photos.B7_cLX5e.js";const C=JSON.parse('{"title":"照片","description":"","frontmatter":{"layout":"page","sidebar":false,"title":"照片"},"headers":[],"params":{"people":"baby"},"relativePath":"guides/photos/baby.md","filePath":"guides/photos/baby.md"}'),y={name:"guides/photos/baby.md"},D=i({...y,setup(k){const{params:s}=c(),r=u([]);d(()=>{l(v[s.value.people])});const l=t=>{for(let e in t){const a={cate:e,data:t[e]};r.value.push(a)}},n=t=>{location.href=`/guides/photos/${s.value.people}-${t}`};return(t,e)=>(o(),p("div",null,[h(g,{layout:"grid"},{default:m(()=>[(o(!0),p(f,null,_(r.value,a=>(o(),b(P,{cate:a.cate,photos:a.data,onPhotoView:n},null,8,["cate","photos"]))),256))]),_:1})]))}});export{C as __pageData,D as default};