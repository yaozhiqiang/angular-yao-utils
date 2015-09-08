/**
 * Created by tongda on 15/9/8.
 */
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
                    'height': (newValue.h - offsetH) + 'px'
                    //,'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    };
}

export default ResizeDirectiveFactory;