angular.module('SwoleMetrics')
  .directive("exerciseItem", function() {
    return {
      restrict: "E",
      scope: {
        exercise: "="
      },
      templateUrl: 'directives/dashboard/exercise_item.html'
    };
  });
