import { BaseJournalEntry } from "./BaseJournalEntry";
import { JournalFolder } from "./JournalFolder";

export interface TreeEntry {
  contents: BaseJournalEntry[];
  entries: BaseJournalEntry[];
  children: JournalFolder[];
}
