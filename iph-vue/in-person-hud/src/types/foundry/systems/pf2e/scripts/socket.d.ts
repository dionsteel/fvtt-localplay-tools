import { ItemTransferData } from "src/types/pf2e/module/actor/item-transfer.ts";
interface TransferCallbackMessage {
    request: "itemTransfer";
    data: ItemTransferData;
}
interface RefreshControlsMessage {
    request: "refreshSceneControls";
    data: {
        layer?: string;
    };
}
export type SocketEventCallback = [
    message: TransferCallbackMessage | RefreshControlsMessage | {
        request?: never;
    },
    userId: string
];
export declare function activateSocketListener(): void;
export {};
