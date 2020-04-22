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
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map */ "./components/Map/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import axios from 'axios';






var __N_SSP = true;
function App(_ref) {
  var isAuth = _ref.isAuth,
      hasRegisteredDailyStatus = _ref.hasRegisteredDailyStatus,
      user = _ref.user,
      _ref$nearbyUsers = _ref.nearbyUsers,
      nearbyUsers = _ref$nearbyUsers === void 0 ? [] : _ref$nearbyUsers;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    latitude: null,
    longitude: null
  }),
      coords = _useState[0],
      setCoords = _useState[1];

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude;
        setCoords({
          latitude: latitude,
          longitude: longitude
        });
      });
    } else {
      alert('Seu navegador não possui suporte a geolocalização');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isAuth) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    if (!hasRegisteredDailyStatus) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/status');
    getUserLocation(); // await axios.post('/api/user/')
  }, []);

  if (isAuth && coords.latitude && coords.longitude) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "app-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
      nearbyUsers: nearbyUsers,
      user: user,
      defaultCenter: {
        lat: coords.latitude,
        lng: coords.longitude
      },
      zoom: 13,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    })));
  }

  return __jsx("div", {
    className: "center-content fullscreen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=app.js.d0c7b6e61ceb1617cfba.hot-update.js.map