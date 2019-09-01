webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var S = {
  UserForm: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "UserForm",
    componentId: "sc-1quoytg-0"
  })(["background-color:#fff;"]),
  Content: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "UserForm__Content",
    componentId: "sc-1quoytg-1"
  })(["max-width:1200px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;height:300px;padding:15px;"]),
  FormGroup: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]).withConfig({
    displayName: "UserForm__FormGroup",
    componentId: "sc-1quoytg-2"
  })(["margin:15px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;input{border-radius:20px 20px 20px 20px;font-weight:400;font-style:normal;font-size:14px;outline-style:none;background-color:transparent;color:rgba(58,67,68,0.6);padding-left:30px;height:40px;margin-left:10px;flex:2}"]),
  Input: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
    displayName: "UserForm__Input",
    componentId: "sc-1quoytg-3"
  })([""]),
  FormGroupText: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]).withConfig({
    displayName: "UserForm__FormGroupText",
    componentId: "sc-1quoytg-4"
  })(["margin:15px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;"]),
  TextInput: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
    displayName: "UserForm__TextInput",
    componentId: "sc-1quoytg-5"
  })(["font-weight:400;font-style:normal;padding-left:30px;height:40px;margin-left:5px;align-items:center;margin:0 auto;"]) // InputGroupAddon: styled(InputGroupAddon)`
  //     font-size:16px;
  //     font-weight:600;
  //     font-style: normal;
  //     margin-bottom:10px;
  //     margin-top:10px;
  // `,

};

var UserForm = function UserForm(_ref) {
  var onSubmit = _ref.onSubmit;
  var emailRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var heroProfecyRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var heroIntroRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var heroMagicRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      emailValue = _useState[0],
      setEmailValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      heroProfecyValue = _useState2[0],
      setHeroProfecyValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      magicValue = _useState3[0],
      setMagicValue = _useState3[1]; // const [emailValue, setEmailValue] = useState('')


  var onSubmitHandler = function onSubmitHandler(event) {
    event.preventDefault();
    onSubmit({
      email: emailValue,
      userId: Math.random().Math.floor(),
      hero_profecy: heroProfecyValue,
      hero_intro: 'value',
      hero_magic: magicValue,
      accepted: false
    });
  };

  return __jsx(S.UserForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(S.Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(S.FormGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    "for": "exampleEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "email",
    name: "email",
    id: "exampleEmail",
    placeholder: "with a placeholder",
    value: emailValue,
    onChange: function onChange(e) {
      return setEmailValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    "for": "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Select your hero profecy"), __jsx(S.Input, {
    type: "select",
    name: "select",
    id: "exampleSelect",
    value: heroProfecyValue,
    onChange: function onChange(e) {
      return setHeroProfecyValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Necromancer"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Beastmaster"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Druid"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Alchemic"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Witch"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Knight"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Overlord"))), __jsx(S.FormGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    "for": "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Introduce your hero :)"), __jsx(S.TextInput, {
    type: "textarea",
    name: "text",
    id: "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    tag: "fieldset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("legend", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Choose Magic"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Earth Magic",
    onChange: function onChange(e) {
      return setMagicValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), ' ', "Earth Magic")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Water Magic",
    onChange: function onChange(e) {
      return setMagicValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), ' ', "Water Magic")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Air Magic",
    onChange: function onChange(e) {
      return setMagicValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), ' ', "Air Magic")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "radio",
    name: "radio1",
    value: "Fire Magic",
    onChange: function onChange(e) {
      return setMagicValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), ' ', "Fire Magic"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), ' ', "Accept all changes")), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    OnClick: function OnClick(event) {
      return onSubmitHandler(event);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ })

})
//# sourceMappingURL=index.js.e9e0fb3660612ae30bed.hot-update.js.map