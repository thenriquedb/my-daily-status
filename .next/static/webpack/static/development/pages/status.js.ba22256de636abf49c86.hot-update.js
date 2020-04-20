webpackHotUpdate("static/development/pages/status.js",{

/***/ "./pages/status.js":
/*!*************************!*\
  !*** ./pages/status.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return status; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppMenu */ "./components/AppMenu/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Symptom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Symptom */ "./components/Symptom/index.js");
/* harmony import */ var _json_symptoms_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../json/symptoms.json */ "./json/symptoms.json");
var _json_symptoms_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/symptoms.json */ "./json/symptoms.json", 1);
/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/status.css */ "./styles/status.css");
/* harmony import */ var _styles_status_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_status_css__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/status.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var __N_SSP = true;
function status(_ref) {
  var _this = this;

  var user = _ref.user,
      isAuth = _ref.isAuth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    latitude: null,
    longitude: null
  }),
      coords = _useState[0],
      setCoords = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedSymptoms = _useState2[0],
      setSelectedSymptoms = _useState2[1];

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
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }
  }

  function selectSymptom(symptom) {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(function (item) {
        return item !== symptom;
      }));
      return;
    }

    setSelectedSymptoms([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedSymptoms), [symptom]));
  }

  function handleSave() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSave$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const response = await axios.post('/api/status/store', {
            //   symptoms: selectedSymptoms,
            //   coords,
            // });
            response = {};
            response.status = 200;

            if (response.status === 200) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Sucesso',
                text: 'Seus sintomas foram salvos com sucesso!',
                icon: 'success',
                confirmButtonColor: '#961d66',
                confirmButtonText: 'OK',
                customClass: {
                  confirmButton: 'swal-confirm-button'
                }
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Erro',
                text: 'Ocorreu um erro ao salvar suas informações. Tente novamente.',
                icon: 'error',
                confirmButtonColor: '#961d66',
                confirmButtonText: 'OK',
                customClass: {
                  confirmButton: 'swal-confirm-button'
                }
              });
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!isAuth) next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    getUserLocation();
  }, [isAuth]);

  if (isAuth) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "status-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "nurse-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "assets/icons/nurse.svg",
      alt: "Nurse icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, "Ol\xE1 ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, user.name), ", como voc\xEA est\xE1 se sentindo hoje? Selecione abaixo os sintomas que voc\xEA esta sentindo. Caso n\xE3o esteja apresentando nenhum, clique em continuar.", ' ')), __jsx("div", {
      className: "symptoms-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, _json_symptoms_json__WEBPACK_IMPORTED_MODULE_10__.map(function (symptom) {
      return __jsx(_components_Symptom__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: symptom.value,
        onClick: selectSymptom,
        selected: selectedSymptoms.includes(symptom.value),
        symptom: symptom,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 19
        }
      });
    })), __jsx("div", {
      className: "save-button-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "button",
      onClick: handleSave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }, "Continuar")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }));
  }

  return __jsx("div", {
    className: "center-content fullscreen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=status.js.ba22256de636abf49c86.hot-update.js.map