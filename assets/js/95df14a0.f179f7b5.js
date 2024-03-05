"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[48807],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,g=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(58168),i=(r(96540),r(15680));const a={id:"spine-texture-shows",title:"Spine texture shows dark blobs after enabling the Straight Alpha Texture",sidebar_label:"Spine texture shows dark blobs after enabling the Straight Alpha Texture"},s=void 0,o={unversionedId:"playable/common-issues/plugins/spine-texture-shows",id:"playable/common-issues/plugins/spine-texture-shows",title:"Spine texture shows dark blobs after enabling the Straight Alpha Texture",description:"This could be caused by a Spine texture being exported as Premultiplied Alpha which is not compatible with the Straight Alpha Texture option in the material setting.",source:"@site/docs/playable/common-issues/plugins/spine-texture-shows.md",sourceDirName:"playable/common-issues/plugins",slug:"/playable/common-issues/plugins/spine-texture-shows",permalink:"/docs/playable/common-issues/plugins/spine-texture-shows",draft:!1,tags:[],version:"current",frontMatter:{id:"spine-texture-shows",title:"Spine texture shows dark blobs after enabling the Straight Alpha Texture",sidebar_label:"Spine texture shows dark blobs after enabling the Straight Alpha Texture"},sidebar:"gettingStarted",previous:{title:"The Spine animation performance in build is very poor",permalink:"/docs/playable/common-issues/plugins/the-spine-animation"},next:{title:"Spine textures with Premultiplied Alpha break with pngquant compression",permalink:"/docs/playable/common-issues/plugins/spine-textures-with"}},l={},p=[],u={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This could be caused by a Spine texture being exported as ",(0,i.yg)("inlineCode",{parentName:"p"},"Premultiplied Alpha")," which is not compatible with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Straight Alpha")," Texture option in the material setting."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-small",src:r(39478).A,width:"1762",height:"802"})),(0,i.yg)("p",null,"Possible solution:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Make sure the Spine texture is exported as ",(0,i.yg)("inlineCode",{parentName:"li"},"Straight Alpha"),", or manually edit the texture to remove the dark blobs.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-large",src:r(37735).A,width:"1718",height:"2192"})))}h.isMDXComponent=!0},37735:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/correct-spine-texture-c840e7fea24754363297438bdd67748e.png"},39478:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/spine-straight-alpha-0e8447bfac83db006b14e7bede80fea7.png"}}]);