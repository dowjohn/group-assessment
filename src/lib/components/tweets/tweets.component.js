import styles from './tweets.styles'
import templateUrl from './tweets.template'


const controller = class {
    constructor(dataservice) {
        this.dataservice = dataservice
    }
    styles = styles
    content = ''

    makeTweet() {
        return {
            content: this.content,
            credentials: this.creds
        }
    }

    tweets() {
        console.log(this.makeTweet())
        this.dataservice.postTweet(this.makeTweet())
        this.content = ''
    }
}


export const tweets = {
    templateUrl,
    bindings: {
        creds: '<'
    },
    controller,
    controllerAs: 'tweets'
}
