import{d as v,j as c,c as _,l as t,t as D,I as f,e as I,o as m,p as g,q as h,_ as b,a0 as u,a as k}from"./chunks/framework.BhEyZpVg.js";import{C as y}from"./chunks/CopyButton.V2pNTjN9.js";const S=e=>(g("data-v-83a62c93"),e=e(),h(),e),B={class:"code-area"},$=S(()=>t("h6",null,"CODE",-1)),N=v({__name:"CodeArea",props:{code:{}},setup(e){const a=c(!1);return(s,n)=>s.code?(m(),_("div",{key:0,class:"code-area-wrapper",onMouseenter:n[0]||(n[0]=r=>a.value=!0),onMouseleave:n[1]||(n[1]=r=>a.value=!1)},[t("div",B,[$,t("p",null,D(s.code),1)]),f(y,{class:"copy-button",title:"复制代码",content:s.code,show:a.value},null,8,["content","show"])],32)):I("",!0)}}),E=b(N,[["__scopeId","data-v-83a62c93"]]),d=e=>(g("data-v-2116e621"),e=e(),h(),e),F=d(()=>t("h3",{id:"图片转base64",tabindex:"-1"},[k("图片转Base64 "),t("a",{class:"header-anchor",href:"#图片转base64","aria-label":'Permalink to "图片转Base64"'},"​")],-1)),M=d(()=>t("br",null,null,-1)),V=d(()=>t("br",null,null,-1)),O=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guides/tools/convert/image2base64.md","filePath":"guides/tools/convert/image2base64.md"}'),x={name:"guides/tools/convert/image2base64.md"},A=v({...x,setup(e){const a=c(null),s=c(""),n=()=>{const o=new MouseEvent("click");a.value.dispatchEvent(o)},r=o=>{i(o.target.files)},C=o=>{event.preventDefault(),i(o.dataTransfer.files)},i=o=>{const l=o[0],p=new FileReader;p.readAsDataURL(l),p.onload=w=>{s.value=w.target.result}};return(o,l)=>(m(),_("div",null,[F,M,t("div",{class:"file-area",onClick:n,onDrop:C,onDragover:l[0]||(l[0]=u(()=>{},["prevent"])),onDragenter:l[1]||(l[1]=u(()=>{},["prevent"]))},null,32),t("input",{type:"file",ref_key:"fileInput",ref:a,hidden:"",accept:"image/png, image/jpeg",onChange:r},null,544),V,f(E,{code:s.value},null,8,["code"])]))}}),R=b(A,[["__scopeId","data-v-2116e621"]]);export{O as __pageData,R as default};