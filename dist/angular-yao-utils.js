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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/8/26.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _stickyStickyModule = __webpack_require__(1);

	var _stickyStickyModule2 = _interopRequireDefault(_stickyStickyModule);

	var ngYaoUtils = angular.module('angular-yao-utils', [_stickyStickyModule2['default'].name]);

	exports['default'] = ngYaoUtils;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/8/26.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _stickyDirective = __webpack_require__(2);

	var _stickyDirective2 = _interopRequireDefault(_stickyDirective);

	var stickyModule = angular.module('ngYao.sticky', []).directive('ngYaoSticky', function () {
	  return new _stickyDirective2['default']();
	});

	exports['default'] = stickyModule;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/8/13.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var StickyDirective = function StickyDirective() {
	    'ngInject';

	    _classCallCheck(this, StickyDirective);

	    var directive = {
	        restrict: 'A',
	        scope: true,
	        link: linkFunc,
	        controller: StickyController,
	        controllerAs: 'vm',
	        bindToController: true
	    };

	    function linkFunc(scope, el, attrs) {
	        var $container = angular.element('#' + attrs.stickIn);
	        var stickPoint = { top: 0, left: 0 };
	        if ($container.length < 1) {
	            throw new Error('Can not find sticky container by id: ' + attrs.stickIn + ',Please provide the correct container selector.');
	        }
	        $container.on('scroll', function () {
	            if (el.offset().top <= 0 && !el.hasClass('sticky')) {
	                stickPoint.top = $container.scrollTop();
	                el.addClass('sticky');
	            } else if ($container.scrollTop() <= stickPoint.top) {
	                el.removeClass('sticky');
	            }
	            if (el.hasClass('sticky')) {
	                var diff = el.outerHeight() - $container.innerHeight();
	                var scrollBottom = $container.prop('scrollHeight') - $container.scrollTop() - $container.innerHeight();
	                if (diff > 0) {
	                    if (scrollBottom <= diff) {
	                        el.css('top', scrollBottom - diff);
	                    } else {
	                        el.css('top', 0);
	                    }
	                }
	            }
	        });
	    }

	    return directive;
	};

	var StickyController = function StickyController() {
	    _classCallCheck(this, StickyController);
	};

	//alert(this.stickyContainer);
	exports['default'] = StickyDirective;
	module.exports = exports['default'];

/***/ }
/******/ ]);
angular.module("angular-yao-utils").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.tpl.html","asdasd123");
$templateCache.put("app/sticky/sticky.tpl.html","woca");}]);