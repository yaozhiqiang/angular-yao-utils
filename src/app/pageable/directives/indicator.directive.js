/**
 * Created by tongda on 15/8/27.
 */
class PaginationIndicatorDirective {
    constructor() {
        let directive = {
            restrict: 'A',
            scope: true,
            require: '^yaoPagination',
            link: linkFunc
        };

        function linkFunc($scope, $element, $attr, ctrl, $transclude) {

        }

        return directive;
    }
}

export default PaginationIndicatorDirective;