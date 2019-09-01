webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UserInfo.js":
/*!********************************!*\
  !*** ./components/UserInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Magdalena\\Desktop\\reduxAPI\\tooploox\\components\\UserInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var S = {
  Table: Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"]).withConfig({
    displayName: "UserInfo__Table",
    componentId: "sc-1rcfhh-0"
  })(["margin:0 auto;"]),
  Header: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].thead.withConfig({
    displayName: "UserInfo__Header",
    componentId: "sc-1rcfhh-1"
  })([""]),
  HeaderCol: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].th.withConfig({
    displayName: "UserInfo__HeaderCol",
    componentId: "sc-1rcfhh-2"
  })(["border-top:0!important;"]),
  Body: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tbody.withConfig({
    displayName: "UserInfo__Body",
    componentId: "sc-1rcfhh-3"
  })([""]),
  Row: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].tr.withConfig({
    displayName: "UserInfo__Row",
    componentId: "sc-1rcfhh-4"
  })([""]),
  Col: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].td.withConfig({
    displayName: "UserInfo__Col",
    componentId: "sc-1rcfhh-5"
  })([""]),
  ProductName: styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
    displayName: "UserInfo__ProductName",
    componentId: "sc-1rcfhh-6"
  })([""])
};
var headers = [{
  id: 1,
  title: 'Email'
}, {
  id: 2,
  title: 'Hero Intro'
}, {
  id: 3,
  title: 'Hero Magic'
}];

var UserInfo = function UserInfo(_ref) {
  var data = _ref.data;
  return __jsx(S.Table, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(S.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(S.HeaderCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), headers.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title;
    return __jsx(S.HeaderCol, {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, title);
  }))), __jsx(S.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, headers.map(function (user) {
    return __jsx(S.Row, {
      key: user.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(S.ProductName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, user.title)), __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, user.title), __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, user.title));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ })

})
//# sourceMappingURL=index.js.7eb298582bb8bd099b2c.hot-update.js.map