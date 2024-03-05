"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[57115],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),g=t,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||s;return r?a.createElement(m,i(i({ref:n},p),{},{components:r})):a.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:t,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(58168),t=(r(96540),r(15680));const s={id:"enabling-fog-via",title:"Enabling fog via a script causes shader errors in Luna",sidebar_label:"Enabling fog via a script causes shader errors in Luna"},i=void 0,o={unversionedId:"playable/common-issues/shaders_meshes/enabling-fog-via",id:"playable/common-issues/shaders_meshes/enabling-fog-via",title:"Enabling fog via a script causes shader errors in Luna",description:"This is likely happening because by default Unity doesn't include all the shader variants for each fog variant, so when you switch fog types in runtime there's no shader for this particular variant and a pink replacement shader appears.",source:"@site/docs/playable/common-issues/shaders_meshes/enabling-fog-via.md",sourceDirName:"playable/common-issues/shaders_meshes",slug:"/playable/common-issues/shaders_meshes/enabling-fog-via",permalink:"/docs/playable/common-issues/shaders_meshes/enabling-fog-via",draft:!1,tags:[],version:"current",frontMatter:{id:"enabling-fog-via",title:"Enabling fog via a script causes shader errors in Luna",sidebar_label:"Enabling fog via a script causes shader errors in Luna"},sidebar:"gettingStarted",previous:{title:"Cant change shader property on Skinned Mesh Renderer using MaterialPropertyBlock  cannot change material color at runtime",permalink:"/docs/playable/common-issues/shaders_meshes/cant-change-shader"},next:{title:"Black background on particles in Particle System",permalink:"/docs/playable/common-issues/shaders_meshes/black-background-on"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...s}=e;return(0,t.yg)(u,(0,a.A)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"This is likely happening because by default Unity doesn't include all the shader variants for each fog variant, so when you switch fog types in runtime there's no shader for this particular variant and a pink replacement shader appears."),(0,t.yg)("p",null,"Possible solution:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Enable fog via the lighting settings window instead. (Window -> Rendering -> Lighting Settings)")),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"images-small",src:r(65536).A,width:"390",height:"421"})))}d.isMDXComponent=!0},65536:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/shaders-fog-477ed1d367967e36ee77c280469873b8.png"}}]);