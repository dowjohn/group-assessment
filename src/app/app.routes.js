export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'baseApp',
      component: 'baseApp'
    })
    .state({
      name: 'home',
      url: '/home',
      component: 'logIn'
    })
    .state({
      name: 'users',
      url: '/users',
      component: 'users'
    })
    .state({
      name: 'users.userId',
      url: '/:user',
      component: 'userDetails'
    })
    .state({
      name: 'tags',
      url: '/tags',
      component: 'tags'
    })
    .state({
      name: 'tweet',
      url: '/tweets',
      component: 'alltweets'
    })
    .state({
      name: 'tweet.tweetId',
      url: '/:tweets'
    })
  }
