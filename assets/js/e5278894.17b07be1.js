"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[61591],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={id:"tmp-text-mesh",title:"TMP Text Mesh Pro rendering behind UI Image component  wrong rendering order",sidebar_label:"TMP Text Mesh Pro rendering behind UI Image component  wrong rendering order"},i=void 0,s={unversionedId:"playable/common-issues/ui/tmp-text-mesh",id:"playable/common-issues/ui/tmp-text-mesh",title:"TMP Text Mesh Pro rendering behind UI Image component  wrong rendering order",description:"This is possibly due to a bug in Luna where the game object hierarchy order isn\u2019t being taken into account when rendering.",source:"@site/docs/playable/common-issues/ui/tmp-text-mesh.md",sourceDirName:"playable/common-issues/ui",slug:"/playable/common-issues/ui/tmp-text-mesh",permalink:"/docs/playable/common-issues/ui/tmp-text-mesh",draft:!1,tags:[],version:"current",frontMatter:{id:"tmp-text-mesh",title:"TMP Text Mesh Pro rendering behind UI Image component  wrong rendering order",sidebar_label:"TMP Text Mesh Pro rendering behind UI Image component  wrong rendering order"},sidebar:"gettingStarted",previous:{title:"Outline on UI text component not working",permalink:"/docs/playable/common-issues/ui/outline-on-ui"},next:{title:"TextMeshPro font generates different errors in the console",permalink:"/docs/playable/common-issues/ui/textmeshpro-font-generates"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This is possibly due to a bug in Luna where the game object hierarchy order isn\u2019t being taken into account when rendering."),(0,o.yg)("p",null,"Possible solution:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Apply ZWrite On and ZTest LEQual in both the TMP and Image component shaders."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"images-large",src:n(27332).A,width:"967",height:"351"})))),(0,o.yg)("p",null,"If you need the adjust one of the Unity built-in shaders, they can be downloaded here and then added to the project.\nNext, move the TMP text slightly more towards the camera so that it renders in front of the background."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"images-large",src:n(72906).A,width:"924",height:"707"})),(0,o.yg)("p",null,"Full example:"),(0,o.yg)("p",null,"![images-large]","(/assets/common-issues/fix-tmp-example.pn"))}u.isMDXComponent=!0},72906:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/move-tmp-c80a38de7cd85cabf97253f3d79ab173.png"},27332:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tmp-comp-settings-241d66372a231277ee0aad45903ba8a4.png"}}]);