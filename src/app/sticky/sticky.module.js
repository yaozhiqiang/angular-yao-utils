/**
 * Created by tongda on 15/8/26.
 */
import StickyDirective from './sticky.directive';

var stickyModule = angular.module('ngYao.sticky',[])
    .directive('ngYaoSticky', () => new StickyDirective());

export default stickyModule;