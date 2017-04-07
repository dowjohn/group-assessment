import styles from './createuser.styles'
import templateUrl from './createuser.template'

const controller = class {
  static $inject = ['$http']
  constructor ($http) {
    this.$http = $http
  }
  styles = styles
  username = ''
  password = ''
  firstName = ''
  lastName = ''
  email = ''
  phoneNumber = ''
  userCreds = ''
  passCreds = ''

  checkCreds () {
    const creds = {
      username: this.userCreds,
      password: this.passCreds
    }
    return creds
  }

  validateCreds () {
    console.log('button do work')
    this.$http.post('http://localhost:8090/api/validate/login', this.checkCreds())
    .then((response) => {
      if (response.data === true) {
        console.log(response)
        this.credentials.username = this.userCreds
        this.credentials.password = this.passCreds
      } else {
        console.log('nah dude')
      }
    }, (response) => {
      console.log(response)
    })
  }

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
    console.log('see if button is going through')
    this.$http.post('http://localhost:8090/api/users', this.makeUser())
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
    credentials: '='
  },
  controllerAs: 'createUser'
}
