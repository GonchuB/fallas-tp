'use strict';

/**
 * @ngdoc directive
 * @name fallas.directive:fEvaluateExample
 * @description
 * # fEvaluateExample
 */
angular.module('fallas')
    .directive('fEvaluateExample', function () {
        return {
            template: '<div class="row evaluate-example">\n    <h4>{{title}}</h4>\n    <ul class="list-group">\n        <li class="list-group-item" ng-repeat="(key, value) in elements">{{key}} - {{value}}</li>\n    </ul>\n    <div class="panel panel-info">\n        <div class="panel-heading">\n            <h3 class="panel-title">{{result.severity}} - {{result.name}}</h3>\n        </div>\n        <div class="panel-body">\n            {{result.correction}}\n        </div>\n    </div>\n</div>',
            restrict: 'E',
            scope: {
                elements: '=',
                title: '@',
                result: '='
            }
        };
    });