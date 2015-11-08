angular.module('SwoleMetrics')
  .controller('NavCtrl', ['$scope', 'Auth', '$state',
    function($scope, Auth, $state){
      $scope.signedIn = Auth.isAuthenticated;

      $scope.logout = Auth.logout;
      
      $scope.$on('devise:new-registration', function (e, user){
        $scope.user = user;
      });

      $scope.$on('devise:login', function (e, user){
        $scope.user = user;
      });

      $scope.$on('devise:logout', function (e, user){
        debugger
        $scope.user = {};
        $state.go('login');
      });
    }
]);
