import styles from './nav.styles'
import templateUrl from './nav.template'

const controller = class {
  static $inject = ['$http']
  constructor ($http) {
    this.$http = $http
  }
  styles = styles
}
export const navBar = {
  templateUrl,
  controller,
  bindings: {
    credentials: '='
  },
  controllerAs: 'navBar'
}
