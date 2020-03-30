export default [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./views/Register.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('./views/Message.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('./views/Order.vue'),
  },
  {
    path: '/version',
    name: 'version',
    component: () => import('./views/Version.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('./views/Mine.vue')
  },
  {
    path: '/select_order',
    name: 'select_order',
    component: () => import('./views/SelectOrder.vue')
  },
  {
    path: '/recommondDetail',
    name: 'recommondDetail',
    component: () => import('./views/RecommandDetail.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('./views/Hotel.vue')
  },
  {
    path: '/airticket',
    name: 'airticket',
    component: () => import('./views/Airticket.vue')
  },
  {
    path: '/trainticket',
    name: 'trainticket',
    component: () => import('./views/Trainticket.vue')
  },
  {
    path: '/admissionticket',
    name: 'admissionticket',
    component: () => import('./views/Admissionticket.vue')
  },
  {
    path: '/grouppurchase',
    name: 'grouppurchase',
    component: () => import('./views/Grouppurchase.vue')
  },
  {
    path: '/holiday',
    name: 'holiday',
    component: () => import('./views/Holiday.vue')
  },
  {
    path: '/strategy',
    name: 'strategy',
    component: () => import('./views/Strategy.vue')
  },
  {
    path: '/morefunc',
    name: 'morefunc',
    component: () => import('./views/Morefunc.vue')
  },
  {
    path: '/morerecommond',
    name: 'morerecommond',
    component: () => import('./views/Morerecommond.vue')
  },
  {
    path: '/strategyrecommond',
    name: 'strategyrecommond',
    component: () => import('./views/Strategyrecommond.vue')
  }
]