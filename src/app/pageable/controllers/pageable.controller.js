/**
 * Created by tongda on 15/8/28.
 */
class PageableController {
    constructor($scope,$attrs) {
        'ngInject';
        $scope.$currentPage = 1;
        $scope.$pageSize = 15;
        let pageableModel = $scope[$attrs.yaoPageableModel];
        $scope.$currentRows = [];
        $scope.$totalPages = 0;

        $scope.$watch('$currentPage',function(newVal){
            refreshRows();
            $scope.$broadcast('pageable.afterPaginate',$scope.$currentPage);
        });

        $scope.$watch('$pageSize',function(){
            refreshRows();
        });

        this.$next = function() {
            return ++$scope.$currentPage;
        };

        this.$previous = function() {
            return --$scope.$currentPage;
        };

        function refreshRows() {
            $scope.$currentPage = $scope.$currentPage || 1;
            $scope.$totalPages = Math.ceil(pageableModel.length/$scope.$pageSize);
            let firstIndex = ($scope.$currentPage - 1) * $scope.$pageSize;
            let lastNum = $scope.$pageSize * $scope.$currentPage > pageableModel.length? pageableModel.length:$scope.$pageSize * $scope.$currentPage;
            let rows = [];
            for(let i = firstIndex;i < lastNum;i++){
                rows.push(pageableModel[i]);
            }
            $scope.$currentRows = rows;
        }
    }
}

export default PageableController;