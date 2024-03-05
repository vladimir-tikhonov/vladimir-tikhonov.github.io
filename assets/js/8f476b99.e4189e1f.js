"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[94852],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>m});var a=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),u=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=u(i),p=n,m=y["".concat(r,".").concat(p)]||y[p]||c[p]||s;return i?a.createElement(m,l(l({ref:t},d),{},{components:i})):a.createElement(m,l({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,l=new Array(s);l[0]=p;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[y]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=i[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},52441:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=i(58168),n=(i(96540),i(15680));const s={id:"runtime-analysis",title:"Runtime Analysis",sidebar_label:"Runtime Analysis",description:"Automatic code stripping based on runtime analysis of your project",keywords:["runtime","analysis","stripping","excludes","exclude","automatic"]},l=void 0,o={unversionedId:"playable/optimise-your-builds/runtime-analysis",id:"playable/optimise-your-builds/runtime-analysis",title:"Runtime Analysis",description:"Automatic code stripping based on runtime analysis of your project",source:"@site/docs/playable/optimise-your-builds/runtime-analysis.md",sourceDirName:"playable/optimise-your-builds",slug:"/playable/optimise-your-builds/runtime-analysis",permalink:"/docs/playable/optimise-your-builds/runtime-analysis",draft:!1,tags:[],version:"current",frontMatter:{id:"runtime-analysis",title:"Runtime Analysis",sidebar_label:"Runtime Analysis",description:"Automatic code stripping based on runtime analysis of your project",keywords:["runtime","analysis","stripping","excludes","exclude","automatic"]},sidebar:"gettingStarted",previous:{title:"Textures",permalink:"/docs/playable/optimise-your-builds/optimising-assets/optimising-textures"},next:{title:"Size Breakdown",permalink:"/docs/playable/optimise-your-builds/asset-size-breakdown"}},r={},u=[{value:"What is Runtime Analysis?",id:"what-is-runtime-analysis",level:2},{value:"Where to find Runtime Analysis",id:"where-to-find-runtime-analysis",level:2},{value:"How to use Runtime Analysis",id:"how-to-use-runtime-analysis",level:2},{value:"How to integrate Runtime Analysis into your Playable Creation process",id:"how-to-integrate-runtime-analysis-into-your-playable-creation-process",level:3},{value:"Code Tab",id:"code-tab",level:2},{value:"Disable Code Stripping",id:"disable-code-stripping",level:3},{value:"Undoing Exclusions",id:"undoing-exclusions",level:3},{value:"Excluded Modules",id:"excluded-modules",level:3},{value:"Shader Tab",id:"shader-tab",level:2},{value:"Disable Shader Stripping",id:"disable-shader-stripping",level:3},{value:"Undoing Shader Variants Exclusions",id:"undoing-shader-variants-exclusions",level:3}],d={toc:u},y="wrapper";function c(e){let{components:t,...s}=e;return(0,n.yg)(y,(0,a.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Runtime Analysis runs automatically when a creative is tested in develop mode. You can ",(0,n.yg)("a",{href:"#how-to-use-runtime-analysis"},"click here")," for more information.")),(0,n.yg)("h2",{id:"what-is-runtime-analysis"},"What is Runtime Analysis?"),(0,n.yg)("p",null,"Runtime Analysis is a feature of Playable Plugin that excludes unused classes, methods or shaders from your playable build in order to save space, whilst also eliminating the time needed to manually exclude these yourself."),(0,n.yg)("p",null,"In addition to user methods, classes and shaders, Runtime Analysis also excludes code within the engine that is not being used."),(0,n.yg)("p",null,"To achieve this, upon running Runtime Analysis we detect all c# classes, their methods and properties. We mark each of them as \u201cunused\u201d and place a hook inside.\nEach time a class, method or property is used, our hook is fired and and we mark this component as \u201cused\u201d.\nWere constantly updating this exclusion list as the game is played, and this list will become smaller and smaller as new shaders, classes and methods are used during playthroughs.\nThis exclusion list is shown in the ",(0,n.yg)("a",{parentName:"p",href:"#where-to-find-runtime-analysis"},"Runtime Analysis tab"),"."),(0,n.yg)("p",null,"Runtime Analysis uses this procedure to detect what shaders are actively performing in the playable. It runs the same process that is used for classes, methods and properties and the shader data is stored in the ",(0,n.yg)("a",{parentName:"p",href:"/docs/playable/optimise-your-builds/optimising-assets/optimising-shaders#luna-shader-variant-collection"},"Luna Shader Variant Collection")," asset. In this way, Runtime Analysis can help users to export only the necessary shader variants."),(0,n.yg)("p",null,"Scripts exclusions and Runtime Analysis are not connected with each other. Excluded scripts will ",(0,n.yg)("strong",{parentName:"p"},"not")," be included in the playable build used during Runtime Analysis."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"You will need to playthrough your game enough times that you go through most possible interactions.")," This will allow Runtime Analysis to have a comprehensive idea of what methods/classes/shaders are needed, and in doing so will avoid errors in your build."),(0,n.yg)("p",null,"From testing this feature on a number of projects, we have found that Runtime Analysis reduces the size of the playable code by ",(0,n.yg)("strong",{parentName:"p"},"~30%!")),(0,n.yg)("p",null,"This means you have more space for features and improved game art, which can drive engagement and experience."),(0,n.yg)("admonition",{title:"Warning!",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"As this process is automated you may encounter build issues if the wrong script is marked for exclusion. If so, you can check the list of excluded code in the Runtime Analysis tab and untick any methods/classes/shaders that are needed.")),(0,n.yg)("h2",{id:"where-to-find-runtime-analysis"},"Where to find Runtime Analysis"),(0,n.yg)("p",null,"Runtime Analysis can be found by navigating to the ",(0,n.yg)("inlineCode",{parentName:"p"},"Runtime Analysis")," section of the Playable Plugin window."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(4577).A,title:"Runtime Analysis Tab",width:"2224",height:"1720"})),(0,n.yg)("p",null,'You can also navigate to this tab from within the Size Optimisation tab, by clicking on the "Optimize Scripts" button.'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(32995).A,title:"Press optimise scripts to access runtime analysis",width:"2536",height:"1632"})),(0,n.yg)("h2",{id:"how-to-use-runtime-analysis"},"How to use Runtime Analysis"),(0,n.yg)("p",null,"Currently, Runtime Analysis runs continuously in background for any develop build. This allows developers not to have to rebuild the project just to execute Runtime Analysis, and this also help to strip unnecessary modules from the beginning of testing."),(0,n.yg)("p",null,"In order to create an accurate exclusion list, you will need to refresh and playthrough as many aspects/interactions of your game as possible. This will allow Runtime Analysis to build a comprehensive list of methods/classes/shaders to not exclude from the build, ",(0,n.yg)("strong",{parentName:"p"},"and will avoid errors occurring.")),(0,n.yg)("h3",{id:"how-to-integrate-runtime-analysis-into-your-playable-creation-process"},"How to integrate Runtime Analysis into your Playable Creation process"),(0,n.yg)("admonition",{title:"remember",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Runtime Analysis records all used code and its final goal is to make sure you have checked all your work while you are building your playable.")),(0,n.yg)("p",null,"Here is an example of how Runtime Analysis should be integrated into your Playable Creation process:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Take your project and import the latest version of Playable Plugin."),(0,n.yg)("li",{parentName:"ol"},"Create a develop build and check that it works properly in the browser. Runtime Analysis will record the used code for this build."),(0,n.yg)("li",{parentName:"ol"},"You might decide to implement a new feature: test it in Unity first, then test it in the develop build. Runtime analysis will record the code used for your feature."),(0,n.yg)("li",{parentName:"ol"},"You might want to implement Orientation handling logic: firstly, you can test it in your Luna develop build and Runtime analysis will record the used code."),(0,n.yg)("li",{parentName:"ol"},"You might implement Playground fields: firstly, test it in Luna develop build (dont forget to test all expected values), and Runtime analysis will record the used code.")),(0,n.yg)("p",null,"As a result, all functionalities youve worked on have been recorded by Runtime Analysis.\nEven if you rearranged your code and some of it is no longer needed, it will be included in the build anyway but it will not take much space."),(0,n.yg)("admonition",{title:"Warning!",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"If you do not test your code in a Luna build, you cannot be sure it works properly. Please test every code change in develop mode.")),(0,n.yg)("details",null,(0,n.yg)("summary",null,"CLICK HERE for Runtime Analysis before Playable v3.4.1"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Starting Runtime Analysis")),(0,n.yg)("p",null,"In order to start Runtime Analysis, first navigate to it within Playable Plugin Plugin."),(0,n.yg)("p",null,'After doing so click on the "Start Analysis" button. This will go about building the game and checking the selected scene(s).'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(92662).A,width:"2002",height:"1500"})),(0,n.yg)("p",null,"When this process has completed, a pop-up window will appear asking you to run the playable in the browser."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-small",src:i(927).A,width:"389",height:"158"})),(0,n.yg)("p",null,"This is an important step in the analysis, as your playthrough will highlight any methods/classes that were missed out as 'needed' when the initial scan of your scene(s) was done."),(0,n.yg)("p",null,"In order to create an accurate exclusion list, you will need to refresh and playthrough as many aspects/interactions of your game as possible. This will allow Runtime Analysis to build a comprehensive list of methods/classes/shaders to not exclude from the build, ",(0,n.yg)("strong",{parentName:"p"},"and will avoid errors occurring.")),(0,n.yg)("div",{className:"callout warning"},"The build that opens at the end of Runtime Analysis is a unique build that detects unused methods/classes. Future develop builds will allow Playable to re-include methods/classes that were previously marked as unused if their use is detected in future builds, but will not add more methods/classes to the exclusion list. To do so you will need to run Runtime Analysis again."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Pausing Runtime Analysis")),(0,n.yg)("p",null,"With Playable Plugin 3.1.0, whenever a creative is tested in develop mode, ",(0,n.yg)("strong",{parentName:"p"},"Runtime Analysis will be automatically performed"),". This allows developers not to have to rebuild the project just to execute the Runtime Analysis process."),(0,n.yg)("p",null,"Additionally, by activating the ",(0,n.yg)("strong",{parentName:"p"},"Pause Runtime Analysis")," checkbox, Runtime Analysis can be paused. By doing so, users can temporarily stop the feature from running so they do not have to go through every possible interaction every time a playable is tested."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(52240).A,width:"1735",height:"387"})),(0,n.yg)("p",null,"If you would like to undo all exclusions made by Runtime Analysis you can simply click on the 'Reset' button:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(28315).A,width:"2002",height:"1500"})),(0,n.yg)("div",{className:"callout info"},"Try resetting Runtime Analysis if any of your ad functionalities previously working in Unity suddenly do not work in Luna. Execute Runtime Analysis and play your playable again, but make sure that every app functionality is being called.")),(0,n.yg)("h2",{id:"code-tab"},"Code Tab"),(0,n.yg)("p",null,"Once you tested your develop build, the exclusion list will update and the scripts will be organised in a hierarchical order that follows the structure below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Namespace\n    \u2514\u2500\u2500 Class Name\n            \u2514\u2500\u2500 Method Name\n")),(0,n.yg)("h3",{id:"disable-code-stripping"},"Disable Code Stripping"),(0,n.yg)("p",null,"When in you are in the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Code Tab"))," of Runtime Analysis, you will be presented with a ",(0,n.yg)("inlineCode",{parentName:"p"},"Disable Code Stripping")," checkbox.\nBy activating this checkbox, you will prevent Runtime Analysis from removing any code, regardless of the content of ",(0,n.yg)("em",{parentName:"p"},"excluded code")," or ",(0,n.yg)("em",{parentName:"p"},"excluded modules"),"."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(50890).A,width:"2002",height:"538"})),(0,n.yg)("h3",{id:"undoing-exclusions"},"Undoing Exclusions"),(0,n.yg)("p",null,"If you have found that Runtime Analysis has marked a script you need for exclusion, you can untick said script from with the Excluded Code list:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(79032).A,width:"986",height:"738"})),(0,n.yg)("h3",{id:"excluded-modules"},"Excluded Modules"),(0,n.yg)("p",null,"In this section, you can specify if your project does not use any of the following modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Physics 3D"),(0,n.yg)("li",{parentName:"ul"},"Physics 2D"),(0,n.yg)("li",{parentName:"ul"},"Particle System"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/reflection"},"Reflection")),(0,n.yg)("li",{parentName:"ul"},"Prefab"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/playable/getting-started/supported-features/mecanim"},"Mecanim"))),(0,n.yg)("p",null,"Activating the checkbox will make Runtime Analysis exclude the selected module, resulting in an additional size reduction."),(0,n.yg)("h2",{id:"shader-tab"},"Shader Tab"),(0,n.yg)("h3",{id:"disable-shader-stripping"},"Disable Shader Stripping"),(0,n.yg)("p",null,"While in the ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("strong",{parentName:"em"},"Shader Tab"))," of Runtime Analysis, you will be presented with a ",(0,n.yg)("inlineCode",{parentName:"p"},"Disable Shader Stripping")," checkbox.\nBy activating this checkbox, you will prevent Runtime Analysis from from removing any shader."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-large",src:i(97190).A,width:"2002",height:"538"})),(0,n.yg)("h3",{id:"undoing-shader-variants-exclusions"},"Undoing Shader Variants Exclusions"),(0,n.yg)("p",null,"If you have found that Runtime Analysis has excluded a shader variant that is needed for the build, you can re-include it by using the Shader Tab in the ",(0,n.yg)("em",{parentName:"p"},"Assets")," section of the plugin. Have a look a ",(0,n.yg)("a",{parentName:"p",href:"/docs/playable/optimise-your-builds/optimising-assets/optimising-shaders#runtime-analysisshaders-tab"},"this document")," to see how the Shader Tab works."))}c.isMDXComponent=!0},927:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/RA-open-build-7c7efa9c0780f611590c9298ab712b5d.png"},52240:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/RA-pause-checkbox-5fefb9d1676e20795c886f65b373bcc2.png"},28315:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/RA-reset-590c74bd60f95ede2f2c18d2c5247c1d.png"},32995:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/RA-size-opt-7624243263202b30d53de580502e9ae5.png"},92662:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/RA-start-532b8e6da6e4345a31a86c96170303b6.png"},79032:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/RA-undo-exclude-3e78f7054ce18b3ba675ab623f145625.gif"},50890:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/disable-code-stripping-close-2056f31d0f01ba7e0bc6323bd3dd02d2.png"},97190:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/disable-shader-stripping-close-73811164a3fde230a514222d62070b36.png"},4577:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/runtime-analysis-cab2de71ecd6ef4f5b0caf2f32a43828.png"}}]);