/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/eventController.js ***!
  \********************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUQ7QUFDTjs7QUFFbkQsNkJBQWUsb0NBQVM7QUFDeEIsNkNBQTZDLGlFQUFtQjtBQUNoRSwwQ0FBMEMsOERBQWdCO0FBQzFELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdEJvYXJkRG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tEb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudENvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdEJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVuZGVmQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9pbmdEb25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBpbm5lclVuZGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXJEb2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlubmVyRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdW5kZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZG9pbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIHVuZGVmQ29udGFpbmVyLmlkID0gJ3VuZGVmLWNvbnRhaW5lcic7XG4gICAgZG9pbmdEb25lQ29udGFpbmVyLmlkID0gJ2RvaW5nLWRvbmUtY29udGFpbmVyJztcbiAgICBkb2luZ0NvbnRhaW5lci5pZCA9ICdkb2luZy1jb250YWluZXInO1xuICAgIGRvbmVDb250YWluZXIuaWQgPSAnZG9uZS1jb250YWluZXInO1xuXG5cbiAgICBwcm9qZWN0Qm9hcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLScgKyBjbGFzc05hbWUpO1xuXG5cbiAgICBwcm9qZWN0Qm9hcmRFbGVtZW50LnZhbHVlID0gY2xhc3NOYW1lO1xuXG4gICAgdW5kZWZUaXRsZS50ZXh0Q29udGVudCA9ICdVbmRlZmluZWQgdGFza3MnO1xuICAgIGRvaW5nVGl0bGUudGV4dENvbnRlbnQgPSAnRG9pbmcnO1xuICAgIGRvbmVUaXRsZS50ZXh0Q29udGVudCA9ICdEb25lJztcblxuICAgIHVuZGVmQ29udGFpbmVyLmFwcGVuZENoaWxkKHVuZGVmVGl0bGUpO1xuICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvaW5nVGl0bGUpO1xuICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZVRpdGxlKTtcblxuICAgIHVuZGVmQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVW5kZWYpO1xuICAgIGRvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyRG9pbmcpO1xuICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJEb25lKTtcblxuXG4gICAgcHJvamVjdEJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZCh1bmRlZkNvbnRhaW5lcik7XG5cbiAgICBkb2luZ0RvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9pbmdDb250YWluZXIpO1xuICAgIGRvaW5nRG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lQ29udGFpbmVyKTtcblxuICAgIHByb2plY3RCb2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9pbmdEb25lQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBwcm9qZWN0Qm9hcmRFbGVtZW50O1xufSIsImltcG9ydCBwcm9qZWN0Qm9hcmREb20gZnJvbSAnLi9wcm9qZWN0Qm9hcmREb20uanMnO1xuXG4vL0luaXQgcHJvamVjdHMgYXJyYXlcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkgeyBcblxuICAgIC8vQ2FjaGUgRG9tIFxuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb25zdCBjdXJyZW50TG9hZGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IGRpdicpO1xuXG4gICAgLy9SZW5kZXIgbW9kdWxlIGZ1bmN0aW9uc1xuICAgIGNvbnN0IHJlbmRlciA9IHtcblxuICAgICAgICBhZGRQcm9qZWN0c1RvU2VsZWN0b3I6ICgpID0+ICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gc2VsZWN0b3IuYWRkKHByb2plY3Qub3B0aW9uKSksXG4gICAgICAgIGNsZWFyUHJvamVjdHNJblNlbGVjdG9yOiAoKSA9PiBzZWxlY3Rvci5pbm5lckhUTUwgPSAnJyxcbiAgICAgICAgYWRkRGVmYXVsdE9wdG5JblNlbGVjdG9yOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb24udGV4dCA9ICdTZWxlY3QgYSBwcm9qZWN0Li4uJztcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAgICAgc2VsZWN0b3IuYWRkKGRlZmF1bHRPcHRpb24sIDApO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckN1cnJlbnRQcm9qZWN0OiAoKSA9PiBwcm9qZWN0V3JhcHBlci5pbm5lckhUTUwgPSAnJyxcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0OiAoYm9hcmROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hTZWxlY3RlZCA9IGNvbnRyb2xsZXIuc2VhcmNoUHJvamVjdChib2FyZE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHNlYXJjaFNlbGVjdGVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hTZWxlY3RlZFswXS5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVCb2FyZEVsZW1lbnQ6IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJvYXJkRWxlbWVudCA9IHByb2plY3RCb2FyZERvbShjbGFzc05hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RCb2FyZEVsZW1lbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlQm9hcmRPcHRpb25FbGVtZW50OiAoY2xhc3NOYW1lLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2FyZE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGJvYXJkT3B0aW9uRWxlbWVudC50ZXh0ID0gbmFtZTtcbiAgICAgICAgICAgIGJvYXJkT3B0aW9uRWxlbWVudC52YWx1ZSA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkT3B0aW9uRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9Mb2dpYyBtb2R1bGUgZnVuY3Rpb25zXG4gICAgY29uc3QgY29udHJvbGxlciA9IHtcblxuICAgICAgICBwcm9qZWN0TWFrZXI6IChjbGFzc05hbWUsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIC8vQ3JlYXRlIG5ldyBwcm9qZWN0IGJvYXJkIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCb2FyZEVsZW1lbnQgPSByZW5kZXIuY3JlYXRlQm9hcmRFbGVtZW50KGNsYXNzTmFtZSwgbmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vQ3JlYXRlIG5ldyBwcm9qZWN0IGJvYXJkIG9wdGlvbiBmb3IgdGhlIHNlbGVjdFxuICAgICAgICAgICAgY29uc3QgYm9hcmRPcHRpb25FbGVtZW50ID0gcmVuZGVyLmNyZWF0ZUJvYXJkT3B0aW9uRWxlbWVudChjbGFzc05hbWUsIG5hbWUpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vVW5pdGUgdGhlbSBpbiBhbiBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkT2JqID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHByb2plY3RCb2FyZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb3B0aW9uOiBib2FyZE9wdGlvbkVsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKGJvYXJkT2JqKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZUN1cnJlbnRQcm9qZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlciggcHJvamVjdCA9PiBwcm9qZWN0LmVsZW1lbnQudmFsdWUgIT09IGN1cnJlbnRMb2FkZWRQcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSxcblxuICAgICAgICBzZWFyY2hQcm9qZWN0OiAobmVlZGxlKSA9PiBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm9wdGlvbi52YWx1ZSA9PT0gbmVlZGxlKSxcblxuICAgICAgICBjaGVja0ZvckV4aXN0aW5nQm9hcmROYW1lOiAocHJvamVjdENsYXNzTmFtZSkgPT4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3Qub3B0aW9uLnZhbHVlID09PSBwcm9qZWN0Q2xhc3NOYW1lKVxuXG4gICAgfVxuICAgIFxuICAgIC8vRXZlbnQgY2hlY2tlclxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdhZGQtcHJvamVjdCcpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdCgnTmFtZSB5b3VyIHByb2plY3Q6Jyk7XG5cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDbGFzc05hbWUgPSBwcm9qZWN0TmFtZS5yZXBsYWNlQWxsKCcgJywgJy0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEoY29udHJvbGxlci5jaGVja0ZvckV4aXN0aW5nQm9hcmROYW1lKHByb2plY3RDbGFzc05hbWUpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIucHJvamVjdE1ha2VyKHByb2plY3RDbGFzc05hbWUsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICByZW5kZXIuYWRkUHJvamVjdHNUb1NlbGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoYEJvYXJkIG5hbWVkIFwiJHtwcm9qZWN0TmFtZX1cIiBhbHJlYWR5IGV4aXN0cyEgUGxlYXNlIGNob3NlIGEgZGlmZmVyZW50IG5hbWUuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAncHJvamVjdC1jaGFuZ2UnKSB7XG4gICAgICAgIHJlbmRlci5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIHJlbmRlci5zZWxlY3RlZFByb2plY3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdkZWwtcHJvamVjdCcpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50TG9hZGVkUHJvamVjdCkgcmV0dXJuIGFsZXJ0KCdObyBwcm9qZWN0IHNlbGVjdGVkIScpOyBcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgdGhlIGJvYXJkLCBhcmUgeW91IHN1cmU/JykpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVsZXRlQ3VycmVudFByb2plY3QoKTtcbiAgICAgICAgICAgIHJlbmRlci5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgICAgICByZW5kZXIuY2xlYXJQcm9qZWN0c0luU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHJlbmRlci5hZGREZWZhdWx0T3B0bkluU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHJlbmRlci5hZGRQcm9qZWN0c1RvU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59XG5cblxuXG4gICAgXG5cblxuIiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gJy4vdGFza0ZhY3RvcnkuanMnO1xuaW1wb3J0IHRhc2tEb20gZnJvbSAnLi90YXNrRG9tLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpe1xuICAgIFxuICAgIC8vUHJldmVudCBwYWdlIHJlZnJlc2ggY2FzZSBmb3JtIGJ0bnMgYXJlIHByZXNzZWRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vQ2FjaGUgZGlhbG9nIGVsZW1lbnRcbiAgICBjb25zdCBkaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5cbiAgICBjb25zdCByZW5kZXIgPSB7XG4gICAgICAgIHNob3dGb3JtOiAoKSA9PiBkaWFsb2dGb3JtLnNob3dNb2RhbCgpLFxuICAgICAgICBjbG9zZUZvcm06ICgpID0+IGRpYWxvZ0Zvcm0uY2xvc2UoKSxcbiAgICAgICAgcmVzZXRGb3JtOiAoKSA9PiBkaWFsb2dGb3JtLmNoaWxkcmVuWzBdLnJlc2V0KCksXG4gICAgICAgIHJlc2V0U2VsZWN0czogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gc2VsZWN0Jyk7XG5cbiAgICAgICAgICAgIHNlbGVjdHMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdC5vcHRpb25zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0ge1xuICAgICAgICBnZXRVc2VySW5wdXQ6ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2lnbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2lnbmF0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzJyk7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFuY2UnKTtcblxuICAgICAgICAgICAgcmV0dXJuIFt0aXRsZS52YWx1ZSwgZGVzaWduYXRpb24udmFsdWUsIHN0YXR1cy52YWx1ZSwgaW1wb3J0YW5jZS52YWx1ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0dldCBjdXJyZW50IGxvYWRlZCBib2FyZCwgaWYgYW55XG4gICAgY29uc3QgY3VycmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gZGl2Jyk7XG4gICAgLy9TdG9yZSBmb3JtIGVsZW1lbnQgZm9yIHZhbGlkYXRpb25cbiAgICBjb25zdCBmb3JtID0gZGlhbG9nRm9ybS5jaGlsZHJlblswXTsgICAgXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnaW5zZXJ0LXRhc2snKSB7XG5cbiAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkoKSkgeyAvL0R1ZSB0byBwcmV2ZW50RGVmYXVsdCgpIEkgdXRpbGl6ZSB0aGlzIG1ldGhvZCB0byBjaGVjayBmb3JtIHZhbGlkYXRpb24hXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dEFyciA9IGNvbnRyb2wuZ2V0VXNlcklucHV0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhc2tEb20odXNlcklucHV0QXJyKTtcblxuICAgICAgICAgICAgdXNlcklucHV0QXJyLnB1c2goY3VycmVudEJvYXJkKTtcbiAgICAgICAgICAgIHVzZXJJbnB1dEFyci5wdXNoKHRhc2tFbGVtZW50KTtcblxuICAgICAgICAgICAgcmVuZGVyLmNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgcmVuZGVyLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgcmVuZGVyLnJlc2V0U2VsZWN0cygpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IHRhc2tGYWN0b3J5KHVzZXJJbnB1dEFycik7XG5cbiAgICAgICAgICAgIG5ld1Rhc2sucGxhY2UoKTtcbiAgICAgICAgICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2FkZC10YXNrJykge1xuXG4gICAgICAgIGlmICghY3VycmVudEJvYXJkKSByZXR1cm4gYWxlcnQoJ05vIGJvYXJkIHNlbGVjdGVkIHRvIGFkZCB0YXNrIScpOyAgXG5cbiAgICAgICAgcmVuZGVyLnNob3dGb3JtKCk7XG4gICAgfVxuICAgIFxuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdjYW5jZWwtdGFzaycpIHtcbiAgICAgICAgcmVuZGVyLmNsb3NlRm9ybSgpO1xuICAgICAgICByZW5kZXIucmVzZXRGb3JtKCk7XG4gICAgICAgIHJlbmRlci5yZXNldFNlbGVjdHMoKTtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGFza0luZm8pIHtcblxuICAgIC8vQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgdGFza0Rlc2lnbmF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0Rlc2lnbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG9wdG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgY2hhbmdlSW1wb3J0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29uc3Qgc3RhdHVzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3RhdHVzID4gb3B0aW9uJyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW1wb3J0YW5jZSA+IG9wdGlvbicpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBzZWxlY3RlZEltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgIC8vQWRkIGNvbnRlbnQgdG8gZWxlbWVudHNcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrSW5mb1swXTtcbiAgICB0YXNrRGVzaWduYXRpb24udGV4dENvbnRlbnQgPSB0YXNrSW5mb1sxXTtcblxuICAgIHNlbGVjdGVkU3RhdHVzLnRleHRDb250ZW50ID0gdGFza0luZm9bMl07XG4gICAgc2VsZWN0ZWRTdGF0dXMudmFsdWUgPSB0YXNrSW5mb1syXTtcblxuICAgIHNlbGVjdGVkSW1wb3J0YW5jZS50ZXh0Q29udGVudCA9IHRhc2tJbmZvWzNdO1xuICAgIHNlbGVjdGVkSW1wb3J0YW5jZS52YWx1ZSA9IHRhc2tJbmZvWzNdO1xuXG4gICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cblxuICAgIC8vQWRkIGNsYXNzXG4gICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbCcpO1xuICAgIGNoYW5nZUltcG9ydGFuY2UuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWltcCcpO1xuICAgIGNoYW5nZVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2Utc3RhdCcpO1xuXG4gICAgLy9BcHBlbmQgY2xvbmVzIG9mIHRoZSBvcHRpb24gZWxlbWVudHMgdG8gdGhlIGNoYW5nZSBzZWxlY3QgZWxlbWVudFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNoYW5nZVN0YXR1cy5hcHBlbmRDaGlsZChzdGF0dXNlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpOyAvL090aGVyd2lzZSB0aGUgJ29sZCcgZWxlbWVudHMgd291bGQgYmUgZGVsZXRlZC4uLlxuICAgICAgICBjaGFuZ2VJbXBvcnRhbmNlLmFwcGVuZENoaWxkKGltcG9ydGFuY2VzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSAgICBcbiAgICBcbiAgICAvL0xvb2sgZm9yIHRoZSBzZWxlY3RlZCBvcHRpb24gYW5kIGluaXRpYWxpemUgaXQgYXMgc2VsZWN0ZWRcbiAgICBBcnJheS5mcm9tKGNoYW5nZVN0YXR1cykuZm9yRWFjaChzdGF0dXMgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBzZWxlY3RlZFN0YXR1cy52YWx1ZSkgc3RhdHVzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBBcnJheS5mcm9tKGNoYW5nZUltcG9ydGFuY2UpLmZvckVhY2goaW1wb3J0YW5jZSA9PiB7XG4gICAgICAgIC8vQ2hlY2sgd2ljaCBzdGF0dXMgaXMgdGhlIHNlbGVjdGVkIG9uZSBmb3IgdGhpcyB0YXNrXG4gICAgICAgIGlmIChpbXBvcnRhbmNlLnZhbHVlID09PSBzZWxlY3RlZEltcG9ydGFuY2UudmFsdWUpIGltcG9ydGFuY2Uuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgLy9HaXZlIGNvbnRhaW5lciBhIGNsYXNzXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gZmF0aGVyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2lnbmF0aW9uQ29udGFpbmVyKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdG5zQ29udGFpbmVyKTtcblxuICAgIHRhc2tEZXNpZ25hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzaWduYXRpb24pO1xuXG4gICAgb3B0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzKTtcbiAgICBvcHRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VJbXBvcnRhbmNlKTtcbiAgICBvcHRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihuZXdUYXNrQXJyKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1Rhc2tBcnJbMF07XG4gICAgICAgIHRoaXMuZGVzaWduYXRpb24gPSBuZXdUYXNrQXJyWzFdO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ld1Rhc2tBcnJbMl07XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IG5ld1Rhc2tBcnJbM107XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXdUYXNrQXJyWzRdO1xuICAgICAgICB0aGlzLmNhcmQgPSBuZXdUYXNrQXJyWzVdO1xuICAgIH1cblxuICAgIHBsYWNlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdVbmRlZmluZWQnKSB0aGlzLmJvYXJkLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHRoaXMuY2FyZCk7ICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAnRG9pbmcnKSB0aGlzLmJvYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHRoaXMuY2FyZCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ0RvbmUnKSB0aGlzLmJvYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKHRoaXMuY2FyZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0YW5jZSA9PT0gJ0xvdycpIHRoaXMuY2FyZC5zdHlsZSA9ICdib3JkZXI6IDJweCBzb2xpZCBibHVlOyc7XG4gICAgICAgIGlmICh0aGlzLmltcG9ydGFuY2UgPT09ICdNZWRpdW0nKSB0aGlzLmNhcmQuc3R5bGUgPSAnYm9yZGVyOiAycHggc29saWQgeWVsbG93Oyc7XG4gICAgICAgIGlmICh0aGlzLmltcG9ydGFuY2UgPT09ICdIaWdoJykgdGhpcy5jYXJkLnN0eWxlID0gJ2JvcmRlcjogMnB4IHNvbGlkIHJlZDsnO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAvL1N0b3JlIHRoZSBjYXJkJ3Mgb3B0aW9uIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGVsJyk7XG4gICAgICAgIGNvbnN0IGNoYW5nZVN0YXR1c1NlbGVjdCA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hhbmdlLXN0YXQnKTtcbiAgICAgICAgY29uc3QgY2hhbmdlSW1wb3J0YW5jZVNlbGVjdCA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuY2hhbmdlLWltcCcpO1xuXG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlKHRoaXMuY2FyZCkpO1xuICAgICAgICBjaGFuZ2VTdGF0dXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZVN0YXR1cyh0aGlzLCBldmVudCkpO1xuICAgICAgICBjaGFuZ2VJbXBvcnRhbmNlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5jaGFuZ2VJbXBvcnRhbmNlKHRoaXMsIGV2ZW50KSk7XG5cbiAgICB9XG5cbiAgICBkZWxldGUoY2FyZCkge1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNoYW5nZVN0YXR1cyhjYXJkLCBldmVudCkge1xuICAgICAgICBjYXJkLnN0YXR1cyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FyZC5wbGFjZSgpOyAgICBcbiAgICB9XG5cbiAgICBjaGFuZ2VJbXBvcnRhbmNlKGNhcmQsIGV2ZW50KSB7XG4gICAgICAgIGNhcmQuaW1wb3J0YW5jZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FyZC5wbGFjZSgpO1xuICAgIH1cblxuICAgICAgICBcbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcm9qZWN0RXZlbnRNYW5hZ2VyIGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHRhc2tFdmVudE1hbmFnZXIgZnJvbSAnLi90YXNrQ29udHJvbGxlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZC5pbmNsdWRlcygncHJvamVjdCcpKSBwcm9qZWN0RXZlbnRNYW5hZ2VyKGV2ZW50KTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkLmluY2x1ZGVzKCd0YXNrJykpIHRhc2tFdmVudE1hbmFnZXIoZXZlbnQpO1xufSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=