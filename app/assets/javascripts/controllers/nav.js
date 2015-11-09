angular.module('SwoleMetrics')
  .controller('NavCtrl', ['$scope', 'Auth', '$state',
    function($scope, Auth, $state){
      $scope.signedIn = Auth.isAuthenticated;

      $scope.logout = Auth.logout;

      if (localStorage.getItem('currentUser')) {
        $scope.user = JSON.parse(localStorage.getItem('currentUser'));
      }

      $scope.$on('devise:new-registration', function (e, user){
        $scope.user = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
      });

      $scope.$on('devise:login', function (e, user){
        $scope.user = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
      });

      $scope.$on('devise:logout', function (e, user){
        $scope.user = {};
        localStorage.clear();
        $state.go('login');
      });
    }
]);
