import styles from './tweet-dumb.styles'
import templateUrl from './tweet-dumb.template'

const controller = class {
  styles = styles
}

export const tweetDumb = {
  templateUrl,
  bindings: {
    username: '<',
    content: '<',
    timestamp: '<',
    inReplyTo: '<',
    repostOf: '<'
  },
  controller,
  controllerAs: 'tweetDumb'
}
