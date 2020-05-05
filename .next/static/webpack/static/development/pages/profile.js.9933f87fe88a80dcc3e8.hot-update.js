webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/AppMenu/index.js":
/*!*************************************!*\
  !*** ./components/AppMenu/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMenu; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/AppMenu/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/AppMenu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function AppMenu(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  function showMenu() {
    setShow(!show);
  }

  function handleLogout() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleLogout$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // auth0.handleLogout(req)
            alert('deslogado');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  return __jsx("div", {
    className: "app-menu ".concat(show && 'show'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: showMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "avatar",
    src: user.picture,
    alt: "Avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "app-menu-options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "avatar",
    src: user.picture,
    alt: "Avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, user.name), __jsx("button", {
    type: "button",
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Sair")));
}

/***/ })

})
//# sourceMappingURL=profile.js.9933f87fe88a80dcc3e8.hot-update.js.map