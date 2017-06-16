module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	var _app = __webpack_require__(19);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(26);

	var _template2 = _interopRequireDefault(_template);

	var _reactRedux = __webpack_require__(7);

	var _store = __webpack_require__(20);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(27).config({ path: '../.env' });


	var server = (0, _express2.default)();

	var store = (0, _store2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      var appString = (0, _server.renderToString)(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_reactRouter.RouterContext, props)
	      ));
	      res.send((0, _template2.default)({
	        body: appString,
	        title: 'React Universal App'
	      }));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	server.listen(process.env.PORT || 3000);
	console.log("Server listening on port: " + (process.env.PORT || 3000));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(16);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(17);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { component: _Layout2.default,
	    path: '/'
	  },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'product', component: _index4.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'cart', component: _index6.default })
	);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(8);

	var _Header = __webpack_require__(9);

	var _Header2 = _interopRequireDefault(_Header);

	var _Sidebar = __webpack_require__(13);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = function (_Component) {
	  _inherits(Layout, _Component);

	  function Layout() {
	    _classCallCheck(this, Layout);

	    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	  }

	  _createClass(Layout, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, { location: this.props.location,
	          router: this.props.router
	        }),
	        _react2.default.createElement(_Sidebar2.default, { location: this.props.location,
	          router: this.props.router
	        }),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Layout;
	}(_react.Component);

	exports.default = Layout;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(10);

	var _Button2 = _interopRequireDefault(_Button);

	var _Searchbox = __webpack_require__(11);

	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	var _reactFontawesome = __webpack_require__(12);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.me = localStorage.getItem('logged_in');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'header',
	          { className: 'header' },
	          _react2.default.createElement(
	            'div',
	            { className: 'header-searchbox' },
	            _react2.default.createElement(
	              'h3',
	              { id: 'title' },
	              "WebShop"
	            ),
	            _react2.default.createElement(_Searchbox2.default, null)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'header-buttons' },
	            _react2.default.createElement(_reactFontawesome2.default, { name: 'shopping-basket',
	              color: 'lightseagreen',
	              size: '2x'
	            }),
	            this.me ? null : _react2.default.createElement(
	              _Button2.default,
	              null,
	              'Login'
	            ),
	            this.me ? _react2.default.createElement(
	              _Button2.default,
	              null,
	              'Profile'
	            ) : _react2.default.createElement(
	              _Button2.default,
	              null,
	              'Sign up'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react.Component);

	exports.default = Header;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	  }

	  _createClass(Button, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "button",
	          onClick: this.props.onClick
	        },
	        _react2.default.createElement(
	          "h3",
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Button;
	}(_react.Component);

	exports.default = Button;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_Component) {
	  _inherits(SearchBox, _Component);

	  function SearchBox() {
	    _classCallCheck(this, SearchBox);

	    return _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).apply(this, arguments));
	  }

	  _createClass(SearchBox, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "searchbox" },
	        _react2.default.createElement("input", { type: "text" })
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react.Component);

	exports.default = SearchBox;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-fontawesome");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sidebar = function (_Component) {
	  _inherits(Sidebar, _Component);

	  function Sidebar() {
	    _classCallCheck(this, Sidebar);

	    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	  }

	  _createClass(Sidebar, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.location.pathname === '/cart') {
	        return _react2.default.createElement('div', null);
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'sidebar' },
	        _react2.default.createElement(
	          'ul',
	          { id: 'categories' },
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 1'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 2'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 3'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 4'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 5'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 6'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 7'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 8'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 9'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Category 10'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Sidebar;
	}(_react.Component);

	exports.default = Sidebar;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _Card = __webpack_require__(15);

	var _Card2 = _interopRequireDefault(_Card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'cards' },
	        _react2.default.createElement(_Card2.default, {
	          onClick: function onClick() {
	            return _this2.props.router.push('product');
	          }
	        }),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null),
	        _react2.default.createElement(_Card2.default, null)
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(null, null)(Home);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Card = function (_Component) {
	  _inherits(Card, _Component);

	  function Card() {
	    _classCallCheck(this, Card);

	    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	  }

	  _createClass(Card, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "card-wrapper",
	          onClick: this.props.onClick
	        },
	        _react2.default.createElement(
	          "div",
	          { className: "card" },
	          _react2.default.createElement(
	            "div",
	            { id: "image" },
	            _react2.default.createElement("img", { src: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" }),
	            _react2.default.createElement(
	              "div",
	              { className: "view-card-offer" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "View details..."
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "h3",
	            { id: "title" },
	            "Title of product"
	          ),
	          _react2.default.createElement(
	            "h2",
	            { id: "price" },
	            "Price in Euro"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Short description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	          )
	        )
	      );
	    }
	  }]);

	  return Card;
	}(_react.Component);

	exports.default = Card;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Product = function (_Component) {
	  _inherits(Product, _Component);

	  function Product() {
	    _classCallCheck(this, Product);

	    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
	  }

	  _createClass(Product, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "cards" },
	        _react2.default.createElement(
	          "div",
	          { className: "main-card" },
	          _react2.default.createElement(
	            "div",
	            { className: "main-info-wrapper" },
	            _react2.default.createElement("img", { src: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" }),
	            _react2.default.createElement(
	              "div",
	              null,
	              _react2.default.createElement(
	                "h3",
	                { id: "title" },
	                "Title of product"
	              ),
	              _react2.default.createElement(
	                "h2",
	                { id: "price" },
	                "Price in Euro"
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "cart-button-wrapper" },
	                _react2.default.createElement(
	                  "h5",
	                  null,
	                  "Quantity"
	                ),
	                _react2.default.createElement("input", { type: "number" }),
	                _react2.default.createElement(
	                  "div",
	                  { className: "button cart" },
	                  _react2.default.createElement(
	                    "h3",
	                    null,
	                    "Add to cart"
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "detailed-info-wrapper" },
	            _react2.default.createElement(
	              "h3",
	              null,
	              "Description"
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "Short description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	            ),
	            _react2.default.createElement(
	              "h3",
	              null,
	              "Details"
	            ),
	            _react2.default.createElement(
	              "ul",
	              null,
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Size: "
	                ),
	                "40"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Producer: "
	                ),
	                "Veleproduct"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Size: "
	                ),
	                "40"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Producer: "
	                ),
	                "Veleproduct"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Size: "
	                ),
	                "40"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Producer: "
	                ),
	                "Veleproduct"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Size: "
	                ),
	                "40"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Producer: "
	                ),
	                "Veleproduct"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Size: "
	                ),
	                "40"
	              ),
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  "Producer: "
	                ),
	                "Veleproduct"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Product;
	}(_react.Component);

	exports.default = Product;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CartCard = __webpack_require__(18);

	var _CartCard2 = _interopRequireDefault(_CartCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Basket = function (_Component) {
	  _inherits(Basket, _Component);

	  function Basket() {
	    _classCallCheck(this, Basket);

	    return _possibleConstructorReturn(this, (Basket.__proto__ || Object.getPrototypeOf(Basket)).apply(this, arguments));
	  }

	  _createClass(Basket, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'basket' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Your cart'
	        ),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null),
	        _react2.default.createElement(_CartCard2.default, null)
	      );
	    }
	  }]);

	  return Basket;
	}(_react.Component);

	exports.default = Basket;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CartCard = function (_Component) {
	  _inherits(CartCard, _Component);

	  function CartCard() {
	    _classCallCheck(this, CartCard);

	    return _possibleConstructorReturn(this, (CartCard.__proto__ || Object.getPrototypeOf(CartCard)).apply(this, arguments));
	  }

	  _createClass(CartCard, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "cart-card" },
	        _react2.default.createElement(
	          "div",
	          { className: "image-wrapper" },
	          _react2.default.createElement("img", { src: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" })
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "h3",
	            null,
	            "Title"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "strong",
	              null,
	              "Quantity: "
	            ),
	            "5"
	          ),
	          _react2.default.createElement(
	            "h3",
	            { id: "price" },
	            _react2.default.createElement(
	              "strong",
	              null,
	              "Price: "
	            ),
	            " 5 x 1.99$"
	          )
	        )
	      );
	    }
	  }]);

	  return CartCard;
	}(_react.Component);

	exports.default = CartCard;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _reactRedux = __webpack_require__(7);

	var _store = __webpack_require__(20);

	var _store2 = _interopRequireDefault(_store);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	function App() {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_reactRouter.Router, { routes: _routes2.default, history: _reactRouter.browserHistory })
	  );
	}

	exports.default = App;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(8);

	var _reduxThunk = __webpack_require__(21);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(22);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function initStore() {
	  var middleware = [_reduxThunk2.default];
	  var store = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware))(_redux.createStore)(_reducers2.default);
	  return store;
	}

	exports.default = initStore;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(8);

	var _example = __webpack_require__(23);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var combinedReducer = (0, _redux.combineReducers)({
	  example: _example2.default
	});

	exports.default = combinedReducer;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(24);

	var _lodash = __webpack_require__(25);

	var InitialState = new _immutable.Record({});

	var initialState = new InitialState();

	function ExampleReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    default:
	      {
	        return state;
	      }
	  }
	}

	exports.default = ExampleReducer;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("immutable");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/assets/bootstrap.css\" />\n        <link rel=\"stylesheet\" href=\"/assets/cards.css\" />\n        <link rel=\"stylesheet\" href=\"/assets/header.css\" />\n        <link rel=\"stylesheet\" href=\"/assets/sidebar.css\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      </head>\n\n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n\n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("dotenv");

/***/ }
/******/ ]);