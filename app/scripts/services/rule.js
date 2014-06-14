'use strict';

/**
 * @ngdoc service
 * @name fallas.rule
 * @description
 * # rule
 * Factory in the fallas.
 */
angular.module('fallas')
    .factory('rule', function (characteristics) {

        var definedRules = {
            wrongPackaging: new Rule('rule', ['entregaCorrecta', 'characteristic'], function (specific) {
                return specific.entregaCorrecta === false && specific.characteristic === characteristics[3];
            }),
            badQualityHardware: new Rule('rule', ['entregaDefectuosa', 'characteristic'], function (specific) {
                return specific.entregaDefectuosa === true && specific.characteristic === characteristics[1];
            }),
            officeNoAvailability: new Rule('rule', ['disponibilidad', 'characteristic'], function (specific) {
                return specific.disponibilidad === false && specific.characteristic === characteristics[2];
            }),
            delayedSoftware: new Rule('rule', ['entregaPactada', 'entregaObtenida', 'characteristic'], function (specific) {
                // Get dates.
                var exectedDateTime = specific.entregaPactada.date;
                var receivedDateTime = specific.entregaObtenida.date;

                // Set time of day.
                exectedDateTime.setHours(specific.entregaPactada.time.getHours(), specific.entregaPactada.time.getMinutes());
                receivedDateTime.setHours(specific.entregaObtenida.time.getHours(), specific.entregaObtenida.time.getMinutes());

                return receivedDateTime > exectedDateTime && specific.characteristic === characteristics[0];
            })
        };

        function Rule(name, slots, procedure) {

            function hasSlots(situation, slots) {
                return _.every(slots, function (slot) {
                    return _.has(situation, slot);
                });
            }

            function evaluate(situation) {
                return hasSlots(situation, this.slots) && this.procedure(situation);
            }

            _.assign(this, {
                name: name,
                slots: slots,
                procedure: procedure,
                evaluate: evaluate
            });

            return this;

        }

        return {create: Rule, definedRules: definedRules};

    });
