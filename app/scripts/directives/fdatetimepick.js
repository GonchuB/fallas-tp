'use strict';

/**
 * @ngdoc directive
 * @name fallasAppApp.directive:fDateTimePick
 * @description
 * # fDateTimePick
 */
angular.module('fallasAppApp')
    .directive('fDateTimePick', function () {
        return {
            template: '<div class="form">\n    <div class="form-title">\n        {{title}}\n    </div>\n    <div class="form-group date-time">\n        <div class="input-group date">\n            <input type="text" class="form-control" datepicker-popup="{{format}}" ng-model="date" is-open="opened"\n                   min-date="minDate" max-date="\'2015-06-22\'" datepicker-options="dateOptions"\n                   date-disabled="disabled(date, mode)" close-text="Close"/>\n    <span class="input-group-btn">\n        <button type="button" class="btn btn-default" ng-click="open($event)">\n            <i class="glyphicon glyphicon-calendar"></i>\n        </button>\n    </span>\n        </div>\n        <div class="input-group">\n            <timepicker ng-model="time"\n                        hour-step="hstep"\n                        minute-step="mstep"\n                        show-meridian="ismeridian">\n            </timepicker>\n        </div>\n    </div>\n</div>',
            restrict: 'E',
            scope: {
                date: '=',
                time: '=',
                title: '@'
            },
            link: function postLink(scope) {

                /*
                 * Behavior.
                 */

                scope.today = function () {
                    scope.date = new Date();
                };

                scope.clear = function () {
                    scope.date = null;
                    scope.time = null;
                };

                // Disable weekend selection
                scope.disabled = function (date, mode) {
                    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
                };

                scope.toggleMin = function () {
                    scope.minDate = scope.minDate ? null : new Date(0);
                };

                scope.open = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    scope.opened = true;
                };

                scope.toggleMode = function () {
                    scope.ismeridian = !scope.ismeridian;
                };

                scope.update = function () {
                    var d = new Date();
                    d.setHours(14);
                    d.setMinutes(0);
                    scope.time = d;
                };

                /*
                 * Options.
                 */

                scope.time = new Date();

                scope.hstep = 1;
                scope.mstep = 15;

                scope.options = {
                    hstep: [1, 2, 3],
                    mstep: [1, 5, 10, 15, 25, 30]
                };

                scope.ismeridian = true;

                scope.dateOptions = {
                    formatYear: 'yy',
                    startingDay: 1
                };

                scope.initDate = new Date('2016-15-20');

                var formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd-MM-yyyy', 'shortDate'];
                scope.format = formats[2];

                /*
                 * Execution.
                 */

                scope.toggleMin();
                scope.today();
            }
        };
    });
