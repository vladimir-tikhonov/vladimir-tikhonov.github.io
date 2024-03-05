"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[10542],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(96540),a=r(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(58168),a=r(96540),l=r(20053),o=r(23104),u=r(56347),i=r(57485),s=r(31682),c=r(89466);function p(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){var t;let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:r,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),g=(()=>{const e=null!=i?i:p;return b({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);u(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var g=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),i(n))},b=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;r=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;r=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},o,{className:(0,l.A)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},a.createElement(v,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function E(e){const t=(0,g.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},51248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));r(11470),r(19365);const l={id:"webgl2",title:"WebGL2",sidebar_label:"WebGL2",description:"WebGL2 feature that are supported by the Playable plugin",keywords:["webgl2","webgl","web","luna"]},o="WebGL2 support",u={unversionedId:"playable/getting-started/supported-features/webgl2",id:"playable/getting-started/supported-features/webgl2",title:"WebGL2",description:"WebGL2 feature that are supported by the Playable plugin",source:"@site/docs/playable/getting-started/supported-features/webgl2.md",sourceDirName:"playable/getting-started/supported-features",slug:"/playable/getting-started/supported-features/webgl2",permalink:"/docs/playable/getting-started/supported-features/webgl2",draft:!1,tags:[],version:"current",frontMatter:{id:"webgl2",title:"WebGL2",sidebar_label:"WebGL2",description:"WebGL2 feature that are supported by the Playable plugin",keywords:["webgl2","webgl","web","luna"]},sidebar:"gettingStarted",previous:{title:"Mecanim (Avatar)",permalink:"/docs/playable/getting-started/supported-features/mecanim"},next:{title:"Overview",permalink:"/docs/playable/code/unity-plugins/overview"}},i={},s=[{value:"Devices adoption",id:"devices-adoption",level:2},{value:"How to turn it on",id:"how-to-turn-it-on",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.yg)(p,(0,n.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"webgl2-support"},"WebGL2 support"),(0,a.yg)("p",null,"WebGL2 is an upgraded version of WebGL (Web Graphics Library), which is a JavaScript API used for rendering 2D and 3D graphics within compatible web browsers.\nWebGL2 introduces several performance enhancements compared to WebGL1. While the exact performance gain may vary depending on the specific use case."),(0,a.yg)("admonition",{title:"Important",type:"danger"},(0,a.yg)("p",{parentName:"admonition"},"The current implementation of WebGL2 export is still experimental and incomplete. While it has the potential for performance benefits, there is also a possibility of it not functioning properly or encountering issues.")),(0,a.yg)("h2",{id:"devices-adoption"},"Devices adoption"),(0,a.yg)("p",null,"Based on our data (August 2023) WebGL2 adoption on Android is 99.98% and 96.07% for ios devices."),(0,a.yg)("h2",{id:"how-to-turn-it-on"},"How to turn it on"),(0,a.yg)("p",null,"Click on the Settings section and then from within there go to the Advanced tab, enable the feature. "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-medium",src:r(94949).A,width:"1202",height:"544"})))}d.isMDXComponent=!0},94949:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/webgl2-enable-b5ada7ab1d14639f5bfec6667c483148.png"}}]);