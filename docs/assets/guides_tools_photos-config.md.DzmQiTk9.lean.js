import{M as E}from"./chunks/MainWrapper.DedwKO0p.js";import{d as O,j as S,c as R,I as L,w as k,o as x,l as m,p as A,q as M,_ as T}from"./chunks/framework.C0aFZV5n.js";const B=n=>{const l={};for(let d of n){const c=d.webkitRelativePath,[a,s,i]=c.split(/\//g);l.hasOwnProperty(a)?(l[a].hasOwnProperty(s)||(l[a][s]=[]),l[a][s].push(c)):(l[a]={},l[a].hasOwnProperty(s)||(l[a][s]=[]),l[a][s].push(c))}return l};var u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var g={exports:{}};(function(n,l){(function(d,c){c()})(u,function(){function d(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function c(e,t,f){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){h(o.response,t,f)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof u=="object"&&u.global===u?u:void 0,y=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!y?function(e,t,f){var o=i.URL||i.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin===location.origin?s(r):a(r.href)?c(e,t,f):s(r,r.target="_blank")):(r.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(r.href)},4e4),setTimeout(function(){s(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,f){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(d(e,f),t);else if(a(e))c(e,t,f);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){s(o)})}}:function(e,t,f,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return c(e,t,f);var r=e.type==="application/octet-stream",j=/constructor/i.test(i.HTMLElement)||i.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||r&&j||y)&&typeof FileReader<"u"){var v=new FileReader;v.onloadend=function(){var p=v.result;p=_?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=p:location=p,o=null},v.readAsDataURL(e)}else{var b=i.URL||i.webkitURL,w=b.createObjectURL(e);o?o.location=w:location.href=w,o=null,setTimeout(function(){b.revokeObjectURL(w)},4e4)}});i.saveAs=h.saveAs=h,n.exports=h})})(g);var F=g.exports;const U=C(F),P=n=>(A("data-v-c99311ac"),n=n(),M(),n),I={class:"form"},D=P(()=>m("label",{for:"fileChooser"},"选择文件夹",-1)),J=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","sidebar":false},"headers":[],"relativePath":"guides/tools/photos-config.md","filePath":"guides/tools/photos-config.md"}'),H={name:"guides/tools/photos-config.md"},N=O({...H,setup(n){const l=S(),d=c=>{const a=c.target.files,s=B(a),i=new Blob([JSON.stringify(s)],{type:"text/plain;charset=utf-8"});U.saveAs(i,"photos.json")};return(c,a)=>(x(),R("div",null,[L(E,null,{default:k(()=>[m("div",I,[D,m("input",{type:"file",ref_key:"fileInput",ref:l,id:"fileChooser",webkitdirectory:"",onChange:d},null,544)])]),_:1})]))}}),V=T(N,[["__scopeId","data-v-c99311ac"]]);export{J as __pageData,V as default};