export interface JournalFolder { name: string; };
export interface JournalEntry { name: string; _id: string; title: string; contents: string; pages: JournalPage[] };
export interface TreeEntry {
    entries: JournalEntry[];
    children: TreeEntry[];
    folder?: JournalFolder;
}

export interface JournalPage {
    _id: string;
    name: string;
    type: 'text' | 'video' | 'image' | string;
    title: {
        show: boolean;
        level: number;
    };
    text: {
        format: number;
        content: string;
    }
}