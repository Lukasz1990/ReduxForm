webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\components\\Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background: #cecece;\n      cursor: not-allowed;\n      &:hover {\n        background: #cecece;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var S = {
  Button: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
    displayName: "Button",
    componentId: "d1sd1b-0"
  })(["background-color:rgba(251,253,254,1);box-sizing:border-box;border-width:1px;border-style:solid;border-color:rgba(204,204,204,1);box-shadow:none;border-radius:40px;font-size:14px;color:rgba(57,67,68,0.8);width:170px;height:60px;font-weight:bold;font-style:normal;margin-top:10px;cursor:pointer;margin:5px;&:hover{box-shadow:0px 2px 4px rgba(57,67,68,0.349019607843137);background-color:#ddd;color:#fff;}", ""], function (props) {
    return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
  })
};

var Button = function Button(_ref) {
  var children = _ref.children,
      OnClick = _ref.OnClick,
      disabled = _ref.disabled;

  var onClick = function onClick(e) {
    OnClick();
  };

  return __jsx(S.Button, {
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.137daa112299eb7aff47.hot-update.js.map