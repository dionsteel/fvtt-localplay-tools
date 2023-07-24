import { UserVisibility } from "src/types/pf2e/module/scripts/ui/user-visibility.ts";
import { DegreeOfSuccessString } from "src/types/pf2e/module/system/degree-of-success.ts";
import { PredicatePF2e, RawPredicate } from "src/types/pf2e/module/system/predication.ts";
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
export { RollNotePF2e, RollNoteSource };
