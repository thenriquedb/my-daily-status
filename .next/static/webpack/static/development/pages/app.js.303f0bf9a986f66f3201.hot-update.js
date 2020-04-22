webpackHotUpdate("static/development/pages/app.js",{

/***/ "./components/Map/index.js":
/*!*********************************!*\
  !*** ./components/Map/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserMarker */ "./components/UserMarker/index.js");
/* harmony import */ var _ContaminatedMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContaminatedMarker */ "./components/ContaminatedMarker/index.js");
var _this = undefined,
    _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/Map/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Map = function Map(_ref) {
  var user = _ref.user,
      defaultCenter = _ref.defaultCenter,
      nearbyUsers = _ref.nearbyUsers,
      _ref$zoom = _ref.zoom,
      zoom = _ref$zoom === void 0 ? 15 : _ref$zoom;
  console.log(nearbyUsers);
  return __jsx("div", {
    style: {
      height: '100vh',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyDc4CkmlXdS1_w2Pg9z32LifASGs_ryEFc"
    },
    defaultCenter: defaultCenter,
    defaultZoom: zoom,
    options: {
      fullscreenControl: false
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_UserMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    lat: defaultCenter.lat,
    lng: defaultCenter.lng,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), nearbyUsers.map(function (people) {
    return __jsx(_ContaminatedMarker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      lat: people.coordinates.latitude,
      lng: people.coordinates.longitude,
      data: people,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=app.js.303f0bf9a986f66f3201.hot-update.js.map