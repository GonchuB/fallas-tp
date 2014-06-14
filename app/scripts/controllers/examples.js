'use strict';

/**
 * @ngdoc function
 * @name fallas.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fallas
 */
angular.module('fallas')
    .controller('ExamplesCtrl', function ($scope, frame, characteristics) {

        function evaluateModel() {
            $scope.model.example1.result = frame.evaluateFrames(_.values(frame.definedFrames), $scope.model.example1.elements);
            $scope.model.example2.result = frame.evaluateFrames(_.values(frame.definedFrames), $scope.model.example2.elements);
            $scope.model.example3.result = frame.evaluateFrames(_.values(frame.definedFrames), $scope.model.example3.elements);
            $scope.model.example4.result = frame.evaluateFrames(_.values(frame.definedFrames), $scope.model.example4.elements);
        }

        var example1 = {
            elements: {
                characteristic: characteristics[3],
                entregaCorrecta: false
            }
        };

        var example2 = {
            elements: {
                characteristic: characteristics[1],
                entregaDefectuosa: true
            }
        };

        var example3 = {
            elements: {
                characteristic: characteristics[2],
                disponibilidad: false
            }
        };

        var example4 = {
            elements: {
                characteristic: characteristics[0],
                entregaPactada: {
                    date: new Date(2014, 4, 5),
                    time: new Date()
                },
                entregaObtenida: {
                    date: new Date(2014, 5, 6),
                    time: new Date()
                }
            }
        };

        $scope.model = {
            example1: example1,
            example2: example2,
            example3: example3,
            example4: example4
        };

        evaluateModel();

    });
