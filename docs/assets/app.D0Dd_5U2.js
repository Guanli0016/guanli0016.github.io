import{a0 as o,aS as p,aT as u,aU as l,aV as c,aW as f,aX as d,aY as m,aZ as h,a_ as A,a$ as g,aR as _,d as P,u as v,k as R,y as b,b0 as y,b1 as E,b2 as w,aE as C}from"./chunks/framework.BWsnxwQP.js";import{R as T}from"./chunks/theme.D0i_pRp_.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),S=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return R(()=>{b(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),E(),w(),s.setup&&s.setup(),()=>C(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=L(),a=V();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function V(){return h(S)}function L(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=_(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
