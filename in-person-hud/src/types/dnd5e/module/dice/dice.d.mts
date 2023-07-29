/**
 * Configuration data for a D20 roll.
 *
 * @typedef {object} D20RollConfiguration
 *
 * @property {string[]} [parts=[]]                // The dice roll component parts, excluding the initial d20.
 * @property {object} [data={}]                   // Data that will be used when parsing this roll.
 * @property {Event} [event]                      // The triggering event for this roll.
 *
 * ## D20 Properties
 * @property {boolean} [advantage]                //  Apply advantage to this roll (unless overridden by modifier keys or dialog)?
 * @property {boolean} [disadvantage]             //  Apply disadvantage to this roll (unless overridden by modifier keys or dialog)?
 * @property {number|null} [critical=20]          //  The value of the d20 result which represents a critical success,
 *                                                //     `null` will prevent critical successes.
 * @property {number|null} [fumble=1]             //  The value of the d20 result which represents a critical failure,
 *                                                //  `null` will prevent critical failures.
 * @property {number} [targetValue]               //  The value of the d20 result which should represent a successful roll.
 *
 * ## Flags//
 * @property {boolean} [elvenAccuracy]            //  Allow Elven Accuracy to modify this roll?
 * @property {boolean} [halflingLucky]            //  Allow Halfling Luck to modify this roll?
 * @property {boolean} [reliableTalent]           //  Allow Reliable Talent to modify this roll?
 *
 * ## Roll Configuration Dialog//
 * @property {boolean} [fastForward]              //   Should the roll configuration dialog be skipped?
 * @property {boolean} [chooseModifier=false]     //   If the configuration dialog is shown, should the ability modifier be
 *                                                //   configurable within that interface?
 * @property {string} [template]                  //   The HTML template used to display the roll configuration dialog.
 * @property {string} [title]                     //   Title of the roll configuration dialog.
 * @property {object} [dialogOptions]             //   Additional options passed to the roll configuration dialog.
 *
 * ## Chat Message//
 * @property {boolean} [chatMessage=true]         //   Should a chat message be created for this roll?
 * @property {object} [messageData={}]            //   Additional data which is applied to the created chat message.
 * @property {string} [rollMode]                  //   Value of `CONST.DICE_ROLL_MODES` to apply as default for the chat message.
 * @property {object} [flavor]                    //   Flavor text to use in the created chat message.
 */
export interface D20RollConfiguration {
  /**he dice roll component parts, excluding the initial d20. */
  parts?: string[];
  /**ata that will be used when parsing this roll. */
  data?: object;
  /**he triggering event for this roll. */
  event?: Event;
  /**Apply advantage to this roll (unless overridden by modifier keys or dialog)? */
  advantage?: boolean;
  /**Apply disadvantage to this roll (unless overridden by modifier keys or dialog)? */
  disadvantage?: boolean;
  //**he value of the d20 result which represents a critical success, */
  critical?: number | null;
  //**he value of the d20 result which represents a critical failure, */
  fumble?: number | null;
  //**he value of the d20 result which should represent a successful roll. */
  targetValue?: number;
  /**Allow Elven Accuracy to modify this roll? */
  elvenAccuracy?: boolean;
  /**Allow Halfling Luck to modify this roll? */
  halflingLucky?: boolean;
  /**Allow Reliable Talent to modify this roll? */
  reliableTalent?: boolean;
  /** Should the roll configuration dialog be skipped? */
  fastForward?: boolean;
  /** If the configuration dialog is shown, should the ability modifier be */
  chooseModifier?: boolean;
  /** The HTML template used to display the roll configuration dialog. */
  template?: string;
  /** Title of the roll configuration dialog. */
  title?: string;
  /** Additional options passed to the roll configuration dialog. */
  dialogOptions?: any;
  /** Should a chat message be created for this roll? */
  chatMessage?: boolean;
  /** Additional data which is applied to the created chat message. */
  messageData?: any;
  /** Value of `CONST.DICE_ROLL_MODES` to apply as default for the chat message. */
  rollMode?: string;
  /** Flavor text to use in the created chat message. */
  flavor?: object;
}

/**
 * A standardized helper function for managing core 5e d20 rolls.
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
 *
 * @param {D20RollConfiguration} configuration  Configuration data for the D20 roll.
 * @returns {Promise<D20Roll|null>}             The evaluated D20Roll, or null if the workflow was cancelled.
 */
export function d20Roll({
  parts,
  data,
  event,
  advantage,
  disadvantage,
  critical,
  fumble,
  targetValue,
  elvenAccuracy,
  halflingLucky,
  reliableTalent,
  fastForward,
  chooseModifier,
  template,
  title,
  dialogOptions,
  chatMessage,
  messageData,
  rollMode,
  flavor,
}?: D20RollConfiguration): Promise<D20Roll | null>;
/**
 * Configuration data for a damage roll.
 *
 * @typedef {object} DamageRollConfiguration
 *
 * @property {string[]} [parts=[]]  The dice roll component parts.
 * @property {object} [data={}]     Data that will be used when parsing this roll.
 * @property {Event} [event]        The triggering event for this roll.
 *
 * ## Critical Handling
 * @property {boolean} [allowCritical=true]  Is this damage roll allowed to be rolled as critical?
 * @property {boolean} [critical]            Apply critical to this roll (unless overridden by modifier key or dialog)?
 * @property {number} [criticalBonusDice]    A number of bonus damage dice that are added for critical hits.
 * @property {number} [criticalMultiplier]   Multiplier to use when calculating critical damage.
 * @property {boolean} [multiplyNumeric]     Should numeric terms be multiplied when this roll criticals?
 * @property {boolean} [powerfulCritical]    Should the critical dice be maximized rather than rolled?
 * @property {string} [criticalBonusDamage]  An extra damage term that is applied only on a critical hit.
 *
 * ## Roll Configuration Dialog
 * @property {boolean} [fastForward]        Should the roll configuration dialog be skipped?
 * @property {string} [template]            The HTML template used to render the roll configuration dialog.
 * @property {string} [title]               Title of the roll configuration dialog.
 * @property {object} [dialogOptions]       Additional options passed to the roll configuration dialog.
 *
 * ## Chat Message
 * @property {boolean} [chatMessage=true]  Should a chat message be created for this roll?
 * @property {object} [messageData={}]     Additional data which is applied to the created chat message.
 * @property {string} [rollMode]           Value of `CONST.DICE_ROLL_MODES` to apply as default for the chat message.
 * @property {string} [flavor]             Flavor text to use in the created chat message.
 */
/**
 * A standardized helper function for managing core 5e damage rolls.
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Critical, or no bonus respectively
 *
 * @param {DamageRollConfiguration} configuration  Configuration data for the Damage roll.
 * @returns {Promise<DamageRoll|null>}             The evaluated DamageRoll, or null if the workflow was canceled.
 */
export function damageRoll({
  parts,
  data,
  event,
  allowCritical,
  critical,
  criticalBonusDice,
  criticalMultiplier,
  multiplyNumeric,
  powerfulCritical,
  criticalBonusDamage,
  fastForward,
  template,
  title,
  dialogOptions,
  chatMessage,
  messageData,
  rollMode,
  flavor,
}?: DamageRollConfiguration): Promise<DamageRoll | null>;
/**
 * Configuration data for a D20 roll.
 */
export type D20RollConfiguration = {
  /**
   * The dice roll component parts, excluding the initial d20.
   */
  parts?: string[];
  /**
   * Data that will be used when parsing this roll.
   */
  data?: object;
  /**
   * The triggering event for this roll.
   *
   * ## D20 Properties
   */
  event?: Event;
  /**
   * Apply advantage to this roll (unless overridden by modifier keys or dialog)?
   */
  advantage?: boolean;
  /**
   * Apply disadvantage to this roll (unless overridden by modifier keys or dialog)?
   */
  disadvantage?: boolean;
  /**
   * The value of the d20 result which represents a critical success,
   * `null` will prevent critical successes.
   */
  critical?: number | null;
  /**
   * The value of the d20 result which represents a critical failure,
   *   `null` will prevent critical failures.
   */
  fumble?: number | null;
  /**
   * The value of the d20 result which should represent a successful roll.
   *
   * ## Flags
   */
  targetValue?: number;
  /**
   * Allow Elven Accuracy to modify this roll?
   */
  elvenAccuracy?: boolean;
  /**
   * Allow Halfling Luck to modify this roll?
   */
  halflingLucky?: boolean;
  /**
   * Allow Reliable Talent to modify this roll?
   *
   * ## Roll Configuration Dialog
   */
  reliableTalent?: boolean;
  /**
   * Should the roll configuration dialog be skipped?
   */
  fastForward?: boolean;
  /**
   * If the configuration dialog is shown, should the ability modifier be
   *   configurable within that interface?
   */
  chooseModifier?: boolean;
  /**
   * The HTML template used to display the roll configuration dialog.
   */
  template?: string;
  /**
   * Title of the roll configuration dialog.
   */
  title?: string;
  /**
   * Additional options passed to the roll configuration dialog.
   *
   * ## Chat Message
   */
  dialogOptions?: object;
  /**
   * Should a chat message be created for this roll?
   */
  chatMessage?: boolean;
  /**
   * Additional data which is applied to the created chat message.
   */
  messageData?: object;
  /**
   * Value of `CONST.DICE_ROLL_MODES` to apply as default for the chat message.
   */
  rollMode?: string;
  /**
   * Flavor text to use in the created chat message.
   */
  flavor?: object;
};
/**
 * Configuration data for a damage roll.
 */
export type DamageRollConfiguration = {
  /**
   * The dice roll component parts.
   */
  parts?: string[];
  /**
   * Data that will be used when parsing this roll.
   */
  data?: object;
  /**
   * The triggering event for this roll.
   *
   * ## Critical Handling
   */
  event?: Event;
  /**
   * Is this damage roll allowed to be rolled as critical?
   */
  allowCritical?: boolean;
  /**
   * Apply critical to this roll (unless overridden by modifier key or dialog)?
   */
  critical?: boolean;
  /**
   * A number of bonus damage dice that are added for critical hits.
   */
  criticalBonusDice?: number;
  /**
   * Multiplier to use when calculating critical damage.
   */
  criticalMultiplier?: number;
  /**
   * Should numeric terms be multiplied when this roll criticals?
   */
  multiplyNumeric?: boolean;
  /**
   * Should the critical dice be maximized rather than rolled?
   */
  powerfulCritical?: boolean;
  /**
   * An extra damage term that is applied only on a critical hit.
   *
   * ## Roll Configuration Dialog
   */
  criticalBonusDamage?: string;
  /**
   * Should the roll configuration dialog be skipped?
   */
  fastForward?: boolean;
  /**
   * The HTML template used to render the roll configuration dialog.
   */
  template?: string;
  /**
   * Title of the roll configuration dialog.
   */
  title?: string;
  /**
   * Additional options passed to the roll configuration dialog.
   *
   * ## Chat Message
   */
  dialogOptions?: object;
  /**
   * Should a chat message be created for this roll?
   */
  chatMessage?: boolean;
  /**
   * Additional data which is applied to the created chat message.
   */
  messageData?: object;
  /**
   * Value of `CONST.DICE_ROLL_MODES` to apply as default for the chat message.
   */
  rollMode?: string;
  /**
   * Flavor text to use in the created chat message.
   */
  flavor?: string;
};
