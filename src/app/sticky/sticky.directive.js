/**
 * Created by tongda on 15/8/13.
 */
class StickyDirective {
    constructor(){
        'ngInject';
        let directive = {
            restrict: 'A',
            scope: true,
            link: linkFunc,
            controller: StickyController,
            controllerAs: 'vm',
            bindToController: true
        };

        function linkFunc(scope, el, attrs){
            let $container = angular.element('#'+attrs.stickIn);
            let stickPoint = {top: 0,left: 0};
            if($container.length < 1){
                throw new Error('Can not find sticky container by id: ' +attrs.stickIn+
                    ',Please provide the correct container selector.');
            }
            $container.on('scroll',() => {
                if(el.offset().top <= 0 && !el.hasClass('sticky')){
                    stickPoint.top = $container.scrollTop();
                    el.addClass('sticky');
                } else if($container.scrollTop() <= stickPoint.top){
                    el.removeClass('sticky');
                }
                if(el.hasClass('sticky')){
                    let diff = el.outerHeight() - $container.innerHeight();
                    let scrollBottom = $container.prop('scrollHeight') - $container.scrollTop() - $container.innerHeight();
                    if(diff > 0){
                        if(scrollBottom <= diff){
                            el.css('top',scrollBottom - diff);
                        } else {
                            el.css('top',0);
                        }
                    }
                }
            });
        }

        return directive;
    }
}

class StickyController {
    constructor() {
        //alert(this.stickyContainer);
    }
}

export default StickyDirective;