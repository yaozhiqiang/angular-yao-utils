/**
 * Created by yaoshining on 16/8/15.
 */
import EditableDirectiveFactory from './directives/editable.directive';

let editableModule = angular.module('ngYao.editable', [])
    .directive('yaoEditable', EditableDirectiveFactory);

export default editableModule;