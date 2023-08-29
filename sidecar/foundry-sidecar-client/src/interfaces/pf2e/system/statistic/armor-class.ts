import { ActorPF2e } from "../../actor";
import { ArmorPF2e } from "../../item";
import { ZeroToFour } from "../../index";
import { Statistic, StatisticData, StatisticTraceData } from "./index.js";
declare class ArmorStatistic extends Statistic {
  #private;
  details: string;
  get item(): ArmorPF2e | null;
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
export type { ArmorClassTraceData, ArmorStatistic };
