"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[67729],{15680:(e,o,r)=>{r.d(o,{xA:()=>p,yg:()=>f});var t=r(96540);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var o=t.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},p=function(e){var o=c(e.components);return t.createElement(l.Provider,{value:o},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,f=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return r?t.createElement(f,i(i({ref:o},p),{},{components:r})):t.createElement(f,i({ref:o},p))}));function f(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[b]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44311:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(58168),n=(r(96540),r(15680));const a={id:"facebook-size-breakdown",title:"Facebook Size Breakdown larger than others",sidebar_label:"Facebook Size Breakdown larger than others"},i=void 0,s={unversionedId:"playable/common-issues/ad-networks/facebook/facebook-size-breakdown",id:"playable/common-issues/ad-networks/facebook/facebook-size-breakdown",title:"Facebook Size Breakdown larger than others",description:"This is because Facebook playables get zipped _after_ exportation and this compression isn't taken into account when the Size Breakdown is calculated in the plugin window.",source:"@site/docs/playable/common-issues/ad-networks/facebook/facebook-size-breakdown.md",sourceDirName:"playable/common-issues/ad-networks/facebook",slug:"/playable/common-issues/ad-networks/facebook/facebook-size-breakdown",permalink:"/docs/playable/common-issues/ad-networks/facebook/facebook-size-breakdown",draft:!1,tags:[],version:"current",frontMatter:{id:"facebook-size-breakdown",title:"Facebook Size Breakdown larger than others",sidebar_label:"Facebook Size Breakdown larger than others"},sidebar:"gettingStarted",previous:{title:"Problems running a nondynamic playable using the Facebook playable tester",permalink:"/docs/playable/common-issues/ad-networks/facebook/problems-running-a"},next:{title:"The Facebook playable preview tool show errors when uploading the playable zip",permalink:"/docs/playable/common-issues/ad-networks/facebook/the-facebook-playable"}},l={},c=[],p={toc:c},b="wrapper";function u(e){let{components:o,...r}=e;return(0,n.yg)(b,(0,t.A)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This is because Facebook playables get zipped ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"after"))," exportation and this compression isn't taken into account when the ",(0,n.yg)("a",{parentName:"p",href:"/docs/playable/optimise-your-builds/asset-size-breakdown"},"Size Breakdown")," is calculated in the plugin window."),(0,n.yg)("p",null,"Possible solution:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use the Applovin or IronSource size breakdown option as the benchmark.")))}u.isMDXComponent=!0}}]);