webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_UserForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserForm */ "./components/UserForm.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo */ "./components/UserInfo.js");
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var S = {
  Wrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "pages__Wrapper",
    componentId: "sc-17fruba-0"
  })(["display:flex;justify-content:center;align-items:center;margin:20px;flex-direction:column;"]),
  Row: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "pages__Row",
    componentId: "sc-17fruba-1"
  })(["margin-top:10px;"]),
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
    displayName: "pages__Button",
    componentId: "sc-17fruba-2"
  })(["height:50px;width:50px;cursor:pointer;background:#eee;border:none;border-radius:5px 5px 5px 5px;"])
};

var Index = function Index(_ref) {
  var data = _ref.data,
      userSubmitted = _ref.userSubmitted;
  return __jsx(S.Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_UserForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: userSubmitted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.usersReducer.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  userSubmitted: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["userSubmitted"]
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.d20076547651175364ec.hot-update.js.map