app.service('GithubService', function ($http) {
  return ({
    getProjects: function () {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/users/elastic/repos'
      })
    },
    getCommits: function (repository) {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/repos/elastic/'+repository+'/commits'
      })
    }
  })
})
