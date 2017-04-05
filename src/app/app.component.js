import styles from './app.styles'
import templateUrl from './app.template'

const controller =
/* @ngInject */
  class {
    styles = styles
    credentials = {
      username: 'string',
      password: 'string'
    }
  }

export const baseApp = {
  templateUrl,
  controller,
  controllerAs: 'app'
}
