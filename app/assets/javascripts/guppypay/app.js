angular.module('guppypay', [
  'ui.router',
  'ngRoute',
  'ngResource',
  'ngCookies',
  'controllers.homeCtrl'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl: 'assets/guppypay/views/home.html'
    })
    $urlRouterProvider.otherwise('/');
  }
]);