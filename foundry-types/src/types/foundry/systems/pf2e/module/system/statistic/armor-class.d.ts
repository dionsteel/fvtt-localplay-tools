import { ActorPF2e } from "src/types/pf2e/module/actor";
import { ArmorPF2e } from "src/types/pf2e/module/item";
import { ZeroToFour } from "src/types/pf2e/module/data.ts";
import { Statistic, StatisticData, StatisticTraceData } from "./index.ts";
declare class ArmorStatistic extends Statistic {
    #private;
    details: string;
    get item(): ArmorPF2e<ActorPF2e> | null;
    constructor(actor: ActorPF2e, data?: Omit<ArmorStatisticData, "domains" | "label" | "slug">);
    getTraceData(): ArmorClassTraceData;
}
interface ArmorStatisticData extends StatisticData {
    rank?: ZeroToFour;
    details?: string;
}
interface ArmorClassTraceData extends StatisticTraceData {
    details: string;
}
export { ArmorClassTraceData, ArmorStatistic };
