import{B as l}from"./chunks/maps.DzGcPxrV.js";import{d as m,k as _,z as u,c as h,o as b,p as f,q as B,l as o,a as M,_ as w}from"./chunks/framework.BpJaoy_F.js";const c=a=>(f("data-v-c0bae00f"),a=a(),B(),a),C=c(()=>o("h3",{id:"百度地图",tabindex:"-1"},[M("百度地图 "),o("a",{class:"header-anchor",href:"#百度地图","aria-label":'Permalink to "百度地图"'},"​")],-1)),L=c(()=>o("div",{id:"container"},null,-1)),g=[C,L],y=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guides/tools/map/bmap.md","filePath":"guides/tools/map/bmap.md"}'),k={name:"guides/tools/map/bmap.md"},v=m({...k,setup(a){let e=null,s=116.397428,p=39.90923;window.initMap=()=>{e=new BMapGL.Map("container");const t=new BMapGL.Point(s,p);e.centerAndZoom(t,12);const n=new BMapGL.ScaleControl;e.addControl(n);const r=new BMapGL.ZoomControl;e.addControl(r);const i=new BMapGL.LocationControl;e.addControl(i)};const d=()=>{const t=document.createElement("script");t.type="text/javascript",t.src=`https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${l.key}&callback=initMap`,document.body.appendChild(t)};return _(()=>{d()}),u(()=>{}),(t,n)=>(b(),h("div",null,g))}}),G=w(v,[["__scopeId","data-v-c0bae00f"]]);export{y as __pageData,G as default};
