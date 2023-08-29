import { BaseItemSourcePF2e, ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { ZeroToFour } from "@/interfaces/pf2e/data";
type LoreSource = BaseItemSourcePF2e<"lore", LoreSystemSource>;
interface LoreSystemSource extends ItemSystemSource {
  mod: {
    value: number;
  };
  proficient: {
    value: ZeroToFour;
  };
  variants?: Record<
    string,
    {
      label: string;
      options: string;
    }
  >;
  level?: never;
  traits?: never;
}
type LoreSystemData = LoreSystemSource;
export type { LoreSource, LoreSystemData };
