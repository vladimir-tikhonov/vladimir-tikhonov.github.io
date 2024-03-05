"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[89829],{15680:(e,t,r)=>{r.d(t,{xA:()=>h,yg:()=>p});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,p=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return r?n.createElement(p,o(o({ref:t},h),{},{components:r})):n.createElement(p,o({ref:t},h))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},31361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const i={id:"character-jitters",title:"Character jitters  shakes when using character joint and animation",sidebar_label:"Character jitters  shakes when using character joint and animation"},o=void 0,c={unversionedId:"playable/common-issues/physics/character-jitters",id:"playable/common-issues/physics/character-jitters",title:"Character jitters  shakes when using character joint and animation",description:"The problem is likely caused by the Rigidbodies on the bones of characters. The rigidbody velocity is applied after the animation.",source:"@site/docs/playable/common-issues/physics/character-jitters.md",sourceDirName:"playable/common-issues/physics",slug:"/playable/common-issues/physics/character-jitters",permalink:"/docs/playable/common-issues/physics/character-jitters",draft:!1,tags:[],version:"current",frontMatter:{id:"character-jitters",title:"Character jitters  shakes when using character joint and animation",sidebar_label:"Character jitters  shakes when using character joint and animation"},sidebar:"gettingStarted",previous:{title:"Character is jittering  stuttering  shaking",permalink:"/docs/playable/common-issues/physics/character-is-jittering"},next:{title:"Chrome console shows error Error preallocated buffer overflow memory leak",permalink:"/docs/playable/common-issues/physics/chrome-console-shows"}},s={},l=[],h={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,n.A)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The problem is likely caused by the Rigidbodies on the bones of characters. The rigidbody velocity is applied after the animation."),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set all rigidbodies to use ",(0,a.yg)("inlineCode",{parentName:"li"},"isKinematic")," on that model. If you need it to act as a ragdoll, when it gets hit you can disable the ",(0,a.yg)("inlineCode",{parentName:"li"},"isKinematic")," when the collision happens.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-small",src:r(21459).A,width:"334",height:"207"})))}u.isMDXComponent=!0},21459:(e,t,r)=>{r.d(t,{A:()=>n});const n="data:image/png;base64,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"}}]);