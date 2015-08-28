/**
 * Created by tongda on 15/8/26.
 */
import {
    PageableDirective,
    PageableNextDirective,
    PageablePreviousDirective
    } from './directives/pageable.directive';
import PaginationDirective from './directives/pagination.directive';
import PaginationIndicatorDirective from './directives/indicator.directive';

var paginationModule = angular.module('ngYao.pageable',[])
    .directive('yaoPagination',() => new PaginationDirective())
    .directive('yaoPageable',() => new PageableDirective())
    .directive('yaoPageableNext',() => new PageableNextDirective())
    .directive('yaoPageablePrevious',() => new PageablePreviousDirective())
    .directive('yaoPaginationIndicator',() => new PaginationIndicatorDirective());

export default paginationModule;