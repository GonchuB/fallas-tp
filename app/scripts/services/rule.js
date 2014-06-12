'use strict';

/**
 * @ngdoc service
 * @name fallasApp.rule
 * @description
 * # rule
 * Factory in the fallasApp.
 */
angular.module('fallasApp')
    .factory('rule', function () {

        function Rule(name, slots, procedure) {

            function evaluate(situation) {
                if (this.procedure(situation)) {
                    return true;
                } else {
                    return false;
                }
            }

            _.assign(this, {
                name: name,
                slots: slots,
                procedure: procedure,
                evaluate: evaluate
            });

            return this;

        }

        return {create: Rule};

    });
