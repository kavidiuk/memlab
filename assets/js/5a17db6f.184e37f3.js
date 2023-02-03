"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[8201],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(t),y=s,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return t?n.createElement(d,i(i({ref:a},c),{},{components:t})):n.createElement(d,i({ref:a},c))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,i=new Array(l);i[0]=y;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[m]="string"==typeof e?e:s,i[1]=r;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7818:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));const l={id:"heap_analysis_src.ObjectSizeAnalysis",title:"Class: ObjectSizeAnalysis",sidebar_label:"ObjectSizeAnalysis",custom_edit_url:null},i=void 0,r={unversionedId:"api/classes/heap_analysis_src.ObjectSizeAnalysis",id:"api/classes/heap_analysis_src.ObjectSizeAnalysis",title:"Class: ObjectSizeAnalysis",description:"Hierarchy",source:"@site/docs/api/classes/heap_analysis_src.ObjectSizeAnalysis.md",sourceDirName:"api/classes",slug:"/api/classes/heap_analysis_src.ObjectSizeAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ObjectSizeAnalysis",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"heap_analysis_src.ObjectSizeAnalysis",title:"Class: ObjectSizeAnalysis",sidebar_label:"ObjectSizeAnalysis",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ObjectShapeAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ObjectShapeAnalysis"},next:{title:"ObjectUnboundGrowthAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.ObjectUnboundGrowthAnalysis"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:'<a id="new objectsizeanalysis"></a><strong>new ObjectSizeAnalysis</strong>()',id:"new-objectsizeanalysis",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="analyzesnapshotfromfile"></a><strong>analyzeSnapshotFromFile</strong>(<code>file</code>, <code>options?</code>)',id:"analyzesnapshotfromfilefile-options",level:3},{value:'<a id="getcommandname"></a><strong>getCommandName</strong>()',id:"getcommandname",level:3}],c={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,s.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/memlab/docs/api/classes/heap_analysis_src.BaseAnalysis"},(0,s.kt)("inlineCode",{parentName:"a"},"BaseAnalysis"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ObjectSizeAnalysis"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"new-objectsizeanalysis"},(0,s.kt)("a",{id:"new objectsizeanalysis"}),(0,s.kt)("strong",{parentName:"h3"},"new ObjectSizeAnalysis"),"()"),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"analyzesnapshotfromfilefile-options"},(0,s.kt)("a",{id:"analyzesnapshotfromfile"}),(0,s.kt)("strong",{parentName:"h3"},"analyzeSnapshotFromFile"),"(",(0,s.kt)("inlineCode",{parentName:"h3"},"file"),", ",(0,s.kt)("inlineCode",{parentName:"h3"},"options?"),")"),(0,s.kt)("p",null,"Run heap analysis for a single heap snapshot file"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Parameters"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"file"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," | the absolute path of a ",(0,s.kt)("inlineCode",{parentName:"li"},".heapsnapshot")," file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,s.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#runheapanalysisoptions"},(0,s.kt)("inlineCode",{parentName:"a"},"RunHeapAnalysisOptions"))," | optional configuration for the heap analysis run"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Returns"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,s.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#analyzesnapshotresult"},(0,s.kt)("inlineCode",{parentName:"a"},"AnalyzeSnapshotResult")),">"," | this API returns ",(0,s.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#analyzesnapshotresult"},"AnalyzeSnapshotResult"),", which contains\nthe logging file of analysis console output. Alternatively, to get more\nstructured analysis results, check out the documentation of the hosting\nheap analysis class and call the analysis-specific API to get results\nafter calling this method."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Example"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new StringAnalysis();\n// analysis console output is saved in result.analysisOutputFile\nconst result = await analysis.analyzeSnapshotFromFile(snapshotFile);\n// query analysis-specific and structured results\nconst stringPatterns = analysis.getTopDuplicatedStringsInCount();\n")),(0,s.kt)("p",null,"Additionally, you can specify a working directory to where\nthe intermediate, logging, and final output files will be dumped:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new StringAnalysis();\n// analysis console output is saved in result.analysisOutputFile\n// which is inside the specified working directory\nconst result = await analysis.analyzeSnapshotFromFile(snapshotFile, {\n  // if the specified directory doesn't exist, memlab will create it\n  workDir: '/tmp/your/work/dir',\n});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Source"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/0ac360d/packages/heap-analysis/src/BaseAnalysis.ts#L95"},"heap-analysis/src/BaseAnalysis.ts:95"))))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getcommandname"},(0,s.kt)("a",{id:"getcommandname"}),(0,s.kt)("strong",{parentName:"h3"},"getCommandName"),"()"),(0,s.kt)("p",null,"Get the name of the heap analysis, which is also used to reference\nthe analysis in memlab command-line tool."),(0,s.kt)("p",null,"The following terminal command will initiate with this analysis:\n",(0,s.kt)("inlineCode",{parentName:"p"},"memlab analyze <ANALYSIS_NAME>")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Returns"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," | the name of the analysis"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Examples"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const analysis = new YourAnalysis();\nconst name = analysis.getCommandName();\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Source"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/0ac360d/packages/heap-analysis/src/plugins/ObjectSizeAnalysis.ts#L19"},"heap-analysis/src/plugins/ObjectSizeAnalysis.ts:19"))))))}u.isMDXComponent=!0}}]);