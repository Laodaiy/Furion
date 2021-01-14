(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{179:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=t,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(f,a(a({ref:n},c),{},{components:r})):o.a.createElement(f,a({ref:n},c))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),i=(r(0),r(179)),s={id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},a={unversionedId:"global/linqexpression",id:"global/linqexpression",isDocsHomePage:!1,title:"5. LinqExpression \u9759\u6001\u7c7b",description:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",source:"@site/docs\\global\\linqexpression.mdx",slug:"/global/linqexpression",permalink:"/docs/global/linqexpression",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/global/linqexpression.mdx",version:"current",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b",sidebar:"global",previous:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/docs/global/oops"},next:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/docs/global/shttp"}},p=[{value:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",children:[]},{value:"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",children:[]}],c={toc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"},"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),"var expression = LinqExpression.Create<T>(u => u.Id == 1);\nvar expression2 = LinqExpression.Create<T>((u,i) => u.Id ==1 && i > 0);\n")),Object(i.b)("h2",{id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"},"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cs"}),"var expression = LinqExpression.And(expression1, expression2);\nvar expression2 = LinqExpression.IndexAnd(expression1, expression2);\nvar expression3 = LinqExpression.Or(expression2, expression3);\nvar expression4 = LinqExpression.IndexOr(expression2, expression3);\n")))}l.isMDXComponent=!0}}]);