import styles from './tweet.styles'
import templateUrl from './tweet.template'

const controller = class {
  static $inject = ['$http']
  constructor($http) {
    this.$http = $http;
  }
  styles = styles
  username = 'string'
  password = 'string'
  content = ''

  makeTweet() {
    return {
      content: this.content,
      credentials: {
        password: this.password,
        username: this.username
      }
    }
  }

  postTweet () {
    let tweety = this.$http.post('http://localhost:8090/api/tweets', this.makeTweet()).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log('success')
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed')
    })
  }
}

export const tweet = {
  templateUrl,
  controller,
  controllerAs: 'tweet',
  bindings: {
    // value: '<',
  }
}
