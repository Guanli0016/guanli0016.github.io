import{d as i,c,l as p,r as u,o as s,_,t as h,p as m,q as f,j as v,I as g,w as d,F as y,E as w,b as P,a as V}from"./chunks/framework.DwDoyBw8.js";const x={class:"container"},I={class:"wrapper"},S=i({__name:"GridWrapper",setup(o){return(a,n)=>(s(),c("div",x,[p("div",I,[u(a.$slots,"default",{},void 0,!0)])]))}}),$=_(S,[["__scopeId","data-v-99fa20d0"]]),b=o=>(m("data-v-7376f1a5"),o=o(),f(),o),k=b(()=>p("div",{class:"photos-view"},null,-1)),B={class:"photos-name"},N=i({__name:"PhotoView",props:{name:{},photos:{}},emits:["photo-view"],setup(o,{emit:a}){const n=o,t=a,r=()=>{t("photo-view",n.photos)};return(e,D)=>(s(),c("div",{class:"photos-view-box",onClick:r},[k,p("div",B,h(e.name),1)]))}}),C=_(N,[["__scopeId","data-v-7376f1a5"]]),E=["小宝满月","小宝一岁"],l={category:E},G=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","sidebar":false},"headers":[],"relativePath":"guides/family/lyn.md","filePath":"guides/family/lyn.md"}'),j={name:"guides/family/lyn.md"},W=i({...j,setup(o){console.log(l.category);const a=v([]);l.category.forEach(async(t,r)=>{let e={};e.name=t,e.data=[],a.value.push(e)});const n=t=>{console.log(t)};return(t,r)=>(s(),c("div",null,[g($,null,{default:d(()=>[(s(!0),c(y,null,w(a.value,e=>(s(),P(C,{name:e.name,photos:e.data,onPhotoView:n},{default:d(()=>[V(h(t.i),1)]),_:2},1032,["name","photos"]))),256))]),_:1})]))}});export{G as __pageData,W as default};