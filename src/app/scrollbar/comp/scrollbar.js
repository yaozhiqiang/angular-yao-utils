/**
 * Created by yaoshining on 16/8/14.
 */
import {addWheelListener} from './mouseWheel';

function initialize(element, settings) {
    addWheelListener(element, e => {
        element.scrollTop += e.deltaY * 1;
        element.scrollLeft += e.deltaX * 1;

        e.stopPropagation();
        e.preventDefault();
    });
}

export default {
    initialize
};