import styles from './app.styles'
import templateUrl from './app.template'

const controller =
  /* @ngInject */
  class {
    credentials = {
      username: '',
      password: ''
    }
  }

export const baseApp = {
  templateUrl,
  controller,
  controllerAs: 'app'
}
