import { StrikeLookupData } from "../../chat-message/index.ts";
import { ZeroToThree } from "../../data.ts";
import { UserPF2e } from "../../user/index.ts";
import { DegreeOfSuccessIndex } from "../../system/degree-of-success.ts";
import { RollDataPF2e } from "../../system/rolls.ts";
import { Roll } from "../../../../../client/roll";
 
interface CheckRoll extends Roll {
    options: CheckRollDataPF2e;
    roller: UserPF2e | null;
    isReroll: boolean;
    isRerollable: boolean;
}
interface CheckRollDataPF2e extends RollDataPF2e {
    isReroll?: boolean;
    degreeOfSuccess?: ZeroToThree;
    strike?: StrikeLookupData;
    domains?: string[];
}
export { CheckRoll, CheckRollDataPF2e };
