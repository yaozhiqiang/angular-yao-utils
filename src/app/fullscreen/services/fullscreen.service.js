/**
 * Created by yaoshining on 16/8/23.
 */
function fullscreenServiceFactory($compile, $templateRequest, $rootScope, $controller) {
    'ngInject';

    const container = angular.element('<div>');
    container.addClass('yao-fullscreen-wrapper');
    container.addClass('shrink');
    container.addClass('invisible');

    const defaultOptions = {
        templateUrl: null,
        controller: null,
        controllerAs: null,
        resolve: null,
    };

    class FullscreenService {

        open(options) {
            options = angular.extend({}, defaultOptions, options);
            let {templateUrl, controller,
                controllerAs, resolve} = options;
            $templateRequest(templateUrl).then(tpl => {
                const scope = $rootScope.$new(true);
                if(angular.isString(controller) || angular.isFunction(controller)) {
                    let locals = {
                        $scope: scope,
                        $element: container
                    };

                    if(angular.isObject(resolve)) {
                        angular.extend(locals, resolve);
                    }

                    const ctrl = $controller(controller, locals);
                    if(controllerAs && angular.isString(controllerAs)) {
                        scope[controllerAs] = ctrl;
                    }
                }
                container.append(tpl);
                let compiled = $compile(container)(scope);
                angular.element(document.body).append(compiled);
                setTimeout(() => {
                    container.removeClass('shrink');
                    setTimeout(() => {
                        container.removeClass('invisible');
                        scope.$broadcast('yaoFullscreen.afterRender');
                    }, 600);
                }, 100);
            });
        }

        close() {
            container.addClass('shrink');
            container.addClass('invisible');
            setTimeout(() => {
                if(container.scope()) {
                    container.scope().$destroy();
                }
                container.detach();
                container.empty();
            }, 600);
        }

    }

    return new FullscreenService();
}

export default fullscreenServiceFactory;