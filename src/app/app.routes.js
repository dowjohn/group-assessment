export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'baseApp',
      redirectTo: '/home',
      component: 'baseApp'
    })
    .state({
      parent: 'baseApp',
      name: 'home',
      url: '/home',
      component: 'logIn'
    })
    .state({
      parent: 'baseApp',
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
      parent: 'baseApp',
      name: 'tags',
      url: '/tags',
      component: 'tags'
    })
    .state({
      parent: 'baseApp',
      name: 'tweet',
      url: '/tweets',
      component: 'tweet'
    })
    .state({
      name: 'tweet.tweetId',
      url: '/:tweets'
    })
  }
