/**
 * Created by yaoshining on 16/8/14.
 */
import * as Scrollbar from '../comp/scrollbar';

function ScrollbarDirectiveFactory() {

    function linkFunc(scope, iElement) {
        Scrollbar.initialize(iElement[0]);
    }

    let directive = {
        restrict: 'AE',
        link: linkFunc
    };
    return directive;
}

export default ScrollbarDirectiveFactory;