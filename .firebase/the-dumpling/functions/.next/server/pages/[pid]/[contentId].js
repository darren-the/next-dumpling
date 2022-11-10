"use strict";
(() => {
var exports = {};
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 2442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cards_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7504);
/* harmony import */ var _components_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8568);
/* harmony import */ var _modules_contentful_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6829);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8706);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_contentful_contentful_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5154);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2442);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4683);
/* harmony import */ var _modules_rss_rss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9768);
/* harmony import */ var _components_cards_no_image_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_contentful_content__WEBPACK_IMPORTED_MODULE_3__, _modules_rss_rss__WEBPACK_IMPORTED_MODULE_9__]);
([_modules_contentful_content__WEBPACK_IMPORTED_MODULE_3__, _modules_rss_rss__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Content = ({ contentJSON , RSS  })=>{
    var content = JSON.parse(contentJSON);
    content.body = (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__.documentToReactComponents)(content.body, _modules_contentful_contentful_options__WEBPACK_IMPORTED_MODULE_6__/* .contentfulOptions */ .d);
    // Create RSS cards
    const RSSCards = RSS && RSS.length > 0 ? RSS.slice(0, 4).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: item.link,
            className: "max-w-[385px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_no_image_card__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                content: item
            })
        }, index)) : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-areas-content grid-cols-content",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid-in-content-outer p-8 flex flex-col justify-center max-w-[865px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                contentType: content.contentType,
                                tag: content.tag
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-full mb-8 self-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "heading-extrabold mt-[10px]",
                                        children: content.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "base-medium-text mb-[10px]",
                                        children: content.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_metadata__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        author: content.author,
                                        published: content.published
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex self-center image-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: content.banner.url,
                                    alt: "content banner",
                                    height: content.banner.height,
                                    width: content.banner.width
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: content.body
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-custom-blue p-8 rounded-md flex justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-[550px] flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "heading-extrabold text-white text-center",
                                    children: "Stay on top of the space, get the hottest degen news in your inbox."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-4 h-[52px] max-w-[265px] w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        href: "https://dumpling.beehiiv.com/"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid-in-content-rec bg-white w-full flex justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            contentType: "rss"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-2-auto grid-rows-2-auto gap-x-8",
                            children: RSSCards
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid-in-content-side left-border"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);
const getStaticPaths = async ()=>{
    const getPaths = async (contentType)=>{
        const ids = await (0,_modules_contentful_content__WEBPACK_IMPORTED_MODULE_3__/* .getContentIds */ .U)(contentType);
        return ids.map((id)=>{
            return {
                params: {
                    pid: contentType,
                    contentId: id
                }
            };
        });
    };
    const paths = [].concat(await getPaths("news"), await getPaths("interviews"));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const content = await (0,_modules_contentful_content__WEBPACK_IMPORTED_MODULE_3__/* .getContent */ .L)(params.pid, params.contentId);
    const contentJSON = JSON.stringify(content && content.length > 0 ? content[0] : {});
    const RSS = await (0,_modules_rss_rss__WEBPACK_IMPORTED_MODULE_9__/* .getRSS */ .x)();
    return {
        props: {
            contentJSON,
            RSS
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8706:
/***/ ((module) => {

module.exports = require("@contentful/rich-text-react-renderer");

/***/ }),

/***/ 413:
/***/ ((module) => {

module.exports = require("@contentful/rich-text-types");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3662:
/***/ ((module) => {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,903,263], () => (__webpack_exec__(8956)));
module.exports = __webpack_exports__;

})();