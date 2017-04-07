import styles from './home.styles'
import templateUrl from './home.template'

const controller = class {
  static $inject = ['$http']
  constructor ($http) {
    this.$http = $http
  }
  styles = styles
}

export const home = {
  templateUrl,
  controller,
  bindings: {
    creds: '<'
  },
  controllerAs: 'home'
}
