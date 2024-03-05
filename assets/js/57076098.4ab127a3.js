"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[97813],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>d});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||c;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95322:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(58168),a=(t(96540),t(15680));const c={id:"the-screen-flickers",title:"The screen flickers when a particular character appears  a font character does not appear correctly.",sidebar_label:"The screen flickers when a particular character appears  a font character does not appear correctly."},o=void 0,s={unversionedId:"playable/common-issues/font/the-screen-flickers",id:"playable/common-issues/font/the-screen-flickers",title:"The screen flickers when a particular character appears  a font character does not appear correctly.",description:"images-small",source:"@site/docs/playable/common-issues/font/the-screen-flickers.md",sourceDirName:"playable/common-issues/font",slug:"/playable/common-issues/font/the-screen-flickers",permalink:"/docs/playable/common-issues/font/the-screen-flickers",draft:!1,tags:[],version:"current",frontMatter:{id:"the-screen-flickers",title:"The screen flickers when a particular character appears  a font character does not appear correctly.",sidebar_label:"The screen flickers when a particular character appears  a font character does not appear correctly."},sidebar:"gettingStarted",previous:{title:"TMP text is blurry in Luna build",permalink:"/docs/playable/common-issues/font/tmp-text-is"},next:{title:"Facebook does not accept an ad due to no clicks",permalink:"/docs/playable/common-issues/input/facebook-does-not"}},l={},i=[],p={toc:i},u="wrapper";function f(e){let{components:r,...c}=e;return(0,a.yg)(u,(0,n.A)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-small",src:t(64068).A,width:"493",height:"155"})),(0,a.yg)("p",null,"This can happen when a character is missing from the TMP font texture atlas. Luna will switch the font on the missing character which causes the screen to flicker momentarily."),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Check the TMP font settings and add the missing character.")),(0,a.yg)("p",null,"![images-small]","(/assets/common-issues/add-to-atlas.pn"))}f.isMDXComponent=!0},64068:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/character-flickers-b22ab28501508adbd0ddf41e8c7cf21b.png"}}]);