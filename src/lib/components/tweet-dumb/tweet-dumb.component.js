import styles from './tweet-dumb.styles'
import templateUrl from './tweet-dumb.template'

const controller = class {
  styles = styles
  constructor (dataservice, userstatusservice) {
    this.dataservice = dataservice
    this.userstatusservice = userstatusservice
  }

  testCreds (credentials) {
    return {
      credentials: {
        password: this.userstatusservice.credentials.password,
        username: this.userstatusservice.credentials.username
      }
    }
  }

  repostTweet () {
    console.log(this.userstatusservice.credentials)
    this.dataservice.repostTweet(this.tweet.id, this.testCreds())
    .then(value => {
      // TODO alter repost button?
    })
  }

  replyToTweet () {
    // TODO create component that displays when reply button is clicked, may
    // be able to reuse tweet component
  }

  likeTweet () {
    this.dataservice.likeTweet(this.tweet.id, this.userstatusservice.credentials)
    .then(value => {
      // TODO alter like button to reflect changes
    })
  }
}

export const tweetDumb = {
  templateUrl,
  bindings: {
    tweet: '<'
  },
  controller,
  controllerAs: 'tweetDumb'
}
