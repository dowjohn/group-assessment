import styles from './tweet.styles'
import templateUrl from './tweet.template'

const controller = class {
  static $inject = ['$http']
  constructor ($http) {
    this.$http = $http
  }
  styles = styles
  password = 'string'
  content = ''

  makeTweet () {
    let contentOfHere = this.content
    this.content = ''
    return {
      content: contentOfHere,
      credentials: {
        password: this.password,
        username: this.user
      }
    }
  }

  postTweet () {
    this.$http.post('http://10.1.1.132:8090/api/tweets', this.makeTweet())
    .then(function successCallback (response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log('success')
    }, function errorCallback (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed')
    })
  }
}

export const tweet = {
  templateUrl,
  bindings: {
    user: '<'
  },
  controller,
  controllerAs: 'tweet'
}
