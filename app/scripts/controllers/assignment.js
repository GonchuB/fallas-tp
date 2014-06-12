'use strict';

/**
 * @ngdoc function
 * @name fallasAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fallasAppApp
 */
angular.module('fallasAppApp')
    .controller('AssignmentCtrl', function ($scope) {

        function evaluateModel() {
            console.log($scope.model);
        }

        var characteristics = [
            'Software',
            'Hardware',
            'Insumos',
            'Packaging'
        ];

        $scope.model = {
            characteristics: characteristics,
            characteristic: '',
            elements: {
                entregaPactada: {
                    date: new Date(),
                    time: new Date()
                },
                entregaObtenida: {
                    date: new Date(),
                    time: new Date()
                },
                entregaCompleta: true,
                entregaCorrecta: true,
                entregaDefectuosa: true,
                disponibilidad: true
            }
        };

        $scope.handlers = {
            submit: evaluateModel
        }

    });
