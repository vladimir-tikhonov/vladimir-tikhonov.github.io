"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[92318],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=i,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),i=(r(96540),r(15680));const o={id:"build-fails-at",title:"Build fails at Unity Export stage with error in luna.log ENOENT no such file or directory",sidebar_label:"Build fails at Unity Export stage with error in luna.log ENOENT no such file or directory"},a=void 0,l={unversionedId:"playable/common-issues/builds/build-fails-at",id:"playable/common-issues/builds/build-fails-at",title:"Build fails at Unity Export stage with error in luna.log ENOENT no such file or directory",description:"This could be occurring due to the use of the Post Processing package.",source:"@site/docs/playable/common-issues/builds/build-fails-at.md",sourceDirName:"playable/common-issues/builds",slug:"/playable/common-issues/builds/build-fails-at",permalink:"/docs/playable/common-issues/builds/build-fails-at",draft:!1,tags:[],version:"current",frontMatter:{id:"build-fails-at",title:"Build fails at Unity Export stage with error in luna.log ENOENT no such file or directory",sidebar_label:"Build fails at Unity Export stage with error in luna.log ENOENT no such file or directory"},sidebar:"gettingStarted",previous:{title:"The scene is missing in Luna build but it is set correctly",permalink:"/docs/playable/common-issues/builds/the-scene-is"},next:{title:"Black Screen & Errors in Unity & Browser  System.MissingMethodException Method not found UnityEngine.Cubemap UnityEngine.RenderSettings.get_customReflection | System.IO.IOException Sharing violation on path",permalink:"/docs/playable/common-issues/builds/black-screen-&"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This could be occurring due to the use of the ",(0,i.yg)("em",{parentName:"p"},"Post Processing")," package."),(0,i.yg)("p",null,"Possible solution:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Remove the Post Processing package and comment out any code that depends on the package, and then try building again.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-medium",src:r(37955).A,width:"798",height:"801"})))}d.isMDXComponent=!0},37955:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/build-remove-pp-ee61b428e00299826a2dcd3be46df1a9.png"}}]);