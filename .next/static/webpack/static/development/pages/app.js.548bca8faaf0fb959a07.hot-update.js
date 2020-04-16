webpackHotUpdate("static/development/pages/app.js",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppMenu */ "./components/AppMenu/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSP = true;
function App(_ref) {
  var isAuth = _ref.isAuth,
      hasRegisteredDailyStatus = _ref.hasRegisteredDailyStatus,
      user = _ref.user;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isAuth) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    if (!hasRegisteredDailyStatus) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/status');
  }, [isAuth]);

  if (isAuth) {
    return __jsx("div", {
      className: "app-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }));
  }

  return __jsx("div", {
    className: "center-content fullscreen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=app.js.548bca8faaf0fb959a07.hot-update.js.map