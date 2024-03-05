"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[3670],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(y,r(r({ref:n},p),{},{components:t})):o.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(58168),i=(t(96540),t(15680));const a={id:"animation-does-not",title:"Animation does not loop",sidebar_label:"Animation does not loop"},r=void 0,s={unversionedId:"playable/common-issues/animation/animation-does-not",id:"playable/common-issues/animation/animation-does-not",title:"Animation does not loop",description:"This is likely happening due to animation looping not being supported when using the Animation component.",source:"@site/docs/playable/common-issues/animation/animation-does-not.md",sourceDirName:"playable/common-issues/animation",slug:"/playable/common-issues/animation/animation-does-not",permalink:"/docs/playable/common-issues/animation/animation-does-not",draft:!1,tags:[],version:"current",frontMatter:{id:"animation-does-not",title:"Animation does not loop",sidebar_label:"Animation does not loop"},sidebar:"gettingStarted",previous:{title:"Vungle rejection for The asset is failing as it triggers a double click",permalink:"/docs/playable/common-issues/ad-networks/vungle/vungle-rejection-for"},next:{title:"Character stuck in Tpose",permalink:"/docs/playable/common-issues/animation/character-stuck-in"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:n,...a}=e;return(0,i.yg)(m,(0,o.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This is likely happening due to animation looping not being supported when using the Animation component."),(0,i.yg)("p",null,"Possible solution:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use the Animator component instead and place the animation inside the Mecanim system. From there the Loop Time box can be checked to make the animation loop.",(0,i.yg)("br",{parentName:"li"}),"From there the Loop Time box can be checked to make the animation loop. (Shown below)")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-small",src:t(32931).A,width:"310",height:"298"})))}u.isMDXComponent=!0},32931:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/anim-loop-35748bc94a966c54e28860850785aa6e.png"}}]);