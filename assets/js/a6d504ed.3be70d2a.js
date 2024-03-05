"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[10548],{15680:(e,o,t)=>{t.d(o,{xA:()=>u,yg:()=>b});var r=t(96540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),s=function(e){var o=r.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=s(e.components);return r.createElement(d.Provider,{value:o},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},y=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),y=n,b=p["".concat(d,".").concat(y)]||p[y]||c[y]||a;return t?r.createElement(b,i(i({ref:o},u),{},{components:t})):r.createElement(b,i({ref:o},u))}));function b(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},78847:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(58168),n=(t(96540),t(15680));const a={id:"video-audio",title:"Enabling Video Audio",sidebar_label:"Enabling Video Audio",description:"How to get around a browser feature that stops audio in your playable's video from being played.",keywords:["video","audio","browser","playable","luna"]},i=void 0,l={unversionedId:"playable/code/luna-in-browser/video-audio",id:"playable/code/luna-in-browser/video-audio",title:"Enabling Video Audio",description:"How to get around a browser feature that stops audio in your playable's video from being played.",source:"@site/docs/playable/code/luna-in-browser/video-audio.md",sourceDirName:"playable/code/luna-in-browser",slug:"/playable/code/luna-in-browser/video-audio",permalink:"/docs/playable/code/luna-in-browser/video-audio",draft:!1,tags:[],version:"current",frontMatter:{id:"video-audio",title:"Enabling Video Audio",sidebar_label:"Enabling Video Audio",description:"How to get around a browser feature that stops audio in your playable's video from being played.",keywords:["video","audio","browser","playable","luna"]},sidebar:"gettingStarted",previous:{title:"Dev Environment",permalink:"/docs/playable/code/luna-in-browser/dev-environment"},next:{title:"SpectorJS",permalink:"/docs/playable/code/luna-in-browser/spector-js"}},d={},s=[{value:"How to workaround this via code",id:"how-to-workaround-this-via-code",level:2}],u={toc:s},p="wrapper";function c(e){let{components:o,...t}=e;return(0,n.yg)(p,(0,r.A)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"If you have found that a video in your playable is not producing audio when testing it in the browser, this will likely be due to a browser feature which stops audio from playing randomly without the user interacting."),(0,n.yg)("p",null,"For video audio to be heard, ",(0,n.yg)("strong",{parentName:"p"},"the screen needs to be tapped when the video is first played"),", or at some point when the video is playing."),(0,n.yg)("h2",{id:"how-to-workaround-this-via-code"},"How to workaround this via code"),(0,n.yg)("p",null,"If your video needs to be played when the user isn't tapping, you can instead ",(0,n.yg)("inlineCode",{parentName:"p"},"Play()")," the video at some point when user does tap the screen, perhaps when the playable first starts, and then call ",(0,n.yg)("inlineCode",{parentName:"p"},"Pause()")," immediately after."),(0,n.yg)("p",null,"Then once the video is ready to play, you can resume by calling ",(0,n.yg)("inlineCode",{parentName:"p"},"Play()")," again. The video component game object does not need to be active for this to work"))}c.isMDXComponent=!0}}]);