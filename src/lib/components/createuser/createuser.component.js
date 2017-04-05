import styles from './createuser.styles'
import templateUrl from './createuser.template'

const controller = class {
  static $inject = ['$http']
  constructor ($http) {
    this.$http = $http
  }
  styles = styles
  username = 'string'
  password = 'string'
  firstName = 'string'
  lastName = 'string'
  email = 'string'
  phoneNumber = 'string'

  makeUser () {
    const userInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber
    }
    const credentials = {
      password: this.password,
      username: this.username
    }
    return {
      profile: userInfo,
      credentials: credentials
    }
  }

  postUser () {
    this.$http.post('http://10.1.1.203:8090/api/tweets', this.makeUser())
    .then(function successCallback (response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log('success')
    }, function errorCallback (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed')
    })
  }
}

export const createUser = {
  templateUrl,
  controller,
  bindings: {
    username: '=',
    password: '='
  },
  controllerAs: 'createUser'
}
