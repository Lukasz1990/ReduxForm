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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\components\\Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const S = {
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
    displayName: "Button",
    componentId: "d1sd1b-0"
  })(["background-color:rgba(251,253,254,1);box-sizing:border-box;border-width:1px;border-style:solid;border-color:rgba(204,204,204,1);box-shadow:none;border-radius:40px;font-size:14px;color:rgba(57,67,68,0.8);width:170px;height:60px;font-weight:bold;font-style:normal;margin-top:10px;cursor:pointer;margin:5px;&:hover{box-shadow:0px 2px 4px rgba(57,67,68,0.349019607843137);background-color:#ddd;color:#fff;}", ""], props => props.disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      background: #cecece;
      cursor: not-allowed;
      &:hover {
        background: #cecece;
      }
    `)
};

const Button = ({
  children,
  OnClick,
  disabled
}) => {
  const onClick = () => {
    if (disabled) return;
    OnClick(event);
  };

  return __jsx(S.Button, {
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const S = {
  UserForm: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "UserForm",
    componentId: "sc-1quoytg-0"
  })(["background-color:#fff;"]),
  Content: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "UserForm__Content",
    componentId: "sc-1quoytg-1"
  })(["max-width:1200px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;height:300px;padding:15px;"]),
  FormGroup: styled_components__WEBPACK_IMPORTED_MODULE_1___default()(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]).withConfig({
    displayName: "UserForm__FormGroup",
    componentId: "sc-1quoytg-2"
  })(["margin:15px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;input{border-radius:20px 20px 20px 20px;font-weight:400;font-style:normal;font-size:14px;outline-style:none;background-color:transparent;color:rgba(58,67,68,0.6);padding-left:30px;height:40px;margin-left:10px;flex:2}"]),
  Input: styled_components__WEBPACK_IMPORTED_MODULE_1___default()(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
    displayName: "UserForm__Input",
    componentId: "sc-1quoytg-3"
  })([""]),
  FormGroupText: styled_components__WEBPACK_IMPORTED_MODULE_1___default()(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]).withConfig({
    displayName: "UserForm__FormGroupText",
    componentId: "sc-1quoytg-4"
  })(["margin:15px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;"]),
  TextInput: styled_components__WEBPACK_IMPORTED_MODULE_1___default()(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
    displayName: "UserForm__TextInput",
    componentId: "sc-1quoytg-5"
  })(["font-weight:400;font-style:normal;padding-left:30px;height:40px;margin-left:5px;align-items:center;margin:0 auto;"])
};

const UserForm = ({
  onSubmit
}) => {
  // const emailRef = React.createRef()
  // const heroProfecyRef = React.createRef()
  // const heroIntroRef = React.createRef()
  // const heroMagicRef = React.createRef()
  const {
    0: emailValue,
    1: setEmailValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: heroProfecyValue,
    1: setHeroProfecyValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: magicValue,
    1: setMagicValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: heroIntroValue,
    1: setHeroIntroValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: checkData,
    1: setCheckData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const disabled = emailValue && heroProfecyValue && magicValue && heroIntroValue && checkData ? false : true;

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmit({
      email: emailValue,
      userId: Math.random(),
      hero_profecy: heroProfecyValue,
      hero_intro: heroIntroValue,
      hero_magic: magicValue,
      checked: checkData
    });
    alert('User added');
  };

  return __jsx(S.UserForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(S.Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(S.FormGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "exampleEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "email",
    name: "email",
    id: "exampleEmail",
    placeholder: "your email",
    value: emailValue,
    onChange: e => setEmailValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Select your hero profecy"), __jsx(S.Input, {
    type: "select",
    name: "select",
    id: "exampleSelect",
    value: heroProfecyValue,
    onChange: e => setHeroProfecyValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Necromancer"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Beastmaster"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Druid"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Alchemic"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Witch"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Knight"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Overlord"))), __jsx(S.FormGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Introduce your hero "), __jsx(S.TextInput, {
    type: "textarea",
    name: "text",
    id: "exampleText",
    value: heroIntroValue,
    onChange: e => setHeroIntroValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    tag: "fieldset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("legend", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Choose Magic"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Earth Magic",
    onChange: e => setMagicValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), ' ', "Earth Magic")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Water Magic",
    onChange: e => setMagicValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), ' ', "Water Magic")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Air Magic",
    onChange: e => setMagicValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), ' ', "Air Magic")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Fire Magic",
    onChange: e => setMagicValue(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), ' ', "Fire Magic"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "checkbox",
    onChange: () => setCheckData(!checkData),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), ' ', "Accept all changes")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: disabled,
    OnClick: event => onSubmitHandler(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ }),

/***/ "./components/UserInfo.js":
/*!********************************!*\
  !*** ./components/UserInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\components\\UserInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const S = {
  Table: styled_components__WEBPACK_IMPORTED_MODULE_2___default()(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"]).withConfig({
    displayName: "UserInfo__Table",
    componentId: "sc-1rcfhh-0"
  })(["margin:0 auto;width:800px;"]),
  Header: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.thead.withConfig({
    displayName: "UserInfo__Header",
    componentId: "sc-1rcfhh-1"
  })([""]),
  HeaderCol: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.th.withConfig({
    displayName: "UserInfo__HeaderCol",
    componentId: "sc-1rcfhh-2"
  })([""]),
  Body: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.tbody.withConfig({
    displayName: "UserInfo__Body",
    componentId: "sc-1rcfhh-3"
  })([""]),
  Row: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.tr.withConfig({
    displayName: "UserInfo__Row",
    componentId: "sc-1rcfhh-4"
  })([""]),
  Col: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.td.withConfig({
    displayName: "UserInfo__Col",
    componentId: "sc-1rcfhh-5"
  })([""]),
  ProductName: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
    displayName: "UserInfo__ProductName",
    componentId: "sc-1rcfhh-6"
  })([""]),
  Text: styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
    displayName: "UserInfo__Text",
    componentId: "sc-1rcfhh-7"
  })(["font-size:15px;font-weight:600;font-family:'Arial';font-style:normal;"])
};

const UserInfo = ({
  data
}) => {
  return __jsx(S.Table, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, data && __jsx(S.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, data.map(user => __jsx(S.Row, {
    key: user.userId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(S.Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(S.ProductName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "User email"), __jsx(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, user.email))), __jsx(S.Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Hero intro"), __jsx(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, user.hero_intro)), __jsx(S.Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Hero magic"), __jsx(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, user.hero_magic)), __jsx(S.Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Hero profecy"), __jsx(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, user.hero_profecy))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_UserForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserForm */ "./components/UserForm.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo */ "./components/UserInfo.js");
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const S = {
  Wrapper: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "pages__Wrapper",
    componentId: "sc-17fruba-0"
  })(["display:flex;justify-content:center;align-items:center;margin:20px;flex-direction:column;"]),
  Row: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "pages__Row",
    componentId: "sc-17fruba-1"
  })(["margin-top:40px;"]),
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
    displayName: "pages__Button",
    componentId: "sc-17fruba-2"
  })(["height:50px;width:50px;cursor:pointer;background:#eee;border:none;border-radius:5px 5px 5px 5px;"])
};

const Index = ({
  data,
  userSubmitted
}) => {
  return __jsx(S.Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_components_UserForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: userSubmitted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })));
};

const mapStateToProps = state => ({
  data: state.usersReducer.data
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  userSubmitted: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["userSubmitted"]
})(Index));

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: userSubmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSubmitted", function() { return userSubmitted; });
const ACTION_TYPES = {
  USER_SUBMITTED: 'USER_SUBMITED'
};
const userSubmitted = payload => {
  return {
    type: ACTION_TYPES.USER_SUBMITTED,
    payload
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ACTION_TYPES);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Magdalena\Desktop\reduxAPI\tooploox\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map