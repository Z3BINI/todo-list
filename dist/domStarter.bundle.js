/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/domStarter.js ***!
  \***************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tU3RhcnRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBZSxzQ0FBVTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2hIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7QUFDVTs7QUFFL0MsNkJBQWUsc0NBQVc7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkRBQWE7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMENBQU87QUFDekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaWFsb2dGb3JtRG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tU3RhcnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuXG4gICAgLy9DcmVhdGUgZGlhbG9nIGZvcm0gZWxlbWVudHMgZm9yIHRhc2sgY3JlYXRpb25cbiAgICBjb25zdCBkaWFsb2dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNpZ25hdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGltcG9ydGFuY2VTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IFtdO1xuICAgIGNvbnN0IGltcG9ydGFuY2UgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKXtcbiAgICAgICAgc3RhdHVzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGltcG9ydGFuY2VbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IGRlZmF1bHRJbXBvcnRhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vQWRkIGlubmVyIGNvbmVudCB0ZXh0IG9yIGxhYmVscy9wbGFjZWhvbGRlcnNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdOZXcgdGFzayc7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCB0YXNrJztcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2xvc2UnO1xuICAgIGRlZmF1bHRTdGF0dXMudGV4dENvbnRlbnQgPSAnVGFzayBzdGF0dXMnO1xuICAgIGRlZmF1bHRJbXBvcnRhbmNlLnRleHRDb250ZW50ID0gJ1Rhc2sgaW1wb3J0YW5jZSc7XG5cbiAgICAvL2ltcG9ydGFuY2VzXG4gICAgaW1wb3J0YW5jZVsxXS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIGltcG9ydGFuY2VbMl0udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICBpbXBvcnRhbmNlWzNdLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgLy9zYXR1c2VzXG4gICAgc3RhdHVzWzFdLnRleHRDb250ZW50ID0gJ1VuZGVmaW5lZCc7XG4gICAgc3RhdHVzWzJdLnRleHRDb250ZW50ID0gJ0RvaW5nJztcbiAgICBzdGF0dXNbM10udGV4dENvbnRlbnQgPSAnRG9uZSc7XG5cbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUnO1xuICAgIGRlc2lnbmF0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBkZXNpZ25hdGlvbic7XG5cbiAgICAvL0RlZmF1bHQgb3B0aW9uIGF0dHJpYnV0ZXNcbiAgICBkZWZhdWx0SW1wb3J0YW5jZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgZGVmYXVsdEltcG9ydGFuY2UuaGlkZGVuID0gdHJ1ZTtcbiAgICBkZWZhdWx0SW1wb3J0YW5jZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgZGVmYXVsdEltcG9ydGFuY2UudmFsdWUgPSAnJztcblxuICAgIGRlZmF1bHRTdGF0dXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRlZmF1bHRTdGF0dXMuaGlkZGVuID0gdHJ1ZTtcbiAgICBkZWZhdWx0U3RhdHVzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBkZWZhdWx0U3RhdHVzLnZhbHVlID0gJyc7XG5cbiAgICAvL0Zvcm0gbWV0aG9kXG4gICAgZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZGlhbG9nJyk7XG5cbiAgICAvL0Zvcm0gdmFsaWRhdGlvblxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDE1KTtcblxuICAgIGRlc2lnbmF0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAzMCk7XG5cbiAgICBzdGF0dXNTZWxlY3Quc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBpbXBvcnRhbmNlU2VsZWN0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAvL0FkZCBidG4gdmFsdWVcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnc2VuZCc7XG5cbiAgICAvL0J0biBJRHNcbiAgICBzdWJtaXRCdG4uaWQgPSAnaW5zZXJ0LXRhc2snO1xuICAgIGNhbmNlbEJ0bi5pZCA9ICdjYW5jZWwtdGFzayc7XG5cbiAgICAvL0lucHV0IElEc1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIGRlc2lnbmF0aW9uSW5wdXQuaWQgPSAnZGVzaWduYXRpb24nO1xuICAgIHN0YXR1c1NlbGVjdC5pZCA9ICdzdGF0dXMnO1xuICAgIGltcG9ydGFuY2VTZWxlY3QuaWQgPSAnaW1wb3J0YW5jZSc7XG5cbiAgICAvL0FkZCBkZWZhdWx0IG9wdGlvbnMgdG8gdGhlIHJlc3BlY3RpdmUgc2VsZWN0IGVsZW1lbnRzXG4gICAgc3RhdHVzU2VsZWN0LmFkZChkZWZhdWx0U3RhdHVzKTtcbiAgICBpbXBvcnRhbmNlU2VsZWN0LmFkZChkZWZhdWx0SW1wb3J0YW5jZSk7XG5cbiAgICAvL0FkZCBvcHRpb25zIHRvIHJlc3BlY2l0dmUgc2VsZWN0IGVsZW1lbnRzXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgc3RhdHVzU2VsZWN0LmFkZChzdGF0dXNbaV0pO1xuICAgICAgICBpbXBvcnRhbmNlU2VsZWN0LmFkZChpbXBvcnRhbmNlW2ldKTtcbiAgICB9XG5cbiAgICAvL0FwcGVuZCBhbGwgZWxlbWVudHMgdG8gdGhlIGRpYWxvZyBlbGVtZW50XG4gICAgZGlhbG9nRWxlbWVudC5hcHBlbmRDaGlsZChmb3JtRWxlbWVudCk7XG4gICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzaWduYXRpb25JbnB1dCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzU2VsZWN0KTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbmNlU2VsZWN0KTtcbiAgICBcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIHJldHVybiBkaWFsb2dFbGVtZW50O1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2dvU3ZnIGZyb20gJy4vaW1nL2xvZ28uc3ZnJztcbmltcG9ydCBkaWFsb2dFbGVtZW50IGZyb20gJy4vZGlhbG9nRm9ybURvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8vQ2FjaGUgRE9NXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzXG4gICAgLy9NYWluIHN0cnVjdHVyZVxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAvL0NyZWF0ZSBkaWFsb2cgJiBmb3JtIERPTVxuICAgIGNvbnN0IGRpYWxvZ0Zvcm0gPSBkaWFsb2dFbGVtZW50KCk7IFxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgYm9hcmRPcHRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL0lubmVyIGNvbnRlbnQgZWxlbWVudHNcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGxvZ29UeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBmb290ZXJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAvL0FkZCByZWxldmFudCBjbGFzc2VzXG4gICAgLy9NYWluIHN0cnVjdHVyZVxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBib2FyZE9wdG5zLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLW9wdG5zJyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICAgIC8vSW5uZXIgY29udGVudCBjbGFzc2VzXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgXG4gICAgLy9BZGQgY29udGVudCB0byBpbm5lciBlbGVtZW50c1xuICAgIGxvZ29JbWcuc3JjID0gbG9nb1N2ZztcbiAgICBsb2dvVHh0LmlubmVySFRNTCA9ICdUaGU8YnI+VG9vRG9vPGJyPkxpc3QnO1xuXG4gICAgZm9vdGVyVHh0LmlubmVySFRNTCA9ICdNYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vWjNCSU5JL1wiPlozQklOSTwvYT4nO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBmYXRoZXJzXG4gICAgLy9NYWluIHN0cnVjdHVyZVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaWFsb2dGb3JtKTsgXG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkT3B0bnMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gICAgLy9Jbm5lciBjb250ZW50XG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29UeHQpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclR4dCk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==