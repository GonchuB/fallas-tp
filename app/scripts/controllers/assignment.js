'use strict';

/**
 * @ngdoc function
 * @name fallasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fallasApp
 */
angular.module('fallasApp')
    .controller('AssignmentCtrl', function ($scope, rule, frame, characteristics) {

        function evaluateModel() {
            var rule1 = rule.create('rule', ['age', 'height'], function (specific) {
                return specific.age > 2 && specific.height > 10;
            });

            var rules = [
                rule1
            ];

            var results = [

            ];

            var frameInstance = frame.create('frame', 'bad', rules, 'do sth');

            $scope.model = {
                correction: ''
            };

            var situation = {age: 5, height: 12};

            _.each(rules, function (ruleInstance) {
                results.push(ruleInstance.evaluate(situation));
            });

            $scope.model.correction = frameInstance.evaluate(situation) || 'No frame was matched';
        }

        $scope.model = {
            characteristics: characteristics,
            characteristic: '',
            correction: '',
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
        };

    });
