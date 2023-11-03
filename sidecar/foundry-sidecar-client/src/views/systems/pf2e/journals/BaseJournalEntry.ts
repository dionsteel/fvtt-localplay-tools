import { JournalPage } from "./JournalPage";

export interface BaseJournalEntry {
_id: string; //The _id which uniquely identifies this JournalEntry document
name: string; //The name of this JournalEntry
pages: JournalPage[]; //The pages contained within this JournalEntry document
img?: string; //An image file path which provides the artwork for this JournalEntry
folder: string; //The _id of a Folder which contains this JournalEntry
sort?: string; //The numeric sort value which orders this JournalEntry relative to its siblings
permission?: string; //An object which configures user permissions to this JournalEntry
flags?: string; //An object of optional key/value flags}
}
