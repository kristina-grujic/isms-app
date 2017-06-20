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

	var _app = __webpack_require__(31);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(39);

	var _template2 = _interopRequireDefault(_template);

	var _reactRedux = __webpack_require__(7);

	var _store = __webpack_require__(32);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(40).config({ path: '../.env' });


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

	var _index = __webpack_require__(20);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(22);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(24);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(26);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(29);

	var _index10 = _interopRequireDefault(_index9);

	var _index11 = __webpack_require__(30);

	var _index12 = _interopRequireDefault(_index11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { component: _Layout2.default,
	    path: '/'
	  },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'product/:id', component: _index4.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'category/:id', component: _index12.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'cart', component: _index6.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _index8.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'sign_up', component: _index10.default })
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

	var _Sidebar = __webpack_require__(17);

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
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var loggedIn = localStorage.getItem('current_user');
	      var path = this.props.location.pathname;
	      if (loggedIn) {
	        switch (path) {
	          case '/login':
	          case 'login':
	          case 'sign_up':
	          case '/sign_up':
	            this.props.router.replace('/');
	            break;
	          default:
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var path = this.props.location.pathname;
	      switch (path) {
	        case '/login':
	        case 'login':
	        case 'sign_up':
	        case '/sign_up':
	          {
	            return _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_Header2.default, { location: this.props.location,
	                router: this.props.router
	              }),
	              this.props.children
	            );
	          }
	        default:
	          {
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
	      }
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

	var _reactFontawesome = __webpack_require__(16);

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
	      this.me = localStorage.getItem('current_user');
	      this.forceUpdate();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

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
	              { id: 'title',
	                onClick: function onClick() {
	                  return _this2.props.router.push('/');
	                }
	              },
	              "WebShop"
	            ),
	            _react2.default.createElement(_Searchbox2.default, { location: this.props.location })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'header-buttons' },
	            _react2.default.createElement(_reactFontawesome2.default, { name: 'shopping-basket',
	              color: 'lightseagreen',
	              size: '2x'
	            }),

	            //  <Button>Profile</Button>
	            this.me ? null : _react2.default.createElement(
	              _Button2.default,
	              {
	                onClick: function onClick() {
	                  return _this2.props.router.push('/login');
	                }
	              },
	              'Login'
	            ),
	            this.me ? _react2.default.createElement(
	              _Button2.default,
	              {
	                onClick: function onClick() {
	                  localStorage.clear();
	                  _this2.props.router.push('/login');
	                }
	              },
	              'Log out'
	            ) : _react2.default.createElement(
	              _Button2.default,
	              {
	                onClick: function onClick() {
	                  return _this2.props.router.push('/sign_up');
	                }
	              },
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(8);

	var _products = __webpack_require__(12);

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
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var id = this.props.location.pathname.split('/');
	      if (id.length > 2 && id[1] === 'category') {
	        id = id[id.length - 1];
	        this.props.getProducts('', id);
	      } else {
	        this.props.getProducts();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.query !== nextProps.query) {
	        this.props = nextProps;
	        var id = this.props.location.pathname.split('/');
	        if (id.length > 1) {
	          id = id[id.length - 1];
	          this.props.getProducts(this.props.query, id);
	        } else {
	          this.props.getProducts(this.props.query);
	        }
	      } else if (this.props.location.pathname !== nextProps.location.pathname) {
	        this.props = nextProps;
	        var _id = this.props.location.pathname.split('/');
	        if (_id.length > 1) {
	          _id = _id[_id.length - 1];
	          this.props.getProducts(this.props.query, _id);
	        } else {
	          this.props.getProducts(this.props.query);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'searchbox' },
	        _react2.default.createElement('input', {
	          onChange: function onChange(event) {
	            return _this2.props.setQuery(event.target.value);
	          },
	          type: 'text',
	          value: this.props.query
	        })
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    query: state.products.query
	  };
	}

	function dispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    getProducts: _products.getProducts,
	    setQuery: _products.setQuery
	  }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(SearchBox);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getProduct = getProduct;
	exports.getProducts = getProducts;
	exports.setQuery = setQuery;

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	var _products = __webpack_require__(14);

	var actions = _interopRequireWildcard(_products);

	var _config = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getProduct(productId) {
	  return function (dispatch) {
	    dispatch({ type: actions.GET_PRODUCT_START });
	    return (0, _axios2.default)({
	      url: _config.apiEndpoint + '/product',
	      method: 'get',
	      params: {
	        productId: productId
	      }
	    }).then(function (response) {
	      dispatch({ type: actions.GET_PRODUCT_SUCCESS, response: response.data });
	    }).catch(function (response) {
	      dispatch({ type: actions.GET_PRODUCT_ERROR, error: response.error });
	    });
	  };
	}

	function getProducts() {
	  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var categoryId = arguments[1];

	  return function (dispatch) {
	    dispatch({ type: actions.GET_PRODUCTS_START });
	    return (0, _axios2.default)({
	      url: _config.apiEndpoint + '/products',
	      method: 'get',
	      params: {
	        query: query,
	        categoryId: categoryId
	      }
	    }).then(function (response) {
	      dispatch({ type: actions.GET_PRODUCTS_SUCCESS, response: response.data });
	    }).catch(function (response) {
	      dispatch({ type: actions.GET_PRODUCTS_ERROR, error: response.error });
	    });
	  };
	}

	function setQuery() {
	  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	  return function (dispatch) {
	    dispatch({ type: actions.SET_PRODUCT_QUERY, query: query });
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GET_PRODUCTS_START = exports.GET_PRODUCTS_START = "GET_PRODUCTS_START";
	var GET_PRODUCTS_SUCCESS = exports.GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
	var GET_PRODUCTS_ERROR = exports.GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

	var GET_PRODUCT_START = exports.GET_PRODUCT_START = "GET_PRODUCT_START";
	var GET_PRODUCT_SUCCESS = exports.GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
	var GET_PRODUCT_ERROR = exports.GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

	var SET_PRODUCT_QUERY = exports.SET_PRODUCT_QUERY = "SET_PRODUCT_QUERY";

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	// what is api endpoint

	var apiEndpoint = 'http://localhost:3000';

	module.exports = {
	  apiEndpoint: apiEndpoint
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react-fontawesome");

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

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(8);

	var _categories = __webpack_require__(18);

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
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.getCategories();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.props.location.pathname === '/cart') {
	        return _react2.default.createElement('div', null);
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'sidebar' },
	        _react2.default.createElement(
	          'ul',
	          { id: 'categories' },
	          this.props.categories.map(function (category) {
	            return _react2.default.createElement(
	              'li',
	              {
	                key: category.id,
	                onClick: function onClick(e) {
	                  e.preventDefault();
	                  _this2.props.router.push('/category/' + category.id);
	                }
	              },
	              _react2.default.createElement(
	                'a',
	                { href: '#' },
	                category.name
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Sidebar;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    categories: state.categories.categories
	  };
	}

	function dispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    getCategories: _categories.getCategories
	  }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Sidebar);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCategories = getCategories;

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	var _categories = __webpack_require__(19);

	var actions = _interopRequireWildcard(_categories);

	var _config = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getCategories() {
	  return function (dispatch) {
	    dispatch({ type: actions.GET_CATEGORIES_START });
	    return (0, _axios2.default)({
	      url: _config.apiEndpoint + '/categories',
	      method: 'get'
	    }).then(function (response) {
	      dispatch({ type: actions.GET_CATEGORIES_SUCCESS, response: response.data });
	    }).catch(function (response) {
	      dispatch({ type: actions.GET_CATEGORIES_ERROR, error: response.error });
	    });
	  };
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GET_CATEGORIES_START = exports.GET_CATEGORIES_START = "GET_CATEGORIES_START";
	var GET_CATEGORIES_SUCCESS = exports.GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
	var GET_CATEGORIES_ERROR = exports.GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _Card = __webpack_require__(21);

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

	      console.log(this.props.products.length);
	      return _react2.default.createElement(
	        'div',
	        { className: 'cards' },
	        this.props.products.length ? null : _react2.default.createElement(
	          'h3',
	          null,
	          'No results'
	        ),
	        this.props.products.map(function (product) {
	          if (!product.category) return;
	          return _react2.default.createElement(_Card2.default, {
	            key: product.id,
	            onClick: function onClick() {
	              return _this2.props.router.push('/product/' + product.id);
	            },
	            product: product
	          });
	        })
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    products: state.products.products
	  };
	}

	exports.default = (0, _reactRedux.connect)(stateToProps)(Home);

/***/ },
/* 21 */
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
	      var product = this.props.product;

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
	            product.name
	          ),
	          _react2.default.createElement(
	            "h2",
	            { id: "price" },
	            "EUR ",
	            product.price || 0
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            product.description
	          )
	        )
	      );
	    }
	  }]);

	  return Card;
	}(_react.Component);

	exports.default = Card;

/***/ },
/* 22 */
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

	var _lodash = __webpack_require__(23);

	var _products = __webpack_require__(12);

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
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var id = this.props.location.pathname.split('/');
	      id = id[id.length - 1];
	      this.props.getProduct(id).then(function () {
	        if (!_this2.props.currentProduct) {
	          _this2.props.router.replace('/');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.currentProduct) {
	        return _react2.default.createElement('div', { className: 'cards' });
	      }
	      var product = this.props.currentProduct;
	      return _react2.default.createElement(
	        'div',
	        { className: 'cards' },
	        _react2.default.createElement(
	          'div',
	          { className: 'main-card' },
	          _react2.default.createElement(
	            'div',
	            { className: 'main-info-wrapper' },
	            _react2.default.createElement('img', { src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg' }),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h3',
	                { id: 'title' },
	                product.name
	              ),
	              _react2.default.createElement(
	                'h2',
	                { id: 'price' },
	                'EUR ',
	                product.price || 0
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'cart-button-wrapper' },
	                _react2.default.createElement(
	                  'h5',
	                  null,
	                  'Quantity'
	                ),
	                _react2.default.createElement('input', { type: 'number' }),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'button cart' },
	                  _react2.default.createElement(
	                    'h3',
	                    null,
	                    'Add to cart'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'detailed-info-wrapper' },
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Description'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              product.description || '/'
	            ),
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Details'
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              (0, _lodash.keys)(product.values).length ? null : _react2.default.createElement(
	                'li',
	                null,
	                '/'
	              ),
	              (0, _lodash.keys)(product.values).map(function (valueName) {
	                return _react2.default.createElement(
	                  'li',
	                  { key: valueName },
	                  _react2.default.createElement(
	                    'strong',
	                    null,
	                    valueName + ': '
	                  ),
	                  product.values[valueName]
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Product;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    currentProduct: state.products.currentProduct
	  };
	}

	function dispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    getProduct: _products.getProduct
	  }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Product);

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CartCard = __webpack_require__(25);

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
/* 25 */
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
/* 26 */
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

	var _auth = __webpack_require__(27);

	var _Button = __webpack_require__(10);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_Component) {
	  _inherits(Login, _Component);

	  function Login() {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

	    _this.state = {
	      email: '',
	      password: ''
	    };
	    _this.login = _this.login.bind(_this);
	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'login',
	    value: function login() {
	      var _this2 = this;

	      var _state = this.state,
	          email = _state.email,
	          password = _state.password;

	      if (!email || !password) {
	        alert('Username and password are requred to login!');
	        return;
	      }
	      this.props.login(this.state).then(function () {
	        if (_this2.props.loginError) {
	          alert('Invalid username or password');
	          return;
	        }
	        window.location = '/';
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'login-container' },
	        _react2.default.createElement('input', {
	          placeholder: 'Email',
	          onChange: function onChange(e) {
	            return _this3.setState({ email: e.target.value });
	          },
	          type: 'text',
	          value: this.state.email
	        }),
	        _react2.default.createElement('input', {
	          placeholder: 'Password',
	          onChange: function onChange(e) {
	            return _this3.setState({ password: e.target.value });
	          },
	          type: 'password',
	          value: this.state.password
	        }),
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            onClick: this.login
	          },
	          'Log in'
	        )
	      );
	    }
	  }]);

	  return Login;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    loginError: state.auth.loginError
	  };
	}

	function dispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    login: _auth.login
	  }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Login);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.sign_up = sign_up;

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	var _auth = __webpack_require__(28);

	var actions = _interopRequireWildcard(_auth);

	var _config = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function login(request) {
	  return function (dispatch) {
	    dispatch({ type: actions.USER_LOGIN_START });
	    return (0, _axios2.default)({
	      url: _config.apiEndpoint + '/login',
	      method: 'post',
	      data: request
	    }).then(function (response) {
	      localStorage.setItem('token', response.data.token);
	      localStorage.setItem('current_user', JSON.stringify(response.data.data));
	      dispatch({ type: actions.USER_LOGIN_SUCCESS, response: response.data });
	    }).catch(function (error) {
	      dispatch({ type: actions.USER_LOGIN_ERROR, error: error });
	    });
	  };
	}

	function sign_up(request) {
	  return function (dispatch) {
	    dispatch({ type: actions.USER_REGISTER_START });
	    return (0, _axios2.default)({
	      url: _config.apiEndpoint + '/register',
	      method: 'post',
	      data: request
	    }).then(function (response) {
	      dispatch({ type: actions.USER_REGISTER_SUCCESS, response: response.data });
	    }).catch(function (error) {
	      dispatch({ type: actions.USER_REGISTER_ERROR, error: error });
	    });
	  };
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_LOGIN_START = exports.USER_LOGIN_START = "USER_LOGIN_START";
	var USER_LOGIN_SUCCESS = exports.USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
	var USER_LOGIN_ERROR = exports.USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

	var USER_REGISTER_START = exports.USER_REGISTER_START = "USER_REGISTER_START";
	var USER_REGISTER_SUCCESS = exports.USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
	var USER_REGISTER_ERROR = exports.USER_REGISTER_ERROR = "USER_REGISTER_ERROR";

/***/ },
/* 29 */
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

	var _auth = __webpack_require__(27);

	var _Button = __webpack_require__(10);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signup = function (_Component) {
	  _inherits(Signup, _Component);

	  function Signup() {
	    _classCallCheck(this, Signup);

	    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

	    _this.state = {
	      name: '',
	      email: '',
	      password: ''
	    };
	    _this.signup = _this.signup.bind(_this);
	    return _this;
	  }

	  _createClass(Signup, [{
	    key: 'signup',
	    value: function signup() {
	      var _this2 = this;

	      var _state = this.state,
	          name = _state.name,
	          email = _state.email,
	          password = _state.password;

	      if (!name || !email || !password) {
	        alert('Name, email and password are required!');
	        return;
	      }
	      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      if (!re.test(email)) {
	        alert('Email is not valid!');
	        return;
	      }
	      this.props.sign_up(this.state).then(function () {
	        if (_this2.props.loginError) {
	          // alert('Invalid username or password');
	          return;
	        }
	        _this2.props.router.replace('/');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'login-container' },
	        _react2.default.createElement('input', {
	          placeholder: 'Name',
	          onChange: function onChange(e) {
	            return _this3.setState({ name: e.target.value });
	          },
	          type: 'text',
	          value: this.state.name
	        }),
	        _react2.default.createElement('input', {
	          placeholder: 'Email',
	          onChange: function onChange(e) {
	            return _this3.setState({ email: e.target.value });
	          },
	          type: 'email',
	          value: this.state.email
	        }),
	        _react2.default.createElement('input', {
	          placeholder: 'Password',
	          onChange: function onChange(e) {
	            return _this3.setState({ password: e.target.value });
	          },
	          type: 'password',
	          value: this.state.password
	        }),
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            onClick: this.signup
	          },
	          'Register'
	        )
	      );
	    }
	  }]);

	  return Signup;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    signupError: state.auth.signupError
	  };
	}

	function dispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({
	    sign_up: _auth.sign_up
	  }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Signup);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _Card = __webpack_require__(21);

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
	        this.props.products.length ? null : _react2.default.createElement(
	          'h3',
	          null,
	          'No results'
	        ),
	        this.props.products.map(function (product) {
	          if (!product.category) return;
	          return _react2.default.createElement(_Card2.default, {
	            key: product.id,
	            onClick: function onClick() {
	              return _this2.props.router.push('/product/' + product.id);
	            },
	            product: product
	          });
	        })
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	function stateToProps(state) {
	  return {
	    products: state.products.products
	  };
	}

	exports.default = (0, _reactRedux.connect)(stateToProps)(Home);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _reactRedux = __webpack_require__(7);

	var _store = __webpack_require__(32);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(8);

	var _reduxThunk = __webpack_require__(33);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(34);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function initStore() {
	  var middleware = [_reduxThunk2.default];
	  var store = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware))(_redux.createStore)(_reducers2.default);
	  return store;
	}

	exports.default = initStore;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(8);

	var _products = __webpack_require__(35);

	var _products2 = _interopRequireDefault(_products);

	var _categories = __webpack_require__(37);

	var _categories2 = _interopRequireDefault(_categories);

	var _auth = __webpack_require__(38);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var combinedReducer = (0, _redux.combineReducers)({
	  auth: _auth2.default,
	  categories: _categories2.default,
	  products: _products2.default
	});

	exports.default = combinedReducer;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(36);

	var _lodash = __webpack_require__(23);

	var _products = __webpack_require__(14);

	var actions = _interopRequireWildcard(_products);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var InitialState = new _immutable.Record({
	  products: [],
	  query: '',
	  currentProduct: undefined
	});

	var initialState = new InitialState();

	function ProductReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case actions.GET_PRODUCT_SUCCESS:
	      {
	        state = state.set('currentProduct', action.response.data);
	        return state;
	      }
	    case actions.SET_PRODUCT_QUERY:
	      {
	        state = state.set('query', action.query);
	        return state;
	      }
	    case actions.GET_PRODUCTS_SUCCESS:
	      {
	        state = state.set('products', action.response.data);
	        return state;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	}

	exports.default = ProductReducer;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("immutable");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(36);

	var _lodash = __webpack_require__(23);

	var _categories = __webpack_require__(19);

	var actions = _interopRequireWildcard(_categories);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var InitialState = new _immutable.Record({
	  categories: []
	});

	var initialState = new InitialState();

	function CategoryReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case actions.GET_CATEGORIES_SUCCESS:
	      {
	        state = state.set('categories', action.response.data);
	        return state;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	}

	exports.default = CategoryReducer;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(36);

	var _lodash = __webpack_require__(23);

	var _auth = __webpack_require__(28);

	var actions = _interopRequireWildcard(_auth);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var InitialState = new _immutable.Record({
	  loginError: undefined
	});

	var initialState = new InitialState();

	function AuthReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case actions.USER_LOGIN_START:
	      {
	        state = state.set('loginError', undefined);
	        return state;
	      }
	    case actions.USER_LOGIN_ERROR:
	      {
	        state = state.set('loginError', action.error);
	        return state;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	}

	exports.default = AuthReducer;

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

	module.exports = require("dotenv");

/***/ }
/******/ ]);