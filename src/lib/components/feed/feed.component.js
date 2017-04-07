import styles from './feed.styles'
import templateUrl from './feed.template'

const controller = class {
<<<<<<< HEAD
  constructor ($http, dataservice) {
    this.$http = $http
=======
  constructor (dataservice) {
>>>>>>> 43e29d046a2c2329566fa21e21d235e2845bf294
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
