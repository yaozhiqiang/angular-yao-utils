/**
 * Created by tongda on 15/8/25.
 */
function routesConfig($stateProvider,$urlRouterProvider) {
    $stateProvider.state('sticky',{
        url: '/sticky',
        templateUrl: 'app/sticky/sticky.tpl.html'
    }).state('main',{
        url: '/',
        templateUrl: 'app/main/main.tpl.html'
    });
    $urlRouterProvider.otherwise('/');
}

export default routesConfig;