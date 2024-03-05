"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[84898],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(58168),r=(n(96540),n(15680));const i={id:"input-is-not",title:"Input is not registering for Facebook builds on the Moloco network",sidebar_label:"Input is not registering for Facebook builds on the Moloco network"},s=void 0,a={unversionedId:"playable/common-issues/input/input-is-not",id:"playable/common-issues/input/input-is-not",title:"Input is not registering for Facebook builds on the Moloco network",description:"If you are using OnClick events, these are known to cause issues on the Moloco network. This is likely due to a missing callback from the browser to our javascript code.",source:"@site/docs/playable/common-issues/input/input-is-not.md",sourceDirName:"playable/common-issues/input",slug:"/playable/common-issues/input/input-is-not",permalink:"/docs/playable/common-issues/input/input-is-not",draft:!1,tags:[],version:"current",frontMatter:{id:"input-is-not",title:"Input is not registering for Facebook builds on the Moloco network",sidebar_label:"Input is not registering for Facebook builds on the Moloco network"},sidebar:"gettingStarted",previous:{title:"In Creative Suite 2 impressions are logged for 1 click",permalink:"/docs/playable/common-issues/input/in-creative-suite"},next:{title:"Dragging input is not registered when the camera is moving",permalink:"/docs/playable/common-issues/input/dragging-input-is"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you are using ",(0,r.yg)("inlineCode",{parentName:"p"},"OnClick")," events, these are known to cause issues on the Moloco network. This is likely due to a missing callback from the browser to our javascript code."),(0,r.yg)("p",null,"Possible solution:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add a script to replace the OnClick functionality, using the button position on screen and detecting any clicks within that area.")))}m.isMDXComponent=!0}}]);