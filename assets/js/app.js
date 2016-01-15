var app = angular.module('ideros', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: "",
      templateUrl: "../views/index.html",
      controller : "GithubController",
    })
    .state('project', {
      url: "project/:id",
      templateUrl: "../views/project.html",
      controller : "GithubController",
    })
})
