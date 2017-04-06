class Dataservice {
  constructor ($http, logger) {
    this.$http = $http
    this.logger = logger
  }

  getFeed (username) {
    return this.$http.get('http://localhost:8090/api/users/@' + username + '/feed')
    .then(function successCallback (response) {
      console.log(response.data)
      console.log('success')
      return response.data.results
    }, function errorCallback (error) {
      this.logger.error('failed, jk', error.data)
    })
  }
}
