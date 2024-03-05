"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[55862],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=n(58168),r=(n(96540),n(15680));const l={id:"lighting-causes-build",title:"Lighting causes build time to exceed 510 minutes build time",sidebar_label:"Lighting causes build time to exceed 510 minutes build time"},o=void 0,a={unversionedId:"playable/common-issues/lighting/lighting-causes-build",id:"playable/common-issues/lighting/lighting-causes-build",title:"Lighting causes build time to exceed 510 minutes build time",description:"The very long building time could be caused by using the Contribute Global Illumination setting in the Mesh Renderer component. This can cause very heavy calculations before the export can finish.",source:"@site/docs/playable/common-issues/lighting/lighting-causes-build.md",sourceDirName:"playable/common-issues/lighting",slug:"/playable/common-issues/lighting/lighting-causes-build",permalink:"/docs/playable/common-issues/lighting/lighting-causes-build",draft:!1,tags:[],version:"current",frontMatter:{id:"lighting-causes-build",title:"Lighting causes build time to exceed 510 minutes build time",sidebar_label:"Lighting causes build time to exceed 510 minutes build time"},sidebar:"gettingStarted",previous:{title:"Lighting is different in Luna",permalink:"/docs/playable/common-issues/lighting/lighting-is-different"},next:{title:"Particles not appearing",permalink:"/docs/playable/common-issues/particles/particles-not-appearing"}},s={},u=[],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The very long building time could be caused by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contribute Global Illumination")," setting in the Mesh Renderer component. This can cause very heavy calculations before the export can finish."),(0,r.yg)("p",null,"Possible solution:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disable the ",(0,r.yg)("inlineCode",{parentName:"li"},"Contribute Global Illumination")," setting in all renderers.")),(0,r.yg)("p",null,"![images-medium]","(/assets/common-issues/contribute-global-illumination.pn"))}g.isMDXComponent=!0}}]);