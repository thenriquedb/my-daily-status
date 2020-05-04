webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale/pt-BR */ "./node_modules/date-fns/esm/locale/pt-BR/index.js");
/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppMenu */ "./components/AppMenu/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/profile.css */ "./styles/profile.css");
/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var __N_SSP = true;
function profile(_ref) {
  var _this = this;

  var user = _ref.user,
      history = _ref.history,
      isAuth = _ref.isAuth;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isAuth) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  }, [isAuth]);

  if (isAuth) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "profile-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: user.picture,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, user.name), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, "Arcos/MG")), __jsx("div", {
      className: "symptoms-history",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, " Hist\xF3rico "), history.map(function (day) {
      var dateFormated = Object(date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(day.date), 'dd-LLLL', {
        locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__["default"]
      });
      return __jsx("div", {
        className: "symptom-card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "day-cirlce",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }
      }, "04"), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 23
        }
      }, dateFormated.split('-')[1], " ")), __jsx("div", {
        className: "symptoms",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 23
        }
      }, " Suspeito de Covid-19 "), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 23
        }
      }, " Tosse, dor no corpo, febre, dor nos olhos ")));
    })))));
  }

  return __jsx("div", {
    className: "center-content fullscreen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=profile.js.af0a2a41ec85ce8a0a9c.hot-update.js.map