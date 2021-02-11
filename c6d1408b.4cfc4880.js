(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(99)),c={id:"transpiler",title:"Transpiler",slug:"/transpiler"},o={unversionedId:"Technical/transpiler",id:"Technical/transpiler",isDocsHomePage:!1,title:"Transpiler",description:"This is a more detailed and technical explanation of how the vMod library works, specifically how JavaScript is transpiled into Minecraft commands.",source:"@site/docs/Technical/transpiler.md",slug:"/transpiler",permalink:"/docs/transpiler",editUrl:"https://github.com/bakerfugu/vanillamod-transpiler/tree/main/docs/Technical/transpiler.md",version:"current",sidebar:"mainSidebar",previous:{title:"Editor",permalink:"/docs/editor"}},l=[{value:"Generating AST from user JavaScript",id:"generating-ast-from-user-javascript",children:[]},{value:"Interpreting AST to make Minecraft commands",id:"interpreting-ast-to-make-minecraft-commands",children:[]},{value:"Validating Minecraft commands",id:"validating-minecraft-commands",children:[]},{value:"Creating the Minecraft datapack",id:"creating-the-minecraft-datapack",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a more detailed and technical explanation of how the vMod library works, specifically how JavaScript is transpiled into Minecraft commands."),Object(i.b)("h2",{id:"generating-ast-from-user-javascript"},"Generating AST from user JavaScript"),Object(i.b)("p",null,"Stuff - esprima"),Object(i.b)("h2",{id:"interpreting-ast-to-make-minecraft-commands"},"Interpreting AST to make Minecraft commands"),Object(i.b)("p",null,"Stuff - representating variables, translating for loops / if statements, making mc command from js function call, make file JSON"),Object(i.b)("h2",{id:"validating-minecraft-commands"},"Validating Minecraft commands"),Object(i.b)("p",null,"Stuff - sending command to language server"),Object(i.b)("h2",{id:"creating-the-minecraft-datapack"},"Creating the Minecraft datapack"),Object(i.b)("p",null,"Stuff - JSON into zip file"))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);