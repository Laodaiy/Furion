(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1335],{546:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var l=r(2122),a=r(9756),n=r(7294),o=r(6010),c=r(6742),s=r(9306),m=r(4996),i="footerLogoLink_qW4Z",f=["to","href","label","prependBaseUrlToHref"];function u(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,i=(0,a.Z)(e,f),u=(0,m.Z)(t),_=(0,m.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,l.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:s?_:r}:{to:u},i),o)}var _=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t,style:{background:"#fff",padding:"5px 10px"}})};var d=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,l=t.links,a=void 0===l?[]:l,c=t.logo,f=void 0===c?{}:c,d=(0,m.Z)(f.src);return e?n.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},a&&a.length>0&&n.createElement("div",{className:"row footer__links"},a.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(u,e))}))):null)}))),(f||r)&&n.createElement("div",{className:"footer__bottom text--center"},f&&f.src&&n.createElement("div",{className:"margin-bottom--sm"},f.href?n.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:i},n.createElement(_,{alt:f.alt,url:d})):n.createElement(_,{alt:f.alt,url:d})),r?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);