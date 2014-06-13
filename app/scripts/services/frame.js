'use strict';

/**
 * @ngdoc service
 * @name fallasApp.frame
 * @description
 * # frame
 * Factory in the fallasApp.
 */
angular.module('fallasApp')
    .factory('frame', function (rule) {

        var rules = {
            incompleteSoftware: [
                rule.definedRules.incompleteSoftware
            ]
        };

        var definedFrames = {
            incompleteSoftware: new Frame('Frame', 'BAD', rules.incompleteSoftware, 'Entrega de software incompleta.')
        };

        function Frame(name, severity, rules, correction) {

            function evaluate(situation) {
                var matchesRules = _.every(this.rules, function (rule) {
                    return rule.evaluate(situation);
                });
                if (matchesRules) {
                    return this.correction;
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

        return {create: Frame, definedFrames: definedFrames};

    })
;
