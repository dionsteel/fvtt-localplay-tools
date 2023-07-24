import { ActorPF2e } from "src/types/pf2e/module/actor";
import { DamageInstance, DamageRoll } from "./roll.ts";
/** Apply an actor's IWR applications to an evaluated damage roll's instances */
declare function applyIWR(actor: ActorPF2e, roll: Rolled<DamageRoll>, rollOptions: Set<string>): IWRApplicationData;
interface IWRApplicationData {
    finalDamage: number;
    applications: IWRApplication[];
    persistent: DamageInstance[];
}
interface UnaffectedApplication {
    category: "unaffected";
    type: string;
    adjustment: number;
}
interface ImmunityApplication {
    category: "immunity";
    type: string;
    adjustment: number;
}
interface WeaknessApplication {
    category: "weakness";
    type: string;
    adjustment: number;
}
interface ResistanceApplication {
    category: "resistance";
    type: string;
    adjustment: number;
    ignored: boolean;
}
/** Post-IWR reductions from various sources (e.g., hardness) */
interface DamageReductionApplication {
    category: "reduction";
    type: string;
    adjustment: number;
}
type IWRApplication = UnaffectedApplication | ImmunityApplication | WeaknessApplication | ResistanceApplication | DamageReductionApplication;
export { IWRApplication, IWRApplicationData, applyIWR };
