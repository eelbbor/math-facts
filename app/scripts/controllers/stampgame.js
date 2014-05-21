'use strict';

angular.module('mathFactsApp').controller('StampgameCtrl', ['$scope',
  function($scope) {
    $scope.gametemplate = 'stampgame';
    $scope.gameName = 'Stamp Game';
    $scope.message = "Let's Do Some Stamp Math!";
  }
]);