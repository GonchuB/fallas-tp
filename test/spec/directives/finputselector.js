'use strict';

describe('Directive: fInputSelector', function () {

  // load the directive's module
  beforeEach(module('fallasAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<f-input-selector></f-input-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fInputSelector directive');
  }));
});
