angular.module('tabs.router', ['tabs.controller'])

.config(function($stateProvider) {

    $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,   //设置路由为抽象路由
    templateUrl: './areas/tabs/tabs.html'
  })

})