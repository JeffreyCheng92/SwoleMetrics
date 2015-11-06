angular.module('SwoleMetrics', [
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      /**
       * Routes and States
       */
      $stateProvider
          .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'dashboard.html',
              controller: 'DashboardCtrl'
          });

      // default fall back route
      $urlRouterProvider.otherwise('/dashboard');

      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true);
    });
