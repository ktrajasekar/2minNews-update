// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })

  .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html'
        }
      }
    })
    .state('app.home', {
      url: '/home/:name',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        }
      }
    })
    .state('app.postdetails', {
      url: '/postdetails/:postID',
      views: {
        'menuContent': {
          templateUrl: 'templates/postpage.html',
            controller: 'postPage'
        }
      }
    })
    .state('app.devicestatus', {
      url: '/devicestatus',
      views: {
        'menuContent': {
          templateUrl: 'templates/devicestatus.html',
            controller: 'deviceStatusCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home/posts');
})
.factory('servicesreturn', function($http){
  var apiURL = 'http://flashbulb.in/wp-json/wp/v2/' ;
  return {
    categoriesData: function(){
            return $http.get(apiURL + 'categories');
         }
  }
});
