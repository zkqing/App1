angular.module('main.router', ['main.controller'])

.config(function($stateProvider) {

  $stateProvider
  .state('tab.main', {
      url: '/main',
      views: {
        'tab-main': {
          // + '?datestamp=' + (new Date()).getTime()增加动态时间戳
          templateUrl: './areas/main/tab-zepto26.html'+ '?datestamp=' + (new Date()).getTime(),
          controller: 'mainCtrl'
        }
      }
    })

})