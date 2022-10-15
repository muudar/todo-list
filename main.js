/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/lists */ \"./src/modules/lists.js\");\n\n\n\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.giveFormButtonsFunctionality)();\n(0,_modules_lists__WEBPACK_IMPORTED_MODULE_1__.loadLists)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"giveFormButtonsFunctionality\": () => (/* binding */ giveFormButtonsFunctionality),\n/* harmony export */   \"hideAddForm\": () => (/* binding */ hideAddForm)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/modules/lists.js\");\n\n\nconst addAListButton = document.getElementsByClassName(\"add-list\")[0];\nconst addAListForm = document.getElementsByClassName(\"add-list-form\")[0];\nconst cancelButton = document.getElementsByClassName(\"add-list-buttons\")[0].children[1];\nconst submitListButton = document.getElementsByClassName(\"add-list-buttons\")[0].children[0];\n\n\nconst showAddForm = () => {\n    addAListForm.classList.remove(\"invisible\");\n}\n\nconst hideAddForm = () => {\n    addAListForm.children[0].value = \"\";\n    addAListForm.classList.add(\"invisible\");\n    document.getElementsByClassName(\"add-list-error\")[0].textContent = \"\";\n}\n\n\n    \n\n\nconst giveFormButtonsFunctionality = () => { \n    addAListButton.onclick = showAddForm;\n    cancelButton.onclick = hideAddForm;\n    submitListButton.onclick = () => {\n        (0,_lists__WEBPACK_IMPORTED_MODULE_0__.addList)(document.getElementById(\"list-name-input\").value);\n        addAListForm.children[0].value = \"\";\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/lists.js":
/*!******************************!*\
  !*** ./src/modules/lists.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"loadLists\": () => (/* binding */ loadLists)\n/* harmony export */ });\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/modules/forms.js\");\n\n\nconst list = (name, todos) => {\n    return {name, todos};\n}\n\nif(!localStorage.getItem('listOfLists')){\n    var listOfLists = [];\n    listOfLists.push(list(\"Default List\", []));\n    localStorage.setItem('listOfLists', JSON.stringify(listOfLists));\n}\n\nconst getListOfLists = () => {\n    return JSON.parse(localStorage.getItem(\"listOfLists\"));\n}\n\nconst updateListOfLists = (listOfLists) => {\n    localStorage.setItem('listOfLists', JSON.stringify(listOfLists));\n}\n\nconst newList = localStorage.getItem('listOfLists');\n\n\nconst listsDiv = document.getElementsByClassName(\"lists\")[0];\nconst listOfListsDiv = listsDiv.children[0];\nconst errorDiv = document.getElementsByClassName(\"add-list-error\")[0];\n\nconst loadLists = () => {\n    listOfListsDiv.innerHTML = \"\";\n    for(const l of getListOfLists()){\n        const listItem = document.createElement(\"li\");\n        listItem.textContent = l.name;\n        const taskNumbersDiv = document.createElement(\"div\");\n        taskNumbersDiv.classList.add(\"task-numbers\");\n        taskNumbersDiv.textContent = l.todos.length;\n        listItem.appendChild(taskNumbersDiv);\n        listOfListsDiv.appendChild(listItem);\n        listItem.onclick = () => {\n            for(const l2 of listOfListsDiv.children){\n                l2.classList.remove(\"active-list\");\n            }\n            listItem.classList.add(\"active-list\");\n        }\n        if(l.name == \"Default List\"){\n            continue;\n        }\n        const deleteButton = document.createElement(\"button\");\n        deleteButton.classList.add(\"delete-button\");\n        deleteButton.textContent = \"X\";\n        listItem.appendChild(deleteButton);\n        deleteButton.onclick = () => {\n            deleteListItem(l.name);\n        }\n    }\n}\n\nconst deleteListItem = (name) => {\n    var listOfLists = getListOfLists();\n    for(let i = 0; i < listOfLists.length; i++){\n        if(listOfLists[i].name == name){\n            listOfLists.splice(i,1);\n        }\n    }\n    updateListOfLists(listOfLists);\n    loadLists();\n}\n\nconst checkListNameTaken = (name) => {\n    for(const l of getListOfLists()){\n        if(name.valueOf() == l.name.valueOf())\n            return true;\n    }\n    return false;\n}\n\nconst displayListNameTakenError = () => {\n    errorDiv.textContent = \"List name is already taken!\";\n}\n\nconst displayMaxListsEror = () => {\n    errorDiv.textContent = \"A maximum of 10 lists is allowed\";\n}\n\nconst displayEmptyStringError = () => {\n    errorDiv.textContent = \"List name cannot be empty!\";\n}\n\nconst displayTooManyCharsError = () => {\n    errorDiv.textContent = \"Lists can only have a max of 12 characters\";\n}\n\nconst addList = (name) => {\n    var listOfLists = getListOfLists();\n    name = name.trim();\n    if(name.length > 12){\n        displayTooManyCharsError();\n        return;\n    }\n    if(checkListNameTaken(name)){\n        displayListNameTakenError();\n        return;\n    }\n    if(listOfLists.length >= 10){\n        displayMaxListsEror();\n        return;\n    }\n    if(name == \"\"){\n        displayEmptyStringError();\n        return;\n    }\n    errorDiv.textContent = \"\";\n    var listItem = list(name, []);\n    listOfLists.push(listItem);\n    updateListOfLists(listOfLists);\n    (0,_forms__WEBPACK_IMPORTED_MODULE_0__.hideAddForm)();\n    loadLists();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/lists.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;