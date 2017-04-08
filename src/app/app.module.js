import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import { tweets } from 'components/tweets'
import { users } from 'components/users'
import { tags } from 'components/tags'
import { alltweets } from 'components/alltweets'
import { createUser } from 'components/createUser'
import { profile } from 'components/profile'
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
    .component('tweets', tweets)
    .component('users', users)
    .component('tags', tags)
    .component('alltweets', alltweets)
    .component('createUser', createUser)
    .component('profile', profile)
    .component('feed', feed)
    .service('dataservice', dataservice)
    .config(config)
    .config(routes)
    .run(run)
    .name
