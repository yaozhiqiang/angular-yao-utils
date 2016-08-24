/**
 * Created by yaoshining on 16/8/24.
 */
export default class FullScreenContentDemoController {
    constructor($scope, yaoFullscreen) {
        'ngInject';
        $scope.close = () => {
            yaoFullscreen.close();
        };
    }
}