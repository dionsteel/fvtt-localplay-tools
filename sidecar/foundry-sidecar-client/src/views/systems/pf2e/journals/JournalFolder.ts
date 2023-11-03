import { TreeEntry } from "./TreeEntry";
import { BaseJournalEntry } from "./BaseJournalEntry";


export interface JournalFolder {
tree: TreeEntry;
entries: BaseJournalEntry[];
}
