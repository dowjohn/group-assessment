import styles from './tweet.styles'
import templateUrl from './tweet.template'

const controller = class {
  constructor (dataservice, userstatusservice) {
    this.dataservice = dataservice
    this.userstatusservice = userstatusservice
  }
  styles = styles
  content = ''

  makeTweet () {
    return {
      content: this.content,
      credentials: this.userstatusservice.credentials
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
  controller,
  controllerAs: 'tweet'
}
