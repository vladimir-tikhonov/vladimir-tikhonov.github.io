"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[58500],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?o.createElement(y,i(i({ref:r},p),{},{components:t})):o.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31225:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(58168),n=(t(96540),t(15680));const a={id:"LP2000",title:"Asset related errors",sidebar_label:"2000 - Assets",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","error","LP2000"]},i=void 0,s={unversionedId:"playable/code/error-codes/LP2000",id:"playable/code/error-codes/LP2000",title:"Asset related errors",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/2000-Assets.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP2000",permalink:"/docs/playable/code/error-codes/LP2000",draft:!1,tags:[],version:"current",sidebarPosition:2e3,frontMatter:{id:"LP2000",title:"Asset related errors",sidebar_label:"2000 - Assets",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","error","LP2000"]},sidebar:"gettingStarted",previous:{title:"1034 - 65k Mesh Vertices Limit",permalink:"/docs/playable/code/error-codes/LP1034"},next:{title:"2001 - Failed To Combine Glyphs",permalink:"/docs/playable/code/error-codes/LP2001"}},l={},c=[{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,o.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"explanation"},"Explanation"),(0,n.yg)("p",null,"This code pertains to general asset related errors, in some cases the source of the error can be unknown."),(0,n.yg)("p",null,"These errors will have limited information but will always be logged with the exception thrown and any other meaningful information available. These errors will likely get their own error code or be applied to an already existing code in the future."),(0,n.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,n.yg)("p",null,"Please first have a read of our section on ",(0,n.yg)("a",{parentName:"p",href:"/docs/playable/setup/export-failures#assets-processing-failed"},"Assets processing failing")," for troubleshooting steps."),(0,n.yg)("p",null,"If you find that an asset that is not needed for your playable scene is causing an issue, you can exclude it from your build. More information on how to do this can be found ",(0,n.yg)("a",{parentName:"p",href:"/docs/playable/optimise-your-builds/excluding-assets"},"here"),"."))}u.isMDXComponent=!0}}]);