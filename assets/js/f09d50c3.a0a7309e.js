"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[64115],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={id:"mintegral-qa-failure",title:"Mintegral QA Failure",sidebar_label:"Mintegral QA Failure"},l=void 0,o={unversionedId:"playable/common-issues/ad-networks/mintegral/mintegral-qa-failure",id:"playable/common-issues/ad-networks/mintegral/mintegral-qa-failure",title:"Mintegral QA Failure",description:"The issue may be caused by the build loading external JavaScript libraries via network requests, which is not permitted.",source:"@site/docs/playable/common-issues/ad-networks/mintegral/mintegral-qa-failure.md",sourceDirName:"playable/common-issues/ad-networks/mintegral",slug:"/playable/common-issues/ad-networks/mintegral/mintegral-qa-failure",permalink:"/docs/playable/common-issues/ad-networks/mintegral/mintegral-qa-failure",draft:!1,tags:[],version:"current",frontMatter:{id:"mintegral-qa-failure",title:"Mintegral QA Failure",sidebar_label:"Mintegral QA Failure"},sidebar:"gettingStarted",previous:{title:"Mintegral test tool rejects playable because of code exception",permalink:"/docs/playable/common-issues/ad-networks/mintegral/mintegral-test-tool"},next:{title:"Mintegral code exception gets stuck",permalink:"/docs/playable/common-issues/ad-networks/mintegral/mintegral-code-exception"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,n.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The issue may be caused by the build loading external JavaScript libraries via network requests, which is not permitted."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-medium",src:r(36268).A,width:"2044",height:"428"})),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Store external JS libraries locally and include their paths in ",(0,a.yg)("strong",{parentName:"li"},"Luna plugin window"),". On how to do this please see here: ",(0,a.yg)("a",{parentName:"li",href:"/docs/playable/code/external-js-libraries#add-your-external-js-library"},"Including External JS Libraries"),".")))}m.isMDXComponent=!0},36268:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ad-mintegral-qa-fail-eec25524d2b1ac4d4d93f8de8813bf2e.png"}}]);