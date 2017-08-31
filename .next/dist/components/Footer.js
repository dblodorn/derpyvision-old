'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _derpyConfig = require('../derpyConfig.json');

var _derpyConfig2 = _interopRequireDefault(_derpyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('footer', {
    'data-jsx': 2446121492
  }, _react2.default.createElement('div', { className: 'inner-footer', 'data-jsx': 2446121492
  }, _react2.default.createElement('p', {
    'data-jsx': 2446121492
  }, 'OMG: ', _react2.default.createElement('span', { className: 'light', 'data-jsx': 2446121492
  }, 'SO SATISFYING'), ' \uD83D\uDE0C')), _react2.default.createElement('div', { className: 'audio-wrapper', 'data-jsx': 2446121492
  }, _react2.default.createElement(_reactPlayer2.default, {
    url: _derpyConfig2.default.THEME_SONG_1,
    playing: true,
    loop: true,
    controls: true,
    width: '50vw',
    height: 40,
    className: 'audieu',
    soundcloudConfig: {
      clientId: _derpyConfig2.default.SOUNDCLOUD_CLIENT_ID
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 2446121492,
    css: 'footer{position:fixed;bottom:0;left:0;z-index:10;width:100vw;height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;border-top:6px solid black}.inner-footer{width:50vw;padding-left:10px}.inner-footer>p{color:blue}.audieu{border-left:6px solid black}audio::-webkit-media-controls-current-time-display,audio::-webkit-media-controls-time-remaining-display{font-family:\'bb-book-medium\'!important;color:blue}audio::-webkit-media-controls-play-button,audio::-webkit-media-controls-mute-button{-webkit-appearance:none;border-radius:50%;margin-right:10px;width:20px;height:20px;display:block;background-size:contain;background-repeat:no-repeat}audio::-webkit-media-controls-mute-button{cursor:crosshair;background-image:url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/ear_1f442.png")}audio::-webkit-media-controls-mute-button:hover{background-image:url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hole_1f573.png")}audio::-webkit-media-controls-play-button{cursor:progress;background-image:url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/optical-disc_1f4bf.png")}audio::-webkit-media-controls-play-button:hover{background-image:url("https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/crystal-ball_1f52e.png")}audio::-webkit-media-controls-enclosure{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 10px}audio::-webkit-media-controls-timeline,audio::-webkit-slider-runnable-track,audio::-webkit-media-controls-volume-slider{background-color:blue}'
  }));
};

exports.default = Footer;