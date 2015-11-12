/**
 * Created by tongda on 15/9/9.
 */
import EasyPieDirectiveFactory from './directives/easypie.directive';
import ThermometerDirectiveFactory from './directives/thermometer.directive';

var chartsModule = angular.module('ngYao.charts',[])
    .directive('yaoThermometer',ThermometerDirectiveFactory)
    .directive('yaoEasypie',EasyPieDirectiveFactory);

export default chartsModule;