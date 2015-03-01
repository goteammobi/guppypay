angular.module('directives.groups', [])
.directive('groups', ['VenmoService', function(VenmoService) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'assets/guppypay/directives/groups/groups.html',
    controller: function($scope, $element) {
      $scope.friends = []

      VenmoService.getFriends()
      .then(function(response) {
        $scope.friends = response.data;
        console.log($scope.friends);
      });

      $scope.payUser = function(user) {
        VenmoService.payUser(user.id, "Venmo API Testing", 0.01, "friends")
        .then(function(response) {
          console.log(response);
        })
      };
    },
    link: function(scope, element, attrs) {

    }
  };
}])