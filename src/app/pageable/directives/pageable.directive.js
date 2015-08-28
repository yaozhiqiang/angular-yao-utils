/**
* Created by tongda on 15/8/27.
*/
import PageableController from '../controllers/pageable.controller';

class PageableDirective {
    constructor() {
        let directive = {
            restrict: 'A',
            scope: true,
            link: linkFunc,
            controller: PageableController,
            controllerAs: '$pageable',
            bindToController: true
        };

        function linkFunc($scope,$element,$attrs,ctrl) {

        }

        return directive;
    }
}

class PageableNextDirective {
    constructor() {
        let directive = {
            restrict: 'A',
            scope: false,
            require: '^yaoPageable',
            compile: pageableNextCompile
        };

        function pageableNextCompile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, ctrl) {

                },
                post: function postLink(scope, iElement, iAttrs, ctrl, $transclude) {
                    iElement.on('click',function(){
                        scope.$apply(function(){
                            ctrl.$next();
                        });
                    });
                    scope.$on('pageable.afterPaginate',function(event,pageNum){
                        if(pageNum === scope.$totalPages){
                            iElement.addClass('ng-hide');
                        } else {
                            iElement.removeClass('ng-hide');
                        }
                    });
                }
            };
        }

        return directive;
    }
}

class PageablePreviousDirective {
    constructor() {
        let directive = {
            restrict: 'A',
            scope: false,
            require: '^yaoPageable',
            compile: pageablePreviousCompile
        };

        function pageablePreviousCompile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, ctrl) {

                },
                post: function postLink(scope, iElement, iAttrs, ctrl, $transclude) {
                    iElement.on('click',function(){
                        scope.$apply(function(){
                            ctrl.$previous();
                        });
                    });
                    scope.$on('pageable.afterPaginate',function(event,pageNum){
                        if(pageNum <= 1){
                            iElement.addClass('ng-hide');
                        } else {
                            iElement.removeClass('ng-hide');
                        }
                    });
                }
            };
        }

        return directive;
    }
}

export {
    PageableDirective,
    PageableNextDirective,
    PageablePreviousDirective
};