"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[15614],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),y=i,c=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return a?r.createElement(c,n(n({ref:t},d),{},{components:a})):r.createElement(c,n({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var p=2;p<o;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},14303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(58168),i=(a(96540),a(15680));const o={id:"overview",title:"Optimisation - Overview",sidebar_label:"Overview",description:"Optimisation - The importance of reducing playable size and where to start.",keywords:["optimise","optimisation","size","reduction","playable","luna"]},n=void 0,l={unversionedId:"playable/optimise-your-builds/overview",id:"playable/optimise-your-builds/overview",title:"Optimisation - Overview",description:"Optimisation - The importance of reducing playable size and where to start.",source:"@site/docs/playable/optimise-your-builds/overview.md",sourceDirName:"playable/optimise-your-builds",slug:"/playable/optimise-your-builds/overview",permalink:"/docs/playable/optimise-your-builds/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Optimisation - Overview",sidebar_label:"Overview",description:"Optimisation - The importance of reducing playable size and where to start.",keywords:["optimise","optimisation","size","reduction","playable","luna"]},sidebar:"gettingStarted",previous:{title:"3014 - Wrong API Usage",permalink:"/docs/playable/code/error-codes/LP3014"},next:{title:"Measuring Startup Time",permalink:"/docs/playable/optimise-your-builds/startup-time/measuring-startup"}},s={},p=[{value:"Playable Size: Where to start",id:"playable-size-where-to-start",level:2},{value:"Preloader Images",id:"preloader-images",level:2},{value:"Why we don&#39;t compress them",id:"why-we-dont-compress-them",level:3},{value:"How to reduce the size of Preloader Images",id:"how-to-reduce-the-size-of-preloader-images",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"One of the main goals is to provide a flexible yet simple tool for optimising the size of your playable builds."),(0,i.yg)("p",null,"The plugin utilizes many techniques ranging from web-friendly formats of the assets to sophisticated repacking of data to cut down the download size, speed up startup time and runtime performance."),(0,i.yg)("p",null,"As the majority of networks limit the size of playable ads (i.e. to 5Mb) and also prohibit network communication, this makes it difficult to download any additional data. Furthermore, Playable Ads must start quickly - otherwise the impression might get discarded, resulting in poor performance."),(0,i.yg)("p",null,"Finally, when building in Unity, you must be aware that the final product is running in the web environment, which is inherently performance constrained. Implementations that work well in Unity may not perform as well in a browser. Therefore, it is critical to be performance-conscious when building and optimising your playable experience."),(0,i.yg)("p",null,"Later in this section, we have provided some practical tips for optimising ",(0,i.yg)("a",{parentName:"p",href:"startup-time/measuring-startup"},"startup time")," and ",(0,i.yg)("a",{parentName:"p",href:"runtime-performance"},"runtime performance")," and ",(0,i.yg)("a",{parentName:"p",href:"asset-size-breakdown"},"build size"),"."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"We are also releasing a series of articles on Size Optimization on Medium, the first of which you can find by ",(0,i.yg)("a",{href:"https://medium.com/luna-labs-ltd/how-to-optimise-playable-build-sizes-meshes-textures-sound-animation-3dc1b06f99a5"},"clicking here."))),(0,i.yg)("h2",{id:"playable-size-where-to-start"},"Playable Size: Where to start"),(0,i.yg)("admonition",{title:"Warning",type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"Developers should ",(0,i.yg)("strong",{parentName:"p"},"never")," fall for judging the build size by inspecting the ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"/docs/playable/setup/develop-build#what-is-a-development-build"},"development build"))," it is not designed for production use of any sort as it lacks asset compression, serves each file individually and is meant purely for testing purposes on a local machine.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"A good starting point would be to ",(0,i.yg)("a",{parentName:"p",href:"asset-size-breakdown"},"inspecting the Size Breakdown")," in the Playable Plugin. This will give you a good idea of what is taking up the most space in your playable.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can also ",(0,i.yg)("a",{parentName:"p",href:"/docs/playable/playground/upload-build"},"upload the build")," to Creative Suite and clicking ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Download or Publish"))," button next to the creative that you're interested in.:"))),(0,i.yg)("center",null,(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-small",src:a(54709).A,width:"844",height:"244"}))),(0,i.yg)("p",null,"This opens the ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Publish"))," page with all the available network options. Some networks options might have yellow of red warnings that indicate that the playable is too large for the network."),(0,i.yg)("center",null,(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-large",src:a(43082).A,width:"3024",height:"2000"}))),(0,i.yg)("p",null,"If the network you're interested in has a red warning, you need to optimise your playable size for that network."),(0,i.yg)("h2",{id:"preloader-images"},"Preloader Images"),(0,i.yg)("admonition",{title:"Important",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Preloader images are ",(0,i.yg)("strong",{parentName:"p"},"never compressed in the Luna export process"),".")),(0,i.yg)("p",null,"If your playable has extra sizing that is seemingly unaccounted for, it could be your preloader images."),(0,i.yg)("h3",{id:"why-we-dont-compress-them"},"Why we don't compress them"),(0,i.yg)("p",null,"Preloader images are the first assets shown to the user whilst your playable loads. This means the images need to be raw in order to avoid unwanted decompression and read time. As such preloader images are put into the index.html file without any compression."),(0,i.yg)("p",null,"On the up side this reduces load times, however the file's original size will be the same in the playable as it is in Unity. This ",(0,i.yg)("strong",{parentName:"p"},"can increase your playable's size dramatically")," depending on the image(s)."),(0,i.yg)("h3",{id:"how-to-reduce-the-size-of-preloader-images"},"How to reduce the size of Preloader Images"),(0,i.yg)("p",null,"In order to reduce your preloader image file sizes, you will need to ",(0,i.yg)("strong",{parentName:"p"},"manually reduce their original size")," before exporting them with the Luna plugin."),(0,i.yg)("p",null,"To do so you can ",(0,i.yg)("strong",{parentName:"p"},"use a raster graphics editor")," (",(0,i.yg)("em",{parentName:"p"},"like Microsoft Paint or Adobe Photoshop"),") and scale the image down, or change the image format to a more lossy type (e.g. PNG32 -> PNG8, as Preloaders don't usually need an alpha value)."),(0,i.yg)("p",null,"Reducing your preloader images can in turn cut your playable's total size dramatically, keep this in mind if you're looking to save space anywhere you can!"))}m.isMDXComponent=!0},43082:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/playable-ad-network-errors-b84c09bdb55395736c8be45e1cf2cc65.png"},54709:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/download-from-playground-e1b1c0839a110b999a76be3e35af1f26.png"}}]);