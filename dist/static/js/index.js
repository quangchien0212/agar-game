/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar professor_1 = __importDefault(__webpack_require__(/*! ./professor */ \"./src/client/professor.ts\"));\nvar student_1 = __importDefault(__webpack_require__(/*! ./student */ \"./src/client/student.ts\"));\nvar professor = new professor_1.default(\"James Mathew\");\nvar student = new student_1.default(\"Rohit Lakhotia\", professor);\nconsole.log(student.getFavProfessor());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LnRzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0NBQWtDLG1CQUFPLENBQUMsOENBQWE7QUFDdkQsZ0NBQWdDLG1CQUFPLENBQUMsMENBQVc7QUFDbkQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC10eXBlc2NyaXB0Ly4vc3JjL2NsaWVudC9pbmRleC50cz8yNWRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByb2Zlc3Nvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Byb2Zlc3NvclwiKSk7XG52YXIgc3R1ZGVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0dWRlbnRcIikpO1xudmFyIHByb2Zlc3NvciA9IG5ldyBwcm9mZXNzb3JfMS5kZWZhdWx0KFwiSmFtZXMgTWF0aGV3XCIpO1xudmFyIHN0dWRlbnQgPSBuZXcgc3R1ZGVudF8xLmRlZmF1bHQoXCJSb2hpdCBMYWtob3RpYVwiLCBwcm9mZXNzb3IpO1xuY29uc29sZS5sb2coc3R1ZGVudC5nZXRGYXZQcm9mZXNzb3IoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/index.ts\n");

/***/ }),

/***/ "./src/client/professor.ts":
/*!*********************************!*\
  !*** ./src/client/professor.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Professor = /** @class */ (function () {\n    function Professor(name) {\n        this.name = name;\n    }\n    return Professor;\n}());\nexports[\"default\"] = Professor;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3Byb2Zlc3Nvci50cyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC10eXBlc2NyaXB0Ly4vc3JjL2NsaWVudC9wcm9mZXNzb3IudHM/MjY3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQcm9mZXNzb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvZmVzc29yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFByb2Zlc3Nvcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9mZXNzb3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/professor.ts\n");

/***/ }),

/***/ "./src/client/student.ts":
/*!*******************************!*\
  !*** ./src/client/student.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Student = /** @class */ (function () {\n    function Student(name, professor) {\n        var _this = this;\n        this.getFavProfessor = function () {\n            return _this.favProfessor;\n        };\n        this.name = name;\n        this.favProfessor = professor;\n    }\n    return Student;\n}());\nexports[\"default\"] = Student;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3N0dWRlbnQudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLXR5cGVzY3JpcHQvLi9zcmMvY2xpZW50L3N0dWRlbnQudHM/N2MyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdHVkZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0dWRlbnQobmFtZSwgcHJvZmVzc29yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2V0RmF2UHJvZmVzc29yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmZhdlByb2Zlc3NvcjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5mYXZQcm9mZXNzb3IgPSBwcm9mZXNzb3I7XG4gICAgfVxuICAgIHJldHVybiBTdHVkZW50O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFN0dWRlbnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/student.ts\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.ts");
/******/ 	
/******/ })()
;