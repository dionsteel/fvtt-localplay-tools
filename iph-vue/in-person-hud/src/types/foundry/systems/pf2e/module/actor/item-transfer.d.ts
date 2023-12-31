import { UserPF2e } from "src/types/pf2e/module/user/index.ts";
export interface ItemTransferData {
    source: {
        tokenId?: string;
        actorId: string;
        itemId: string;
    };
    target: {
        tokenId?: string;
        actorId: string;
    };
    quantity: number;
    containerId?: string;
}
export declare class ItemTransfer implements ItemTransferData {
    #private;
    source: ItemTransferData["source"];
    target: ItemTransferData["target"];
    quantity: number;
    containerId?: string | undefined;
    constructor(source: ItemTransferData["source"], target: ItemTransferData["target"], quantity: number, containerId?: string | undefined);
    request(): Promise<void>;
    enact(requester: UserPF2e): Promise<void>;
}
