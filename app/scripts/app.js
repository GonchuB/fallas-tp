'use strict';

/**
 * @ngdoc overview
 * @name fallasAppApp
 * @description
 * # fallasAppApp
 *
 * Main module of the application.
 */
angular
    .module('fallasAppApp', [
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
            .otherwise({
                redirectTo: '/'
            });
    });
