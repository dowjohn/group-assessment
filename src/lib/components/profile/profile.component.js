import styles from './profile.styles'
import templateUrl from './profile.template'

const controller = class {
  
}

export const profile = {
  templateUrl,
  controller,
  bindings: {
    credentials: '='
  },
  controllerAs: 'profile'
}
