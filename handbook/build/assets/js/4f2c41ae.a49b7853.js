"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4415],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=n(4996),l=["components"],p={id:"net6-to-net7",title:"2.5 .NET6 \u5347\u7ea7 .NET7",sidebar_label:"2.5 .NET6 \u5347\u7ea7 .NET7 \u2728"},c=void 0,u={unversionedId:"net6-to-net7",id:"net6-to-net7",title:"2.5 .NET6 \u5347\u7ea7 .NET7",description:"\ud83d\ude80\ud83c\udf89\ud83d\udd25 2022 \u5e74 11 \u6708 08 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET7 \u9996\u4e2a\u6b63\u5f0f\u7248\u3002",source:"@site/docs/net6-to-net7.mdx",sourceDirName:".",slug:"/net6-to-net7",permalink:"/docs/net6-to-net7",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/net6-to-net7.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1677041432,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{id:"net6-to-net7",title:"2.5 .NET6 \u5347\u7ea7 .NET7",sidebar_label:"2.5 .NET6 \u5347\u7ea7 .NET7 \u2728"},sidebar:"docs",previous:{title:"2.5 .NET5 \u5347\u7ea7 .NET6",permalink:"/docs/net5-to-net6"},next:{title:"2.5 .NET7 \u5347\u7ea7 .NET8 \u2728",permalink:"/docs/net7-to-net8"}},d={},s=[{value:"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2},{value:"2.5.1.1 \u5b89\u88c5 <code>.NET7 SDK</code>",id:"2511-\u5b89\u88c5-net7-sdk",level:3},{value:"2.5.1.2 \u7f16\u8f91 <code>.csproj</code> \u6587\u4ef6",id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6",level:3},{value:"2.5.1.3 \u5347\u7ea7 <code>Nuget</code> \u5305",id:"2513-\u5347\u7ea7-nuget-\u5305",level:3},{value:"2.5.1.4 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",id:"2514-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:".NET7 \u53d1\u5e03",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\ud83d\ude80\ud83c\udf89\ud83d\udd25 2022 \u5e74 11 \u6708 08 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET7 \u9996\u4e2a\u6b63\u5f0f\u7248\u3002"))),(0,i.kt)("h2",{id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76ee\u524d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion")," \u6240\u6709\u7248\u672c\uff080.x-3.x\uff09\u7684\u7528\u6237\u5747\u53ef\u4ee5\u5feb\u901f\u65e0\u7f1d\u5347\u7ea7\u81f3 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion v4.x")," \u7248\u672c\uff0c\u53ea\u9700\u8981\u505a\u5c11\u91cf\u66f4\u6539\u5373\u53ef\u3002")),(0,i.kt)("h3",{id:"2511-\u5b89\u88c5-net7-sdk"},"2.5.1.1 \u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"h3"},".NET7 SDK")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/7.0"},"https://dotnet.microsoft.com/download/dotnet/7.0")),(0,i.kt)("h3",{id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6"},"2.5.1.2 \u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"h3"},".csproj")," \u6587\u4ef6"),(0,i.kt)("p",null,"\u7f16\u8f91\u89e3\u51b3\u65b9\u6848\u6240\u6709\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362 ",(0,i.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net6.0</TargetFramework>")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net7.0</TargetFramework>"),"\uff0c\u5982\uff1a"),(0,i.kt)("img",{src:(0,a.Z)("img/net73.png")}),(0,i.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + F")," \u5168\u5c40\u66ff\u6362"),(0,i.kt)("img",{src:(0,a.Z)("img/net74.png")}),(0,i.kt)("h3",{id:"2513-\u5347\u7ea7-nuget-\u5305"},"2.5.1.3 \u5347\u7ea7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Nuget")," \u5305"),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"v4.8.7")," \u7248\u672c\uff0c\u540c\u65f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"v7.0.3")," \u7248\u672c\uff0c\u5982\uff1a"),(0,i.kt)("img",{src:(0,a.Z)("img/net75.png")}),(0,i.kt)("h3",{id:"2514-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"},"2.5.1.4 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"\u5347\u7ea7\u5b8c\u6210\uff01\uff01\uff01"))}f.isMDXComponent=!0}}]);