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
    }).state('resize',{
        url: '/resize',
        templateUrl: 'app/resize/demo/resize.html'
    }).state('charts',{
        url: '/charts',
        templateUrl: 'app/charts/demo/charts.html'
    }).state('clocks',{
        url: '/clocks',
        templateUrl: 'app/clocks/demo/clocks.html'
    }).state('scrollbar',{
        url: '/scrollbar',
        templateUrl: 'app/scrollbar/demo/scrollbar.html'
    }).state('editable',{
        url: '/editable',
        templateUrl: 'app/editable/demo/editable.html',
        controller: 'EditableDemoController'
    });
    $urlRouterProvider.otherwise('/');
}

export default routesConfig;