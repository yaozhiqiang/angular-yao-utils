/**
 * Created by yaoshining on 16/8/23.
 */

function maximization(yaoFullscreen) {
    'ngInject';
    yaoFullscreen.open({
        templateUrl: 'app/fullscreen/demo/content.html',
        controller: 'FullScreenContentDemoController',
        controllerAs: '$fullscreen',
        resolve: {

        }

    });
}

export default class FullScreenDemoController {

    constructor($scope, $injector) {
        'ngInject';
        $scope.max = () => $injector.invoke(maximization, this, {});
    }

}