export const dataservice = class {
  constructor ($http, $log) {
    this.$http = $http
    // this.logger = logger
  }

  getFeed (username) {
    return this.$http.get('http://localhost:8090/api/users/@' + username + '/feed')
    .then((response) => {
      console.log(response.data)
      console.log('success')
      return response.data
    }, (error) => {
      this.logger.error('failed, jk', error.data)
    })
  }
}
