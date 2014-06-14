'use strict';

/**
 * @ngdoc service
 * @name fallas.frame
 * @description
 * # frame
 * Factory in the fallas.
 */
angular.module('fallas')
    .factory('frame', function (rule) {

        var rules = {
            wrongPackaging: [
                rule.definedRules.wrongPackaging
            ],
            badQualityHardware: [
                rule.definedRules.badQualityHardware
            ],
            officeNoAvailability: [
                rule.definedRules.officeNoAvailability
            ],
            delayedSoftware: [
                rule.definedRules.delayedSoftware
            ]
        };

        var definedFrames = {
            wrongPackaging: new Frame('Proveedor de elementos de packaging con entrega incorrecta', 'MEDIA', rules.wrongPackaging, 'La entrega no satisface las especificaciones técnicas del pedido.'),
            badQualityHardware: new Frame('Proveedor de hardware con calidad defectuosa', 'GRAVE', rules.badQualityHardware, 'Los items entregados no satisfacen la evaluación técnica del requiriente.'),
            officeNoAvailability: new Frame('Proveedor de insumos de oficina sin disponibilidad', 'MEDIA', rules.officeNoAvailability, 'El proveedor no posee disponibilidad para satisfacer el pedido.'),
            delayedSoftware: new Frame('Proveedor de software con entrega atrasada', 'GRAVE', rules.delayedSoftware, 'La entrega se realiza posterior al plazo de entrega.')
        };

        function evaluateFrames(frames, situation) {
            var result = null;
            _.forEach(frames, function (one) {
                result = one.evaluate(situation) || result;
            });
            return result;
        }

        function Frame(name, severity, rules, correction) {

            function evaluate(situation) {
                var matchesRules = _.every(this.rules, function (rule) {
                    return rule.evaluate(situation);
                });
                if (matchesRules) {
                    return _.pick(this, 'name', 'severity', 'correction');
                }
            }

            _.assign(this, {
                name: name,
                severity: severity,
                rules: rules,
                correction: correction,
                evaluate: evaluate
            });

            return this;

        }

        return {create: Frame, definedFrames: definedFrames, evaluateFrames: evaluateFrames};

    })
;
