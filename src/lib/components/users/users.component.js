import styles from './users.styles'
import templateUrl from './users.template'

const controller = class {

    users = [{
        name: 'Daniel',
    }, {
        name: 'Brandon',
    }, {
        name: 'John',
    }, {
        name: 'Anthony',
    }]


}


export const users = {
    templateUrl,
    bindings: {
        creds: '<'
    },
    controller,
    controllerAs: 'users'
}
