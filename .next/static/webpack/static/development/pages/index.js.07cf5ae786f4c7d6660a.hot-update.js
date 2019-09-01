webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Searcher.js":
false,

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
}, {
  id: 4,
  title: 'Hero Profecy'
}];

var UserInfo = function UserInfo(_ref) {
  var data = _ref.data;
  return __jsx(S.Table, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(S.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(S.HeaderCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), headers.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title;
    return __jsx(S.HeaderCol, {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, title);
  }))), __jsx(S.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, data.map(function (user) {
    return __jsx(S.Row, {
      key: user.userId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(S.ProductName, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, user.email)), __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, user.hero_intro), __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, user.hero_magic), __jsx(S.Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, user.hero_profecy));
  })));
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
  })(["display:flex;justify-content:center;align-items:center;margin-bottom:10px;"]),
  Row: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "pages__Row",
    componentId: "sc-17fruba-1"
  })([""]),
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
      lineNumber: 34
    },
    __self: this
  }, __jsx(S.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_UserForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: userSubmitted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
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
//# sourceMappingURL=index.js.07cf5ae786f4c7d6660a.hot-update.js.map