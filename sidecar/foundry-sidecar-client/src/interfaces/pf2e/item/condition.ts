import { AbstractEffectSystemData, AbstractEffectSystemSource } from "@/interfaces/pf2e/item/abstract-effect";
import { BaseItemSourcePF2e, ItemSystemSource } from "@/interfaces/pf2e/item/data/base";
import { DamageType } from "@/interfaces/pf2e/system/damage/index";
import { DamageRoll } from "@/interfaces/pf2e/system/roll";
import { ConditionSlug } from "./condition/index";
type ConditionSource = BaseItemSourcePF2e<"condition", ConditionSystemSource>;
interface ConditionSystemSource extends AbstractEffectSystemSource {
  slug: ConditionSlug;
  references: {
    parent?: {
      id: string;
      type: string;
    };
    children: {
      id: string;
      type: "condition";
    }[];
    overriddenBy: {
      id: string;
      type: "condition";
    }[];
    overrides: {
      id: string;
      type: "condition";
    }[];
  };
  duration: {
    value: number;
    expiry?:any;
    unit?:string;
  };
  persistent?: PersistentSourceData;
  group: string | null;
  value: ConditionValueData;
  overrides: string[];
  context?: never;
  level?: never;
  traits?: never;
}
interface PersistentSourceData {
  formula: string;
  damageType: DamageType;
  dc: number;
}
interface ConditionSystemData extends Omit<ConditionSystemSource, "fromSpell">, Omit<AbstractEffectSystemData, "level" | "slug" | "traits"> {
  persistent?: PersistentDamageData;
  expiry?:any;
}
interface PersistentDamageData extends PersistentSourceData, ItemSystemSource {
  damage: DamageRoll;
  expectedValue: number;
}
type ConditionValueData =
  | {
      isValued: true;
      value: number;
    }
  | {
      isValued: false;
      value: null;
    };
export type { ConditionSource, ConditionSystemData, ConditionSystemSource, PersistentDamageData, PersistentSourceData };
