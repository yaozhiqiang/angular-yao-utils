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

	var _pageablePageableModule = __webpack_require__(3);

	var _pageablePageableModule2 = _interopRequireDefault(_pageablePageableModule);

	var _coverflowCoverflowModule = __webpack_require__(9);

	var _coverflowCoverflowModule2 = _interopRequireDefault(_coverflowCoverflowModule);

	var ngYaoUtils = angular.module('angular-yao-utils', [_stickyStickyModule2['default'].name, _pageablePageableModule2['default'].name, _coverflowCoverflowModule2['default'].name]);

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

	var stickyModule = angular.module('ngYao.sticky', []).directive('yaoSticky', function () {
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/8/26.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _directivesPageableDirective = __webpack_require__(4);

	var _directivesPaginationDirective = __webpack_require__(6);

	var _directivesPaginationDirective2 = _interopRequireDefault(_directivesPaginationDirective);

	var _directivesIndicatorDirective = __webpack_require__(8);

	var _directivesIndicatorDirective2 = _interopRequireDefault(_directivesIndicatorDirective);

	var paginationModule = angular.module('ngYao.pageable', []).directive('yaoPagination', function () {
	    return new _directivesPaginationDirective2['default']();
	}).directive('yaoPageable', function () {
	    return new _directivesPageableDirective.PageableDirective();
	}).directive('yaoPageableNext', function () {
	    return new _directivesPageableDirective.PageableNextDirective();
	}).directive('yaoPageablePrevious', function () {
	    return new _directivesPageableDirective.PageablePreviousDirective();
	}).directive('yaoPaginationIndicator', function () {
	    return new _directivesIndicatorDirective2['default']();
	});

	exports['default'] = paginationModule;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* Created by tongda on 15/8/27.
	*/
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _controllersPageableController = __webpack_require__(5);

	var _controllersPageableController2 = _interopRequireDefault(_controllersPageableController);

	var PageableDirective = function PageableDirective() {
	    _classCallCheck(this, PageableDirective);

	    var directive = {
	        restrict: 'A',
	        scope: true,
	        link: linkFunc,
	        controller: _controllersPageableController2['default'],
	        controllerAs: '$pageable',
	        bindToController: true
	    };

	    function linkFunc($scope, $element, $attrs, ctrl) {}

	    return directive;
	};

	var PageableNextDirective = function PageableNextDirective() {
	    _classCallCheck(this, PageableNextDirective);

	    var directive = {
	        restrict: 'A',
	        scope: false,
	        require: '^yaoPageable',
	        compile: pageableNextCompile
	    };

	    function pageableNextCompile(tElement, tAttrs, transclude) {
	        return {
	            pre: function preLink(scope, iElement, iAttrs, ctrl) {},
	            post: function postLink(scope, iElement, iAttrs, ctrl, $transclude) {
	                iElement.on('click', function () {
	                    scope.$apply(function () {
	                        ctrl.$next();
	                    });
	                });
	                scope.$on('pageable.afterPaginate', function (event, pageNum) {
	                    if (pageNum === scope.$totalPages) {
	                        iElement.addClass('disabled');
	                    } else {
	                        iElement.removeClass('disabled');
	                    }
	                });
	            }
	        };
	    }

	    return directive;
	};

	var PageablePreviousDirective = function PageablePreviousDirective() {
	    _classCallCheck(this, PageablePreviousDirective);

	    var directive = {
	        restrict: 'A',
	        scope: false,
	        require: '^yaoPageable',
	        compile: pageablePreviousCompile
	    };

	    function pageablePreviousCompile(tElement, tAttrs, transclude) {
	        return {
	            pre: function preLink(scope, iElement, iAttrs, ctrl) {},
	            post: function postLink(scope, iElement, iAttrs, ctrl, $transclude) {
	                iElement.on('click', function () {
	                    scope.$apply(function () {
	                        ctrl.$previous();
	                    });
	                });
	                scope.$on('pageable.afterPaginate', function (event, pageNum) {
	                    if (pageNum <= 1) {
	                        iElement.addClass('disabled');
	                    } else {
	                        iElement.removeClass('disabled');
	                    }
	                });
	            }
	        };
	    }

	    return directive;
	};

	exports.PageableDirective = PageableDirective;
	exports.PageableNextDirective = PageableNextDirective;
	exports.PageablePreviousDirective = PageablePreviousDirective;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/8/28.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var PageableController = function PageableController($scope, $attrs, $parse) {
	    'ngInject';

	    _classCallCheck(this, PageableController);

	    $scope.$currentPage = 1;
	    $scope.$pageSize = 15;
	    var pageableModel = $parse($attrs.yaoPageableModel)($scope);
	    $scope.$currentRows = [];
	    $scope.$totalPages = 0;

	    $scope.$watch('$currentPage', function (newVal) {
	        refreshRows();
	        $scope.$broadcast('pageable.afterPaginate', $scope.$currentPage);
	    });

	    $scope.$watch('$pageSize', function () {
	        refreshRows();
	    });

	    this.$next = function () {
	        return ++$scope.$currentPage;
	    };

	    this.$previous = function () {
	        return --$scope.$currentPage;
	    };

	    function refreshRows() {
	        $scope.$totalPages = Math.ceil(pageableModel.length / $scope.$pageSize);
	        $scope.$currentPage = $scope.$currentPage || 1;
	        $scope.$currentPage = $scope.$currentPage > $scope.$totalPages ? $scope.$totalPages : $scope.$currentPage;
	        var firstIndex = ($scope.$currentPage - 1) * $scope.$pageSize;
	        var lastNum = $scope.$pageSize * $scope.$currentPage > pageableModel.length ? pageableModel.length : $scope.$pageSize * $scope.$currentPage;
	        var rows = [];
	        for (var i = firstIndex; i < lastNum; i++) {
	            rows.push(pageableModel[i]);
	        }
	        $scope.$currentRows = rows;
	    }
	};

	exports['default'] = PageableController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/8/26.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _controllersPaginationController = __webpack_require__(7);

	var _controllersPaginationController2 = _interopRequireDefault(_controllersPaginationController);

	var PaginationDirective = function PaginationDirective() {
	    'ngInject';

	    _classCallCheck(this, PaginationDirective);

	    var directive = {
	        restrict: 'A',
	        scope: {
	            pageableModel: '='
	        },
	        link: linkFunc,
	        //transclude: 'element',
	        controller: _controllersPaginationController2['default'],
	        controllerAs: 'vm',
	        bindToController: true
	    };

	    function linkFunc($scope, $element, $attr, ctrl, $transclude) {}

	    return directive;
	};

	exports['default'] = PaginationDirective;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/8/26.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var PaginationController = function PaginationController($scope) {
	    'ngInject';

	    _classCallCheck(this, PaginationController);

	    this.name = 123;
	};

	exports['default'] = PaginationController;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/8/27.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var PaginationIndicatorDirective = function PaginationIndicatorDirective() {
	    _classCallCheck(this, PaginationIndicatorDirective);

	    var directive = {
	        restrict: 'A',
	        scope: true,
	        require: '^yaoPagination',
	        link: linkFunc
	    };

	    function linkFunc($scope, $element, $attr, ctrl, $transclude) {}

	    return directive;
	};

	exports['default'] = PaginationIndicatorDirective;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/9/6.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _directivesCoverflowDirective = __webpack_require__(10);

	var _directivesCoverflowDirective2 = _interopRequireDefault(_directivesCoverflowDirective);

	var coverflowModule = angular.module('ngYao.coverflow', []).directive('yaoCoverflow', _directivesCoverflowDirective2['default']);

	exports['default'] = coverflowModule;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/9/6.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var directive = {
	    restrict: 'A',
	    scope: false,
	    link: linkFuc
	};

	function linkFuc(scope, el) {
	    var sections = el.find('section');
	    var activeIndex = 0;
	    var len = sections.length;
	    refresh();
	    function refresh() {
	        sections.removeClass('active');
	        sections.removeClass('left');
	        sections.removeClass('right');
	        angular.forEach(sections, function (cover, index) {
	            if (activeIndex === index) {
	                angular.element(cover).addClass('active');
	            } else {
	                if (getRightIndexes().indexOf(index) > -1) {
	                    angular.element(cover).addClass('right');
	                } else {
	                    angular.element(cover).addClass('left');
	                }
	            }
	            angular.element(cover).on('click', function () {
	                alert(1);
	            });
	        });
	    }
	    function getRightIndexes() {
	        var indexes = [];
	        for (var i = activeIndex + 1; i < Math.ceil(len / 2); i++) {
	            var index = i;
	            if (i >= len) {
	                index = i % len;
	            }
	            indexes.push(index);
	        }
	        return indexes;
	    }
	}

	function coverFlowFactory() {
	    return directive;
	}
	exports['default'] = coverFlowFactory;
	module.exports = exports['default'];

/***/ }
/******/ ]);
angular.module("angular-yao-utils").run(["$templateCache", function($templateCache) {$templateCache.put("app/pageable/templates/pagination.tpl.html","<nav><ul class=\"pagination\"><li><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li><li yao-pagination-indicator=\"\"><a href=\"#\">1</a></li><li><a href=\"#\">2</a></li><li><a href=\"#\">3</a></li><li><a href=\"#\">4</a></li><li><a href=\"#\">5</a></li><li><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li></ul></nav>");}]);