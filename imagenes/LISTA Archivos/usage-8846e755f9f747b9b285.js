(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{23646:function(e,s,i){var n=i(67228);e.exports=function(e){if(Array.isArray(e))return n(e)}},59713:function(e){e.exports=function(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,s,i){var n=i(23646),a=i(46860),t=i(60379),r=i(98206);e.exports=function(e){return n(e)||a(e)||t(e)||r()}},15738:function(e,s,i){"use strict";i.d(s,{Z:function(){return o}});var n=i(85893),a=i(9008),t="UA-120904854-1",r=i(98859);var o=function(){return(0,n.jsx)("div",{children:(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,n.jsx)("meta",{name:"referrer",content:"always"}),(0,n.jsx)("title",{children:"Boxicons : Premium web friendly icons for free"}),(0,n.jsx)("meta",{name:"title",content:"Boxicons : Premium web friendly icons for free"}),(0,n.jsx)("meta",{name:"copyright",content:"Boxicons"}),(0,n.jsx)("meta",{name:"description",content:"Boxicons is a free collection of carefully crafted open source icons. Each icon is designed on a 24px grid with the material guidelines"}),(0,n.jsx)("link",{href:"https://unpkg.com/boxicons@"+r.q+"/css/boxicons.min.css",rel:"stylesheet"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:description",content:"Boxicons is a free collection of carefully crafted open source icons. Each icon is designed on a 24px grid with the material guidelines"}),(0,n.jsx)("meta",{id:"og-title",property:"og:title",content:"Boxicons : Premium web friendly icons for free"}),(0,n.jsx)("meta",{property:"og:url",content:"https://boxicons.com/"}),(0,n.jsx)("meta",{property:"og:image",content:"http://boxicons.com/static/img/og-image.png"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:url",content:"https://boxicons.com/"}),(0,n.jsx)("meta",{property:"twitter:title",content:"Boxicons : Premium web friendly icons for free"}),(0,n.jsx)("meta",{property:"twitter:description",content:"Boxicons is a free collection of carefully crafted open source icons. Each icon is designed on a 24px grid with the material guidelines"}),(0,n.jsx)("meta",{property:"twitter:image",content:"http://boxicons.com/static/img/og-image.png"}),(0,n.jsx)("meta",{name:"keywords",content:"boxicons,free icons,open source icons, royalty free icons,google icons, icon, line icon, sharp icon, material icons, premium icons, pixel perfect icons, open source icons, free icon set"}),(0,n.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"static/favicon.ico?v=13"}),(0,n.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(t,"');\n          ")}})]})})}},23398:function(e,s,i){"use strict";var n;s.__esModule=!0,s.AmpStateContext=void 0;var a=((n=i(67294))&&n.__esModule?n:{default:n}).default.createContext({});s.AmpStateContext=a},76393:function(e,s,i){"use strict";s.__esModule=!0,s.isInAmpMode=r,s.useAmp=function(){return r(a.default.useContext(t.AmpStateContext))};var n,a=(n=i(67294))&&n.__esModule?n:{default:n},t=i(23398);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.ampFirst,i=void 0!==s&&s,n=e.hybrid,a=void 0!==n&&n,t=e.hasQuery,r=void 0!==t&&t;return i||a&&r}},92775:function(e,s,i){"use strict";var n=i(59713);function a(e,s){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),i.push.apply(i,n)}return i}s.__esModule=!0,s.defaultHead=h,s.default=void 0;var t,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var s=x();if(s&&s.has(e))return s.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var t=n?Object.getOwnPropertyDescriptor(e,a):null;t&&(t.get||t.set)?Object.defineProperty(i,a,t):i[a]=e[a]}i.default=e,s&&s.set(e,i);return i}(i(67294)),o=(t=i(73244))&&t.__esModule?t:{default:t},c=i(23398),l=i(41165),d=i(76393);function x(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return x=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=[r.default.createElement("meta",{charSet:"utf-8"})];return e||s.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),s}function b(e,s){return"string"===typeof s||"number"===typeof s?e:s.type===r.default.Fragment?e.concat(r.default.Children.toArray(s.props.children).reduce((function(e,s){return"string"===typeof s||"number"===typeof s?e:e.concat(s)}),[])):e.concat(s)}var m=["name","httpEquiv","charSet","itemProp"];function u(e,s){return e.reduce((function(e,s){var i=r.default.Children.toArray(s.props.children);return e.concat(i)}),[]).reduce(b,[]).reverse().concat(h(s.inAmpMode)).filter(function(){var e=new Set,s=new Set,i=new Set,n={};return function(a){var t=!0,r=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){r=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?t=!1:e.add(o)}switch(a.type){case"title":case"base":s.has(a.type)?t=!1:s.add(a.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var d=m[c];if(a.props.hasOwnProperty(d))if("charSet"===d)i.has(d)?t=!1:i.add(d);else{var x=a.props[d],h=n[d]||new Set;"name"===d&&r||!h.has(x)?(h.add(x),n[d]=h):t=!1}}}return t}}()).reverse().map((function(e,i){var t=e.key||i;if(!s.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(s){return e.props.href.startsWith(s)}))){var o=function(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?a(Object(i),!0).forEach((function(s){n(e,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,r.default.cloneElement(e,o)}return r.default.cloneElement(e,{key:t})}))}var p=function(e){var s=e.children,i=(0,r.useContext)(c.AmpStateContext),n=(0,r.useContext)(l.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:u,headManager:n,inAmpMode:(0,d.isInAmpMode)(i)},s)};s.default=p},73244:function(e,s,i){"use strict";var n=i(319),a=i(34575),t=i(93913),r=(i(81506),i(2205)),o=i(78585),c=i(29754);function l(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=c(e);if(s){var a=c(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return o(this,i)}}s.__esModule=!0,s.default=void 0;var d=i(67294),x=function(e){r(i,e);var s=l(i);function i(e){var t;return a(this,i),(t=s.call(this,e))._hasHeadManager=void 0,t.emitChange=function(){t._hasHeadManager&&t.props.headManager.updateHead(t.props.reduceComponentsToState(n(t.props.headManager.mountedInstances),t.props))},t._hasHeadManager=t.props.headManager&&t.props.headManager.mountedInstances,t}return t(i,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),i}(d.Component);s.default=x},38207:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return f}});var n=i(85893),a=i(26569),t=i.n(a),r=i(55471),o=i.n(r),c=(i(67294),i(41664)),l=i(98859),d=i(53951);var x=function(e){var s=e.dark;return(0,n.jsxs)("div",{className:s?o().content+" "+o().dark:o().content,children:[(0,n.jsx)("h3",{children:"Quick Start"}),(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:["Looking to quickly add Boxicons to your project? Use the paths to CDN or Download the files ",(0,n.jsx)("a",{href:"https://gum.co/boxicons?wanted=true",rel:"noreferrer",target:"_blank","data-gumroad-single-product":"true",children:"here"}),"."]})}),(0,n.jsx)("h3",{id:"install-via-npm",children:"Install via NPM"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:" Install the boxicons package by copy pasting the following in your terminal:"}),(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsx)(d.default,{className:"xml",children:"$ npm install boxicons --save"})}),(0,n.jsx)("p",{children:" Import the npm module in your javascript"}),(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsx)(d.default,{className:"xml",children:"import 'boxicons'"})})]}),(0,n.jsx)("h3",{id:"web-component",children:"Using the Web Component"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Boxicons includes a Custom Element that makes using icons easy and efficient. To use it, add the ",(0,n.jsx)("code",{className:o().side,children:"boxicons.js"})," file to the page:"]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsx)(d.default,{className:"xml",children:' <script src="https://unpkg.com/boxicons@'+l.q+'/dist/boxicons.js"><\/script>'})]}),(0,n.jsxs)("p",{children:["To use an icon, add the ",(0,n.jsx)("code",{className:o().side,children:"box-icon"})," element to the location where the icon should be displayed:"]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsx)(d.default,{className:"xml",children:'<box-icon name="rocket"></box-icon>'})]}),(0,n.jsxs)("p",{children:[" To use solid icons or logos add attribute ",(0,n.jsx)("code",{className:o().side,children:"type"})," as solid or logo "]}),(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsxs)(d.default,{className:"xml",children:['<box-icon  type="solid" name="rocket"></box-icon>\n','<box-icon  type="logo" name="facebook-square"></box-icon>']})}),(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{className:o().side,children:"box-icon"})," custom element supports the following attributes:"]}),(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsxs)(d.default,{className:"xml",children:["  <box-icon ","\n",' type = "regular|solid|logo"\n','name="adjust|alarms|etc...."\n','color="blue|red|etc..."\n','size="xs|sm|md|lg|cssSize"\n','rotate="90|180|270"\n','flip="horizontal|vertical"\n','border="square|circle"\n','animation="spin|tada|etc..."\n','animation="spin|tada|etc..."\n','pull = "left|right"\n',"></box-icon>"]})})]}),(0,n.jsx)("h3",{id:"usage-as-font",children:"Usage as a Font"}),(0,n.jsx)("h4",{id:"import-css",children:"Import the CSS"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Copy-paste the stylesheet ",(0,n.jsx)("code",{className:o().side,children:"link"})," into your ",(0,n.jsx)("code",{className:o().side,children:"head"}),"  to load our CSS"]})," ",(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsx)(d.default,{className:"xml",children:"<link href='https://unpkg.com/boxicons@"+l.q+"/css/boxicons.min.css' rel='stylesheet'>"})}),(0,n.jsx)("p",{children:"This will load boxicons font into your webpage"})]}),(0,n.jsx)("h4",{id:"html",children:"HTML"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["  To use an icon on your page, add a prefix",(0,n.jsx)("code",{className:o().side,children:"bx-"})," for regular icons, ",(0,n.jsx)("code",{className:o().side,children:"bxs-"})," for solid icons & ",(0,n.jsx)("code",{className:o().side,children:"bxl-"})," for logos followed by the icon name and seperate class with the",(0,n.jsx)("code",{className:o().side,children:"bx"}),":"]})," ",(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["<i class='bx bx-user'></i>\n","<i class='bx bxs-user'></i>\n","<i class='bx bxl-facebook-square'></i>\n"]})]}),"You can see the names of all the icons ",(0,n.jsx)(c.default,{href:"/cheatsheet",children:(0,n.jsx)("a",{children:"here"})})]}),(0,n.jsx)("h3",{id:"starter-template",children:"Starter Templates"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:" Create an HTML document and copy-paste the starter template"})," ",(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["<!doctype html>","\n","<html lang='en'>","\n","<head>","\n","<meta charset='utf-8'>","\n","<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>","\n","\x3c!-- Boxicons CSS --\x3e","\n","<link href='https://unpkg.com/boxicons@",l.q,"/css/boxicons.min.css' rel='stylesheet'>","\n","<title>Hello, Boxicons!</title>","\n","</head>","\n","<body>","\n","<h1>Hello, Boxicons!</h1>","\n","<i class='bx bx-hot'></i>","\n","<i class='bx bxs-hot'></i>","\n","<i class='bx bxl-facebook-square'></i>","\n","</body>","\n","</html>"]})]}),(0,n.jsx)("p",{children:"A template for usage with the web component instead of icon font"}),"  ",(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsxs)(d.default,{className:"xml",children:["<!doctype html>","\n","<html lang='en'>","\n","<head>","\n","<meta charset='utf-8'>","\n","<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>","\n","\x3c!-- Boxicons JS --\x3e","\n","<link href='https://unpkg.com/boxicons@",l.q,"/dist/boxicons.js' rel='stylesheet'>","\n","<title>Hello, Boxicons!</title>","\n","</head>","\n","<body>","\n","<h1>Hello, Boxicons!</h1>","\n","<box-icon name='hot'></box-icon>","\n","<box-icon type='solid' name='hot'></box-icon>","\n","<box-icon type='logo' name='facebook-square'></box-icon>","\n","</body>","\n","</html>"]})})]}),(0,n.jsx)("h3",{id:"styling",children:"Styling"}),(0,n.jsx)("h4",{id:"sizing",children:"Sizing"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[" You can change size of the icon with",(0,n.jsx)("code",{className:o().side,children:"font-size"})," CSS. It will inherit the ",(0,n.jsx)("code",{className:o().side,children:"font-size"}),"from the parent by default. There are fixed sizes you can add to the icon by adding classes",(0,n.jsx)("code",{className:o().side,children:"bx-xs"}),", ",(0,n.jsx)("code",{className:o().side,children:"bx-sm"}),", ",(0,n.jsx)("code",{className:o().side,children:"bx-md"})," and ",(0,n.jsx)("code",{className:o().side,children:"bx-lg"})]}),"  ",(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsx)("i",{className:"bx bxs-like bx-xs "}),(0,n.jsx)("i",{className:"bx bxs-like bx-sm"}),(0,n.jsx)("i",{className:"bx bxs-like bx-md"}),(0,n.jsx)("i",{className:"bx bxs-like bx-lg"})]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["","<i class='bx bxs-like bx-xs'></i>","\n","<i class='bx bxs-like bx-sm'></i>","\n","<i class='bx bxs-like bx-md'></i>","\n","<i class='bx bxs-like bx-lg'></i>","\n","\x3c!-- Boxicons web component --\x3e","\n","<box-icon name='like' size='lg'></box-icon>","\n"]})]})]}),(0,n.jsx)("h4",{id:"rotation-flipping",children:"Rotation & Flipping"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[" Rotate the icons using classes ",(0,n.jsx)("code",{className:o().side,children:"bx-rotate-90"}),", ",(0,n.jsx)("code",{className:o().side,children:"bx-rotate-180"})," and ",(0,n.jsx)("code",{className:o().side,children:"bx-rotate-270"})," or Flip the icons using ",(0,n.jsx)("code",{className:o().side,children:"bx-flip-horizontal"})," and ",(0,n.jsx)("code",{className:o().side,children:"bx-flip-vertical"})]}),(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsx)("i",{className:"bx bxs-like bx-rotate-90  bx-md"}),(0,n.jsx)("i",{className:"bx bxs-like bx-rotate-180 bx-md"}),(0,n.jsx)("i",{className:"bx bxs-like bx-rotate-270 bx-md"}),(0,n.jsx)("i",{className:"bx bxs-like bx-flip-horizontal bx-md"}),(0,n.jsx)("i",{className:"bx bxs-like bx-flip-vertical bx-md"})]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["","<i class='bx bxs-like bx-rotate-90'></i>","\n","<i class='bx bxs-like bx-rotate-180'></i>","\n","<i class='bx bxs-like bx-rotate-270'></i>","\n","<i class='bx bxs-like bx-flip-horizontal'></i>","\n","<i class='bx bxs-like bx-flip-vertical '></i>","\n","\x3c!-- Boxicons web component --\x3e","\n","<box-icon name='like' rotate='90'></box-icon>","\n","<box-icon name='like' flip='horizontal'></box-icon>","\n"]})]})]}),(0,n.jsx)("h4",{id:"list-icons",children:"List Icons"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[" Use icons as bullets for the list by adding class ",(0,n.jsx)("code",{className:o().side,children:"bx-ul"})," to the unordered list element and include the icons inside the",(0,n.jsx)("code",{className:o().side,children:"li"}),"    "]}),"       ",(0,n.jsx)("div",{className:o().icon_display,children:(0,n.jsxs)("ul",{className:"bx-ul",children:[(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("i",{className:"bx  bx-right-arrow"}),"List item 1"]}),(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("i",{className:"bx  bx-x"}),"List item 2"]}),(0,n.jsxs)("li",{children:[" ",(0,n.jsx)("i",{className:"bx  bx-plus"}),"List item 3"]})]})}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["<ul class='bx-ul'>","\n","<li><i class='bx  bx-right-arrow'></i>List Item 1</li>","\n","<li><i  class='bx  bx-x'></i>List Item 2</li>","\n","<li><i  class='bx  bx-plus'></i>List Item 3</li>","\n","</ul>"]})]})]}),(0,n.jsx)("h4",{id:"fixed-width",children:"Fixed Width"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[" You can use fixed width class ",(0,n.jsx)("code",{className:o().side,children:"bx-fw"})," \\to get a fixed width icon next to the text",(0,n.jsx)("code",{className:o().side,children:"li"}),"    "]}),"       ",(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsxs)("div",{children:[" ",(0,n.jsx)("i",{className:"bx-fw bx bxl-facebook-square"}),"Facebook"]}),(0,n.jsxs)("div",{children:[" ",(0,n.jsx)("i",{className:"bx-fw bx bxl-slack"}),"Slack"]}),(0,n.jsxs)("div",{children:[" ",(0,n.jsx)("i",{className:"bx-fw bx bxl-instagram"}),"Instagram"]})]}),(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsx)(d.default,{className:"xml",children:"<i class='bx-fw bx bxl-facebook-square'></i>Facebook"})})]}),(0,n.jsx)("h4",{id:"pull-icon",children:"Pulled Icons"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[" Use class ",(0,n.jsx)("code",{className:o().side,children:"bx-pull-left"})," or ",(0,n.jsx)("code",{className:o().side,children:"bx-pull-right"})," on icons for easy pull quotes",(0,n.jsx)("code",{className:o().side,children:"li"}),"    "]}),"       ",(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsx)("i",{className:"bx-pull-left bx bxs-quote-alt-left bx-lg"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus erat eu nibh laoreet, sed ullamcorper diam ornare. Quisque viverra ante nec luctus imperdiet. Quisque ut imperdiet nisi. Quisque ultrices laoreet odio, non vestibulum lacus molestie sollicitudin. Phasellus nec dolor eget nunc commodo sodales vel vel eros."]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["<i className='bx-pull-left bx bxs-quote-alt-left bx-lg'/>","\n","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus erat eu nibh laoreet, sed ullamcorper diam ornare. Quisque viverra ante nec luctus imperdiet. Quisque ut imperdiet nisi. Quisque ultrices laoreet odio, non vestibulum lacus molestie sollicitudin. Phasellus nec dolor eget nunc commodo sodales vel vel eros. \x3c!-- Boxicons web component --\x3e","\n","<box-icon name='like' pull='left' size='lg'></box-icon>","\n","Quisque ultrices laoreet odio, non vestibulum lacus molestie sollicitudin. Phasellus nec dolor eget nunc commodo sodales vel vel eros."]})]})]}),(0,n.jsx)("h4",{id:"border",children:"Border"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["  Add border to your icons with classes ",(0,n.jsx)("code",{className:o().side,children:"bx-border"}),", ",(0,n.jsx)("code",{className:o().side,children:"bx-border-circle"})]}),"       ",(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsx)("i",{className:"bx bxs-heart bx-border  bx-md"}),(0,n.jsx)("i",{className:"bx bxs-heart bx-border-circle  bx-md"})," "]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["<i class='bx bxs-heart bx-border'></i>","\n","<i class='bx bxs-heart bx-border-circle'></i>","\n","\x3c!-- Boxicons web component --\x3e","\n","<box-icon name='heart' border='circle'></box-icon>","\n"]})]})]}),(0,n.jsx)("h4",{id:"animation",children:"Animation"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:[" Animate your icons with pre built CSS animations using classes ",(0,n.jsx)("code",{className:o().side,children:"bx-spin"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-tada"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-flashing"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-burst"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-fade-left"})," and ",(0,n.jsx)("code",{className:o().side,children:"bx-fade-right"})]}),(0,n.jsxs)("p",{children:["You can change the speed of the animation with the ",(0,n.jsx)("code",{className:o().side,children:"animation-duration"})," property & to change the number of times the animation takes place with the property ",(0,n.jsx)("code",{className:o().side,children:"animation-iteration-count"})," in CSS"]}),(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsx)("i",{className:"bx bx-loader bx-spin  bx-md"}),(0,n.jsx)("i",{className:"bx bxs-bell bx-tada bx-md"}),(0,n.jsx)("i",{className:"bx bxs-error bx-flashing bx-md"}),(0,n.jsx)("i",{className:"bx bx-radio-circle bx-burst bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-left bxs-left-arrow-circle bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-right bxs-right-arrow-circle bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-up bxs-up-arrow-circle bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-down bxs-down-arrow-circle bx-md"})]}),(0,n.jsxs)("div",{className:o().hljs_wrap,children:[" ",(0,n.jsxs)(d.default,{className:"xml",children:["<i class='bx bxs-like bx-spin'></i>","\n","<i class='bx bxs-like bx-tada'></i>","\n","<i class='bx bxs-like bx-flashing'></i>","\n","<i class='bx bxs-like bx-burst'></i>","\n","<i class='bx bxs-like bx-fade-left'></i>","\n","<i class='bx bxs-like bx-fade-right'></i>","\n","<i class='bx bxs-like bx-fade-up'></i>","\n","<i class='bx bxs-like bx-fade-down'></i>","\n","\x3c!-- Boxicons web component --\x3e","\n","<box-icon name='bell' animation='tada'></box-icon>","\n"]})]})]}),(0,n.jsx)("h4",{id:"animation-hover",children:"Animation on Hover"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["  Animate your icons on hover with pre built CSS animations using classes ",(0,n.jsx)("code",{className:o().side,children:"bx-spin-hover"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-tada-hover"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-flashing-hover"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-burst-hover"}),",",(0,n.jsx)("code",{className:o().side,children:"bx-fade-left-hover"})," and ",(0,n.jsx)("code",{className:o().side,children:"bx-fade-right-hover"})]}),"     ",(0,n.jsxs)("p",{children:["You can change the speed of the animation with the ",(0,n.jsx)("code",{className:o().side,children:"animation-duration"})," property & to change the number of times the animation takes place with the property ",(0,n.jsx)("code",{className:o().side,children:"animation-iteration-count"})," in CSS"]}),(0,n.jsxs)("div",{className:o().icon_display,children:[(0,n.jsx)("i",{className:"bx bx-loader bx-spin-hover  bx-md"}),(0,n.jsx)("i",{className:"bx bxs-bell bx-tada-hover bx-md"}),(0,n.jsx)("i",{className:"bx bxs-error bx-flashing-hover bx-md"}),(0,n.jsx)("i",{className:"bx bx-radio-circle bx-burst-hover bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-left-hover bxs-left-arrow-circle bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-right-hover bxs-right-arrow-circle bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-up-hover bxs-up-arrow-circle bx-md"}),(0,n.jsx)("i",{className:"bx bx-fade-down-hover bxs-down-arrow-circle bx-md"})]}),(0,n.jsx)("div",{className:o().hljs_wrap,children:(0,n.jsxs)(d.default,{className:"xml",children:["<i class='bx bxs-like bx-spin-hover'></i>","\n","<i class='bx bxs-like bx-tada-hover'></i>","\n","<i class='bx bxs-like bx-flashing-hover'></i>","\n","<i class='bx bxs-like bx-burst-hover'></i>","\n","<i class='bx bxs-like bx-fade-left-hover'></i>","\n","<i class='bx bxs-like bx-fade-right-hover'></i>","\n","<i class='bx bxs-like bx-fade-up-hover'></i>","\n","<i class='bx bxs-like bx-fade-down-hover'></i>","\n","\x3c!-- Boxicons web component --\x3e","\n","<box-icon name='bell' animation='tada-hover'></box-icon>","\n"]})})]}),(0,n.jsx)("h3",{id:"contribution",children:"Contribution"}),(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:["Want to report a bug ? Have some suggestions or ideas ? Have an icon or a feature request? Create a new issue on Github with the appropriate label ",(0,n.jsx)("a",{href:"https://github.com/atisawd/boxicons/issues/new",rel:"noreferrer",target:"_blank",children:"here"})]})}),(0,n.jsx)("h3",{id:"license",children:"License"}),(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:[" Boxicons is an open source project , you can use them in your commercial projects too. The icons (.svg) files are free to download and are licensed under ",(0,n.jsx)("a",{href:"https://creativecommons.org/licenses/by/4.0/",rel:"noreferrer",target:"_blank",children:"CC 4.0"})," . By downloading it is assumed that you agree with the terms mentioned in CC 4.0. The fonts files are licensed under ",(0,n.jsx)("a",{href:"https://opensource.org/licenses/OFL-1.1",rel:"noreferrer",target:"_blank",children:"SIL OFL 1.1"}),"Attribution is not required but is appreciated Other files which are not fonts or icons are licensed under the ",(0,n.jsx)("a",{href:"http://opensource.org/licenses/MIT",rel:"noreferrer",target:"_blank",children:"MIT License"})]})})]})},h=i(79077),b=i.n(h);var m=function(e){var s=e.dark;return(0,n.jsx)("aside",{className:s?b().sidebar+" "+b().dark:b().sidebar,children:(0,n.jsxs)("ul",{className:b().sidebar_list,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#install-via-npm",children:"Install via NPM"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#web-component",children:"Using the Web Component"})}),(0,n.jsxs)("li",{children:[(0,n.jsx)("a",{href:"#usage-as-font",children:"Usage as a Font"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#import-css",children:"Import the CSS"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#html",children:"HTML"})})]})]}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#starter-template",children:"Starter Templates"})}),(0,n.jsxs)("li",{children:[(0,n.jsx)("a",{href:"#styling",children:"Styling"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#sizing",children:"Sizing"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#rotation-flipping",children:"Rotation & Flipping"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#list-icons",children:"List Icons"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#fixed-width",children:"Fixed Width"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#pull-icon",children:"Pulled Icons"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#border",children:"Border"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#animation",children:"Animation"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#animation-hover",children:"Animation on Hover"})})]})]}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#contribution",children:"Contribution"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#license",children:"License"})})]})})},u=i(9008),p=i(15738);var f=function(e){var s=e.dark;return(0,n.jsxs)("div",{className:s?t().container+" "+t().dark:t().container,children:[(0,n.jsx)(p.Z,{}),(0,n.jsx)(u.default,{children:(0,n.jsx)("title",{children:"Usage"})}),(0,n.jsx)("div",{className:t().page_head,children:(0,n.jsx)("div",{className:t().page_head_bg,children:(0,n.jsxs)("div",{className:t().page_head_in,children:[(0,n.jsx)("h1",{children:"Getting Started"}),(0,n.jsx)("p",{children:"Switching to boxicons is easy and can be done in 2 steps. There are more features than just the icons set. Boxicons also follows the official Google Material Design guidelines"})]})})}),(0,n.jsxs)("main",{className:t().main,children:[(0,n.jsx)(m,{dark:s}),(0,n.jsx)(x,{dark:s})]})]})}},47482:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usage",function(){return i(38207)}])},55471:function(e){e.exports={content:"Content_content__2nb9J",side:"Content_side__vgs1O",tab:"Content_tab__3EMIM",hljs_wrap:"Content_hljs_wrap__l2G4u",icon_display:"Content_icon_display__5ZRhA",dark:"Content_dark__3v5TP"}},79077:function(e){e.exports={sidebar:"Sidebar_sidebar__1dDvi",sidebar_list:"Sidebar_sidebar_list__b8PRS",dark:"Sidebar_dark__2j1VR"}},26569:function(e){e.exports={container:"Usage_container__3QUoV",main:"Usage_main__1tWBP",page_head:"Usage_page_head__3ggCC",page_head_bg:"Usage_page_head_bg__1y5nc",page_head_in:"Usage_page_head_in__2-2oC",dark:"Usage_dark__1BfLn"}},9008:function(e,s,i){e.exports=i(92775)}},function(e){e.O(0,[951,774,888,179],(function(){return s=47482,e(e.s=s);var s}));var s=e.O();_N_E=s}]);