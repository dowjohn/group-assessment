import styles from './tweet.styles'
import templateUrl from './tweet.template'

const controller = class {
  constructor (dataservice) {
    this.dataservice = dataservice
  }
  styles = styles
  content = ''

  makeTweet () {
    return {
      content: this.content,
      credentials: this.credentials
    }
  }

  tweet () {
    console.log(this.makeTweet())
    this.dataservice.postTweet(this.makeTweet())
    this.content = ''
  }
}

export const tweet = {
  templateUrl,
  bindings: {
    credentials: '<'
  },
  controller,
  controllerAs: 'tweet'
}
