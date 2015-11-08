angular.module('SwoleMetrics', [
        'ui.router',
        'templates',
        'Devise',
        // 'SwoleMetrics.authentication'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      /**
       * Routes and States
       */
      $stateProvider
          .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'dashboard.html',
              controller: 'DashboardCtrl',
              onEnter: ['$state', 'Auth', function($state, Auth) {
                if (Auth._currentUser == null) {
                  $state.go('login')
                }
              }]
          })
          .state('login', {
            url: '/login',
            templateUrl: 'auth/login.html',
            controller: 'AuthCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth) {
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
              if (Auth._currentUser) {
                $state.go('dashboard')
              }
            }]
          });

      // default fall back route
      $urlRouterProvider.otherwise('/dashboard');

      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true);
    });

// angular.module('SwoleMetrics.authentication', [])
//   .config(function($httpProvider){
//       // Intercepts every http request.  If the response is success, pass it through.  If the response is an
//       // error, and that error is 401 (unauthorised) then the user isn't logged in, redirect to the login page
//   var interceptor = function($q, $location, $rootScope) {
//     return {
//       'responseError': function(rejection) {
//         if (rejection.status == 401) {
//           // $rootScope.$broadcast('event:unauthorized');
//           $location.path('/login')
//           return rejection;
//         }
//         return $q.reject(rejection);
//       }
//     };
//   };
//   $httpProvider.interceptors.push(interceptor);
// });
