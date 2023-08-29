import { ActionType, BaseItemSourcePF2e, Frequency, FrequencySource, ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { OneToThree, TraitsWithRarity } from "@/interfaces/pf2e/data";
import { FeatCategory, FeatTrait } from "./feat/index";
import { AbilityString } from "@/interfaces/pf2e/actor/index";
type FeatSource = BaseItemSourcePF2e<"feat", FeatSystemSource>;
interface PrerequisiteTagData {
  value: string;
}
interface FeatSystemSource extends ItemSystemSource {
  level: {
    value: number;
  };
  traits: FeatTraits;
  /** The category of feat or feature of this item */
  category: FeatCategory;
  /** Whether this feat must be taken at character level 1 */
  onlyLevel1: boolean;
  /** The maximum number of times this feat can be taken by a character. A value of `null` indicates no limit */
  maxTakable: number | null;
  actionType: {
    value: ActionType;
  };
  actions: {
    value: OneToThree | null;
  };
  prerequisites: {
    value: PrerequisiteTagData[];
  };
  location: string | null;
  frequency?: FrequencySource;
  subfeatures?: Partial<FeatSubfeatures>;
}
interface FeatSystemData extends Omit<FeatSystemSource, "maxTaken"> {
  /** `null` is set to `Infinity` during data preparation */
  maxTakable: number;
  frequency?: Frequency;
  subfeatures: FeatSubfeatures;
}
interface FeatSubfeatures {
  keyOptions: AbilityString[];
}
type FeatTraits = TraitsWithRarity<FeatTrait>;
export type { FeatSource, FeatSystemData, FeatSystemSource, FeatTraits, PrerequisiteTagData };
