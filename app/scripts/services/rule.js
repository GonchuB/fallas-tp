'use strict';

/**
 * @ngdoc service
 * @name fallasApp.rule
 * @description
 * # rule
 * Factory in the fallasApp.
 */
angular.module('fallasApp')
    .factory('rule', function (characteristics) {

        var definedRules = {
            incompleteSoftware: new Rule('rule', ['entregaCompleta', 'characteristic'], function (specific) {
                return specific.entregaCompleta === false && specific.characteristic === characteristics[0];
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
