"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[83741],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=o,b=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},70735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const i={id:"leantween-build-errors",title:"LeanTween build errors",sidebar_label:"LeanTween build errors"},a=void 0,l={unversionedId:"playable/common-issues/plugins/leantween-build-errors",id:"playable/common-issues/plugins/leantween-build-errors",title:"LeanTween build errors",description:"The LeanTween plugin fails to build. The reason could be GUIUtility does not contain a definition for RotateAroundPivot. Also, GUIStyle does not contain a definition for textColor, and several GL do not contain a definitions.",source:"@site/docs/playable/common-issues/plugins/leantween-build-errors.md",sourceDirName:"playable/common-issues/plugins",slug:"/playable/common-issues/plugins/leantween-build-errors",permalink:"/docs/playable/common-issues/plugins/leantween-build-errors",draft:!1,tags:[],version:"current",frontMatter:{id:"leantween-build-errors",title:"LeanTween build errors",sidebar_label:"LeanTween build errors"},sidebar:"gettingStarted",previous:{title:"Joystick Pack does not work in Luna",permalink:"/docs/playable/common-issues/plugins/joystick-pack-does"},next:{title:"BOXOPHOBIC skybox does not appear",permalink:"/docs/playable/common-issues/plugins/boxophobic-skybox-does"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:n,...i}=e;return(0,o.yg)(c,(0,r.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The LeanTween plugin fails to build. The reason could be ",(0,o.yg)("strong",{parentName:"p"},"GUIUtility")," does not contain a definition for ",(0,o.yg)("inlineCode",{parentName:"p"},"RotateAroundPivot"),". Also, ",(0,o.yg)("inlineCode",{parentName:"p"},"GUIStyle")," does not contain a definition for ",(0,o.yg)("inlineCode",{parentName:"p"},"textColor"),", and several ",(0,o.yg)("strong",{parentName:"p"},"GL")," do not contain a definitions."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"images-medium",src:t(111).A,width:"763",height:"430"})),(0,o.yg)("p",null,"This is likely due to LeanTween containing certain APIs that are not fully supported by Luna."),(0,o.yg)("p",null,"Possible solution:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Use ",(0,o.yg)("inlineCode",{parentName:"li"},"#if !UNITY_LUNA")," to separate unsupported calls in ",(0,o.yg)("inlineCode",{parentName:"li"},"LeanTween.cs")," from the build.")))}d.isMDXComponent=!0},111:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/lean-tween-errors-16b03aec21fa62ad684860482bf5aebb.png"}}]);