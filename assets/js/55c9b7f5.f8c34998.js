"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[17639],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>b});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=n(58168),r=(n(96540),n(15680));const c={id:"clone-objects-not",title:"Clone objects not sized the same as the original object",sidebar_label:"Clone objects not sized the same as the original object"},a=void 0,s={unversionedId:"playable/common-issues/code/clone-objects-not",id:"playable/common-issues/code/clone-objects-not",title:"Clone objects not sized the same as the original object",description:"This may be occurring due to a bug in our engine.",source:"@site/docs/playable/common-issues/code/clone-objects-not.md",sourceDirName:"playable/common-issues/code",slug:"/playable/common-issues/code/clone-objects-not",permalink:"/docs/playable/common-issues/code/clone-objects-not",draft:!1,tags:[],version:"current",frontMatter:{id:"clone-objects-not",title:"Clone objects not sized the same as the original object",sidebar_label:"Clone objects not sized the same as the original object"},sidebar:"gettingStarted",previous:{title:"Chrome console throws error TypeError LayerMask.$clone is not a function",permalink:"/docs/playable/common-issues/code/chrome-console-throws"},next:{title:"SceneManager.LoadSceneSceneManager.GetActiveScene.buildIndex does not seem to work",permalink:"/docs/playable/common-issues/code/scenemanager-loadscenescenemanager-getactivescene-buildindex-does-not"}},i={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This may be occurring due to a bug in our engine."),(0,r.yg)("p",null,"Possible solution:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Set the size of the clones after they are instantiated.")))}d.isMDXComponent=!0}}]);