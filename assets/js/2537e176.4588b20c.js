"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[14135],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>v});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=p(t),c=a,v=y["".concat(i,".").concat(c)]||y[c]||u[c]||o;return t?r.createElement(v,s(s({ref:n},g),{},{components:t})):r.createElement(v,s({ref:n},g))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[y]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},13201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={id:"events-overview",title:"Events - Overview",sidebar_label:"Events Overview",description:"Events Overview - How to generate a report, what kind of data you can see and examples.",keywords:["events","report","playable","luna"]},s=void 0,l={unversionedId:"playable/insights/advanced/events-overview",id:"playable/insights/advanced/events-overview",title:"Events - Overview",description:"Events Overview - How to generate a report, what kind of data you can see and examples.",source:"@site/docs/playable/insights/advanced/events-overview.md",sourceDirName:"playable/insights/advanced",slug:"/playable/insights/advanced/events-overview",permalink:"/docs/playable/insights/advanced/events-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"events-overview",title:"Events - Overview",sidebar_label:"Events Overview",description:"Events Overview - How to generate a report, what kind of data you can see and examples.",keywords:["events","report","playable","luna"]},sidebar:"gettingStarted",previous:{title:"User Journey",permalink:"/docs/playable/insights/user-experience/user-journey"},next:{title:"Events Funnel",permalink:"/docs/playable/insights/advanced/events-funnel"}},i={},p=[{value:"Generate a report",id:"generate-a-report",level:2},{value:"Examples: What kind of data can I see?",id:"examples-what-kind-of-data-can-i-see",level:2},{value:"Engagement rate by country",id:"engagement-rate-by-country",level:3},{value:"Percentage of custom events per impressions, by OS",id:"percentage-of-custom-events-per-impressions-by-os",level:3}],g={toc:p},y="wrapper";function u(e){let{components:n,...o}=e;return(0,a.yg)(y,(0,r.A)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("div",{className:"callout info"},"The Events Overview report provides you with data and visualisations from the playable analytics events within your playables. Learn more about ",(0,a.yg)("a",{href:"../../playable-setup/analytics/standard-events"},"standard")," and ",(0,a.yg)("a",{href:"../../playable-setup/analytics/custom-events"},"custom")," events. "),(0,a.yg)("p",null,"The Events Overview report allows you to quickly and easily view event data from your playable broken down by a number of dimensions."),(0,a.yg)("p",null,"You can build customised reports based on the type of information you are interesting in, using our ",(0,a.yg)("strong",{parentName:"p"},"report builder")," functionality."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-medium",src:t(79778).A,width:"1625",height:"1037"})," ",(0,a.yg)("br",null)),(0,a.yg)("h2",{id:"generate-a-report"},"Generate a report"),(0,a.yg)("p",null,"Any report that you generate in the Events Overview page is created using our ",(0,a.yg)("strong",{parentName:"p"},"report builder")," and will follow the same structure. The top level filters will be applied to any report that you generate."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Event")," - select which event you are interested in analysing from the drop down menu.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"View")," - how you would like to see this event, using one of the following: ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"a.")," number of events ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"b.")," number of sessions ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"c.")," % of sessions ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"d.")," % of impressions ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"e.")," sum of parameter ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"f.")," max of parameter ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"g.")," min of parameter ",(0,a.yg)("br",null))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Grouping")," - the dimension by which you would like to slice the data: ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"a.")," nothing ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"b.")," ad network ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"c.")," os name ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"d.")," country ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"e.")," version ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"d.")," locale ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"d.")," event parameter ",(0,a.yg)("br",null)))),(0,a.yg)("p",null,"You can also make use of the filters which be applied to any set of data you wish to visualise."),(0,a.yg)("h2",{id:"examples-what-kind-of-data-can-i-see"},"Examples: What kind of data can I see?"),(0,a.yg)("p",null,"By using the ",(0,a.yg)("strong",{parentName:"p"},"report builder"),", you can fully explore your data to be able to answer questions about your playable performance."),(0,a.yg)("h3",{id:"engagement-rate-by-country"},"Engagement rate by country"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Event"),": First Interaction ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"View"),": % of impressions ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Grouping"),": country ",(0,a.yg)("br",null)),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-medium",src:t(2196).A,width:"1625",height:"1037"})," ",(0,a.yg)("br",null)),(0,a.yg)("h3",{id:"percentage-of-custom-events-per-impressions-by-os"},"Percentage of custom events per impressions, by OS"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Event"),": Custom Event: Level Won, Custom Event: Level Lost ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"View"),": % of impressions ",(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Grouping"),": os ",(0,a.yg)("br",null)),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"images-medium",src:t(74142).A,width:"1625",height:"1037"})," ",(0,a.yg)("br",null)))}u.isMDXComponent=!0},2196:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/events-overview-country-f81a50ef68dd2524769bb01d307a01f1.png"},74142:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/events-overview-custom-os-6879821d00c684f644cb6283f391891b.png"},79778:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/events-overview-version-f11d0a64b67d528fef809eff90a7aa93.png"}}]);