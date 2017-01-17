angular.module('account.router', ['account.controller'])

.config(function($stateProvider) {

  $stateProvider
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: './areas/account/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

})