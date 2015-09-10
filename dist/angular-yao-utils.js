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

	var _resizeResizeModule = __webpack_require__(11);

	var _resizeResizeModule2 = _interopRequireDefault(_resizeResizeModule);

	var _chartsChartsModule = __webpack_require__(13);

	var _chartsChartsModule2 = _interopRequireDefault(_chartsChartsModule);

	var _clocksClocksModule = __webpack_require__(15);

	var _clocksClocksModule2 = _interopRequireDefault(_clocksClocksModule);

	var ngYaoUtils = angular.module('angular-yao-utils', [_stickyStickyModule2['default'].name, _pageablePageableModule2['default'].name, _coverflowCoverflowModule2['default'].name, _resizeResizeModule2['default'].name, _chartsChartsModule2['default'].name, _clocksClocksModule2['default'].name]);

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/9/8.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _directivesResizeDirective = __webpack_require__(12);

	var _directivesResizeDirective2 = _interopRequireDefault(_directivesResizeDirective);

	var resizeModule = angular.module('ngYao.resize', []).directive('yaoResize', _directivesResizeDirective2['default']);
	exports['default'] = resizeModule;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/9/8.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function ResizeDirectiveFactory($window) {
	    'ngInject';
	    return function (scope, element, attr) {

	        var w = angular.element($window);

	        scope.$watch(function () {
	            return {
	                'h': $window.innerHeight,
	                'w': $window.innerWidth
	            };
	        }, function (newValue) {
	            scope.windowHeight = newValue.h;
	            scope.windowWidth = newValue.w;

	            scope.resizeWithOffset = function (offsetH) {

	                scope.$eval(attr.notifier);

	                return {
	                    'height': newValue.h - offsetH + 'px'
	                    //,'width': (newValue.w - 100) + 'px'
	                };
	            };
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    };
	}

	exports['default'] = ResizeDirectiveFactory;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/9/9.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _directivesEasypieDirective = __webpack_require__(14);

	var _directivesEasypieDirective2 = _interopRequireDefault(_directivesEasypieDirective);

	var chartsModule = angular.module('ngYao.charts', []).directive('yaoEasypie', _directivesEasypieDirective2['default']);

	exports['default'] = chartsModule;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/9/9.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function linkFunc(scope, el) {
	    var viewPortWidth = 400;
	    var viewPortHeight = 400;
	    var percent = scope.percent || 0;
	    var barColor = scope.barColor;
	    var barWidth = scope.barWidth || viewPortWidth * 0.1;
	    var trackSize = 120;
	    var innerColor = scope.innerColor || 'transparent';
	    var trackColor = scope.trackColor || '#222';
	    var effect = scope.effect || 'bounce';

	    scope.$watch('percent', function (newValue) {
	        percent = newValue || 0;
	        draw();
	    });

	    //var x = d3.scale.linear()
	    //    .domain([0, d3.max(data)])
	    //    .range([0, 420]);
	    //
	    //d3.select(el[0]).selectAll('div')
	    //    .data(data)
	    //    .enter().append('div')
	    //    .style("width", function(d) { return x(d) + "px"; })
	    //    .text(function(d) { return x(d); });
	    //
	    //var width = 960,
	    //    barHeight = 20;
	    //
	    //var y = d3.scale.linear()
	    //    .domain([0, d3.max(data)])
	    //    .range([height, 0]);
	    //
	    //var chart = d3.select(el[0])
	    //    .insert('svg')
	    //    .attr('width',width)
	    //    .attr('height',barHeight * data.length);
	    //
	    //var bar = chart.selectAll("g")
	    //    .data(data)
	    //    .enter().append("g")
	    //    .attr("transform", function(d, i) {
	    //        return "translate(0," + i * barHeight + ")"; });
	    //
	    //bar.append("rect")
	    //    .attr("width", x)
	    //    .attr("height", barHeight - 1);
	    //
	    //bar.append("text")
	    //    .attr("x", function(d) { return x(d) - 3; })
	    //    .attr("y", barHeight / 2)
	    //    .attr("dy", ".35em")
	    //    .text(function(d) { return d; });
	    var chart = d3.select(el[0]).append('svg').attr('width', '100%').attr('height', '100%').attr('viewBox', '0,0,' + viewPortWidth + ',' + viewPortHeight);
	    var pie = d3.layout.pie().sort(null);
	    var data = pie([0, 100]);
	    data.pop();
	    var color = d3.scale.category10();
	    var outerRadius = viewPortWidth / 2;
	    var innerRadius = outerRadius - barWidth;
	    var arc = d3.svg.arc().outerRadius(outerRadius).innerRadius(innerRadius);
	    chart.append('g').attr("transform", "translate(" + outerRadius + "," + outerRadius + ")").append('path').attr('fill', '#e5e5e5').attr('d', function () {
	        return arc(pie([2 * Math.PI])[0]);
	    });

	    var arcs = chart.selectAll('g.yao-easypie-bar').data(data).enter().append('g').attr('class', 'yao-easypie-bar').attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

	    arcs.append('path').attr('fill', function (d, i) {
	        return barColor || color(i);
	    }).attr('style', 'z-index: 5').attr('d', arc).each(function (d) {
	        this._current = d;
	    });

	    arcs.append('text').attr('text-anchor', 'middle').attr('fill', trackColor).attr('dy', trackSize * 0.35 + 'px').attr('style', 'font-size: ' + trackSize + 'px').attr('class', 'yao-easypie-track').text(percent);

	    arcs.append('text').attr('fill', trackColor).attr('dy', -trackSize * 0.5).attr('dx', trackSize * 0.5).attr('style', 'font-size: ' + trackSize / 4 + 'px').text(' %');

	    chart.insert('circle', ':first-child').attr("cx", viewPortWidth / 2).attr("cy", viewPortHeight / 2).attr("fill", innerColor).attr("r", innerRadius - 5);

	    function arcTween(a) {
	        var i = d3.interpolate(this._current, a);
	        this._current = i(a);
	        return function (t) {
	            return arc(i(t));
	        };
	    }

	    function draw() {
	        data = pie([percent, 100 - percent]);
	        console.log(data);
	        //data.pop();
	        chart.selectAll('g.yao-easypie-bar path').data(data).transition().ease(effect).duration(2500).attrTween("d", arcTween);
	        chart.selectAll('.yao-easypie-track').text(percent);
	    }
	}
	function EasyPieDirectiveFactory() {
	    var directive = {
	        restrict: 'E',
	        scope: {
	            percent: '=',
	            barColor: '@',
	            barWidth: '=',
	            trackColor: '@',
	            innerColor: '@',
	            effect: '@'
	        },
	        link: linkFunc
	    };

	    return directive;
	}

	exports['default'] = EasyPieDirectiveFactory;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tongda on 15/9/10.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _directivesClocksDirective = __webpack_require__(16);

	var _directivesClocksDirective2 = _interopRequireDefault(_directivesClocksDirective);

	var clocksModule = angular.module('ngYao.clocks', []).directive('yaoClock', _directivesClocksDirective2['default']);

	exports['default'] = clocksModule;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Created by tongda on 15/9/10.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function ClocksDirectiveFactory($interval) {
	    'ngInject';
	    var radians = Math.PI / 180,
	        clockWidth = 400,
	        clockHeight = 400,
	        cx = clockWidth / 2,
	        cy = clockHeight / 2,
	        clockRadius = 199,
	        clockPadding = 5,
	        strokeColor = '#424242';

	    var hourScale = d3.scale.linear().range([0, 330]).domain([0, 11]);

	    var minuteScale = d3.scale.linear().range([0, 354]).domain([0, 59]),
	        secondScale = minuteScale;

	    var handData = [{
	        type: 'hour',
	        value: 0,
	        length: 0,
	        scale: hourScale
	    }, {
	        type: 'minute',
	        value: 10,
	        length: 0,
	        scale: minuteScale
	    }, {
	        type: 'second',
	        value: 15,
	        length: 0,
	        scale: secondScale
	    }];

	    updateData();

	    function drawLinesClock(clock) {

	        var tickContainerWidth = 10,
	            secondTickStart = clockPadding + 1,
	            secondTickLength = tickContainerWidth;

	        var tickContanerOuterRaduius = clockRadius - clockPadding,
	            tickContanerinnerRaduius = tickContanerOuterRaduius - tickContainerWidth,
	            hourLabelRadius = tickContanerinnerRaduius - 32;

	        var secondHandLength = tickContanerinnerRaduius - 10,
	            minuteHandLength = hourLabelRadius,
	            hourHandLength = minuteHandLength - 30;

	        handData[0].length = hourHandLength;
	        handData[1].length = minuteHandLength;
	        handData[2].length = secondHandLength;

	        var pie = d3.layout.pie().sort(null);

	        var face = clock.append('g').attr('id', 'clockFace');

	        face.insert('circle', ':first-child').attr('class', 'yao-clock-container').attr('cx', cx).attr('cy', cy).attr('r', clockRadius).attr('fill', 'none').attr('stroke', strokeColor);

	        drawTicks(face);
	        drawHands(face);
	        face.append('text').attr('class', 'clock-logo').text('YAO').attr('stroke', strokeColor).attr('fill', strokeColor).attr('text-anchor', 'middle').attr('x', cx).attr('y', cy - hourLabelRadius + 80);

	        function drawTicks(face) {

	            var scaleArc = d3.svg.arc().outerRadius(tickContanerOuterRaduius).innerRadius(tickContanerinnerRaduius);

	            face.insert('path', ':first-child').attr('class', 'yao-clock-ticks').attr('d', function () {
	                return scaleArc(pie([100])[0]);
	            }).attr('fill', 'none').attr('stroke', strokeColor).attr('stroke-width', '.5').attr("transform", "translate(" + clockWidth / 2 + "," + clockHeight / 2 + ")");

	            face.selectAll('.second-tick').data(d3.range(0, 60)).enter().append('line').attr('class', 'second-tick').attr('stroke', strokeColor).attr('x1', clockWidth / 2).attr('x2', clockWidth / 2).attr('y1', secondTickStart).attr('y2', secondTickStart + secondTickLength).attr('transform', function (d) {
	                return 'rotate(' + secondScale(d) + ',' + clockWidth / 2 + ',' + clockHeight / 2 + ')';
	            });

	            face.selectAll('.hour-tick').data(d3.range(0, 12)).enter().append('line').attr('class', 'hour-tick').attr('stroke', strokeColor).attr('stroke-width', 3).attr('x1', clockWidth / 2).attr('x2', clockWidth / 2).attr('y1', secondTickStart).attr('y2', secondTickStart + secondTickLength + 5).attr('transform', function (d) {
	                return 'rotate(' + hourScale(d) + ',' + clockWidth / 2 + ',' + clockHeight / 2 + ')';
	            });

	            face.selectAll('.hour-label').data(d3.range(1, 13)).enter().append('text').attr('class', 'hour-label').attr('text-anchor', 'middle').attr('stroke', strokeColor).attr('fill', strokeColor).attr('x', function (d) {
	                return hourLabelRadius * Math.sin(hourScale(d) * radians) + clockWidth / 2;
	            }).attr('y', function (d) {
	                return clockHeight / 2 + 46 * 0.35 - 5 - hourLabelRadius * Math.cos(hourScale(d) * radians);
	            }).style({
	                'font-size': 45.405405405405,
	                'font-weight': 300,
	                'font-family': '"Josefin Sans", sans-serif'
	            }).text(function (d) {
	                console.log(d + ',' + hourScale(d));
	                return d;
	            });
	        }

	        function drawHands(face) {
	            var hands = face.append('g').attr('class', 'yao-clock-hands');

	            hands.selectAll('line').data(handData).enter().append('line').attr('class', function (d) {
	                return d.type + '-hand';
	            }).attr('stroke', strokeColor).attr('x1', cx).attr('y1', cy + 30).attr('x2', cx).attr('y2', function (d) {
	                return cy - d.length;
	            }).attr('transform', function (d) {
	                return 'rotate(' + d.scale(d.value) + ',' + cx + ',' + cy + ')';
	            });

	            hands.append('circle').attr('class', 'hands-cover').attr('cx', cx).attr('cy', cy).attr('r', 5).attr('stroke', strokeColor).attr('stroke-width', 3).attr('fill', '#999ca6');
	        }
	    }

	    function moveHands(clock) {
	        clock.select('.yao-clock-hands').selectAll('line').data(handData).transition().attr('transform', function (d) {
	            return 'rotate(' + d.scale(d.value) + ',' + cx + ',' + cy + ')';
	        }).ease('elastic');
	    }

	    function updateData() {
	        var t = new Date();
	        handData[0].value = t.getHours() % 12 + t.getMinutes() / 60;
	        handData[1].value = t.getMinutes();
	        handData[2].value = t.getSeconds();
	    }

	    function linkFunc(scope, el) {
	        var clock = d3.select(el[0]).append('svg').attr('viewBox', '0,0,' + clockWidth + ',' + clockHeight);

	        strokeColor = scope.color || strokeColor;

	        $interval(function () {
	            updateData();
	            moveHands(clock);
	        }, 1000);
	        drawLinesClock(clock);
	    }

	    var directive = {
	        restrict: 'E',
	        scope: {
	            color: '@'
	        },
	        link: linkFunc
	    };

	    return directive;
	}

	exports['default'] = ClocksDirectiveFactory;
	module.exports = exports['default'];

/***/ }
/******/ ]);
angular.module("angular-yao-utils").run(["$templateCache", function($templateCache) {$templateCache.put("app/pageable/templates/pagination.tpl.html","<nav><ul class=\"pagination\"><li><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li><li yao-pagination-indicator=\"\"><a href=\"#\">1</a></li><li><a href=\"#\">2</a></li><li><a href=\"#\">3</a></li><li><a href=\"#\">4</a></li><li><a href=\"#\">5</a></li><li><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li></ul></nav>");}]);