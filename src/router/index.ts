import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/indexHome/HomeView.vue";
import IndexDefault from "@/layouts/IndexDefault.vue";

Vue.use(VueRouter);

const indexRouter = new VueRouter({
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: IndexDefault,
      children: [
        {
          path: "/",
          component: HomeView,
        },
      ],
    },
  ],
});

export default indexRouter;
