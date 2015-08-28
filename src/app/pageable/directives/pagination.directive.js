/**
 * Created by tongda on 15/8/26.
 */
import PaginationController from '../controllers/pagination.controller';
class PaginationDirective {
    constructor() {
        'ngInject';
        let directive = {
            restrict: 'A',
            scope: {
                pageableModel: '='
            },
            link: linkFunc,
            //transclude: 'element',
            controller: PaginationController,
            controllerAs: 'vm',
            bindToController: true
        };

        function linkFunc($scope, $element, $attr, ctrl, $transclude) {

        }

        return directive;
    }
}

export default PaginationDirective;