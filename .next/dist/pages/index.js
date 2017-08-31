'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _derpyConfig = require('../derpyConfig.json');

var _derpyConfig2 = _interopRequireDefault(_derpyConfig);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AllVideoses from '../components/VideoList.js'

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('svg', { height: '0', 'data-jsx': 708578237
  }, _react2.default.createElement('filter', { id: 'filter1', 'data-jsx': 708578237
  }, _react2.default.createElement('feTurbulence', { type: 'fractalNoise', baseFrequency: '0 4.15', numOctaves: '1', result: 'warp', 'data-jsx': 708578237
  }), _react2.default.createElement('feDisplacementMap', { xChannelSelector: 'R', yChannelSelector: 'G', scale: '30', 'in': 'SourceGraphic', in2: 'warp', 'data-jsx': 708578237
  }))), _react2.default.createElement('svg', { height: '0', 'data-jsx': 708578237
  }, _react2.default.createElement('filter', { id: 'filter2', 'data-jsx': 708578237
  }, _react2.default.createElement('feTurbulence', { type: 'fractalNoise', baseFrequency: '0 0.35', numOctaves: '2', result: 'warp', 'data-jsx': 708578237
  }), _react2.default.createElement('feDisplacementMap', { xChannelSelector: 'R', yChannelSelector: 'G', scale: '230', 'in': 'SourceGraphic', in2: 'warp', 'data-jsx': 708578237
  }))), _react2.default.createElement('svg', { height: '0', 'data-jsx': 708578237
  }, _react2.default.createElement('filter', { id: 'filter3', 'data-jsx': 708578237
  }, _react2.default.createElement('feTurbulence', { type: 'fractalNoise', baseFrequency: '2 0.35', numOctaves: '10', result: 'warp', 'data-jsx': 708578237
  }), _react2.default.createElement('feDisplacementMap', { xChannelSelector: 'R', yChannelSelector: 'G', scale: '530', 'in': 'SourceGraphic', in2: 'warp', 'data-jsx': 708578237
  }))), _react2.default.createElement(_reactPlayer2.default, {
    url: _derpyConfig2.default.BG_VIDEO_2,
    playing: true,
    loop: true,
    volume: 0,
    width: '100vw',
    height: '100vh',
    className: 'video-player mask'
  }), _react2.default.createElement(_reactPlayer2.default, {
    url: _derpyConfig2.default.BG_VIDEO_1,
    playing: true,
    loop: true,
    volume: 0,
    width: '100vw',
    height: '100vh',
    className: 'video-player'
  }), _react2.default.createElement(_style2.default, {
    styleId: 708578237,
    css: '.video-player{position:fixed;top:0;left:0;z-index:0;width:100vw!important;height:100vh!important;display:block;overflow:hidden}.video-player>div>iframe{height:auto!important;width:auto!important;top:50%;left:50%;position:absolute;min-width:200%;min-height:150%;z-index:-1000;overflow:hidden;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.mask{mask-image:url(https://s3-us-west-2.amazonaws.com/derpyvision/derpy-vision.svg) center / 10%;-webkit-mask:url(https://s3-us-west-2.amazonaws.com/derpyvision/derpy-vision.svg) center / 10%;z-index:2}.cray-ani{-webkit-animation:cray 0.15s linear infinite;animation:cray 0.15s linear infinite}'
  }));
};