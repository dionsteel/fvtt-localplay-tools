// import { UserVisibility } from "@/interfaces/pf2e/scripts/ui/user-visibility";
import { DegreeOfSuccessString } from "@/interfaces/pf2e/system/degree-of-success";
import { PredicatePF2e, RawPredicate } from "@/interfaces/pf2e/system/predication";
type UserVisibility = any;
declare class RollNotePF2e {
  #private;
  /** The selector used to determine on which rolls the note will be shown for. */
  selector: string;
  /** If true, these dice are user-provided/custom. */
  predicate: PredicatePF2e;
  /** List of outcomes to show this note for; or all outcomes if none are specified */
  outcome: DegreeOfSuccessString[];
  /** An optional visibility restriction for the note */
  visibility: UserVisibility | null;
  constructor(params: RollNoteSource);
  get text(): string;
  clone(): RollNotePF2e;
  toObject(): RollNoteSource;
}
interface RollNoteSource {
  selector: string;
  title?: string | null;
  text: string;
  predicate?: RawPredicate;
  outcome?: DegreeOfSuccessString[];
  visibility?: UserVisibility | null;
}
export type { RollNotePF2e, RollNoteSource };
