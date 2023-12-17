// const { Actor5e } = require("../../../foundry-types/src/types/foundry/systems/dnd5e/module/documents/actor/actor.mjs");

// const { ActionItemPF2e } = require("../../../foundry-types/src/types/foundry/systems/pf2e/module/item");

/**
 *
 * @returns {import("../../../foundry-types/src/types/base").PathfinderGame}
 */
function pf2egame() {
  return game;
}

/**
 *
 * @returns {import("../../../foundry-types/src/types/base").DnD5eGame}
 */
function dnd5egame() {
  return game;
}
/**
 * @typedef CharacterActor
 * @property {import("../../../foundry-types/src/types/foundry/actor5e").CharacterData} system
 */
/**
 *
 * @param {string} id
 * @returns {import("../../../foundry-types/src/types/foundry/systems/dnd5e/module/documents/actor/actor.mjs").Actor5e & CharacterActor}
 */
function dnd5eactor(id) {
  return game.actors.get(id);
}

/**
 *
 * @param {Actor5e} actor
 * @returns {import("../../../foundry-types/src/types/foundry/actor5e").CharacterData}
 */
function dnd5eactorsystem(actor) {
  return actor.system;
}
/**
 *
 * @param {string} id
 * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor/character/index").CharacterPF2e}
 */
function pf2eactor(id) {
  return game.actors.get(id);
}

/**
 *
 * @param {string} id
 * @returns {import("../../../foundry-types/src/types/foundry/actor5e").Token5E}
 */
function dnd5etoken(id) {
  return canvas.tokens.get(id);
}

/**
 *
 * @param {string} id
 * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/token").TokenPF2e}
 */
function pf2etoken(id) {
  return canvas.tokens.get(id);
}

const helpers = {
  dnd5e: {
    getActorData(actor_id) {
      try {
        const actor = dnd5eactor(actor_id);
        actor.prepareData();
        actor.prepareEmbeddedDocuments();
        actor.prepareDerivedData();

        // actor.prepareBaseData();
        const {
          _id,
          appliedEffects,
          effects,
          armor,
          classes,
          flags,
          itemTypes,
          items,
          id,
          img,
          inCombat,
          isEmbedded,
          isOwner,
          isPolymorphed,
          isToken,
          // tokenImages = getTokenImages(),
          hasPlayerOwner,
          // labels,
          // limited,
          // link,
          name,
          documentName,
          overrides,
          permission,
          prototypeToken,
          shield,
          sort,
          statuses,
        } = actor;
        const { abilities, attributes, bonuses, details, resources, skills, spells, traits } = dnd5eactorsystem(actor);
        const system = { abilities, attributes, bonuses, details, resources, skills, spells, traits };

        const data = {
          _id,
          appliedEffects,
          effects: effects.toJSON ? effects.toJSON() : effects._source,
          armor,
          classes,
          flags,
          itemTypes,
          items: items.toJSON ? items.toJSON() : items._source,
          id,
          img,
          inCombat,
          isEmbedded,
          isOwner,
          isPolymorphed,
          isToken,
          hasPlayerOwner,
          // labels,
          // limited,
          // link,
          name,
          documentName,
          overrides,
          permission,
          prototypeToken,
          // schema,
          shield,
          sort,
          statuses,
          system,
        };
        return data;
      } catch (e) {
        console.error("actor extract error", e, actor_id);
        return null;
      }
    },
    getTokenData(id) {
      try {
        const token = dnd5etoken(id);
        return { ...token };
      } catch (e) {}
    },
    getItemData() {},
  },
  pf2e: {
    getActorData(id) {
      try {
        const actor = pf2eactor(id);
        try {
          // actor.prepareData();
          // actor.prepareDerivedData();
          // actor.prepareEmbeddedDocuments();
          // actor.prepareMartialProficiencies();
        } catch (e) {
          console.error(e);
        }
        // const classDC = actor.prepareClassDC();
        // const strikes = actor.prepareStrikes();
        // const speed = actor.prepareSpeed();

        // const data = { ...actor };
        let {
          allowedItemTypes,
          flags,
          hitPoints,
          // initiative,
          // abilities,
          // skills,
          system,
          // ancestry,
          // background,
          class: aClass,
          armorClass,
          auras,
          classDC,
          classDCs,
          conditions,
          // constructed,
          // deity,
          // deityBoonsCurses,
          // familiar,
          // feats,
          // heritage,
          heroPoints,
          img,
          inventory,
          itemTypes,
          items,
          keyAttribute,
          name,
          overrides,
          ownership,
          // parties,
          // perception,
          // pfsBoons,
          prototypeToken,
          // rules,
          // saves,
          // sort,
          // spellcasting,
          statuses,
          synthetics,
          // traditions,
          type,
          // _lastWildcard,
          // _stats,
          // _tokenImages,
        } = actor;
        inventory = [...inventory];
        items = [...items];
        const data = {
          allowedItemTypes,
          itemTypes,
          flags,
          // inventory,
          hitPoints,
          items,
          // initiative,
          // abilities,
          // skills,
          // system,
          // ancestry,
          // background,
          class: aClass,
          classDC,
          classDCs,
          // deity,
          // deityBoonsCurses,
          // familiar,
          // feats,
          // heritage,
          heroPoints,
          keyAttribute,
          // pfsBoons,
          // traditions,
          // speed,
          // strikes,
          // classDC,
          auras,
          conditions,
          // constructed,
          img,
          name,
          overrides,
          ownership,
          // perception,
          // prototypeToken,
          // rules,
          // saves,
          // sort,
          // spellcasting,
          statuses,
          synthetics,
          type,
          // _lastWildcard,
          // _stats,
          // _tokenImages,
        };
        data.armorClass = { ...(armorClass || {}) };
        data.system = { ...system };
        return data;
      } catch (e) {
        console.error("Error Extracting pf2e actor details", e, id);
        return null;
      }
    },
    getTokenData(id) {
      try {
        const token = pf2etoken(id);
        return { ...token };
      } catch (e) {}
    },
    getItemData() {},
    /**
     * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor/data/base").StrikeData}
     */
    getStrike(actorId, strikeIdx) {
      const actor = pf2eactor(actorId);

      return actor.system.actions[strikeIdx];
    },
    /**
     * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor/data/base").StrikeData}
     */
    getStrikeItem(actorId, identifier) {
      const actor = pf2eactor(actorId);
      const [itemId, slug] = identifier.split(".", 2);
      let action = actor.system.actions.find((a) => a.slug == slug);
      if (!action) {
        actor.system.actions.find((a) => a.item._id == itemId);
      }
      return action;
    },
    /**
     * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor/data/base").StrikeData}
     */
    getAction(actorId, strikeIdx) {
      const actor = pf2eactor(actorId);
      return actor.system.actions[strikeIdx];
    },
    /**
     *
     * @param {string} actionSourceId
     * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/item/action/document").ActionItemPF2e}
     */
    async getCommonAction(actionId = "1OagaWtBpVXExToo") {
      let ai = fromUuid("Compendium.pf2e.actionspf2e.Item." + actionId);

      return ai;
    },
    /**
     * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor/data/base").StrikeData}
     */
    getSkillAction(actorId, strikeIdx) {
      const actor = pf2eactor(actorId);
      return ConfigPF2eF2e.PF2E.ItemLevel;
    },
    performStrike(actorId, options = {}) {
      const actor = pf2eactor(actorId);
      const controlled = this.controlActorToken(actor);

      let { strikeIdx = 0, variantIdx = 0, targetId, altUsage } = options;
      const strike = this.getStrike(actorId, strikeIdx);
      strike?.variants[variantIdx]?.roll({ target: targetId });
    },

    async performAction(actorId, options = {}) {
      let { actionId, slug, variant, force } = options;

      const actor = pf2eactor(actorId);
      if (actor) {
        const controlled = this.controlActorToken(actor);

        let actorAction = actor.items.get(actionId);
        if (!actorAction && force) {
          try {
            console.warn(`Couldn't find action ${actionId} on actor ${actorId} - Adding from compendium`, options, actorAction, actor, controlled);
            const srcAction = await this.getCommonAction(actionId);
            await actor.items.set(actionId, srcAction);
            actorAction = actor.items.get(actionId);
            // actorAction = actor.items.find((a) => a.slug == srcAction.slug);
          } catch (e) {
            console.error("Error adding action to actor", e, { actionId, actorAction, srcAction });
          }
        } else {
          try {
            if (actorAction) {
              console.log("got action, using", { actorAction });
              if (actorAction.use) {
                actorAction.use({ ...options, actors: [actor] });
              } else if (actorAction.hasMacro && actorAction.hasMacro()) {
                actorAction.executeMacro();
              } else {
                if (actorAction.toChat) {
                  actorAction.toChat();
                }
              }
              // actorAction.toChat();
            } else {
              console.log("id changed??", actorAction, { actorId, options });
            }
          } catch (e) {
            console.error("Error performing action: ", e, options, actorId, actorAction);
          }
        }
      } else {
        console.error(`Couldn' find actor`, actorId, options, "\n", e);
      }
    },
    setRuleToggle(actorId, options = {}) {
      try {
        const { slug, itemId, enabled, value, domain, option, suboption } = options;
        const actor = pf2eactor(actorId);
        actor.toggleRollOption(domain, option, itemId, value, suboption).then((r) => console.log(actor.name, "set toggle", option, "to", value, suboption));
        // let tgl = actor.synthetics.toggles.find((t) => t.itemId == itemId);
        // if (tgl) {
        //   tgl.checked = enabled;
        // } else { console.warn(`Couldn't find toggle for ${itemId} on ${actor.name} (${actor.id})`) }
      } catch (e) {
        console.error("error setting toggle", actorId, options, "\n", e);
      }
    },
    // setInitiative(actorId, options = {}) {
    //   try {
    //     const { slug } = options;
    //     const actor = pf2eactor(actorId);
    //     if (actor.skills[slug]) {
    //       actor.initiative.statistic = actor.skills[slug];
    //     }
    //   } catch (e) {
    //     console.error("error setting toggle", actorId, options, "\n", e);
    //   }
    // },
    rollSkillCheck(actorId, options = {}) {
      try {
        const { skill, shortForm } = options;
        const actor = pf2eactor(actorId);
        this.controlActorToken(actor);
        actor?.skills[skill]?.check?.roll();
      } catch (e) {
        console.error("error doing skill check", actorId, options, "\n", e);
      }
    },
    rollPerceptionCheck(actorId, options = {}) {
      try {
        const { skill, shortForm } = options;
        const actor = pf2eactor(actorId);
        this.controlActorToken(actor);
        actor.perception.check.roll();
        // actor?.skills[skill]?.check?.roll();
      } catch (e) {
        console.error("error doing skill check", actorId, options, "\n", e);
      }
    },
    rollInitiative(actorId, options = {}) {
      try {
        const { skill, shortForm } = options;
        const actor = pf2eactor(actorId);
        this.controlActorToken(actor);
        actor.rollInitiative();
        // actor?.skills[skill]?.check?.roll();
      } catch (e) {
        console.error("error doing skill check", actorId, options, "\n", e);
      }
    },
    rollSavingThrow(actorId, options = { save: "reflex" }) {
      try {
        const { save, shortForm } = options;
        const actor = pf2eactor(actorId);
        this.controlActorToken(actor);
        actor?.saves[save]?.roll();
      } catch (e) {
        console.error("error rolling saving throw", actorId, options, "\n", e);
      }
    },
    performSkillAction(actorId, options = {}) {
      try {
        const actor = pf2eactor(actorId);
        const controlled = this.controlActorToken(actor);

        let { slug, variant } = options;

        let action = pf2egame().pf2e.actions.get(slug);
        let actionExec;
        if (action) {
          actionExec = (...a) => action.use(...a);
        } else {
          action = pf2egame().pf2e.actions[slug];
          actionExec = (...a) => action(...a);
        }
        // const action = this.getCommonAction(uuid);

        actionExec({ actors: [actor, ...(options.actors || [])], target: options.target, variant: options.variant });
      } catch (e) {
        console.error("Error performing skill action", actorId, options, e);
      }
    },
    controlActorToken(actor) {
      let worked = false;
      try {
        actor?.getActiveTokens(true, false).forEach((t) => {
          try {
            console.log("controlling actor token", actor, t);
            worked = t.control(true);
          } catch (e) {
            console.error("controlActorToken", actor, e);
          }
        });
      } catch (e) {
        console.error("controlActorToken", actor, e);
      }
      return worked;
    },
    performStrikeAux(actorId, options = {}) {
      try {
        const actor = pf2eactor(actorId);
        const controlled = this.controlActorToken(actor);

        let { strikeIdx = 0, aux = 0, targetId, altUsage } = options;
        const strike = this.getStrike(actorId, strikeIdx);
        strike?.variants[aux]?.roll({ target: targetId });
      } catch (e) {
        console.error("Error performing strike", { actorId, options }, e);
      }
    },
    performElementalBlast(actorId, options = {}) {
      try {
        const actor = pf2eactor(actorId);
        const blast = (actor.elementalBlast = actor.elementalBlast || new game.pf2e.ElementalBlast(actor));
        blast.attack(options);
      } catch (e) {
        console.error("Error doing elemental blast. ", actorId, options, e);
      }
    },
    rollStrikeDamage(actorId, options = {}) {
      try {
        const actor = pf2eactor(actorId);
        const controlled = this.controlActorToken(actor);
        console.log("Roll Strike Damage", actorId, options, controlled);
        let { identifier, critical, targetId, altUsage } = options;
        const strike = this.getStrikeItem(actorId, identifier);
        console.log("strike:", strike);
        if (critical) {
          strike?.critical({ consumeAmmo: true, target: targetId, altUsage });
        } else {
          strike?.damage({ consumeAmmo: true, target: targetId, altUsage });
        }
      } catch (e) {
        console.error("Error rolling strike damage", { actorId, options }, e);
      }
    },

    getJournals(options) {
      return pf2egame().journal.tree;
    },
  },
};

module.exports = helpers;
