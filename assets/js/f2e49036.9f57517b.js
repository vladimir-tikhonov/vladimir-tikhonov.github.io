"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[14936],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>b});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(58168),i=(n(96540),n(15680));const o={id:"spine-textures-with",title:"Spine textures with Premultiplied Alpha break with pngquant compression",sidebar_label:"Spine textures with Premultiplied Alpha break with pngquant compression"},s=void 0,a={unversionedId:"playable/common-issues/plugins/spine-textures-with",id:"playable/common-issues/plugins/spine-textures-with",title:"Spine textures with Premultiplied Alpha break with pngquant compression",description:"Possible solution:",source:"@site/docs/playable/common-issues/plugins/spine-textures-with.md",sourceDirName:"playable/common-issues/plugins",slug:"/playable/common-issues/plugins/spine-textures-with",permalink:"/docs/playable/common-issues/plugins/spine-textures-with",draft:!1,tags:[],version:"current",frontMatter:{id:"spine-textures-with",title:"Spine textures with Premultiplied Alpha break with pngquant compression",sidebar_label:"Spine textures with Premultiplied Alpha break with pngquant compression"},sidebar:"gettingStarted",previous:{title:"Spine texture shows dark blobs after enabling the Straight Alpha Texture",permalink:"/docs/playable/common-issues/plugins/spine-texture-shows"},next:{title:"Spine skeleton data file causing Path error",permalink:"/docs/playable/common-issues/plugins/spine-skeleton-data"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Possible solution:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use ",(0,i.yg)("inlineCode",{parentName:"li"},"pngcrush")," compression instead.")))}m.isMDXComponent=!0}}]);