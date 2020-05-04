webpackHotUpdate("static/development/pages/app.js",{

/***/ "./components/ContaminatedMarker/index.js":
/*!************************************************!*\
  !*** ./components/ContaminatedMarker/index.js ***!
  \************************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./components/ContaminatedMarker/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/icons/virus.svg */ "./public/assets/icons/virus.svg");


var _this = undefined,
    _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/ContaminatedMarker/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





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
        lineNumber: 15,
        columnNumber: 11
      }
    }, " ", userId)), __jsx(_public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }));
  }
};

function getServerSideProps(_ref2) {
  var req, res, session;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getServerSideProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req, res = _ref2.res;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_auth0__WEBPACK_IMPORTED_MODULE_2__["default"].getSession(req));

        case 3:
          session = _context.sent;

          if (!session) {
            _context.next = 7;
            break;
          }

          req.user = session.user;
          return _context.abrupt("return", {
            props: {
              userId: session.user.sub
            }
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}
/* harmony default export */ __webpack_exports__["default"] = (ContaminatedMarker);

/***/ })

})
//# sourceMappingURL=app.js.316d686115ef0d7b8169.hot-update.js.map