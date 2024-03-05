"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[95482],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var i=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,l=function(e,a){if(null==e)return{};var t,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=i.createContext({}),m=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=m(e.components);return i.createElement(s.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},c=i.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(t),c=l,g=u["".concat(s,".").concat(c)]||u[c]||y[c]||n;return t?i.createElement(g,r(r({ref:a},p),{},{components:t})):i.createElement(g,r({ref:a},p))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,r=new Array(n);r[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<n;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},72988:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var i=t(58168),l=(t(96540),t(15680));const n={id:"performance-indicator",title:"Performance Indicator",sidebar_label:"Performance Indicator",description:"Performance Indicator to optimise your playable",keywords:["indicator","performance","tips","optimise","playable","Luna"]},r="Performance Indicator",o={unversionedId:"playable/optimise-your-builds/performance-indicator",id:"playable/optimise-your-builds/performance-indicator",title:"Performance Indicator",description:"Performance Indicator to optimise your playable",source:"@site/docs/playable/optimise-your-builds/performance-indicator.md",sourceDirName:"playable/optimise-your-builds",slug:"/playable/optimise-your-builds/performance-indicator",permalink:"/docs/playable/optimise-your-builds/performance-indicator",draft:!1,tags:[],version:"current",frontMatter:{id:"performance-indicator",title:"Performance Indicator",sidebar_label:"Performance Indicator",description:"Performance Indicator to optimise your playable",keywords:["indicator","performance","tips","optimise","playable","Luna"]},sidebar:"gettingStarted",previous:{title:"FPS Counter",permalink:"/docs/playable/optimise-your-builds/fps-counter"},next:{title:"Overview",permalink:"/docs/playable/playground/overview"}},s={},m=[{value:"General Section",id:"general-section",level:2},{value:"Expected playable performance",id:"expected-playable-performance",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"List of SubSections",id:"list-of-subsections",level:3},{value:"Physics 2D/Physics 3D",id:"physics-2dphysics-3d",level:2},{value:"List of Counters",id:"list-of-counters",level:4},{value:"Particles",id:"particles",level:2},{value:"List of Counters",id:"list-of-counters-1",level:4},{value:"Animator",id:"animator",level:2},{value:"List of Counters",id:"list-of-counters-2",level:4},{value:"Rendering",id:"rendering",level:2},{value:"List of Counters",id:"list-of-counters-3",level:4}],p={toc:m},u="wrapper";function y(e){let{components:a,...n}=e;return(0,l.yg)(u,(0,i.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"performance-indicator"},"Performance Indicator"),(0,l.yg)("h1",{id:"overview"},"Overview"),(0,l.yg)("p",null,"When building your playable experience in Unity, and C#, it is important to keep in mind that the result will be running in HTML5 on a web browser. As such, optimising the performance as much as possible will result in higher-performing user experiences, with better device support and ultimately, ad performance."),(0,l.yg)("p",null,"We've assembled several examples and tips which will help you identify and optimise your C# code for better runtime performance on the Luna engine."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"This tool was created to give an overall view of playable performance and increase developer awareness about it. This tool is not a profiler tool. For detailed performance information please use built-in browser profiling tools."),(0,l.yg)("li",{parentName:"ul"},"The performance tab is hidden by default but shows playable performance to catch performance issues early"),(0,l.yg)("li",{parentName:"ul"},"Frame Breakdown shows details of CPU usage by playable."),(0,l.yg)("li",{parentName:"ul"},"If the subsection takes < 1%, it will be hidden"),(0,l.yg)("li",{parentName:"ul"},"The performance indicator is updated every 2 seconds")),(0,l.yg)("h2",{id:"general-section"},"General Section"),(0,l.yg)("p",null,"Contains basic information about playable performance."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"CPU"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Contains summary information about CPU usage by playable. The tool gives you an overall view of CPU usage. For more detailed information use built-in browser profiling tools."),(0,l.yg)("li",{parentName:"ul"},"Calculates the sum of all CPU load by modules of playable like user code, physics, particles etc."),(0,l.yg)("li",{parentName:"ul"},"High CPU usage may cause a low frame rate on mobile devices, especially on the low end. Use the Frame Breakdown section for more detailed CPU usage info."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"RAM Usage"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total memory usage of playable. Shows how much memory the playable uses while running. Represents the sum of allocated memory by code, loaded textures, loaded meshes etc.",(0,l.yg)("br",{parentName:"li"}),"Not all browsers are supported! Check the supported browsers list here: ",(0,l.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory"},"Performance.memory - Web APIs | MDN")),(0,l.yg)("li",{parentName:"ul"},"High memory allocations will cause garbage collector spikes and as a result frame rate drops or even crashes."),(0,l.yg)("li",{parentName:"ul"},"We recommend a RAM value not higher than 256 MB to support low-end devices. The tool gives you an overall view of memory usage. For more detailed information use the browser profiler."),(0,l.yg)("li",{parentName:"ul"},"To decrease RAM usage:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Simplify your meshes, animations, and other assets."),(0,l.yg)("li",{parentName:"ul"},"Decrease the number of particles."),(0,l.yg)("li",{parentName:"ul"},"Check code for memory leaks and frequent allocations."))),(0,l.yg)("li",{parentName:"ul"},"Performance guides:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/performance-recommendations-for-unity"},"Performance recommendations for Unity - Mixed Reality")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/BestPracticeUnderstandingPerformanceInUnity7.html"},"Unity - Manual: General Optimizations")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/BestPracticeUnderstandingPerformanceInUnity8.html"},"Unity - Manual: Special optimizations")))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Average frame time"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Shows how much time (average) was spent to render one frame of playable. This is an approximate value. For more detailed information use the browser profiler."),(0,l.yg)("li",{parentName:"ul"},"Represents summary execution time of all playable modules (physics, particles, user code, rendering etc)"),(0,l.yg)("li",{parentName:"ul"},"The higher the values - the lower the frame rate")))),(0,l.yg)("h2",{id:"expected-playable-performance"},"Expected playable performance"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Possible values: ",(0,l.yg)("em",{parentName:"p"},"Good"),", ",(0,l.yg)("em",{parentName:"p"},"Fair"),", and ",(0,l.yg)("em",{parentName:"p"},"Poor"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Predicted performance of playable on mobile devices.",(0,l.yg)("br",{parentName:"p"}),"\n","Playables with expected FPS < 15 get a \u201cPoor\u201c score. 15 < FPS < 30 will lead to a \u201cFair\u201c score and anything greater will result in a \u201cGood\u201c score."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Calculation process:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Measure the average frame time of the device you use to test playable."),(0,l.yg)("li",{parentName:"ul"},"Calculate the coefficient using skybox loading times from the actual device and reference device.\nWe determined that the average time to load skybox on Samsung Galaxy S10+ is 2.5 ms. This device is chosen as an \u201caverage\u201c reference device. The same operation takes 0.5 ms on iPhone XS and 15 ms on Xiaomi Redmi 6. Dividing average skybox load time (2.5ms) by measured skybox load time gives a coefficient which says how faster your device is compared to Galaxy S10+"),(0,l.yg)("li",{parentName:"ul"},"Then we multiply our average frame time with the previously calculated coefficient and get the approximate expected frame time on Galaxy S10+, which we convert to FPS."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Rembember: ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("em",{parentName:"strong"},"Performance on PC != performance on mobile device")),". This value is estimated for low end device. You can easily run local builds on your test devices (in one LAN network). More information about this can be found ",(0,l.yg)("a",{parentName:"p",href:"/docs/playable/optimise-your-builds/fps-counter/#how-to-access-your-locally-hosted-develop-build-on-your-mobile-device"},"here"),"."))),(0,l.yg)("h2",{id:"callbacks"},"Callbacks"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"images-large",src:t(82056).A,width:"3584",height:"2166"})),(0,l.yg)("h3",{id:"list-of-subsections"},"List of SubSections"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Awake, Start"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Awake/Start callback execution time for all scripts."),(0,l.yg)("li",{parentName:"ul"},"Summary execution time of Awake/Start methods in playable code."),(0,l.yg)("li",{parentName:"ul"},"High Awake/Start execution times may cause spikes and fps drops."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try to reduce the number of objects executing in ",(0,l.yg)("inlineCode",{parentName:"li"},"Awake")," or ",(0,l.yg)("inlineCode",{parentName:"li"},"Start"),"."),(0,l.yg)("li",{parentName:"ul"},"If you instantiate many objects at the same time try to reduce their number."),(0,l.yg)("li",{parentName:"ul"},"Check your code for heavy operations in Awake and optimise or completely remove awakes from your code."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Update, FixedUpdate, LateUpdate"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Update\\FixedUpdate\\LateUpdate callback execution time for all scripts."),(0,l.yg)("li",{parentName:"ul"},"Summary execution time of Update\\FixedUpdate\\LateUpdate methods in playable code."),(0,l.yg)("li",{parentName:"ul"},"Update\\LateUpdate is called every frame if the MonoBehaviour is enabled. High Update execution times may cause low fps."),(0,l.yg)("li",{parentName:"ul"},"FixedUpdate has the frequency of the physics system. It is called every fixed frame-rate frame. For scenes with huge physics calculations, FixedUpdate may be called multiple times per frame."),(0,l.yg)("li",{parentName:"ul"},"Make sure that there are no allocations inside the Update method ('new' keyword, operations with strings) and other heavy operations. If you use unity API like GetComponent, Find, GetComponentInChildren etc in Update - remove it and use caching. Check other performance-heavy code inside these callbacks and optimise it."),(0,l.yg)("li",{parentName:"ul"},"Performance guides:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/performance-recommendations-for-unity"},"Performance recommendations for Unity - Mixed Reality")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/BestPracticeUnderstandingPerformanceInUnity7.html"},"Unity - Manual: General Optimizations")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/BestPracticeUnderstandingPerformanceInUnity8.html"},"Unity - Manual: Special optimizations"))))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"List of Counters")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},'"FixedUpdate", "Update", "LateUpdate" callbacks'),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"total number of active objects with FixedUpdate callback."),(0,l.yg)("li",{parentName:"ul"},"more objects - more calculations - lower frame rate."),(0,l.yg)("li",{parentName:"ul"},"Try to reduce the number of objects using FixedUpdate.")))),(0,l.yg)("h2",{id:"physics-2dphysics-3d"},"Physics 2D/Physics 3D"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"images-large",src:t(97349).A,width:"3584",height:"2166"}),"\n",(0,l.yg)("img",{alt:"images-large",src:t(41986).A,width:"3584",height:"2166"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"OnCollisionEnter2D/OnCollisionEnter/OnCollisionStay2D/OnCollisionStay/OnCollisionExit2D/OnCollisionExit"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Callback execution time for all scripts."),(0,l.yg)("li",{parentName:"ul"},"Summary execution time of callback methods in playable code."),(0,l.yg)("li",{parentName:"ul"},"Physics is already a huge module on its own."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Remove heavy operations like ",(0,l.yg)("inlineCode",{parentName:"li"},"GetComponent")," or ",(0,l.yg)("inlineCode",{parentName:"li"},"Find")," from this callback."),(0,l.yg)("li",{parentName:"ul"},"Check methods for allocations and remove them."),(0,l.yg)("li",{parentName:"ul"},"Reduce the count of callbacks."),(0,l.yg)("li",{parentName:"ul"},"Disable rigidbody components when you don't need collision detection."),(0,l.yg)("li",{parentName:"ul"},"Don't use physics at all."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"OnTriggerEnter2D/OnTriggerEnter/OnTriggerStay2D/OnTriggerStay/OnTriggerExit2D/OnTriggerExit"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Callback execution time for all scripts."),(0,l.yg)("li",{parentName:"ul"},"Summary execution time of callbacks in playable code."),(0,l.yg)("li",{parentName:"ul"},"Triggers are more simple that colliders, but non-optimized code inside callbacks may affect performance."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Simulation"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"if this section has a huge execution time, think about removing physics from playable at all."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Joints"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The average time spent on joints calculations."),(0,l.yg)("li",{parentName:"ul"},"A Joint component connects a Rigidbody to another Rigidbody or a fixed point in space. Joints apply forces that move rigid bodies and limits restrict that movement. Joints simulation is complex and a large amount of joints will cause a performance drop."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Reduce number of joints. Disable rigidbodies when you doesnt need joints.")))))),(0,l.yg)("h4",{id:"list-of-counters"},"List of Counters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Rigidbodies: total number of active Rigidbodies2D"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"total count of active Rigidbodies2D on scene."),(0,l.yg)("li",{parentName:"ul"},"Rigidbodies are simulated objects and their simulation process (especially with continuous collision detection) might influence performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Reduce the number of rigidbodies."),(0,l.yg)("li",{parentName:"ul"},"Enable rigidbody component only when you need this."),(0,l.yg)("li",{parentName:"ul"},"Switch collision detection to discrete."),(0,l.yg)("li",{parentName:"ul"},"Try not to use physics at all."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Colliders:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"total number active of Colliders2D."),(0,l.yg)("li",{parentName:"ul"},"huge number of active colliders (especially mesh and convex) results in heavier physics calculations."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Simplify colliders."),(0,l.yg)("li",{parentName:"ul"},"Try to avoid using mesh colliders: ",(0,l.yg)("br",null),"\nBased on Mesh, the Mesh Collider creates a collider for the GameObject. The more complex the mesh is, the slower will the collision detection calculations be. Also, if you modify mesh geometry that is used for colliders, the physics engine has to rebuild the collider every time you change the mesh. In most cases, primitive colliders like a box collider or a sphere collider are enough and there is no need to use mesh colliders."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Joints"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total number of active joints."),(0,l.yg)("li",{parentName:"ul"},"A Joint component connects a Rigidbody to another Rigidbody or a fixed point in space. Joints apply forces that move rigid bodies and limits restrict that movement. Joints simulation is complex and a large amount of joints will cause a performance drop."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Reduce number of joints."),(0,l.yg)("li",{parentName:"ul"},"Try not to use joints at all."),(0,l.yg)("li",{parentName:"ul"},"Disable joints and Rigidbodies that you don't need.")))))),(0,l.yg)("h2",{id:"particles"},"Particles"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"images-large",src:t(32241).A,width:"3584",height:"2166"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Renderer"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The time spent by the active particle systems to prepare particles for rendering. This module also create instances and do all essential calculations for this on CPU. It then transfer data to GPU."),(0,l.yg)("li",{parentName:"ul"},"Huge number of particles will increase startup time."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The most simple way is to reduce particles or particle systems count."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"ColorBySpeed, ColorOverLifetime"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"This module uses color gradient and do calculations for every particle."),(0,l.yg)("li",{parentName:"ul"},"A big number of gradient colors may increase calculation complexity."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"ForceOverLifetime, InheritVelocity, LimitVelocityOverLifetime, RotationBySpeed, RotationOverLifetime, SizeBySpeed, SizeOverLifetime, VelocityOverLifetime"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"This module uses MinMaxCurves and do calculations for every particle."),(0,l.yg)("li",{parentName:"ul"},"Complex curves may increase calculation complexity."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use constant values instead of curves or simplify curve."),(0,l.yg)("li",{parentName:"ul"},"Decrease number of particles."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Noise"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Uses MinMaxCurves and the perlin noise function."),(0,l.yg)("li",{parentName:"ul"},"Does calculations for every particle."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use constant values instead of curves or simplify curve."),(0,l.yg)("li",{parentName:"ul"},"Decrease number of particles."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TextureSheetAnimation"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Caclulates the particle sheet animation or sprites array for every particle."),(0,l.yg)("li",{parentName:"ul"},"May use MinMaxCurves which also increases calculation complexity."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Do not use complex animation sheets, decrease the number of sprites in case you use Sprites mode."),(0,l.yg)("li",{parentName:"ul"},"Decrease number of particles."),(0,l.yg)("li",{parentName:"ul"},"Use constant values instead of curves or simplify the curves."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Shape"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Generates translation, rotation and direction for a particle basing on selected shape."),(0,l.yg)("li",{parentName:"ul"},"executes for every particle."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"decrease particles count."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Emitter"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Calculates the number of particles that should be spawned. Also may spawn particles according to MinMaxCurve."),(0,l.yg)("li",{parentName:"ul"},"Spawning many particles will increase the calculation times of all particle system modules."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Control particles spawning using ParticleSystem.main.maxParticles.decrease burst values. if you use curves, try to simplify them or use constant vlues"))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Simulation"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Most of the modules uses ",(0,l.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/ScriptReference/ParticleSystem.MinMaxCurve.html"},"MinMaxCurve"),". For complex curves evaluation process may be slow. Try to avoid curves and use constant values instead.")))),(0,l.yg)("h4",{id:"list-of-counters-1"},"List of Counters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Active particle systems:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total count of active particle systems."),(0,l.yg)("li",{parentName:"ul"},"Number of active particle systems in scene."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try to reduce the number of particle systems."),(0,l.yg)("li",{parentName:"ul"},"Try to disable particle systems when they unneeded."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Active particles:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total count of alive particles."),(0,l.yg)("li",{parentName:"ul"},"Number of alive particles in scene."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"reduce cont of alive particles.")))))),(0,l.yg)("h2",{id:"animator"},"Animator"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"images-large",src:t(98183).A,width:"3584",height:"2166"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Animation"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total execution time of all active animation components on scene."),(0,l.yg)("li",{parentName:"ul"},"Complex animations with big count o keyframes may affect performance."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Animation\\Animator Events"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Execution time of code that is subscribed to animation clip events."),(0,l.yg)("li",{parentName:"ul"},"Huge operations inside callbacks may cause performance spikes."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Remove allocations and huge operations from callback."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/MecanimPeformanceandOptimization.html"},"Unity - Manual: Performance and optimization"),"."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Animator"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total execution time of all active animators."),(0,l.yg)("li",{parentName:"ul"},"Animator is complex system. It contains logic that blends animations between each other, blends layers, interpolates animation keys. Every animation clip consists of animated parameters of a component which contains animation keys. The keys are interpolated between each other by a configurable curve. A high number of keys will create a more complex curve and subsequently, calculating interpolation gets more expensive.")))),(0,l.yg)("h4",{id:"list-of-counters-2"},"List of Counters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Active animators:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Number of total active animators."),(0,l.yg)("li",{parentName:"ul"},"A huge number of animators working at the same time may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Remove unneeded animators, animation assets or make animations more simple."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Active animator layers:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total number of layers of active animators."),(0,l.yg)("li",{parentName:"ul"},"Blending animation layers inside animator is quite complex and may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"avoid using animators with more than one layer."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Active blend states:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total number of bend states currently performing."),(0,l.yg)("li",{parentName:"ul"},"Blending animations together is a complex process. Blending a lot of animations at the same time may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Merge animations (if possible)."),(0,l.yg)("li",{parentName:"ul"},"Decrase number of keyframes."),(0,l.yg)("li",{parentName:"ul"},"Remove or deactivate unneeded animators."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Active components:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total number of active animation components ( not animation assets )."),(0,l.yg)("li",{parentName:"ul"},"A huge amount of animation components working at the same time may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try remove unneeded animation components and make the animations more simple."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Animated parameters:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total number of parameters used current playing animations."),(0,l.yg)("li",{parentName:"ul"},"When the parameters changes, the more time it needs."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try and remove unneeded parameters from the animation."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Keyframes:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total count of animation curve keys of the current animated parameters."),(0,l.yg)("li",{parentName:"ul"},"Interpolation between keys may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try to reduce the number of keys inside the animation assets.")))))),(0,l.yg)("h2",{id:"rendering"},"Rendering"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"images-large",src:t(52300).A,width:"3584",height:"2166"})),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html"},"Unity - Manual: Graphics performance fundamentals")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Depth"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Total depth rendering time: this consists of the time that Luna spends when rendering all depth passes."),(0,l.yg)("li",{parentName:"ul"},"Depth rendering is an additional pass. A high number of passes may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Reduce the number of shaders that are using depth."),(0,l.yg)("li",{parentName:"ul"},"Reduce the number of cameras that have depth only clear flags."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"UI"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total UI rendering time: this consists of time that Luna spends on rendering UI canvases."),(0,l.yg)("li",{parentName:"ul"},"A huge number of UI elements will affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try to reduce the number of UI elements."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Skin And Morph"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The totals skinned meshes and blend shapes rendering time: this is the time that Luna took on rendering skinned meshes and blend shapes."),(0,l.yg)("li",{parentName:"ul"},"Skinned mesh preparation contains calculations for every bone."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Simplify skinned mesh or remove unneeded bones."),(0,l.yg)("li",{parentName:"ul"},"Reduce number of skinned meshes (blend shapes)."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Shadows"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total real-time shadows rendering time: this consists of the time that Luna takes when rendering real time shadow cascades."),(0,l.yg)("li",{parentName:"ul"},"Rendering shadows is complex operation: the more objects cast shadows, the more time will be spent on shadows calculations."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Do not use real time shadows with static objects, bake it."),(0,l.yg)("li",{parentName:"ul"},"Do not use real time shadows at all."),(0,l.yg)("li",{parentName:"ul"},"Decrease shadows quality."),(0,l.yg)("li",{parentName:"ul"},"Reduce number of objects that cast shadows.")))))),(0,l.yg)("h4",{id:"list-of-counters-3"},"List of Counters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"UI Interactive Templates:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total count of rendered UI elements (like buttons, text, etc)."),(0,l.yg)("li",{parentName:"ul"},"This increases amount of total vertices and triangles that affects rendering performance."),(0,l.yg)("li",{parentName:"ul"},"To optmise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Make UI more simple."),(0,l.yg)("li",{parentName:"ul"},"Remove unneeded elements."),(0,l.yg)("li",{parentName:"ul"},"Combine UI elements where possible."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Draw Calls:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The number of calls to the GPU to draw objects. This consists of how many objects are drawn to the screen."),(0,l.yg)("li",{parentName:"ul"},"A huge the number may affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try to reduce the geometry count."),(0,l.yg)("li",{parentName:"ul"},"Bake static geometry into one mesh manually."),(0,l.yg)("li",{parentName:"ul"},"Reduce number of passes in shaders."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Vertices:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total number of visible vertices rendered this frame. This is the number of vertices uploaded to GPU."),(0,l.yg)("li",{parentName:"ul"},"Mobile devices have GPU memory restrictions, so geometry with huge amount of vertices may not be rendered at all. Also, the GPU performs operations with vertices in vertex shader. A high number of vertices may cause low performance."),(0,l.yg)("li",{parentName:"ul"},"To optmise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Simplify the geometry or remove unneeded geometry from scene."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Triangles:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total visible triangles rendered this frame. This is the number of triangles uploaded to the GPU."),(0,l.yg)("li",{parentName:"ul"},"Mobile devices have GPU memory restrictions, so geometry with an high amount of triangles may be rendered incorrectly and cause low performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Simplify the geometry or remove unneeded geometry from scene."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Visible skinned meshes:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The number of skinned meshes and blend shapes visible by any camera."),(0,l.yg)("li",{parentName:"ul"},"Many skinned meshes with a high bones number will affect performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Try to reduce the number of skinned meshes and blend shapes."),(0,l.yg)("li",{parentName:"ul"},"Make skeleton simpler."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Material switches:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The number of material switches while rendering current frame. Changing render state on GPU is an additional operation that also takes time. A high number of geometry that switch to a different materials may affect frame rate."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Render as many geometry as you can using one material."),(0,l.yg)("li",{parentName:"ul"},"Use material palettes or bake textures into atlases."))))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Shadow casters:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"The total number of rendered shadow casters."),(0,l.yg)("li",{parentName:"ul"},"A high number of shadow caster can affect the performance."),(0,l.yg)("li",{parentName:"ul"},"To optimise:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Reduce the number of geometry that casts shadows."),(0,l.yg)("li",{parentName:"ul"},"Decrease shadows quality.")))))))}y.isMDXComponent=!0},98183:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/perf-indicator-animations-9810eb0a3151923d8f1b90e007b5ecd1.png"},82056:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/perf-indicator-callbacks-f5daf3d7d61a7ef8f8d22881f9abe3e6.png"},32241:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/perf-indicator-particles-e3734f0e49520340c02bca0268ad41ee.png"},97349:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/perf-indicator-physics2d-cee74698456376a72bff8fbe2a4f3578.png"},41986:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/perf-indicator-physics3d-434b134f8b45a40a5554b6924e11767b.png"},52300:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/perf-indicator-rendering-6387e3eb50069a76a6d3d5f676ce5f78.png"}}]);