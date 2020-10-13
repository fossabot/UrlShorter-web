import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'Shorter',
    meta: {
      title: 'Short-URL Shorter',
    },
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/delete',
    name: 'Delete',
    meta: {
      title: 'Delete-URL Shorter',
    },
    component: () => import('../views/Delete.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
