/**
 * Created by yao
 */
import routesConfig from './index.routes';
import ngYaoUtils from './angular-yao-utils';
import PageableDemoController from './pageable/demo/pageableDemo.controller';
import EditableDemoController from './editable/demo/editableDemo.controller';
import DownloadifyDemoController from './downloadify/demo/downloadify.controll';
import FullScreenDemoController from './fullscreen/demo/fullscreenDemo.controller';
import FullScreenContentDemoController from './fullscreen/demo/content.controller';

angular.module('ngYaoUtilsDemo',[ngYaoUtils.name,'ngMaterial','ui.router'])
    .config(function(){

    })
    .config(routesConfig)
    .controller('PageableDemoController', PageableDemoController)
    .controller('EditableDemoController', EditableDemoController)
    .controller('FullScreenDemoController', FullScreenDemoController)
    .controller('FullScreenContentDemoController', FullScreenContentDemoController)
    .controller('DownloadifyDemoController', DownloadifyDemoController)
    .run();