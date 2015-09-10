/**
 * Created by tongda on 15/9/10.
 */
import ClocksDirectiveFactory from './directives/clocks.directive';
var clocksModule = angular.module('ngYao.clocks',[])
    .directive('yaoClock',ClocksDirectiveFactory);

export default clocksModule;