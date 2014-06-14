'use strict';

/**
 * @ngdoc directive
 * @name fallasAppApp.directive:fEvaluateResult
 * @description
 * # fEvaluateResult
 */
angular.module('fallasApp')
    .directive('fEvaluateResult', function () {
        return {
            template: '<div class="panel panel-info">\n    <div class="panel-heading">\n        <h3 class="panel-title">{{result.severity}} - {{result.name}}</h3>\n    </div>\n    <div class="panel-body">\n        {{result.correction}}\n    </div>\n</div>',
            restrict: 'E',
            scope: {
                result: '='
            }
        };
    });
