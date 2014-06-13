'use strict';

/**
 * @ngdoc function
 * @name fallasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fallasApp
 */
angular.module('fallasApp')
    .controller('AssignmentCtrl', function ($scope, frame, characteristics) {

        function evaluateModel() {
            $scope.model.correction = frame.definedFrames.incompleteSoftware.evaluate($scope.model.elements) || 'No hay corrección para esta situación.';
        }

        $scope.model = {
            characteristics: characteristics,
            correction: '',
            elements: {
                characteristic: '',
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
        };

    });
