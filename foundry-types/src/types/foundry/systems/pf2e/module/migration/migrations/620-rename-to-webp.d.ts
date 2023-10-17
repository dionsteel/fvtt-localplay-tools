import { ActorSourcePF2e } from "src/types/foundry/systems/pf2e/module/actor/data/index.ts";
import { ItemSourcePF2e } from "src/types/foundry/systems/pf2e/module/item/data/index.ts";
import { MigrationBase } from "../base.ts";
export declare class Migration620RenameToWebp extends MigrationBase {
    #private;
    static version: number;
    updateActor(actorData: ActorSourcePF2e): Promise<void>;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
    updateMacro(macroData: foundry.documents.MacroSource): Promise<void>;
    updateTable(tableData: foundry.documents.RollTableSource): Promise<void>;
    updateToken(tokenData: foundry.documents.TokenSource): Promise<void>;
    updateUser(source: foundry.documents.UserSource): Promise<void>;
}
