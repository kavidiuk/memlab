"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[7737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={id:"integration-and-file-structure"},o="Set up Continuous Test",i={unversionedId:"guides/integration-and-file-structure",id:"guides/integration-and-file-structure",title:"Set up Continuous Test",description:"Setting up a continuous testing service that finds web memory leaks with memlab",source:"@site/docs/guides/04-continuous-test.md",sourceDirName:"guides",slug:"/guides/integration-and-file-structure",permalink:"/memlab/docs/guides/integration-and-file-structure",draft:!1,editUrl:"https://github.com/facebook/memlab/blob/main/website/docs/guides/04-continuous-test.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"integration-and-file-structure"},sidebar:"sidebar",previous:{title:"Find Memory Leaks Not Reported",permalink:"/memlab/docs/guides/guides-find-leaks"},next:{title:"How memlab Works",permalink:"/memlab/docs/how-memlab-works"}},l={},c=[{value:"Write Test Scenarios",id:"write-test-scenarios",level:2},{value:"Run Tests",id:"run-tests",level:2},{value:"Collect Results",id:"collect-results",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-continuous-test"},"Set up Continuous Test"),(0,a.kt)("p",null,"Setting up a continuous testing service that finds web memory leaks with memlab\nconsists of a few parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prepare ",(0,a.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IScenario"},"test scenarios")," that\ncover key interactions of the web app under test."),(0,a.kt)("li",{parentName:"ol"},"Trigger test runs either through\n",(0,a.kt)("a",{parentName:"li",href:"/memlab/docs/cli/CLI-commands#memlab-run"},"memlab command line interface")," in bash or\nthrough ",(0,a.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/api_src#runrunoptions"},"memlab API"),"."),(0,a.kt)("li",{parentName:"ol"},"Collect memory leak results dumped in the disk.")),(0,a.kt)("h2",{id:"write-test-scenarios"},"Write Test Scenarios"),(0,a.kt)("p",null,"Follow the instructions in this ",(0,a.kt)("a",{parentName:"p",href:"/memlab/docs/guides/guides-detached-dom"},"tutorial"),"."),(0,a.kt)("h2",{id:"run-tests"},"Run Tests"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run in CLI"),": Your test job can run the test scenarios via the\nmemlab command line interface, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario /path/to/test/scenario/file.js \\\n  --work-dir /path/to/save/memlab/run/results/\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--work-dir")," option to specify a directory where you want\nmemlab to dump browser interaction meta data (e.g., screenshots and heap\nsnapshots)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run in Node.js"),": Alternatively, if your test job is written in node.js,\nyou can invoke memlab APIs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const {run} = require('@memlab/api');\nconst scenario = require('/path/to/test/scenario/file.js');\nconst fs = require('fs-extra');\n\n(async function () {\n  const workDir = '/path/to/save/memlab/run/results/';\n  // make sure the working directory exists\n  fs.mkdirsSync(workDir);\n  const result = await run({scenario, workDir});\n})();\n")),(0,a.kt)("h2",{id:"collect-results"},"Collect Results"),(0,a.kt)("p",null,"After the memlab run completes, all results and meta data will be saved in the\nspecified working directory, which includes the following sub-directories\nand files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/save/memlab/run/results/\n\u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 cur\n\u2502   \u2502   \u251c\u2500\u2500 browser-info.txt    # browser web console output\n\u2502   \u2502   \u251c\u2500\u2500 console-log.txt     # memlab terminal logging\n\u2502   \u2502   \u251c\u2500\u2500 leaks.txt           # text summary of clustered memory leaks\n\u2502   \u2502   \u251c\u2500\u2500 run-meta.json       # meta data of memlab run and browser configuration\n\u2502   \u2502   \u251c\u2500\u2500 s1.heapsnapshot     # heap snapshot after the url callback (initial page load)\n\u2502   \u2502   \u251c\u2500\u2500 s2.heapsnapshot     # heap snapshot after the action callback (after target interaction)\n\u2502   \u2502   \u251c\u2500\u2500 s3.heapsnapshot     # heap snapshot after the back callback (after reverting target interaction)\n\u2502   \u2502   \u251c\u2500\u2500 screenshot-1.png    # web page screenshot after the url callback (initial page load)\n\u2502   \u2502   \u251c\u2500\u2500 screenshot-2.png    # web page screenshot after the action callback (after target interaction)\n\u2502   \u2502   \u251c\u2500\u2500 screenshot-3.png    # web page screenshot after the back callback (after reverting target interaction)\n\u2502   \u2502   \u2514\u2500\u2500 snap-seq.json       # meta data about each browser interaction step\n\u2502   \u251c\u2500\u2500 logger\n\u2502   \u2502   \u251c\u2500\u2500 trace-clusters\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 @1846905.json   # meta data for one of memory leak trace cluster\n\u2502   \u2502   \u2502   ...\n\u2502   \u2502   \u2514\u2500\u2500 trace-jsons\n\u2502   \u2502       \u251c\u2500\u2500 @1846905.json   # detailed JSON trace of a representative memory leak trace\n\u2502   \u2502       ...                 # of a leak trace cluster, this can be used for trace visualization\n...\n")),(0,a.kt)("p",null,"To read results, use the\n",(0,a.kt)("a",{parentName:"p",href:"/memlab/docs/api/classes/api_src.BrowserInteractionResultReader"},"built-in result reader"),"\nor write your own script or library if the test job is running on a different\nruntime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const {BrowserInteractionResultReader} = require('@memlab/api');\n\nconst workDir = '/path/to/save/memlab/run/results/';\nconst result = BrowserInteractionResultReader.from(workDir);\n\n// get absolute paths of all snapshot files\nconst files = result.getSnapshotFiles();\n\n// print all browser web console output\nconst metaInfo = result.getRunMetaInfo();\nconsole.log(metaInfo.browserInfo._consoleMessages.join('\\n'));\n\n// clean up the results\nresult.cleanup();\n")),(0,a.kt)("p",null,"For more APIs on the built-in result reader, click\n",(0,a.kt)("a",{parentName:"p",href:"/memlab/docs/api/classes/api_src.BrowserInteractionResultReader"},"here"),"."))}m.isMDXComponent=!0}}]);