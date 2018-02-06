// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/Login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.logar', {
    url: '/logar',
    views:{
    'menuContent': {
    templateUrl: 'templates/logar.html',
    controller: 'LogarCtrl'
      }
    }
  })

  .state('app.grupos', {
    url: '/grupos',
    views:{
    'menuContent': {
    templateUrl: 'templates/grupos.html',
    controller: 'GruposCtrl'
      }
    }
  })

  .state('app.chat', {
    url: '/chat',
    views:{
    'menuContent': {
    templateUrl: 'templates/chat.html',
    controller: 'ChatCtrl'
      }
    }
  })

  .state('app.aconselhamento', {
    url: '/aconselhamento',
    views:{
    'menuContent': {
    templateUrl: 'templates/aconselhamento.html',
    controller: 'AconselhamentotCtrl'
      }
    }
  })

  .state('app.fique-por-dentro', {
    url: '/fique-por-dentro',
    views:{
    'menuContent': {
    templateUrl: 'templates/fique-por-dentro.html',
    controller: 'FiquePorDentrotCtrl'
      }
    }
  })

  .state('app.new-khalo', {
    url: '/new-khalo',
    views:{
    'menuContent': {
    templateUrl: 'templates/new-khalo.html',
    controller: 'NewkhaloCtrl'
      }
    }
  })

  .state('app.news-bob', {
    url: '/news-bob',
    views:{
    'menuContent': {
    templateUrl: 'templates/news-bob.html',
    controller: 'NewsBobCtrl'
      }
    }
  })

  .state('app.news-dear', {
    url: '/news-dear',
    views:{
    'menuContent': {
    templateUrl: 'templates/news-dear.html',
    controller: 'NewsDearCtrl'
      }
    }
  })

  .state('app.sobre-nos', {
    url: '/sobre-nos',
    views:{
    'menuContent': {
    templateUrl: 'templates/sobre-nos.html',
    controller: 'SobreNosCtrl'
      }
    }
  })

  //login que veio com o ionic NÂO DESCOMENTAR//
  // .state('app.login', {
  //   url: '/login',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/login.html'
  //     }
  //   }
  // });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
