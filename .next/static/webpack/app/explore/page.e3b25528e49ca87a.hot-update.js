"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/explore/page",{

/***/ "(app-pages-browser)/./src/app/components/item.js":
/*!************************************!*\
  !*** ./src/app/components/item.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Item(param) {\n    let { product, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-80 w-80 px-4 border rounded-lg flex justify-center items-center mx-5 my-10 mr-16 hover:bg-gray-50 hover:cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-2 flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center h-42 items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-auto max-w-[10vw] h-auto max-h-48 mb-4 items-center\",\n                        src: \"/img/products/\".concat(product.id, \".jpg\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                        lineNumber: 7,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-left mx-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sky-950 font-semibold text-lg leading-tight mb-2\",\n                            children: product.product\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-yellow-600\",\n                            children: [\n                                \"P\",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9pdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNlLFNBQVNBLEtBQUssS0FBZTtRQUFmLEVBQUNDLE9BQU8sRUFBQ0MsS0FBSyxFQUFDLEdBQWY7SUFDM0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLEtBQUssaUJBQTRCLE9BQVhMLFFBQVFNLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7OEJBR3JDLDhEQUFDSjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNJOzRCQUFLSixXQUFVO3NDQUF5REgsUUFBUUEsT0FBTzs7Ozs7O3NDQUN4Riw4REFBQ1E7NEJBQUVMLFdBQVU7O2dDQUFrQjtnQ0FBRUgsUUFBUVMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVEO0tBakJ3QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2l0ZW0uanM/MDE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7cHJvZHVjdCxpbmRleH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTgwIHctODAgcHgtNCBib3JkZXIgcm91bmRlZC1sZyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteC01IG15LTEwIG1yLTE2IGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaC00MiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gbWF4LXctWzEwdnddIGgtYXV0byBtYXgtaC00OCBtYi00IGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL3Byb2R1Y3RzLyR7cHJvZHVjdC5pZH0uanBnYH0+XHJcbiAgICAgICAgICAgICAgPC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBteC00XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1za3ktOTUwIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IG1iLTJcIj57cHJvZHVjdC5wcm9kdWN0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDBcIj5Qe3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSXRlbSIsInByb2R1Y3QiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImlkIiwic3BhbiIsInAiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/item.js\n"));

/***/ })

});