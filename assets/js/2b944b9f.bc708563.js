"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[26007],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,f=u["".concat(i,".").concat(y)]||u[y]||d[y]||a;return r?o.createElement(f,p(p({ref:t},c),{},{components:r})):o.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(58168),n=(r(96540),r(15680));const a={id:"LP3010",title:"Base type not supported",sidebar_label:"3010 - Base type not supported",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","base","type","types","support","supported","exception","usage","warning","error","LP3010"]},p=void 0,s={unversionedId:"playable/code/error-codes/LP3010",id:"playable/code/error-codes/LP3010",title:"Base type not supported",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/3010-BaseTypeNotSupported.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP3010",permalink:"/docs/playable/code/error-codes/LP3010",draft:!1,tags:[],version:"current",sidebarPosition:3010,frontMatter:{id:"LP3010",title:"Base type not supported",sidebar_label:"3010 - Base type not supported",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","base","type","types","support","supported","exception","usage","warning","error","LP3010"]},sidebar:"gettingStarted",previous:{title:"3009 - API not supported",permalink:"/docs/playable/code/error-codes/LP3009"},next:{title:"3011 - No LunaPlaygroundField found",permalink:"/docs/playable/code/error-codes/LP3011"}},i={},l=[{value:"Message",id:"message",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,o.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"message"},"Message"),(0,n.yg)("p",null,"You are using an unsupported base type which is not compatible with ad networks."),(0,n.yg)("h2",{id:"explanation"},"Explanation"),(0,n.yg)("p",null,"Not all Unity features are supported on ad networks, thus Playable Plugin cannot support this feature. A common unsupported base type is Editor. An ad network would never be able to support scripts which derive from Editor."),(0,n.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,n.yg)("p",null,"Please either remove the script, or force-exclude the script in Playable Plugin:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-small",src:r(65799).A,width:"999",height:"746"})))}d.isMDXComponent=!0},65799:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/tmp-LP3010-excludeScript-8a6cdf9c0ce2033156259eba760e0326.png"}}]);