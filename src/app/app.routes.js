export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: 'createUser'
    })
    .state({
      name: 'feed',
      url: '/feed',
      component: 'feed'
    })
    .state({
      name: 'profile',
      url: '/profile',
      component: 'profile'
    })
  }
