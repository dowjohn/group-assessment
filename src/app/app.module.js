import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import { tweets } from 'components/tweets'
import { userDetails } from 'components/userDetails'
import { users } from 'components/users'
import { tags } from 'components/tags'
import { alltweets } from 'components/alltweets'
import { createUser } from 'components/createUser'
import { login } from 'components/login'
import { profile } from 'components/profile'
import { feed } from 'components/feed'

import { dataservice } from 'services/dataservice'

import { createUser } from 'components/createuser'
import { buttonservice } from 'services/buttonservice'
import { navBar } from 'components/navbar'

import { tweetDumb } from 'components/tweet-dumb'
import { feed } from 'components/feed'
import { dataservice } from 'services/dataservice'

import { baseApp } from './app.component'
import { config } from './app.config'
import { routes } from './app.routes'
import { run } from './app.run'

export default
  angular
    .module('base.app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter
    ])
    .component('baseApp', baseApp)
<<<<<<< HEAD
    .component('tweet', tweet)

    .component('createUser', createUser)
    .service('buttonservice', buttonservice)
    .component('navBar', navBar)

    .component('tweetDumb', tweetDumb)
    .component('feed', feed)
    .service('dataservice', dataservice)

=======
    .component('tweets', tweets)
    .component('userDetails', userDetails)
    .component('users', users)
    .component('tags', tags)
    .component('alltweets', alltweets)
    .component('createUser', createUser)
    .component('login', login)
    .component('profile', profile)
    .component('feed', feed)
    .service('dataservice', dataservice)
>>>>>>> 43e29d046a2c2329566fa21e21d235e2845bf294
    .config(config)
    .config(routes)
    .run(run)
    .name
