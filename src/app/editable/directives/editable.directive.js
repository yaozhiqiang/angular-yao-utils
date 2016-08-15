/**
 * Created by yaoshining on 16/8/15.
 */
function EditableDirectiveFactory($timeout) {
    'ngInject';
    function compileFunc(tElem, tAttrs) {
        const textElem = angular.element('<span>').attr({
                'ng-hide': '$yaoEditable.isEditing'
            }).html('{{' + tAttrs.yaoEditable + '}}').addClass('yao-editable-text'),
              inputElem = angular.element('<input>').attr({
                'ng-model': tAttrs.yaoEditable,
                'ng-show': '$yaoEditable.isEditing',
                'ng-blur': '$yaoEditable.isEditing = false'
              }).addClass('yao-editable-input');
        tElem.append(inputElem).append(textElem);
        return {
            pre: (scope, elem) => {

            },
            post: (scope, elem, attrs, $editable) => {
                elem.on('click', () => {
                    scope.$apply(() => {
                        $editable.isEditing = true;
                        $timeout(() => {
                            inputElem.focus();
                        }, 0);
                        inputElem.focus();
                    });
                });
            }
        };
    }

    let directive = {
        restrict: 'AE',
        scope: true,
        compile: compileFunc,
        controller: EditableController,
        controllerAs: '$yaoEditable'
    };

    return directive;
}

class EditableController {
    constructor() {
        this.isEditing = false;
    }
}

export default EditableDirectiveFactory;