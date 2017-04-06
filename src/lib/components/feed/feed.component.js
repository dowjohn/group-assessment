import styles from './feed.styles'
import templateUrl from './feed.template'

const controller = class {
  constructor ($http, dataservice) {
    this.$http = $http
    this.dataservice = dataservice
    this.tweets = []
    this.setFeed()
  }
  styles = styles
  setFeed () {
    this.dataservice.getFeed(this.creds.username).then(value => {
      this.tweets = value
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
