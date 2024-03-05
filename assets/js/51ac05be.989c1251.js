"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[22691],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,y=u["".concat(c,".").concat(d)]||u[d]||h[d]||n;return r?a.createElement(y,s(s({ref:t},p),{},{components:r})):a.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(58168),i=(r(96540),r(15680));const n={id:"character-is-jittering",title:"Character is jittering  stuttering  shaking",sidebar_label:"Character is jittering  stuttering  shaking"},s=void 0,o={unversionedId:"playable/common-issues/physics/character-is-jittering",id:"playable/common-issues/physics/character-is-jittering",title:"Character is jittering  stuttering  shaking",description:"This is likely due to physics causing penetrating bodies to be pushed too far away from the collider they are intersecting. This could be because character movement is being done in Update() which executes quickly, but physics is done in a fixed time step loop.",source:"@site/docs/playable/common-issues/physics/character-is-jittering.md",sourceDirName:"playable/common-issues/physics",slug:"/playable/common-issues/physics/character-is-jittering",permalink:"/docs/playable/common-issues/physics/character-is-jittering",draft:!1,tags:[],version:"current",frontMatter:{id:"character-is-jittering",title:"Character is jittering  stuttering  shaking",sidebar_label:"Character is jittering  stuttering  shaking"},sidebar:"gettingStarted",previous:{title:"Camera following is jittery",permalink:"/docs/playable/common-issues/physics/camera-following-is"},next:{title:"Character jitters  shakes when using character joint and animation",permalink:"/docs/playable/common-issues/physics/character-jitters"}},c={},l=[],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This is likely due to physics causing penetrating bodies to be pushed too far away from the collider they are intersecting. This could be because character movement is being done in ",(0,i.yg)("inlineCode",{parentName:"p"},"Update()")," which executes quickly, but physics is done in a fixed time step loop."),(0,i.yg)("p",null,"For example, in ",(0,i.yg)("inlineCode",{parentName:"p"},"Update()")," the character is made to walk forward 1 unit. The physics engine calculates that this puts the character through the wall and needs to be pushed back. However because the physics loop is slower, it pushes the character back further in the world to adjust for the extra time length, and therefore appears to jitter. This can also be the case for objects affected by gravity, like a character just standing on a floor with a collider."),(0,i.yg)("p",null,"Possible solutions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For any character movement, try replacing any ",(0,i.yg)("inlineCode",{parentName:"li"},"Update()")," calls to ",(0,i.yg)("inlineCode",{parentName:"li"},"FixedUpdate()"))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-small",src:r(31290).A,width:"588",height:"556"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Another solution consists of making the camera the child of the character. (You may need to move any rotation code to a new script and attach that to a child of the camera to avoid rotating the camera along with the character, unless you intend to adopt this behaviour).")))}h.isMDXComponent=!0},31290:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/physics-jitter-fixed-4910e30aa153faab747b714fa86d8b74.png"}}]);