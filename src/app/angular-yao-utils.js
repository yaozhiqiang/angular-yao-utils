/**
 * Created by tongda on 15/8/26.
 */
import stickyModule from './sticky/sticky.module';
import pageableModule from './pageable/pageable.module';
import coverFlowModule from './coverflow/coverflow.module';

var ngYaoUtils = angular.module('angular-yao-utils',[
    stickyModule.name,
    pageableModule.name,
    coverFlowModule.name
]);

export default ngYaoUtils;