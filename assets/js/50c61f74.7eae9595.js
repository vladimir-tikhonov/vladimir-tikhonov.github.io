"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[38463],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const a={id:"LP1016",title:"Excessive component usage",sidebar_label:"1016 - Excessive component usage",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","excessive","components","usage","warning","error","LP1016"]},s=void 0,i={unversionedId:"playable/code/error-codes/LP1016",id:"playable/code/error-codes/LP1016",title:"Excessive component usage",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/1016-ExcessiveComponentUsage.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP1016",permalink:"/docs/playable/code/error-codes/LP1016",draft:!1,tags:[],version:"current",sidebarPosition:1016,frontMatter:{id:"LP1016",title:"Excessive component usage",sidebar_label:"1016 - Excessive component usage",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","excessive","components","usage","warning","error","LP1016"]},sidebar:"gettingStarted",previous:{title:"1015 - Unsupported TMP Version",permalink:"/docs/playable/code/error-codes/LP1015"},next:{title:"1017 - Animation Compression Setting",permalink:"/docs/playable/code/error-codes/LP1017"}},c={},l=[{value:"Message",id:"message",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"message"},"Message"),(0,o.yg)("p",null,"Extensive usage of {name of component} Component."),(0,o.yg)("h2",{id:"explanation"},"Explanation"),(0,o.yg)("p",null,"Excessive usage of any component can be detrimental to performance on lower and in some cases higher end devices, consider reducing the amount components are used."),(0,o.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,o.yg)("p",null,"Reduce the amount of times any one component is used within the playable. E.g. combining multiple static meshes into one to reduce the amount of mesh renderers active in a scene."))}d.isMDXComponent=!0}}]);