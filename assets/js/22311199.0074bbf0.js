"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[96999],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},67380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={id:"LP3007",title:"Custom Events Missing",sidebar_label:"3007 - Custom Events Missing",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","custom","events","usage","missing","exception","warning","error","LP3007"]},s=void 0,i={unversionedId:"playable/code/error-codes/LP3007",id:"playable/code/error-codes/LP3007",title:"Custom Events Missing",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/3007-CustomEventsMissing.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP3007",permalink:"/docs/playable/code/error-codes/LP3007",draft:!1,tags:[],version:"current",sidebarPosition:3007,frontMatter:{id:"LP3007",title:"Custom Events Missing",sidebar_label:"3007 - Custom Events Missing",description:"Explanation & steps to fix.",keywords:["fix","playable","luna","custom","events","usage","missing","exception","warning","error","LP3007"]},sidebar:"gettingStarted",previous:{title:"3006 - Luna API",permalink:"/docs/playable/code/error-codes/LP3006"},next:{title:"3008 - Custom Events Count",permalink:"/docs/playable/code/error-codes/LP3008"}},l={},c=[{value:"Message",id:"message",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"message"},"Message"),(0,o.yg)("p",null,"There are no custom events in the playable, consider adding some for insights in user behaviour."),(0,o.yg)("h2",{id:"explanation"},"Explanation"),(0,o.yg)("p",null,"Custom events is an important feature from Playable Plugin to track players during the playable. This will give you insights on how players behave, and you can adapt according to this data. Example: You have a custom event that triggers in the end of the game, this custom event is: PlayerWon and PlayerLost. According to the data, PlayerLost has 50% higher CTR than PlayerWon. In this case, it might be a good idea to make the playable ad more difficult so more players lose the game, resulting in higher CTR."),(0,o.yg)("p",null,"Please do note, not all ad networks support this feature."),(0,o.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,o.yg)("p",null,'Please add the custom event API for a minimum of 3 times in your playable: Luna.Unity.Analytics.LogEvent("PlayerLost", 0); , more information ',(0,o.yg)("a",{parentName:"p",href:"https://docs.lunalabs.io/docs/playable/playable-setup/analytics/custom-events/#open-custom-events"},"here"),"."))}d.isMDXComponent=!0}}]);