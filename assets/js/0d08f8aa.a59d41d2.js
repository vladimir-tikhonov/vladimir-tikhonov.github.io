"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[77003],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>b});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={id:"luna-failed-to",title:"Luna failed to build the project with Error Generic Class on Windows",sidebar_label:"Luna failed to build the project with Error Generic Class on Windows"},i=void 0,l={unversionedId:"playable/common-issues/builds/luna-failed-to",id:"playable/common-issues/builds/luna-failed-to",title:"Luna failed to build the project with Error Generic Class on Windows",description:"It is possible that the issue is caused by variables that violate naming conventions and generate errors.",source:"@site/docs/playable/common-issues/builds/luna-failed-to.md",sourceDirName:"playable/common-issues/builds",slug:"/playable/common-issues/builds/luna-failed-to",permalink:"/docs/playable/common-issues/builds/luna-failed-to",draft:!1,tags:[],version:"current",frontMatter:{id:"luna-failed-to",title:"Luna failed to build the project with Error Generic Class on Windows",sidebar_label:"Luna failed to build the project with Error Generic Class on Windows"},sidebar:"gettingStarted",previous:{title:"Tilemap generating errors when building",permalink:"/docs/playable/common-issues/builds/tilemap-generating-errors"},next:{title:"Luna build throws not a function error in Creative Suite",permalink:"/docs/playable/common-issues/builds/luna-build-throws"}},s={},u=[],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"It is possible that the issue is caused by variables that violate naming conventions and generate errors."),(0,a.yg)("p",null,"For example: variables simply named as ",(0,a.yg)("inlineCode",{parentName:"p"},"a"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"b"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"c")," ... ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"y"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"z")," could cause this error."),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rename the variable to something more meaningful, and try not to match it with any engine reserved keywords (such as ",(0,a.yg)("inlineCode",{parentName:"li"},"handle"),").")))}d.isMDXComponent=!0}}]);