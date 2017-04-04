import styles from './app.styles'
import templateUrl from './app.template'

const controller =
  /* @ngInject */
  class {
    username = 'loggedinorsomething'
    password
  }

export const baseApp = {
  templateUrl,
  controller,
  controllerAs: 'app'
}
