/**
 * Created by yaoshining on 16/8/14.
 */
let prefix = '', _addEventListener, support;

if(window.addEventListener) {
    _addEventListener = 'addEventListener';
} else {
    _addEventListener = 'attachEvent';
    prefix = 'on';
}

support = 'onwheel' in document.createElement('div')?'wheel':
            document.onmousewheel !== undefined ? 'mousewheel' :
            'DOMMouseScroll';

export function addWheelListener(elem, callback, useCapture) {
    _addWheelListener(elem, support, callback, useCapture);

    if(support == 'DOMMouseScroll') {
        _addWheelListener(elem, 'MozMousePixelScroll', callback, useCapture);
    }
}

function _addWheelListener(elem, eventName, callback, useCapture) {
    elem[_addEventListener](prefix + eventName, support == 'wheel' ? callback : function(originalEvent) {

        const event = {
           originalEvent,
            target: originalEvent.target || originalEvent.srcElement,
            type: 'wheel',
            deltaMode: originalEvent.type == 'MozMousePixelScroll'? 0 : 1,
            deltaX: 0,
            deltaY: 0,
            deltaZ: 0,
            preventDefault: function() {
               if(originalEvent.preventDefault) {
                   originalEvent.preventDefault();
               } else {
                   originalEvent.returnValue = false;
               }
            }
        };

        if(support == 'mousewheel') {
            event.deltaY = -1/40 * originalEvent.wheelDelta;
            if(originalEvent.wheelDeltaX) {
                event.deltaX = -1/40 * originalEvent.wheelDeltaX;
            }
        } else {
            event.deltaY = originalEvent.detail;
        }

        return callback(event);

    }, useCapture || false);
}