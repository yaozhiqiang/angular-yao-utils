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
import fullscreenModule from './fullscreen/fullscreen.module';

import download from './downloadify/downloadify';

var ngYaoUtils = angular.module('angular-yao-utils',[
    stickyModule.name,
    pageableModule.name,
    coverFlowModule.name,
    resizeModule.name,
    chartsModule.name,
    clocksModule.name,
    scrollbarModule.name,
    editableModule.name,
    fullscreenModule.name
]);

ngYaoUtils.factory('yaoGuid', function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
});

ngYaoUtils.run(function($compile, $injector) {
    'ngInject';
    window.$compile = window.$compile || $compile;
    Function.prototype.$invoke = Function.prototype.$invoke || function(self, locals) {
        return $injector.invoke(this, self, locals);
    };
});

angular.download = download;

export default ngYaoUtils;