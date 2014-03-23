'use strict';

describe('Controller: StampgameCtrl', function () {

  // load the controller's module
  beforeEach(module('mathFactsApp'));

  var StampgameCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StampgameCtrl = $controller('StampgameCtrl', {
      $scope: scope
    });
  }));

  it('should set some initial values on the scope', function () {
    expect(scope.gameName).toBe('Stamp Game');
    expect(scope.message).toBeDefined();
  });
});
