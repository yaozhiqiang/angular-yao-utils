/**
 * Created by yao
 */
import routesConfig from './index.routes';
import ngYaoUtils from './angular-yao-utils';
angular.module('ngYaoUtilsDemo',[ngYaoUtils.name,'ngMaterial','ui.router'])
    .config(function(){

    })
    .config(routesConfig)
    .run();