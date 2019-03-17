webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/App/Home.js":
/*!***************************!*\
  !*** ./pages/App/Home.js ***!
  \***************************/
/*! exports provided: Container, Head, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Note */ "./pages/components/Note.js");
/* harmony import */ var _components_Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Style */ "./pages/components/Style.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");








var _jsxFileName = "C:\\Project\\React\\todo-list-app\\pages\\App\\Home.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\nfont-size: 22px;\nfont-weight: bold;\nfont-style: italic;\ntext-align: center;\ntext-transform: uppercase;\ncolor: #f1f1f1;\nbackground: #595a5c;\npadding: 40px;\nborder-bottom: 1px solid #474747;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-bottom: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());
var Head = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].header(_templateObject2());

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyPress", function (event) {
      if (event.key === "Enter") {
        var noteArr = _this.state.notes;
        noteArr.push(_this.state.noteText);

        _this.setState({
          noteText: ''
        });
      }
    });

    _this.state = {
      noteText: '',
      notes: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "updateNoteText",
    value: function updateNoteText(noteText) {
      this.setState({
        noteText: noteText.target.value
      });
    }
  }, {
    key: "addNote",
    value: function addNote() {
      if (this.state.noteText === '') {
        return;
      }

      var noteArr = this.state.notes;
      noteArr.push(this.state.noteText);
      this.setState({
        noteText: ''
      });
      this.textInput.focus();
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(index) {
      var noteArr = this.state.notes;
      noteArr.splice(index, 1);
      this.setState({
        notes: noteArr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var notes = this.state.notes.map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: key,
          text: val,
          deleteMethod: function deleteMethod() {
            return _this2.deleteNote(key);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Todo App"), notes, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "button",
        onClick: this.addNote.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "+"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Enter Notes",
        type: "text",
        className: "input",
        ref: function ref(input) {
          _this2.textInput = input;
        },
        value: this.state.noteText,
        onChange: function onChange(noteText) {
          return _this2.updateNoteText(noteText);
        },
        onKeyPress: this.handleKeyPress.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4c68fc624ed209a31273.hot-update.js.map