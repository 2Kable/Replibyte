"use strict";(self.webpackChunkreplibyte=self.webpackChunkreplibyte||[]).push([[80],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:10},l="Contributing",c={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"If you are non-experienced in Rust, consider picking issues with label good first issue.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/Qovery/replibyte/tree/main/website/docs/contributing.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"How database subset works",permalink:"/docs/design/how-database-subset-works"},next:{title:"FAQ",permalink:"/docs/faq"}},u={},p=[{value:"Local development",id:"local-development",level:2},{value:"How to contribute",id:"how-to-contribute",level:2},{value:"Where should I start?",id:"where-should-i-start",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are non-experienced in Rust, consider picking issues with label ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Qovery/replibyte/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"},"good first issue"),"."))),(0,i.kt)("h2",{id:"local-development"},"Local development"),(0,i.kt)("p",null,"For local development, you will need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust"),"."),(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com"},"Docker"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker compose -f ./docker-compose-dev.yml")," to\nstart the local databases. At the moment, ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose")," includes 2 PostgreSQL database instances, 2 MySQL instances, 2 MongoDB instances\nand a ",(0,i.kt)("a",{parentName:"li",href:"https://min.io"},"MinIO")," datastore. One source, one destination by database and one datastore. In the future, we will provide more options.")),(0,i.kt)("p",null,"The Minio console is accessible at http://localhost:9001."),(0,i.kt)("p",null,"Once your Docker instances are running, you can run the RepliByte tests, to check if everything is configured correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"AWS_ACCESS_KEY_ID=minioadmin AWS_SECRET_ACCESS_KEY=minioadmin cargo test\n")),(0,i.kt)("p",null,"To check that your development environment works well, you can run all the tests locally with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cargo test --all\n")),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,i.kt)("p",null,"RepliByte is in its early stage of development and need some time to be usable in production. We need some help, and you are welcome to\ncontribute. To better synchronize consider joining our #replibyte channel on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.qovery.com"},"Discord"),". Otherwise, you can\npick ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Qovery/replibyte/issues"},"opened issues")," and contribute."),(0,i.kt)("h2",{id:"where-should-i-start"},"Where should I start?"),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Qovery/replibyte/issues"},"opened issues"),"."))}m.isMDXComponent=!0}}]);