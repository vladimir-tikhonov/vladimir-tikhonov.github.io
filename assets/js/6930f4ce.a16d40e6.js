"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[56115],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?o.createElement(y,r(r({ref:t},u),{},{components:n})):o.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(58168),i=(n(96540),n(15680));const a={id:"code-solution",title:"Visual Studio Solution File",sidebar_label:"VS Solution",description:"Opening & using Luna's separate VS solution, as well as the reasoning behind its implementation.",keywords:["vs","solution","playable","luna"]},r=void 0,l={unversionedId:"playable/code/code-solution",id:"playable/code/code-solution",title:"Visual Studio Solution File",description:"Opening & using Luna's separate VS solution, as well as the reasoning behind its implementation.",source:"@site/docs/playable/code/code-solution.md",sourceDirName:"playable/code",slug:"/playable/code/code-solution",permalink:"/docs/playable/code/code-solution",draft:!1,tags:[],version:"current",frontMatter:{id:"code-solution",title:"Visual Studio Solution File",sidebar_label:"VS Solution",description:"Opening & using Luna's separate VS solution, as well as the reasoning behind its implementation.",keywords:["vs","solution","playable","luna"]},sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/docs/playable/code/overview"},next:{title:"Excluding C# code",permalink:"/docs/playable/code/code-excludes"}},s={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Suggested workflow",id:"suggested-workflow",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,o.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"motivation"},"Motivation"),(0,i.yg)("p",null,"A crucial part of Luna export process is compiling project scripts written in C# into JavaScript. In order to minimize changes required to the original codebase and smoothen developers' experience, Luna contains a set of .NET libraries that are compatible with ",(0,i.yg)("inlineCode",{parentName:"p"},"UnityEngine.dll"),' on the API level. That means your code can invoke functions, read constants and values and do other things without changes as if they were invoked against "real" ',(0,i.yg)("inlineCode",{parentName:"p"},"UnityEngine.dll"),"."),(0,i.yg)("p",null,"However, Luna is not a 100% replicate of Unity Engine for multiple reasons: performance, availability of certain APIs on the Web platform, obsolescence of some parts of the engine and so on. That renders a possibility of the code failing to compile against Luna's version of Unity runtime."),(0,i.yg)("p",null,"In most cases it is very easy to work around specific missing APIs by replacing them with available alternatives or even simply disabling parts of the code that aren't critical for the final product. This, however, requires manual intervention and Luna is doing its best to make this process as approachable as possible."),(0,i.yg)("h2",{id:"suggested-workflow"},"Suggested workflow"),(0,i.yg)("p",null,"In order to debug the compilation step and keep developers in the environment they are comfortable working in, Luna generates a separate solution file configured with all relevant C# files from the project."),(0,i.yg)("p",null,"Developers can then open that solution file using their IDE of choice should compilation fail."),(0,i.yg)("p",null,"When you encounter a compilation error, you will be prompted by a popup:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"luna-ui-code",src:n(6113).A,width:"1500",height:"400"})),(0,i.yg)("p",null,'Hitting "Show Report" button will open the ',(0,i.yg)("a",{parentName:"p",href:"project-diagnostics"},"Project Diagnostics"),", similarly to Unity's console. Here you will find a breakdown of the compilation errors."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"luna-ui-code",src:n(50472).A,width:"2224",height:"1720"})),(0,i.yg)("p",null,"At any time from here, navigate to the Code tab and hit the ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Open Luna Solution"))," button. This will launch your default IDE with the Luna solution loaded."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"luna-ui-code",src:n(2226).A,width:"2224",height:"1720"})),(0,i.yg)("p",null,"The solution is set up in such a way that the following always holds true:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"All C# scripts are ",(0,i.yg)("strong",{parentName:"li"},"linked")," into the solution. You can change them here without the need to propagate the changes back to Unity's files."),(0,i.yg)("li",{parentName:"ul"},'Instead of "original" ',(0,i.yg)("inlineCode",{parentName:"li"},"UnityEngine.dll"),", ",(0,i.yg)("strong",{parentName:"li"},"Luna's version is used"),". That means you can trigger a build from the IDE to see if the errors go away, code completion also works out of the box and so on.")),(0,i.yg)("p",null,"Upon opening a solution and triggering a rebuild, developers are presented with the exact errors that stop Luna from compiling the project:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"luna-ui-code",src:n(22941).A,width:"1433",height:"755"})),(0,i.yg)("p",null,"Code completion hints are also available automatically:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"images-medium",src:n(16668).A,width:"548",height:"130"})),(0,i.yg)("p",null,"At Luna, we have found this setup extremely convenient to iterate on the code and make fixes whenever required."))}d.isMDXComponent=!0},16668:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/luna-ui-code-completion-021830ee036f9d21e81d1f7e03f8bc52.png"},6113:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/luna-ui-compilation-failed-a6c47cc3e2c880690eb9d17441baf150.png"},22941:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/luna-ui-vs-solution-a8aace786b4952a546575e41a1f9f66d.png"},50472:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/code-diagnostics-open-solution-4ec0190bebd2c7f1b8986abe3e371ea3.png"},2226:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/open-luna-solution-5f63dabf9a655d5e2896b43645d51dbd.png"}}]);