import styles from './follow.styles'
import templateUrl from './follow.template'

const controller = class {
  static $inject = ['$http']
  constructor ($http) {
    this.$http = $http
  }
  styles = styles
}

export const follow = {
  templateUrl,
  controller,
  bindings: {
    credentials: '<'
  },
  controllerAs: 'follow'
}
