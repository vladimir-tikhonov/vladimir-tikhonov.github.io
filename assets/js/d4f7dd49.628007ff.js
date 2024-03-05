"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[6411],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={id:"applovin",title:"Applovin",sidebar_label:"Applovin",description:"How to test your build for Applovin",keywords:["applovin","playable","luna"]},i=void 0,l={unversionedId:"playable/ad-networks/applovin",id:"playable/ad-networks/applovin",title:"Applovin",description:"How to test your build for Applovin",source:"@site/docs/playable/ad-networks/applovin.md",sourceDirName:"playable/ad-networks",slug:"/playable/ad-networks/applovin",permalink:"/docs/playable/ad-networks/applovin",draft:!1,tags:[],version:"current",frontMatter:{id:"applovin",title:"Applovin",sidebar_label:"Applovin",description:"How to test your build for Applovin",keywords:["applovin","playable","luna"]},sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/docs/playable/ad-networks/overview"},next:{title:"Facebook",permalink:"/docs/playable/ad-networks/facebook"}},p={},s=[{value:"Network Specifications",id:"network-specifications",level:2},{value:"Testing",id:"testing",level:2}],c={toc:s},u="wrapper";function y(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,a.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you wish to use external requests like analytics with your Applovin build, you will need to contact Applovin prior to uploading requesting permission to do so. Otherwise the playable will be rejected.")),(0,r.yg)("h2",{id:"network-specifications"},"Network Specifications"),(0,r.yg)("admonition",{title:"Specifications",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Format"),": Single html file (",(0,r.yg)("em",{parentName:"li"},"index.html"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Size"),": Up to 5MB"))),(0,r.yg)("h2",{id:"testing"},"Testing"),(0,r.yg)("p",null,"In order to test your build for Applovin, please follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download an Applovin build from you Creative Suite account."),(0,r.yg)("li",{parentName:"ol"},"Navigate to the ",(0,r.yg)("a",{parentName:"li",href:"https://p.applov.in/playablePreview?create=1"},"Applovin playable preview tool"),"."),(0,r.yg)("li",{parentName:"ol"},"Drag in your index.html file or find it manually.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-medium",src:n(69818).A,width:"1093",height:"1055"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"If the playable is incorrectly formatted or over the file size limit, you will an error such as the following:")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-medium",src:n(68132).A,width:"1093",height:"1055"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"You may now test the playable in the preview, and change the orientation."),(0,r.yg)("li",{parentName:"ol"},"The preview tool will show a message when a successful app store click has taken place - please ensure this happens at all expected locations.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-medium",src:n(13196).A,width:"1093",height:"1055"})))}y.isMDXComponent=!0},13196:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/applovin-click-10a34a1bafd4685f30223defa8e04f1e.png"},68132:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/applovin-upload-error-860bca37aa2bfc7bbb87a2875c801d6c.png"},69818:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/applovin-upload-playable-16e123dfb6f35f3e51aeb9ef39ef37a4.png"}}]);