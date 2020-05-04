webpackHotUpdate("static/development/pages/app.js",{

/***/ "./components/ContaminatedMarker/index.js":
/*!************************************************!*\
  !*** ./components/ContaminatedMarker/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./components/ContaminatedMarker/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/icons/virus.svg */ "./public/assets/icons/virus.svg");
var _this = undefined,
    _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/ContaminatedMarker/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ContaminatedMarker = function ContaminatedMarker(_ref) {
  var data = _ref.data,
      userId = _ref.userId;

  if (data.id !== userId) {
    return __jsx("div", {
      className: "contaminated-marker ".concat(data.status === 'covid' && 'covid'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "contaminated-marker-popup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, " ", data.id), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, " ", userId)), __jsx(_public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ContaminatedMarker);

/***/ })

})
//# sourceMappingURL=app.js.bbf1e33a6f434b00f5fe.hot-update.js.map