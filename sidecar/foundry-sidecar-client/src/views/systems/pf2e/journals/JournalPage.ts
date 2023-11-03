import { Flags, Ownership } from "@/interfaces/core/flags";

export interface JournalPage {
_id: string;
/** The text name of this page. */
name: string;
/** The type of this page, in {@link BaseJournalEntryPage.TYPES}. */
type: string;
/** Data that control's the display of this page's title. */
title: {
show: boolean;
level: number;
};
/** Data particular to image journal entry pages. */
image: {
caption: string;
};
/** Data particular to text journal entry pages. */
text?: {
content: string;
markdown: string;
format: number;
};
/** Data particular to video journal entry pages. */
video?: {
controls: boolean;
loop: boolean;
autoplay: boolean;
volume: number;
timestamp: number;
width: number;
height: number;
};
/** The URI of the image or other external media to be used for this page. */
src: string;
/** System-specific data. */
system: "pf2e" | "dnd5e" | "dcc" | string;
/** The numeric sort value which orders this page relative to its siblings. */
sort: number;
/** An object which configures the ownership of this page. */
ownership: Ownership;
/** An object of optional key/value flags. */
flags: Flags;
_stats: any;
}
