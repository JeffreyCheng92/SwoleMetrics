angular.module('SwoleMetrics')
  .controller('DashboardCtrl', ['$scope', 'Auth', 'profile',
    function ($scope, Auth, profile) {

      profile().then(function(user_data) {
        $scope.exercises = user_data.exercises;
      });

      $scope.user = JSON.parse(localStorage.getItem('currentUser'));
  }
]);
