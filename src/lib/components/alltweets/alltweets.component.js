import styles from './alltweets.styles'
import templateUrl from './alltweets.template'

const controller = class {
  constructor (dataservice) {
    this.dataservice = dataservice
    this.tweets = []
    this.setTweets()
  }
  styles = styles
  setTweets () {
    this.dataservice.getTweets().then(value => {
      this.tweets = value
      console.log(value)
      console.log('got tweets')
    })
  }
}

export const alltweets = {
  templateUrl,
  controller,
  bindings: {
    credentials: '<'
  },
  controllerAs: 'alltweets'
}
