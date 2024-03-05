"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[97776],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={id:"textmeshpro-text-in",title:"TextMeshPro Text in WorldSpace gets overlaid on top of WorldSpaceObjects behaving like ScreenSpaceOverlay changing the material does not help",sidebar_label:"TextMeshPro Text in WorldSpace gets overlaid on top of WorldSpaceObjects behaving like ScreenSpaceOverlay changing the material does not help"},i=void 0,l={unversionedId:"playable/common-issues/font/textmeshpro-text-in",id:"playable/common-issues/font/textmeshpro-text-in",title:"TextMeshPro Text in WorldSpace gets overlaid on top of WorldSpaceObjects behaving like ScreenSpaceOverlay changing the material does not help",description:"This might be caused by using the same Font Asset.",source:"@site/docs/playable/common-issues/font/textmeshpro-text-in.md",sourceDirName:"playable/common-issues/font",slug:"/playable/common-issues/font/textmeshpro-text-in",permalink:"/docs/playable/common-issues/font/textmeshpro-text-in",draft:!1,tags:[],version:"current",frontMatter:{id:"textmeshpro-text-in",title:"TextMeshPro Text in WorldSpace gets overlaid on top of WorldSpaceObjects behaving like ScreenSpaceOverlay changing the material does not help",sidebar_label:"TextMeshPro Text in WorldSpace gets overlaid on top of WorldSpaceObjects behaving like ScreenSpaceOverlay changing the material does not help"},sidebar:"gettingStarted",previous:{title:"Arial font gets included in build even though its not being used in the project",permalink:"/docs/playable/common-issues/font/arial-font-gets"},next:{title:"TextMeshPro text is misaligned compared to Unity",permalink:"/docs/playable/common-issues/font/textmeshpro-text-is"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This might be caused by using the same Font Asset."),(0,o.yg)("p",null,"Possible solution:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Duplicate the Font Asset you're using and use the duplicate for the WorldSpace TMP. Having using this duplicate font does not increase the Playable build size.")))}d.isMDXComponent=!0}}]);