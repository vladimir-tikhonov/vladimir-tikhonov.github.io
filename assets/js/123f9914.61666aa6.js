"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[76956],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var o=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),u=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=t,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(g,a(a({ref:n},c),{},{components:r})):o.createElement(g,a({ref:n},c))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:t,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49976:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(58168),t=(r(96540),r(15680));const i={id:"luna-plugin-window",title:"Luna plugin window shows errors related to Color and DoTween",sidebar_label:"Luna plugin window shows errors related to Color and DoTween"},a=void 0,l={unversionedId:"playable/common-issues/plugins/luna-plugin-window",id:"playable/common-issues/plugins/luna-plugin-window",title:"Luna plugin window shows errors related to Color and DoTween",description:"images-medium",source:"@site/docs/playable/common-issues/plugins/luna-plugin-window.md",sourceDirName:"playable/common-issues/plugins",slug:"/playable/common-issues/plugins/luna-plugin-window",permalink:"/docs/playable/common-issues/plugins/luna-plugin-window",draft:!1,tags:[],version:"current",frontMatter:{id:"luna-plugin-window",title:"Luna plugin window shows errors related to Color and DoTween",sidebar_label:"Luna plugin window shows errors related to Color and DoTween"},sidebar:"gettingStarted",previous:{title:"DOFill and DOFillAmount errors Image does not contain a definition for DOFillAmount Text does not contain a definition for DOFade",permalink:"/docs/playable/common-issues/plugins/dofill-and-dofillamount"},next:{title:"Code diagnostics error with Dreamteck Splines plugin",permalink:"/docs/playable/common-issues/plugins/code-diagnostics-error"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:n,...i}=e;return(0,t.yg)(p,(0,o.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"images-medium",src:r(98894).A,width:"1532",height:"696"})),(0,t.yg)("p",null,"This may be caused by a class or enum within your Unity project which may be named ",(0,t.yg)("strong",{parentName:"p"},"Color"),". This might conflict with the ",(0,t.yg)("inlineCode",{parentName:"p"},"Color")," type of the DoTween library."),(0,t.yg)("p",null,"Possible solution:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},'Change your class / enum name from color to a different name, for example: "GameColor".')))}d.isMDXComponent=!0},98894:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/dotween-color-error-a75df41ec60ca74b43e452c63eee838b.png"}}]);