'use strict';

angular.module('myApp.welcomeView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/welcomeView', {
        templateUrl: 'welcomeView/welcomeView.html',
        controller: 'WelcomeViewCtrl'
      });
    }])

    .controller('WelcomeViewCtrl', [function() {

    }]);