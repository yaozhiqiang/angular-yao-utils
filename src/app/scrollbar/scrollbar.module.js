/**
 * Created by yaoshining on 16/8/14.
 */
import ScrollbarDirectiveFactory from './directives/scrollbar.directive';

var scrollbarModule = angular.module('ngYao.scrollbar', [])
    .directive('yaoScrollbar', ScrollbarDirectiveFactory);

export default scrollbarModule;