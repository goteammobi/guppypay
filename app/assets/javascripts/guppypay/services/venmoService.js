angular.module('services.venmoService', [])
.factory('VenmoService', ['$q', '$http', function($q, $http) {
  return {
    getFriends: function() {
      var deferred = $q.defer();

      var url = "/api/v1/venmo/friends.json";

      req = {
        method: 'GET',
        url: url
      }

      $http(req)
      .success(function(response) {
        console.log(response);
        deferred.resolve(response);
      })
      
      return deferred.promise;
    }
  };
}]);