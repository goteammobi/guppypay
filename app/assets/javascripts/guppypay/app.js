angular.module('guppypay', [
  'ui.router',
  'ngRoute',
  'ngResource',
  'ngCookies',
  'controllers.homeCtrl',
  'directives.groups',
  // 'directives.modal',
  'services.venmoService',
  'services.groupService'
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
    .state('groups', {
      url: '/groups',
      templateUrl: 'assets/guppypay/views/groups.html'
    })
    $urlRouterProvider.otherwise('/');
  }
]);