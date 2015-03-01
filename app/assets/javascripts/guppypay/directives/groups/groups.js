angular.module('directives.groups', [])
.directive('groups', ['VenmoService', function(VenmoService) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'assets/guppypay/directives/groups/groups.html',
    controller: function($scope, $element) {
      $scope.friends = []
      $scope.groups = []
      $scope.friendsInGroup = [];
      $scope.showFriends = false;

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

      $scope.addFriendToGroup = function(user) {
        $scope.friendsInGroup.unshift(user);
        var index = $scope.friends.indexOf(user);
        $scope.friends.splice(index, 1);
      }

      $scope.test = function() {
        $scope.showFriends = !$scope.showFriends;
      }

      $scope.hideFriends = function() {
        $scope.showFriends = false;
      }      
    },
    link: function(scope, element, attrs) {

    }
  };
}])