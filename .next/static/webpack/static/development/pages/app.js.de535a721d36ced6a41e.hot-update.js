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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppMenu */ "./components/AppMenu/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Map */ "./components/Map/index.js");
/* harmony import */ var _public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/icons/virus.svg */ "./public/assets/icons/virus.svg");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var __N_SSP = true;
function App(_ref) {
  var isAuth = _ref.isAuth,
      hasRegisteredDailyStatus = _ref.hasRegisteredDailyStatus,
      user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    latitude: null,
    longitude: null
  }),
      coords = _useState[0],
      setCoords = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
      radius = _useState2[0],
      setRadius = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('all'),
      filter = _useState3[0],
      setFilter = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      nearbyUsers = _useState4[0],
      setNearbyUsers = _useState4[1];

  function getUserLocation() {
    if (!navigator.geolocation) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        title: 'Erro',
        text: 'Seu navegador não possui suporte a geolocalização. Utilize outro navegador para continuar utilizando o My Daily Status',
        icon: 'error',
        confirmButtonColor: '#961d66'
      }).then(function (result) {
        if (result) next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      });
    }

    navigator.geolocation.getCurrentPosition(function (position) {
      var _position$coords = position.coords,
          latitude = _position$coords.latitude,
          longitude = _position$coords.longitude;
      setCoords({
        latitude: latitude,
        longitude: longitude
      });
    }, function (err) {
      console.log(err);
    }, {
      timeout: 10000
    });
  }

  function getNearbUsers() {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getNearbUsers$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/nearby-users', {
              params: {
                latitude: parseFloat(coords.latitude),
                longitude: parseFloat(coords.longitude),
                filter: filter,
                radius: parseFloat(radius) * 1000
              },
              headers: {
                userId: user.sub
              }
            }));

          case 2:
            response = _context.sent;
            data = response.data;
            setNearbyUsers(data.nearbyUsers);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      return;
    }

    if (!hasRegisteredDailyStatus) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/status');
      return;
    }

    getUserLocation();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (coords.latitude && coords.longitude) getNearbUsers();
  }, [coords]);

  if (isAuth && coords.latitude && coords.longitude) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "app-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        lineNumber: 90,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "filter-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "input-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCompass"], {
      color: "#fff",
      size: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    })), __jsx("input", {
      value: radius,
      type: "number",
      placeholder: "Raio de busca (KM)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, "KM")), __jsx("div", {
      className: "select-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, __jsx(_public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
      fill: "#fff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    })), __jsx("select", {
      onChange: function onChange(e) {
        return setFilter(e.target.value);
      },
      value: filter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, __jsx("option", {
      value: "covid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, "Covid"), __jsx("option", {
      value: "suspects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, "Suspeitos"), __jsx("option", {
      value: "all",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, "Todos as pessoas"))), __jsx("button", {
      type: "button",
      onClick: function onClick() {
        return getNearbUsers();
      },
      className: "search-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSearch"], {
      color: "#fff",
      size: 18,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }
    })))));
  }

  return __jsx("div", {
    className: "center-content fullscreen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=app.js.de535a721d36ced6a41e.hot-update.js.map