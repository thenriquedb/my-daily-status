webpackHotUpdate("static/development/pages/status.js",{

/***/ "./pages/status.js":
/*!*************************!*\
  !*** ./pages/status.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return status; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppMenu */ \"./components/AppMenu/index.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var _components_Symptom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Symptom */ \"./components/Symptom/index.js\");\n/* harmony import */ var _json_symptoms_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../json/symptoms.json */ \"./json/symptoms.json\");\nvar _json_symptoms_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/symptoms.json */ \"./json/symptoms.json\", 1);\n/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/status.css */ \"./styles/status.css\");\n/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_status_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _util_diagnostic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/diagnostic */ \"./util/diagnostic.js\");\n\n\n\n\nvar _jsxFileName = \"/home/thiago/Documentos/Dev/Projects/My-Dayly-Status/pages/status.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction status(_ref) {\n  _s();\n\n  var _this = this;\n\n  var user = _ref.user,\n      isAuth = _ref.isAuth;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    latitude: null,\n    longitude: null\n  }),\n      coords = _useState[0],\n      setCoords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      selectedSymptoms = _useState2[0],\n      setSelectedSymptoms = _useState2[1];\n\n  function getUserLocation() {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition(function (position) {\n        var _position$coords = position.coords,\n            latitude = _position$coords.latitude,\n            longitude = _position$coords.longitude;\n        setCoords({\n          latitude: latitude,\n          longitude: longitude\n        });\n      });\n    } else {\n      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({\n        title: 'Erro',\n        text: 'Seu navegador não possui suporte a geolocalização',\n        icon: 'error',\n        confirmButtonColor: '#961d66',\n        confirmButtonText: 'OK'\n      });\n      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    }\n  }\n\n  function selectSymptom(symptom) {\n    if (selectedSymptoms.includes(symptom)) {\n      setSelectedSymptoms(selectedSymptoms.filter(function (item) {\n        return item !== symptom;\n      }));\n      return;\n    }\n\n    setSelectedSymptoms([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(selectedSymptoms), [symptom]));\n  } // userId\n\n\n  function handleSave() {\n    return _handleSave.apply(this, arguments);\n  }\n\n  function _handleSave() {\n    _handleSave = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var status, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              status = Object(_util_diagnostic__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(selectedSymptoms);\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/createStatus', {\n                symptoms: selectedSymptoms,\n                coords: coords,\n                status: status\n              }, {\n                headers: {\n                  userId: user.sub\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n\n              if (response.status !== 200) {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({\n                  title: 'Erro',\n                  text: 'Ocorreu um erro ao salvar suas informações. Tente novamente.',\n                  icon: 'error',\n                  confirmButtonColor: '#961d66',\n                  confirmButtonText: 'OK',\n                  customClass: {\n                    confirmButton: 'swal-confirm-button'\n                  }\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSave.apply(this, arguments);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!isAuth) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    getUserLocation();\n  }, [isAuth]);\n\n  if (isAuth) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      user: user,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }\n    }), __jsx(\"div\", {\n      className: \"status-container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"content\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"nurse-container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: \"assets/icons/nurse.svg\",\n      alt: \"Nurse icon\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 15\n      }\n    }), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 15\n      }\n    }, \"Ol\\xE1 \", __jsx(\"b\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 21\n      }\n    }, user.name), \", como voc\\xEA est\\xE1 se sentindo hoje? Selecione abaixo os sintomas que voc\\xEA esta sentindo. Caso n\\xE3o esteja apresentando nenhum, clique em continuar.\", ' ')), __jsx(\"div\", {\n      className: \"symptoms-container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 13\n      }\n    }, _json_symptoms_json__WEBPACK_IMPORTED_MODULE_11__.map(function (symptom) {\n      return __jsx(_components_Symptom__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        key: symptom.value,\n        onClick: selectSymptom,\n        selected: selectedSymptoms.includes(symptom.name),\n        symptom: symptom,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 19\n        }\n      });\n    })), __jsx(\"div\", {\n      className: \"save-button-container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 13\n      }\n    }, __jsx(\"button\", {\n      type: \"button\",\n      onClick: handleSave,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 15\n      }\n    }, \"Continuar\")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }));\n  }\n\n  return __jsx(\"div\", {\n    className: \"center-content fullscreen\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(status, \"CwS1FasHIvvB7OsBustawB3iUTk=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGF0dXMuanM/NzQwNCJdLCJuYW1lcyI6WyJzdGF0dXMiLCJ1c2VyIiwiaXNBdXRoIiwidXNlU3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvb3JkcyIsInNldENvb3JkcyIsInNlbGVjdGVkU3ltcHRvbXMiLCJzZXRTZWxlY3RlZFN5bXB0b21zIiwiZ2V0VXNlckxvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwiUm91dGVyIiwicHVzaCIsInNlbGVjdFN5bXB0b20iLCJzeW1wdG9tIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaGFuZGxlU2F2ZSIsImRpYWdub3N0aWMiLCJheGlvcyIsInBvc3QiLCJzeW1wdG9tcyIsImhlYWRlcnMiLCJ1c2VySWQiLCJzdWIiLCJyZXNwb25zZSIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInVzZUVmZmVjdCIsIm5hbWUiLCJtYXAiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVlLFNBQVNBLE1BQVQsT0FBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNuQkMsc0RBQVEsQ0FBQztBQUFFQyxZQUFRLEVBQUUsSUFBWjtBQUFrQkMsYUFBUyxFQUFFO0FBQTdCLEdBQUQsQ0FEVztBQUFBLE1BQ3hDQyxNQUR3QztBQUFBLE1BQ2hDQyxTQURnQzs7QUFBQSxtQkFFQ0osc0RBQVEsQ0FBQyxFQUFE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LEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRDs7R0FwSHVCN0IsTSIsImZpbGUiOiIuL3BhZ2VzL3N0YXR1cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vbGliL2F1dGgwJztcblxuaW1wb3J0IEFwcE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBNZW51JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBTeW1wdG9tIGZyb20gJy4uL2NvbXBvbmVudHMvU3ltcHRvbSc7XG5cbmltcG9ydCBzeW1wdG9tcyBmcm9tICcuLi9qc29uL3N5bXB0b21zLmpzb24nO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9zdGF0dXMuY3NzJztcbmltcG9ydCBkaWFnbm9zdGljIGZyb20gJy4uL3V0aWwvZGlhZ25vc3RpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXR1cyh7IHVzZXIsIGlzQXV0aCB9KSB7XG4gIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZSh7IGxhdGl0dWRlOiBudWxsLCBsb25naXR1ZGU6IG51bGwgfSk7XG4gIGNvbnN0IFtzZWxlY3RlZFN5bXB0b21zLCBzZXRTZWxlY3RlZFN5bXB0b21zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBnZXRVc2VyTG9jYXRpb24oKSB7XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgICAgIHNldENvb3Jkcyh7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdFcnJvJyxcbiAgICAgICAgdGV4dDogJ1NldSBuYXZlZ2Fkb3IgbsOjbyBwb3NzdWkgc3Vwb3J0ZSBhIGdlb2xvY2FsaXphw6fDo28nLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjOTYxZDY2JyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICB9KTtcblxuICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RTeW1wdG9tKHN5bXB0b20pIHtcbiAgICBpZiAoc2VsZWN0ZWRTeW1wdG9tcy5pbmNsdWRlcyhzeW1wdG9tKSkge1xuICAgICAgc2V0U2VsZWN0ZWRTeW1wdG9tcyhzZWxlY3RlZFN5bXB0b21zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gc3ltcHRvbSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFNlbGVjdGVkU3ltcHRvbXMoWy4uLnNlbGVjdGVkU3ltcHRvbXMsIHN5bXB0b21dKTtcbiAgfVxuICAvLyB1c2VySWRcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTYXZlKCkge1xuICAgIGNvbnN0IHN0YXR1cyA9IGRpYWdub3N0aWMoc2VsZWN0ZWRTeW1wdG9tcyk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAnL2FwaS9jcmVhdGVTdGF0dXMnLFxuICAgICAge1xuICAgICAgICBzeW1wdG9tczogc2VsZWN0ZWRTeW1wdG9tcyxcbiAgICAgICAgY29vcmRzLFxuICAgICAgICBzdGF0dXMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgdXNlcklkOiB1c2VyLnN1YixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0Vycm8nLFxuICAgICAgICB0ZXh0OiAnT2NvcnJldSB1bSBlcnJvIGFvIHNhbHZhciBzdWFzIGluZm9ybWHDp8O1ZXMuIFRlbnRlIG5vdmFtZW50ZS4nLFxuICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjOTYxZDY2JyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ3N3YWwtY29uZmlybS1idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQXV0aCkgUm91dGVyLnB1c2goJy8nKTtcblxuICAgIGdldFVzZXJMb2NhdGlvbigpO1xuICB9LCBbaXNBdXRoXSk7XG5cbiAgaWYgKGlzQXV0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8QXBwTWVudSB1c2VyPXt1c2VyfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudXJzZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvbnVyc2Uuc3ZnXCIgYWx0PVwiTnVyc2UgaWNvblwiIC8+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE9sw6EgPGI+e3VzZXIubmFtZX08L2I+LCBjb21vIHZvY8OqIGVzdMOhIHNlIHNlbnRpbmRvIGhvamU/XG4gICAgICAgICAgICAgICAgU2VsZWNpb25lIGFiYWl4byBvcyBzaW50b21hcyBxdWUgdm9jw6ogZXN0YSBzZW50aW5kby4gQ2FzbyBuw6NvXG4gICAgICAgICAgICAgICAgZXN0ZWphIGFwcmVzZW50YW5kbyBuZW5odW0sIGNsaXF1ZSBlbSBjb250aW51YXIueycgJ31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ltcHRvbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtzeW1wdG9tcy5tYXAoKHN5bXB0b20pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFN5bXB0b21cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzeW1wdG9tLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RTeW1wdG9tfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRTeW1wdG9tcy5pbmNsdWRlcyhzeW1wdG9tLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICBzeW1wdG9tPXtzeW1wdG9tfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhdmUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5cbiAgICAgICAgICAgICAgICBDb250aW51YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnQgZnVsbHNjcmVlblwiPlxuICAgICAgPExvYWRpbmcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcbiAgLy8gcGVnYSBvIGNvb2tpZSBkYSBzZXNzw6NvIGRvIHVzdWFyaW9cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXEudXNlciA9IHNlc3Npb24udXNlcjtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBpc0F1dGg6IHRydWUsXG4gICAgICAgIHVzZXI6IHNlc3Npb24udXNlcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGlzQXV0aDogZmFsc2UsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/status.js\n");

/***/ })

})