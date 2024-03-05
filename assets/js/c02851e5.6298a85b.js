"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[94084],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(58168),o=(n(96540),n(15680));const i={id:"project-rejected-by",title:"Project rejected by Unity Ads for not respecting physical mute button",sidebar_label:"Project rejected by Unity Ads for not respecting physical mute button"},a=void 0,c={unversionedId:"playable/common-issues/ad-networks/unityads/project-rejected-by",id:"playable/common-issues/ad-networks/unityads/project-rejected-by",title:"Project rejected by Unity Ads for not respecting physical mute button",description:"This issue is likely due to Unity not providing a call-back to mute the audio when the mute switch is toggled on / off.",source:"@site/docs/playable/common-issues/ad-networks/unityads/project-rejected-by.md",sourceDirName:"playable/common-issues/ad-networks/unityads",slug:"/playable/common-issues/ad-networks/unityads/project-rejected-by",permalink:"/docs/playable/common-issues/ad-networks/unityads/project-rejected-by",draft:!1,tags:[],version:"current",frontMatter:{id:"project-rejected-by",title:"Project rejected by Unity Ads for not respecting physical mute button",sidebar_label:"Project rejected by Unity Ads for not respecting physical mute button"},sidebar:"gettingStarted",previous:{title:"Unity rejects Static End Card Interactive Templates creative for 1click redirect",permalink:"/docs/playable/common-issues/ad-networks/unityads/unity-rejects-static"},next:{title:"Rendering bug  black screen on Unity ads for iOS 13 and below",permalink:"/docs/playable/common-issues/ad-networks/unityads/rendering-bug"}},s={},l=[],u={toc:l},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This issue is likely due to Unity not providing a call-back to mute the audio when the mute switch is toggled ",(0,o.yg)("inlineCode",{parentName:"p"},"on")," / ",(0,o.yg)("inlineCode",{parentName:"p"},"off"),"."),(0,o.yg)("p",null,"Possible solution:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add ",(0,o.yg)("inlineCode",{parentName:"li"},"Mute"),"/",(0,o.yg)("inlineCode",{parentName:"li"},"Unmute")," functions to ",(0,o.yg)("inlineCode",{parentName:"li"},"Luna.Unity.LifeCycle.OnMute")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"Luna.Unity.LifeCycle.OnUnmute")," events respectively:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cs"},"Luna.Unity.LifeCycle.OnMute += muteGameFunction;\nLuna.Unity.LifeCycle.OnUnmute += unmuteGameFunction;\n")))}y.isMDXComponent=!0}}]);