"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[29503],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const i={id:"setup",title:"Setup Attribution in Luna Creative Suite",sidebar_label:"Creative Suite Setup",description:"Setup install tracking in Luna Creative Suite",keywords:["attribution","setup","playable","luna"]},o=void 0,l={unversionedId:"playable/attribution/setup",id:"playable/attribution/setup",title:"Setup Attribution in Luna Creative Suite",description:"Setup install tracking in Luna Creative Suite",source:"@site/docs/playable/attribution/setup.md",sourceDirName:"playable/attribution",slug:"/playable/attribution/setup",permalink:"/docs/playable/attribution/setup",draft:!1,tags:[],version:"current",frontMatter:{id:"setup",title:"Setup Attribution in Luna Creative Suite",sidebar_label:"Creative Suite Setup",description:"Setup install tracking in Luna Creative Suite",keywords:["attribution","setup","playable","luna"]},sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/docs/playable/attribution/overview"},next:{title:"Adjust Setup",permalink:"/docs/playable/attribution/adjust"}},s={},p=[],u={toc:p},c="wrapper";function g(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,n.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In order to track install events in Luna Creative Suite, you can follow this setup guide. At a high level, you will need to complete the following items to enable your playable app to receive events."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add your app store URLs"),(0,r.yg)("li",{parentName:"ul"},"Select your attribution provider"),(0,r.yg)("li",{parentName:"ul"},'Configure the "Ignored concepts" which tells Luna which concepts not to match'),(0,r.yg)("li",{parentName:"ul"},"Complete the concept name matching for each playable creative")),(0,r.yg)("div",{className:"callout warning"},"When setting up attribution, if you ignore a concept it will ignore it at the bundle ID level and therefore be ignored in any app with the same bundle ID. Be sure to match your concepts, and dont ignore concepts which are used in another playable app."),(0,r.yg)("p",null,"Please note that before following the steps below, you will need to follow the steps provided for your attribution provider."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"adjust"},"Adjust Setup")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"appsflyer"},"Appsflyer")),(0,r.yg)("li",{parentName:"ul"},"Singular (coming soon)")),(0,r.yg)("hr",null),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"In Luna Creative Suite, navigate to the relevant app and then Settings -> General.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(44960).A,width:"2909",height:"1770"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Enter the Apple and Google Play app store URLs for the app. Please note, if you are using multiple app store URLs within the same playable app (i.e. a Chinese App Store) then you should enter the default URL here, and use the creative-level URL in the table below. By default, all creatives inherit the global URL, unless overwritten.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(19213).A,width:"1569",height:"1157"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"When you enter a new URL, the status will be marked as pending, and awaiting approval. This is to ensure that apps are not claimed by incorrect accounts. Once approved, the URL status will change to show a green check mark.")),(0,r.yg)("div",{className:"callout info"},"It can take up to 24 hours for the approval status to change. If you are experience longer wait times, please reach out to your Luna representative. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(29417).A,width:"1569",height:"1157"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Choose your attribution provider from the drop down.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(26825).A,width:"1569",height:"1157"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("strong",{parentName:"p"},"Ignored Concepts")," menu allows you to let Luna know which concepts on each ad network are ",(0,r.yg)("strong",{parentName:"p"},"not")," relevant for matching."),(0,r.yg)("p",{parentName:"li"},"For example, you will often use a campaign-level attribution URL, and therefore be sending install events to Luna for concepts which aren't live on the platform i.e. video ads. In order to improve the matching accuracy and remove this data, you can use this menu to ignore certain concepts."))),(0,r.yg)("div",{className:"callout warning"},"When setting up attribution, if you ignore a concept it will ignore it at the bundle ID level and therefore be ignored in any app with the same bundle ID. Be sure to match your concepts, and dont ignore concepts which are used in another playable app."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(65249).A,width:"1569",height:"1157"})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"In order to start the matching, you will now need to assign concept names from your attribution post backs, to the playable creative in Luna. To do this, a drop down menu is provided in the creative settings table.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(80857).A,width:"1569",height:"1157"})),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Hit ",(0,r.yg)("strong",{parentName:"p"},"Save"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once you have completed all the steps above, you will now be shown the number of unmatched events assigned to the approved application URLs. In order to try matching with the new saved settings, you can use this ",(0,r.yg)("strong",{parentName:"p"},"Retry events")," functionality."))),(0,r.yg)("div",{className:"callout warning"},"Once an install has been attributed to a Luna creative, it cannot be move, so ensure your settings are correct before attempting to match.  "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"images-large",src:a(96773).A,width:"1569",height:"1157"})),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"You're done!")))}g.isMDXComponent=!0},29417:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-approved-f8c9e27280287e689f4681caca407ad0.png"},65249:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-ignore-c75d1ea6c45f8c2eac4ac994223fe4de.png"},80857:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-matching-97491ced39c4a5ddb8d5d4d0de0b254c.png"},96773:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-run-match-2e48c1c72edd951baad69bff4759bdc9.png"},26825:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-url-adjust-801de711d7cf104bfdb9e4e1f9406e57.png"},19213:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-url-89ff128246b660ccee863959ce7ec1a6.png"},44960:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/app-settings-99c2c54631c564c0147038d388188788.png"}}]);