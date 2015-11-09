angular.module('SwoleMetrics')
  .controller('DashboardCtrl', ['$scope', 'Auth',
    function ($scope, Auth) {
      $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
      $scope.user = JSON.parse(localStorage.getItem('currentUser'));
  }
]);
