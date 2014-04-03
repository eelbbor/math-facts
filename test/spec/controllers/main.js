'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('mathFactsApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should set some initial values on the scope', function() {
    expect(scope.title).toBe('Main Page');
    expect(scope.message).toBeDefined();
  });
});