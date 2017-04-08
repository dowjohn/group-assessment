import styles from './createuser.styles'
import templateUrl from './createuser.template'

const controller = class {
  constructor (dataservice, userstatusservice) {
    this.dataservice = dataservice
    this.userstatusservice = userstatusservice
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
      password: this.passCreds,
      username: this.userCreds
    }
    return creds
  }

  validateCreds () {
    console.log('button do work')
    this.dataservice.login(this.checkCreds())
    .then((response) => {
      if (response === true) {
        console.log('login success')
        this.userstatusservice.logIn(this.checkCreds())
      } else {
        console.log('returned false, failed login')
        this.userstatusservice.logOut()
      }
    }, (error) => {
      console.log(error)
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
    this.dataservice.postUser(this.makeUser())
    .then(response => {
      console.log(response)
      if (response.username !== null) {
        this.userCreds = response.username
        this.passCreds = this.password
        this.userstatusservice.logIn(this.checkCreds())
      }
    })
  }
}

export const createUser = {
  templateUrl,
  controller,
  controllerAs: 'createUser'
}
