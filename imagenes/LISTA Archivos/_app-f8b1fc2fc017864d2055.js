(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{66729:function(e,r,t){"use strict";t.d(r,{f:function(){return s},K:function(){return l}});var n=t(85893),c=t(37616),o=t.n(c),a=t(98859);function s(e){var r=e.dark;return(0,n.jsx)("div",{className:r?o().nav_button+" "+o().dark:o().nav_button,children:(0,n.jsxs)("a",{rel:"noreferrer",href:"http://gum.co/boxicons",target:"_blank",children:["Download v",a.q]})})}function l(e){var r=e.href,t=e.download;return(0,n.jsx)("div",{className:o().primary_button,children:(0,n.jsx)("a",{href:r,download:t,children:"Download"})})}},98859:function(e,r,t){"use strict";t.d(r,{q:function(){return n},a:function(){return c}});var n="2.0.9",c="1525"},92167:function(e,r,t){"use strict";var n=t(63038),c=t(20862);r.default=void 0;var o=c(t(67294)),a=t(29414),s=t(34651),l=t(7426),i={};function u(e,r,t,n){if(e&&(0,a.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,c=(0,s.useRouter)(),f=o.default.useMemo((function(){var r=(0,a.resolveHref)(c,e.href,!0),t=n(r,2),o=t[0],s=t[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):s||o}}),[c,e.href,e.as]),d=f.href,h=f.as,_=e.children,p=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof _&&(_=o.default.createElement("a",null,_));var j=(r=o.Children.only(_))&&"object"===typeof r&&r.ref,b=(0,l.useIntersection)({rootMargin:"200px"}),m=n(b,2),k=m[0],y=m[1],N=o.default.useCallback((function(e){k(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,k]);(0,o.useEffect)((function(){var e=y&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:c&&c.locale,n=i[d+"%"+h+(r?"%"+r:"")];e&&!n&&u(c,d,h,{locale:r})}),[h,d,y,g,t,c]);var w={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,c,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[c?"replace":"push"](t,n,{shallow:o,locale:l,scroll:s}))}(e,c,d,h,p,v,x,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(c,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof g?g:c&&c.locale,C=c&&c.isLocaleDomain&&(0,a.getDomainLocale)(h,M,c&&c.locales,c&&c.domainLocales);w.href=C||(0,a.addBasePath)((0,a.addLocale)(h,M,c&&c.defaultLocale))}return o.default.cloneElement(r,w)};r.default=f},7426:function(e,r,t){"use strict";var n=t(63038);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!a,l=(0,c.useRef)(),i=(0,c.useState)(!1),u=n(i,2),f=u[0],d=u[1],h=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=s.get(r);if(t)return t;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(r,t={id:r,observer:c,elements:n}),t}(t),c=n.id,o=n.observer,a=n.elements;return a.set(e,r),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[h,f]};var c=t(67294),o=t(73447),a="undefined"!==typeof IntersectionObserver;var s=new Map},19124:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var n=t(85893);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t(37424);var o=t(29039),a=t.n(o),s=t(41664),l=t(66729);var i=function(e){var r=e.dark,t=e.toggleDark;return(0,n.jsx)("header",{className:r?a().header+" "+a().dark:a().header,children:(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsx)("div",{className:a().logo,children:(0,n.jsx)(s.default,{href:"/",children:(0,n.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 397.2 86",children:[(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M141.8,45.9c1.6,2,2.4,4.3,2.4,7c0,3.9-1.3,6.9-3.9,9.1c-2.6,2.2-6.3,3.3-11.1,3.3H108V19.9h20.6\r c4.6,0,8.2,1,10.7,3c2.5,2,3.8,4.9,3.8,8.6c0,2.7-0.7,5-2.2,6.8c-1.5,1.8-3.4,3-5.7,3.6C138,42.5,140.2,43.9,141.8,45.9z M119,38.4\r h7.2c3.8,0,5.7-1.6,5.7-4.9c0-3.3-1.9-4.9-5.8-4.9H119L119,38.4L119,38.4z M132.9,51.3c0-1.6-0.5-2.9-1.6-3.8\r c-1.1-0.9-2.6-1.4-4.6-1.4H119v10.2h7.8C130.9,56.3,132.9,54.7,132.9,51.3z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M175.6,31.2c2.8,1.5,5,3.6,6.6,6.4c1.6,2.8,2.4,6,2.4,9.8c0,3.7-0.8,7-2.4,9.8s-3.8,4.9-6.6,6.4\r c-2.8,1.5-6,2.2-9.5,2.2s-6.7-0.7-9.6-2.2c-2.8-1.5-5-3.6-6.6-6.4c-1.6-2.8-2.4-6-2.4-9.8c0-3.7,0.8-7,2.4-9.8\r c1.6-2.8,3.8-4.9,6.6-6.4c2.8-1.5,6-2.2,9.6-2.2S172.8,29.7,175.6,31.2z M160.8,40.8c-1.4,1.5-2.2,3.7-2.2,6.6\r c0,2.9,0.7,5.1,2.2,6.5c1.4,1.5,3.2,2.2,5.3,2.2s3.9-0.7,5.3-2.2c1.4-1.5,2.1-3.7,2.1-6.5c0-2.9-0.7-5.1-2.1-6.6\r c-1.4-1.5-3.2-2.3-5.3-2.3C164,38.5,162.2,39.2,160.8,40.8z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M212.1,65.3L204.8,55l-6,10.2h-12.1l11.9-18.7l-12.3-17.1h12.3l7.3,10.1l6-10.1h12.1l-12.1,18.2l12.6,17.6\r L212.1,65.3L212.1,65.3z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M228.7,15.2c1.2-1.1,2.8-1.6,4.8-1.6s3.6,0.5,4.8,1.6s1.8,2.5,1.8,4.1c0,1.6-0.6,3-1.8,4.1\r c-1.2,1.1-2.8,1.6-4.8,1.6s-3.6-0.5-4.8-1.6c-1.2-1.1-1.8-2.4-1.8-4.1C226.9,17.7,227.5,16.3,228.7,15.2z M238.9,29.4v35.8h-11\r V29.4H238.9z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M273.6,32.8c3.1,2.5,5.1,6,5.9,10.5h-11.6c-0.3-1.5-1.1-2.7-2.1-3.6c-1.1-0.9-2.4-1.3-4-1.3\r c-1.9,0-3.5,0.8-4.8,2.3c-1.2,1.5-1.9,3.7-1.9,6.6s0.6,5.1,1.9,6.6c1.2,1.5,2.8,2.3,4.8,2.3c1.6,0,3-0.4,4-1.3\r c1.1-0.9,1.8-2.1,2.1-3.6h11.6c-0.8,4.5-2.8,8-5.9,10.5c-3.1,2.5-7,3.8-11.6,3.8c-3.5,0-6.6-0.7-9.3-2.2c-2.7-1.5-4.8-3.6-6.4-6.4\r c-1.5-2.8-2.3-6-2.3-9.8c0-3.8,0.8-7,2.3-9.8c1.5-2.8,3.6-4.9,6.4-6.4c2.7-1.5,5.9-2.2,9.4-2.2C266.6,29,270.5,30.3,273.6,32.8z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M310.9,31.2c2.8,1.5,5,3.6,6.6,6.4c1.6,2.8,2.4,6,2.4,9.8c0,3.7-0.8,7-2.4,9.8c-1.6,2.8-3.8,4.9-6.6,6.4\r s-6,2.2-9.5,2.2s-6.7-0.7-9.6-2.2c-2.8-1.5-5-3.6-6.6-6.4c-1.6-2.8-2.4-6-2.4-9.8c0-3.7,0.8-7,2.4-9.8c1.6-2.8,3.8-4.9,6.6-6.4\r c2.8-1.5,6-2.2,9.6-2.2C304.9,29,308.1,29.7,310.9,31.2z M296,40.8c-1.4,1.5-2.1,3.7-2.1,6.6c0,2.9,0.7,5.1,2.1,6.5\r s3.2,2.2,5.3,2.2c2.1,0,3.9-0.7,5.3-2.2s2.1-3.7,2.1-6.5c0-2.9-0.7-5.1-2.1-6.6c-1.4-1.5-3.2-2.3-5.3-2.3\r C299.2,38.5,297.5,39.2,296,40.8z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M357.5,33.2c2.4,2.7,3.6,6.5,3.6,11.3v20.8h-11V45.7c0-2.4-0.6-4.3-1.9-5.6c-1.3-1.3-2.9-2-5-2\r c-2.2,0-4,0.7-5.3,2.1c-1.3,1.4-2,3.4-2,6v19h-11V29.4h11V36c1-2.1,2.6-3.8,4.6-5.1c2-1.2,4.4-1.9,7.2-1.9\r C351.8,29,355.1,30.4,357.5,33.2z"}),(0,n.jsx)("path",{className:a().logo_text,fill:"#0D0C22",d:"M391.6,32.4c2.7,2.3,4.4,5.3,5.1,9h-10.3c-0.3-1.5-1-2.6-2-3.4c-1-0.8-2.4-1.3-3.9-1.3c-1.2,0-2.2,0.3-2.8,0.8\r c-0.6,0.5-1,1.3-1,2.3c0,1.1,0.6,1.9,1.8,2.5c1.2,0.6,3,1.1,5.6,1.7c2.7,0.6,5,1.3,6.7,2c1.8,0.7,3.3,1.7,4.6,3.2\r c1.3,1.5,1.9,3.5,1.9,6c0,2.1-0.6,3.9-1.7,5.5c-1.1,1.6-2.7,2.8-4.8,3.7c-2.1,0.9-4.6,1.3-7.4,1.3c-4.8,0-8.7-1.1-11.6-3.2\r c-2.9-2.1-4.7-5.2-5.3-9.2H377c0.2,1.5,0.8,2.7,2,3.5c1.1,0.8,2.6,1.2,4.4,1.2c1.2,0,2.2-0.3,2.8-0.9s1-1.3,1-2.3\r c0-1.2-0.6-2.1-1.8-2.7c-1.2-0.5-3.1-1.1-5.7-1.7c-2.7-0.6-4.8-1.2-6.5-1.8c-1.7-0.6-3.2-1.7-4.4-3.1c-1.2-1.4-1.9-3.4-1.9-5.9\r c0-3.2,1.2-5.8,3.7-7.8s5.9-3,10.3-3C385.3,29,388.9,30.1,391.6,32.4z"})]}),(0,n.jsx)("path",{className:a().logo_primary,fill:"#595EEF",d:"M4.7,21.2c-0.9,1.4-1.4,3-1.4,4.6l0,34.8c0,2.4,1.3,4.7,3.4,5.9l31.5,17.9c2.6,1.5,5.8-0.4,5.8-3.4V43.7l0,0\r L4.7,21.2z"}),(0,n.jsx)("path",{className:a().logo_secondary,fill:"#6DEAE7",d:"M44,43.7l34.2-17.2c2.8-1.4,2.9-5.3,0.2-6.8L47.1,1.8c-2-1.1-4.4-1.2-6.4-0.2L8.1,18.1\r c-1.4,0.7-2.6,1.8-3.5,3.1L44,43.7z"})]})})}),(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:a().nav_link,children:(0,n.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/atisawd/boxicons",children:"Github"})}),(0,n.jsx)("li",{className:a().nav_link,children:(0,n.jsx)(s.default,{href:"/usage",children:"Usage"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.f,{dark:r})})]})}),(0,n.jsx)("div",{className:a().dark_button,onClick:t,children:r?(0,n.jsx)("i",{className:"bx bxs-sun"}):(0,n.jsx)("i",{className:"bx bxs-moon"})})]})})},u=t(67294),f=t(31024),d=t.n(f);var h=function(e){var r=e.dark;return(0,n.jsx)("footer",{className:r?d().footer+" "+d().dark:d().footer,children:(0,n.jsxs)("div",{className:d().footer_in,children:[(0,n.jsxs)("div",{className:d().footer_links,children:[(0,n.jsx)(s.default,{href:"/cheatsheet/",children:"Cheatsheet"}),(0,n.jsx)("a",{href:"https://github.com/atisawd/boxicons/issues/new?labels=icon%20request,",target:"blank",children:"Request Icons"}),(0,n.jsx)(s.default,{href:"/usage/#license",children:"License"})]}),(0,n.jsx)("div",{className:d().footer_logo,children:(0,n.jsx)("a",{href:"https://atisa.gumroad.com",rel:"noopener noreferrer",target:"_blank",children:(0,n.jsxs)("svg",{version:"1.1",x:"0px",y:"0px",width:"1825.596px",height:"238.593px",viewBox:"0 0 1825.596 238.593",children:[(0,n.jsx)("path",{fill:"#6e6d7a",d:"M49.282,228.111"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("polyline",{opacity:"0.6",fill:"#6e6d7a",points:"241.149,77.679 241.149,226.777 286.708,226.777 \r 286.708,226.777 329.893,226.777 329.893,226.777 375.448,226.777 375.448,57.378 375.448,11.819 375.448,11.817 329.893,11.817 \r 329.893,11.819 286.708,11.819 286.704,11.819 286.708,11.817 241.149,11.817  "}),(0,n.jsx)("polyline",{fill:"#6e6d7a",points:"282.99,11.819 282.985,11.819 282.99,11.817 237.43,11.817 237.43,11.817 194.245,11.819 \r 194.245,11.819 148.686,11.819 -0.001,226.777 45.563,226.777 45.563,226.777 88.743,226.777 133.082,226.777 134.303,226.777 \r 237.43,77.679   "})]}),(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:"#6e6d7a",d:"M749.099,238.593l-21.69-50.389h-97.772l-21.69,50.389h-55.394L653.328,5.34h50.388l100.776,233.253\r H749.099z M678.688,74.748l-29.364,67.742h58.396L678.688,74.748z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M980.018,50.389v188.205h-52.059V50.389h-66.071V5.34h184.201v45.049H980.018z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M1150.867,5.34h52.057v233.253h-52.057V5.34z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M1381.615,51.891c-5.007,4.119-7.509,9.568-7.509,16.351c0,6.789,3.056,12.181,9.177,16.187\r c6.114,4.004,20.239,8.732,42.379,14.182c22.134,5.453,39.317,13.629,51.557,24.525c12.232,10.902,18.354,26.813,18.354,47.721\r c0,20.912-7.842,37.873-23.525,50.889c-15.684,13.014-36.32,19.52-61.9,19.52c-36.932,0-70.189-13.68-99.773-41.043l31.032-38.041\r c25.136,22.023,48.386,33.035,69.742,33.035c9.563,0,17.069-2.055,22.524-6.174c5.447-4.113,8.176-9.676,8.176-16.686\r c0-7.008-2.895-12.564-8.678-16.686c-5.786-4.113-17.24-8.285-34.368-12.514c-27.146-6.449-47-14.85-59.565-25.193\r c-12.57-10.345-18.854-26.582-18.854-48.72c0-22.134,7.951-39.21,23.859-51.223C1360.145,6.008,1380,0,1403.807,0\r c15.568,0,31.143,2.67,46.718,8.008c15.568,5.34,29.142,12.906,40.71,22.692l-26.361,38.042\r c-20.244-15.352-41.16-23.025-62.734-23.025C1393.459,45.717,1386.619,47.776,1381.615,51.891z"}),(0,n.jsx)("path",{fill:"#6e6d7a",d:"M1770.201,238.593l-21.689-50.389h-97.773l-21.689,50.389h-55.395L1674.432,5.34h50.387l100.777,233.253\r H1770.201z M1699.789,74.748l-29.364,67.742h58.397L1699.789,74.748z"})]})]})})})]})})};function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v=function(e){var r=e.Component,t=e.pageProps,c=(0,u.useState)(!1),o=c[0],a=c[1];return(0,n.jsxs)(u.Fragment,{children:[(0,n.jsx)(i,{dark:o,toggleDark:function(){a(!o)}}),(0,n.jsx)(r,p({dark:o},t)),(0,n.jsx)(h,{dark:o})]})}},81780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(19124)}])},37616:function(e){e.exports={nav_button:"Buttons_nav_button__DGPPn",dark:"Buttons_dark__3DPEW",primary_button:"Buttons_primary_button__idPpP"}},31024:function(e){e.exports={footer:"Footer_footer__1NykH",footer_in:"Footer_footer_in__3u_c4",footer_logo:"Footer_footer_logo__gYK8V",footer_links:"Footer_footer_links__kB3GB",dark:"Footer_dark__wJtLO"}},29039:function(e){e.exports={header:"Navigation_header__1ldTi",container:"Navigation_container__31mrY",dark_button:"Navigation_dark_button__1JOlD",nav_link:"Navigation_nav_link__2_3uJ",logo:"Navigation_logo__2jNs_",logo_text:"Navigation_logo_text__1q5fi",logo_primary:"Navigation_logo_primary__18r65",logo_secondary:"Navigation_logo_secondary__3d9qJ",dark:"Navigation_dark__3SfxC"}},37424:function(){},41664:function(e,r,t){e.exports=t(92167)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(81780),r(34651)}));var t=e.O();_N_E=t}]);