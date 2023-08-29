import { StrikeLookupData } from "@/interfaces/pf2e/chat-message";
import { ZeroToThree } from "@/interfaces/pf2e/data";
// import { UserPF2e } from "@/interfaces/pf2e/user/index";
import { DegreeOfSuccessIndex } from "@/interfaces/pf2e/system/degree-of-success";
import { RollDataPF2e } from "@/interfaces/pf2e/system/rolls";
export type Rolled<T> = T & { rolled: true };
declare class Roll {
  total?: number;
  // get degreeOfSuccess(): DegreeOfSuccessIndex | null;
}
declare class CheckRoll extends Roll {
  roller: any | null;
  isReroll: boolean;
  isRerollable: boolean;
  constructor(formula: string, data?: {}, options?: CheckRollDataPF2e);
  get degreeOfSuccess(): DegreeOfSuccessIndex | null;
}
interface CheckRoll extends Roll {
  options: CheckRollDataPF2e;
}
interface CheckRollDataPF2e extends RollDataPF2e {
  isReroll?: boolean;
  degreeOfSuccess?: ZeroToThree;
  strike?: StrikeLookupData;
  domains?: string[];
}
declare class DamageRoll extends Roll {}
export type { CheckRoll, CheckRollDataPF2e, DamageRoll };
