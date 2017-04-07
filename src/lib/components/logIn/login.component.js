import styles from './login.styles'
import templateUrl from './login.template'

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
        this.credentials.username = this.userCreds
        this.credentials.password = this.passCreds
      } else {
        console.log('nah dude')
      }
      console.log(response)
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

  testClick () {
    console.log(this.makeUser())
    console.log('check if makeUser is something')
  }
}

export const login = {
  templateUrl,
  controller,
  bindings: {
    credentials: '='
  },
  controllerAs: 'login'
}
