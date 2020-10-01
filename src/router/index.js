import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
    // { path: '/foo', name: 'Foo', component: Foo },
    // { path: '/bar', name: 'Bar', component: Bar }
  ]
});

export default router;