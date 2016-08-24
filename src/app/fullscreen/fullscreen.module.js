/**
 * Created by yaoshining on 16/8/23.
 */
import fullscreenServiceFactory from './services/fullscreen.service';


const fullscreenModule = angular.module('ngYao.fullscreen', []);

fullscreenModule.factory('yaoFullscreen', fullscreenServiceFactory);

export default fullscreenModule;