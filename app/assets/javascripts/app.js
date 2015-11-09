angular.module('SwoleMetrics', [
        'ui.router',
        'templates',
        'Devise'
    ])
    .config(function ($stateProvider,
                      $urlRouterProvider,
                      $locationProvider
                    ) {
      /**
       * Routes and States
       */
      $stateProvider
          .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'dashboard/dashboard.html',
              controller: 'DashboardCtrl',
              onEnter: ['$state', '$timeout', 'Auth',
                function($state, $timeout, Auth) {
                  if (localStorage.getItem('currentUser')) {
                    Auth._currentUser = JSON.parse(localStorage.getItem('currentUser'));
                  } else if (Auth._currentUser == null) {
                    $timeout(function() {
                      $state.go('login');
                    }, 0);
                  }
                }]
          })
          .state('login', {
            url: '/login',
            templateUrl: 'auth/login.html',
            controller: 'AuthCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth) {
              if (localStorage.getItem('currentUser')) {
                Auth._currentUser = JSON.parse(localStorage.getItem('currentUser'));
              }
              if (Auth._currentUser) {
                $state.go('dashboard')
              }
            }]
          })
          .state('register', {
            url: '/register',
            templateUrl: 'auth/register.html',
            controller: 'AuthCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth) {
              if (localStorage.getItem('currentUser')) {
                Auth._currentUser = JSON.parse(localStorage.getItem('currentUser'));
              }
              if (Auth._currentUser) {
                $state.go('dashboard')
              }
            }]
          })
          .state('profile', {
            url: '/profile',
            templateUrl: 'user/profile.html',
            controller: 'ProfileCtrl',
            onEnter: ['$state', '$timeout', 'Auth',
              function($state, $timeout, Auth) {
                if (localStorage.getItem('currentUser')) {
                  Auth._currentUser = JSON.parse(localStorage.getItem('currentUser'));
                } else if (Auth._currentUser == null) {
                  $timeout(function() {
                    $state.go('login');
                  }, 0);
                }
              }]
          })

      // default fall back route
      $urlRouterProvider.otherwise('/dashboard');

      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true);
    });
