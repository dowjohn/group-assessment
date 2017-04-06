import styles from './alltweets.styles'
import templateUrl from './alltweets.template'

const controller = class {
  constructor (dataservice) {
    this.dataservice = dataservice
    this.tweets = []
    this.getTweets()
  }
  styles = styles
  setTweets () {
    this.dataservice.getTweets().then(value => {
      this.tweets = value
    })
  }
}

export const alltweets = {
  templateUrl,
  bindings: {
    creds: '<'
  },
  controller,
  controllerAs: 'alltweets'
}
