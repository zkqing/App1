angular.module('router', ['tabs.router','dash.router','main.router','account.router','chats.router','detail.router'])

.config(function($stateProvider,$urlRouterProvider) {

   
  // 如果以上路由都匹配不成功那么会将路径重定向
  $urlRouterProvider.otherwise('/tab/dash');

});