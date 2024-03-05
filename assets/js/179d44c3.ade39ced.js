"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[25342],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,u=d["".concat(c,".").concat(m)]||d[m]||y[m]||l;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={id:"playables-rejected-by",title:"Playables rejected by Mintegral because of technical errors",sidebar_label:"Playables rejected by Mintegral because of technical errors"},o=void 0,i={unversionedId:"playable/common-issues/ad-networks/mintegral/playables-rejected-by",id:"playable/common-issues/ad-networks/mintegral/playables-rejected-by",title:"Playables rejected by Mintegral because of technical errors",description:"This issue may have to do with the GameEnded() method not being called when the player wins or loses. Mintegral rejects the playable with a Technical Error.",source:"@site/docs/playable/common-issues/ad-networks/mintegral/playables-rejected-by.md",sourceDirName:"playable/common-issues/ad-networks/mintegral",slug:"/playable/common-issues/ad-networks/mintegral/playables-rejected-by",permalink:"/docs/playable/common-issues/ad-networks/mintegral/playables-rejected-by",draft:!1,tags:[],version:"current",frontMatter:{id:"playables-rejected-by",title:"Playables rejected by Mintegral because of technical errors",sidebar_label:"Playables rejected by Mintegral because of technical errors"},sidebar:"gettingStarted",previous:{title:"Mintegral code exception gets stuck",permalink:"/docs/playable/common-issues/ad-networks/mintegral/mintegral-code-exception"},next:{title:"Mintegral test rejection  Game End Call method undetected",permalink:"/docs/playable/common-issues/ad-networks/mintegral/mintegral-test-rejection"}},c={},s=[],p={toc:s},d="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This issue may have to do with the ",(0,a.yg)("inlineCode",{parentName:"p"},"GameEnded()")," method not being called when the player wins or loses. Mintegral rejects the playable with a ",(0,a.yg)("strong",{parentName:"p"},"Technical Error"),"."),(0,a.yg)("p",null,"When the method is missing in case of victory, the following error log may be displayed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"[Technical Error] Rejected for technical error: Game victory also needs to call gameend method. Please make adjustments accordingly.\n")),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add the ",(0,a.yg)("inlineCode",{parentName:"li"},"GameEnded()")," method when the player wins the game. More information about this function can be found ",(0,a.yg)("a",{parentName:"li",href:"/docs/playable/playable-setup/playable-api#game-ended-lifecycle-event"},"here"),".")))}y.isMDXComponent=!0}}]);