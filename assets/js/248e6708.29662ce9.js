"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[11889],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const i={id:"particles-not-appearing",title:"Particles not appearing",sidebar_label:"Particles not appearing"},l=void 0,o={unversionedId:"playable/common-issues/particles/particles-not-appearing",id:"playable/common-issues/particles/particles-not-appearing",title:"Particles not appearing",description:"This could be due to the particle texture having too much alpha (too dull / faded). In Unity it appears clearly but the conversion to WebGL shows the texture as too faded and almost invisible.",source:"@site/docs/playable/common-issues/particles/particles-not-appearing.md",sourceDirName:"playable/common-issues/particles",slug:"/playable/common-issues/particles/particles-not-appearing",permalink:"/docs/playable/common-issues/particles/particles-not-appearing",draft:!1,tags:[],version:"current",frontMatter:{id:"particles-not-appearing",title:"Particles not appearing",sidebar_label:"Particles not appearing"},sidebar:"gettingStarted",previous:{title:"Lighting causes build time to exceed 510 minutes build time",permalink:"/docs/playable/common-issues/lighting/lighting-causes-build"},next:{title:"Particle rendering black in Luna",permalink:"/docs/playable/common-issues/particles/particle-rendering-black"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.yg)(u,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This could be due to the particle texture having too much alpha (too dull / faded). In Unity it appears clearly but the conversion to WebGL shows the texture as too faded and almost invisible."),(0,n.yg)("p",null,"Alternatively, this could be due to the sub emitter module being used in your particle system, or png-8 compression is being used on a texture with a lot of alpha."),(0,n.yg)("p",null,"The issue could also be occurring if you are using ",(0,n.yg)("inlineCode",{parentName:"p"},"SetSizeOverLifetime"),"."),(0,n.yg)("p",null,"Finally, particles might not appear when they are soft particles. We currently do not offer support soft particles."),(0,n.yg)("p",null,"Possible solutions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If you are using soft particles, please switch to a default material."),(0,n.yg)("li",{parentName:"ul"},"Disable ",(0,n.yg)("inlineCode",{parentName:"li"},"SetSizeOverLifetime")," on the particles that are not displaying."),(0,n.yg)("li",{parentName:"ul"},"Change the material to a non-additive / alpha blended material."),(0,n.yg)("li",{parentName:"ul"},"Check if particles are rendering behind any UI. In this case, increase the render queue in the particle material."),(0,n.yg)("li",{parentName:"ul"},"Disable the sub emitter module on the parent particle system (the one which is trying to emit particles from a child particle system)."),(0,n.yg)("li",{parentName:"ul"},"Adjust the texture to be clearer. This can be done in a package such as photoshop by layering the more of the original image on top of itself. (Example below)")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-medium",src:a(30345).A,width:"2376",height:"1696"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"In the assets -> textures settings in the Luna plugin windows. Set the default texture settings format dropdown to 'default' as opposed to png-8. Or select the specific particle texture which has the issue, and set its dropdown to 'default'. (Example below)")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images-medium",src:a(49627).A,width:"1998",height:"1490"})))}d.isMDXComponent=!0},30345:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/particles-adjustTexture-cc5cf7e3549458638dd1b58cf8e3d858.png"},49627:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/particles-set-default-0c0435b71648a8a1ea465ca60d70d02f.png"}}]);