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
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var __N_SSP = true;
function App(_ref) {
  var loggedIn = _ref.loggedIn,
      user = _ref.user;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (loggedIn) return;
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  }, [loggedIn]);

  if (loggedIn) {
    return __jsx("div", {
      className: "app-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }));
  }

  return null;
} // Processa o que tem de processar no servidor e manda para a pagina
// Funcina como uma API porém com tela

/***/ })

})
//# sourceMappingURL=app.js.ea25ada7d74597d439bd.hot-update.js.map