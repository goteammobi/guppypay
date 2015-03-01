angular.module('directives.groups', [])
.directive('groups', ['VenmoService', 'GroupService', function(VenmoService, GroupService) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'assets/guppypay/directives/groups/groups.html',
    controller: function($scope, $element) {
      $scope.friends = []
      $scope.groups = []
      $scope.friendsInGroup = [];
      $scope.showFriends = false;
      $scope.currentGroup = "";
      $scope.showModal = false;

      VenmoService.getFriends()
      .then(function(response) {
        $scope.friends = response.data;
        console.log($scope.friends);
      });

      $scope.chargeGroup = function(note, amount) {
        for(index in $scope.friendsInGroup) {
          VenmoService.chargeGroup($scope.friendsInGroup[index].id, note, amount, "friends", $scope.friendsInGroup.length)
          .then(function(response) {
            console.log(response);
          })
        }
        $scope.showModal = false;
      }

      GroupService.getGroups()
      .then(function(response) {
        $scope.groups = response.groups
      })

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

      $scope.showFriendsFunc = function(group) {
        $scope.showFriends = true;
        $scope.currentGroup = group;
        $scope.friendsInGroup = [];
      }

      $scope.hideFriends = function() {
        $scope.showFriends = false;
      }      
    },
    link: function(scope, element, attrs) {

    }
  };
}])