(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3202],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(a),f=n,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8006:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),l=["components"],i={id:"datavalidator",title:"3. DataValidator \u9759\u6001\u7c7b",sidebar_label:"3. DataValidator \u9759\u6001\u7c7b"},c=void 0,u={unversionedId:"global/datavalidator",id:"global/datavalidator",isDocsHomePage:!1,title:"3. DataValidator \u9759\u6001\u7c7b",description:"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",source:"@site/docs/global/datavalidator.mdx",sourceDirName:"global",slug:"/global/datavalidator",permalink:"/docs/global/datavalidator",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/datavalidator.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,formattedLastUpdatedAt:"2/4/2021",frontMatter:{id:"datavalidator",title:"3. DataValidator \u9759\u6001\u7c7b",sidebar_label:"3. DataValidator \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"2. Db \u9759\u6001\u7c7b",permalink:"/docs/global/db"},next:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/docs/global/oops"}},d=[{value:"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",id:"31-\u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",children:[]},{value:"3.2 \u9a8c\u8bc1\u5355\u4e2a\u503c",id:"32-\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]},{value:"3.3 \u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c",id:"33-\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]},{value:"3.4 \u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c",id:"34-\u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]}],p={toc:d};function s(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"31-\u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e"},"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var result = DataValidator.TryValidateObject(obj);\n")),(0,o.kt)("h2",{id:"32-\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.2 \u9a8c\u8bc1\u5355\u4e2a\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var result = DataValidator.TryValidateValue(value, typeof(RequiredAttribure), typeof(RangeAttribute));\n")),(0,o.kt)("h2",{id:"33-\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.3 \u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var result = DataValidator.TryValidateValue(value,"\u6b63\u5219\u8868\u8fbe\u5f0f");\n')),(0,o.kt)("h2",{id:"34-\u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.4 \u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var result = DataValidator.TryValidateValue(value, ValidationTypes.Number);\n\nvar result2 = DataValidator.TryValidateValue(value, ValidationPattern.AllOfThem, ValidationTypes.Number, ValidationTypes.Required);\n")))}s.isMDXComponent=!0}}]);