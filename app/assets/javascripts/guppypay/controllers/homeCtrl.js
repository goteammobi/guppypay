angular.module('controllers.homeCtrl', [])
.controller('HomeCtrl', ['$scope', '$window', '$http', function($scope, $window, $http) {
  $scope.venmoLogin = function() {
    var url = "https://api.venmo.com/v1/oauth/authorize?client_id=2408&scope=make_payments%20access_profile%20access_email%20access_phone%20access_balance%20access_friends&response_type=code";
    $window.location.href = url;
  }

  $scope.venmoFriends = function() {
    var url = "/api/v1/venmo/friends.json";

    req = {
      method: 'GET',
      url: url
    }

    $http(req)
    .success(function(response) {
      console.log(response);
    })
  }
}]);