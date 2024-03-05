"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[4035],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,h=d["".concat(s,".").concat(g)]||d[g]||y[g]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},41175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"phc",title:"PHC (Playable Health Check)",sidebar_label:"Playable Health Check",description:"How to use Playable Health Check and improve your playables",keywords:["optimise","optimisation","size","reduction","playable","luna","phc","health","check"]},i=void 0,o={unversionedId:"playable/optimise-your-builds/phc",id:"playable/optimise-your-builds/phc",title:"PHC (Playable Health Check)",description:"How to use Playable Health Check and improve your playables",source:"@site/docs/playable/optimise-your-builds/phc.md",sourceDirName:"playable/optimise-your-builds",slug:"/playable/optimise-your-builds/phc",permalink:"/docs/playable/optimise-your-builds/phc",draft:!1,tags:[],version:"current",frontMatter:{id:"phc",title:"PHC (Playable Health Check)",sidebar_label:"Playable Health Check",description:"How to use Playable Health Check and improve your playables",keywords:["optimise","optimisation","size","reduction","playable","luna","phc","health","check"]},sidebar:"gettingStarted",previous:{title:"Project Diagnostics",permalink:"/docs/playable/code/project-diagnostics"},next:{title:"Overview",permalink:"/docs/playable/optimise-your-builds/optimising-assets/overview"}},s={},p=[{value:"Traffic Light System",id:"traffic-light-system",level:2},{value:"Categories",id:"categories",level:2}],c={toc:p},d="wrapper";function y(e){let{components:t,...l}=e;return(0,n.yg)(d,(0,r.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"PHC is a short, but important checklist which scans the project for readiness of the playable ad. Because playable ads have many factors which decide an ad performs well on the ad network, such as runtime performance (FPS), or even certain APIs that have to be called, else, the playable ad will be rejected by the ad network."),(0,n.yg)("p",null,"To prevent this from happening, and catching these issues while developing, we are introducing a new traffic light system based on 4 categories. These categories will help developers to create the best playable ad experience. And it will make sure the playable ad will be accepted by all of our supported ad networks."),(0,n.yg)("h2",{id:"traffic-light-system"},"Traffic Light System"),(0,n.yg)("p",null,"The traffic light system is an easy overview to see the current readiness of the playable ad. It consists of 3 colors:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Color"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{style:{display:"flex"}}," ",(0,n.yg)("div",{style:{margin:"5px 10px 5px 5px",minWidth:"15px",height:"15px",borderRadius:"50%",background:"red"}}),"Red ")),(0,n.yg)("td",{parentName:"tr",align:null},"There are serious issues detected which could break the build, or the playable ad will be rejected by the ad network.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{style:{display:"flex"}}," ",(0,n.yg)("div",{style:{margin:"5px 10px 5px 5px",minWidth:"15px",height:"15px",borderRadius:"50%",background:"#FFBF00"}})," Amber ")),(0,n.yg)("td",{parentName:"tr",align:null},"There are non breaking runtime issues detected, fixing these will greatly improve performance of the playable, and will decrease the chance of the playable ad being rejected by the ad network. Or you are not using all of our features which is proven to increase playable ad metrics, such as higher CTR. We highly recommend fixing these issues.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{style:{display:"flex"}}," ",(0,n.yg)("div",{style:{margin:"5px 10px 5px 5px",minWidth:"15px",height:"15px",borderRadius:"50%",background:"green"}})," Green")),(0,n.yg)("td",{parentName:"tr",align:null},"There are no issues detected which could break, or have a negative impact on the playable ad.")))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:a(89503).A,width:"1045",height:"789"})),(0,n.yg)("h2",{id:"categories"},"Categories"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Category"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Core Functionality"),(0,n.yg)("td",{parentName:"tr",align:null},"This category checks for issues that can break the playable ad for unexpected behaviour. For that reason, it is extremely important to fix these issues. They may include compiler errors or usage of a reserved keyword which is known to break the playable ad during runtime.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Ad Network"),(0,n.yg)("td",{parentName:"tr",align:null},"This category will give you an indication if the current project is compatible with all ad network requirements, such as the required API call are used. Fixing all of these issues mean your playable ad will be accepted by all of our supported ad networks.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Technical Performance"),(0,n.yg)("td",{parentName:"tr",align:null},"This category checks for issues related to runtime performance, which might break the playable during runtime. Our data has shown that runtime performance is also related to a better performing playable ad, and in some cases, ad networks reject the playable if the runtime performance is too low.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Best Practises"),(0,n.yg)("td",{parentName:"tr",align:null},"This category checks for our best practises, such as usage of LunaPlaygroundFields or Custom Events API's. Our data has shown that a playable implementing all of our best practises perform better on ad networks.")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Categories view with no errors and warnings")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:a(50697).A,width:"998",height:"754"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Categories view with errors and warnings")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:a(28482).A,width:"1000",height:"752"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Selected error categories view")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:a(61187).A,width:"999",height:"746"})))}y.isMDXComponent=!0},89503:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/phc-1-d0eb3f360b274641f885f93388240382.png"},50697:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/phc-2-da8a6118e26cf3b0e31da0e899abbef5.jpeg"},28482:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/phc-3-4d4855b1d6f79b377d57536cccc1bf0e.jpeg"},61187:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/phc-4-f21ce27f3d2b1e2dc6c100f0494e458c.jpeg"}}]);