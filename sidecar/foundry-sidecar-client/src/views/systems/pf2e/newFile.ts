import { provide } from "vue";
import { actorHelper } from "./ActorSheetPF2e.vue";

provide<ActorHelperPF2e>("actorHelper", actorHelper);
