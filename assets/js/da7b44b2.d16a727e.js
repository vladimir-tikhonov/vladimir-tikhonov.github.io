"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[17673],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),m=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=a,y=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return t?i.createElement(y,o(o({ref:n},c),{},{components:t})):i.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=t(58168),a=(t(96540),t(15680));const r={id:"animations-in-luna",title:"Animations in Luna do not get interrupted immediately  Animator.SetBool isnt working correctly",sidebar_label:"Animations in Luna do not get interrupted immediately  Animator.SetBool isnt working correctly"},o=void 0,l={unversionedId:"playable/common-issues/animation/animations-in-luna",id:"playable/common-issues/animation/animations-in-luna",title:"Animations in Luna do not get interrupted immediately  Animator.SetBool isnt working correctly",description:"For example, in unity, when a character is shot, the idle animation gets interrupted to play the shot animation, which is the intended purpose. In Luna the animation does not interrupt and instead it carries on until it is finished.",source:"@site/docs/playable/common-issues/animation/animations-in-luna.md",sourceDirName:"playable/common-issues/animation",slug:"/playable/common-issues/animation/animations-in-luna",permalink:"/docs/playable/common-issues/animation/animations-in-luna",draft:!1,tags:[],version:"current",frontMatter:{id:"animations-in-luna",title:"Animations in Luna do not get interrupted immediately  Animator.SetBool isnt working correctly",sidebar_label:"Animations in Luna do not get interrupted immediately  Animator.SetBool isnt working correctly"},sidebar:"gettingStarted",previous:{title:"Animations not same height after using the Animation Baker plugin",permalink:"/docs/playable/common-issues/animation/animations-not-same"},next:{title:"Animation Events not triggering on Legacy Animations",permalink:"/docs/playable/common-issues/animation/animation-events-not"}},s={},m=[],c={toc:m},u="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,i.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"For example, in unity, when a character is shot, the idle animation gets interrupted to play the shot animation, which is the intended purpose. In Luna the animation does not interrupt and instead it carries on until it is finished."),(0,a.yg)("p",null,"This likely due to a known bug within the Luna Animator component."),(0,a.yg)("p",null,"Possible solution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Instead of calling: ",(0,a.yg)("inlineCode",{parentName:"p"},"enemyAnimator.SetBool(IsHit, true);")),(0,a.yg)("p",{parentName:"li"},"Instead try: ",(0,a.yg)("inlineCode",{parentName:"p"},'enemyAnimator.Play("hit");')))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-large",src:t(53964).A,width:"1291",height:"386"})))}p.isMDXComponent=!0},53964:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/anim-interrupt-195eb9305c8b5b95b433dc8f42a946e9.png"}}]);