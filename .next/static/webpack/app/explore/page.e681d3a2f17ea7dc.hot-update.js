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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Item(param) {\n    let { product, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-96 w-80 border rounded-lg flex items-center bg-green-500\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-4 px-8 flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-auto h-auto max-h-48 mb-4\",\n                    src: \"/img/products/\".concat(product.id, \".jpg\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sky-950\",\n                            children: product.product\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                            lineNumber: 8,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-yellow-600\",\n                            children: [\n                                \"P\",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                            lineNumber: 9,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\aur-marketing\\\\aur-marketing\\\\src\\\\app\\\\components\\\\item.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9pdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNlLFNBQVNBLEtBQUssS0FBZTtRQUFmLEVBQUNDLE9BQU8sRUFBQ0MsS0FBSyxFQUFDLEdBQWY7SUFDM0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBOEJFLEtBQUssaUJBQTRCLE9BQVhMLFFBQVFNLEVBQUUsRUFBQzs7Ozs7OzhCQUM5RSw4REFBQ0o7O3NDQUNDLDhEQUFDSzs0QkFBS0osV0FBVTtzQ0FBZ0JILFFBQVFBLE9BQU87Ozs7OztzQ0FDL0MsOERBQUNROzRCQUFFTCxXQUFVOztnQ0FBa0I7Z0NBQUVILFFBQVFTLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RDtLQVp3QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2l0ZW0uanM/MDE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh7cHJvZHVjdCxpbmRleH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTk2IHctODAgYm9yZGVyIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JlZW4tNTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IHB4LTggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWF1dG8gaC1hdXRvIG1heC1oLTQ4IG1iLTRcIiBzcmM9e2AvaW1nL3Byb2R1Y3RzLyR7cHJvZHVjdC5pZH0uanBnYH0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1za3ktOTUwXCI+e3Byb2R1Y3QucHJvZHVjdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNjAwXCI+UHtwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkl0ZW0iLCJwcm9kdWN0IiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpZCIsInNwYW4iLCJwIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/item.js\n"));

/***/ })

});