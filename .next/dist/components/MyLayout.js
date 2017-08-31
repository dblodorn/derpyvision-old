'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default } })), _react2.default.createElement(_Header2.default, null), props.children, _react2.default.createElement(_Footer2.default, null));
};

exports.default = Layout;