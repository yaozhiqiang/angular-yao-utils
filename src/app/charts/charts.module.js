/**
 * Created by tongda on 15/9/9.
 */
import EasyPieDirectiveFactory from './directives/easypie.directive';
var chartsModule = angular.module('ngYao.charts',[])
    .directive('yaoEasypie',EasyPieDirectiveFactory);

export default chartsModule;