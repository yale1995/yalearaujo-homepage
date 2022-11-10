"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/publicacoes",{

/***/ "./pages/publicacoes/index.js":
/*!************************************!*\
  !*** ./pages/publicacoes/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Publications; }\n/* harmony export */ });\n/* harmony import */ var _Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./services/api.js\");\n/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/article */ \"./components/article.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Publications() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(), publication = ref1[0], setPublication = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        getPublication();\n    }, []);\n    function getPublication() {\n        return _getPublication.apply(this, arguments);\n    }\n    function _getPublication() {\n        _getPublication = _asyncToGenerator(_Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, response;\n            return _Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get(\"publications\");\n                    case 3:\n                        response = _ctx.sent;\n                        return _ctx.abrupt(\"return\", setPublication(response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.publications));\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getPublication.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: publication === null || publication === void 0 ? void 0 : publication.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/publicacoes/1\",\n                        passHref: true,\n                        scroll: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                as: \"h1\",\n                                fontSize: 20,\n                                mt: 10,\n                                mb: 2,\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                        fontSize: 15,\n                        children: \"1111\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, item.id, true, {\n                fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Publications, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Publications;\nvar _c;\n$RefreshReg$(_c, \"Publications\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wdWJsaWNhY29lcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUVLO0FBQ2I7QUFFaUM7QUFDdEI7O0FBRTVCLFNBQVNTLFlBQVksR0FBRzs7O0lBQ3JDLElBQXNDRCxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFUbEQsV0FTb0IsR0FBb0JBLElBQVUsR0FBOUIsRUFUcEIsY0FTb0MsR0FBSUEsSUFBVSxHQUFkO0lBRWxDRCxnREFBUyxDQUFDLFdBQU07UUFDZEssY0FBYyxFQUFFO0tBQ2pCLEVBQUUsRUFBRSxDQUFDO2FBRVNBLGNBQWM7ZUFBZEEsZUFBYzs7YUFBZEEsZUFBYztRQUFkQSxlQUFjLEdBQTdCLDZMQUFnQztnQkFFUkMsR0FBYyxFQUQ5QkEsUUFBUTs7Ozs7OytCQUFTYixrREFBTyxDQUFDLGNBQWMsQ0FBQzs7d0JBQXhDYSxRQUFRLFlBQWdDO3FEQUN2Q0YsY0FBYyxDQUFDRSxRQUFRLGFBQVJBLFFBQVEsV0FBTSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUFBLEdBQWMsR0FBZEEsUUFBUSxDQUFFRSxJQUFJLGNBQWRGLEdBQWMsY0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxHQUFjLENBQUVHLFlBQVksQ0FBQzs7Ozs7O1NBRXBEO2VBSmNKLGVBQWM7O0lBTTdCLHFCQUNFLDhEQUFDWCwyREFBTTtrQkFDSlMsV0FBVyxhQUFYQSxXQUFXLFdBQUssR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxXQUFXLENBQUVPLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtpQ0FDcEIsOERBQUNmLHVEQUFTOztrQ0FDUiw4REFBQ0Qsa0RBQVE7d0JBQUNpQixJQUFJLEVBQUMsZ0JBQWdCO3dCQUFDQyxRQUFRO3dCQUFDQyxNQUFNLEVBQUUsS0FBSztrQ0FDcEQsNEVBQUNmLGtEQUFJO3NDQUNILDRFQUFDRixxREFBTztnQ0FBQ2tCLEVBQUUsRUFBQyxJQUFJO2dDQUFDQyxRQUFRLEVBQUUsRUFBRTtnQ0FBRUMsRUFBRSxFQUFFLEVBQUU7Z0NBQUVDLEVBQUUsRUFBRSxDQUFDOzBDQUN6Q1AsSUFBSSxDQUFDUSxLQUFLOzs7OztxQ0FDSDs7Ozs7aUNBQ0w7Ozs7OzZCQUNFO2tDQUNYLDhEQUFDckIsa0RBQUk7d0JBQUNrQixRQUFRLEVBQUUsRUFBRTtrQ0FBRSxNQUFJOzs7Ozs2QkFBTzs7ZUFSakJMLElBQUksQ0FBQ1MsRUFBRTs7OztxQkFTWDtTQUNiLENBQUM7Ozs7O1lBQ0ssQ0FDVjtDQUNGO0dBN0J1QmxCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wdWJsaWNhY29lcy9pbmRleC5qcz9kOTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FydGljbGUnXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIExpbmsgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaWNhdGlvbnMoKSB7XG4gIGNvbnN0IFtwdWJsaWNhdGlvbiwgc2V0UHVibGljYXRpb25dID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHVibGljYXRpb24oKVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBnZXRQdWJsaWNhdGlvbigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJ3B1YmxpY2F0aW9ucycpXG4gICAgcmV0dXJuIHNldFB1YmxpY2F0aW9uKHJlc3BvbnNlPy5kYXRhPy5wdWJsaWNhdGlvbnMpXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5wdWJsaWNhdGlvbnMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7cHVibGljYXRpb24/Lm1hcChpdGVtID0+IChcbiAgICAgICAgPENvbnRhaW5lciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3B1YmxpY2Fjb2VzLzFcIiBwYXNzSHJlZiBzY3JvbGw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgZm9udFNpemU9ezIwfSBtdD17MTB9IG1iPXsyfT5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9ezE1fT4xMTExPC9UZXh0PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICkpfVxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwibmFtZXMiOlsiYXBpIiwiTGF5b3V0IiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJIZWFkaW5nIiwiVGV4dCIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlB1YmxpY2F0aW9ucyIsInB1YmxpY2F0aW9uIiwic2V0UHVibGljYXRpb24iLCJnZXRQdWJsaWNhdGlvbiIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInB1YmxpY2F0aW9ucyIsIm1hcCIsIml0ZW0iLCJocmVmIiwicGFzc0hyZWYiLCJzY3JvbGwiLCJhcyIsImZvbnRTaXplIiwibXQiLCJtYiIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/publicacoes/index.js\n");

/***/ })

});