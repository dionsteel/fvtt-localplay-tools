// const { Actor5e } = require("../../../foundry-types/src/types/foundry/systems/dnd5e/module/documents/actor/actor.mjs");

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
 * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor").CharacterPF2e}
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
      } catch (e) { }
    },
    getItemData() { },
  },
  pf2e: {
    getActorData(id) {
      try {
        const actor = pf2eactor(id);
        try {
          actor.prepareData();
          actor.prepareDerivedData();
          actor.prepareEmbeddedDocuments();
          actor.prepareMartialProficiencies();
        } catch (e) { console.error(e); }
        // const classDC = actor.prepareClassDC();
        const strikes = actor.prepareStrikes();
        const speed = actor.prepareSpeed();

        // const data = { ...actor };
        let {
          allowedItemTypes,
          flags,
          hitPoints,
          initiative,
          abilities,
          skills,
          system,
          ancestry,
          background,
          class: aClass,
          classDC,
          classDCs, inventory,
          deity,
          deityBoonsCurses,
          familiar,
          feats,
          heritage, items,
          heroPoints,
          keyAbility,
          pfsBoons,
          traditions, itemTypes
        } = actor;
        inventory = [...inventory];
        items = [...items];
        const data = {
          ...actor,
          allowedItemTypes, itemTypes,
          flags, inventory,
          hitPoints, items,
          initiative,
          abilities,
          skills,
          system,
          ancestry,
          background,
          class: aClass,
          classDC,
          classDCs,
          deity,
          deityBoonsCurses,
          familiar,
          feats,
          heritage,
          heroPoints,
          keyAbility,
          pfsBoons,
          traditions,
          speed,
          strikes,
          classDC,
        };
        data.armorClass = { ...(actor?.armorClass || {}) };
        // data.system = { ...actor.system };
        return data;
      } catch (e) {
        console.error('Error Extracting pf2e actor details', e, id);
        return null;
      }
    },
    getTokenData(id) {
      try {
        const token = pf2etoken(id);
        return { ...token };
      } catch (e) { }
    },
    getItemData() { },
    /**
     * @returns {import("../../../foundry-types/src/types/foundry/systems/pf2e/module/actor/data/base").StrikeData}
     */
    getStrike(actorid, strikeIdx) {
      const actor = pf2eactor(actorid);
      return actor.system.actions[strikeIdx];
    },
    performStrike(actorid, options = {}) {
      let { strikeIdx = 0, variantIdx = 0, targetId, altUsage } = options;
      const strike = this.getStrike(actorid, strikeIdx);
      strike?.variants[variantIdx]?.roll({ target: targetId })
    },
    performStrikeAux(actorid, options = {}) {
      let { strikeIdx = 0, aux = 0, targetId, altUsage } = options;
      const strike = this.getStrike(actorid, strikeIdx);
      strike?.variants[aux]?.roll({ target: targetId })
    },
    rollStrikeDamage(actorid, options = {}) {
      console.log('Roll Strike Damage', actorid, options);
      let { strikeIdx, critical, targetId, altUsage } = options;
      const strike = this.getStrike(actorid, strikeIdx);
      console.log('strike:', strike);
      if (critical) {
        strike?.critical({ consumeAmmo: true, target: targetId, altUsage });
      } else {
        strike?.damage({ consumeAmmo: true, target: targetId, altUsage })
      }
    }
  },
};

module.exports = helpers;
