"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[53901],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(y,p(p({ref:t},c),{},{components:r})):o.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(58168),n=(r(96540),r(15680));const a={id:"LP3009",title:"API not supported",sidebar_label:"3009 - API not supported",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","api","support","supported","unsupported","exception","usage","warning","error","LP3009"]},p=void 0,i={unversionedId:"playable/code/error-codes/LP3009",id:"playable/code/error-codes/LP3009",title:"API not supported",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/3009-APINotSupported.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP3009",permalink:"/docs/playable/code/error-codes/LP3009",draft:!1,tags:[],version:"current",sidebarPosition:3009,frontMatter:{id:"LP3009",title:"API not supported",sidebar_label:"3009 - API not supported",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","api","support","supported","unsupported","exception","usage","warning","error","LP3009"]},sidebar:"gettingStarted",previous:{title:"3008 - Custom Events Count",permalink:"/docs/playable/code/error-codes/LP3008"},next:{title:"3010 - Base type not supported",permalink:"/docs/playable/code/error-codes/LP3010"}},l={},s=[{value:"Message",id:"message",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,o.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"message"},"Message"),(0,n.yg)("p",null,"You are using a function/component which are currently not supported in the Playable Plugin."),(0,n.yg)("h2",{id:"explanation"},"Explanation"),(0,n.yg)("p",null,"Some Unity APIs are not supported in Luna, either because of a known bug or because of limitations of ad networks."),(0,n.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,n.yg)("p",null,"Please remove the line of code, usually there is a workaround to be found. Please contact your Technical Solutions Engineer for support on this."))}d.isMDXComponent=!0}}]);