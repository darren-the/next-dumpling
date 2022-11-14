exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 1971:
/***/ ((module) => {

// Exports
module.exports = {
	"contentfulText": "contentful_contentfulText__fs1ou",
	"contentfulHeading": "contentful_contentfulHeading__ql27f"
};


/***/ }),

/***/ 7504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Metadata = (props)=>{
    const date = new Date(props.published);
    const dateString = `${new Intl.DateTimeFormat("en-US", {
        month: "short"
    }).format(date)} ${date.getDate()}, ${date.getFullYear()}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "inline font-jakarta-medium text-custom-darkgray",
                        children: "By "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "inline font-jakarta-bold text-black",
                        children: props.author
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "font-jakarta-medium text-sm text-custom-darkgray text-right",
                children: dateString
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Metadata);
Metadata.defaultProps = {
    author: "Anonymous",
    published: "2022-01-01"
};


/***/ }),

/***/ 4683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ contentType  })=>{
    const news = {
        heading: "Latest Stories",
        subheading: "Dig into the top trending bao-sized stories"
    };
    const interviews = {
        heading: "Interviews",
        subheading: "Learn more about the humans of web3"
    };
    const rss = {
        heading: "More Stories",
        subheading: "Find more stories on what's happening"
    };
    const options = {
        news,
        interviews,
        rss
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mr-[10px] heading-extrabold",
                        children: options[contentType].heading
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/assets/home-arrow-icon.svg",
                        alt: "home arrow icon",
                        width: 20,
                        height: 28
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "base-medium-text",
                children: options[contentType].subheading
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 8568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Tag = ({ contentType , tag , className  })=>{
    const contentTypeStr = contentType.charAt(0).toUpperCase() + contentType.slice(1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: `text-xs font-jakarta-bold text-custom-blue ${className}`,
        children: `${contentTypeStr} > ${tag}`
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);
Tag.defaultProps = {
    contentType: "INSERT CONTENT TYPE",
    tag: "INSERT TAG",
    className: ""
};


/***/ }),

/***/ 6829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getContent),
/* harmony export */   "U": () => (/* binding */ getContentIds)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8706);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getContent = async (contentType, id)=>{
    const url = "https://us-central1-news-api-37579.cloudfunctions.net/app" + `/contentful/${contentType}`;
    const response = id ? await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${url}?id=${id}`) : await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    const content = response.data.map((item)=>{
        return {
            ...item,
            banner: item.banner ? {
                url: `https:${item.banner.fields.file.url}`,
                height: item.banner.fields.file.details.image.height,
                width: item.banner.fields.file.details.image.width
            } : null
        };
    });
    const contentSorted = content.sort((a, b)=>Date.parse(b.published) - Date.parse(a.published));
    return contentSorted;
};
const getContentIds = async (contentType)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://us-central1-news-api-37579.cloudfunctions.net/app" + `/contentful/${contentType}/?onlyIds=1`);
    return response.data.ids;
} // export const splitContentByType = (content) => {
 //     // sort content by date in descending order
 //     const contentArr = Object.keys(content).map((key) => content[key])
 //     const contentSorted = contentArr.sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
 //     // split content by content Type
 //     var splitContent = {}
 //     contentSorted.forEach((item) => {
 //         const targetContent = splitContent[item.contentType]
 //         splitContent[item.contentType] = (targetContent) ? [ ...targetContent, item] : [item]
 //     })
 //     return splitContent
 //   }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ contentfulOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(413);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3662);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentful_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1971);
/* harmony import */ var _contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





const paragraphComponent = (children)=>{
    // embed tweet if link is provided
    if (children && children.length > 0 && typeof children[0] === "string") {
        const tweetMatches = children[0].match(/https:\/\/twitter\.com/g);
        if (tweetMatches) {
            const tweetId = children[0].replace(/https:\/\/twitter\.com\/(.*)status\//g, "");
            if (!tweetId.match(/[0-9]/g)) {
                console.log("tweet id is invalid");
                return;
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "centering",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-[fit-content] max-w-lg w-full flex flex-col mb-10 self-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__.TwitterTweetEmbed, {
                        tweetId: tweetId
                    })
                })
            });
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulText),
        children: children
    });
};
const contentfulOptions = {
    renderMark: {
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.MARKS.BOLD]: (text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                className: "font-jakarta-bold inline",
                children: text
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.MARKS.UNDERLINE]: (text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                className: "decoration-solid decoration-1 inline",
                children: text
            })
    },
    renderNode: {
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.PARAGRAPH]: (node, children)=>paragraphComponent(children),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_1]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `${(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulHeading)} leading-[2.7rem]`,
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_2]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: `${(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulHeading)} leading-[2.2rem]`,
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_3]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: `${(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulHeading)} leading-[1.87rem]`,
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_4]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: `${(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulHeading)} leading-[1.7rem]`,
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_5]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: `${(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulHeading)} leading-[1.5rem]`,
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.HEADING_6]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: `${(_contentful_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentfulHeading)} leading-[1.35rem]`,
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.UL_LIST]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "ml-5 list-disc",
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.LIST_ITEM]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "mt-0 ml-[2.5rem] inline leading-[1.8rem]",
                children: children
            }),
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.BLOCKS.EMBEDDED_ASSET]: (node, children)=>{
            const fields = node.data.target.fields;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-fit self-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: `https://${fields.file.url}`,
                    alt: fields.description,
                    height: fields.file.details.image.height,
                    width: fields.file.details.image.width
                })
            });
        },
        [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_1__.INLINES.HYPERLINK]: ({ data  }, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: data.uri,
                className: "font-jakarta-bold inline decoration-solid decoration-1 decoration-custom-blue text-custom-blue",
                children: children
            })
    }
};


/***/ })

};
;