"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[2913],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=s,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},30865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),s=(n(96540),n(15680));const o={id:"2d-physics-components",title:"2D physics components and their related methods are not working as expected",sidebar_label:"2D physics components and their related methods are not working as expected",keywords:["playable","luna","issue","issues","solution","fix"]},a=void 0,i={unversionedId:"playable/common-issues/physics/2d-physics-components",id:"playable/common-issues/physics/2d-physics-components",title:"2D physics components and their related methods are not working as expected",description:"This issue has been fixed in Playable Plugin 5.0.0+",source:"@site/docs/playable/common-issues/physics/2d-physics-components.md",sourceDirName:"playable/common-issues/physics",slug:"/playable/common-issues/physics/2d-physics-components",permalink:"/docs/playable/common-issues/physics/2d-physics-components",draft:!1,tags:[],version:"current",frontMatter:{id:"2d-physics-components",title:"2D physics components and their related methods are not working as expected",sidebar_label:"2D physics components and their related methods are not working as expected",keywords:["playable","luna","issue","issues","solution","fix"]},sidebar:"gettingStarted",previous:{title:"Physics ragdolls fly off screen  disappears  glitches",permalink:"/docs/playable/common-issues/physics/physics-ragdolls-fly"},next:{title:"Cant upload to Creative Suite the upload shows as completed but the playable doesnt appear on the list",permalink:"/docs/playable/common-issues/playground/cant-upload-to"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("admonition",{title:"Fixed Version",type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"This issue has been fixed in Playable Plugin 5.0.0+")),(0,s.yg)("p",null,"This could be related to 2D physics not being fully supported by Luna."),(0,s.yg)("p",null,"Possible solution:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Use 3D physics counterparts for components and method call")))}d.isMDXComponent=!0}}]);