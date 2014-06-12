'use strict';

describe('Directive: fDateTimePick', function () {

  // load the directive's module
  beforeEach(module('fallasAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<f-date-time-pick></f-date-time-pick>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fDateTimePick directive');
  }));
});
