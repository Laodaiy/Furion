(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1736],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=(n(4996),["components"]),i={slug:"fileupload-download",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","upload","download"]},u=void 0,c={permalink:"/blog/fileupload-download",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/blog/2021-02-02-fileupload-download.mdx",source:"@site/blog/2021-02-02-fileupload-download.mdx",title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",description:"\u6587\u4ef6\u4e0b\u8f7d",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"furion",permalink:"/blog/tags/furion"},{label:"furos",permalink:"/blog/tags/furos"},{label:".net",permalink:"/blog/tags/net"},{label:".netcore",permalink:"/blog/tags/netcore"},{label:".net5",permalink:"/blog/tags/net-5"},{label:"upload",permalink:"/blog/tags/upload"},{label:"download",permalink:"/blog/tags/download"}],readingTime:.57,truncated:!0,prevItem:{title:"3. .NET 6 Preview 5 \u5c1d\u9c9c",permalink:"/blog/net6-preview5"},nextItem:{title:"1. HttpContext \u5e94\u7528",permalink:"/blog/httpcontext"}},p=[{value:"\u6587\u4ef6\u4e0b\u8f7d",id:"\u6587\u4ef6\u4e0b\u8f7d",children:[]},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",children:[]}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6587\u4ef6\u4e0b\u8f7d"},"\u6587\u4ef6\u4e0b\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[HttpGet, NonUnify]\npublic IActionResult FileDownload(string path, string fileName)\n{\n    string filePath = "\u8fd9\u91cc\u83b7\u53d6\u5b8c\u6574\u7684\u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84";\n    return new FileStreamResult(new FileStream(filePath, FileMode.Open), "application/octet-stream") { FileDownloadName = fileName };\n}\n')),(0,a.kt)("h2",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[HttpPost, NonUnify]\npublic async Task<IActionResult> UploadFileAsync(List<IFormFile> files)\n{\n    // \u4fdd\u5b58\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 uploads \u76ee\u5f55\n    var savePath = Path.Combine(App.HostEnvironment.ContentRootPath, "uploads");\n    if(!Directory.Exists(savePath)) Directory.CreateDirectory(savePath);\n\n    long size = files.Sum(f => f.Length);\n\n    foreach (var formFile in files)\n    {\n        if (formFile.Length > 0)\n        {\n            // \u907f\u514d\u6587\u4ef6\u540d\u91cd\u590d\uff0c\u91c7\u7528 GUID \u751f\u6210\n            var filePath = Path.Combine(savePath, Guid.NewGuid().ToString("N") + Path.GetExtension(formFile.FileName));  // \u53ef\u4ee5\u66ff\u4ee3\u4e3a\u4f60\u9700\u8981\u5b58\u50a8\u7684\u771f\u5b9e\u8def\u5f84\n\n            using (var stream = System.IO.File.Create(filePath))\n            {\n                await formFile.CopyToAsync(stream);\n            }\n        }\n    }\n\n    // \u5728\u52a8\u6001 API \u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700 OK \u548c IActionResult\n    return Ok(new { count = files.Count, size });\n}\n')))}f.isMDXComponent=!0}}]);