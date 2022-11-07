(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9905:
/***/ ((module) => {

// Exports
module.exports = {
	"active": "navbar_active__aUwE_",
	"inactive": "navbar_inactive__4qKRM"
};


/***/ }),

/***/ 2442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: href,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "h-[52px] relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "round-button br border-[3px] border-solid border-black"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "round-button tl bg-black centering prim-trans hover:translate-x-[6px] hover:translate-y-[6px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white font-jakarta-bold text-sm",
                        children: "Subscribe"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/layout/navbar.module.css
var navbar_module = __webpack_require__(9905);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(2442);
;// CONCATENATED MODULE: ./components/layout/navbar-desktop.js






const NavbarDesktop = ()=>{
    const router = (0,router_.useRouter)();
    const menuIds = [
        "news",
        "memes",
        "interviews",
        "jobs"
    ];
    const menuNames = {
        [menuIds[0]]: "Web3 News",
        [menuIds[1]]: "Memes",
        [menuIds[2]]: "Interviews",
        [menuIds[3]]: "Crypto Jobs"
    };
    const menu = menuIds.map((id)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/${id}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: `text-base py-2 pl-4 border-l-4 border-solid prim-trans w-[fit-content]
          ${router.asPath === "/" + id ? (navbar_module_default()).active : (navbar_module_default()).inactive}`,
                children: menuNames[id]
            })
        }, id));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed tl flex flex-col w-[313px] h-screen right-border select-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "bottom-border",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/logo.svg",
                        alt: "The Dumpling logo",
                        width: 313,
                        height: 114
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-8 px-6 flex flex-col",
                children: menu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-6 pb-8 bottom-border",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                    href: "https://dumpling.beehiiv.com/"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-6 bottom-border",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row w-[fit-content]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/search-icon.svg",
                            alt: "search icon",
                            width: 14,
                            height: 16
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "base-bold-text ml-6",
                            children: "Search"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-6 bottom-border",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row w-[fit-content]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/about-icon.svg",
                            alt: "search icon",
                            width: 20,
                            height: 20
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "base-bold-text ml-4",
                            children: "About"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-6 flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://discord.com/invite/fortunefriendsclub",
                        className: "bg-custom-blue centering h-10 w-[127px] rounded-full hover:bg-[#85a0d1]",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/assets/discord-icon.svg",
                                alt: "discord icon",
                                width: 20,
                                height: 14
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-jakarta-bold text-white text-sm ml-4",
                                children: "Discuss"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://twitter.com/FortuneFriends_",
                        className: "bg-custom-blue centering h-10 w-[127px] rounded-full hover:bg-[#85a0d1]",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/assets/twitter-icon.svg",
                                alt: "discord icon",
                                width: 18,
                                height: 14
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-jakarta-bold text-white text-sm ml-4",
                                children: "Follow"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_desktop = (NavbarDesktop);

;// CONCATENATED MODULE: ./components/layout/tickers.js

const Tickers = ()=>{
    // const tickers = Object.keys(tickerData).map((key, index) => {
    //   const ticker = res.data[key]
    //   const priceChange = ticker.quote.USD.percent_change_24h
    //   const priceChangeStr = ((priceChange >= 0) ? "+" : "") + priceChange.toFixed(2) + "%"
    //   return (
    //     <div>
    //       <div>
    //         <Image 
    //           src={`/assets/tickers-square${index}.svg`}
    //           alt={`ticker icon ${index}`}
    //           width={40}
    //           height={40}
    //         />
    //         <div>
    //           <div>
    //             <p>{ticker.name}</p>
    //             <p>{'$' + parseFloat(ticker.quote.USD.price.toFixed(2)).toLocaleString()}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // })
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
};
/* harmony default export */ const tickers = (Tickers);

;// CONCATENATED MODULE: ./components/layout/layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(tickers, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_desktop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main-content",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(9634)));
module.exports = __webpack_exports__;

})();