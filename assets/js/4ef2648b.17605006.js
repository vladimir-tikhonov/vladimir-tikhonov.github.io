"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[68746],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||l;return t?n.createElement(m,o(o({ref:a},p),{},{components:t})):n.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66471:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));const l={id:"playable-fails-ad",title:"Playable fails ad network validation",sidebar_label:"Playable fails ad network validation"},o=void 0,i={unversionedId:"playable/common-issues/ad-networks/ad-general/playable-fails-ad",id:"playable/common-issues/ad-networks/ad-general/playable-fails-ad",title:"Playable fails ad network validation",description:"This issue consists in a playable which failed ad network validation with error Upload failed The names of the html, folder, and the zip file need to be the same. This could occurs on all add networks; TikTok, Mintegral, Unity, Ironsource etc.",source:"@site/docs/playable/common-issues/ad-networks/ad-general/playable-fails-ad.md",sourceDirName:"playable/common-issues/ad-networks/ad-general",slug:"/playable/common-issues/ad-networks/ad-general/playable-fails-ad",permalink:"/docs/playable/common-issues/ad-networks/ad-general/playable-fails-ad",draft:!1,tags:[],version:"current",frontMatter:{id:"playable-fails-ad",title:"Playable fails ad network validation",sidebar_label:"Playable fails ad network validation"},sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/docs/playable/common-issues/overview"},next:{title:"Exported builds failing without errors stuck on Preloader screen or failing with TypeError",permalink:"/docs/playable/common-issues/ad-networks/ad-general/exported-builds-failing"}},s={},d=[],p={toc:d},c="wrapper";function u(e){let{components:a,...l}=e;return(0,r.yg)(c,(0,n.A)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This issue consists in a playable which failed ad network validation with error ",(0,r.yg)("inlineCode",{parentName:"p"},"Upload failed: No main html was found")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Upload Failed: The names of the html, folder, and the zip file need to be the same"),". This could occurs on all add networks; TikTok, Mintegral, Unity, Ironsource etc."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-small",src:t(3876).A,width:"2122",height:"626"})),(0,r.yg)("p",null,"This could be caused by uploading the wrong zip file. The file downloaded from Creative Suite with a naming format of ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"PlayableName-Version-YYYY-MM-DD"))," is not the actual Playable zip."),(0,r.yg)("p",null,"Possible solution:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Unzip the downloaded file. A second zip file will be included in this file with the following naming format: ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"PlayableVariantName-AdNetworkName")),". Please upload this second zip file to the Ad Network.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-medium",src:t(50702).A,width:"1814",height:"614"})))}u.isMDXComponent=!0},3876:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ad-validation-failed-d878c47164a53b146992195d779673d3.png"},50702:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ad-validation-zip-ee0033d96a86755c89ae3277a496efaa.png"}}]);