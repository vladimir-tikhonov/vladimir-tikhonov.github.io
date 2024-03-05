"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[79030],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={id:"luna-build-does",title:"Luna build does not display Japanese characters",sidebar_label:"Luna build does not display Japanese characters"},s=void 0,l={unversionedId:"playable/common-issues/font/luna-build-does",id:"playable/common-issues/font/luna-build-does",title:"Luna build does not display Japanese characters",description:"Users could encounter this issue when necessary Japanese characters are not included in the Default Font settings.",source:"@site/docs/playable/common-issues/font/luna-build-does.md",sourceDirName:"playable/common-issues/font",slug:"/playable/common-issues/font/luna-build-does",permalink:"/docs/playable/common-issues/font/luna-build-does",draft:!1,tags:[],version:"current",frontMatter:{id:"luna-build-does",title:"Luna build does not display Japanese characters",sidebar_label:"Luna build does not display Japanese characters"},sidebar:"gettingStarted",previous:{title:"TextMeshs alignment get method is not supported by Luna",permalink:"/docs/playable/common-issues/font/textmeshs-alignment-get"},next:{title:"The method FontEngine.LoadFontFaceFont Int32 is not implemented error in Luna",permalink:"/docs/playable/common-issues/font/the-method-fontengine-loadfontfacefont"}},i={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Users could encounter this issue when necessary Japanese characters are not included in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Default Font settings"),"."),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Include all necessary Japanese characters in the Luna UI under ",(0,a.yg)("em",{parentName:"li"},"Assets \u2192 Fonts"),". Besides, make sure the source ",(0,a.yg)("em",{parentName:"li"},"Font file")," contains the relevant characters.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-medium",src:t(49660).A,width:"687",height:"141"})))}d.isMDXComponent=!0},49660:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/font-japanese-chars-46bac922b6d5bf5855482cffe4e99fc3.png"}}]);