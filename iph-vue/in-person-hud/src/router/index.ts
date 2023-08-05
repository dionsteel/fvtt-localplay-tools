import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import TablePlayerView from "@/views/TablePlayerView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { path: "/table", name: "table", component: TablePlayerView },
    { path: "/game/table", name: "game-table", component: TablePlayerView },
    {
      path: "/gm",
      name: "gm",
      component: AboutView,
    },
  ],
});

export default router;
