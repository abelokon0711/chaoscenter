/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/js/app.js":
/*!****************************!*\
  !*** ./src/main/js/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/alexanderbelokon/Desktop/Studium/chaoscenter/src/main/js/app.js: Unexpected token (36:6)\n\n\u001b[0m \u001b[90m 34 | \u001b[39m  render() {\u001b[0m\n\u001b[0m \u001b[90m 35 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 36 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{\u001b[32m\"container-fluid\"\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{\u001b[32m\"row\"\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{\u001b[32m\"col\"\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mDepartmentList\u001b[39m departments\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mdepartments} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser.raise (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:6325:17)\n    at Parser.unexpected (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:7642:16)\n    at Parser.parseExprAtom (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8841:20)\n    at Parser.parseExprSubscripts (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Parser.parseMaybeUnary (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Parser.parseExprOps (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Parser.parseMaybeConditional (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Parser.parseMaybeAssign (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Parser.parseParenAndDistinguishExpression (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8978:28)\n    at Parser.parseExprAtom (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8762:21)\n    at Parser.parseExprSubscripts (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Parser.parseMaybeUnary (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Parser.parseExprOps (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Parser.parseMaybeConditional (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Parser.parseMaybeAssign (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Parser.parseExpression (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:8135:23)\n    at Parser.parseReturnStatement (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10198:28)\n    at Parser.parseStatementContent (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:9877:21)\n    at Parser.parseStatement (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Parser.parseBlockBody (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Parser.parseBlock (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10376:10)\n    at Parser.parseFunctionBody (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:9424:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:9394:10)\n    at Parser.parseMethod (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:9348:10)\n    at Parser.pushClassMethod (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10804:30)\n    at Parser.parseClassMemberWithIsStatic (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10729:12)\n    at Parser.parseClassMember (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10668:10)\n    at withTopicForbiddingContext (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:10623:14)\n    at Parser.withTopicForbiddingContext (/Users/alexanderbelokon/Desktop/Studium/chaoscenter/node_modules/@babel/parser/lib/index.js:9702:14)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map