import styles from './feed.styles'
import templateUrl from './feed.template'

const controller = class {
  constructor (dataservice) {
    this.dataservice = dataservice
    this.tweets = []
    this.setFeed()
  }
  styles = styles
  setFeed () {
    this.dataservice.getFeed(this.credentials.username).then(value => {
      this.tweets = value
    })
  }
}

export const feed = {
  templateUrl,
  bindings: {
    credentials: '<'
  },
  controller,
  controllerAs: 'feed'
}
