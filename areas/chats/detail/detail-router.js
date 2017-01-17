angular.module('detail.router', ['detail.controller', 'chats.services'])

.config(function($stateProvider) {

  $stateProvider
  .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: './areas/chats/detail/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

})