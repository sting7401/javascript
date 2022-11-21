// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":"node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":"node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized.js":"node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"app.ts":[function(require,module,exports) {
"use strict";

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ajax = new XMLHttpRequest();
var content = document.createElement('div');
var NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
var CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
var store = {
  currentPage: 1,
  feeds: []
};
function applyApiMixin(targetClass, baseClass) {
  baseClass.forEach(function (baseClass) {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(function (propertyName) {
      var descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, propertyName);
      if (descriptor) {
        Object.defineProperty(targetClass.prototype, propertyName, descriptor);
      }
    });
  });
}
var Api = /*#__PURE__*/function () {
  function Api() {
    (0, _classCallCheck2.default)(this, Api);
  }
  (0, _createClass2.default)(Api, [{
    key: "getRequest",
    value: function getRequest(url) {
      var ajax = new XMLHttpRequest();
      ajax.open('GET', url, false);
      ajax.send();
      return JSON.parse(ajax.response);
    }
  }]);
  return Api;
}();
var NewsFeedApi = /*#__PURE__*/function () {
  function NewsFeedApi() {
    (0, _classCallCheck2.default)(this, NewsFeedApi);
  }
  (0, _createClass2.default)(NewsFeedApi, [{
    key: "getData",
    value: function getData() {
      return this.getRequest(NEWS_URL);
    }
  }]);
  return NewsFeedApi;
}();
var NewsDetailApi = /*#__PURE__*/function () {
  function NewsDetailApi() {
    (0, _classCallCheck2.default)(this, NewsDetailApi);
  }
  (0, _createClass2.default)(NewsDetailApi, [{
    key: "getData",
    value: function getData(id) {
      return this.getRequest(CONTENT_URL.replace('@id', id));
    }
  }]);
  return NewsDetailApi;
}();
var View = /*#__PURE__*/function () {
  function View(containerId, template) {
    (0, _classCallCheck2.default)(this, View);
    var containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw '안됨';
    }
    this.container = containerElement;
    this.template = template;
    this.renderTemplate = template;
    this.htmlList = [];
  }
  (0, _createClass2.default)(View, [{
    key: "updateView",
    value: function updateView() {
      this.container.innerHTML = this.renderTemplate;
      this.renderTemplate = this.template;
    }
  }, {
    key: "addHtml",
    value: function addHtml(htmlString) {
      this.htmlList.push(htmlString);
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      var snapShot = this.htmlList.join('');
      this.clearHtmlList();
      return snapShot;
    }
  }, {
    key: "setTemplate",
    value: function setTemplate(key, value) {
      this.renderTemplate = this.renderTemplate.replace("{{__".concat(key, "__}}"), value);
    }
  }, {
    key: "clearHtmlList",
    value: function clearHtmlList() {
      this.htmlList = [];
    }
  }]);
  return View;
}();
var NewsFeedView = /*#__PURE__*/function (_View) {
  (0, _inherits2.default)(NewsFeedView, _View);
  var _super = _createSuper(NewsFeedView);
  function NewsFeedView(containerId) {
    var _this;
    (0, _classCallCheck2.default)(this, NewsFeedView);
    var template = /* html */"\n            <div class=\"bg-gray-600 min-h-screen\">\n                <div class=\"bg-white text-xl\">\n                    <div class=\"mx-auto px-4\">\n                        <div class=\"flex justify-between items-center py-6\">\n                            <div class=\"flex justify-start\">\n                                <h1 class=\"font-extrabold text-xl\">NEWS</h1>\n                            </div>\n                            <div class=\"items-center justify-end\">\n                                <a href=\"#/page/{{__prev_page__}}\" class=\"text-gray-500\">\uC774\uC804</a>\n                                <a href=\"#/page/{{__next_page__}}\" class=\"text-gray-500 ml-4\">\uB2E4\uC74C</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <ul class=\"p-4 text-2xl text-gray-700\">\n                    {{__news_feed__}}\n                </ul>\n            </div>\n        ";
    _this = _super.call(this, containerId, template);
    _this.api = new NewsFeedApi();
    _this.feeds = store.feeds;
    if (_this.feeds.length === 0) {
      _this.feeds = store.feeds = _this.api.getData();
      _this.makeFeeds();
    }
    return _this;
  }
  (0, _createClass2.default)(NewsFeedView, [{
    key: "render",
    value: function render() {
      store.currentPage = Number(location.hash.substring(7) || 1);
      for (var i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i += 1) {
        var _this$feeds$i = this.feeds[i],
          id = _this$feeds$i.id,
          title = _this$feeds$i.title,
          comments_count = _this$feeds$i.comments_count,
          user = _this$feeds$i.user,
          points = _this$feeds$i.points,
          time_ago = _this$feeds$i.time_ago,
          read = _this$feeds$i.read;
        this.addHtml( /* html */"\n\n            <div class=\"mt-6 p-6 ".concat(read ? ' bg-red-500' : 'bg-white', " rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100\">\n                <div class=\"flex\">\n                    <div class=\"flex-auto\">\n                        <a href=\"#/show/").concat(id, "\">").concat(title, "</a>\n                    </div>\n                    <div class=\"text-center text-sm\">\n                        <div class=\"\"w-10 text-white bg-green-300 rounded-lg px-0 py-2\">").concat(comments_count, "</div>\n                    </div>\n                </div>\n                <div class=\"flex mt-3\">\n                    <div class=\"grid grid-cols-3 text-sm text-gray-500\">\n                        <div><i class=\"fas fa-user mr-1\"></i>").concat(user, "</div>\n                        <div><i class=\"fas fa-heart mr-1\"></i>").concat(points, "</div>\n                        <div><i class=\"fas fa-clock mr-1\"></i>").concat(time_ago, "</div>\n                    </div>\n                </div>\n            </div>\n            "));
      }
      this.setTemplate('news_feed', this.getHtml());
      this.setTemplate('prev_page', String(store.currentPage > 1 ? store.currentPage - 1 : 1));
      this.setTemplate('next_page', String(store.currentPage ? store.currentPage + 1 : store.currentPage));
      this.updateView();
    }
  }, {
    key: "makeFeeds",
    value: function makeFeeds() {
      for (var i = 0; i < this.feeds.length; i += 1) {
        this.feeds[i].read = false;
      }
    }
  }]);
  return NewsFeedView;
}(View);
var NewsDetailView = /*#__PURE__*/function (_View2) {
  (0, _inherits2.default)(NewsDetailView, _View2);
  var _super2 = _createSuper(NewsDetailView);
  function NewsDetailView(containerId) {
    (0, _classCallCheck2.default)(this, NewsDetailView);
    var template = /* html */"\n            <div class=\"bg-gray-600 min-h-screen pb-8\">\n                <div class=\"bg-white text-xl\">\n                    <div class=\"mx-auto px-4\">\n                        <div class=\"flex justify-between items-center py-6\">\n                            <div class=\"flex justify-start\">\n                                <h1 class=\"font-extrabold text-xl\">NEWS</h1>\n                            </div>\n                            <div class=\"items-center justify-end\">\n                                <a href=\"#/page/{{__currentPage__}}\" class=\"text-gray-500\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"h-full m-6 p-4 border rounded-xl bg-white\">\n                    <h1>{{__title__}}</h1>\n                    <div class=\"text-gray-400 h-20\">\n                       {{__content__}}\n                    </div>\n        \n                    {{__comment__}}\n                </div>\n            </div>\n        ";
    return _super2.call(this, containerId, template);
  }
  (0, _createClass2.default)(NewsDetailView, [{
    key: "render",
    value: function render() {
      var id = location.hash.substring(7);
      var api = new NewsDetailApi();
      var newsDetail = api.getData(id);
      for (var i = 0; i < store.feeds.length; i += 1) {
        if (store.feeds[i].id === Number(id)) {
          store.feeds[i].read = true;
          break;
        }
      }
      this.setTemplate('comment', this.makeComment(newsDetail.comments));
      this.setTemplate('currentPage', String(store.currentPage));
      this.setTemplate('title', newsDetail.title);
      this.setTemplate('content', newsDetail.content);
      this.updateView();
    }
  }, {
    key: "makeComment",
    value: function makeComment(comments) {
      var commentString = [];
      for (var i = 0; i < comments.length; i += 1) {
        var comment = comments[i];
        this.addHtml( /* html */"\n                <div class=\"mt-4 pl-".concat(comment.level * 5, "\">\n                    <div class=\"text-gray-400\">\n                        <i class=\"fa fa-sort-up mr-2\"></i>\n                        <strong>").concat(comment.user, "</strong> ").concat(comment.time_ago, "\n                    </div>\n                    <p class=\"text-gray-700\">").concat(comment.content, "</p>\n                </div>\n            "));
        if (comment.comments.length > 0) {
          this.addHtml(this.makeComment(comment.comments));
        }
      }
      return this.getHtml();
    }
  }]);
  return NewsDetailView;
}(View);
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    window.addEventListener('hashchange', this.route.bind(this));
    this.routeTable = [];
    this.defaultRoute = null;
  }
  (0, _createClass2.default)(Router, [{
    key: "setDefaultPage",
    value: function setDefaultPage(page) {
      this.defaultRoute = {
        path: '',
        page: page
      };
    }
  }, {
    key: "addRoutePath",
    value: function addRoutePath(path, page) {
      this.routeTable.push({
        path: path,
        page: page
      });
    }
  }, {
    key: "route",
    value: function route() {
      var routePath = location.hash;
      if (routePath === '' && this.defaultRoute) {
        this.defaultRoute.page.render();
      }
      var _iterator = _createForOfIteratorHelper(this.routeTable),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var routeInfo = _step.value;
          if (routePath.indexOf(routeInfo.path) >= 0) {
            routeInfo.page.render();
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return Router;
}();
function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();
  return JSON.parse(ajax.response);
}
;
;
applyApiMixin(NewsFeedApi, [Api]);
applyApiMixin(NewsDetailApi, [Api]);
var router = new Router();
var newsFeedView = new NewsFeedView('root');
var newsDetailView = new NewsDetailView('root');
router.setDefaultPage(newsFeedView);
router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);
router.route();
},{"@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js"}],"C:/Users/sting/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3190" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/sting/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map