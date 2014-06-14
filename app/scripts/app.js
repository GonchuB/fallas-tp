'use strict';

/**
 * @ngdoc overview
 * @name fallas
 * @description
 * # fallas
 *
 * Main module of the application.
 */
angular
    .module('fallas', [
        'ngAnimate',
        'ngRoute',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/assignment', {
                templateUrl: 'views/assignment.html',
                controller: 'AssignmentCtrl'
            })
            .when('/examples', {
              templateUrl: 'views/examples.html',
              controller: 'ExamplesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
