'use strict';

/**
 * @ngdoc directive
 * @name fallas.directive:fSelect
 * @description
 * # fSelect
 */
angular.module('fallas')
    .directive('fSelect', function () {
        return {
            template: '<div class="form-group">\n    <label for="select-model">{{title}}</label>\n    <select id="select-model" class="form-control" ng-model="model" ng-options="item for item in options"></select>\n</div>',
            restrict: 'E',
            scope: {
                options: '=',
                model: '=',
                title: '@'
            }
        };
    });
