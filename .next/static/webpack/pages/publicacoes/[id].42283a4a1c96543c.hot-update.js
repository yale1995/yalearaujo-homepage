"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/publicacoes/[id]",{

/***/ "./pages/publicacoes/[id].js":
/*!***********************************!*\
  !*** ./pages/publicacoes/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Publication; }\n/* harmony export */ });\n/* harmony import */ var _Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./services/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/article */ \"./components/article.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/work */ \"./components/work.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/paragraph */ \"./components/paragraph.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Publication(props) {\n    var _this = this;\n    var ref3, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), publication = ref2[0], setPublication = ref2[1];\n    var id = props.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getPublication();\n    }, []);\n    function getPublication() {\n        return _getPublication.apply(this, arguments);\n    }\n    function _getPublication() {\n        _getPublication = _asyncToGenerator(_Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, response;\n            return _Users_yale1995_Projects_yalearaujo_homepage_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get(\"publications/\".concat(id));\n                    case 3:\n                        response = _ctx.sent;\n                        setPublication(response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.filteredPublication[0]);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getPublication.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_article__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: publication === null || publication === void 0 ? void 0 : publication.title,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_work__WEBPACK_IMPORTED_MODULE_5__.Title, {\n                    anchor: \"/publicacoes\",\n                    link: \"Publica\\xe7\\xf5es\",\n                    children: [\n                        publication === null || publication === void 0 ? void 0 : publication.title,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Badge, {\n                            children: \"2021\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/[id].js\",\n                            lineNumber: 27,\n                            columnNumber: 32\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                    spacing: 2,\n                    children: publication === null || publication === void 0 ? void 0 : (ref3 = publication.content) === null || ref3 === void 0 ? void 0 : (ref1 = ref3.paragraph) === null || ref1 === void 0 ? void 0 : ref1.map(function(paragraph, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: paragraph\n                        }, index, false, {\n                            fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/[id].js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/[id].js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yale1995/Projects/yalearaujo-homepage/pages/publicacoes/[id].js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(Publication, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Publication;\nvar _c;\n$RefreshReg$(_c, \"Publication\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wdWJsaWNhY29lcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBRUU7QUFDYTtBQUViO0FBQ0g7OztBQUUzQixTQUFTUyxXQUFXLENBQUNDLEtBQUssRUFBRTs7UUFvQmhDQyxJQUFvQjs7SUFuQjdCLElBQXNDVixJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFWbEQsV0FVb0IsR0FBb0JBLElBQVUsR0FBOUIsRUFWcEIsY0FVb0MsR0FBSUEsSUFBVSxHQUFkO0lBRWxDLElBQUlZLEVBQUUsR0FBR0gsS0FBSyxDQUFDRyxFQUFFO0lBRWpCWCxnREFBUyxDQUFDLFdBQU07UUFDZFksY0FBYyxFQUFFO0tBQ2pCLEVBQUUsRUFBRSxDQUFDO2FBRVNBLGNBQWM7ZUFBZEEsZUFBYzs7YUFBZEEsZUFBYztRQUFkQSxlQUFjLEdBQTdCLDZMQUFnQztnQkFFZkMsR0FBYyxFQUR2QkEsUUFBUTs7Ozs7OytCQUFTZixrREFBTyxDQUFDLGVBQWMsQ0FBSyxPQUFIYSxFQUFFLENBQUUsQ0FBQzs7d0JBQTlDRSxRQUFRLFlBQXNDO3dCQUNwREgsY0FBYyxDQUFDRyxRQUFRLGFBQVJBLFFBQVEsV0FBTSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUFBLEdBQWMsR0FBZEEsUUFBUSxDQUFFRSxJQUFJLGNBQWRGLEdBQWMsY0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxHQUFjLENBQUVHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7U0FDdkQ7ZUFIY0osZUFBYzs7SUFJN0IscUJBQ0UsOERBQUNYLDJEQUFNO1FBQUNnQixLQUFLLEVBQUVSLFdBQVcsYUFBWEEsV0FBVyxXQUFPLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsV0FBVyxDQUFFUSxLQUFLO2tCQUMvQiw0RUFBQ2YsdURBQVM7OzhCQUNSLDhEQUFDRyxtREFBSztvQkFBQ2EsTUFBTSxFQUFDLGNBQWM7b0JBQUNDLElBQUksRUFBQyxtQkFBYTs7d0JBQzVDVixXQUFXLGFBQVhBLFdBQVcsV0FBTyxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLFdBQVcsQ0FBRVEsS0FBSzt3QkFBQyxHQUFDO3NDQUFBLDhEQUFDZCxtREFBSztzQ0FBQyxNQUFJOzs7OztnQ0FBUTs7Ozs7O3dCQUNsQzs4QkFDUiw4REFBQ0MsbURBQUs7b0JBQUNnQixPQUFPLEVBQUUsQ0FBQzs4QkFDZFgsV0FBVyxhQUFYQSxXQUFXLFdBQVMsR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxDQUFBQSxJQUFvQixHQUFwQkEsV0FBVyxDQUFFWSxPQUFPLGNBQXBCWixJQUFvQixjQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLFFBQUFBLElBQW9CLENBQUVhLFNBQVMsNkJBQVgsR0FBcEJiLEtBQUFBLENBQW9CLEdBQXBCQSxLQUFpQ2MsR0FBRyxDQUFDLFNBQUNELFNBQVMsRUFBRUUsS0FBSzs2Q0FDckQsOERBQUNsQiw2REFBQztzQ0FBY2dCLFNBQVM7MkJBQWpCRSxLQUFLOzs7O2lDQUFpQjtxQkFDL0IsQ0FBQzs7Ozs7d0JBQ0k7Ozs7OztnQkFDRTs7Ozs7WUFDTCxDQUNWO0NBQ0Y7R0EzQnVCakIsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3B1YmxpY2Fjb2VzL1tpZF0uanM/N2EzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnRpY2xlJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCYWRnZSwgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd29yaydcbmltcG9ydCBQIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWJsaWNhdGlvbihwcm9wcykge1xuICBjb25zdCBbcHVibGljYXRpb24sIHNldFB1YmxpY2F0aW9uXSA9IHVzZVN0YXRlKClcblxuICB2YXIgaWQgPSBwcm9wcy5pZFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQdWJsaWNhdGlvbigpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFB1YmxpY2F0aW9uKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgcHVibGljYXRpb25zLyR7aWR9YClcbiAgICBzZXRQdWJsaWNhdGlvbihyZXNwb25zZT8uZGF0YT8uZmlsdGVyZWRQdWJsaWNhdGlvblswXSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e3B1YmxpY2F0aW9uPy50aXRsZX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGUgYW5jaG9yPVwiL3B1YmxpY2Fjb2VzXCIgbGluaz1cIlB1YmxpY2HDp8O1ZXNcIj5cbiAgICAgICAgICB7cHVibGljYXRpb24/LnRpdGxlfSA8QmFkZ2U+MjAyMTwvQmFkZ2U+XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7cHVibGljYXRpb24/LmNvbnRlbnQ/LnBhcmFncmFwaD8ubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UCBrZXk9e2luZGV4fT57cGFyYWdyYXBofTwvUD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW1xuICAgICAge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogJzEnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZFxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGlkOiBpZCxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsiYXBpIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJDb250YWluZXIiLCJCYWRnZSIsIlN0YWNrIiwiVGl0bGUiLCJQIiwiUHVibGljYXRpb24iLCJwcm9wcyIsInB1YmxpY2F0aW9uIiwic2V0UHVibGljYXRpb24iLCJpZCIsImdldFB1YmxpY2F0aW9uIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZmlsdGVyZWRQdWJsaWNhdGlvbiIsInRpdGxlIiwiYW5jaG9yIiwibGluayIsInNwYWNpbmciLCJjb250ZW50IiwicGFyYWdyYXBoIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/publicacoes/[id].js\n");

/***/ })

});