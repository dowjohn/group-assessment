export const dataservice = class {
    constructor($http, $log) {
        this.$http = $http
        // this.logger = logger
    }

    getFeed(username) {
        return this.$http.get('http://10.1.1.203:8090/api/users/@' + username + '/feed')
            .then((response) => {
                console.log(response.data)
                console.log('success')
                return response.data
            }, (error) => {
                console.log('failed', error.data)
            })
    }

    getUsers() {
        return this.$http.get('http://10.1.1.203:8090/api/users')
            .then((response) => {
                console.log(response.data)
                console.log('success')
                return response.data
            }, (error) => {
                console.log('failed', error.data)
            })
    }

    postTweet(tweetObject) {
        this.$http.post('http://10.1.1.203:8090/api/tweets', tweetObject)
            .then(function successCallback(response) {
                console.log('success')
            }, function errorCallback(response) {
                console.log('failed')
            })
    }

    getTweets() {
        return this.$http.get('http://10.1.1.203:8090/api/tweets')
            .then((response) => {
                console.log(response.data)
                console.log('success')
                return response.data
            }, (error) => {
                console.log('failed', error.data)
            })
    }
}
