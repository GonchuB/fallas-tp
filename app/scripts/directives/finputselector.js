'use strict';

/**
 * @ngdoc directive
 * @name fallas.directive:fInputSelector
 * @description
 * # fInputSelector
 */
angular.module('fallas')
    .directive('fInputSelector', function ($compile, elements) {
        return {
            template: '<div class="form-group">\n    <label for="select-model">Agregar elemento: </label>\n    <select id="select-model" class="form-control" ng-model="selectedElement"\n            ng-options="element.label for element in elements"\n            ng-change="selectElement()"></select>\n</div>',
            restrict: 'E',
            scope: {
                model: '='
            },
            link: function postLink(scope, element) {

                var inputTypes = {
                    dateTime: 'datetime',
                    checkbox: 'checkbox',
                    select: 'select'
                };

                var inputTemplates = {
                    entregaPactada: '<f-date-time-pick title="{{elementLabels.entregaPactada}}" date="model.entregaPactada.date" time=model.entregaPactada.time></f-date-time-pick>',
                    entregaObtenida: '<f-date-time-pick title="{{elementLabels.entregaObtenida}}" date="model.entregaObtenida.date" time=model.entregaObtenida.time></f-date-time-pick>',
                    entregaCompleta: '<f-checkbox title="{{elementLabels.entregaCompleta}}" model="model.entregaCompleta"></f-checkbox>',
                    entregaCorrecta: '<f-checkbox title="{{elementLabels.entregaCorrecta}}" model="model.entregaCorrecta"></f-checkbox>',
                    entregaDefectuosa: '<f-checkbox title="{{elementLabels.entregaDefectuosa}}" model="model.entregaDefectuosa"></f-checkbox>',
                    disponibilidad: '<f-checkbox title="{{elementLabels.disponibilidad}}" model="model.disponibilidad"></f-checkbox>'
                };

                var elementIds = elements.id;

                var elementLabels = elements.label;

                scope.elements = [
                    {name: elementIds.entregaPactada, type: inputTypes.dateTime, label: elementLabels.entregaPactada, added: false},
                    {name: elementIds.entregaObtenida, type: inputTypes.dateTime, label: elementLabels.entregaObtenida, added: false},
                    {name: elementIds.entregaCompleta, type: inputTypes.checkbox, label: elementLabels.entregaCompleta, added: false},
                    {name: elementIds.entregaCorrecta, type: inputTypes.checkbox, label: elementLabels.entregaCorrecta, added: false},
                    {name: elementIds.entregaDefectuosa, type: inputTypes.checkbox, label: elementLabels.entregaDefectuosa, added: false},
                    {name: elementIds.disponibilidad, type: inputTypes.checkbox, label: elementLabels.disponibilidad, added: false}
                ];

                scope.elementLabels = elementLabels;

                scope.selectedElement = {};

                scope.selectElement = function () {
                    // Add input element if hasn't already been added.
                    var elementKey = _.findKey(elementIds, function (el) {
                        return el === scope.selectedElement.name;
                    });
                    if (!scope.selectedElement.added) {
                        var tElement = angular.element(inputTemplates[elementKey]);
                        element.append($compile(tElement)(scope))
                    }
                }

            }
        };
    });
