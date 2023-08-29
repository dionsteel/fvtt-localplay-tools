import { ActionType, BaseItemSourcePF2e, Frequency, FrequencySource, ItemSystemData, ItemSystemSource, ItemTraits } from "../data/base";
import { OneToThree } from "@/interfaces/pf2e/index";
import { ActionCategory, ActionTrait } from "./types";
import { ImageFilePath, ItemUUID, Maybe } from "@/lib/utils";

type AbilityItemSource = BaseItemSourcePF2e<"action", AbilitySystemSource>;

interface AbilityTraits extends ItemTraits<ActionTrait> {
  rarity?: never;
}

interface AbilitySystemSource extends ItemSystemSource {
  traits: AbilityTraits;
  actionType: {
    value: ActionType;
  };
  actions: {
    value: OneToThree | null;
  };
  category: ActionCategory | null;
  requirements: {
    value: string;
  };
  trigger: {
    value: string;
  };
  deathNote: boolean;
  frequency?: FrequencySource;
  level?: never;

  /** A self-applied effect for simple actions */
  selfEffect?: SelfEffectReferenceSource | null;
}

interface SelfEffectReferenceSource {
  uuid: ItemUUID;
  name: string;
}

interface AbilitySystemData extends AbilitySystemSource, Omit<ItemSystemData, "level" | "traits"> {
  frequency?: Frequency;
  /** A self-applied effect for simple actions */
  selfEffect: SelfEffectReference | null;
}

interface SelfEffectReference extends SelfEffectReferenceSource {
  img?: Maybe<ImageFilePath>;
}

export type { AbilityItemSource, AbilitySystemData, AbilityTraits, SelfEffectReference, SelfEffectReferenceSource };
