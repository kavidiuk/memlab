"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Prequisites",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/facebookincubator/memlab/blob/main/website/docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},s={},c=[{value:"Prequisites",id:"prequisites",level:2},{value:"Install",id:"install",level:2},{value:"Commands:",id:"commands",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"prequisites"},"Prequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/"},"Npm"))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install -g @memlab/cli\n")),(0,a.kt)("h2",{id:"commands"},"Commands:"),(0,a.kt)("p",null,"To check if the installation complete, run ",(0,a.kt)("inlineCode",{parentName:"p"},"memlab help")," in your console, you should see helper text as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ memlab help\n\n  memlab: memory leak detector for front-end JS\n\n  COMMON COMMANDS\n\n    memlab run --app=comet --interaction=watch\n    Find memory leaks in web apps\n    Options: --work-dir --app --interaction --run-mode\n             --local-puppeteer --scenario --device --disable-xvfb\n             --skip-warmup --full --skip-snapshot --skip-screenshot\n             --skip-gc --skip-scroll --skip-extra-ops --baseline\n             --target --final --snapshot-dir --engine\n             --oversize-threshold --trace-all-objects\n             --save-trace-as-unclassified-cluster\n\n    memlab list\n    List all test scenarios\n\n    memlab trace --node-id=@3123123\n    Report retainer trace of a specific node, use with --node-id\n    Options: --snapshot --snapshot-dir --engine --node-id\n\n    memlab find-leaks\n    Find memory leaks in heap snapshots\n    Options: --baseline --target --final --snapshot-dir --engine\n             --oversize-threshold --trace-all-objects\n             --save-trace-as-unclassified-cluster --work-dir\n\n    memlab analyze <PLUGIN_NAME> [PLUGIN_OPTIONS]\n    Run heap analysis plugins\n    Options: --work-dir\n\n    memlab help <COMMAND> [SUB-COMMANDS]\n    List all memlab CLI commands or print helper text for a specific command\n")))}m.isMDXComponent=!0}}]);