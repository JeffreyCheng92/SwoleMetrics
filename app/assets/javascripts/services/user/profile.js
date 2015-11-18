angular.module('SwoleMetrics')
  .factory('profile', ['Auth', '$http', '$q', function(Auth, $http, $q) {
    return function() {
      var d = $q.defer();
      $http.get('/users/' + Auth._currentUser.id)
        .then(successFn, errorFn)

      return d.promise;

      function successFn(data) {
        return d.resolve(data.data);
      };

      function errorFn(err) {
        return d.reject(err);
      };
    };
  }]);
