"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = Input;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -----------------------------------
Input.propTypes = {
  type: _propTypes.default.string,
  name: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  min: _propTypes.default.string
};
Input.defaultProps = {
  required: false,
  min: '0'
}; // ------------------------------------

function Input(_ref) {
  let {
    type,
    name,
    placeholder,
    onChange: _onChange,
    required,
    min
  } = _ref;
  const [initialValue, setInitialValue] = (0, _react.useState)('');
  return /*#__PURE__*/React.createElement("input", {
    className: "inputForm",
    type: type,
    name: name,
    required: required,
    placeholder: placeholder,
    min: min,
    value: initialValue,
    onChange: e => {
      setInitialValue(e.target.value);

      _onChange(e.target.value);
    }
  });
}