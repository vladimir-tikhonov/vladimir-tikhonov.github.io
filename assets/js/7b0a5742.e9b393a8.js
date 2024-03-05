"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[35303],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=n,f=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},46716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={id:"LP1009",title:"PlaygroundAsset has no default value",sidebar_label:"1009 - PlaygroundAsset Value",description:"Explanation & steps to fix.",keywords:["playground","asset","value","fix","playable","luna","error","LP1009"]},l=void 0,i={unversionedId:"playable/code/error-codes/LP1009",id:"playable/code/error-codes/LP1009",title:"PlaygroundAsset has no default value",description:"Explanation & steps to fix.",source:"@site/docs/playable/code/error-codes/1009-PlaygroundAssetValue.md",sourceDirName:"playable/code/error-codes",slug:"/playable/code/error-codes/LP1009",permalink:"/docs/playable/code/error-codes/LP1009",draft:!1,tags:[],version:"current",sidebarPosition:1009,frontMatter:{id:"LP1009",title:"PlaygroundAsset has no default value",sidebar_label:"1009 - PlaygroundAsset Value",description:"Explanation & steps to fix.",keywords:["playground","asset","value","fix","playable","luna","error","LP1009"]},sidebar:"gettingStarted",previous:{title:"1008 - Null Component",permalink:"/docs/playable/code/error-codes/LP1008"},next:{title:"1010 - Scale On Collider",permalink:"/docs/playable/code/error-codes/LP1010"}},s={},p=[{value:"Message",id:"message",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Steps to fix",id:"steps-to-fix",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"message"},"Message"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"[LunaPlaygroundAsset]"),' Attribute added onto "FIELD NAME" field of "CLASS NAME" class must have a default value to appear in Creative Suite.'),(0,n.yg)("h2",{id:"explanation"},"Explanation"),(0,n.yg)("p",null,"The sole purpose of a field with ",(0,n.yg)("inlineCode",{parentName:"p"},"[LunaPlaygroundAsset]")," is to hint Creative Suite that a specific asset should be modifiable via Creative Suite UI. The field with this attribute does not have to be considered by game code in any way (although developers are free to do so if needed). Obviously, for the Creative Suite to know ",(0,n.yg)("strong",{parentName:"p"},"which asset to modify")," the field has to ",(0,n.yg)("strong",{parentName:"p"},"point to some existing asset"),". Thus, a field marked with such an attribute and lacking an association to an asset will not function properly."),(0,n.yg)("h2",{id:"steps-to-fix"},"Steps to fix"),(0,n.yg)("p",null,"Please assign an asset to the field via Unity's inspector window."))}u.isMDXComponent=!0}}]);