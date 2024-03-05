"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[72834],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),y=o,f=c["".concat(s,".").concat(y)]||c[y]||p[y]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},90792:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(58168),o=(t(96540),t(15680));const i={id:"LP3003",title:"MSBuild Version",sidebar_label:"3003 - MSBuild Version",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","msbuild","version","usage","exception","warning","error","LP3003"]},a=void 0,l={unversionedId:"playable/code/error-codes/LP3003",id:"playable/code/error-codes/LP3003",title:"MSBuild Version",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/3003-MSBuildVersion.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP3003",permalink:"/docs/playable/code/error-codes/LP3003",draft:!1,tags:[],version:"current",sidebarPosition:3003,frontMatter:{id:"LP3003",title:"MSBuild Version",sidebar_label:"3003 - MSBuild Version",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","msbuild","version","usage","exception","warning","error","LP3003"]},sidebar:"gettingStarted",previous:{title:"3002 - Unity Bin Path",permalink:"/docs/playable/code/error-codes/LP3002"},next:{title:"3005 - Illegal keyword",permalink:"/docs/playable/code/error-codes/LP3005"}},s={},d=[{value:"Message",id:"message",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],u={toc:d},c="wrapper";function p(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"message"},"Message"),(0,o.yg)("p",null,"MSBuild 15 or higher is required. MSBuild can be updated through the Visual Studio installer or ",(0,o.yg)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16"},"here"),"."),(0,o.yg)("p",null,"Current path in use: {MSBuildPath}'"),(0,o.yg)("h2",{id:"explanation"},"Explanation"),(0,o.yg)("p",null,"In order for Playable Plugin to compile and build diagnostics data, it is required MSBuild version 15 or higher."),(0,o.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,o.yg)("p",null,"Please download and install MSBuild version 15 via the Visual Studio Installer. More information can be found ",(0,o.yg)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16"},"here"),"."))}p.isMDXComponent=!0}}]);