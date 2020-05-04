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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./components/ContaminatedMarker/index.js":
/*!************************************************!*\
  !*** ./components/ContaminatedMarker/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./components/ContaminatedMarker/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/assets/icons/virus.svg */ "./public/assets/icons/virus.svg");
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/ContaminatedMarker/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ContaminatedMarker = ({
  data
}) => {
  return __jsx("div", {
    className: `contaminated-marker ${data.status === 'covid' && 'covid'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contaminated-marker-popup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, " doidmias")), __jsx(_public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContaminatedMarker);

/***/ }),

/***/ "./components/ContaminatedMarker/styles.css":
/*!**************************************************!*\
  !*** ./components/ContaminatedMarker/styles.css ***!
  \**************************************************/
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

/***/ "./components/Map/index.js":
/*!*********************************!*\
  !*** ./components/Map/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserMarker */ "./components/UserMarker/index.js");
/* harmony import */ var _ContaminatedMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContaminatedMarker */ "./components/ContaminatedMarker/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/Map/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/Map/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Map = ({
  user,
  defaultCenter,
  nearbyUsers,
  zoom = 15
}) => {
  console.log(nearbyUsers);
  return __jsx("div", {
    className: "map-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyDc4CkmlXdS1_w2Pg9z32LifASGs_ryEFc"
    },
    defaultCenter: defaultCenter,
    defaultZoom: 12,
    options: {
      fullscreenControl: false,
      zoomControl: false
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_UserMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    lat: defaultCenter.lat,
    lng: defaultCenter.lng,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), nearbyUsers.map(people => __jsx(_ContaminatedMarker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: people.id,
    lat: people.coordinates.latitude,
    lng: people.coordinates.longitude,
    data: people,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Map/styles.css":
/*!***********************************!*\
  !*** ./components/Map/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/UserMarker/index.js":
/*!****************************************!*\
  !*** ./components/UserMarker/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./components/UserMarker/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/components/UserMarker/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserMarker = ({
  user
}) => __jsx("img", {
  className: "user-marker",
  src: user.picture,
  alt: user.name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
});

/* harmony default export */ __webpack_exports__["default"] = (UserMarker);

/***/ }),

/***/ "./components/UserMarker/styles.css":
/*!******************************************!*\
  !*** ./components/UserMarker/styles.css ***!
  \******************************************/
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

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppMenu */ "./components/AppMenu/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading/index.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Map */ "./components/Map/index.js");
/* harmony import */ var _public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/icons/virus.svg */ "./public/assets/icons/virus.svg");
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _util_getCurrentDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/getCurrentDate */ "./util/getCurrentDate.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function App({
  isAuth,
  hasRegisteredDailyStatus,
  user
}) {
  const {
    0: coords,
    1: setCoords
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    latitude: null,
    longitude: null
  });
  const {
    0: radius,
    1: setRadius
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  const {
    0: filter,
    1: setFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('all');
  const {
    0: nearbyUsers,
    1: setNearbyUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  function getUserLocation() {
    if (!navigator.geolocation) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        title: 'Erro',
        text: 'Seu navegador não possui suporte a geolocalização. Utilize outro navegador para continuar utilizando o My Daily Status',
        icon: 'error',
        confirmButtonColor: '#961d66'
      }).then(result => {
        if (result) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      });
    }

    navigator.geolocation.getCurrentPosition(position => {
      const {
        latitude,
        longitude
      } = position.coords;
      setCoords({
        latitude,
        longitude
      });
    }, err => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        title: 'Erro',
        text: 'Erro ao tentar sua localização. Recarregue a pagina para tentar novamente.',
        icon: 'error',
        confirmButtonColor: '#961d66'
      }).then(result => {
        document.location.reload(true);
      });
    }, {
      timeout: 10000
    });
  }

  async function getNearbUsers() {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/nearby-users', {
      params: {
        latitude: parseFloat(coords.latitude),
        longitude: parseFloat(coords.longitude),
        filter,
        radius: parseFloat(radius)
      },
      headers: {
        userId: user.sub
      }
    });
    const {
      data
    } = response;
    setNearbyUsers(data.nearbyUsers);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      return;
    }

    if (!hasRegisteredDailyStatus) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/status');
      return;
    }

    getUserLocation();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (coords.latitude && coords.longitude) getNearbUsers();
  }, [coords]);

  if (isAuth && coords.latitude && coords.longitude) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_AppMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "app-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        lineNumber: 98,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "filter-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "input-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCompass"], {
      color: "#fff",
      size: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    })), __jsx("input", {
      value: radius,
      type: "number",
      onChange: e => setRadius(e.target.value),
      placeholder: "Raio de busca (KM)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 15
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, "KM")), __jsx("div", {
      className: "select-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    }, __jsx(_public_assets_icons_virus_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
      fill: "#fff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    })), __jsx("select", {
      onChange: e => setFilter(e.target.value),
      value: filter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }, __jsx("option", {
      value: "covid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, "Covid"), __jsx("option", {
      value: "suspect",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, "Suspeitos"), __jsx("option", {
      value: "all",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, "Todos as pessoas"))), __jsx("button", {
      type: "button",
      onClick: () => getNearbUsers(),
      className: "search-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSearch"], {
      color: "#fff",
      size: 18,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    })))));
  }

  return __jsx("div", {
    className: "center-content fullscreen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }));
}
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_9__["default"].getSession(req); // Verifica se o usuário está logado

  if (!session) {
    return {
      props: {
        isAuth: false
      }
    };
  }
  /*
   * Verifica se o usuário já cadastrou seu status diario
   */


  const currentDate = Object(_util_getCurrentDate__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const userDailyStatus = await _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection('users').doc(session.user.sub).collection('history').doc(currentDate).get();
  const todayRegistered = userDailyStatus.data();

  if (!todayRegistered) {
    return {
      props: {
        isAuth: true,
        hasRegisteredDailyStatus: false,
        user: session.user
      }
    };
  }

  return {
    props: {
      isAuth: true,
      hasRegisteredDailyStatus: true,
      user: session.user
    }
  };
}

/***/ }),

/***/ "./public/assets/icons/virus.svg":
/*!***************************************!*\
  !*** ./public/assets/icons/virus.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M422.863 451.174l-.437.436-.423.423.86-.859zM426.138 447.898l-.334.334-.367.367.701-.701zM427.106 446.93l-.081.081.081-.081zM420.873 453.164l-.311.311-.269.269.58-.58z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M471.539 227.517v8.251h-48.783c-3.762-31.193-16.097-59.783-34.586-83.329l34.545-34.545 5.836 5.836c18.875 18.875 47.498-9.726 28.61-28.61l-2.881-2.881-.331-.331-.392-.392.189.189-.454-.454-.126-.126-.35-.35-5.3-5.3-.596-.596-30.04-30.04c-18.9-18.9-47.538 9.685-28.61 28.61l5.836 5.836-34.545 34.545c-23.546-18.49-52.137-30.825-83.329-34.586V40.461h8.251c26.733 0 26.761-40.461 0-40.461h-56.964c-26.733 0-26.761 40.461 0 40.461h8.251v48.783c-31.193 3.762-59.783 16.097-83.329 34.586l-34.546-34.545 5.836-5.836c18.905-18.901-9.686-47.533-28.61-28.61l-5.456 5.456L54.84 95.12c-18.905 18.902 9.763 47.459 28.61 28.61l5.836-5.836 34.545 34.545c-18.49 23.546-30.825 52.137-34.586 83.329H40.461v-8.251c0-26.733-40.461-26.761-40.461 0v56.964c0 26.733 40.461 26.761 40.461 0v-8.251h48.783c3.762 31.193 16.097 59.783 34.586 83.329l-34.545 34.545-5.836-5.836c-18.901-18.899-47.539 9.685-28.61 28.61l2.881 2.881 7.36 7.36 30.04 30.04c18.9 18.9 47.541-9.682 28.61-28.61l-5.836-5.836 34.545-34.545c23.546 18.49 52.136 30.825 83.329 34.586v48.783h-8.251c-26.733 0-26.761 40.461 0 40.461h56.964c26.733 0 26.761-40.461 0-40.461h-8.251v-48.783c31.193-3.762 59.783-16.097 83.329-34.586l34.545 34.545-5.836 5.836c-18.905 18.902 9.763 47.457 28.61 28.61l2.921-2.921.762-.762 1.038-1.038.827-.827 3.378-3.378 1.302-1.302 30.052-30.052c18.905-18.901-9.686-47.533-28.61-28.61l-5.836 5.836-34.545-34.545c18.49-23.546 30.825-52.136 34.586-83.329h48.783v8.251c0 26.733 40.461 26.761 40.461 0v-56.964c.003-26.734-40.458-26.761-40.458-.001zM219.572 268.96c-24.636 0-44.607-19.972-44.607-44.607s19.972-44.607 44.607-44.607 44.607 19.972 44.607 44.607-19.971 44.607-44.607 44.607zm72.856 50.975c-15.192 0-27.507-12.315-27.507-27.507s12.315-27.507 27.507-27.507 27.507 12.315 27.507 27.507c0 15.192-12.315 27.507-27.507 27.507zM421.221 452.816l.783-.783-.404.404-.379.379z"
});

function SvgVirus(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 511.999 511.999"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgVirus);

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./util/getCurrentDate.js":
/*!********************************!*\
  !*** ./util/getCurrentDate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return new Date().toISOString().split('T')[0];
});

/***/ }),

/***/ 7:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thiago/Documentos/Dev/Projetos/fullstack-lab/pages/app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

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

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map