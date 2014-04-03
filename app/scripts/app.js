'use strict';

var mathFactsApp = angular.module('mathFactsApp', [
  'ngRoute'
]);

mathFactsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).
    when('/stampgame', {
      templateUrl: 'views/gameboard.html',
      controller: 'StampgameCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);