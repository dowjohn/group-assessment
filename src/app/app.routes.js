export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'login',
      redirectTo: 'profile',
      component: 'login'
    })
    // .state({
    //   name: 'users',
    //   url: '/users',
    //   component: 'users'
    // })

    // delete later

    .state({
      parent: 'login',
      name: 'profile',
      url: '/profile',
      component: 'profile'
    })
    // .state({
    //   name: 'users.userId',
    //   url: '/:user',
    //   component: 'profile'
    // })
    // .state({
    //   name: 'tags',
    //   url: '/tags',
    //   component: 'tags'
    // })
    // .state({
    //   name: 'tweet',
    //   url: '/tweets',
    //   component: 'alltweets'
    // })
    // .state({
    //   name: 'tweet.tweetId',
    //   url: '/:tweets'
    // })
  }
