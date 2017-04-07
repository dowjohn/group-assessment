export const buttonservice = class {
  constructor ($http) {
    this.$http = $http
  }

  // TODO I will fix this later
  validateCreds (credentials) {
    this.$http.post('http://localhost:8090/api/validate/login')
    .then((response) => {
      if (response.data === true) {
        console.log('freedommmmmmm')
        this.credentials.username = this.userCreds
        this.credentials.password = this.passCreds
      } else {
        console.log('nah dude')
      }
      console.log(response)
    }, (response) => {
      console.log(response)
    })
  }

  followUser (username) {
    return this.$http.post('localhost:8090/api/users/@' + username + '/follow')
    .then((response) => {
      console.log(response.data)
      console.log('success')
      return response.data
    }, (error) => {
      this.logger.error('failed', error.data)
    })
  }

  unfollowUser (username) {
    return this.$http.post('http://localhost:8090/api/users/@' + username + '/unfollow')
    .then((response) => {
      console.log(response.data)
      console.log('success')
      return response.data
    }, (error) => {
      this.logger.error('failed', error.data)
    })
  }

  likeTweet (tweetId, credentials) {
    // need to do something with credentials
    return this.$http.post('http://localhost:8090/api/tweets/' + tweetId + '/like', credentials)
    .then((response) => {
      console.log(response.data)
      console.log('success')
      return response.data
    }, (error) => {
      this.logger.error('failed', error.data)
    })
  }

  deleteUser (username, credentials) {
      // need to do something with credentials
    return this.$http.delete('http://localhost:8090/api/@' + username, credentials)
      .then((response) => {
        console.log(response.data)
        console.log('success')
        return response.data
      }, (error) => {
        this.logger.error('failed', error.data)
      })
  }

  patchUser (username, credentials, profile) {
    return this.$http.patch('http://localhost:8090/api', credentials, profile)
    .then((response) => {
      console.log(response.data)
      console.log('success')
      return response.data
    }, (error) => {
      this.logger.error('failed', error.data)
    })
  }

  deleteTweet (tweetId, credentials) {
    return this.$http.delete('http://localhost:8090/api/' + tweetId)
    .then((response) => {
      console.log(response.data)
      console.log('success')
      return response.data
    }, (error) => {
      this.logger.error('failed', error.data)
    })
  }
}
