import{d as n,j as l,c,n as p,o as r,_ as d}from"./framework.BDX6MmXo.js";const u=o=>{const t=(s,a)=>{let e=document.createElement("textarea");e.setAttribute("style","position: absolute"),e.setAttribute("style","top: -100px"),e.setAttribute("style","left: -100px"),document.getElementsByTagName("body")[0].appendChild(e),e.value=o,e.select(),document.execCommand("copy"),document.getElementsByTagName("body")[0].removeChild(e),s()};return new Promise(t)},i=["title"],m=n({__name:"CopyButton",props:{title:{default:"复制"},content:{default:""},show:{type:Boolean,default:!1}},setup(o){const t=l(!1),s=o,a=()=>{u(s.content).then(()=>{t.value=!0,setTimeout(()=>t.value=!1,1800)})};return(e,y)=>(r(),c("button",{class:p(["copy",{copied:t.value,show:e.show}]),title:e.title,onClick:a},null,10,i))}}),C=d(m,[["__scopeId","data-v-d86c7dd8"]]);export{C};