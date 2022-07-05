"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"heap_analysis_src.StringAnalysis",title:"Class: StringAnalysis",sidebar_label:"StringAnalysis",custom_edit_url:null},s=void 0,l={unversionedId:"api/classes/heap_analysis_src.StringAnalysis",id:"api/classes/heap_analysis_src.StringAnalysis",title:"Class: StringAnalysis",description:"This analysis finds duplicated string instance in JavaScript heap",source:"@site/docs/api/classes/heap_analysis_src.StringAnalysis.md",sourceDirName:"api/classes",slug:"/api/classes/heap_analysis_src.StringAnalysis",permalink:"/docs/api/classes/heap_analysis_src.StringAnalysis",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"heap_analysis_src.StringAnalysis",title:"Class: StringAnalysis",sidebar_label:"StringAnalysis",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ShapeUnboundGrowthAnalysis",permalink:"/docs/api/classes/heap_analysis_src.ShapeUnboundGrowthAnalysis"},next:{title:"IHeapEdge",permalink:"/docs/api/interfaces/core_src.IHeapEdge"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:'<a id="new stringanalysis"></a><strong>new StringAnalysis</strong>()',id:"new-stringanalysis",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="analyzesnapshotfromfile"></a><strong>analyzeSnapshotFromFile</strong>(<code>file</code>)',id:"analyzesnapshotfromfilefile",level:3},{value:'<a id="analyzesnapshotsindirectory"></a><strong>analyzeSnapshotsInDirectory</strong>(<code>directory</code>)',id:"analyzesnapshotsindirectorydirectory",level:3},{value:'<a id="getcommandname"></a><strong>getCommandName</strong>()',id:"getcommandname",level:3},{value:'<a id="getdescription"></a><strong>getDescription</strong>()',id:"getdescription",level:3},{value:'<a id="gettopduplicatedstringsincount"></a><strong>getTopDuplicatedStringsInCount</strong>()',id:"gettopduplicatedstringsincount",level:3},{value:'<a id="run"></a><strong>run</strong>(<code>options?</code>)',id:"runoptions",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This analysis finds duplicated string instance in JavaScript heap\nand rank them based on the duplicated string size and count."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/heap_analysis_src.BaseAnalysis"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseAnalysis"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"StringAnalysis"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"new-stringanalysis"},(0,r.kt)("a",{id:"new stringanalysis"}),(0,r.kt)("strong",{parentName:"h3"},"new StringAnalysis"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"analyzesnapshotfromfilefile"},(0,r.kt)("a",{id:"analyzesnapshotfromfile"}),(0,r.kt)("strong",{parentName:"h3"},"analyzeSnapshotFromFile"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"file"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"li"},"any"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/b6a06f0/packages/heap-analysis/src/BaseAnalysis.ts#L52"},"heap-analysis/src/BaseAnalysis.ts:52"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"analyzesnapshotsindirectorydirectory"},(0,r.kt)("a",{id:"analyzesnapshotsindirectory"}),(0,r.kt)("strong",{parentName:"h3"},"analyzeSnapshotsInDirectory"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"directory"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directory"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"li"},"any"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/b6a06f0/packages/heap-analysis/src/BaseAnalysis.ts#L62"},"heap-analysis/src/BaseAnalysis.ts:62"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcommandname"},(0,r.kt)("a",{id:"getcommandname"}),(0,r.kt)("strong",{parentName:"h3"},"getCommandName"),"()"),(0,r.kt)("p",null,"get CLI command name for this memory analysis;\nuse it with ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab analyze <ANALYSIS_NAME>")," in CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," | command name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/b6a06f0/packages/heap-analysis/src/plugins/StringAnalysis.ts#L124"},"heap-analysis/src/plugins/StringAnalysis.ts:124"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdescription"},(0,r.kt)("a",{id:"getdescription"}),(0,r.kt)("strong",{parentName:"h3"},"getDescription"),"()"),(0,r.kt)("p",null,"get a textual description of the memory analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," | textual description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/b6a06f0/packages/heap-analysis/src/plugins/StringAnalysis.ts#L132"},"heap-analysis/src/plugins/StringAnalysis.ts:132"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettopduplicatedstringsincount"},(0,r.kt)("a",{id:"gettopduplicatedstringsincount"}),(0,r.kt)("strong",{parentName:"h3"},"getTopDuplicatedStringsInCount"),"()"),(0,r.kt)("p",null,"get the top duplicated string in terms of duplicated string count"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"StringRecord"),"[] | an array of the top-duplicated strings' information")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/b6a06f0/packages/heap-analysis/src/plugins/StringAnalysis.ts#L73"},"heap-analysis/src/plugins/StringAnalysis.ts:73"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"runoptions"},(0,r.kt)("a",{id:"run"}),(0,r.kt)("strong",{parentName:"h3"},"run"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"options?"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/heap_analysis_src#heapanalysisoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"HeapAnalysisOptions"))," | ",(0,r.kt)("inlineCode",{parentName:"li"},"pluginUtils.defaultAnalysisArgs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"li"},"any"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/b6a06f0/packages/heap-analysis/src/BaseAnalysis.ts#L45"},"heap-analysis/src/BaseAnalysis.ts:45"))))))}m.isMDXComponent=!0}}]);