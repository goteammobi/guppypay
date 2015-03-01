angular.module('services.groupService', [])
.factory('GroupService', ['$q', '$http', function($q, $http) {
  return {
    getGroups: function() {
      var deferred = $q.defer();

      var url = "/api/v1/groups.json";

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