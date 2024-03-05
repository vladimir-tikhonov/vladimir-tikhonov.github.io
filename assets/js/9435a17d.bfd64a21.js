"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[41115],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={id:"chinese-characters-are",title:"Chinese characters are not rendered in Luna build",sidebar_label:"Chinese characters are not rendered in Luna build"},i=void 0,s={unversionedId:"playable/common-issues/font/chinese-characters-are",id:"playable/common-issues/font/chinese-characters-are",title:"Chinese characters are not rendered in Luna build",description:"This is likely due to the font not supporting the Chinese language, even if it can render Chinese characters in the Unity Editor (e.g. Arial).",source:"@site/docs/playable/common-issues/font/chinese-characters-are.md",sourceDirName:"playable/common-issues/font",slug:"/playable/common-issues/font/chinese-characters-are",permalink:"/docs/playable/common-issues/font/chinese-characters-are",draft:!1,tags:[],version:"current",frontMatter:{id:"chinese-characters-are",title:"Chinese characters are not rendered in Luna build",sidebar_label:"Chinese characters are not rendered in Luna build"},sidebar:"gettingStarted",previous:{title:"TextMeshPro text does not get rendered when placed under any Canvas",permalink:"/docs/playable/common-issues/font/textmeshpro-text-does"},next:{title:"Font not getting rendered in Luna build when all required alphabets are included",permalink:"/docs/playable/common-issues/font/font-not-getting"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This is likely due to the font not supporting the Chinese language, even if it can render Chinese characters in the Unity Editor (e.g. Arial)."),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Verify that the font supports the Chinese language before exporting.")))}d.isMDXComponent=!0}}]);