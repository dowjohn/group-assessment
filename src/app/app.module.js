import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import { tweets } from 'components/tweets'
import { userDetails } from 'components/userDetails'
import { users } from 'components/users'
import { logIn } from 'components/logIn'
import { tags } from 'components/tags'
import { alltweets } from 'components/alltweets'

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
    .component('userDetails', userDetails)
    .component('users', users)
    .component('logIn', logIn)
    .component('tags', tags)
    .component('alltweets', alltweets)
    .service('dataservice', dataservice)
    .config(config)
    .config(routes)
    .run(run)
    .name
