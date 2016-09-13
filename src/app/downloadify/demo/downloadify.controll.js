/**
 * Created by yaoshining on 16/9/13.
 */
class DownloadifyDemoController {
    constructor($scope, $element) {
        'ngInject';
        $scope.download = () => {
            angular.download($element[0].outerHTML);
        };
    }
}

export default DownloadifyDemoController;