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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/Index.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UpperForm_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpperForm.jsx */ \"./client/src/components/UpperForm.jsx\");\n/* harmony import */ var _LowerForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LowerForm.jsx */ \"./client/src/components/LowerForm.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Index =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Index, _React$Component);\n\n  function Index(props) {\n    var _this;\n\n    _classCallCheck(this, Index);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));\n    console.log(props);\n    _this.state = {\n      agents: _this.props.agents\n    };\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"formOuterContainer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"formInnerContainer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n        className: \"formHeaderContainer\"\n      }, \"CONTACT AGENT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpperForm_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LowerForm_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        agents: this.state.agents\n      })));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0luZGV4LmpzeD9mYjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBVcHBlckZvcm0gZnJvbSAnLi9VcHBlckZvcm0uanN4J1xuaW1wb3J0IExvd2VyRm9ybSBmcm9tICcuL0xvd2VyRm9ybS5qc3gnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFnZW50czogdGhpcy5wcm9wcy5hZ2VudHMsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1PdXRlckNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1Jbm5lckNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZm9ybUhlYWRlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgQ09OVEFDVCBBR0VOVFxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxVcHBlckZvcm0gLz5cbiAgICAgICAgICA8TG93ZXJGb3JtIGFnZW50cz17dGhpcy5zdGF0ZS5hZ2VudHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFJQTs7OztBQXJCQTtBQUNBO0FBdUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Index.jsx\n");

/***/ }),

/***/ "./client/src/components/LowerForm.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/LowerForm.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-star-rating-component */ \"react-star-rating-component\");\n/* harmony import */ var react_star_rating_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_star_rating_component__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar LowerForm = function LowerForm(_ref) {\n  var _ref$agents = _ref.agents,\n      agents = _ref$agents === void 0 ? [] : _ref$agents;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"formInnerLowerContainer\"\n  }, agents.map(function (agent, idx) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: agent._id,\n      className: \"formAgentContainer\",\n      id: \"formAgentContainer\" + idx\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: agent.agent_photo,\n      className: \"formAgentImage\",\n      id: \"formAgentImage\" + idx\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"formAgentName\",\n      id: 'formAgentName' + idx\n    }, agent.agent_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      id: 'formAgentStars' + idx\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_star_rating_component__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      className: \"formAgentStars\",\n      name: \"rate1\",\n      starCount: 5,\n      starColor: \"#3dca59\",\n      emptyStarColor: \"white\",\n      value: agent.average_stars\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"formAgentRatings\",\n      id: 'formAgentRatings' + idx\n    }, \"(\", agent.num_ratings, \")\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"formAgentSales\",\n      id: 'formAgentSales' + idx\n    }, agent.recent_sales, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"formAgentSalesP\"\n    }, \"Recent Sales\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"formAgentPhone\",\n      id: 'formAgentPhone' + idx\n    }, agent.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"formAgentType\",\n      id: 'formAgentType' + idx\n    }, agent.agent_type.toUpperCase() + \" AGENT\"));\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"formInnerLowerContainerP\"\n  }, \"Learn how to appear as the agent above\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LowerForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTG93ZXJGb3JtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Mb3dlckZvcm0uanN4P2FjMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0YXJSYXRpbmdDb21wb25lbnQgZnJvbSAncmVhY3Qtc3Rhci1yYXRpbmctY29tcG9uZW50JztcblxuY29uc3QgTG93ZXJGb3JtID0gKHsgYWdlbnRzID0gW10gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUlubmVyTG93ZXJDb250YWluZXJcIj5cbiAgICAgIHthZ2VudHMubWFwKChhZ2VudCwgaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2FnZW50Ll9pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1BZ2VudENvbnRhaW5lclwiXG4gICAgICAgICAgICBpZD17XCJmb3JtQWdlbnRDb250YWluZXJcIiArIGlkeH0+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2FnZW50LmFnZW50X3Bob3RvfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1BZ2VudEltYWdlXCJcbiAgICAgICAgICAgICAgICBpZD17XCJmb3JtQWdlbnRJbWFnZVwiICsgaWR4fSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybUFnZW50TmFtZVwiXG4gICAgICAgICAgICAgIGlkPXsnZm9ybUFnZW50TmFtZScgKyBpZHh9PlxuICAgICAgICAgICAgICB7YWdlbnQuYWdlbnRfbmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPXsnZm9ybUFnZW50U3RhcnMnICsgaWR4fT5cbiAgICAgICAgICAgICAgPFN0YXJSYXRpbmdDb21wb25lbnRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtQWdlbnRTdGFyc1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJhdGUxXCJcbiAgICAgICAgICAgICAgICBzdGFyQ291bnQ9ezV9XG4gICAgICAgICAgICAgICAgc3RhckNvbG9yPXtcIiMzZGNhNTlcIn1cbiAgICAgICAgICAgICAgICBlbXB0eVN0YXJDb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgIHZhbHVlPXthZ2VudC5hdmVyYWdlX3N0YXJzfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybUFnZW50UmF0aW5nc1wiXG4gICAgICAgICAgICAgIGlkPXsnZm9ybUFnZW50UmF0aW5ncycgKyBpZHh9PlxuICAgICAgICAgICAgICAoe2FnZW50Lm51bV9yYXRpbmdzfSlcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybUFnZW50U2FsZXNcIlxuICAgICAgICAgICAgICBpZD17J2Zvcm1BZ2VudFNhbGVzJyArIGlkeH0+XG4gICAgICAgICAgICAgIHthZ2VudC5yZWNlbnRfc2FsZXN9XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1BZ2VudFNhbGVzUFwiPlxuICAgICAgICAgICAgICAgIFJlY2VudCBTYWxlc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1BZ2VudFBob25lXCJcbiAgICAgICAgICAgICAgaWQ9eydmb3JtQWdlbnRQaG9uZScgKyBpZHh9PlxuICAgICAgICAgICAgICB7YWdlbnQucGhvbmV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtQWdlbnRUeXBlXCJcbiAgICAgICAgICAgICAgaWQ9eydmb3JtQWdlbnRUeXBlJyArIGlkeH0+XG4gICAgICAgICAgICAgIHthZ2VudC5hZ2VudF90eXBlLnRvVXBwZXJDYXNlKCkgKyBcIiBBR0VOVFwifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1Jbm5lckxvd2VyQ29udGFpbmVyUFwiPlxuICAgICAgICBMZWFybiBob3cgdG8gYXBwZWFyIGFzIHRoZSBhZ2VudCBhYm92ZVxuICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb3dlckZvcm07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/LowerForm.jsx\n");

/***/ }),

/***/ "./client/src/components/UpperForm.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/UpperForm.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar UpperForm = function UpperForm() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"formInnerUpperContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    placeholder: \"Your Name\",\n    className: \"formInputName\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"tel\",\n    placeholder: \"Phone\",\n    className: \"formInputTel\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    placeholder: \"Email\",\n    className: \"formInputEmail\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"interested-in\",\n    placeholder: \"I am interested in 1225 E. Moreland St.\",\n    className: \"formInputInterest\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Contact Agent\",\n    className: \"formContactButton\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"formLabelCheckbox\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    name: \"finance-info\",\n    type: \"checkbox\"\n  }), \"I want financing information.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"formContainerP\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"By pressing Contact Agent, you agree that Zallo Group and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"formTerms\"\n  }, \"Terms of Use.\"), \"Zallo does not endorse any real estate professionals.\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpperForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVXBwZXJGb3JtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9VcHBlckZvcm0uanN4P2QxOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBVcHBlckZvcm0gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtSW5uZXJVcHBlckNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0TmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInRlbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1JbnB1dFRlbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0RW1haWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJpbnRlcmVzdGVkLWluXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdJIGFtIGludGVyZXN0ZWQgaW4gMTIyNSBFLiBNb3JlbGFuZCBTdC4nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtSW5wdXRJbnRlcmVzdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT1cIkNvbnRhY3QgQWdlbnRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1Db250YWN0QnV0dG9uXCIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtTGFiZWxDaGVja2JveFwiPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZmluYW5jZS1pbmZvXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICBJIHdhbnQgZmluYW5jaW5nIGluZm9ybWF0aW9uLlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1Db250YWluZXJQXCI+XG4gICAgICAgIDxwPkJ5IHByZXNzaW5nIENvbnRhY3QgQWdlbnQsIHlvdSBhZ3JlZSB0aGF0IFphbGxvIEdyb3VwIGFuZCByZWFsIGVzdGF0ZSBwcm9mZXNzaW9uYWxzXG4gICAgICAgICAgbWF5IGNhbGwvdGV4dCB5b3UgYWJvdXQgeW91ciBpbnF1aXJ5LCB3aGljaCBtYXkgaW52b2x2ZSB1c2Ugb2YgYXV0b21hdGVkIG1lYW5zIGFuZFxuICAgICAgICAgIHByZXJlY29yZGVkL2FydGlmaWNpYWwgdm9pY2VzLiBZb3UgZG9uJ3QgbmVlZCB0byBjb25zZW50IGFzIGEgY29uZGl0aW9uIG9mIGJ1eWluZyBhbnlcbiAgICAgICAgICAgIHByb3BlcnR5LCBnb29kcyBvciBzZXJ2aWNlcy4gTWVzc2FnZS9kYXRhIHJhdGVzIG1heSBhcHBseS4gWW91IGFsc28gYWdyZWUgdG8gb3VyIDxiciAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1UZXJtc1wiPlxuICAgICAgICAgICAgVGVybXMgb2YgVXNlLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIFphbGxvIGRvZXMgbm90IGVuZG9yc2UgYW55IHJlYWwgZXN0YXRlIHByb2Zlc3Npb25hbHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBwZXJGb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFRQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/UpperForm.jsx\n");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_src_components_Index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/src/components/Index.jsx */ \"./client/src/components/Index.jsx\");\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Client = _require.Client;\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\n\n\nvar publicDirectory = path.join(__dirname, 'public');\nvar postgres = new Client({\n  user: \"nick\",\n  host: \"localhost\",\n  database: \"formservice\"\n});\npostgres.connect();\n\nfunction getAgent(agent, cb) {\n  postgres.query(\"select * from agents where id = \".concat(agent), function (err, res) {\n    if (err) {\n      //Oops!\n      cb(err, null);\n    } else {\n      cb(null, res);\n    }\n  });\n}\n\nhttp.createServer(function (req, res) {\n  if (req.method === 'GET') {\n    var hostJsOrCss = function hostJsOrCss() {\n      fs.readFile(req.url === '/' ? publicDirectory + '/index.html' : publicDirectory + req.url, function (err, content) {\n        res.writeHead(200, {\n          'Content-Type': contentType,\n          \"Access-Control-Allow-Origin\": \"*\",\n          \"Access-Control-Allow-Headers\": \"X-Requested-With\"\n        });\n        res.end(content, 'utf-8');\n      });\n    };\n\n    var contentType = 'text/html';\n    var extension = path.extname(req.url);\n\n    if (extension === '.js') {\n      contentType = 'text/javascript';\n      hostJsOrCss();\n    } else if (extension === '.css') {\n      contentType = 'text/css';\n      hostJsOrCss();\n    } else {\n      (function () {\n        var agents = [];\n        var count = 0;\n\n        for (var i = 0; i < 4; i++) {\n          var randomAgent = Math.floor(Math.random() * 10000000);\n          getAgent(randomAgent, function (err, data) {\n            count++;\n\n            if (err) {//Oops!\n            } else {\n              agents.push(data.rows[0]);\n            }\n\n            if (count === 4) {\n              res.writeHead(200, {\n                'Content-Type': 'text/html',\n                \"Access-Control-Allow-Origin\": \"*\",\n                \"Access-Control-Allow-Headers\": \"X-Requested-With\"\n              });\n              var reactString = ReactDOMServer.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_src_components_Index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                agents: agents\n              }));\n              console.log(reactString);\n              res.end(reactString, 'utf-8');\n            }\n          });\n        }\n      })();\n    }\n  } else {\n    res.write('Error!');\n    res.end();\n  }\n}).listen(8081, function () {// console.log('Server started on port 8081');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcz9mMTQwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoJ3BnJyk7XG5jb25zdCBSZWFjdERPTVNlcnZlciA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSW5kZXguanN4XCI7XG5cbmNvbnN0IHB1YmxpY0RpcmVjdG9yeSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKVxuXG5jb25zdCBwb3N0Z3JlcyA9IG5ldyBDbGllbnQoe1xuICAgIHVzZXI6IFwibmlja1wiLFxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgZGF0YWJhc2U6IFwiZm9ybXNlcnZpY2VcIlxufSk7XG5wb3N0Z3Jlcy5jb25uZWN0KCk7XG5cbmZ1bmN0aW9uIGdldEFnZW50KGFnZW50LCBjYikge1xuICAgIHBvc3RncmVzLnF1ZXJ5KGBzZWxlY3QgKiBmcm9tIGFnZW50cyB3aGVyZSBpZCA9ICR7YWdlbnR9YCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIC8vT29wcyFcbiAgICAgICAgICAgIGNiKGVyciwgbnVsbClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiKG51bGwsIHJlcylcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICBsZXQgY29udGVudFR5cGUgPSAndGV4dC9odG1sJztcbiAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShyZXEudXJsKVxuICAgICAgICBpZiAoZXh0ZW5zaW9uID09PSAnLmpzJykge1xuICAgICAgICAgICAgY29udGVudFR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgaG9zdEpzT3JDc3MoKVxuICAgICAgICB9IGVsc2UgaWYgKGV4dGVuc2lvbiA9PT0gJy5jc3MnKSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L2NzcydcbiAgICAgICAgICAgIGhvc3RKc09yQ3NzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhZ2VudHMgPSBbXVxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tQWdlbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMClcbiAgICAgICAgICAgICAgICBnZXRBZ2VudChyYW5kb21BZ2VudCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vT29wcyFcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50cy5wdXNoKGRhdGEucm93c1swXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIlgtUmVxdWVzdGVkLVdpdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWN0U3RyaW5nID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoPEFwcCBhZ2VudHM9e2FnZW50c30gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWFjdFN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lbmQocmVhY3RTdHJpbmcsICd1dGYtOCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhvc3RKc09yQ3NzKCkge1xuICAgICAgICAgICAgZnMucmVhZEZpbGUocmVxLnVybCA9PT0gJy8nID8gcHVibGljRGlyZWN0b3J5ICsgJy9pbmRleC5odG1sJyA6IHB1YmxpY0RpcmVjdG9yeSArIHJlcS51cmwsIChlcnIsIGNvbnRlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIlgtUmVxdWVzdGVkLVdpdGhcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlcy5lbmQoY29udGVudCwgJ3V0Zi04Jyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMud3JpdGUoJ0Vycm9yIScpO1xuICAgICAgICByZXMuZW5kKCk7XG4gICAgfVxufSkubGlzdGVuKDgwODEsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnU2VydmVyIHN0YXJ0ZWQgb24gcG9ydCA4MDgxJyk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBbUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFuQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQXZCQTtBQXdCQTtBQWpDQTtBQStDQTtBQUNBO0FBQ0E7QUFsREE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/server.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiPzRkYTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pg\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-star-rating-component":
/*!**********************************************!*\
  !*** external "react-star-rating-component" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-star-rating-component\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc3Rhci1yYXRpbmctY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3Rhci1yYXRpbmctY29tcG9uZW50XCI/NjRkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGFyLXJhdGluZy1jb21wb25lbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-star-rating-component\n");

/***/ })

/******/ });