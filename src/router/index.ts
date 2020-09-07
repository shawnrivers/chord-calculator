import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Chord from '../views/Chord.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Chord',
    component: Chord
  },
  {
    path: '/scale',
    name: 'Scale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Scale.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
