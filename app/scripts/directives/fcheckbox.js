'use strict';

/**
 * @ngdoc directive
 * @name fallasAppApp.directive:fCheckbox
 * @description
 * # fCheckbox
 */
angular.module('fallasAppApp')
    .directive('fCheckbox', function () {
        return {
            template: '<div class="form-group checkbox">\n    <label>\n        <input type="checkbox" ng-model="model"> {{title}}\n    </label>\n</div>',
            restrict: 'E',
            scope: {
                model: '=',
                title: '@'
            },
            link: function postLink(scope) {
                scope.model = true;
            }
        };
    });
