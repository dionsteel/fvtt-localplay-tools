/**
 * System data definition for NPCs.
 *
 * @property {object} attributes
 * @property {object} attributes.ac
 * @property {number} attributes.ac.flat         Flat value used for flat or natural armor calculation.
 * @property {string} attributes.ac.calc         Name of one of the built-in formulas to use.
 * @property {string} attributes.ac.formula      Custom formula to use.
 * @property {object} attributes.hp
 * @property {number} attributes.hp.value        Current hit points.
 * @property {number} attributes.hp.max          Maximum allowed HP value.
 * @property {number} attributes.hp.temp         Temporary HP applied on top of value.
 * @property {number} attributes.hp.tempmax      Temporary change to the maximum HP.
 * @property {string} attributes.hp.formula      Formula used to determine hit points.
 * @property {object} details
 * @property {TypeData} details.type             Creature type of this NPC.
 * @property {string} details.type.value         NPC's type as defined in the system configuration.
 * @property {string} details.type.subtype       NPC's subtype usually displayed in parenthesis after main type.
 * @property {string} details.type.swarm         Size of the individual creatures in a swarm, if a swarm.
 * @property {string} details.type.custom        Custom type beyond what is available in the configuration.
 * @property {string} details.environment        Common environments in which this NPC is found.
 * @property {number} details.cr                 NPC's challenge rating.
 * @property {number} details.spellLevel         Spellcasting level of this NPC.
 * @property {string} details.source             What book or adventure is this NPC from?
 * @property {object} resources
 * @property {object} resources.legact           NPC's legendary actions.
 * @property {number} resources.legact.value     Currently available legendary actions.
 * @property {number} resources.legact.max       Maximum number of legendary actions.
 * @property {object} resources.legres           NPC's legendary resistances.
 * @property {number} resources.legres.value     Currently available legendary resistances.
 * @property {number} resources.legres.max       Maximum number of legendary resistances.
 * @property {object} resources.lair             NPC's lair actions.
 * @property {boolean} resources.lair.value      Does this NPC use lair actions.
 * @property {number} resources.lair.initiative  Initiative count when lair actions are triggered.
 */
declare class NPCData extends CreatureTemplate {
    /**
     * Migrate the actor type string to type object.
     * @param {object} source  The candidate source data from which the model will be constructed.
     */
    static "__#8@#migrateTypeData"(source: object): void;
}
import CreatureTemplate from "./templates/creature";
