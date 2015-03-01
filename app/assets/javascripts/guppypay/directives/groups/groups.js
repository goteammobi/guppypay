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
    },
    link: function(scope, element, attrs) {

    }
  };
}])