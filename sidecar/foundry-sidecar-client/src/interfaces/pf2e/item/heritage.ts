import { CreatureTraits } from "@/interfaces/pf2e/item/ancestry";
import { BaseItemSourcePF2e, ItemSystemData } from "@/interfaces/pf2e/item/data/base";
type HeritageSource = BaseItemSourcePF2e<"heritage", HeritageSystemSource>;
type ItemUUID = string;
interface HeritageSystemSource extends ItemSystemData {
  ancestry: {
    name: string;
    slug: string;
    uuid: ItemUUID;
  } | null;
  traits: CreatureTraits;
  level?: never;
}
export type HeritageSystemData = HeritageSystemSource;
export type { HeritageSource, HeritageSystemSource };
