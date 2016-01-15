app.controller('GithubController', function ($scope, GithubService, $rootScope, $stateParams, $location) {

  $rootScope.projects = [];
  $scope.project;
  $scope.limit = 20;

  GithubService.getProjects().success(function (data) {
    data.sort(function(a, b) {
      return a.stargazers_count - b.stargazers_count;
    });
    $rootScope.projects = data.reverse();
    if ($stateParams.id) {
      $scope.project = data[getId($stateParams.id)];
      GithubService.getCommits($scope.project.name).success(function (data) {
        $scope.commits = data;
      })
    }
  })

  $rootScope.changeArrow = function ($index) {
    $rootScope.selectedIndex = $index;
  };

  var getId = function (param) {
    var id = param.match(/\d/g);
    return id = id.join("");
  }

})
