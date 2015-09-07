/**
 * Created by tongda on 15/9/6.
 */

let directive = {
    restrict: 'A',
    scope: false,
    link: linkFuc
};

function linkFuc(scope,el) {
    let sections = el.find('section');
    let activeIndex = 0;
    let len = sections.length;
    refresh();
    function refresh() {
        sections.removeClass('active');
        sections.removeClass('left');
        sections.removeClass('right');
        angular.forEach(sections,function(cover,index){
            if(activeIndex === index){
                angular.element(cover).addClass('active');
            } else {
                if(getRightIndexes().indexOf(index) > -1){
                    angular.element(cover).addClass('right');
                } else {
                    angular.element(cover).addClass('left');
                }
            }
            angular.element(cover).on('click',function(){
                alert(1);
            });
        });
    }
    function getRightIndexes() {
        let indexes = [];
        for(let i = (activeIndex+1); i < Math.ceil(len/2); i++){
            let index = i;
            if(i >= len){
                index = i % len;
            }
            indexes.push(index);
        }
        return indexes;
    }
}

function coverFlowFactory() {
    return directive;
}
export default coverFlowFactory;