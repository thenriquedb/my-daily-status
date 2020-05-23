module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1raA":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"my-daily-status-168f7\",\"private_key_id\":\"4022ee61441f654a97398e51b8099daa21d68cda\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdAOer2Sxxa32O\\nmVsbwVRGtYoC7yiZwPEwYnbTFxBXp2nCeBRtTT6bXHgQDpuamapotNBDe7bst6nV\\nKPZvXIhUBDlUUQ0wNd8ap9//WQhlKspIVUaCDkOS1QcVS0n2eLf1aPuAS8uqlEhu\\nZx6vGhhrX3xnvger9e4jNUe/fuU41esCdXdb7CUyNuQeEY/6HJYLHL4dNfSP1EKq\\nuWHrtqdgv5BbdYbNZS5Q8j58JaJbsvHZnDaaZ4tOvvmbOMN19/rc9RMJyKYD0IQb\\n5ALcis0v7y1BfR5QXJckMj6o6RFInMm8AXKjdGvXNTlrHuYCvnRmBOQVRbQ85T0B\\naKflOPdfAgMBAAECggEACEZkGi3JRrW/JDUXVQ2qAaC6LvBoUpOVmBLAfNy3gEnd\\nwaGu60SJ0F9zITQxOwNECjO+0ae4xZ432yPHD/8vskSXZEccq6tTNdDzoJOSj954\\nUzqnYN3GmFEWXVF0CwO5fRD08ddM2zyTMA/K/A34i9mNsYbAWcMNs5kFzeUuyKws\\nirvd9SGfziCrcRP6ODjdYex271fYzfwg6pSnbjEbGbDEjkYtOGim6rlQ56j6vI7G\\nTXrRUmns0NfOs8eVMAV4au3CVusI5/1RFDrF73mTYhg1dbnn+Yot1KpDxpT1Yq6y\\nKLXfAaJEwST3fJpIn5kO4w5dVdgPCScZznnXDoaqpQKBgQDPuMDrxA1YVFOVG/Y/\\ny7Hsy6JhT7LJuxAphUjzFtd158HYTC7Zwjhh4y3+YRRX4Y4JzYHjAzCnO6ERGAyT\\n7KxXgMc23uDLJ6FTZ5tRS/d44nPImc2NTbZ1RJrMZv1wn5LamPxpxXPKZL57DjYh\\nCkykzl6/9Hg/c1gKBo+ppWWzbQKBgQDBfnfoBm3YA7ZajTLlcXh85PjfSANlsIq3\\nkqPavVzkgjQJx2fqjSq/p0YQFP+yWCM8pCZfTuLaoUtS9Rz4XRARXTpzp5LfSvFQ\\nFnuY51Y1aNKx2VO2dDdhJAc53ls+qNwefWYR7vETOt/wFn5stdDGpzsw8ldgtixS\\n18shrE+KewKBgEFDjCHHXGYHQKeVvH340vNSW7d1Yfgt9PsGrI/r+lBKO8Zo0UOL\\n2UkwJrBI8ipWbNk5n3ii9PNmMcn8I1+Kue9YP79GsZxC3FYnNE6Lrrplc/lwEXw3\\nEX+wyW41YaW0DWDvNkdJSYMqugpRwcIJyWDykiR/fBR7egrUWujzVYvVAoGBAJg/\\nmbuQ63dQHHkNpyGQcjzbsdOGh13JVqzxDkq8O052ANo889BDuYJJ7UAUNcmvvjIl\\n+yd9G9TpmyowQdZO66iuEaMVFOTrxAq/VgtO469sxnQ4S71Bnp2pyqHHC0a3eVPo\\nWZr8xuXZqoDwQhPpz9evmEyAMy6eySt6LpRVT9TnAoGBAKt4fPy4HodcDJkdWN4s\\nZDn0/48v2b+8b6X69fatQl8btZibtjKL97R0ebuL4yyZlDTocXNc81boah5g6zgZ\\ng9xHA2IFJa8zy9yRpmQYGm+z+PcQN6cmiYtLcy/SivS1EcfmwuLrSbJv4VxPTI9D\\nY35IBsVDpUAx3sxKlj4TaNfo\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-b7snu@my-daily-status-168f7.iam.gserviceaccount.com\",\"client_id\":\"113504115609322615110\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b7snu%40my-daily-status-168f7.iam.gserviceaccount.com\"}");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8Zni");


/***/ }),

/***/ "8Zni":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStatus; });
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U6Mw");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_getCurrentDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("S36c");


async function createStatus(req, res) {
  console.log('CHEGOU\n\n\n\n\n');
  const {
    symptoms = [],
    status
  } = req.body;
  const {
    latitude,
    longitude
  } = req.body.coords;
  const {
    userid: userId
  } = req.headers;
  const currentDate = Object(_util_getCurrentDate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  await _lib_firebase__WEBPACK_IMPORTED_MODULE_0__["db"].collection('users').doc(userId).collection('history').doc(currentDate).set({
    symptoms,
    status,
    coordinates: {
      latitude,
      longitude
    }
  });
  await _lib_firebase__WEBPACK_IMPORTED_MODULE_0__["db"].collection('history').doc(currentDate).collection('all').add({
    user: userId,
    symptoms,
    coordinates: new _lib_firebase__WEBPACK_IMPORTED_MODULE_0__["admin"].firestore.GeoPoint(latitude, longitude),
    status
  });
  return res.status(200).end();
}

/***/ }),

/***/ "MIr3":
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "NWFc":
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "S36c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new Date().toISOString().split('T')[0];
});

/***/ }),

/***/ "U6Mw":
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__("NWFc");

const {
  GeoFirestore
} = __webpack_require__("MIr3");

const serviceAccount = __webpack_require__("1raA"); // Verifica se o app já foi iniciado


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

/***/ })

/******/ });