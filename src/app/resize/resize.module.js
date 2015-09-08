/**
 * Created by tongda on 15/9/8.
 */
import ResizeDirectiveFactory from './directives/resize.directive';
var resizeModule = angular.module('ngYao.resize',[])
    .directive('yaoResize',ResizeDirectiveFactory);
export default resizeModule;