(window.webpackJsonp=window.webpackJsonp||[]).push([[60,6,9,11,17,44],{402:function(t,e,n){var l=n(18),r="["+n(403)+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(404).default})},405:function(t,e,n){"use strict";var l=n(10),r=n(4),o=n(81),c=n(14),d=n(12),f=n(35),h=n(159),v=n(58),m=n(5),C=n(60),_=n(59).f,x=n(25).f,y=n(13).f,w=n(402).trim,S="Number",I=r.Number,T=I.prototype,E=f(C(T))==S,A=function(t){var e,n,l,r,o,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+f}for(c=(o=f.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>r)return NaN;return parseInt(o,l)}return+f};if(o(S,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var F,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(E?m((function(){T.valueOf.call(n)})):f(n)!=S)?h(new I(A(e)),n,N):A(e)},O=l?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;O.length>D;D++)d(I,F=O[D])&&!d(N,F)&&y(N,F,x(I,F));N.prototype=T,T.constructor=N,c(r,S,N)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var l={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var l=n(2),r=n(18),o=n(84),c=n(85),d=n(161),f=n(3),h=n(21),v=f("replace"),m=RegExp.prototype,C=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,f,x,y,w,S,I,T=r(this),E=0,A=0,F="";if(null!=t){if((n=o(t))&&!~String(r("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(l=t[v]))return l.call(t,T,e);if(h&&n)return String(T).replace(t,e)}for(f=String(T),x=String(t),(y="function"==typeof e)||(e=String(e)),w=x.length,S=C(1,w),E=_(f,x,0);-1!==E;)I=y?String(e(x,E,f)):d(x,f,E,[],void 0,e),F+=f.slice(A,E)+I,A=E+w,E=_(f,x,E+S);return A<f.length&&(F+=f.slice(A)),F}})},409:function(t,e,n){"use strict";var l=n(2),r=n(402).trim;l({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return r(this)}})},410:function(t,e,n){var l=n(5),r=n(403);t.exports=function(t){return l((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(112);var l={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var l,r=new Array(1+n++).join("  "),o=new Array(n-1).join("  "),i=0;i<e.children.length;i++)l=document.createTextNode("\n"+r),e.insertBefore(l,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(l=document.createTextNode("\n"+o),e.appendChild(l));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var l={props:["data"]},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);var l=n(8),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"form-control"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},500:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"daisyUI — Tailwind CSS text input field component",meta:[{hid:"description",name:"description",content:"Tailwind CSS text input field component - Tailwind CSS text input field examples"}]}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"form-control",desc:"Container element"},{class:"label",desc:"For helper text"},{class:"input",desc:"For <input> element"}],utilities:[{class:"input-bordered",desc:"Adds border to input"},{class:"input-ghost",desc:"Adds ghost style to checkbox"},{class:"input-primary",desc:"Adds `primary` color to input"},{class:"input-secondary",desc:"Adds `secondary` color to input"},{class:"input-accent",desc:"Adds `accent` color to input"},{class:"input-info",desc:"Adds `info` color to input"},{class:"input-success",desc:"Adds `success` color to input"},{class:"input-warning",desc:"Adds `warning` color to input"},{class:"input-error",desc:"Adds `error` color to input"},{class:"input-lg",desc:"Large size for input"},{class:"input-md",desc:"Medium (default) size for input"},{class:"input-sm",desc:"Small size for input"},{class:"input-xs",desc:"Extra small size for input"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"input with border",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input input-bordered",attrs:{type:"text",placeholder:"username"}})],1)],1),t._v(" "),n("Wrapper",{attrs:{title:"input without border",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-10 card bg-base-200"},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input",attrs:{type:"text",placeholder:"username"}})],1)],1)]),t._v(" "),n("Wrapper",{attrs:{title:"input ghost (no background)",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-10 card bg-base-200"},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input input-ghost",attrs:{type:"text",placeholder:"username"}})],1)],1)]),t._v(" "),n("Wrapper",{attrs:{title:"input disabled",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Disabled input")])]),t._v(" "),n("Input",{staticClass:"input input-bordered",attrs:{type:"text",placeholder:"username",disabled:""}})],1)],1),t._v(" "),n("Wrapper",{attrs:{title:"input helper texts",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")]),t._v(" "),n("a",{staticClass:"label-text-alt",attrs:{href:"#"}},[t._v("\n          Need help?\n        ")])]),t._v(" "),n("Input",{staticClass:"input input-bordered",attrs:{type:"text",placeholder:"username"}}),t._v(" "),n("label",{staticClass:"label"},[n("a",{staticClass:"label-text-alt",attrs:{href:"#"}},[t._v("Forgot username?")]),t._v(" "),n("a",{staticClass:"label-text-alt",attrs:{href:"#"}},[t._v("Are you sure?")])])],1)],1),t._v(" "),n("Wrapper",{attrs:{title:"input with brand colors",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Primary")])]),t._v(" "),n("Input",{staticClass:"input input-primary input-bordered",attrs:{type:"text",placeholder:"username"}})],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Secondary")])]),t._v(" "),n("Input",{staticClass:"input input-secondary input-bordered",attrs:{type:"text",placeholder:"username"}})],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Accent")])]),t._v(" "),n("Input",{staticClass:"input input-accent input-bordered",attrs:{type:"text",placeholder:"username"}})],1)],1),t._v(" "),n("Wrapper",{attrs:{title:"input with state colors",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input input-info input-bordered",attrs:{type:"text",placeholder:"username"}}),t._v(" "),n("label",{staticClass:"label"},[n("span",{staticClass:"label-text-alt"},[t._v("Please enter data")])])],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input input-success input-bordered",attrs:{type:"text",placeholder:"username"}}),t._v(" "),n("label",{staticClass:"label"},[n("span",{staticClass:"label-text-alt"},[t._v("Data is valid")])])],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input input-warning input-bordered",attrs:{type:"text",placeholder:"username"}}),t._v(" "),n("label",{staticClass:"label"},[n("span",{staticClass:"label-text-alt"},[t._v("Data must be more than 3 characters")])])],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Username")])]),t._v(" "),n("Input",{staticClass:"input input-error input-bordered",attrs:{type:"text",placeholder:"username"}}),t._v(" "),n("label",{staticClass:"label"},[n("span",{staticClass:"label-text-alt"},[t._v("Data is incorrect")])])],1)],1),t._v(" "),n("Wrapper",{attrs:{title:"input sizes",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Large")])]),t._v(" "),n("Input",{staticClass:"input input-lg input-bordered",attrs:{type:"text",placeholder:"username"}})],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Normal")])]),t._v(" "),n("Input",{staticClass:"input input-bordered",attrs:{type:"text",placeholder:"username"}})],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Small")])]),t._v(" "),n("Input",{staticClass:"input input-sm input-bordered",attrs:{type:"text",placeholder:"username"}})],1),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("Tiny")])]),t._v(" "),n("Input",{staticClass:"input input-xs input-bordered",attrs:{type:"text",placeholder:"username"}})],1)],1),t._v(" "),n("Wrapper",{attrs:{title:"with button",classes:"flex flex-col space-y-2 max-w-xs"}},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("connected")])]),t._v(" "),n("div",{staticClass:"relative"},[n("Input",{staticClass:"w-full pr-16 input input-primary input-bordered",attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"absolute top-0 right-0 rounded-l-none btn btn-primary"},[t._v("go")])],1)]),t._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[t._v("with space")])]),t._v(" "),n("div",{staticClass:"flex space-x-2"},[n("Input",{staticClass:"w-full input input-primary input-bordered",attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"btn btn-primary"},[t._v("go")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Input:n(113).default,FormControl:n(415).default,Wrapper:n(411).default,Button:n(404).default})}}]);