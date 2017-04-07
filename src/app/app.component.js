import styles from './app.styles'
import templateUrl from './app.template'

const controller =
/* @ngInject */
  class {
    constructor (userstatusservice) {
      this.userstatusservice = userstatusservice
    }
    styles = styles
  }

export const baseApp = {
  templateUrl,
  controller,
  controllerAs: 'app'
}
