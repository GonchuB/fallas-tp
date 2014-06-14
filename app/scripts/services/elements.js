'use strict';

/**
 * @ngdoc service
 * @name fallas.elements
 * @description
 * # elements
 * Value in the fallas.
 */
angular.module('fallas')
    .constant('elements', {
        id: {
            entregaPactada: 'FECHA_ENTREGA_PACTADA',
            entregaObtenida: 'FECHA_ENTREGA_OBTENIDA',
            entregaCompleta: 'ENTREGA_COMPLETA',
            entregaCorrecta: 'ENTREGA_CORRECTA',
            entregaDefectuosa: 'ENTREGA_DEFECTUOSA',
            disponibilidad: 'DISPONIBILIDAD'
        },
        label: {
            entregaPactada: 'Fecha de entrega pactada',
            entregaObtenida: 'Fecha de recibo de entrega',
            entregaCompleta: 'Entrega completa',
            entregaCorrecta: 'Entrega correcta',
            entregaDefectuosa: 'Entrega defectuosa',
            disponibilidad: 'Disponibilidad'
        }
    });
