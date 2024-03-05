"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[29424],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return t?o.createElement(m,i(i({ref:r},p),{},{components:t})):o.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22971:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(58168),n=(t(96540),t(15680));const a={id:"the-coalescing-operator",title:"The coalescing operator is not working",sidebar_label:"The coalescing operator is not working",keywords:["playable","luna","issue","issues","solution","fix"]},i=void 0,l={unversionedId:"playable/common-issues/builds/the-coalescing-operator",id:"playable/common-issues/builds/the-coalescing-operator",title:"The coalescing operator is not working",description:"The coalescing operator (?? and ??=) is only supported in C# 8.0 or later. Luna uses the Bridge.NET library that currently only supports up to C# 7.0.",source:"@site/docs/playable/common-issues/builds/the-coalescing-operator.md",sourceDirName:"playable/common-issues/builds",slug:"/playable/common-issues/builds/the-coalescing-operator",permalink:"/docs/playable/common-issues/builds/the-coalescing-operator",draft:!1,tags:[],version:"current",frontMatter:{id:"the-coalescing-operator",title:"The coalescing operator is not working",sidebar_label:"The coalescing operator is not working",keywords:["playable","luna","issue","issues","solution","fix"]},sidebar:"gettingStarted",previous:{title:"Project build fails with multiple types of errors",permalink:"/docs/playable/common-issues/builds/project-build-fails"},next:{title:"Luna build preview throws error has been blocked by CORS policy",permalink:"/docs/playable/common-issues/builds/luna-build-preview"}},s={},c=[],p={toc:c},u="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The ",(0,n.yg)("em",{parentName:"p"},"coalescing operator")," (",(0,n.yg)("inlineCode",{parentName:"p"},"??")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"??="),") is only supported in C# 8.0 or later. Luna uses the ",(0,n.yg)("a",{parentName:"p",href:"/docs/playable/getting-started/limitations/#bridge-limitations"},"Bridge.NET library")," that currently only supports up to C# 7.0."),(0,n.yg)("p",null,"Possible solutions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/docs/playable/code/luna-compiler-v2"},"Luna Compiler V2")," to compile your build. This will allow you to use C# 8.0 or 9.0 features.")))}y.isMDXComponent=!0}}]);