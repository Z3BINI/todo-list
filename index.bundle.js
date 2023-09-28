/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    width: 100vw;
    height: 100vh;

    color: #FFFFFF;
}

a {
    color: #21D4FD;
    text-decoration: none;
}

.wrapper {
    width: 100%;
    height: 100%;
     
    display: grid;
    grid-template-rows: 2fr 15fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
    "header"
    "main"
    "footer";
}

.header {
    grid-area: header;

    background-color: #333334;

    box-shadow: 0 10px 20px black;
    z-index: 999;
}

.logo {
    height: 100%;
    margin-left: 20px;
    font-weight: bold;

    display: flex;
    align-items: center;
}

.logo > img {
    width: 75px;
    height: auto;
}

.logo > p {
    font-size: 1.3rem;

    background: -webkit-linear-gradient(90deg, #21D4FD 0%, #B721FF 100%); /*Adds gradient background, then removes it around the text, then makes text transparent!*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.main {
    grid-area: main;

    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

    display: flex;
    flex-direction: column;
}

.board-optns {
    margin: 25px 10px 0 10px;
    padding: 20px 20px 20px 10px;

    flex: 0 1 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;

    border-radius: 10px;
    background-color: rgba(51, 51, 52, 0.5);

    text-align: center;
}

.board-optns > div {
    min-width: 175px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
}

.board-optns > div > select {
    background-color: #333334;
    opacity: 0.8;
    width: 155px;
    border: none;
    border-radius: 10px;
    padding: 2px 5px;
    color: white;
}

.board-optns > div > button {
    background-color: #21D4FD;
    border: 1px solid #FFF3B0;
    border-radius: 5px;
    color: black;
    padding: 2px;
}

.board-optns > .del-project {
    width: 75px;
    height: 55px;
    min-width: 75px;
    min-height: 55px;

    background-color: #B721FF;
    border: 3px solid #FFF3B0;

    color: #FFF3B0;
    font-weight: bold;
}

.board-optns > .add-card {
    width: 53px;
    height: 53px;
    min-width: 53px;
    min-height: 53px;
    
    
    background-color: #7221fd;
    border: 3px solid #FFF3B0;
    border-radius: 50%;

    color: #FFF3B0;
    font-weight: bold;
}

.board-optns > .add-card:hover {
    border: 3px solid #71b914;
}

.board-optns > .del-project:hover {
    border: 3px solid #F93943;
}

.board-optns > button:hover {
    transform: scale(1.2);
}

.board-optns > button:active {
    transform: scale(1.5);
}

.board {
    flex: auto;

    margin: 10px;
}

.board > div {
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 100%;
    border-radius: 5px;

    display:flex;
    flex-direction: column;
}

div > h2 {
    text-align: center;
    text-decoration: underline;
}

.cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    background-color: rgba(51, 51, 52, 0.5);
    border-radius: 5px;
    padding: 8px;

    height: fit-content;
}


#undef-container > div, #doing-container > div, #done-container > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 20%));
    gap: 8px;
    justify-content: center;

    height: 90%;   
    min-height: fit-content; 
    margin: 10px;
}

form input, form select, form button {
    width: 150px;
    height: 25px;
}

form button {
    border: none;
}

form, form div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    gap: 32px;
}

form > div:nth-child(2) {
    gap: 8px;
}

form > div:nth-child(3) {
    gap: 4px;
}

form > div > button:hover {
    background-color: #333334;
    color: white;
}

form > div > button:active {
    transform: scale(1.1);
}

dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 50px 25px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgba(51, 51, 52, 0.7)
}

.cards select, .cards button {
    width: 80%;
    height: 20px;
    border-radius: 5px;
    background-color: #333334;
    color: white;
    border: none;
}

.cards button.del {
    background-color: #F93943;
}

.cards div {
    width: 100%;
}

.cards div:nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
}

#undef-container {
    flex: 1 1 auto;
}

#doing-done-container {
    flex: 2 1 auto;
    
    display: flex;
    flex-wrap: wrap;
}

#doing-done-container > div {
    flex: auto;

    min-width: 300px;
}

#doing-container {
    background-color: rgba(183, 0, 255, 0.3);
}

#done-container {
    background-color: rgba(0, 255, 76, 0.3);
}
.footer {
    grid-area: footer;

    background-color: #333334;

    display: flex;
    justify-content: center;
    align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,mJAAmJ;AACvJ;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,gCAAgC;IAChC,0BAA0B;IAC1B;;;YAGQ;AACZ;;AAEA;IACI,iBAAiB;;IAEjB,yBAAyB;;IAEzB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;;IAEjB,oEAAoE,EAAE,0FAA0F;IAChK,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,eAAe;;IAEf,yBAAyB;IACzB,kEAAkE;;IAElE,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB,4BAA4B;;IAE5B,cAAc;;IAEd,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,eAAe;;IAEf,mBAAmB;IACnB,uCAAuC;;IAEvC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,gBAAgB;;IAEhB,yBAAyB;IACzB,yBAAyB;;IAEzB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,gBAAgB;;;IAGhB,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;;IAElB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;;IAEV,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,WAAW;IACX,YAAY;IACZ,kBAAkB;;IAElB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;;IAEnB,uCAAuC;IACvC,kBAAkB;IAClB,YAAY;;IAEZ,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,2DAA2D;IAC3D,QAAQ;IACR,uBAAuB;;IAEvB,WAAW;IACX,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ;AACJ;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;;IAEd,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,UAAU;;IAEV,gBAAgB;AACpB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,uCAAuC;AAC3C;AACA;IACI,iBAAiB;;IAEjB,yBAAyB;;IAEzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n\n    color: #FFFFFF;\n}\n\na {\n    color: #21D4FD;\n    text-decoration: none;\n}\n\n.wrapper {\n    width: 100%;\n    height: 100%;\n     \n    display: grid;\n    grid-template-rows: 2fr 15fr 1fr;\n    grid-template-columns: 1fr;\n    grid-template-areas: \n    \"header\"\n    \"main\"\n    \"footer\";\n}\n\n.header {\n    grid-area: header;\n\n    background-color: #333334;\n\n    box-shadow: 0 10px 20px black;\n    z-index: 999;\n}\n\n.logo {\n    height: 100%;\n    margin-left: 20px;\n    font-weight: bold;\n\n    display: flex;\n    align-items: center;\n}\n\n.logo > img {\n    width: 75px;\n    height: auto;\n}\n\n.logo > p {\n    font-size: 1.3rem;\n\n    background: -webkit-linear-gradient(90deg, #21D4FD 0%, #B721FF 100%); /*Adds gradient background, then removes it around the text, then makes text transparent!*/\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n.main {\n    grid-area: main;\n\n    background-color: #21D4FD;\n    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);\n\n    display: flex;\n    flex-direction: column;\n}\n\n.board-optns {\n    margin: 25px 10px 0 10px;\n    padding: 20px 20px 20px 10px;\n\n    flex: 0 1 auto;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 25px;\n    flex-wrap: wrap;\n\n    border-radius: 10px;\n    background-color: rgba(51, 51, 52, 0.5);\n\n    text-align: center;\n}\n\n.board-optns > div {\n    min-width: 175px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap: 5px;\n}\n\n.board-optns > div > select {\n    background-color: #333334;\n    opacity: 0.8;\n    width: 155px;\n    border: none;\n    border-radius: 10px;\n    padding: 2px 5px;\n    color: white;\n}\n\n.board-optns > div > button {\n    background-color: #21D4FD;\n    border: 1px solid #FFF3B0;\n    border-radius: 5px;\n    color: black;\n    padding: 2px;\n}\n\n.board-optns > .del-project {\n    width: 75px;\n    height: 55px;\n    min-width: 75px;\n    min-height: 55px;\n\n    background-color: #B721FF;\n    border: 3px solid #FFF3B0;\n\n    color: #FFF3B0;\n    font-weight: bold;\n}\n\n.board-optns > .add-card {\n    width: 53px;\n    height: 53px;\n    min-width: 53px;\n    min-height: 53px;\n    \n    \n    background-color: #7221fd;\n    border: 3px solid #FFF3B0;\n    border-radius: 50%;\n\n    color: #FFF3B0;\n    font-weight: bold;\n}\n\n.board-optns > .add-card:hover {\n    border: 3px solid #71b914;\n}\n\n.board-optns > .del-project:hover {\n    border: 3px solid #F93943;\n}\n\n.board-optns > button:hover {\n    transform: scale(1.2);\n}\n\n.board-optns > button:active {\n    transform: scale(1.5);\n}\n\n.board {\n    flex: auto;\n\n    margin: 10px;\n}\n\n.board > div {\n    background-color: rgba(255, 255, 255, 0.3);\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n\n    display:flex;\n    flex-direction: column;\n}\n\ndiv > h2 {\n    text-align: center;\n    text-decoration: underline;\n}\n\n.cards {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    background-color: rgba(51, 51, 52, 0.5);\n    border-radius: 5px;\n    padding: 8px;\n\n    height: fit-content;\n}\n\n\n#undef-container > div, #doing-container > div, #done-container > div {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(100px, 20%));\n    gap: 8px;\n    justify-content: center;\n\n    height: 90%;   \n    min-height: fit-content; \n    margin: 10px;\n}\n\nform input, form select, form button {\n    width: 150px;\n    height: 25px;\n}\n\nform button {\n    border: none;\n}\n\nform, form div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nform {\n    gap: 32px;\n}\n\nform > div:nth-child(2) {\n    gap: 8px;\n}\n\nform > div:nth-child(3) {\n    gap: 4px;\n}\n\nform > div > button:hover {\n    background-color: #333334;\n    color: white;\n}\n\nform > div > button:active {\n    transform: scale(1.1);\n}\n\ndialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    padding: 50px 25px;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    background-color: rgba(51, 51, 52, 0.7)\n}\n\n.cards select, .cards button {\n    width: 80%;\n    height: 20px;\n    border-radius: 5px;\n    background-color: #333334;\n    color: white;\n    border: none;\n}\n\n.cards button.del {\n    background-color: #F93943;\n}\n\n.cards div {\n    width: 100%;\n}\n\n.cards div:nth-child(3) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2px;\n}\n\n#undef-container {\n    flex: 1 1 auto;\n}\n\n#doing-done-container {\n    flex: 2 1 auto;\n    \n    display: flex;\n    flex-wrap: wrap;\n}\n\n#doing-done-container > div {\n    flex: auto;\n\n    min-width: 300px;\n}\n\n#doing-container {\n    background-color: rgba(183, 0, 255, 0.3);\n}\n\n#done-container {\n    background-color: rgba(0, 255, 76, 0.3);\n}\n.footer {\n    grid-area: footer;\n\n    background-color: #333334;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dialogFormDom.js":
/*!******************************!*\
  !*** ./src/dialogFormDom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

    //Create dialog form elements for task creation
    const dialogElement = document.createElement('dialog');
    const title = document.createElement('h2');
    const formElement = document.createElement('form');
    const inputContainer = document.createElement('div');
    const btnContainer = document.createElement('div');

    const titleInput = document.createElement('input');
    const designationInput = document.createElement('input');

    const statusSelect = document.createElement('select');
    const importanceSelect = document.createElement('select');

    const status = [];
    const importance = [];

    for (let i = 1; i < 4; i++){
        status[i] = document.createElement('option');
        importance[i] = document.createElement('option');
    };

    const defaultStatus = document.createElement('option');
    const defaultImportance = document.createElement('option');

    const submitBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    //Add inner conent text or labels/placeholders
    title.textContent = 'New task';
    submitBtn.textContent = 'Add task';
    cancelBtn.textContent = 'Close';
    defaultStatus.textContent = 'Task status';
    defaultImportance.textContent = 'Task importance';

    //importances
    importance[1].textContent = 'Low';
    importance[2].textContent = 'Medium';
    importance[3].textContent = 'High';

    //satuses
    status[1].textContent = 'Undefined';
    status[2].textContent = 'Doing';
    status[3].textContent = 'Done';

    titleInput.placeholder = 'Task title';
    designationInput.placeholder = 'Task designation';

    //Default option attributes
    defaultImportance.disabled = true;
    defaultImportance.hidden = true;
    defaultImportance.selected = true;
    defaultImportance.value = '';

    defaultStatus.disabled = true;
    defaultStatus.hidden = true;
    defaultStatus.selected = true;
    defaultStatus.value = '';

    //Form method
    formElement.setAttribute('method', 'dialog');

    //Form validation
    titleInput.setAttribute('required', '');
    titleInput.setAttribute('minlength', 3);
    titleInput.setAttribute('maxlength', 15);

    designationInput.setAttribute('maxlength', 30);

    statusSelect.setAttribute('required', '');
    importanceSelect.setAttribute('required', '');

    //Add btn value
    submitBtn.value = 'send';

    //Btn IDs
    submitBtn.id = 'insert-task';
    cancelBtn.id = 'cancel-task';

    //Input IDs
    titleInput.id = 'title';
    designationInput.id = 'designation';
    statusSelect.id = 'status';
    importanceSelect.id = 'importance';

    //Add default options to the respective select elements
    statusSelect.add(defaultStatus);
    importanceSelect.add(defaultImportance);

    //Add options to respecitve select elements
    for (let i = 1; i < 4; i++) {
        statusSelect.add(status[i]);
        importanceSelect.add(importance[i]);
    }

    //Append all elements to the dialog element
    dialogElement.appendChild(formElement);
    formElement.appendChild(title);
    formElement.appendChild(inputContainer);
    formElement.appendChild(btnContainer);

    inputContainer.appendChild(titleInput);
    inputContainer.appendChild(designationInput);
    inputContainer.appendChild(statusSelect);
    inputContainer.appendChild(importanceSelect);
    
    btnContainer.appendChild(submitBtn);
    btnContainer.appendChild(cancelBtn);

    return dialogElement;

}

/***/ }),

/***/ "./src/domBoardOptns.js":
/*!******************************!*\
  !*** ./src/domBoardOptns.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

    //Cache dom
    const wrapper = document.querySelector('.board-optns');

    //Create elements
    const title = document.createElement('h2');

    const projectSelectorGroup = document.createElement('div');
    const projectSelector = document.createElement('select');
    const projectSelectorTxt = document.createElement('p');
    const projectSelectorNew = document.createElement('button');
    const defaultOption = document.createElement('option');

    const addCardBtn = document.createElement('button');
    const delProjectBtn = document.createElement('button');

    //Add classes to elements
    addCardBtn.classList.add('add-card');
    delProjectBtn.classList.add('del-project');

    //Add IDs for task distinction
    addCardBtn.id = 'add-task';
    delProjectBtn.id = 'del-project';
    projectSelector.id = 'project-change';
    projectSelectorNew.id = 'add-project';

    //Add content to elements
    title.textContent = 'Project management';
    projectSelectorTxt.textContent = 'Which project are you working on?';
    addCardBtn.textContent = 'ADD TASK';
    delProjectBtn.textContent = 'DELETE ENTIRE PROJECT'
    projectSelectorNew.textContent = 'New project...';

    defaultOption.text = 'Select a project...';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.hidden = true;

    projectSelector.add(defaultOption, 0);

    //Append elements
    projectSelectorGroup.appendChild(projectSelectorTxt);
    projectSelectorGroup.appendChild(projectSelector);
    projectSelectorGroup.appendChild(projectSelectorNew);


    wrapper.appendChild(title);
    wrapper.appendChild(projectSelectorGroup);
    wrapper.appendChild(addCardBtn);
    wrapper.appendChild(delProjectBtn);

}

/***/ }),

/***/ "./src/domStarter.js":
/*!***************************!*\
  !*** ./src/domStarter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _dialogFormDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogFormDom.js */ "./src/dialogFormDom.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    
    //Cache DOM
    const body = document.querySelector('body');

    //Create elements
    //Main structure
    const wrapper = document.createElement('div');
    
    //Create dialog & form DOM
    const dialogForm = (0,_dialogFormDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); 

    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    const boardOptns = document.createElement('div');
    const board = document.createElement('div');

    //Inner content elements
    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoTxt = document.createElement('p');

    const footerTxt = document.createElement('p');

    //Add relevant classes
    //Main structure
    wrapper.classList.add('wrapper');
    
    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');

    boardOptns.classList.add('board-optns');
    board.classList.add('board');

    //Inner content classes
    logo.classList.add('logo');
    
    //Add content to inner elements
    logoImg.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
    logoTxt.innerHTML = 'The<br>TooDoo<br>List';

    footerTxt.innerHTML = 'Made by <a href="https://github.com/Z3BINI/">Z3BINI</a>';

    //Append elements to their respective fathers
    //Main structure
    body.appendChild(wrapper);
    body.appendChild(dialogForm); 

    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    header.appendChild(logo);

    main.appendChild(boardOptns);
    main.appendChild(board);

    //Inner content
    logo.appendChild(logoImg);
    logo.appendChild(logoTxt);

    footer.appendChild(footerTxt);
};

/***/ }),

/***/ "./src/eventController.js":
/*!********************************!*\
  !*** ./src/eventController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController.js */ "./src/taskController.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
    if (event.target.id.includes('project')) (0,_projectController_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    if (event.target.id.includes('task')) (0,_taskController_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
} 

/***/ }),

/***/ "./src/projectBoardDom.js":
/*!********************************!*\
  !*** ./src/projectBoardDom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(className) {
    const projectBoardElement = document.createElement('div');
    const undefContainer = document.createElement('div');
    const doingDoneContainer = document.createElement('div');
    const doingContainer = document.createElement('div');
    const doneContainer = document.createElement('div');

    const innerUndef = document.createElement('div');
    const innerDoing = document.createElement('div');
    const innerDone = document.createElement('div');

    const undefTitle = document.createElement('h2');
    const doingTitle = document.createElement('h2');
    const doneTitle = document.createElement('h2');

    undefContainer.id = 'undef-container';
    doingDoneContainer.id = 'doing-done-container';
    doingContainer.id = 'doing-container';
    doneContainer.id = 'done-container';


    projectBoardElement.classList.add('board-' + className);


    projectBoardElement.value = className;

    undefTitle.textContent = 'Undefined tasks';
    doingTitle.textContent = 'Doing';
    doneTitle.textContent = 'Done';

    undefContainer.appendChild(undefTitle);
    doingContainer.appendChild(doingTitle);
    doneContainer.appendChild(doneTitle);

    undefContainer.appendChild(innerUndef);
    doingContainer.appendChild(innerDoing);
    doneContainer.appendChild(innerDone);


    projectBoardElement.appendChild(undefContainer);

    doingDoneContainer.appendChild(doingContainer);
    doingDoneContainer.appendChild(doneContainer);

    projectBoardElement.appendChild(doingDoneContainer);

    return projectBoardElement;
}

/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectBoardDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectBoardDom.js */ "./src/projectBoardDom.js");


//Init projects array
let projects = [];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) { 

    //Cache Dom 
    const selector = document.querySelector('select');
    const projectWrapper = document.querySelector('.board');
    const currentLoadedProject = document.querySelector('.board > div');

    //Render module functions
    const render = {

        addProjectsToSelector: () =>  projects.forEach(project => selector.add(project.option)),
        clearProjectsInSelector: () => selector.innerHTML = '',
        addDefaultOptnInSelector: () => {
            const defaultOption = document.createElement('option');
            
            defaultOption.text = 'Select a project...';
            defaultOption.selected = true;
            defaultOption.disabled = true;
            defaultOption.hidden = true;
        
            selector.add(defaultOption, 0);
        },
        clearCurrentProject: () => projectWrapper.innerHTML = '',
        selectedProject: (boardName) => {
            const searchSelected = controller.searchProject(boardName);
    
            if (searchSelected.length === 1) {
                return projectWrapper.appendChild(searchSelected[0].element);
            }
        },

        createBoardElement: (className) => {
            
            const projectBoardElement = (0,_projectBoardDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(className);
            
            

            return projectBoardElement;
        },

        createBoardOptionElement: (className, name) => {
            const boardOptionElement = document.createElement('option');
            boardOptionElement.text = name;
            boardOptionElement.value = className;

            return boardOptionElement;
        }

    }

    //Logic module functions
    const controller = {

        projectMaker: (className, name) => {
            //Create new project board element
            const projectBoardElement = render.createBoardElement(className, name);
            
            //Create new project board option for the select
            const boardOptionElement = render.createBoardOptionElement(className, name);
        
            //Unite them in an object
            const boardObj = {
                element: projectBoardElement,
                option: boardOptionElement
            }
        
            projects.push(boardObj);

            return;
        },

        deleteCurrentProject: () => {
            projects = projects.filter( project => project.element.value !== currentLoadedProject.value);
            return;
        },

        searchProject: (needle) => projects.filter(project => project.option.value === needle),

        checkForExistingBoardName: (projectClassName) => projects.find(project => project.option.value === projectClassName)

    }
    
    //Event checker
    if (event.target.id === 'add-project') {

        const projectName = prompt('Name your project:');

        if(projectName) {
            const projectClassName = projectName.replaceAll(' ', '-');
            
            if (!(controller.checkForExistingBoardName(projectClassName))) {
                controller.projectMaker(projectClassName, projectName);
                render.addProjectsToSelector();
                return;
            }
            alert(`Board named "${projectName}" already exists! Please chose a different name.`);
            return;
        } 

        return;
        
    }

    if (event.target.id === 'project-change') {
        render.clearCurrentProject();
        render.selectedProject(event.target.value);
        return;
    }

    if (event.target.id === 'del-project') {
        if (!currentLoadedProject) return alert('No project selected!'); 
        if (confirm('This will permanently delete the board, are you sure?')) {
            controller.deleteCurrentProject();
            render.clearCurrentProject();
            render.clearProjectsInSelector();
            render.addDefaultOptnInSelector();
            render.addProjectsToSelector();
            return;
        }
        return;
    }

}



    




/***/ }),

/***/ "./src/taskController.js":
/*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");
/* harmony import */ var _taskDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDom.js */ "./src/taskDom.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event){
    
    //Prevent page refresh case form btns are pressed
    event.preventDefault();
    
    //Cache dialog element
    const dialogForm = document.querySelector('dialog');

    const render = {
        showForm: () => dialogForm.showModal(),
        closeForm: () => dialogForm.close(),
        resetForm: () => dialogForm.children[0].reset(),
        resetSelects: () => {
            const selects = document.querySelectorAll('form select');

            selects.forEach(select => {
                select.options[0].selected = true;
            });
        }

    }

    const control = {
        getUserInput: () => {

            const title = document.querySelector('#title');
            const designation = document.querySelector('#designation');
            const status = document.querySelector('#status');
            const importance = document.querySelector('#importance');

            return [title.value, designation.value, status.value, importance.value];
        }
    }

    //Get current loaded board, if any
    const currentBoard = document.querySelector('.board > div');
    //Store form element for validation
    const form = dialogForm.children[0];    

    if (event.target.id === 'insert-task') {

        if (form.reportValidity()) { //Due to preventDefault() I utilize this method to check form validation!

            const userInputArr = control.getUserInput();
            const taskElement = (0,_taskDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(userInputArr);

            userInputArr.push(currentBoard);
            userInputArr.push(taskElement);

            render.closeForm();
            render.resetForm();
            render.resetSelects();

            const newTask = new _taskFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"](userInputArr);

            newTask.place();
            newTask.addEventListeners();

        }
    }

    if (event.target.id === 'add-task') {

        if (!currentBoard) return alert('No board selected to add task!');  

        render.showForm();
    }
    
    if (event.target.id === 'cancel-task') {
        render.closeForm();
        render.resetForm();
        render.resetSelects();
    }
    
}

/***/ }),

/***/ "./src/taskDom.js":
/*!************************!*\
  !*** ./src/taskDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(taskInfo) {

    //Create elements
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesignationContainer = document.createElement('div');
    const taskDesignation = document.createElement('p');
    const optnsContainer = document.createElement('div');
    const changeStatus = document.createElement('select');
    const changeImportance = document.createElement('select');
    const delBtn = document.createElement('button');

    const statuses = document.querySelectorAll('#status > option');
    const importances = document.querySelectorAll('#importance > option');

    const selectedStatus = document.createElement('option');
    const selectedImportance = document.createElement('option');

    //Add content to elements
    taskTitle.textContent = taskInfo[0];
    taskDesignation.textContent = taskInfo[1];

    selectedStatus.textContent = taskInfo[2];
    selectedStatus.value = taskInfo[2];

    selectedImportance.textContent = taskInfo[3];
    selectedImportance.value = taskInfo[3];

    delBtn.textContent = 'Delete';


    //Add class
    delBtn.classList.add('del');
    changeImportance.classList.add('change-imp');
    changeStatus.classList.add('change-stat');

    //Append clones of the option elements to the change select element
    for (let i = 1; i < 4; i++) {
        changeStatus.appendChild(statuses[i].cloneNode(true)); //Otherwise the 'old' elements would be deleted...
        changeImportance.appendChild(importances[i].cloneNode(true));
    }    
    
    //Look for the selected option and initialize it as selected
    Array.from(changeStatus).forEach(status => {
        if (status.value === selectedStatus.value) status.selected = true;
    });
    Array.from(changeImportance).forEach(importance => {
        //Check wich status is the selected one for this task
        if (importance.value === selectedImportance.value) importance.selected = true;
    });

    //Give container a class
    taskContainer.classList.add('cards');

    //Append elements to father
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDesignationContainer);
    taskContainer.appendChild(optnsContainer);

    taskDesignationContainer.appendChild(taskDesignation);

    optnsContainer.appendChild(changeStatus);
    optnsContainer.appendChild(changeImportance);
    optnsContainer.appendChild(delBtn);

    return taskContainer;
}




/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {

    constructor(newTaskArr){
        this.title = newTaskArr[0];
        this.designation = newTaskArr[1];
        this.status = newTaskArr[2];
        this.importance = newTaskArr[3];
        this.board = newTaskArr[4];
        this.card = newTaskArr[5];
    }

    place() {
        if (this.status === 'Undefined') this.board.children[0].children[1].appendChild(this.card);     
        if (this.status === 'Doing') this.board.children[1].children[0].children[1].appendChild(this.card);
        if (this.status === 'Done') this.board.children[1].children[1].children[1].appendChild(this.card);

        if (this.importance === 'Low') this.card.style = 'border: 2px solid blue;';
        if (this.importance === 'Medium') this.card.style = 'border: 2px solid yellow;';
        if (this.importance === 'High') this.card.style = 'border: 2px solid red;';
    }

    addEventListeners() {
        //Store the card's option elements
        const delBtn = this.card.querySelector('button.del');
        const changeStatusSelect = this.card.querySelector('select.change-stat');
        const changeImportanceSelect = this.card.querySelector('select.change-imp');

        delBtn.addEventListener('click', () => this.delete(this.card));
        changeStatusSelect.addEventListener('change', (event) => this.changeStatus(this, event));
        changeImportanceSelect.addEventListener('change', (event) => this.changeImportance(this, event));

    }

    delete(card) {
        card.remove();
    }

    changeStatus(card, event) {
        card.status = event.target.value;
        card.place();    
    }

    changeImportance(card, event) {
        card.importance = event.target.value;
        card.place();
    }

        
}




/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cbd2fde6f5eb7664015.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domStarter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStarter.js */ "./src/domStarter.js");
/* harmony import */ var _domBoardOptns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domBoardOptns.js */ "./src/domBoardOptns.js");
/* harmony import */ var _eventController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventController.js */ "./src/eventController.js");





(function(){

    //Start outter dom
    (0,_domStarter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    //Start board options dom
    (0,_domBoardOptns_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    //Cache options DOM
    const btns = document.querySelectorAll('button');
    const select = document.querySelector('select');
    

    //Set event listeners
    btns.forEach(btn => btn.addEventListener('click', (event) => (0,_eventController_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event)));
    select.addEventListener('change', (event) => (0,_eventController_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event));

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsY0FBYyxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsWUFBWSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLDZCQUE2Qiw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw0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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDTTtBQUNJOztBQUVuRDs7QUFFQTtBQUNBLElBQUksMERBQVU7QUFDZDtBQUNBLElBQUksNkRBQWE7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLCtEQUFlO0FBQ2hGLGlEQUFpRCwrREFBZTs7QUFFaEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlhbG9nRm9ybURvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQm9hcmRPcHRucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tU3RhcnRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Qm9hcmREb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuYSB7XG4gICAgY29sb3I6ICMyMUQ0RkQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDE1ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwiaGVhZGVyXCJcbiAgICBcIm1haW5cIlxuICAgIFwiZm9vdGVyXCI7XG59XG5cbi5oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzNDtcblxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IGJsYWNrO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28gPiBpbWcge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ28gPiBwIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjFENEZEIDAlLCAjQjcyMUZGIDEwMCUpOyAvKkFkZHMgZ3JhZGllbnQgYmFja2dyb3VuZCwgdGhlbiByZW1vdmVzIGl0IGFyb3VuZCB0aGUgdGV4dCwgdGhlbiBtYWtlcyB0ZXh0IHRyYW5zcGFyZW50ISovXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFpbiB7XG4gICAgZ3JpZC1hcmVhOiBtYWluO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxRDRGRDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTlkZWcsICMyMUQ0RkQgMCUsICNCNzIxRkYgMTAwJSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib2FyZC1vcHRucyB7XG4gICAgbWFyZ2luOiAyNXB4IDEwcHggMCAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDEwcHg7XG5cbiAgICBmbGV4OiAwIDEgYXV0bztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTIsIDAuNSk7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZC1vcHRucyA+IGRpdiB7XG4gICAgbWluLXdpZHRoOiAxNzVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uYm9hcmQtb3B0bnMgPiBkaXYgPiBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzQ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvYXJkLW9wdG5zID4gZGl2ID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFENEZEO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkYzQjA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbi5ib2FyZC1vcHRucyA+IC5kZWwtcHJvamVjdCB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG1pbi13aWR0aDogNzVweDtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I3MjFGRjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZGM0IwO1xuXG4gICAgY29sb3I6ICNGRkYzQjA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib2FyZC1vcHRucyA+IC5hZGQtY2FyZCB7XG4gICAgd2lkdGg6IDUzcHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIG1pbi13aWR0aDogNTNweDtcbiAgICBtaW4taGVpZ2h0OiA1M3B4O1xuICAgIFxuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjIxZmQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI0ZGRjNCMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICBjb2xvcjogI0ZGRjNCMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvYXJkLW9wdG5zID4gLmFkZC1jYXJkOmhvdmVyIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNzFiOTE0O1xufVxuXG4uYm9hcmQtb3B0bnMgPiAuZGVsLXByb2plY3Q6aG92ZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGOTM5NDM7XG59XG5cbi5ib2FyZC1vcHRucyA+IGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uYm9hcmQtb3B0bnMgPiBidXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi5ib2FyZCB7XG4gICAgZmxleDogYXV0bztcblxuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmJvYXJkID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5kaXYgPiBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MiwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuXG4jdW5kZWYtY29udGFpbmVyID4gZGl2LCAjZG9pbmctY29udGFpbmVyID4gZGl2LCAjZG9uZS1jb250YWluZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMjAlKSk7XG4gICAgZ2FwOiA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDkwJTsgICBcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDsgXG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG5mb3JtIGlucHV0LCBmb3JtIHNlbGVjdCwgZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0sIGZvcm0gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gICAgZ2FwOiAzMnB4O1xufVxuXG5mb3JtID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZ2FwOiA4cHg7XG59XG5cbmZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBnYXA6IDRweDtcbn1cblxuZm9ybSA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzNDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gPiBkaXYgPiBidXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTIsIDAuNylcbn1cblxuLmNhcmRzIHNlbGVjdCwgLmNhcmRzIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcmRzIGJ1dHRvbi5kZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOTM5NDM7XG59XG5cbi5jYXJkcyBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZHMgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycHg7XG59XG5cbiN1bmRlZi1jb250YWluZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jZG9pbmctZG9uZS1jb250YWluZXIge1xuICAgIGZsZXg6IDIgMSBhdXRvO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4jZG9pbmctZG9uZS1jb250YWluZXIgPiBkaXYge1xuICAgIGZsZXg6IGF1dG87XG5cbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4jZG9pbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywgMCwgMjU1LCAwLjMpO1xufVxuXG4jZG9uZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA3NiwgMC4zKTtcbn1cbi5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzNDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7SUFFVixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCOzs7WUFHUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlC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QUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVOztJQUVWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksaUJBQWlCOztJQUVqQix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogIzIxRDRGRDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMTVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlclxcXCJcXG4gICAgXFxcIm1haW5cXFwiXFxuICAgIFxcXCJmb290ZXJcXFwiO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzQ7XFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IGJsYWNrO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvID4gaW1nIHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmxvZ28gPiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjFENEZEIDAlLCAjQjcyMUZGIDEwMCUpOyAvKkFkZHMgZ3JhZGllbnQgYmFja2dyb3VuZCwgdGhlbiByZW1vdmVzIGl0IGFyb3VuZCB0aGUgdGV4dCwgdGhlbiBtYWtlcyB0ZXh0IHRyYW5zcGFyZW50ISovXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFENEZEO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTlkZWcsICMyMUQ0RkQgMCUsICNCNzIxRkYgMTAwJSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZC1vcHRucyB7XFxuICAgIG1hcmdpbjogMjVweCAxMHB4IDAgMTBweDtcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMTBweDtcXG5cXG4gICAgZmxleDogMCAxIGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUyLCAwLjUpO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1vcHRucyA+IGRpdiB7XFxuICAgIG1pbi13aWR0aDogMTc1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmJvYXJkLW9wdG5zID4gZGl2ID4gc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzNDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogMTU1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQtb3B0bnMgPiBkaXYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFENEZEO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGM0IwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uYm9hcmQtb3B0bnMgPiAuZGVsLXByb2plY3Qge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBtaW4td2lkdGg6IDc1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNzIxRkY7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkYzQjA7XFxuXFxuICAgIGNvbG9yOiAjRkZGM0IwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJvYXJkLW9wdG5zID4gLmFkZC1jYXJkIHtcXG4gICAgd2lkdGg6IDUzcHg7XFxuICAgIGhlaWdodDogNTNweDtcXG4gICAgbWluLXdpZHRoOiA1M3B4O1xcbiAgICBtaW4taGVpZ2h0OiA1M3B4O1xcbiAgICBcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjIxZmQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkYzQjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgY29sb3I6ICNGRkYzQjA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYm9hcmQtb3B0bnMgPiAuYWRkLWNhcmQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNzFiOTE0O1xcbn1cXG5cXG4uYm9hcmQtb3B0bnMgPiAuZGVsLXByb2plY3Q6aG92ZXIge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjkzOTQzO1xcbn1cXG5cXG4uYm9hcmQtb3B0bnMgPiBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5ib2FyZC1vcHRucyA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGZsZXg6IGF1dG87XFxuXFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmJvYXJkID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2ID4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MiwgMC41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcblxcbiN1bmRlZi1jb250YWluZXIgPiBkaXYsICNkb2luZy1jb250YWluZXIgPiBkaXYsICNkb25lLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDIwJSkpO1xcbiAgICBnYXA6IDhweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogOTAlOyAgIFxcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDsgXFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9ybSBpbnB1dCwgZm9ybSBzZWxlY3QsIGZvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtLCBmb3JtIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbmZvcm0gPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbmZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbmZvcm0gPiBkaXYgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzM0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvcm0gPiBkaXYgPiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MiwgMC43KVxcbn1cXG5cXG4uY2FyZHMgc2VsZWN0LCAuY2FyZHMgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uY2FyZHMgYnV0dG9uLmRlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOTM5NDM7XFxufVxcblxcbi5jYXJkcyBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmRzIGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuI3VuZGVmLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG4jZG9pbmctZG9uZS1jb250YWluZXIge1xcbiAgICBmbGV4OiAyIDEgYXV0bztcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI2RvaW5nLWRvbmUtY29udGFpbmVyID4gZGl2IHtcXG4gICAgZmxleDogYXV0bztcXG5cXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuI2RvaW5nLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgzLCAwLCAyNTUsIDAuMyk7XFxufVxcblxcbiNkb25lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCA3NiwgMC4zKTtcXG59XFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzM0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG5cbiAgICAvL0NyZWF0ZSBkaWFsb2cgZm9ybSBlbGVtZW50cyBmb3IgdGFzayBjcmVhdGlvblxuICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRlc2lnbmF0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gW107XG4gICAgY29uc3QgaW1wb3J0YW5jZSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspe1xuICAgICAgICBzdGF0dXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgaW1wb3J0YW5jZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWZhdWx0U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY29uc3QgZGVmYXVsdEltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9BZGQgaW5uZXIgY29uZW50IHRleHQgb3IgbGFiZWxzL3BsYWNlaG9sZGVyc1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ05ldyB0YXNrJztcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkIHRhc2snO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgZGVmYXVsdFN0YXR1cy50ZXh0Q29udGVudCA9ICdUYXNrIHN0YXR1cyc7XG4gICAgZGVmYXVsdEltcG9ydGFuY2UudGV4dENvbnRlbnQgPSAnVGFzayBpbXBvcnRhbmNlJztcblxuICAgIC8vaW1wb3J0YW5jZXNcbiAgICBpbXBvcnRhbmNlWzFdLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgaW1wb3J0YW5jZVsyXS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIGltcG9ydGFuY2VbM10udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAvL3NhdHVzZXNcbiAgICBzdGF0dXNbMV0udGV4dENvbnRlbnQgPSAnVW5kZWZpbmVkJztcbiAgICBzdGF0dXNbMl0udGV4dENvbnRlbnQgPSAnRG9pbmcnO1xuICAgIHN0YXR1c1szXS50ZXh0Q29udGVudCA9ICdEb25lJztcblxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayB0aXRsZSc7XG4gICAgZGVzaWduYXRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIGRlc2lnbmF0aW9uJztcblxuICAgIC8vRGVmYXVsdCBvcHRpb24gYXR0cmlidXRlc1xuICAgIGRlZmF1bHRJbXBvcnRhbmNlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBkZWZhdWx0SW1wb3J0YW5jZS5oaWRkZW4gPSB0cnVlO1xuICAgIGRlZmF1bHRJbXBvcnRhbmNlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkZWZhdWx0SW1wb3J0YW5jZS52YWx1ZSA9ICcnO1xuXG4gICAgZGVmYXVsdFN0YXR1cy5kaXNhYmxlZCA9IHRydWU7XG4gICAgZGVmYXVsdFN0YXR1cy5oaWRkZW4gPSB0cnVlO1xuICAgIGRlZmF1bHRTdGF0dXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRTdGF0dXMudmFsdWUgPSAnJztcblxuICAgIC8vRm9ybSBtZXRob2RcbiAgICBmb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdkaWFsb2cnKTtcblxuICAgIC8vRm9ybSB2YWxpZGF0aW9uXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAzKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgMTUpO1xuXG4gICAgZGVzaWduYXRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDMwKTtcblxuICAgIHN0YXR1c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGltcG9ydGFuY2VTZWxlY3Quc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIC8vQWRkIGJ0biB2YWx1ZVxuICAgIHN1Ym1pdEJ0bi52YWx1ZSA9ICdzZW5kJztcblxuICAgIC8vQnRuIElEc1xuICAgIHN1Ym1pdEJ0bi5pZCA9ICdpbnNlcnQtdGFzayc7XG4gICAgY2FuY2VsQnRuLmlkID0gJ2NhbmNlbC10YXNrJztcblxuICAgIC8vSW5wdXQgSURzXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgZGVzaWduYXRpb25JbnB1dC5pZCA9ICdkZXNpZ25hdGlvbic7XG4gICAgc3RhdHVzU2VsZWN0LmlkID0gJ3N0YXR1cyc7XG4gICAgaW1wb3J0YW5jZVNlbGVjdC5pZCA9ICdpbXBvcnRhbmNlJztcblxuICAgIC8vQWRkIGRlZmF1bHQgb3B0aW9ucyB0byB0aGUgcmVzcGVjdGl2ZSBzZWxlY3QgZWxlbWVudHNcbiAgICBzdGF0dXNTZWxlY3QuYWRkKGRlZmF1bHRTdGF0dXMpO1xuICAgIGltcG9ydGFuY2VTZWxlY3QuYWRkKGRlZmF1bHRJbXBvcnRhbmNlKTtcblxuICAgIC8vQWRkIG9wdGlvbnMgdG8gcmVzcGVjaXR2ZSBzZWxlY3QgZWxlbWVudHNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBzdGF0dXNTZWxlY3QuYWRkKHN0YXR1c1tpXSk7XG4gICAgICAgIGltcG9ydGFuY2VTZWxlY3QuYWRkKGltcG9ydGFuY2VbaV0pO1xuICAgIH1cblxuICAgIC8vQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGUgZGlhbG9nIGVsZW1lbnRcbiAgICBkaWFsb2dFbGVtZW50LmFwcGVuZENoaWxkKGZvcm1FbGVtZW50KTtcbiAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNpZ25hdGlvbklucHV0KTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXNTZWxlY3QpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFuY2VTZWxlY3QpO1xuICAgIFxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgcmV0dXJuIGRpYWxvZ0VsZW1lbnQ7XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICAgIC8vQ2FjaGUgZG9tXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1vcHRucycpO1xuXG4gICAgLy9DcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3JHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3JOZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICBjb25zdCBhZGRDYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9BZGQgY2xhc3NlcyB0byBlbGVtZW50c1xuICAgIGFkZENhcmRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWNhcmQnKTtcbiAgICBkZWxQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbC1wcm9qZWN0Jyk7XG5cbiAgICAvL0FkZCBJRHMgZm9yIHRhc2sgZGlzdGluY3Rpb25cbiAgICBhZGRDYXJkQnRuLmlkID0gJ2FkZC10YXNrJztcbiAgICBkZWxQcm9qZWN0QnRuLmlkID0gJ2RlbC1wcm9qZWN0JztcbiAgICBwcm9qZWN0U2VsZWN0b3IuaWQgPSAncHJvamVjdC1jaGFuZ2UnO1xuICAgIHByb2plY3RTZWxlY3Rvck5ldy5pZCA9ICdhZGQtcHJvamVjdCc7XG5cbiAgICAvL0FkZCBjb250ZW50IHRvIGVsZW1lbnRzXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBtYW5hZ2VtZW50JztcbiAgICBwcm9qZWN0U2VsZWN0b3JUeHQudGV4dENvbnRlbnQgPSAnV2hpY2ggcHJvamVjdCBhcmUgeW91IHdvcmtpbmcgb24/JztcbiAgICBhZGRDYXJkQnRuLnRleHRDb250ZW50ID0gJ0FERCBUQVNLJztcbiAgICBkZWxQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0RFTEVURSBFTlRJUkUgUFJPSkVDVCdcbiAgICBwcm9qZWN0U2VsZWN0b3JOZXcudGV4dENvbnRlbnQgPSAnTmV3IHByb2plY3QuLi4nO1xuXG4gICAgZGVmYXVsdE9wdGlvbi50ZXh0ID0gJ1NlbGVjdCBhIHByb2plY3QuLi4nO1xuICAgIGRlZmF1bHRPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRPcHRpb24uaGlkZGVuID0gdHJ1ZTtcblxuICAgIHByb2plY3RTZWxlY3Rvci5hZGQoZGVmYXVsdE9wdGlvbiwgMCk7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50c1xuICAgIHByb2plY3RTZWxlY3Rvckdyb3VwLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3RvclR4dCk7XG4gICAgcHJvamVjdFNlbGVjdG9yR3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yKTtcbiAgICBwcm9qZWN0U2VsZWN0b3JHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3JOZXcpO1xuXG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rvckdyb3VwKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFkZENhcmRCdG4pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsUHJvamVjdEJ0bik7XG5cbn0iLCJpbXBvcnQgbG9nb1N2ZyBmcm9tICcuL2ltZy9sb2dvLnN2Zyc7XG5pbXBvcnQgZGlhbG9nRWxlbWVudCBmcm9tICcuL2RpYWxvZ0Zvcm1Eb20uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvL0NhY2hlIERPTVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAvL0NyZWF0ZSBlbGVtZW50c1xuICAgIC8vTWFpbiBzdHJ1Y3R1cmVcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgLy9DcmVhdGUgZGlhbG9nICYgZm9ybSBET01cbiAgICBjb25zdCBkaWFsb2dGb3JtID0gZGlhbG9nRWxlbWVudCgpOyBcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGJvYXJkT3B0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9Jbm5lciBjb250ZW50IGVsZW1lbnRzXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBsb2dvVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3QgZm9vdGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgLy9BZGQgcmVsZXZhbnQgY2xhc3Nlc1xuICAgIC8vTWFpbiBzdHJ1Y3R1cmVcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgYm9hcmRPcHRucy5jbGFzc0xpc3QuYWRkKCdib2FyZC1vcHRucycpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG5cbiAgICAvL0lubmVyIGNvbnRlbnQgY2xhc3Nlc1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIFxuICAgIC8vQWRkIGNvbnRlbnQgdG8gaW5uZXIgZWxlbWVudHNcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ29Tdmc7XG4gICAgbG9nb1R4dC5pbm5lckhUTUwgPSAnVGhlPGJyPlRvb0Rvbzxicj5MaXN0JztcblxuICAgIGZvb3RlclR4dC5pbm5lckhUTUwgPSAnTWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ozQklOSS9cIj5aM0JJTkk8L2E+JztcblxuICAgIC8vQXBwZW5kIGVsZW1lbnRzIHRvIHRoZWlyIHJlc3BlY3RpdmUgZmF0aGVyc1xuICAgIC8vTWFpbiBzdHJ1Y3R1cmVcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nRm9ybSk7IFxuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChib2FyZE9wdG5zKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICAgIC8vSW5uZXIgY29udGVudFxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvVHh0KTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUeHQpO1xufTsiLCJpbXBvcnQgcHJvamVjdEV2ZW50TWFuYWdlciBmcm9tICcuL3Byb2plY3RDb250cm9sbGVyLmpzJztcbmltcG9ydCB0YXNrRXZlbnRNYW5hZ2VyIGZyb20gJy4vdGFza0NvbnRyb2xsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuaWQuaW5jbHVkZXMoJ3Byb2plY3QnKSkgcHJvamVjdEV2ZW50TWFuYWdlcihldmVudCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZC5pbmNsdWRlcygndGFzaycpKSB0YXNrRXZlbnRNYW5hZ2VyKGV2ZW50KTtcbn0gIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdEJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVuZGVmQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9pbmdEb25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBpbm5lclVuZGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXJEb2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlubmVyRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdW5kZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZG9pbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIHVuZGVmQ29udGFpbmVyLmlkID0gJ3VuZGVmLWNvbnRhaW5lcic7XG4gICAgZG9pbmdEb25lQ29udGFpbmVyLmlkID0gJ2RvaW5nLWRvbmUtY29udGFpbmVyJztcbiAgICBkb2luZ0NvbnRhaW5lci5pZCA9ICdkb2luZy1jb250YWluZXInO1xuICAgIGRvbmVDb250YWluZXIuaWQgPSAnZG9uZS1jb250YWluZXInO1xuXG5cbiAgICBwcm9qZWN0Qm9hcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLScgKyBjbGFzc05hbWUpO1xuXG5cbiAgICBwcm9qZWN0Qm9hcmRFbGVtZW50LnZhbHVlID0gY2xhc3NOYW1lO1xuXG4gICAgdW5kZWZUaXRsZS50ZXh0Q29udGVudCA9ICdVbmRlZmluZWQgdGFza3MnO1xuICAgIGRvaW5nVGl0bGUudGV4dENvbnRlbnQgPSAnRG9pbmcnO1xuICAgIGRvbmVUaXRsZS50ZXh0Q29udGVudCA9ICdEb25lJztcblxuICAgIHVuZGVmQ29udGFpbmVyLmFwcGVuZENoaWxkKHVuZGVmVGl0bGUpO1xuICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvaW5nVGl0bGUpO1xuICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZVRpdGxlKTtcblxuICAgIHVuZGVmQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVW5kZWYpO1xuICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyRG9pbmcpO1xuICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJEb25lKTtcblxuXG4gICAgcHJvamVjdEJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZCh1bmRlZkNvbnRhaW5lcik7XG5cbiAgICBkb2luZ0RvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9pbmdDb250YWluZXIpO1xuICAgIGRvaW5nRG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lQ29udGFpbmVyKTtcblxuICAgIHByb2plY3RCb2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9pbmdEb25lQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBwcm9qZWN0Qm9hcmRFbGVtZW50O1xufSIsImltcG9ydCBwcm9qZWN0Qm9hcmREb20gZnJvbSAnLi9wcm9qZWN0Qm9hcmREb20uanMnO1xuXG4vL0luaXQgcHJvamVjdHMgYXJyYXlcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkgeyBcblxuICAgIC8vQ2FjaGUgRG9tIFxuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb25zdCBjdXJyZW50TG9hZGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IGRpdicpO1xuXG4gICAgLy9SZW5kZXIgbW9kdWxlIGZ1bmN0aW9uc1xuICAgIGNvbnN0IHJlbmRlciA9IHtcblxuICAgICAgICBhZGRQcm9qZWN0c1RvU2VsZWN0b3I6ICgpID0+ICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gc2VsZWN0b3IuYWRkKHByb2plY3Qub3B0aW9uKSksXG4gICAgICAgIGNsZWFyUHJvamVjdHNJblNlbGVjdG9yOiAoKSA9PiBzZWxlY3Rvci5pbm5lckhUTUwgPSAnJyxcbiAgICAgICAgYWRkRGVmYXVsdE9wdG5JblNlbGVjdG9yOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb24udGV4dCA9ICdTZWxlY3QgYSBwcm9qZWN0Li4uJztcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAgICAgc2VsZWN0b3IuYWRkKGRlZmF1bHRPcHRpb24sIDApO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckN1cnJlbnRQcm9qZWN0OiAoKSA9PiBwcm9qZWN0V3JhcHBlci5pbm5lckhUTUwgPSAnJyxcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0OiAoYm9hcmROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hTZWxlY3RlZCA9IGNvbnRyb2xsZXIuc2VhcmNoUHJvamVjdChib2FyZE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHNlYXJjaFNlbGVjdGVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hTZWxlY3RlZFswXS5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVCb2FyZEVsZW1lbnQ6IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJvYXJkRWxlbWVudCA9IHByb2plY3RCb2FyZERvbShjbGFzc05hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RCb2FyZEVsZW1lbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlQm9hcmRPcHRpb25FbGVtZW50OiAoY2xhc3NOYW1lLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2FyZE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGJvYXJkT3B0aW9uRWxlbWVudC50ZXh0ID0gbmFtZTtcbiAgICAgICAgICAgIGJvYXJkT3B0aW9uRWxlbWVudC52YWx1ZSA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkT3B0aW9uRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9Mb2dpYyBtb2R1bGUgZnVuY3Rpb25zXG4gICAgY29uc3QgY29udHJvbGxlciA9IHtcblxuICAgICAgICBwcm9qZWN0TWFrZXI6IChjbGFzc05hbWUsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIC8vQ3JlYXRlIG5ldyBwcm9qZWN0IGJvYXJkIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCb2FyZEVsZW1lbnQgPSByZW5kZXIuY3JlYXRlQm9hcmRFbGVtZW50KGNsYXNzTmFtZSwgbmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vQ3JlYXRlIG5ldyBwcm9qZWN0IGJvYXJkIG9wdGlvbiBmb3IgdGhlIHNlbGVjdFxuICAgICAgICAgICAgY29uc3QgYm9hcmRPcHRpb25FbGVtZW50ID0gcmVuZGVyLmNyZWF0ZUJvYXJkT3B0aW9uRWxlbWVudChjbGFzc05hbWUsIG5hbWUpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vVW5pdGUgdGhlbSBpbiBhbiBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkT2JqID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHByb2plY3RCb2FyZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb3B0aW9uOiBib2FyZE9wdGlvbkVsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKGJvYXJkT2JqKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZUN1cnJlbnRQcm9qZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlciggcHJvamVjdCA9PiBwcm9qZWN0LmVsZW1lbnQudmFsdWUgIT09IGN1cnJlbnRMb2FkZWRQcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSxcblxuICAgICAgICBzZWFyY2hQcm9qZWN0OiAobmVlZGxlKSA9PiBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm9wdGlvbi52YWx1ZSA9PT0gbmVlZGxlKSxcblxuICAgICAgICBjaGVja0ZvckV4aXN0aW5nQm9hcmROYW1lOiAocHJvamVjdENsYXNzTmFtZSkgPT4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3Qub3B0aW9uLnZhbHVlID09PSBwcm9qZWN0Q2xhc3NOYW1lKVxuXG4gICAgfVxuICAgIFxuICAgIC8vRXZlbnQgY2hlY2tlclxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdhZGQtcHJvamVjdCcpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdCgnTmFtZSB5b3VyIHByb2plY3Q6Jyk7XG5cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDbGFzc05hbWUgPSBwcm9qZWN0TmFtZS5yZXBsYWNlQWxsKCcgJywgJy0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEoY29udHJvbGxlci5jaGVja0ZvckV4aXN0aW5nQm9hcmROYW1lKHByb2plY3RDbGFzc05hbWUpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJvamVjdE1ha2VyKHByb2plY3RDbGFzc05hbWUsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICByZW5kZXIuYWRkUHJvamVjdHNUb1NlbGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoYEJvYXJkIG5hbWVkIFwiJHtwcm9qZWN0TmFtZX1cIiBhbHJlYWR5IGV4aXN0cyEgUGxlYXNlIGNob3NlIGEgZGlmZmVyZW50IG5hbWUuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAncHJvamVjdC1jaGFuZ2UnKSB7XG4gICAgICAgIHJlbmRlci5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIHJlbmRlci5zZWxlY3RlZFByb2plY3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdkZWwtcHJvamVjdCcpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50TG9hZGVkUHJvamVjdCkgcmV0dXJuIGFsZXJ0KCdObyBwcm9qZWN0IHNlbGVjdGVkIScpOyBcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgdGhlIGJvYXJkLCBhcmUgeW91IHN1cmU/JykpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlQ3VycmVudFByb2plY3QoKTtcbiAgICAgICAgICAgIHJlbmRlci5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgICAgICByZW5kZXIuY2xlYXJQcm9qZWN0c0luU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHJlbmRlci5hZGREZWZhdWx0T3B0bkluU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHJlbmRlci5hZGRQcm9qZWN0c1RvU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59XG5cblxuXG4gICAgXG5cblxuIiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gJy4vdGFza0ZhY3RvcnkuanMnO1xuaW1wb3J0IHRhc2tEb20gZnJvbSAnLi90YXNrRG9tLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpe1xuICAgIFxuICAgIC8vUHJldmVudCBwYWdlIHJlZnJlc2ggY2FzZSBmb3JtIGJ0bnMgYXJlIHByZXNzZWRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vQ2FjaGUgZGlhbG9nIGVsZW1lbnRcbiAgICBjb25zdCBkaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5cbiAgICBjb25zdCByZW5kZXIgPSB7XG4gICAgICAgIHNob3dGb3JtOiAoKSA9PiBkaWFsb2dGb3JtLnNob3dNb2RhbCgpLFxuICAgICAgICBjbG9zZUZvcm06ICgpID0+IGRpYWxvZ0Zvcm0uY2xvc2UoKSxcbiAgICAgICAgcmVzZXRGb3JtOiAoKSA9PiBkaWFsb2dGb3JtLmNoaWxkcmVuWzBdLnJlc2V0KCksXG4gICAgICAgIHJlc2V0U2VsZWN0czogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgIHNlbGVjdHMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdC5vcHRpb25zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0ge1xuICAgICAgICBnZXRVc2VySW5wdXQ6ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2lnbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2lnbmF0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzJyk7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFuY2UnKTtcblxuICAgICAgICAgICAgcmV0dXJuIFt0aXRsZS52YWx1ZSwgZGVzaWduYXRpb24udmFsdWUsIHN0YXR1cy52YWx1ZSwgaW1wb3J0YW5jZS52YWx1ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0dldCBjdXJyZW50IGxvYWRlZCBib2FyZCwgaWYgYW55XG4gICAgY29uc3QgY3VycmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gZGl2Jyk7XG4gICAgLy9TdG9yZSBmb3JtIGVsZW1lbnQgZm9yIHZhbGlkYXRpb25cbiAgICBjb25zdCBmb3JtID0gZGlhbG9nRm9ybS5jaGlsZHJlblswXTsgICAgXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnaW5zZXJ0LXRhc2snKSB7XG5cbiAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkoKSkgeyAvL0R1ZSB0byBwcmV2ZW50RGVmYXVsdCgpIEkgdXRpbGl6ZSB0aGlzIG1ldGhvZCB0byBjaGVjayBmb3JtIHZhbGlkYXRpb24hXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dEFyciA9IGNvbnRyb2wuZ2V0VXNlcklucHV0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhc2tEb20odXNlcklucHV0QXJyKTtcblxuICAgICAgICAgICAgdXNlcklucHV0QXJyLnB1c2goY3VycmVudEJvYXJkKTtcbiAgICAgICAgICAgIHVzZXJJbnB1dEFyci5wdXNoKHRhc2tFbGVtZW50KTtcblxuICAgICAgICAgICAgcmVuZGVyLmNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgcmVuZGVyLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgcmVuZGVyLnJlc2V0U2VsZWN0cygpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IHRhc2tGYWN0b3J5KHVzZXJJbnB1dEFycik7XG5cbiAgICAgICAgICAgIG5ld1Rhc2sucGxhY2UoKTtcbiAgICAgICAgICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2FkZC10YXNrJykge1xuXG4gICAgICAgIGlmICghY3VycmVudEJvYXJkKSByZXR1cm4gYWxlcnQoJ05vIGJvYXJkIHNlbGVjdGVkIHRvIGFkZCB0YXNrIScpOyAgXG5cbiAgICAgICAgcmVuZGVyLnNob3dGb3JtKCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjYW5jZWwtdGFzaycpIHtcbiAgICAgICAgcmVuZGVyLmNsb3NlRm9ybSgpO1xuICAgICAgICByZW5kZXIucmVzZXRGb3JtKCk7XG4gICAgICAgIHJlbmRlci5yZXNldFNlbGVjdHMoKTtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGFza0luZm8pIHtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgdGFza0Rlc2lnbmF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0Rlc2lnbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG9wdG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgY2hhbmdlSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29uc3Qgc3RhdHVzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3RhdHVzID4gb3B0aW9uJyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW1wb3J0YW5jZSA+IG9wdGlvbicpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBzZWxlY3RlZEltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIC8vQWRkIGNvbnRlbnQgdG8gZWxlbWVudHNcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrSW5mb1swXTtcbiAgICB0YXNrRGVzaWduYXRpb24udGV4dENvbnRlbnQgPSB0YXNrSW5mb1sxXTtcblxuICAgIHNlbGVjdGVkU3RhdHVzLnRleHRDb250ZW50ID0gdGFza0luZm9bMl07XG4gICAgc2VsZWN0ZWRTdGF0dXMudmFsdWUgPSB0YXNrSW5mb1syXTtcblxuICAgIHNlbGVjdGVkSW1wb3J0YW5jZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvWzNdO1xuICAgIHNlbGVjdGVkSW1wb3J0YW5jZS52YWx1ZSA9IHRhc2tJbmZvWzNdO1xuXG4gICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cblxuICAgIC8vQWRkIGNsYXNzXG4gICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xuICAgIGNoYW5nZUltcG9ydGFuY2UuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWltcCcpO1xuICAgIGNoYW5nZVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2Utc3RhdCcpO1xuXG4gICAgLy9BcHBlbmQgY2xvbmVzIG9mIHRoZSBvcHRpb24gZWxlbWVudHMgdG8gdGhlIGNoYW5nZSBzZWxlY3QgZWxlbWVudFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNoYW5nZVN0YXR1cy5hcHBlbmRDaGlsZChzdGF0dXNlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpOyAvL090aGVyd2lzZSB0aGUgJ29sZCcgZWxlbWVudHMgd291bGQgYmUgZGVsZXRlZC4uLlxuICAgICAgICBjaGFuZ2VJbXBvcnRhbmNlLmFwcGVuZENoaWxkKGltcG9ydGFuY2VzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSAgICBcbiAgICBcbiAgICAvL0xvb2sgZm9yIHRoZSBzZWxlY3RlZCBvcHRpb24gYW5kIGluaXRpYWxpemUgaXQgYXMgc2VsZWN0ZWRcbiAgICBBcnJheS5mcm9tKGNoYW5nZVN0YXR1cykuZm9yRWFjaChzdGF0dXMgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBzZWxlY3RlZFN0YXR1cy52YWx1ZSkgc3RhdHVzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBBcnJheS5mcm9tKGNoYW5nZUltcG9ydGFuY2UpLmZvckVhY2goaW1wb3J0YW5jZSA9PiB7XG4gICAgICAgIC8vQ2hlY2sgd2ljaCBzdGF0dXMgaXMgdGhlIHNlbGVjdGVkIG9uZSBmb3IgdGhpcyB0YXNrXG4gICAgICAgIGlmIChpbXBvcnRhbmNlLnZhbHVlID09PSBzZWxlY3RlZEltcG9ydGFuY2UudmFsdWUpIGltcG9ydGFuY2Uuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgLy9HaXZlIGNvbnRhaW5lciBhIGNsYXNzXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gZmF0aGVyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2lnbmF0aW9uQ29udGFpbmVyKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdG5zQ29udGFpbmVyKTtcblxuICAgIHRhc2tEZXNpZ25hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzaWduYXRpb24pO1xuXG4gICAgb3B0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzKTtcbiAgICBvcHRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VJbXBvcnRhbmNlKTtcbiAgICBvcHRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihuZXdUYXNrQXJyKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1Rhc2tBcnJbMF07XG4gICAgICAgIHRoaXMuZGVzaWduYXRpb24gPSBuZXdUYXNrQXJyWzFdO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ld1Rhc2tBcnJbMl07XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IG5ld1Rhc2tBcnJbM107XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXdUYXNrQXJyWzRdO1xuICAgICAgICB0aGlzLmNhcmQgPSBuZXdUYXNrQXJyWzVdO1xuICAgIH1cblxuICAgIHBsYWNlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdVbmRlZmluZWQnKSB0aGlzLmJvYXJkLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHRoaXMuY2FyZCk7ICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAnRG9pbmcnKSB0aGlzLmJvYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHRoaXMuY2FyZCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ0RvbmUnKSB0aGlzLmJvYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHRoaXMuY2FyZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0YW5jZSA9PT0gJ0xvdycpIHRoaXMuY2FyZC5zdHlsZSA9ICdib3JkZXI6IDJweCBzb2xpZCBibHVlOyc7XG4gICAgICAgIGlmICh0aGlzLmltcG9ydGFuY2UgPT09ICdNZWRpdW0nKSB0aGlzLmNhcmQuc3R5bGUgPSAnYm9yZGVyOiAycHggc29saWQgeWVsbG93Oyc7XG4gICAgICAgIGlmICh0aGlzLmltcG9ydGFuY2UgPT09ICdIaWdoJykgdGhpcy5jYXJkLnN0eWxlID0gJ2JvcmRlcjogMnB4IHNvbGlkIHJlZDsnO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvL1N0b3JlIHRoZSBjYXJkJ3Mgb3B0aW9uIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGVsJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVN0YXR1c1NlbGVjdCA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hhbmdlLXN0YXQnKTtcbiAgICAgICAgY29uc3QgY2hhbmdlSW1wb3J0YW5jZVNlbGVjdCA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hhbmdlLWltcCcpO1xuXG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlKHRoaXMuY2FyZCkpO1xuICAgICAgICBjaGFuZ2VTdGF0dXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZVN0YXR1cyh0aGlzLCBldmVudCkpO1xuICAgICAgICBjaGFuZ2VJbXBvcnRhbmNlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5jaGFuZ2VJbXBvcnRhbmNlKHRoaXMsIGV2ZW50KSk7XG5cbiAgICB9XG5cbiAgICBkZWxldGUoY2FyZCkge1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVN0YXR1cyhjYXJkLCBldmVudCkge1xuICAgICAgICBjYXJkLnN0YXR1cyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FyZC5wbGFjZSgpOyAgICBcbiAgICB9XG5cbiAgICBjaGFuZ2VJbXBvcnRhbmNlKGNhcmQsIGV2ZW50KSB7XG4gICAgICAgIGNhcmQuaW1wb3J0YW5jZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FyZC5wbGFjZSgpO1xuICAgIH1cblxuICAgICAgICBcbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRvbVN0YXJ0ZXIgZnJvbSAnLi9kb21TdGFydGVyLmpzJztcbmltcG9ydCBkb21Cb2FyZE9wdG5zIGZyb20gJy4vZG9tQm9hcmRPcHRucy5qcyc7XG5pbXBvcnQgZXZlbnRDb250cm9sbGVyIGZyb20gJy4vZXZlbnRDb250cm9sbGVyLmpzJztcblxuKGZ1bmN0aW9uKCl7XG5cbiAgICAvL1N0YXJ0IG91dHRlciBkb21cbiAgICBkb21TdGFydGVyKCk7XG4gICAgLy9TdGFydCBib2FyZCBvcHRpb25zIGRvbVxuICAgIGRvbUJvYXJkT3B0bnMoKTtcblxuICAgIC8vQ2FjaGUgb3B0aW9ucyBET01cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgXG5cbiAgICAvL1NldCBldmVudCBsaXN0ZW5lcnNcbiAgICBidG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gZXZlbnRDb250cm9sbGVyKGV2ZW50KSkpO1xuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IGV2ZW50Q29udHJvbGxlcihldmVudCkpO1xuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9