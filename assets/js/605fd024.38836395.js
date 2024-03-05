"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[27026],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),g=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=g(a),p=r,y=u["".concat(d,".").concat(p)]||u[p]||c[p]||l;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),d=a(57485),g=a(31682),s=a(89466);function u(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:u(a);return function(e){const t=(0,g.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,d.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,g]=y({queryString:a,groupId:n}),[u,m]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,l]=(0,s.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=null!=d?d:u;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),g(e),m(e)}),[g,m,l]),tabValues:l}}var h=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:d,tabValues:g}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),n=g[a].value;n!==o&&(u(t),d(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var n;const t=s.indexOf(e.currentTarget)+1;a=null!=(n=s[t])?n:s[0];break}case"ArrowLeft":{var r;const t=s.indexOf(e.currentTarget)-1;a=null!=(r=s[t])?r:s[s.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:c},i,{className:(0,l.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(f,(0,n.A)({},e,t)),r.createElement(N,(0,n.A)({},e,t)))}function T(e){const t=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>g,toc:()=>u});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={id:"interactive-end-card-builder",title:"End Card Builder",sidebar_label:"End Card Builder",description:"How to install and use the Interactive End Card Builder in Unity.",keywords:["playable","luna","end card","iec","fields","configuration"]},d=void 0,g={unversionedId:"playable/code/interactive-end-card-builder",id:"playable/code/interactive-end-card-builder",title:"End Card Builder",description:"How to install and use the Interactive End Card Builder in Unity.",source:"@site/docs/playable/code/interactive-end-card-builder.md",sourceDirName:"playable/code",slug:"/playable/code/interactive-end-card-builder",permalink:"/docs/playable/code/interactive-end-card-builder",draft:!1,tags:[],version:"current",frontMatter:{id:"interactive-end-card-builder",title:"End Card Builder",sidebar_label:"End Card Builder",description:"How to install and use the Interactive End Card Builder in Unity.",keywords:["playable","luna","end card","iec","fields","configuration"]},sidebar:"gettingStarted",previous:{title:"Luna Terrain Exporter",permalink:"/docs/playable/code/luna-terrain-exporter"},next:{title:"Debugging\xa0JS 101",permalink:"/docs/playable/code/luna-in-browser/debug-js"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"End Card Call",id:"end-card-call",level:2},{value:"End Card Configuration",id:"end-card-configuration",level:2},{value:"End Card Settings",id:"end-card-settings",level:2},{value:"Portrait Settings",id:"portrait-settings",level:2},{value:"Description and CTA Button",id:"description-and-cta-button",level:3},{value:"Icon",id:"icon",level:3},{value:"Landscape Settings",id:"landscape-settings",level:2},{value:"Clickable Options",id:"clickable-options",level:2},{value:"Animation Settings",id:"animation-settings",level:2},{value:"Button Animations",id:"button-animations",level:3},{value:"End Card Entry Animation",id:"end-card-entry-animation",level:3}],c={toc:u},p="wrapper";function y(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The Interactive End Card Builder is a tool developed by Luna for the Playable plug-in. Game developers can create and customize end cards for their playables instantly in the Unity editor."),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/docs/playable/setup/install-luna"},"Install Playable Plugin")," into your Unity project."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/LunaCommunity/End-Card-Builder"},"Download")," and import the Interactive End Card Builder into your Unity project.")),(0,r.yg)("p",null,"You can now see the ",(0,r.yg)("strong",{parentName:"p"},"Interactive End Card Builder")," folder in your Unity assets. If you want to test the builder, or have a play around with it, you can select the ",(0,r.yg)("em",{parentName:"p"},"Scenes")," folder and open the the ",(0,r.yg)("em",{parentName:"p"},"Example Scene"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"CanvasWithEndCard")," prefab can be dragged and dropped into your project hierarchy and integrated with your work. You can find it in the End Card folder, in the prefabs sub-folder."),(0,r.yg)("h2",{id:"end-card-call"},"End Card Call"),(0,r.yg)("p",null,"It is necessary to call the end card in order for it to appear in the scene. Therefore, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"OpenEndCard()")," method in your script to instantiate the end card."),(0,r.yg)("p",null,"An example is available in the ",(0,r.yg)("em",{parentName:"p"},"scripts")," folder: ",(0,r.yg)("strong",{parentName:"p"},"Example End Card Call"),"."),(0,r.yg)("h2",{id:"end-card-configuration"},"End Card Configuration"),(0,r.yg)("p",null,"To configure an end card, you can select the prefab first child ",(0,r.yg)("inlineCode",{parentName:"p"},"LunaEndCardContainer")," in the hierarchy. In this way the inspector will show you all the fields that can be modified in real time."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(69885).A,width:"3584",height:"2038"})),(0,r.yg)("p",null,"These fields are also divided between ",(0,r.yg)("strong",{parentName:"p"},"Portrait Settings")," and ",(0,r.yg)("strong",{parentName:"p"},"Landscape Settings")," according to what orientation is being used. These settings work in a similar way, they are only split in two groups in order to get different behaviors according to the considered orientation."),(0,r.yg)(l.A,{groupId:"portrait-landscape",defaultValue:"portrait",values:[{label:"Portrait",value:"portrait"},{label:"Landscape",value:"landscape"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"portrait",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-small",src:a(26482).A,width:"934",height:"1340"}))),(0,r.yg)(i.A,{value:"landscape",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-medium",src:a(34380).A,width:"1310",height:"802"})))),(0,r.yg)("h2",{id:"end-card-settings"},"End Card Settings"),(0,r.yg)("p",null,"Use these variables to set your basic end card features (eg. background, icon texture, description, etc.)."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-small",src:a(29060).A,width:"650",height:"460"})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type/Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Always show Endcard"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Mainly used for testing. Tick this option to make your end card to stay fixed in play mode.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Background color"),(0,r.yg)("td",{parentName:"tr",align:null},"Click on the ",(0,r.yg)("strong",{parentName:"td"},"color bar")," to open the color context menu and begin choosing a color."),(0,r.yg)("td",{parentName:"tr",align:null},"The background colour and opacity of the end card. If you do not need a background you can set the alpha value to ",(0,r.yg)("strong",{parentName:"td"},"0"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Background Texture"),(0,r.yg)("td",{parentName:"tr",align:null},"Image file(.png, .jpg, .jpeg, etc.)"),(0,r.yg)("td",{parentName:"tr",align:null},"You may upload a custom image to use for the end card. If your image includes text already on it be sure to set the End Card text color to transparent.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Icon Texture"),(0,r.yg)("td",{parentName:"tr",align:null},"Image file(.png, .jpg, .jpeg, etc.)"),(0,r.yg)("td",{parentName:"tr",align:null},"The image used for the icon in the end card.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Icon Color"),(0,r.yg)("td",{parentName:"tr",align:null},"Click on the color bar to open the color context menu and begin choosing a color."),(0,r.yg)("td",{parentName:"tr",align:null},"The background colour and opacity of the end card's icon.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Button Texture"),(0,r.yg)("td",{parentName:"tr",align:null},"Image file(.png, .jpg, .jpeg, etc.)"),(0,r.yg)("td",{parentName:"tr",align:null},"The image used for the Button in the end card.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Button Color"),(0,r.yg)("td",{parentName:"tr",align:null},"Click on the color bar to open the color context menu and begin choosing a color."),(0,r.yg)("td",{parentName:"tr",align:null},"The background colour for and opacity of the end card's button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"End Card Description Text"),(0,r.yg)("td",{parentName:"tr",align:null},"String (Letters, Numbers and Symbols)"),(0,r.yg)("td",{parentName:"tr",align:null},"The description text displayed under the icon and above the CTA button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CTA Button Text"),(0,r.yg)("td",{parentName:"tr",align:null},"String (Letters, Numbers and Symbols)"),(0,r.yg)("td",{parentName:"tr",align:null},"The text displayed inside the CTA button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Use Best Fit On CTA"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to automatically resize the button text to the best fit.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CTA Font Color"),(0,r.yg)("td",{parentName:"tr",align:null},"Click on the ",(0,r.yg)("strong",{parentName:"td"},"color bar")," to open the color context menu and begin choosing a color."),(0,r.yg)("td",{parentName:"tr",align:null},"The color and the opacity of the CTA button text. If needed, you can set the opacity to ",(0,r.yg)("strong",{parentName:"td"},"0")," to remove the text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Font Color"),(0,r.yg)("td",{parentName:"tr",align:null},"Click on the ",(0,r.yg)("strong",{parentName:"td"},"color bar")," to open the color context menu and begin choosing a color."),(0,r.yg)("td",{parentName:"tr",align:null},"The color and the opacity of the description text. If needed, you can set the opacity to ",(0,r.yg)("strong",{parentName:"td"},"0")," to remove the text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CTA Font"),(0,r.yg)("td",{parentName:"tr",align:null},"Font file(.ttf, .otf)"),(0,r.yg)("td",{parentName:"tr",align:null},"Drag & drop a font file in this field to change the font used by the CTA button text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Font"),(0,r.yg)("td",{parentName:"tr",align:null},"Font file(.ttf, .otf)"),(0,r.yg)("td",{parentName:"tr",align:null},"Drag & drop a font file in this field to change the font used by the description text.")))),(0,r.yg)("h2",{id:"portrait-settings"},"Portrait Settings"),(0,r.yg)("p",null,"Use this settings to edit the appearance of the end card in portrait mode."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(45189).A,width:"926",height:"526"})),(0,r.yg)("p",null,"Landscape orientation fields ",(0,r.yg)("strong",{parentName:"p"},"will not update")," the end card's features while in portrait orientation."),(0,r.yg)("h3",{id:"description-and-cta-button"},"Description and CTA Button"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type/Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CTA Font Size"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"The size of the CTA button text, the larger the value entered the larger the text will be.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Font Size"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"The size of the description text, the larger the value entered the larger the text will be.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Center Description X"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to ",(0,r.yg)("strong",{parentName:"td"},"center")," the description text along the X axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When this field is set to true, the description will be ",(0,r.yg)("strong",{parentName:"td"},"fixed")," in the center of the playable. Setting this back to false will allow this object to be moved along the X axis again."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Center Description Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to ",(0,r.yg)("strong",{parentName:"td"},"center")," the description text along the Y axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When this field is set to true, the description will be ",(0,r.yg)("strong",{parentName:"td"},"fixed")," in the center of the playable. Setting this back to false will allow this object to be moved along the Y axis again."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Center Button X"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to ",(0,r.yg)("strong",{parentName:"td"},"center")," the CTA button along the X axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When this field is set to true, the CTA button will be ",(0,r.yg)("strong",{parentName:"td"},"fixed")," in the center of the playable. Setting this back to false will allow this object to be moved along the X axis again."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Center Button Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to ",(0,r.yg)("strong",{parentName:"td"},"center")," the CTA button along the Y axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When this field is set to true, the CTA button will be ",(0,r.yg)("strong",{parentName:"td"},"fixed")," in the center of the playable. Setting this back to false will allow this object to be moved along the Y axis again."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Position X"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the slider to translate the description text along the X axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Description Position Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the slider to translate the description text along the Y axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Button Position X"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the slider to translate the CTA button along the X axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Button Position Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the slider to translate the CTA button along the Y axis.")))),(0,r.yg)("h3",{id:"icon"},"Icon"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type/Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Center Icon X"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to ",(0,r.yg)("strong",{parentName:"td"},"center")," the description text along the X axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When this field is set to true, the description will be ",(0,r.yg)("strong",{parentName:"td"},"fixed")," in the center of the playable. Setting this back to false will allow this object to be moved along the X axis again."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Center Icon Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to ",(0,r.yg)("strong",{parentName:"td"},"center")," the description text along the Y axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"When this field is set to true, the description will be ",(0,r.yg)("strong",{parentName:"td"},"fixed")," in the center of the playable. Setting this back to false will allow this object to be moved along the Y axis again."),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Icon Position X"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the slider to move the icon along the X axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Icon Position Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the slider to move the icon along the Y axis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Icon Size"),(0,r.yg)("td",{parentName:"tr",align:null},"Slider (which changes a float value)"),(0,r.yg)("td",{parentName:"tr",align:null},"Move the slider to change the size the icon.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Round Edged On Icon"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean(true/false)"),(0,r.yg)("td",{parentName:"tr",align:null},"Tick this box to round the edges of your icon.")))),(0,r.yg)("h2",{id:"landscape-settings"},"Landscape Settings"),(0,r.yg)("p",null,"Use this settings to test the landscape orientation of your playable."),(0,r.yg)("p",null,"These settings function in the same way the\nThe landscape settings are separated from the portrait fields in the inspector. In this way, you are able to create a different behavior for your end card when the user is using landscape orientation."),(0,r.yg)("p",null,"If you are using a portrait orientation the landscape settings ",(0,r.yg)("strong",{parentName:"p"},"will not")," update the end card's features."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(23494).A,width:"1000",height:"292"})),(0,r.yg)("h2",{id:"clickable-options"},"Clickable Options"),(0,r.yg)("p",null,"In this field, you can specify which part of the end card will be clickable and linked to the app store."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CTA Button Only")),(0,r.yg)("td",{parentName:"tr",align:null},"Only the CTA button will be clickable in the end card.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Fullscreen")),(0,r.yg)("td",{parentName:"tr",align:null},"The entire screen will be clickable in the end card.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Fire App Stop Click On Show")),(0,r.yg)("td",{parentName:"tr",align:null},"This options will automatically click on the end card when it is shown for the first time.")))),(0,r.yg)("h2",{id:"animation-settings"},"Animation Settings"),(0,r.yg)("p",null,"The end card builder also provides different animations for the CTA button and the end card entry."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type/Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Button Animation Type"),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("inlineCode",{parentName:"td"},"None")," ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Wobble")," ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Scale")," ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Opacity")," ",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"The animation for the end card button. The default value is ",(0,r.yg)("inlineCode",{parentName:"td"},"Wobble"),". You can check them ",(0,r.yg)("a",{parentName:"td",href:"#button-animations"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"End Card Portrait Animation Type"),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("inlineCode",{parentName:"td"},"None")," ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Slide Top To Bottom"),": The end card enters from the top of the screens going towards the bottom ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Slide Bottom To Top"),": The end card enters from the bottom of the screens going towards the top ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Scale")," ",(0,r.yg)("br",null),": The end card enters in the scene by expanding from the middle of the screen until it reaches the required measurements."),(0,r.yg)("td",{parentName:"tr",align:null},"The appearance animation type for the end card in portrait orientation, which controls show the end card arrives on screen. Default value is ",(0,r.yg)("inlineCode",{parentName:"td"},"Slide Top To Bottom"),". You can check them out ",(0,r.yg)("a",{parentName:"td",href:"#end-card-entry-animation"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"End Card Landscape Animation Type"),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("inlineCode",{parentName:"td"},"None")," ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Slide Right To Left"),": The end card enters from the right of the screens going towards the left side. ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Slide Left To Right"),": The end card enters from the left of the screens going towards the right side. ",(0,r.yg)("br",null)," - ",(0,r.yg)("inlineCode",{parentName:"td"},"Scale"),": The end card enters in the scene by expanding from the middle of the screen until it reaches the required measurements. ",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"The appearance animation type for the end card in landscape orientation, which controls show the end card arrives on screen. Default value is ",(0,r.yg)("inlineCode",{parentName:"td"},"Slide Right To Left"),".")))),(0,r.yg)("h3",{id:"button-animations"},"Button Animations"),(0,r.yg)(l.A,{groupId:"ec-button-anims",defaultValue:"wobble",values:[{label:"Wobble",value:"wobble"},{label:"Scale",value:"scale"},{label:"Opacity",value:"opacity"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"wobble",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-xsmall",src:a(79113).A,width:"450",height:"620"}))),(0,r.yg)(i.A,{value:"scale",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-xsmall",src:a(93378).A,width:"450",height:"620"}))),(0,r.yg)(i.A,{value:"opacity",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-xsmall",src:a(99901).A,width:"450",height:"620"})))),(0,r.yg)("h3",{id:"end-card-entry-animation"},"End Card Entry Animation"),(0,r.yg)(l.A,{groupId:"ec-entry-anims",defaultValue:"scale",values:[{label:"Top To Bottom",value:"t2b"},{label:"Bottom To Top",value:"b2t"},{label:"Scale",value:"scale"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"scale",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-xsmall",src:a(56883).A,width:"450",height:"620"}))),(0,r.yg)(i.A,{value:"t2b",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-xsmall",src:a(21945).A,width:"450",height:"618"}))),(0,r.yg)(i.A,{value:"b2t",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-xsmall",src:a(49097).A,width:"450",height:"620"})))))}y.isMDXComponent=!0},49097:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ec-b2t-entry-anim-be852c0c90a77bf7078d1b8eb7a115be.gif"},99901:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ec-opacity-anim-58015c14dae418bcfc21206f9869169a.gif"},93378:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ec-scale-anim-eda1148cf75a51b06bf7fc8e6f98f807.gif"},56883:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ec-scale-entry-anim-7274d5a65210ade490aca17965bb76e3.gif"},21945:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ec-t2b-entry-anim-6d1d34d096aaa19a4dfd646491beb636.gif"},79113:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ec-wobble-anim-06793592b3de3aceefb5cfb92872ae11.gif"},69885:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/end-card-inspector-0be6d019a208d95a4a0a7b979c01756f.jpeg"},34380:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/end-card-landscape-e99a3aa911f596413739dada319fcb08.png"},23494:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/end-card-moving-position-4f93c723dffde3f9e797c9841d5288d1.gif"},45189:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/end-card-moving-positions2-552379cf0269d4804a15c73883b05d31.gif"},26482:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/end-card-portrait-e0eec85222e3c9b8219b98cee4e398ef.png"},29060:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/end-card-settings-8a4088fa7cb991d29be1f67a571c2f59.png"}}]);