module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppMenu/index.js":
/*!*************************************!*\
  !*** ./components/AppMenu/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./components/AppMenu/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/AppMenu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function AppMenu({
  user
}) {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function showMenu() {
    setShow(!show);
  }

  async function handleLogout() {
    // auth0.handleLogout(req)
    alert('deslogado');
  }

  async function handleEdit() {
    alert('editar');
  }

  return __jsx("div", {
    className: `app-menu ${show && 'show'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: showMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "avatar",
    src: user.picture,
    alt: "Avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "app-menu-options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "avatar",
    src: user.picture,
    alt: "Avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, user.name), __jsx("button", {
    type: "button",
    onClick: () => handleEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Editar perfil"), __jsx("button", {
    type: "button",
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Sair")));
}

/***/ }),

/***/ "./components/AppMenu/styles.css":
/*!***************************************!*\
  !*** ./components/AppMenu/styles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Loading/index.js":
/*!*************************************!*\
  !*** ./components/Loading/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./components/Loading/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/Loading/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { Container } from './styles';

const Loading = () => __jsx("div", {
  className: "loading-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "loadingio-spinner-spinner-4imwjrf8mx6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "loader",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, "Loading...")));

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/Loading/styles.css":
/*!***************************************!*\
  !*** ./components/Loading/styles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./firebase.json":
/*!***********************!*\
  !*** ./firebase.json ***!
  \***********************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"my-daily-status-168f7\",\"private_key_id\":\"4022ee61441f654a97398e51b8099daa21d68cda\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdAOer2Sxxa32O\\nmVsbwVRGtYoC7yiZwPEwYnbTFxBXp2nCeBRtTT6bXHgQDpuamapotNBDe7bst6nV\\nKPZvXIhUBDlUUQ0wNd8ap9//WQhlKspIVUaCDkOS1QcVS0n2eLf1aPuAS8uqlEhu\\nZx6vGhhrX3xnvger9e4jNUe/fuU41esCdXdb7CUyNuQeEY/6HJYLHL4dNfSP1EKq\\nuWHrtqdgv5BbdYbNZS5Q8j58JaJbsvHZnDaaZ4tOvvmbOMN19/rc9RMJyKYD0IQb\\n5ALcis0v7y1BfR5QXJckMj6o6RFInMm8AXKjdGvXNTlrHuYCvnRmBOQVRbQ85T0B\\naKflOPdfAgMBAAECggEACEZkGi3JRrW/JDUXVQ2qAaC6LvBoUpOVmBLAfNy3gEnd\\nwaGu60SJ0F9zITQxOwNECjO+0ae4xZ432yPHD/8vskSXZEccq6tTNdDzoJOSj954\\nUzqnYN3GmFEWXVF0CwO5fRD08ddM2zyTMA/K/A34i9mNsYbAWcMNs5kFzeUuyKws\\nirvd9SGfziCrcRP6ODjdYex271fYzfwg6pSnbjEbGbDEjkYtOGim6rlQ56j6vI7G\\nTXrRUmns0NfOs8eVMAV4au3CVusI5/1RFDrF73mTYhg1dbnn+Yot1KpDxpT1Yq6y\\nKLXfAaJEwST3fJpIn5kO4w5dVdgPCScZznnXDoaqpQKBgQDPuMDrxA1YVFOVG/Y/\\ny7Hsy6JhT7LJuxAphUjzFtd158HYTC7Zwjhh4y3+YRRX4Y4JzYHjAzCnO6ERGAyT\\n7KxXgMc23uDLJ6FTZ5tRS/d44nPImc2NTbZ1RJrMZv1wn5LamPxpxXPKZL57DjYh\\nCkykzl6/9Hg/c1gKBo+ppWWzbQKBgQDBfnfoBm3YA7ZajTLlcXh85PjfSANlsIq3\\nkqPavVzkgjQJx2fqjSq/p0YQFP+yWCM8pCZfTuLaoUtS9Rz4XRARXTpzp5LfSvFQ\\nFnuY51Y1aNKx2VO2dDdhJAc53ls+qNwefWYR7vETOt/wFn5stdDGpzsw8ldgtixS\\n18shrE+KewKBgEFDjCHHXGYHQKeVvH340vNSW7d1Yfgt9PsGrI/r+lBKO8Zo0UOL\\n2UkwJrBI8ipWbNk5n3ii9PNmMcn8I1+Kue9YP79GsZxC3FYnNE6Lrrplc/lwEXw3\\nEX+wyW41YaW0DWDvNkdJSYMqugpRwcIJyWDykiR/fBR7egrUWujzVYvVAoGBAJg/\\nmbuQ63dQHHkNpyGQcjzbsdOGh13JVqzxDkq8O052ANo889BDuYJJ7UAUNcmvvjIl\\n+yd9G9TpmyowQdZO66iuEaMVFOTrxAq/VgtO469sxnQ4S71Bnp2pyqHHC0a3eVPo\\nWZr8xuXZqoDwQhPpz9evmEyAMy6eySt6LpRVT9TnAoGBAKt4fPy4HodcDJkdWN4s\\nZDn0/48v2b+8b6X69fatQl8btZibtjKL97R0ebuL4yyZlDTocXNc81boah5g6zgZ\\ng9xHA2IFJa8zy9yRpmQYGm+z+PcQN6cmiYtLcy/SivS1EcfmwuLrSbJv4VxPTI9D\\nY35IBsVDpUAx3sxKlj4TaNfo\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-b7snu@my-daily-status-168f7.iam.gserviceaccount.com\",\"client_id\":\"113504115609322615110\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b7snu%40my-daily-status-168f7.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: "ys1EtB4gfIydejrHu73TAjQ9D4DKaKNu",
  clientSecret: "C9lSDq1DNoN06X8D4iSuCKu5K-7aWOP4Ezjbm85quIw3bmYIGDGIqJ1Mt5TgeZfc",
  scope: "openid profile",
  domain: "dev-0x0gtl4z.auth0.com",
  redirectUri: "http://localhost:3000/api/callback",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret: "6499fd0d6a0a56ed2c43d9e5c258dda7",
    cookieLifetime: "3600"
  }
}));

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

const serviceAccount = __webpack_require__(/*! ../firebase.json */ "./firebase.json"); // Verifica se o app já foi iniciado


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://my-daily-status-168f7.firebaseio.com'
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db,
  admin
};

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale/pt-BR */ "date-fns/locale/pt-BR");
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppMenu */ "./components/AppMenu/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/profile.css */ "./styles/profile.css");
/* harmony import */ var _styles_profile_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function profile({
  user,
  history,
  isAuth
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
    }, " Hist\xF3rico "), history.map(day => {
      const dateFormated = date_fns_format__WEBPACK_IMPORTED_MODULE_2___default()(new Date(day.date), 'dd-LLLL', {
        locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3___default.a
      });
      return __jsx("div", {
        className: "symptom-card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "day-cirlce",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }
      }, dateFormated.split('-')[0]), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 23
        }
      }, dateFormated.split('-')[1], " ")), __jsx("div", {
        className: "symptoms",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 23
        }
      }, " ", day.status, " "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 23
        }
      }, " ", day.symptoms.join(', '), " ")));
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
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_6__["default"].getSession(req);

  if (session) {
    req.user = session.user;
    const userId = session.user.sub;
    const symptomsHistory = await _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('users').doc(userId).collection('history').get();
    const historyList = [];
    symptomsHistory.docs.map(item => {
      historyList.push({
        date: item.id,
        status: item.data().status,
        symptoms: item.data().symptoms
      });
    });
    console.log(symptomsHistory.docs);
    return {
      props: {
        isAuth: true,
        user: session.user,
        history: historyList
      }
    };
  }

  return {
    props: {
      isAuth: false
    }
  };
}

/***/ }),

/***/ "./styles/profile.css":
/*!****************************!*\
  !*** ./styles/profile.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/profile.js */"./pages/profile.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "date-fns/locale/pt-BR":
/*!****************************************!*\
  !*** external "date-fns/locale/pt-BR" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/pt-BR");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map