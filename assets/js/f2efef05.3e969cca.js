"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[8650],{15680:(e,o,n)=>{n.d(o,{xA:()=>p,yg:()=>y});var t=n(96540);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function i(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},p=function(e){var o=c(e.components);return t.createElement(l.Provider,{value:o},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||b[d]||s;return n?t.createElement(y,a(a({ref:o},p),{},{components:n})):t.createElement(y,a({ref:o},p))}));function y(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34467:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(58168),r=(n(96540),n(15680));const s={id:"boxophobic-skybox-does",title:"BOXOPHOBIC skybox does not appear",sidebar_label:"BOXOPHOBIC skybox does not appear"},a=void 0,i={unversionedId:"playable/common-issues/plugins/boxophobic-skybox-does",id:"playable/common-issues/plugins/boxophobic-skybox-does",title:"BOXOPHOBIC skybox does not appear",description:"This could be caused by using the BOXOPHOBIC skybox package 1.8.0. This version changed how the skybox gets rendered and it uses custom shaders that cannot be identified by Luna.",source:"@site/docs/playable/common-issues/plugins/boxophobic-skybox-does.md",sourceDirName:"playable/common-issues/plugins",slug:"/playable/common-issues/plugins/boxophobic-skybox-does",permalink:"/docs/playable/common-issues/plugins/boxophobic-skybox-does",draft:!1,tags:[],version:"current",frontMatter:{id:"boxophobic-skybox-does",title:"BOXOPHOBIC skybox does not appear",sidebar_label:"BOXOPHOBIC skybox does not appear"},sidebar:"gettingStarted",previous:{title:"LeanTween build errors",permalink:"/docs/playable/common-issues/plugins/leantween-build-errors"},next:{title:"Cinemachine is not working properly with Cinemachine3rdPersonFollow",permalink:"/docs/playable/common-issues/plugins/cinemachine-is-not"}},l={},c=[],p={toc:c},u="wrapper";function b(e){let{components:o,...n}=e;return(0,r.yg)(u,(0,t.A)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This could be caused by using the BOXOPHOBIC skybox package 1.8.0. This version changed how the skybox gets rendered and it uses custom shaders that cannot be identified by Luna."),(0,r.yg)("p",null,"Possible solution:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Revert to the previous package versions or use an alternative shader.")))}b.isMDXComponent=!0}}]);