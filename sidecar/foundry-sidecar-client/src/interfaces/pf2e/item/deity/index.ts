import { ConfigPF2e } from "@/interfaces/pf2e/config";
export type DeityDomain = Lowercase<keyof ConfigPF2e["PF2E"]["Item"]["Deity"]["Domain"]>;
