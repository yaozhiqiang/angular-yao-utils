/**
 * Created by tongda on 15/8/27.
 */
class PageableDemoController {

    constructor($scope) {
        'ngInject';
        $scope.dataList = this.getDataList();
    }

    getDataList() {
        let list = [];
        for(let i=0; i < 100; i++){
            list.push({
                name: 'name'+(i+1),
                description: 'This element\'s index is '+i
            });
        }
        return list;
    }
}

export default PageableDemoController;