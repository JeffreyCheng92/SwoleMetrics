angular.module('SwoleMetrics')
  .controller('ProfileCtrl', ['$scope', 'profile',
    function ($scope, profile) {
      profile().then(function(user_data) {
        $scope.user = user_data;
      })
  }
]);
