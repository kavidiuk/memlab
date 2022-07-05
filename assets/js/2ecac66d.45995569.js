"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const s={id:"heap_analysis_src.DetachedDOMElementAnalysis",title:"Class: DetachedDOMElementAnalysis",sidebar_label:"DetachedDOMElementAnalysis",custom_edit_url:null},r=void 0,i={unversionedId:"api/classes/heap_analysis_src.DetachedDOMElementAnalysis",id:"api/classes/heap_analysis_src.DetachedDOMElementAnalysis",title:"Class: DetachedDOMElementAnalysis",description:"Hierarchy",source:"@site/docs/api/classes/heap_analysis_src.DetachedDOMElementAnalysis.md",sourceDirName:"api/classes",slug:"/api/classes/heap_analysis_src.DetachedDOMElementAnalysis",permalink:"/docs/api/classes/heap_analysis_src.DetachedDOMElementAnalysis",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"heap_analysis_src.DetachedDOMElementAnalysis",title:"Class: DetachedDOMElementAnalysis",sidebar_label:"DetachedDOMElementAnalysis",custom_edit_url:null},sidebar:"sidebar",previous:{title:"CollectionsHoldingStaleAnalysis",permalink:"/docs/api/classes/heap_analysis_src.CollectionsHoldingStaleAnalysis"},next:{title:"GlobalVariableAnalysis",permalink:"/docs/api/classes/heap_analysis_src.GlobalVariableAnalysis"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:'<a id="new detacheddomelementanalysis"></a><strong>new DetachedDOMElementAnalysis</strong>()',id:"new-detacheddomelementanalysis",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="analyzesnapshotfromfile"></a><strong>analyzeSnapshotFromFile</strong>(<code>file</code>)',id:"analyzesnapshotfromfilefile",level:3},{value:'<a id="analyzesnapshotsindirectory"></a><strong>analyzeSnapshotsInDirectory</strong>(<code>directory</code>)',id:"analyzesnapshotsindirectorydirectory",level:3},{value:'<a id="getcommandname"></a><strong>getCommandName</strong>()',id:"getcommandname",level:3},{value:'<a id="getdescription"></a><strong>getDescription</strong>()',id:"getdescription",level:3},{value:'<a id="getdetachedelements"></a><strong>getDetachedElements</strong>()',id:"getdetachedelements",level:3},{value:'<a id="getoptions"></a><strong>getOptions</strong>()',id:"getoptions",level:3},{value:'<a id="process"></a><strong>process</strong>(<code>options</code>)',id:"processoptions",level:3},{value:'<a id="run"></a><strong>run</strong>(<code>options?</code>)',id:"runoptions",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/heap_analysis_src.BaseAnalysis"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseAnalysis"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"DetachedDOMElementAnalysis"))))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"new-detacheddomelementanalysis"},(0,l.kt)("a",{id:"new detacheddomelementanalysis"}),(0,l.kt)("strong",{parentName:"h3"},"new DetachedDOMElementAnalysis"),"()"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"analyzesnapshotfromfilefile"},(0,l.kt)("a",{id:"analyzesnapshotfromfile"}),(0,l.kt)("strong",{parentName:"h3"},"analyzeSnapshotFromFile"),"(",(0,l.kt)("inlineCode",{parentName:"h3"},"file"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"li"},"any"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/BaseAnalysis.ts#L52"},"heap-analysis/src/BaseAnalysis.ts:52"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"analyzesnapshotsindirectorydirectory"},(0,l.kt)("a",{id:"analyzesnapshotsindirectory"}),(0,l.kt)("strong",{parentName:"h3"},"analyzeSnapshotsInDirectory"),"(",(0,l.kt)("inlineCode",{parentName:"h3"},"directory"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"directory"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"li"},"any"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/BaseAnalysis.ts#L62"},"heap-analysis/src/BaseAnalysis.ts:62"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcommandname"},(0,l.kt)("a",{id:"getcommandname"}),(0,l.kt)("strong",{parentName:"h3"},"getCommandName"),"()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts#L20"},"heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts:20"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdescription"},(0,l.kt)("a",{id:"getdescription"}),(0,l.kt)("strong",{parentName:"h3"},"getDescription"),"()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts#L24"},"heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts:24"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdetachedelements"},(0,l.kt)("a",{id:"getdetachedelements"}),(0,l.kt)("strong",{parentName:"h3"},"getDetachedElements"),"()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"IHeapNode"),"[]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts#L34"},"heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts:34"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getoptions"},(0,l.kt)("a",{id:"getoptions"}),(0,l.kt)("strong",{parentName:"h3"},"getOptions"),"()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"[]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts#L28"},"heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts:28"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"processoptions"},(0,l.kt)("a",{id:"process"}),(0,l.kt)("strong",{parentName:"h3"},"process"),"(",(0,l.kt)("inlineCode",{parentName:"h3"},"options"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/modules/heap_analysis_src#heapanalysisoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"HeapAnalysisOptions"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"li"},"void"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts#L38"},"heap-analysis/src/plugins/DetachedDOMElementAnalysis.ts:38"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"runoptions"},(0,l.kt)("a",{id:"run"}),(0,l.kt)("strong",{parentName:"h3"},"run"),"(",(0,l.kt)("inlineCode",{parentName:"h3"},"options?"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/modules/heap_analysis_src#heapanalysisoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"HeapAnalysisOptions"))," | ",(0,l.kt)("inlineCode",{parentName:"li"},"pluginUtils.defaultAnalysisArgs")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"li"},"any"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Source"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/6b6ee10/packages/heap-analysis/src/BaseAnalysis.ts#L45"},"heap-analysis/src/BaseAnalysis.ts:45"))))))}c.isMDXComponent=!0}}]);