/**
 * Created by yao
 */
import routesConfig from './index.routes';
import ngYaoUtils from './angular-yao-utils';
import PageableDemoController from './pageable/demo/pageableDemo.controller';

angular.module('ngYaoUtilsDemo',[ngYaoUtils.name,'ngMaterial','ui.router'])
    .config(function(){

    })
    .config(routesConfig)
    .controller('PageableDemoController', PageableDemoController)
    .run();