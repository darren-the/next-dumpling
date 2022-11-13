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
	"inactive": "navbar_inactive__4qKRM",
	"socialBtn": "navbar_socialBtn__q_GoS",
	"socialText": "navbar_socialText__oKQDC"
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
        rel: "noreferrer h-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "h-full relative",
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

/***/ 1771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_desktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5758);
/* harmony import */ var _tickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(520);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tickers__WEBPACK_IMPORTED_MODULE_2__]);
_tickers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tickers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_desktop__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main-content",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_desktop)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./modules/utils.js

const useScreenWidth = ()=>{
    // handle window resizing
    const defaultWidth =  false ? 0 : "768px";
    const { 0: windowSize , 1: setWindowSize  } = useState(defaultWidth);
    useEffect(()=>{
        const handleWindowResize = ()=>{
            setWindowSize(window.innerWidth);
        };
        window.addEventListener("resize", handleWindowResize);
        console.log(windowSize);
        return ()=>{
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [
        windowSize
    ]);
    return windowSize;
};

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
    const { 0: showNav , 1: setShowNav  } = (0,external_react_.useState)(false);
    const { 0: grayscreenStyle , 1: setGrayscreenStyle  } = (0,external_react_.useState)("hidden");
    const { 0: navPosition , 1: setNavPosition  } = (0,external_react_.useState)("left-[-225px]");
    const toggleNav = ()=>{
        if (showNav) {
            setShowNav(false);
            setNavPosition("left-[-225px]");
            setGrayscreenStyle("hidden");
        } else {
            setShowNav(true);
            setNavPosition("left-0");
            setGrayscreenStyle("inline-block");
        }
        console.log(navPosition);
    };
    const mobileHeader = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-[56px] w-screen fixed top-0 left-0 centering z-10 bg-white md:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "bg-none border-none absolute left-6 cursor-pointer centering",
                onClick: toggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/assets/navbar-expand-btn.svg",
                    alt: "expand button",
                    height: 18,
                    width: 19
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "select-none centering",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/logo-small.svg",
                        alt: "navbar tight logo",
                        height: 47,
                        width: 151
                    })
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            mobileHeader,
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `fixed top-0 left-0 h-screen w-screen bg-custom-darkgray opacity-50 select-none z-20 ${grayscreenStyle}`,
                onClick: toggleNav
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `bg-white fixed tl flex flex-col w-[225px] md:w-[313px] h-screen right-border
            select-none md:left-0 z-30 prim-trans ${navPosition}`,
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
                        className: "h-[72px] md:h-[84px] px-6 pb-8 bottom-border",
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
                        className: "px-[18px] py-[12px] md:p-6 flex flex-row justify-between items-center gap-x-[8.5px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://discord.com/invite/fortunefriendsclub",
                                className: (navbar_module_default()).socialBtn,
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
                                        className: (navbar_module_default()).socialText,
                                        children: "Discuss"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://twitter.com/FortuneFriends_",
                                className: (navbar_module_default()).socialBtn,
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
                                        className: (navbar_module_default()).socialText,
                                        children: "Follow"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_desktop = (NavbarDesktop);


/***/ }),

/***/ 520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_tickers_tickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5405);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_tickers_tickers__WEBPACK_IMPORTED_MODULE_2__]);
_modules_tickers_tickers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Tickers = ()=>{
    const { 0: tickers , 1: setTickers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_modules_tickers_tickers__WEBPACK_IMPORTED_MODULE_2__/* .getTickers */ .c)().then((data)=>{
            const tickerComponents = Object.keys(data).map((key, index)=>{
                const ticker = data[key];
                const priceChange = ticker.quote.USD.percent_change_24h;
                const priceChangeStr = (priceChange >= 0 ? "+" : "") + priceChange.toFixed(2) + "%";
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-8 centering bottom-border right-border top-border min-w-[275px] md:border-t-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-10 h-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `/assets/tickers-square${index}.svg`,
                                alt: `ticker icon ${index}`,
                                width: 40,
                                height: 40,
                                layout: "fixed"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-3 flex flex-col justify-evenly w-full font-jakarta-bold",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "min-w-[133px] w-full flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-base leading-4",
                                            children: ticker.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-3",
                                            children: "$" + parseFloat(ticker.quote.USD.price.toFixed(2)).toLocaleString()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "min-w-[133px] w-full flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm leading-[0.875rem] text-custom-darkgray",
                                            children: ticker.symbol + " (24h)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm leading-[0.875rem]",
                                            style: {
                                                color: priceChange >= 0 ? "#70D186" : "red"
                                            },
                                            children: priceChangeStr
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, index);
            });
            setTickers(tickerComponents);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "z-10 h-[60px] md:ml-[313px] w-full md:w-[calc(100vw-313px)] grid grid-cols-3-1fr bg-white fixed top-[56px] md:top-0 overflow-y-scroll",
        children: tickers
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tickers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getTickers)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getTickers = async ()=>{
    const url = "https://us-central1-news-api-37579.cloudfunctions.net/app" + "/coinmarketcap";
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    return response.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1771);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__]);
_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();