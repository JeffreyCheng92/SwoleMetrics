angular.module('SwoleMetrics')
    .controller('AuthCtrl', function ($scope, $state, Auth) {
      $scope.login = function() {
        Auth.login($scope.user).then(function(){
          $state.go('dashboard');
        });
      };

      $scope.register = function() {
        Auth.register($scope.user).then(function(){
          $state.go('dashboard');
        });
      };
    });
