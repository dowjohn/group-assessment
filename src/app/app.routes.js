export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'feed',
      url: '/feed',
      component: 'feed'
    })
    .state({
      name: 'login',
      url: '/login',
      component: 'createuser'
    })
  }
