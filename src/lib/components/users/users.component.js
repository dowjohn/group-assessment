import styles from './users.styles'
import templateUrl from './users.template'

const controller = class {

}

export const users = {
  templateUrl,
  bindings: {
    creds: '<'
  },
  controller,
  controllerAs: 'users'
}
