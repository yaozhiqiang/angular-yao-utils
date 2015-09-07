/**
 * Created by tongda on 15/9/6.
 */
import coverFlowDirectiveFactory from './directives/coverflow.directive';
var coverflowModule = angular.module('ngYao.coverflow',[])
    .directive('yaoCoverflow',coverFlowDirectiveFactory);

export default coverflowModule;