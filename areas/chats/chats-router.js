angular.module('chats.router', ['chats.controller', 'chats.services'])

.config(function($stateProvider) {

  $stateProvider
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: './areas/chats/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

})