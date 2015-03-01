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
    },
    payUser: function(paymate_id, note, amount, audience) {
      var deferred = $q.defer();

      var url = "/api/v1/venmo/pay.json?" +
                    "paymate_id=" + paymate_id +
                    "&note=" + note +
                    "&amount=" + amount +
                    "&audience=" + audience;

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
    },
    chargeGroup: function(paymate_id, note, amount, audience) {
      var deferred = $q.defer();

      var url = "/api/v1/venmo/charge.json?" +
                    "paymate_id=" + paymate_id +
                    "&note=" + note +
                    "&amount=" + amount +
                    "&audience=" + audience;

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