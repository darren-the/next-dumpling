"use strict";
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(851);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8568);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7504);




const NoImageCard = ({ borderBottom , content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `flex flex-row items-center self-center mb-6 ${borderBottom ? "bottom-border" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col justify-center basis-60 grow",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: "min-h-4",
                    contentType: content.contentType,
                    tag: content.tag
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "base-extrabold-text my-[0.2em]",
                    children: content.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-[6px] text-medium-sm-darkgray",
                    children: (0,_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__/* .limitStrLength */ .H)(content.description)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_metadata__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        author: content.author,
                        published: content.published
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoImageCard);


/***/ }),

/***/ 9768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ getRSS)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getRSS = async ()=>{
    const newsSources = [
        "cointelegraph",
        "coindesk"
    ];
    const feeds = await Promise.all(newsSources.map((source)=>axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"https://us-central1-news-api-37579.cloudfunctions.net/app"}/${source}`).then((response)=>response.data.rss.channel.item.map((item)=>{
                // any source-sepcific preprocessing will occur here:
                if (source === "cointelegraph") {
                    // author parse
                    item["dc:creator"] = item["dc:creator"].split(/\s+/).slice(2).join(" ");
                    // description parse
                    const result = item.description.match(/(<p>)(.*)(<\/p>)/g);
                    item.description = result.length > 0 ? result[0].slice(3, -4) : "";
                }
                return {
                    source: response.data.rss.channel.link,
                    title: item.title,
                    description: item.description,
                    author: item["dc:creator"],
                    published: item.pubDate,
                    link: item.link
                };
            }))));
    const aggFeeds = [].concat(...feeds);
    const sortedFeeds = aggFeeds.sort((a, b)=>Date.parse(b.published) - Date.parse(a.published));
    return sortedFeeds;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ limitStrLength)
/* harmony export */ });
const limitStrLength = (text)=>{
    // Limit length of string
    var splitText = text.slice(0, 90).split(" ");
    var joinedText = "";
    // Ensure the last word is actually a word (for aesthetic purposes)
    while(splitText.length > 0){
        const lastWord = splitText.pop();
        if (lastWord.match(/^[a-zA-Z]+$/g)) {
            splitText.push(lastWord);
            joinedText = splitText.join(" ");
            break;
        }
    }
    return joinedText + "...";
};


/***/ })

};
;