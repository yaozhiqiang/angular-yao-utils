/**
 * Created by tongda on 15/8/25.
 */

function routesConfig($stateProvider,$urlRouterProvider) {
    $stateProvider.state('sticky',{
        url: '/sticky',
        templateUrl: 'app/sticky/sticky.html'
    }).state('main',{
        url: '/',
        templateUrl: 'app/main/main.html'
    }).state('pagination',{
        url: '/pagination',
        templateUrl: 'app/pageable/demo/pageable.html',
        controller: 'PageableDemoController'
    }).state('coverflow',{
        url: '/coverflow',
        templateUrl: 'app/coverflow/demo/coverflow.html'
    });
    $urlRouterProvider.otherwise('/');
}

export default routesConfig;