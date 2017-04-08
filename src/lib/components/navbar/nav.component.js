import styles from './nav.styles'
import templateUrl from './nav.template'

const controller = class {
  constructor (userstatusservice) {
    this.userstatusservice = userstatusservice
  }

  logOut () {
    this.userstatusservice.logOut()
  }
  styles = styles
}
export const navBar = {
  templateUrl,
  controller,
  controllerAs: 'navBar'
}
