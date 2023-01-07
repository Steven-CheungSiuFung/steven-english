import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "vocabulary",
          name: "vocabulary",
          component: () => import("@/views/VocabularyView.vue"),
        },
      ],
    },
  ],
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure) && to.name !== from.name) {
    console.log("failed navigation", failure);
  } else {
    console.log("navigation success");
  }
});

export default router;
