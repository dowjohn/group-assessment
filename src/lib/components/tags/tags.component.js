import styles from './tags.styles'
import templateUrl from './tags.template'

const controller = class {

    tags = [{
        label: 'taxationIsTheft',
    }, {
        label: 'MemphiSucks',
    }, {
        label: 'PhillyRules',
    }]

}

export const tags = {
    templateUrl,
    bindings: {
        creds: '<'
    },
    controller,
    controllerAs: 'tags'
}
