angular.module('SwoleMetrics')
  .controller('ProfileCtrl', ['$scope', 'Auth',
    function ($scope, Auth) {
      $scope.user = JSON.parse(localStorage.getItem('currentUser'));
  }
]);
