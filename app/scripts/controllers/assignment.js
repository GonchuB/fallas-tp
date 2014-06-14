'use strict';

/**
 * @ngdoc function
 * @name fallas.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fallas
 */
angular.module('fallas')
    .controller('AssignmentCtrl', function ($scope, frame, characteristics) {

        function evaluateModel() {
            $scope.model.result = frame.evaluateFrames(_.values(frame.definedFrames), $scope.model.elements);
        }

        $scope.model = {
            characteristics: characteristics,
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
