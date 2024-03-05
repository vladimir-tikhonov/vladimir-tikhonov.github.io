"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[47104],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3410:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const a={id:"LP2006",title:"Asset manifest errors",sidebar_label:"2006 - Asset manifest",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","asset","build","error","LP2006"]},i=void 0,s={unversionedId:"playable/code/error-codes/LP2006",id:"playable/code/error-codes/LP2006",title:"Asset manifest errors",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/2006-Asset_manifest.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP2006",permalink:"/docs/playable/code/error-codes/LP2006",draft:!1,tags:[],version:"current",sidebarPosition:2006,frontMatter:{id:"LP2006",title:"Asset manifest errors",sidebar_label:"2006 - Asset manifest",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","asset","build","error","LP2006"]},sidebar:"gettingStarted",previous:{title:"2005 - Engine Build (Bridge.NET)",permalink:"/docs/playable/code/error-codes/LP2005"},next:{title:"2007 - Bridge crash",permalink:"/docs/playable/code/error-codes/LP2007"}},l={},c=[{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"explanation"},"Explanation"),(0,o.yg)("p",null,"This error code relates to broken or corrupted asset manifests."),(0,o.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,o.yg)("p",null,"First try building again."),(0,o.yg)("p",null,"If the error persists, try to locate from the error log which asset is causing the problem and check that there is nothing wrong with it."))}u.isMDXComponent=!0}}]);