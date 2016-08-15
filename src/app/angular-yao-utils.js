/**
 * Created by tongda on 15/8/26.
 */
import stickyModule from './sticky/sticky.module';
import pageableModule from './pageable/pageable.module';
import coverFlowModule from './coverflow/coverflow.module';
import resizeModule from './resize/resize.module';
import chartsModule from './charts/charts.module';
import clocksModule from './clocks/clocks.module';
import scrollbarModule from './scrollbar/scrollbar.module';
import editableModule from './editable/editable.module';

var ngYaoUtils = angular.module('angular-yao-utils',[
    stickyModule.name,
    pageableModule.name,
    coverFlowModule.name,
    resizeModule.name,
    chartsModule.name,
    clocksModule.name,
    scrollbarModule.name,
    editableModule.name
]);

export default ngYaoUtils;