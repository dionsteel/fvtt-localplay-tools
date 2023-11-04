import { ActorAttributes, ActorAttributesSource, ActorDetails, ActorDetailsSource, ActorSystemData, ActorSystemSource, BaseActorSourcePF2e } from "@/interfaces/pf2e/actor/data/base";
import { UUID } from "@/lib/utils";

type PartySource = BaseActorSourcePF2e<"party", PartySystemSource>;

interface PartySystemSource extends ActorSystemSource {
    attributes: PartyAttributesSource;
    details: PartyDetailsSource;
    traits?: never;
    campaign?: PartyCampaignSource;
}

interface PartyAttributesSource extends ActorAttributesSource {
    hp?: never;
    ac?: never;
    initiative?: never;
    immunities?: never;
    weaknesses?: never;
    resistances?: never;
}

interface PartyDetailsSource extends ActorDetailsSource {
    description: string;
    members: MemberData[];
    readonly alliance?: never;
    readonly level?: never;
}

interface MemberData {
    uuid: UUID;
}

interface PartySystemData
    extends Omit<PartySystemSource, "attributes" | "campaign" | "details">,
        Omit<ActorSystemData, "traits"> {
    attributes: PartyAttributes;
    details: PartyDetails;
    campaign: PartyCampaignSource;
}

interface PartyAttributes
    extends Omit<PartyAttributesSource, "immunities" | "weaknesses" | "resistances">,
        Omit<ActorAttributes, "initiative" | "ac" | "hp"> {
    immunities: never[];
    weaknesses: never[];
    resistances: never[];
    speed: { total: number };
}

interface PartyDetails extends Omit<PartyDetailsSource, "alliance" | "level">, ActorDetails {
    level: { value: number };
}

type PartyCampaignSource = { type: string } & Record<string, unknown>;

export type { MemberData, PartyCampaignSource, PartySource, PartySystemData };
