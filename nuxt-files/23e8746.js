(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{491:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{DAISYUI_VERSION:"1.10.0"}},head:function(){return{title:"daisyUI — Add Themes",meta:[{hid:"description",name:"description",content:"How to create new daisyUI theme? How to add new custom theme to daisyUI"}]}}},o=n(8),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-10 tabs"},[n("NuxtLink",{staticClass:"tab tab-lifted tab-lg",attrs:{to:"/docs/default-themes"}},[n("Icon",{staticClass:"inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6",attrs:{glyph:"color-swatch"}}),t._v("Use themes")],1),t._v(" "),n("NuxtLink",{staticClass:"tab tab-lifted tab-lg tab-active",attrs:{to:"/docs/add-themes"}},[n("Icon",{staticClass:"inline-block w-4 h-4 mr-2 stroke-current lg:w-6 lg:h-6",attrs:{glyph:"document-add"}}),t._v("Add theme")],1),t._v(" "),n("span",{staticClass:"flex-grow hidden cursor-default tab tab-lifted tab-lg sm:block"})],1),t._v(" "),t._m(0),t._v(" "),n("br"),t._v("Add your custom themes in tailwind.config.js:\n    "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n    You can also set more variables to customize your theme.\n  ")]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/config"}},[t._v("\n      Next: Config\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Add theme")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("daisyui: {\n    themes: [\n      {\n        'mytheme': { "),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("                         /* your theme name */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/a991f7/000000?text=+"}}),t._v(" 'primary' : '#a991f7',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("           /* Primary color */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/8462f4/000000?text=+"}}),t._v(" 'primary-focus' : '#8462f4',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("     /* Primary color - focused */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" 'primary-content' : '#ffffff',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("   /* Foreground content color to use on primary color */")]),t._v("\n\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f6d860/000000?text=+"}}),t._v(" 'secondary' : '#f6d860',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("         /* Secondary color */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f3cc30/000000?text=+"}}),t._v(" 'secondary-focus' : '#f3cc30',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("   /* Secondary color - focused */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" 'secondary-content' : '#ffffff',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v(" /* Foreground content color to use on secondary color */")]),t._v("\n\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/37cdbe/000000?text=+"}}),t._v(" 'accent' : '#37cdbe',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("            /* Accent color */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2aa79b/000000?text=+"}}),t._v(" 'accent-focus' : '#2aa79b',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("      /* Accent color - focused */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" 'accent-content' : '#ffffff',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("    /* Foreground content color to use on accent color */")]),t._v("\n\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/3d4451/000000?text=+"}}),t._v(" 'neutral' : '#3d4451',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("           /* Neutral color */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2a2e37/000000?text=+"}}),t._v(" 'neutral-focus' : '#2a2e37',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("     /* Neutral color - focused */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" 'neutral-content' : '#ffffff',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("   /* Foreground content color to use on neutral color */")]),t._v("\n\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" 'base-100' : '#ffffff',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("          /* Base color of page, used for blank backgrounds */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f9fafb/000000?text=+"}}),t._v(" 'base-200' : '#f9fafb',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("          /* Base color, a little darker */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/d1d5db/000000?text=+"}}),t._v(" 'base-300' : '#d1d5db',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("          /* Base color, even more darker */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/1f2937/000000?text=+"}}),t._v(" 'base-content' : '#1f2937',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("      /* Foreground content color to use on base color */")]),t._v("\n\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2094f3/000000?text=+"}}),t._v(" 'info' : '#2094f3',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("              /* Info */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/009485/000000?text=+"}}),t._v(" 'success' : '#009485',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("           /* Success */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff9900/000000?text=+"}}),t._v(" 'warning' : '#ff9900',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("           /* Warning */")]),t._v("\n          "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff5724/000000?text=+"}}),t._v(" 'error' : '#ff5724',"),n("span",{staticClass:"text-neutral-content text-opacity-30"},[t._v("             /* Error */")]),t._v("\n        },\n      },\n    ],\n  },")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-2xl font-bold"},[n("span",[t._v("CSS variables you can use in themes")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("'--rounded-box': '1rem',        "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for cards and other big elements */")]),t._v("\n  '--rounded-btn': '0.5rem',      "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for buttons and similar elements */")]),t._v("\n  '--rounded-badge': '1.9rem',    "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for badge and other small elements */")]),t._v("\n\n  '--animation-btn': '0.25s',     "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* bounce animation time for button */")]),t._v("\n  '--animation-input': '.2s',     "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* bounce animation time for checkbox, toggle, etc */")]),t._v("\n\n  '--padding-card': '2rem',       "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default card-body padding */")]),t._v("\n\n  '--btn-text-case': 'uppercase', "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default text case for buttons */")]),t._v("\n  '--navbar-padding': '.5rem',    "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default padding for navbar */")]),t._v("\n  '--border-btn': '1px',          "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default border size for button */")]),t._v("\n  '--focus-ring': '2px',          "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* focus ring size for button and inputs */")]),t._v("\n  '--focus-ring-offset': '2px',   "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* focus ring offset size for button and inputs */")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(162).default})}}]);