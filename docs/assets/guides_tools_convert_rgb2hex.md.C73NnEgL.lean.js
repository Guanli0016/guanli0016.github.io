import{d as I,j as c,c as y,l as t,a as d,ah as p,aq as i,I as w,P as S,o as B,p as G,q as V,_ as L}from"./chunks/framework.DyZeyTMx.js";import{C as U}from"./chunks/CopyButton.BURGloYb.js";const r=(l,v=!0)=>{typeof l=="string"&&(l=parseInt(l)||0);const a=l.toString(16).padStart(2,"0");return v?a.toLocaleUpperCase():a},h=l=>(typeof l=="string"&&(l=parseInt("0x"+l)||0),l.toString(10)),x=l=>(G("data-v-217accd7"),l=l(),V(),l),k=x(()=>t("h3",{id:"rgb转16进制",tabindex:"-1"},[d("RGB转16进制 "),t("a",{class:"header-anchor",href:"#rgb转16进制","aria-label":'Permalink to "RGB转16进制"'},"​")],-1)),C=x(()=>t("br",null,null,-1)),D={class:"rgb-box"},N={class:"rbg-row"},P={class:"rbg-row"},M={class:"rbg-row"},R=x(()=>t("br",null,null,-1)),q={class:"hex-box"},z=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guides/tools/convert/rgb2hex.md","filePath":"guides/tools/convert/rgb2hex.md"}'),E={name:"guides/tools/convert/rgb2hex.md"},T=I({...E,setup(l){const v=c(!1),a=c("0"),s=c("0"),u=c("0"),e=c("#000000"),b=g=>{a.value=a.value.replace(/\D/g,""),a.value>255&&(a.value=a.value.slice(0,-1)),e.value="#"+r(a.value)+r(s.value)+r(u.value)},f=g=>{s.value=s.value.replace(/\D/g,""),s.value>255&&(s.value=s.value.slice(0,-1)),e.value="#"+r(a.value)+r(s.value)+r(u.value)},m=g=>{u.value=u.value.replace(/\D/g,""),u.value>255&&(u.value=u.value.slice(0,-1)),e.value="#"+r(a.value)+r(s.value)+r(u.value)},_=()=>{e.value=e.value.replace(/[^0-9a-f]/gi,""),e.value=e.value.toLocaleUpperCase(),e.value.startsWith("#")||(e.value="#"+e.value),a.value=h(e.value.slice(1,3)),s.value=h(e.value.slice(3,5)),u.value=h(e.value.slice(5))};return(g,o)=>(B(),y("div",null,[k,C,t("div",D,[t("div",N,[d(" 红（0 ~ 255）："),p(t("input",{class:"GLInput rgb-input",type:"text",maxlength:"3","onUpdate:modelValue":o[0]||(o[0]=n=>a.value=n),onInput:b,placeholder:"请输入0~255之间的数字"},null,544),[[i,a.value]])]),t("div",P,[d(" 绿（0 ~ 255）："),p(t("input",{class:"GLInput rgb-input",type:"text",maxlength:"3","onUpdate:modelValue":o[1]||(o[1]=n=>s.value=n),onInput:f,placeholder:"请输入0~255之间的数字"},null,544),[[i,s.value]])]),t("div",M,[d(" 蓝（0 ~ 255）："),p(t("input",{class:"GLInput rgb-input",type:"text",maxlength:"3","onUpdate:modelValue":o[2]||(o[2]=n=>u.value=n),onInput:m,placeholder:"请输入0~255之间的数字"},null,544),[[i,u.value]])])]),R,t("div",q,[t("div",{class:"hex-row",onMouseenter:o[4]||(o[4]=n=>v.value=!0),onMouseleave:o[5]||(o[5]=n=>v.value=!1)},[p(t("input",{class:"GLInput hex-input",type:"text",maxlength:"7","onUpdate:modelValue":o[3]||(o[3]=n=>e.value=n),ref:"hexInput",onInput:_},null,544),[[i,e.value]]),w(U,{class:"copy-button",title:"复制色号",content:e.value,show:v.value},null,8,["content","show"])],32),t("div",{class:"color-block",style:S({"background-color":e.value})},null,4)])]))}}),H=L(T,[["__scopeId","data-v-217accd7"]]);export{z as __pageData,H as default};
