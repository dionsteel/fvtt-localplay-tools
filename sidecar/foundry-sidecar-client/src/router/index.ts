import { useWorldStore } from "@/store/world";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "",
  //   redirect: (to) => {
  //     return "/" + useWorldStore().activeGame?.system?.id + "/";
  //   },
  // },
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
      {
        path: "actors/:id",
        component: () => import("../views/systems/dnd5e/ActorSheetDnD5e.vue"),
        props: true,
        children: [
          { path: "actions", component: () => import("@/views/systems/dnd5e/components/ActionsTab5e.vue") },
          { path: "attributes", component: () => import("@/views/systems/dnd5e/components/AttributesTab5e.vue") },
          { path: "abilities", component: () => import("@/views/systems/dnd5e/components/AbilitiesTab5e.vue") },
          { path: "inventory", component: () => import("@/views/systems/dnd5e/components/InventoryTab5e.vue") },
          { path: "skills", component: () => import("@/views/systems/dnd5e/components/SkillsTab5e.vue") },
          { path: "spells", component: () => import("@/views/systems/dnd5e/components/SpellsTab5e.vue") },
          { path: "features", component: () => import("@/views/systems/dnd5e/components/FeaturesTab5e.vue") },
          { path: "biography", component: () => import("@/views/systems/dnd5e/components/BiographyTab5e.vue") },
        ],
      },
    ],
  },
  {
    path: "/pf2e/",
    component: () => import("../views/systems/pf2e/PathfinderGame.vue"),
    // props: true,
    children: [
      { path: "", redirect: "/pf2e/world" },
      { path: "world", component: () => import("../views/systems/pf2e/GameWorldPF2e.vue") },
      // { path: "chat", component: () => import("../views/systems/pf2e/ChatPF2e.vue") },
      // { path: "combat", component: () => import("../views/systems/pf2e/CombatPF2e.vue") },
      // { path: "dice", component: () => import("../views/systems/pf2e/DicePF2e.vue") },
      { path: "journals", component: () => import("../views/systems/pf2e/journals/JournalFolderPF2e.vue") },
      { path: "actors", component: () => import("../views/systems/pf2e/CharactersPF2e.vue") },
      {
        path: "actors/:id",
        component: () => import("../views/systems/pf2e/ActorSheetPF2e.vue"),
        props: true,
        children: [
          { path: "actions", component: () => import("@/views/systems/pf2e/components/tabs/ActionsTabPF2e.vue") },
          { path: "attributes", component: () => import("@/views/systems/pf2e/components/tabs/AttributesTabPF2e.vue") },
          { path: "abilities", component: () => import("@/views/systems/pf2e/components/tabs/AbilitiesTabPF2e.vue") },
          { path: "inventory", component: () => import("@/views/systems/pf2e/components/tabs/InventoryTabPF2e.vue") },
          { path: "skills", component: () => import("@/views/systems/pf2e/components/tabs/SkillsTabPF2e.vue") },
          { path: "spells", component: () => import("@/views/systems/pf2e/components/tabs/SpellsTabPF2e.vue") },
          { path: "features", component: () => import("@/views/systems/pf2e/components/tabs/FeaturesTabPF2e.vue") },
          { path: "biography", component: () => import("@/views/systems/pf2e/components/tabs/BiographyTabPF2e.vue") },
        ],
      },
    ],
  },
  {
    path: "/",
    component: () => import("../views/LandingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
