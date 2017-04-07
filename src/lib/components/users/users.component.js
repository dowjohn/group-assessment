import styles from './users.styles'
import templateUrl from './users.template'

const controller = class {
  users = [{
    name: 'Daniel',
    handle: '@danTheMan',
    bio: `I wrote everyone's bios`
  }, {
    name: 'Brandon',
    handle: '@johnsRoomate',
    bio: 'I like doing entrepreneurial stuff. Get at me!'

  }, {
    name: 'John',
    handle: '@genericWhiteGuy',
    bio: `I'm a hipster from Portland. Follow me!`

  }, {
    name: 'Anthony',
    handle: '@whatupPham',
    bio: `I like Arizona Ice Tea.`

  }]
  styles = styles
}

export const users = {
  templateUrl,
  bindings: {
    creds: '<'
  },
  controller,
  controllerAs: 'users'
}
