import styles from './feed.styles'
import templateUrl from './feed.template'

const controller = class {
  constructor ($http) {
    this.$http = $http
    this.tweets = []
    this.getFeed()
  }
  styles = styles
  getFeed () {
    return this.$http.get('http://localhost:8090/api/users/@' + this.creds.username + '/feed')
    .then((response) => {
      console.log(response.data)
      console.log('success')
      this.tweets = response.data
    }, (response) => {
      console.log('failed, jk')
    })
  }
}

export const feed = {
  templateUrl,
  bindings: {
    creds: '<'
  },
  controller,
  controllerAs: 'feed'
}
