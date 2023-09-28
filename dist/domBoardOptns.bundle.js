/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/domBoardOptns.js ***!
  \******************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tQm9hcmRPcHRucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSw2QkFBZSxzQ0FBVzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tQm9hcmRPcHRucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9DYWNoZSBkb21cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLW9wdG5zJyk7XG5cbiAgICAvL0NyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rvckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdG9yVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rvck5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvL0FkZCBjbGFzc2VzIHRvIGVsZW1lbnRzXG4gICAgYWRkQ2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtY2FyZCcpO1xuICAgIGRlbFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLXByb2plY3QnKTtcblxuICAgIC8vQWRkIElEcyBmb3IgdGFzayBkaXN0aW5jdGlvblxuICAgIGFkZENhcmRCdG4uaWQgPSAnYWRkLXRhc2snO1xuICAgIGRlbFByb2plY3RCdG4uaWQgPSAnZGVsLXByb2plY3QnO1xuICAgIHByb2plY3RTZWxlY3Rvci5pZCA9ICdwcm9qZWN0LWNoYW5nZSc7XG4gICAgcHJvamVjdFNlbGVjdG9yTmV3LmlkID0gJ2FkZC1wcm9qZWN0JztcblxuICAgIC8vQWRkIGNvbnRlbnQgdG8gZWxlbWVudHNcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IG1hbmFnZW1lbnQnO1xuICAgIHByb2plY3RTZWxlY3RvclR4dC50ZXh0Q29udGVudCA9ICdXaGljaCBwcm9qZWN0IGFyZSB5b3Ugd29ya2luZyBvbj8nO1xuICAgIGFkZENhcmRCdG4udGV4dENvbnRlbnQgPSAnQUREIFRBU0snO1xuICAgIGRlbFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnREVMRVRFIEVOVElSRSBQUk9KRUNUJ1xuICAgIHByb2plY3RTZWxlY3Rvck5ldy50ZXh0Q29udGVudCA9ICdOZXcgcHJvamVjdC4uLic7XG5cbiAgICBkZWZhdWx0T3B0aW9uLnRleHQgPSAnU2VsZWN0IGEgcHJvamVjdC4uLic7XG4gICAgZGVmYXVsdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgZGVmYXVsdE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZGVmYXVsdE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuXG4gICAgcHJvamVjdFNlbGVjdG9yLmFkZChkZWZhdWx0T3B0aW9uLCAwKTtcblxuICAgIC8vQXBwZW5kIGVsZW1lbnRzXG4gICAgcHJvamVjdFNlbGVjdG9yR3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yVHh0KTtcbiAgICBwcm9qZWN0U2VsZWN0b3JHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3IpO1xuICAgIHByb2plY3RTZWxlY3Rvckdyb3VwLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rvck5ldyk7XG5cblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yR3JvdXApO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQ2FyZEJ0bik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZWxQcm9qZWN0QnRuKTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==