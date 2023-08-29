import { useWorldStore } from "@/store/world";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: (to) => {
      return "/" + useWorldStore().activeGame?.system.id + "/";
    },
  },
  {
    path: "/dnd5e/",
    component: () => import("../views/systems/dnd5e/DnD5eGame.vue"),
    // props: true,
    children: [
      { path: "", redirect: "/dnd5e/world" },
      { path: "world", component: () => import("../views/systems/dnd5e/GameWorldDnD5e.vue") },
      { path: "chat", component: () => import("../views/systems/dnd5e/ChatDnD5e.vue") },
      { path: "combat", component: () => import("../views/systems/dnd5e/CombatDnD5e.vue") },
      { path: "dice", component: () => import("../views/systems/dnd5e/DiceDnD5e.vue") },
      { path: "actors", component: () => import("../views/systems/dnd5e/CharactersDnD5e.vue") },
      { path: "actors/:id", component: () => import("../views/systems/dnd5e/ActorSheetDnD5e.vue"), props: true },
    ],
  },
  {
    path: "/pf2e/",
    component: () => import("../views/systems/pf2e/PathfinderGame.vue"),
    // props: true,
    children: [
      { path: "", redirect: "/pf2e/world" },
      { path: "world", component: () => import("../views/systems/pf2e/GameWorldPF2e.vue") },
      { path: "chat", component: () => import("../views/systems/pf2e/ChatPF2e.vue") },
      { path: "combat", component: () => import("../views/systems/pf2e/CombatPF2e.vue") },
      { path: "dice", component: () => import("../views/systems/pf2e/DicePF2e.vue") },
      { path: "actors", component: () => import("../views/systems/pf2e/CharactersPF2e.vue") },
      { path: "actors/:id", component: () => import("../views/systems/pf2e/ActorSheetPF2e.vue"), props: true },
    ],
  },
  {
    path: "/actors",
    component: () => import("../Characters.vue"),
  },
  {
    path: "/folder/:id",
    component: () => import("../views/FolderPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
