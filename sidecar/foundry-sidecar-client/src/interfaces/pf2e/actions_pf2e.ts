export const ActionsPF2e = [
  {
    "_id": "00LNVSCbwJ8pszwE",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Mutagenic Flashback",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>You experience a brief resurgence of a mutagen. Choose one mutagen you've consumed since your last daily preparations. You gain the effects of that mutagen for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "mutagenic-flashback",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["alchemist", "manipulate"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.00LNVSCbwJ8pszwE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "04VQuQih77pxX06q",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Fling Magic",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are holding your wand implement.</p>\n<hr />\n<p>You fling magical energy at a target within 60 feet, dealing damage equal to 1d4 + your Charisma modifier to the target, with a @Check[type:reflex|dc:resolve(@actor.attributes.classDC.value)|basic:true] save against your class DC. The damage is of the type you selected when you gained your wand implement. At 3rd level and every 2 levels thereafter, the damage increases by 1d4.</p>\n<p>[[/r (ceil(@actor.level/2)d4+@actor.abilities.cha.mod)]]{Leveled damage}</p>\n<p>You can expend more energy than usual to boost the effect of Fling Magic, dealing d6s of damage instead of d4s. After you do so, the wand takes [[/r 1d4 #Recharge Wand]]{1d4 rounds} to recharge, during which you can't boost the wand's damage but can continue to Fling Magic normally. If you critically hit with a Strike, your wand recharges immediately as it draws in power from the clash.</p>\n<p>[[/r (ceil(@actor.level/2)d6+@actor.abilities.cha.mod)]]{Leveled boosted damage}</p>\n<hr />\n<p><strong>Special</strong> This activity has the trait corresponding to the damage type you selected.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "fling-magic",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "evocation", "magical", "manipulate", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.04VQuQih77pxX06q" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "06frwOOuo4HJtivl",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Furious Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon channels its anger into a furious attack. It makes a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, your eidolon deals an extra die of weapon damage and gains a +1 circumstance bonus to the damage roll.</p>\n<p>If you're at least 10th level, increase this to two extra dice with a +2 circumstance bonus, and if you're at least 18th level, increase it to three extra dice with a +3 circumstance bonus.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [
        {
          "key": "DamageDice",
          "predicate": ["melee", "furious-strike"],
          "selector": "strike-damage",
          "value": {
            "brackets": [
              { "end": 9, "value": { "diceNumber": 1 } },
              { "end": 17, "start": 10, "value": { "diceNumber": 2 } },
              { "start": 18, "value": { "diceNumber": 3 } }
            ]
          }
        },
        { "domain": "damage-roll", "key": "RollOption", "option": "furious-strike", "toggleable": true },
        {
          "key": "FlatModifier",
          "predicate": ["furious-strike"],
          "selector": "strike-damage",
          "type": "circumstance",
          "value": {
            "brackets": [
              { "end": 9, "value": 1 },
              { "end": 17, "start": 10, "value": 2 },
              { "start": 18, "value": 3 }
            ]
          }
        }
      ],
      "slug": "furious-strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.06frwOOuo4HJtivl" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "0XiPnnxKHWKFg1tN",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Piercing) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[piercing]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[piercing]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-piercing-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.0XiPnnxKHWKFg1tN" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "0b3TTeQGFOiy6ykz",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Change Shape (Beastkin)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You change into your humanoid or hybrid shape. Each shape has a specific, persistent appearance, and most beastkin remain in their hybrid shapes by default.</p>\n<p>In hybrid shape, you appear as a mix between your ancestry and your inherent animal. While in hybrid shape, you gain a jaws unarmed Strike resembling the features of your inherent animal (fangs for bats, beaks for eagles, mandibles for wasps, and so on). Your jaws deal 1d4 piercing damage, have the agile, finesse, and unarmed traits, and are in the brawling weapon group.</p>\n<p>In your humanoid shape, you retain the appearance of your original ancestry.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.qIOEe4kUN7FOBifb]{Effect: Hybrid Shape}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "change-shape-beastkin",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "polymorph", "primal", "transmutation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.0b3TTeQGFOiy6ykz" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "1If9lLVoZdO8woVg",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Consume Flesh",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are adjacent to the corpse of a Small or larger creature that died in the last hour</p>\n<hr />\n<p>You devour a chunk of the corpse. You become satiated for 1 hour.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "consume-flesh",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.1If9lLVoZdO8woVg" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "1LDOfV8jEka09eXr",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Deceptive Sidestep",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An opponent hits, but does not critically hit you, with a melee Strike.</p>\n<p><strong>Requirements</strong> You're in a duel, you're trained in Deception, and you rolled a Deception check for initiative this round.</p>\n<hr />\n<p>You draw your enemy in and pull away at the last moment. The triggering opponent must roll again and take the second result. If your opponent is using Intimidation for initiative when this ability is used, they also take a -2 circumstance penalty to the second attack roll.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "deceptive-sidestep",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["misfortune"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.1LDOfV8jEka09eXr" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "1OagaWtBpVXExToo",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Recall Knowledge",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>To remember useful information on a topic, you can attempt to Recall Knowledge. You might know basic information about something without needing to attempt a check, but Recall Knowledge requires you to stop and think for a moment so you can recollect more specific facts and apply them. You might even need to spend time investigating first. For instance, to use Medicine to learn the cause of death, you might need to conduct a forensic examination before attempting to Recall Knowledge.</p>\n<p>The following skills can be used to Recall Knowledge, getting information about the listed topics. In some cases, you can get the GM's permission to use a different but related skill, usually against a higher DC than normal. Some topics might appear on multiple lists, but the skills could give different information. For example, Arcana might tell you about the magical defenses of a golem, whereas Crafting could tell you about its sturdy resistance to physical attacks.</p>\n<ul>\n<li><strong>Arcana:</strong> Arcane theories, magical traditions, creatures of arcane significance, and arcane planes.</li>\n<li><strong>Crafting:</strong> Alchemical reactions and creatures, item value, engineering, unusual materials, and constructs.</li>\n<li><strong>Lore:</strong> The subject of the Lore skill's subcategory.</li>\n<li><strong>Medicine:</strong> Diseases, poisons, wounds, and forensics.</li>\n<li><strong>Nature:</strong> The environment, flora, geography, weather, creatures of natural origin, and natural planes.</li>\n<li><strong>Occultism:</strong> Ancient mysteries, obscure philosophy, creatures of occult significance, and esoteric planes.</li>\n<li><strong>Religion:</strong> Divine agents, divine planes, theology, obscure myths, and creatures of religious significance.</li>\n<li><strong>Society:</strong> Local history, key personalities, legal institutions, societal structure, and humanoid culture.</li>\n</ul>\n<p>The GM might allow checks to Recall Knowledge using other skills. For example, you might assess the skill of an acrobat using Acrobatics. If you're using a physical skill (like in this example), the GM will most likely have you use a mental ability score-typically Intelligence-instead of the skill's normal physical ability score.</p>\n<hr />\n<p><strong>Critical Success</strong> You recall the knowledge accurately and gain additional information or context.</p>\n<p><strong>Success</strong> You recall the knowledge accurately or gain a useful clue about your current situation.</p>\n<p><strong>Critical Failure</strong> You recall incorrect information or gain an erroneous or misleading clue.</p>\n<h2 class=\"title\">Sample Recall Knowledge Tasks</h2>\n<p>These examples use Society or Religion.</p>\n<ul>\n<li><strong>Untrained</strong> name of a ruler, key noble, or major deity</li>\n<li><strong>Trained</strong> line of succession for a major noble family, core doctrines of a major deity</li>\n<li><strong>Expert</strong> genealogy of a minor noble, teachings of an ancient priest</li>\n<li><strong>Master</strong> hierarchy of a genie noble court, major extraplanar temples of a deity</li>\n<li><strong>Legendary</strong> existence of a long-lost noble heir, secret doctrines of a religion</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "recall-knowledge",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.1OagaWtBpVXExToo" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "1kGNdIIhuglAjIp9",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Treat Wounds",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wearing or holding @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Tools}</p>\n<hr />\n<p>You spend 10 minutes treating one injured living creature (targeting yourself, if you so choose). The target is then temporarily @UUID[Compendium.pf2e.feat-effects.Item.Lb4q2bBAgxamtix5]{immune} to Treat Wounds actions for 1 hour, but this interval overlaps with the time you spent treating (so a patient can be treated once per hour, not once per 70 minutes).</p>\n<p>The Medicine check DC is usually 15, though the GM might adjust it based on the circumstances, such as treating a patient outside in a storm, or treating magically cursed wounds. If you're an expert in Medicine, you can instead attempt a DC 20 check to increase the Hit Points regained by 10; if you're a master of Medicine, you can instead attempt a DC 30 check to increase the Hit Points regained by 30; and if you're legendary, you can instead attempt a DC 40 check to increase the Hit Points regained by 50. The damage dealt on a critical failure remains the same.</p>\n<p>If you succeed at your check, you can continue treating the target to grant additional healing. If you treat them for a total of 1 hour, double the Hit Points they regain from Treat Wounds.</p>\n<p>The result of your Medicine check determines how many Hit Points the target regains.</p>\n<p>@UUID[Compendium.pf2e.pf2e-macros.Macro.6duZj0Ygiqv712rq]{Treat Wounds}</p>\n<hr />\n<p><strong>Critical Success</strong> The target regains [[/r 4d8]] Hit Points, and its @UUID[Compendium.pf2e.conditionitems.Item.Yl48xTdMh3aeQYL2]{Wounded} condition is removed.</p>\n<p><strong>Success</strong> The target regains [[/r 2d8]] Hit Points, and its wounded condition is removed.</p>\n<p><strong>Critical Failure</strong> The target takes [[/r 1d8]] damage.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "treat-wounds",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "healing", "manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.1kGNdIIhuglAjIp9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "1xRFPTFtWtGJ9ELw",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Sense Motive",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You try to tell whether a creature's behavior is abnormal. Choose one creature, and assess it for odd body language, signs of nervousness, and other indicators that it might be trying to deceive someone. The GM attempts a single secret <span data-pf2-action=\"senseMotive\" data-pf2-glyph=\"A\">Perception</span> check for you and compares the result to the Deception DC of the creature, the DC of a spell affecting the creature's mental state, or another appropriate DC determined by the GM. You typically can't try to Sense the Motive of the same creature again until the situation changes significantly.</p>\n<hr />\n<p><strong>Critical Success</strong> You determine the creature's true intentions and get a solid idea of any mental magic affecting it.</p>\n<p><strong>Success</strong> You can tell whether the creature is behaving normally, but you don't know its exact intentions or what magic might be affecting it.</p>\n<p><strong>Failure</strong> You detect what a deceptive creature wants you to believe. If they're not being deceptive, you believe they're behaving normally.</p>\n<p><strong>Critical Failure</strong> You get a false sense of the creature's intentions.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "sense-motive",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "general", "secret"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.1xRFPTFtWtGJ9ELw" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "21WIfSu7Xd7uKqV8",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Tumble Through",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You Stride up to your Speed. During this movement, you can try to move through the space of one enemy. Attempt an <span data-pf2-action=\"tumbleThrough\" data-pf2-glyph=\"A\">Acrobatics</span> check against the enemy's Reflex DC as soon as you try to enter its space. You can Tumble Through using @UUID[Compendium.pf2e.actionspf2e.Item.pprgrYQ1QnIDGZiy]{Climb}, @UUID[Compendium.pf2e.actionspf2e.Item.cS9nfDRGD83bNU1p]{Fly}, @UUID[Compendium.pf2e.actionspf2e.Item.c8TGiZ48ygoSPofx]{Swim}, or another action instead of Stride in the appropriate environment.</p>\n<hr />\n<p><strong>Success</strong> You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don't have enough Speed to move all the way through its space, you get the same effect as a failure.</p>\n<p><strong>Failure</strong> Your movement ends, and you trigger reactions as if you had moved out of the square you started in.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "tumble-through",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.21WIfSu7Xd7uKqV8" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "2424g94rpoiN1IPh",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Catharsis",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> determined by your catharsis emotion</p>\n<hr />\n<p><strong>Effect</strong> You gain the catharsis activation effects listed for your catharsis emotion. You gain that emotion's emotional fervor benefits for 3 rounds. When your emotional fervor ends, you suffer the listed emotional fallout. After using Catharsis, you can't use it again until you use the @UUID[Compendium.pf2e.actionspf2e.Item.EhLvRWFKhZ3HtrZO]{Settle Emotions} activity.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.JysvElDwGZ5ABQ6x]{Effect: Emotional Fervor}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "catharsis",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "emotion", "mental"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.2424g94rpoiN1IPh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "24PSsn1SKpUwYA1X",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Retraining",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Retraining offers a way to alter some of your character choices, which is helpful when you want to take your character in a new direction or change decisions that didn't meet your expectations. You can retrain feats, skills, and some selectable class features. You can't retrain your ancestry, heritage, background, class, or ability scores. You can't perform other downtime activities while retraining.</p>\n<p>Retraining usually requires you to spend time learning from a teacher, whether that entails physical training, studying at a library, or falling into shared magical trances. Your GM determines whether you can get proper training or whether something can be retrained at all. In some cases, you'll have to pay your instructor.</p>\n<p>Some abilities can be difficult or impossible to retrain (for instance, a sorcerer can retrain their bloodline only in extraordinary circumstances).</p>\n<p>When retraining, you generally can't make choices you couldn't make when you selected the original option. For instance, you can't exchange a 2nd-level skill feat for a 4th-level one, or for one that requires prerequisites you didn't meet at the time you took the original feat. If you don't remember whether you met the prerequisites at the time, ask your GM to make the call. If you cease to meet the prerequisites for an ability due to retraining, you can't use that ability. You might need to retrain several abilities in sequence in order to get all the abilities you want.</p>\n<h2 class=\"title\">Feats</h2>\n<p>You can spend a week of downtime retraining to swap out one of your feats. Remove the old feat and replace it with another of the same type. For example, you could swap a skill feat for another skill feat, but not for a wizard feat.</p>\n<h2 class=\"title\">Skills</h2>\n<p>You can spend a week of downtime retraining to swap out one of your skill increases. Reduce your proficiency rank in the skill losing its increase by one step and increase your proficiency rank in another skill by one step. The new proficiency rank has to be equal to or lower than the proficiency rank you traded away. For instance, if your bard is a master in Performance and Stealth, and an expert in Occultism, you could reduce the character's proficiency in Stealth to expert and become a master in Occultism, but you couldn't reassign that skill increase to become legendary in Performance. Keep track of your level when you reassign skill increases; the level at which your skill proficiencies changed can influence your ability to retrain feats with skill prerequisites.</p>\n<p>You can also spend a week to retrain an initial trained skill you gained during character creation.</p>\n<h2 class=\"title\">Class Features</h2>\n<p>You can change a class feature that required a choice, making a different choice instead. This lets you change a druid order or a wizard school, for example. The GM will tell you how long this takes-always at least a month.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "retraining",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.24PSsn1SKpUwYA1X" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "25WDi1cVUrW92sUj",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Clue In",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per 10 minutes</p>\n<p><strong>Trigger</strong> Another creature attempts a check to investigate a lead you're pursuing</p>\n<hr />\n<p>You share information with the triggering creature.</p>\n<p>They gain a circumstance bonus to their check equal to your circumstance bonus to checks investigating your subject from @UUID[Compendium.pf2e.actionspf2e.Item.xTK2zsWFyxSJvYbX]{Pursue a Lead}. The GM can add any relevant traits to this reaction depending on the situation, such as auditory and linguistic if you're conveying information verbally.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.vhSYlQiAQMLuXqoc]{Effect: Clue In}</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "clue-in",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "investigator"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT10M" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.25WDi1cVUrW92sUj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "2EE4aF4SZpYf0R6H",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Pick a Lock",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wearing or holding @UUID[Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc]{Thieves' Tools}</p>\n<hr />\n<p>Opening a lock without a key is very similar to @UUID[Compendium.pf2e.actionspf2e.Item.cYdz2grcOcRt4jk6]{Disable Device}, but the DC of the <span data-pf2-action=\"pickALock\" data-pf2-glyph=\"D\">Thievery</span> check is determined by the complexity and construction of the lock you are attempting to pick (locks and their DCs are found in their description). Locks of higher qualities might require multiple successes to unlock, since otherwise even an unskilled burglar could easily crack the lock by attempting the check until they rolled a natural 20. If you lack the proper tools, the GM might let you used improvised picks, which are treated as shoddy tools, depending on the specifics of the lock.</p>\n<hr />\n<p><strong>Critical Success</strong> You unlock the lock, or you achieve two successes toward opening a complex lock. You leave no trace of your tampering.</p>\n<p><strong>Success</strong> You open the lock, or you achieve one success toward opening a complex lock.</p>\n<p><strong>Critical Failure</strong> You break your tools. Fixing them requires using Crafting to @UUID[Compendium.pf2e.actionspf2e.Item.bT3skovyLUtP22ME]{Repair} them or else swapping in @UUID[Compendium.pf2e.equipment-srd.Item.Sw7MBLASN3xK4Y44]{Replacement Picks}.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "pick-a-lock",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.2EE4aF4SZpYf0R6H" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "2HJ4yuEFY1Cast4h",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "High Jump",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You Stride, then make a vertical Leap and attempt a DC 30 <span data-pf2-action=\"highJump\" data-pf2-glyph=\"D\">Athletics</span> check to increase the height of your jump. If you didn't Stride at least 10 feet, you automatically fail your check. This DC might be increased or decreased due to the situation, as determined by the GM.</p>\n<hr />\n<p><strong>Critical Success</strong> Increase the maximum vertical distance to 8 feet, or increase the maximum vertical distance to 5 feet and maximum horizontal distance to 10 feet.</p>\n<p><strong>Success</strong> Increase the maximum vertical distance to 5 feet.</p>\n<p><strong>Failure</strong> You Leap normally.</p>\n<p><strong>Critical Failure</strong> You don't Leap at all, and instead you fall @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone} in your space.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "high-jump",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.2HJ4yuEFY1Cast4h" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "2KV87ponbWXgGIhZ",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Act Together",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<p>You and your eidolon act as one. Either you or your eidolon takes an action or activity using the same number of actions as Act Together, and the other takes a single action.</p>\n<p>For example, if you spent 2 actions to Act Together, you could cast <em>@UUID[Compendium.pf2e.spells-srd.Item.y6rAdMK6EFlV6U0t]{Breathe Fire}</em> (2 actions) and your eidolon could Strike (1 action), or your eidolon could use its Breath Weapon (2 actions) and you could Stride (1 action).</p>\n<p>This lets you each use separate exploration activities like @UUID[Compendium.pf2e.actionspf2e.Item.IE2nThCmoyhQA0Jn]{Avoid Notice} as you travel.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "act-together",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["summoner", "tandem"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.2KV87ponbWXgGIhZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "2u915NdUyQan6uKF",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Demoralize",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>With a sudden shout, a well-timed taunt, or a cutting put-down, you can shake an enemy's resolve. Choose a creature within 30 feet of you who you're aware of. Attempt an <span data-pf2-action=\"demoralize\" data-pf2-glyph=\"A\">Intimidation</span> check against that target's Will DC. If the target does not understand the language you are speaking, or you're not speaking a language, you take a -4 circumstance penalty to the check. Regardless of your result, the target is temporarily immune to your attempts to Demoralize it for 10 minutes.</p>\n<hr />\n<p><strong>Critical Success</strong> The target becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2}.</p>\n<p><strong>Success</strong> The target becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1}.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "demoralize",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "emotion", "fear", "mental", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "34E7k2YRcsOU5uyl",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Change Shape (Anadi)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You change into your human or spider shape. Each shape has a specific, persistent appearance.</p>\n<p>In your human shape, you can't use unarmed attacks granted by your ancestry. You aren't off-guard when climbing in your spider shape.</p>\n<p>However, in your spider shape you can't use weapons, shields, or other held items of any sort, and you are limited in what actions you can take that have the manipulate trait. The only manipulate actions you can take are to @UUID[Compendium.pf2e.actionspf2e.Item.aBQ8ajvEBByv45yz]{Cast a Spell} with somatic components, weave silk or webbing, or simple @UUID[Compendium.pf2e.actionspf2e.Item.pvQ5rY2zrtPI614F]{Interact} actions such as opening an unlocked door. Your spider legs can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish. The GM might determine other manipulate actions are appropriate for your spider legs.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: The Mwangi Expanse" },
      "rules": [],
      "slug": "change-shape-anadi",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["anadi", "arcane", "concentrate", "polymorph", "transmutation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.34E7k2YRcsOU5uyl" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "3D9kGfwg4LUZBR9A",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Overdrive",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<hr />\n<p>Temporarily cranking the gizmos on your body into overdrive, you try to add greater power to your attacks. Attempt a @Check[type:crafting|dc:@self.level] that has a standard DC for your level.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.1XlJ9xLzL19GHoOL]{Effect: Overdrive}</p>\n<hr />\n<p><strong>Critical Success</strong> Your gizmos go into a state of incredible efficiency called critical overdrive, adding great power to your attacks. Your Strikes deal additional damage equal to your Intelligence modifier for 1 minute. After the Overdrive ends, your gizmos become unusable as they cool down or reset, and you can't use Overdrive for 1 minute.</p>\n<p><strong>Success</strong> Your gizmos go into overdrive, adding power to your attacks. As critical success, except the additional damage is equal to half your Intelligence modifier.</p>\n<p><strong>Failure</strong> You make a miscalculation and nothing happens.</p>\n<p><strong>Critical Failure</strong> Whoops! Something explodes. You take [[/r @actor.level[fire]]]{fire damage equal to your level}, and you can't use Overdrive again for 1 minute as your gizmos cool down and reset.</p>\n<hr />\n<p><strong>Special</strong> When under the effects of Overdrive, you can still use the @UUID[Compendium.pf2e.actionspf2e.Item.3D9kGfwg4LUZBR9A]{Overdrive} action. You can't extend your Overdrive's duration this way, but you can turn an overdrive into a critical overdrive if you critically succeed. A failure has no effect on your current Overdrive, and you end your Overdrive on a critical failure.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "overdrive",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["inventor", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.3D9kGfwg4LUZBR9A" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "3UEwtMA5y8foVqYP",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Electricity) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[electricity]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[electricity]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-electricity-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "electricity", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.3UEwtMA5y8foVqYP" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "3ZzoI9MTtJFd1Kjl",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Share Senses",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Your eidolon is manifested.</p>\n<p>You project your senses into your eidolon, allowing you to perceive through it. When you do, you lose all sensory information from your own body, but can sense through your eidolon's body for up to 1 minute. You can @UUID[Compendium.pf2e.actionspf2e.Item.AjLSHZSWQ90exdLo]{Dismiss} this effect.</p>\n<hr />\n<p><strong>Special</strong> This action has the trait matching your eidolon's tradition (arcane, divine, occult, or primal). Your eidolon can also use this ability. When it does, it projects its senses into your body.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "share-senses",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "divination", "scrying", "summoner"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.3ZzoI9MTtJFd1Kjl" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "3cuTA58ObXhuFX2r",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Bend Time",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> Your turn begins</p>\n<hr />\n<p><strong>Effect</strong> You are @UUID[Compendium.pf2e.conditionitems.Item.nlCjDvLMf2EkV2dl]{Quickened} this turn. You can use your extra action to Stride.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "bend-time",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["occult", "transmutation"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.3cuTA58ObXhuFX2r" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "3f5DMFu8fPiqHpRg",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Sustain a Spell",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have at least one spell active with a sustained duration, and you are not @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued}</p>\n<hr />\n<p>Choose one spell with a sustained duration you have in effect. The duration of that spell continues until the end of your next turn. Some spells might have slightly different or expanded effects if you sustain them. Sustaining a Spell for more than 10 minutes (100 rounds) ends the spell and makes you fatigued unless the spell lists a different maximum duration (such as \"sustained up to 1 minute\" or \"sustained up to 1 hour\").</p>\n<p>If your Sustain a Spell action is disrupted, the spell immediately ends.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "sustain-a-spell",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.3f5DMFu8fPiqHpRg" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "3yoajuKjwHZ9ApUY",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Grab an Edge",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You fall from or past an edge or handhold</p>\n<p><strong>Requirements</strong> Your hands are not tied behind your back or otherwise @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained}</p>\n<hr />\n<p>When you fall off or past an edge or other handhold, you can try to grab it, potentially stopping your fall. You must succeed at a Reflex save, usually at the Climb DC. If you grab the edge or handhold, you can then @UUID[Compendium.pf2e.actionspf2e.Item.pprgrYQ1QnIDGZiy]{Climb} up using Athletics.</p>\n<hr />\n<p><strong>Critical Success</strong> You grab the edge or handhold, whether or not you have a hand free, typically by using a suitable held item to catch yourself (catching a battle axe on a ledge, for example). You still take damage from the distance fallen so far, but you treat the fall as though it were 30 feet shorter.</p>\n<p><strong>Success</strong> If you have at least one hand free, you grab the edge or handhold, stopping your fall. You still take damage from the distance fallen so far, but you treat the fall as though it were 20 feet shorter. If you have no hands free, you continue to fall as if you had failed the check.</p>\n<p><strong>Critical Failure</strong> You continue to fall, and if you've fallen 20 feet or more before you use this reaction, you take 10 bludgeoning damage from the impact for every 20 feet fallen.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "grab-an-edge",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "manipulate"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.3yoajuKjwHZ9ApUY" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "49F65W6VwuXhmv8K",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Drink Blood",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> A @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed}, @UUID[Compendium.pf2e.conditionitems.Item.6uEgoh53GbXuHpTF]{Paralyzed}, @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained}, @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}, or willing creature is within your reach</p>\n<hr />\n<p><strong>Effect</strong> You sink your fangs into that creature and drink its blood. This requires an @Check[type:athletics|defense:fortitude] check against the victim's Fortitude DC if the victim is grabbed, and automatically succeeds for any of the other conditions. If you succeed, the creature becomes @UUID[Compendium.pf2e.conditionitems.Item.4D2KBtexWXa6oUMR]{Drained 1}, and you gain temporary HP equal to the target's level that last for 10 minutes. Further uses against the target don't increase the drained condition or grant you more temporary HP.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "drink-blood",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divine", "necromancy"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.49F65W6VwuXhmv8K" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "49y9Ec4bDii8pcD3",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Subsist",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You try to provide food and shelter for yourself, and possibly others as well, with a standard of living. This typically uses <span data-pf2-action=\"subsist\" data-pf2-skill=\"society\">Society</span> if you're in a settlement or <span data-pf2-action=\"subsist\" data-pf2-skill=\"survival\">Survival</span> if you're in the wild. The GM determines the DC based on the nature of the place where you're trying to Subsist. You might need a minimum proficiency rank to Subsist in particularly strange environments. Unlike most downtime activities, you can Subsist after 8 hours or less of exploration, but if you do, you take a -5 penalty.</p>\n<hr />\n<p><strong>Critical Success</strong> You either provide a subsistence living for yourself and one additional creature, or you improve your own food and shelter, granting yourself a comfortable living.</p>\n<p><strong>Success</strong> You find enough food and shelter with basic protection from the elements to provide you a subsistence living.</p>\n<p><strong>Failure</strong> You're exposed to the elements and don't get enough food, becoming @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued} until you attain sufficient food and shelter.</p>\n<p><strong>Critical Failure</strong> You attract trouble, eat something you shouldn't, or otherwise worsen your situation. You take a -2 circumstance penalty to checks to Subsist for 1 week. You don't find any food at all; if you don't have any stored up, you're in danger of starving or dying of thirst if you continue failing.</p><h2 class=\"title\">Sample Subsist Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> lush forest with calm weather or large city with plentiful resources</li>\n<li><strong>Trained</strong> typical hillside or village</li>\n<li><strong>Expert</strong> typical mountains or insular hamlet</li>\n<li><strong>Master</strong> typical desert or city under siege</li>\n<li><strong>Legendary</strong> barren wasteland or city of undead</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "subsist",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.49y9Ec4bDii8pcD3" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "4IxCKbGaEM9nUhld",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Finish The Job",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> On your last action, you failed (but didn't critically fail) a Strike with a firearm or crossbow you're holding in one hand, and your other hand is either wielding a melee weapon or empty.</p>\n<hr />\n<p>Your last attack failed, but it set you up for another. Make a Strike with your other hand, using a one-handed melee weapon or unarmed attack. This Strike uses the same multiple attack penalty as the Strike that failed on the last action. Afterward, increase your multiple attack penalty normally.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "finish-the-job",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.4IxCKbGaEM9nUhld" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5HZ4cYDowUw2oUbZ",
    "img": "systems/pf2e/icons/spells/meld-into-stone.webp",
    "name": "Tenacious Stance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are wearing armor</p>\n<hr />\n<p><strong>Effect</strong> You steady yourself, as tough and immutable as stone. You gain a number of temporary Hit Points equal to half your level (minimum 1) and a +2 circumstance bonus to DCs against being Shoved and Tripped. However, you no longer negate your armor check penalty or Speed penalty for having a high Strength while in this stance. After you leave Tenacious Stance, you lose any remaining temporary Hit Points from the stance, and you become temporarily immune to gaining temporary Hit Points from Tenacious Stance for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Highhelm" },
      "rules": [],
      "slug": "tenacious-stance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["stance"] },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Stance: Tenacious Stance", "uuid": "Compendium.pf2e.feat-effects.Item.Ms6WPXRWfXb2KpG2" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5HZ4cYDowUw2oUbZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5LW1k5DUkzbbYuYL",
    "img": "systems/pf2e/icons/spells/entrancing-eyes.webp",
    "name": "Daydream Trance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You fall into a half-sleeping trance. This lasts for 1 minute or until you fall @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}, whichever comes first. You can voluntarily end your trance by taking a single action, which has a concentrate trait, and succeeding at a @Check[type:will|dc:resolve(@actor.system.attributes.classOrSpellDC.value)] save against your own class DC or spell DC, whichever is higher. Once your trance ends, you can't enter a Daydream Trance again for 1 minute. While you're in your trance, you gain the following effects:</p>\n<ul>\n<li>You gain a +1 status bonus to Will saves. This bonus increases to +2 against mental effects. If you're legendary in Occultism, the bonus against mental effects increases to +3.</li>\n<li>You take a -1 penalty to Perception checks and initiative rolls.</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "daydream-trance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["enchantment", "mental", "occult"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Effect: Daydream Trance", "uuid": "Compendium.pf2e.feat-effects.Item.RATDyLyxXN3qmOas" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5LW1k5DUkzbbYuYL" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5V49l0K460CcvBOO",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Defend Life",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> The target takes damage</p>\n<p><strong>Requirements</strong> You're within 1 mile of the target</p>\n<hr />\n<p><strong>Effect</strong> After calculating the amount of damage the target would take (applying weaknesses, resistances, and the like), you lose an equal number of Hit Points, and the target doesn't take any of the damage. You can't reduce the amount of Hit Points you lose in this way. The target still takes any effects that would come with the damage, however, such as the venom on a viper's fangs Strike.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "defend-life",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5V49l0K460CcvBOO" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5Vuhf4DjvMvRqiEZ",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Negative) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[negative]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[negative]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-negative-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation", "negative"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5Vuhf4DjvMvRqiEZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5bCZGpp9yFHXDz1j",
    "img": "systems/pf2e/icons/spells/adapt-self.webp",
    "name": "Entity's Resurgence",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You would be reduced to 0 Hit Points but not immediately killed</p>\n<hr />\n<p><strong>Effect</strong> Instead of letting you fall unconscious, your entity takes control. You remain at 1 Hit Point and gain temporary Hit Points equal to your level + your key ability modifier that last for 1 minute. However, the entity is in control for 1 minute or until you fall unconscious, whichever comes first.</p>\n<p>While the entity is in control, you gain a +1 status bonus to attack rolls and damage rolls, and the GM usually controls your character, roleplaying the entity. The GM might decide to have you roleplay the entity instead, but they retain final say over any decisions you make. No matter the entity's nature, the entity is sure to wreak vengeance upon the foe who jeopardized the life of their vessel-even an evil entity won't change allegiances or ignore danger except in the most extreme circumstances.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "entitys-resurgence",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Effect: Entity's Resurgence", "uuid": "Compendium.pf2e.feat-effects.Item.yr5ey5qC8dXH749T" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5bCZGpp9yFHXDz1j" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5p2AMqM9bOVnhwPT",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Recenter",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're in a psychic duel and are trained in the skill matching the psychic center you are changing to.</p>\n<hr />\n<p>You adopt the psychic center matching the emotion of your choice. If you were already psychically centered, you lose your old psychic center when you adopt the new one.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "recenter",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5p2AMqM9bOVnhwPT" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "5tOovJGK2TQIBHUZ",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Grow",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can grow an item from a living thing, most commonly a plant. You need the Alchemical Crafting skill feat to Grow an alchemical item, the Magical Crafting skill feat to Grow a magic item, and the Snare Crafting feat to Grow a snare. To Grow an item, you must meet the following requirements.</p>\n<ul>\n<li>The item is your level or lower. An item that doesn't list a level is level 0. If the item is 9th level or higher, you must be a master in Crafting, and if it's 16th or higher, you must be legendary.</li>\n<li>You have the formula for the item; see Getting Formulas for more information.</li>\n<li>You have an appropriate set of tools for growing the item. While cultivation and gardening tools are typical for plants, you might also use a different technique that requires a different set of tools. For instance, if you play music to help your plants grow, you might use a musical instrument instead.</li>\n<li>You must supply special fertilizers or other magical nutrients worth at least half the item's Price. You always expend at least that quantity of fertilizers and magical nutrients when you Grow successfully. If you're in a settlement, you can usually spend currency to get the amount of magical nutrients you need, except in the case of rarer precious materials. You can also bring them with you in advance or forage for them with a skill like Herbalism Lore, gaining an amount of value based on the rules for @UUID[Compendium.pf2e.actionspf2e.Item.QyzlsLrqM0EEwd7j]{Earn Income}.</li>\n</ul>\n<p>You must spend 4 days at work, at which point you attempt a Crafting check. The GM determines the DC to Grow the item based on its level, rarity, and other circumstances. Depending on the specifics of the type of item, it might be easier to Grow than it is to Craft, or vice versa; typically, the GM can represent that by making an easy or hard DC adjustment.</p>\n<p>If your attempt to create the item is successful, you expend the fertilizers and other magical nutrients you supplied. You can pay the remaining portion of the item's Price in additional growth accelerants to complete the item immediately, or you can spend additional downtime days cultivating the item. For each additional day taken, reduce the value of the accelerants you need to complete the item. This amount is determined using Core Rulebook Table 4–2: Income Earned, based on your proficiency rank in Crafting and using your own level instead of a task level. After any of these downtime days, you can complete the item by spending the remaining portion of its Price in accelerants. If the downtime days you spend are interrupted, you can return to finish the item later, continuing where you left off.</p>\n<p>You also have the option to allow the item to grow mostly untended, only stopping to supervise it occasionally, though the pace is much slower without your direct intervention. At the end of each season in which you spent at least 1 day of downtime to Grow the item, roll an additional Crafting check and reduce the value of accelerants you need to expend to complete the item by the corresponding amount.</p>\n<hr />\n<p><strong>Critical Success</strong> Your attempt is successful. Each additional day spent Growing reduces the materials needed to complete the item by an amount based on your level + 1 and your proficiency rank in Crafting.</p>\n<p><strong>Success</strong> Your attempt is successful. Each additional day spent Growing reduces the materials needed to complete the item by an amount based on your level and your proficiency rank.</p>\n<p><strong>Failure</strong> You fail to complete the item. You can salvage the raw materials you supplied for their full value. If you want to try again, you must start over.</p>\n<p><strong>Critical Failure</strong> You fail to complete the item. You ruin 10% of the fertilizers and nutrients you supplied, but you can salvage the rest. If you want to try again, you must start over.</p>"
      },
      "source": { "value": "Pathfinder Treasure Vault" },
      "rules": [],
      "slug": "grow",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "manipulate"] },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.5tOovJGK2TQIBHUZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "6OZfIjiPjWTIe7Pr",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Spinning Crush",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding a loaded firearm or loaded crossbow.</p>\n<hr />\n<p>You go into a vicious spin, smashing your weapon into those nearby and increasing your momentum by firing. All creatures adjacent to you take [[/r (1d6+@actor.abilities.str.mod)[bludgeoning]]]{1d6 bludgeoning} damage plus your Strength modifier; this increases to [[/r (2d6+@actor.abilities.str.mod)[bludgeoning]]]{2d6} if your firearm has a striking rune, [[/r (3d6+@actor.abilities.str.mod)[bludgeoning]]]{3d6} if it has a greater striking rune, and [[/r (4d6+@actor.abilities.str.mod)[bludgeoning]]]{4d6} if it has a major striking rune. This ability does not apply other effects that increase damage with your firearm Strikes such as weapon specialization. Creatures affected by this attack must attempt a @Check[type:reflex|dc:resolve(@actor.attributes.classDC.value)|basic:true] save. A creature that fails its save is also pushed 5 feet directly away from you.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "spinning-crush",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.6OZfIjiPjWTIe7Pr" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "6Oe9dg3Lu10slyeC",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Influence",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You attempt to make a favorable impression on an NPC to convince the NPC to support your cause. Attempt a skill check to impress that NPC. The DC and skills which can apply can be found in the NPC's stat block.</p>\n<hr />\n<p><strong>Critical Success</strong> You gain 2 Influence Points with the chosen NPC.</p>\n<p><strong>Success</strong> You gain 1 Influence Point with the chosen NPC.</p>\n<p><strong>Failure</strong> You gain no Influence Points with the chosen NPC.</p>\n<p><strong>Critical Failure</strong> You lose 1 Influence Point with the chosen NPC.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "influence",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "linguistic"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.6Oe9dg3Lu10slyeC" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "6SAdjml3OZw0BZnn",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Thundering Roar",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>The target unleashes a powerful vocalization. Each enemy in a 10- foot emanation takes 4d8 sonic damage with a basic Will save against your spell DC. A creature that fails its Will save is also @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1}.</p>\n<hr />\n<p><strong>Heightened (+2)</strong> The damage from the roar increases by 2d8.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "thundering-roar",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "emotion", "enchantment", "fear", "flourish", "mental", "sonic"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.6SAdjml3OZw0BZnn" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "6lbr0Jnv0zMB5uGb",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Elemental Blast",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><span class=\"action-glyph\">1</span> or <span class=\"action-glyph\">2</span></p>\n<hr />\n<p>With a wave of your hand, you collect elemental matter from your aura and swing or hurl it. Choose one of your kinetic elements and a damage type listed for that element, then make a melee or ranged impulse attack against the AC of one creature. Add your Strength modifier to the damage roll for a melee Elemental Blast. If you make a 2-action Elemental Blast, you gain a status bonus to the damage roll equal to your Constitution modifier. The element determines the damage die, damage type, and range (for a ranged blast). A damage type other than a physical damage type adds its trait to the blast.</p>\n<ul>\n<li><strong>Air</strong> 1d6 electricity or slashing, 60 feet</li>\n<li><strong>Earth</strong> 1d8 bludgeoning or piercing, 30 feet</li>\n<li><strong>Fire</strong> 1d6 fire, range 60 feet</li>\n<li><strong>Metal</strong> 1d8 piercing or slashing, 30 feet</li>\n<li><strong>Water</strong> 1d8 bludgeoning or cold, 30 feet</li>\n<li><strong>Wood</strong> 1d8 bludgeoning or vitality, 30 feet</li>\n</ul>\n<hr />\n<p><strong>Critical Success</strong> The target takes double damage.</p>\n<p><strong>Success</strong> The target takes full damage.</p>\n<hr />\n<p><strong>Level (+4)</strong> The damage increases by one die.</p>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [
        {
          "alwaysActive": true,
          "domain": "elemental-blast",
          "key": "RollOption",
          "option": "action-cost",
          "predicate": ["self:effect:kinetic-aura"],
          "priority": 49,
          "suboptions": [
            { "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.OneAction", "value": "1" },
            { "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.TwoActions", "value": "2" }
          ],
          "toggleable": true
        },
        {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.kineticist.elementalBlast.air",
          "predicate": ["kinetic-gate:air", "self:effect:kinetic-aura", { "not": "battle-form" }],
          "priority": 19,
          "value": {
            "damageTypes": ["electricity", "slashing"],
            "dieFaces": 6,
            "element": "air",
            "img": "icons/magic/lightning/bolt-beam-strike-blue.webp",
            "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.Label.Air",
            "range": 60
          }
        },
        {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.kineticist.elementalBlast.earth",
          "predicate": ["kinetic-gate:earth", "self:effect:kinetic-aura", { "not": "battle-form" }],
          "priority": 19,
          "value": {
            "damageTypes": ["bludgeoning", "piercing"],
            "dieFaces": 8,
            "element": "earth",
            "img": "systems/pf2e/icons/actions/elemental-blast/earth.webp",
            "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.Label.Earth",
            "range": 30
          }
        },
        {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.kineticist.elementalBlast.fire",
          "predicate": ["kinetic-gate:fire", "self:effect:kinetic-aura", { "not": "battle-form" }],
          "priority": 19,
          "value": {
            "damageTypes": ["fire"],
            "dieFaces": 6,
            "element": "fire",
            "img": "icons/magic/fire/blast-jet-stream-embers-red.webp",
            "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.Label.Fire",
            "range": 60
          }
        },
        {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.kineticist.elementalBlast.metal",
          "predicate": ["kinetic-gate:metal", "self:effect:kinetic-aura", { "not": "battle-form" }],
          "priority": 19,
          "value": {
            "damageTypes": ["piercing", "slashing"],
            "dieFaces": 8,
            "element": "metal",
            "img": "systems/pf2e/icons/actions/elemental-blast/metal.webp",
            "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.Label.Metal",
            "range": 30
          }
        },
        {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.kineticist.elementalBlast.water",
          "predicate": ["self:effect:kinetic-aura", "kinetic-gate:water", { "not": "battle-form" }],
          "priority": 19,
          "value": {
            "damageTypes": ["bludgeoning", "cold"],
            "dieFaces": 8,
            "element": "water",
            "img": "systems/pf2e/icons/actions/elemental-blast/water.webp",
            "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.Label.Water",
            "range": 30
          }
        },
        {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.kineticist.elementalBlast.wood",
          "predicate": ["kinetic-gate:wood", "self:effect:kinetic-aura", { "not": "battle-form" }],
          "priority": 19,
          "value": {
            "damageTypes": ["bludgeoning", "positive"],
            "dieFaces": 8,
            "element": "wood",
            "img": "icons/magic/nature/root-vine-wood-blue.webp",
            "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.Label.Wood",
            "range": 30
          }
        },
        {
          "key": "FlatModifier",
          "label": "PF2E.SpecificRule.Kineticist.Impulse.ElementalBlast.TwoActionBonus",
          "predicate": ["action:elemental-blast", "action:cost:2"],
          "selector": "elemental-blast-damage",
          "slug": "two-action-elemental-blast",
          "type": "status",
          "value": "@actor.abilities.con.mod"
        },
        {
          "ability": "str",
          "key": "FlatModifier",
          "predicate": ["action:elemental-blast", "melee"],
          "selector": "elemental-blast-damage",
          "slug": "melee-elemental-blast",
          "type": "ability"
        },
        { "key": "DamageDice", "override": { "diceNumber": "max(1 + floor((@actor.level - 1) / 4), 1)" }, "predicate": ["class:kineticist"], "selector": "elemental-blast-damage" }
      ],
      "slug": "elemental-blast",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "impulse", "kineticist", "primal"] },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.6lbr0Jnv0zMB5uGb" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "74iat04PtfG8gn2Q",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Mighty Rage",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You use the @UUID[Compendium.pf2e.actionspf2e.Item.Ah5g9pDwWF9b9VW9]{Rage} action on your turn</p>\n<hr />\n<p>Use an action that has the rage trait. Alternatively, you can increase the actions of the triggering Rage to 2 to instead use a 2-action activity with the rage trait.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "mighty-rage",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["barbarian"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.74iat04PtfG8gn2Q" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "7GeguyqyD1TjoC4r",
    "img": "systems/pf2e/icons/features/classes/unleash-psyche.webp",
    "name": "Unleash Psyche",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your turn begins.</p>\n<hr />\n<p><strong>Requirements</strong> You're in an encounter, you Cast a Spell on your previous turn, and you aren't @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied}.</p>\n<hr />\n<p>You call on the depths of your mind and let psychic power flood through. Your Psyche remains Unleashed for 2 rounds or until your fall @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}, whichever comes first. You can't voluntarily quell your unleashed psyche. While your Psyche is Unleashed, the following effects occur.</p>\n<ul>\n<li>You're constantly surrounded by the visual manifestation of your psychic magic.</li>\n<li>When you cast a damaging spell, you gain a status bonus to its damage equal to double the spell's level. This applies only to spells that don't have a duration and that you cast using psychic spellcasting.</li>\n<li>You can use actions that have the psyche trait. After your unleashed psyche subsides, your mind must recover from the strain of channeling its full power. You can't use Unleash Psyche again for 2 rounds, and you're @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1} for 2 rounds.</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "unleash-psyche",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Effect: Unleash Psyche", "uuid": "Compendium.pf2e.feat-effects.Item.939OHjW9y8uCmDk3" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.7GeguyqyD1TjoC4r" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "7blmbDrQFNfdT731",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Shove",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have at least one hand free. The target can't be more than one size larger than you</p>\n<hr />\n<p>You push a creature away from you. Attempt an <span data-pf2-action=\"shove\" data-pf2-glyph=\"A\">Athletics</span> check against your target's Fortitude DC.</p>\n<hr />\n<p><strong>Critical Success</strong> You push your target up to 10 feet away from you. You can Stride after it, but you must move the same distance and in the same direction.</p>\n<p><strong>Success</strong> You push your target back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.</p>\n<p><strong>Critical Failure</strong> You lose your balance, fall, and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "shove",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.7blmbDrQFNfdT731" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "7dq6bpYvLArJ5odx",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Forge Documents",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You prepare forgeries that might serve as convincing props. Attempt a hard or very hard Society check.</p>\n<hr />\n<p><strong>Success</strong> You create convincing forgeries and gain 1 EP you can use only when presenting some form of paperwork.</p>\n<p><strong>Failure</strong> You create unconvincing documents. You gain 1 EP that (unknown to you) grants no benefit when used.</p>\n<p><strong>Critical Failure</strong> As a failure, but a PC who tries to use the Edge Point gets a critical failure, even if they use the Edge Point after rolling a failure.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "forge-documents",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.7dq6bpYvLArJ5odx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "7pdG8l9POMK76Lf2",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Warding Sign",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per minute</p>\n<p><strong>Trigger</strong> You attempt a saving throw against a magical effect, but you haven't rolled yet</p>\n<hr />\n<p><strong>Effect</strong> You call on the power of a personal, eldritch sign of protection, which flares brightly before slowly fading. You gain a +2 circumstance bonus to the triggering saving throw, or a +3 circumstance bonus if the effect is a curse.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "warding-sign",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common", "selected": {} },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1M" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.7pdG8l9POMK76Lf2" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "7qjfYsLNTr17Aftf",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Energy Emanation (Acid)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>Energy bursts forth from your body. You deal 1d6 acid damage to all adjacent creatures (@Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save using your class DC or spell DC, whichever is higher). At 3rd level, and every 2 levels thereafter, this damage increases by 1d6 damage.</p>\n<p>[[/r (ceil(@actor.level/2))d6[acid]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "energy-emanation-acid",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "primal"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.7qjfYsLNTr17Aftf" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "8aIe57gXJ94mPpW4",
    "img": "systems/pf2e/icons/spells/extract-poison.webp",
    "name": "Anadi Venom",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> a number of times per day equal to your level</p>\n<hr />\n<p>You envenom your fangs. If the next fangs Strike you make before the end of your turn hits and deals damage, the Strike deals an additional 1d6 poison damage. On a critical failure, the poison is wasted as normal. At 12th level, this poison damage increases to 2d6.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: The Mwangi Expanse" },
      "rules": [{ "itemType": "action", "key": "ItemAlteration", "mode": "upgrade", "predicate": ["item:id:{item|id}"], "property": "frequency-max", "value": "@actor.level" }],
      "slug": "anadi-venom",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["anadi"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "selfEffect": { "name": "Effect: Anadi Venom", "uuid": "Compendium.pf2e.feat-effects.Item.gN1LbKYQgi8Fx98V" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.8aIe57gXJ94mPpW4" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "8b63qGzqSUENQgOT",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Armor Up!",
    "system": {
      "description": { "gm": "", "value": "<p><strong>Effect</strong> You snap your fingers. The armor returns to your body.</p>" },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "armor-up",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.8b63qGzqSUENQgOT" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "8iCas8MeyqSXmE2a",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Dream Research",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You fall asleep within 5 miles of Xarwin Manor.</p>\n<p><strong>Frequency</strong> once per 12 hours</p>\n<hr />\n<p>While you sleep, you experience dreams that verge on nightmares. In these dreams, your mind drifts from your soul, and everything you know feels like it's being drawn up into the dark places between the stars to be devoured. During the dream, you can concentrate on one research topic you've unlocked that you haven't fully investigated. If you choose a topic for which the party has already discovered all research thresholds, you can immediately switch to a different topic.</p>\n<p>The skill you use and the DC for the check depend on the topic, as detailed in that topic's Dreams venue. If you're not dreaming within the manor grounds, the spiritual link to the malevolence is lessened and you take a -2 status penalty to the check.</p>\n<hr />\n<p><strong>Critical Success</strong> You gain 2 RP.</p>\n<p><strong>Success</strong> You gain 1 RP.</p>\n<p><strong>Critical Failure</strong> You peer too far into the malevolence, which notices your attempt. You manage to break the mental link just before you lose some memories to its ravenous appetite. Increase your malevolence condition value by 1.</p>"
      },
      "source": { "value": "Pathfinder Adventure: Malevolence" },
      "rules": [],
      "slug": "dream-research",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 12, "per": "PT1H" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.8iCas8MeyqSXmE2a" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "8kGpUUUSX1sB2OqQ",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Call Companion",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You spend 1 minute calling for a different animal companion, switching your active companion for another of your animal companions.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "call-companion",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.8kGpUUUSX1sB2OqQ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "8w6esW689NNbbq3i",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Call on Ancient Blood",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a saving throw against a magical effect, but you haven't rolled yet</p>\n<hr />\n<p>Your ancestors' innate resistance to magic surges, before slowly ebbing down. You gain a +1 circumstance bonus to the triggering saving throw and until the end of this turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [
        {
          "key": "FlatModifier",
          "predicate": ["call-on-ancient-blood", { "or": ["magical", "arcane", "divine", "primal", "occult"] }],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        },
        { "domain": "all", "key": "RollOption", "option": "call-on-ancient-blood", "toggleable": true }
      ],
      "slug": "call-on-ancient-blood",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.8w6esW689NNbbq3i" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "90fHUm0HGZFAbG1K",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Fire) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[fire]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[fire]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-fire-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation", "fire"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.90fHUm0HGZFAbG1K" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "9MJcQEMVVrmMyGyq",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Living Fortification",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll initiative.</p>\n<hr />\n<p>You can posture defensively with firearms or crossbows, acting like a walking tower. Interact to draw a firearm or crossbow. You then position that weapon defensively, gaining a +1 circumstance bonus to AC until the start of your first turn, or a +2 circumstance bonus if the chosen weapon has the parry trait.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "living-fortification",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.9MJcQEMVVrmMyGyq" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "9Nmz5114UB87n7Aj",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Affix a Fulu",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You affix a fulu to an armor, weapon, shield, creature, or structure that's beside or in the same square as you. A creature can remove a fulu from itself or an unattended object in its reach with a single action.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "affix-a-fulu",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.9Nmz5114UB87n7Aj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "9X80J5RN21Uoaeiw",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Binding Vow",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You bind yourself by formally speaking a binding vow. Supernatural power flows through and around you as you speak it, and all those present to hear it intrinsically know that it binds you. Breaking this vow is anathema to you, and if you break it willingly, you lose all pactbinder benefits until you fulfill your vow or, if that's impossible, participate in an atone ritual. The vow doesn't prevent unwilling violations and can't be used to try to circumvent mind-control magic, confusion, or similar situations where you perform an action not entirely of your own volition. A Binding Vow doesn't end until you've fulfilled it. Even if you die, the vow still binds you if you return to life. The vow doesn't force you to go to ridiculous extremes, such as dying, to fulfill your vow unless you specifically swear to go to such extremes. Trying to subvert your binding vow by making selfish promises (such as swearing to an ally that you'll kill someone you already wanted to kill) is in itself a violation of your vow, as is attempting to subvert other vows you've made (such as those from other pactbinder feats or a champion's code). When you make a Request or @UUID[Compendium.pf2e.actionspf2e.Item.tHCqgwjtQtzNqVvd]{Coerce} directly in service of fulfilling your vow, you gain a +1 circumstance bonus to your check against any creatures aware of your vow.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "binding-vow",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "enchantment", "occult"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.9X80J5RN21Uoaeiw" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "9gDMkIfDifh61yLz",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Stop",
    "system": {
      "description": { "gm": "", "value": "<p><strong>Requirements</strong> You are piloting a vehicle in motion.</p>\n<p>You bring the vehicle to a stop.</p>" },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "stop",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.9gDMkIfDifh61yLz" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "9kIvFxA5V9rvNWiH",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Thoughtful Reload",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>As you sink deep into a state of analytical calm and focus on the foe before you, your hands reload a bullet instinctively. Attempt a Recall Knowledge check against an opponent you can see and then Interact to reload.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "thoughtful-reload",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.9kIvFxA5V9rvNWiH" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "9sXQf1SyppS5B6O1",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Automaton Aim",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You steady your body and observe the events of the battlefield to maximize the range of your next shot. You reduce the penalty for firing into your weapon's second range increment from -2 to 0 for the next ranged attack you make this turn. You can use this action a second time in the same turn to reduce the penalty from firing into your weapon's third range increment from -4 to 0 for the next ranged attack you make this turn.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "automaton-aim",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.9sXQf1SyppS5B6O1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "A4L90h7FIgO5EyBx",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Siegebreaker",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding a firearm that has the kickback or scatter trait, or a two-handed crossbow.</p>\n<hr />\n<p>With unbelievable force, you charge and smash your weapon into a target before digging in your heels and pulling the trigger. Leap or Stride, then make a Strike with the required firearm or crossbow against an adjacent target. This Strike deals an additional @Damage[3d8[bludgeoning]] damage and ignores 10 points of the target's Hardness (if any), or of their shield's Hardness if the target uses Shield Block.</p>\n<p>After the Strike, you become @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} and position the required weapon defensively, gaining a +1 circumstance bonus to AC, or a +2 circumstance bonus if the chosen weapon has the parry trait. Both effects last until the start of your next turn. If a force would move you while you're immobilized in this way, it must succeed at an appropriate check against your class DC.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "siegebreaker",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.A4L90h7FIgO5EyBx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "A72nHGUtNXgY5Ey9",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Delay",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your turn begins</p>\n<hr />\n<p>You wait for the right moment to act. The rest of your turn doesn't happen yet. Instead, you're removed from the initiative order. You can return to the initiative order as a free action triggered by the end of any other creature's turn. This permanently changes your initiative to the new position. You can't use reactions until you return to the initiative order. If you Delay an entire round without returning to the initiative order, the actions from the Delayed turn are lost, your initiative doesn't change, and your next turn occurs at your original position in the initiative order.</p>\n<p>When you Delay, any @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent Damage} or other negative effects that normally occur at the start or end of your turn occur immediately when you use the Delay action. Any beneficial effects that would end at any point during your turn also end. The GM might determine that other effects end when you Delay as well. Essentially, you can't Delay to avoid negative consequences that would happen on your turn or to extend beneficial effects that would end on your turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "delay",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.A72nHGUtNXgY5Ey9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "AJeLwbQBt1YH3S6v",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Fade Into Daydreams",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your flights of imagination spill into the real world, causing you to become indistinct, hazy, or cloaked in figments. You become @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} until the start of your next turn. This concealment can't be used to Hide, as normal for concealing effects that leave your location obvious.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "fade-into-daydreams",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["illusion", "psyche", "psychic"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.AJeLwbQBt1YH3S6v" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "AJstokjdG6iDjVjE",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Impersonate",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You create a disguise to pass yourself off as someone or something you are not. Assembling a convincing disguise takes 10 minutes and requires a @UUID[Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT]{Disguise Kit}, but a simpler, quicker disguise might do the job if you're not trying to imitate a specific individual, at the GM's discretion.</p>\n<p>In most cases, creatures have a chance to detect your deception only if they use the @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} action to attempt Perception checks against your Deception DC. If you attempt to directly interact with someone while disguised, the GM rolls a secret <span data-pf2-action=\"impersonate\">Deception</span> check for you against that creature's Perception DC instead. If you're disguised as a specific individual, the GM might give creatures you interact with a circumstance bonus based on how well they know the person you're imitating, or the GM might roll a secret Deception check even if you aren't directly interacting with others.</p>\n<hr />\n<p><strong>Success</strong> You trick the creature into thinking you're the person you're disguised as. You might have to attempt a new check if your behavior changes.</p>\n<p><strong>Failure</strong> The creature can tell you're not who you claim to be.</p>\n<p><strong>Critical Failure</strong> The creature can tell you're not who you claim to be, and it recognizes you if it would know you without a disguise.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "impersonate",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "manipulate", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.AJstokjdG6iDjVjE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "AOWwwXVDWwliFlWj",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Blood Feast",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your vampiric animal companion attacks a bleeding foe and drinks its blood. Your companion attempts a Strike against a creature currently taking persistent bleed damage. The Strike deals 2d8 additional. If the Strike hits and deals damage, your vampiric animal companion gains temporary Hit Points equal to half your level that last for up to 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "blood-feast",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.AOWwwXVDWwliFlWj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "AWXPiqz4xDN03iPs",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Poison) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[poison]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[poison]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-poison-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation", "poison"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.AWXPiqz4xDN03iPs" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Ah5g9pDwWF9b9VW9",
    "img": "icons/skills/wounds/injury-face-impact-orange.webp",
    "name": "Rage",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You aren't @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued} or raging.</p>\n<hr />\n<p>You tap into your inner fury and begin raging. You gain a number of temporary Hit Points equal to your level plus your Constitution modifier. This frenzy lasts for 1 minute, until there are no enemies you can perceive, or until you fall @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}, whichever comes first. You can't voluntarily stop raging. While you are raging:</p>\n<ul>\n<li>You deal 2 additional damage with melee weapons and unarmed attacks. This additional damage is halved if your weapon or unarmed attack is agile.</li>\n<li>You take a -1 penalty to AC.</li>\n<li>You can't use actions with the concentrate trait unless they also have the rage trait. You can @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} while raging.</li>\n</ul>\n<p>After you stop raging, you lose any remaining temporary Hit Points from Rage, and you can't Rage again for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [
        {
          "hideIfDisabled": true,
          "key": "FlatModifier",
          "predicate": ["self:effect:rage", { "or": [{ "not": "ranged" }, { "and": ["feat:raging-thrower", "thrown"] }] }],
          "selector": "strike-damage",
          "slug": "rage",
          "value": 2
        },
        { "key": "AdjustModifier", "mode": "multiply", "predicate": ["item:trait:agile"], "priority": 95, "selector": "strike-damage", "slug": "rage", "value": 0.5 },
        { "hideIfDisabled": true, "key": "FlatModifier", "predicate": ["self:effect:rage"], "selector": "ac", "slug": "rage", "value": -1 }
      ],
      "slug": "rage",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["barbarian", "concentrate", "emotion", "mental"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Effect: Rage", "uuid": "Compendium.pf2e.feat-effects.Item.z3uyCMBddrPK5umr" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Ah5g9pDwWF9b9VW9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "AjLSHZSWQ90exdLo",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Dismiss",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You end one spell effect or magic item effect. This must be an effect you are allowed to dismiss, as defined by the spell or item. Dismissal might end the effect entirely or might end it just for a certain target or targets, depending on the spell or item.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "dismiss",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.AjLSHZSWQ90exdLo" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Aq2mXT2hLlstFL5C",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Invoke Celestial Privilege",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a saving throw against a divine effect, but you haven't rolled yet.</p>\n<hr />\n<p>You rise above the triggering effect, refusing to be harmed by it. You gain a +1 circumstance bonus to the triggering saving throw and to any other saving throws you attempt against divine effects until the start of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [
        { "key": "FlatModifier", "predicate": ["divine", "celestial-privilege"], "selector": "saving-throw", "type": "circumstance", "value": 1 },
        { "domain": "all", "key": "RollOption", "option": "celestial-privilege", "toggleable": true }
      ],
      "slug": "invoke-celestial-privilege",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Aq2mXT2hLlstFL5C" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "B7wDxyjX66JkiCOV",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Venom Draw",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Your @UUID[Compendium.pf2e.actionspf2e.Item.s4V7JWSMF9JPJAeX]{Envenom} action hasn't been expended.</p>\n<hr />\n<p>You quickly envenom poisonous saliva on your weapon as you draw it. Interact to draw a weapon, and then Envenom it. This uses up your daily use of Envenom.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "venom-draw",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.B7wDxyjX66JkiCOV" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "BCp3tn2HATUOUEdQ",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Gossip",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You seek out rumors about the infiltration's target. Attempt a normal, hard, or very hard Diplomacy check.</p>\n<hr />\n<p><strong>Critical Success</strong> You gain inside information about the location or group you're trying to infiltrate. This grants you a +2 circumstance bonus to future checks you attempt for preparation activities for this infiltration. If you share this information, those you share it with also gain this bonus.</p>\n<p><strong>Success</strong> You gain inside information about the place or group you're attempting to infiltrate that aids your planning.</p>\n<p><strong>Failure</strong> You learn nothing.</p>\n<p><strong>Critical Failure</strong> You hear a few mistaken rumors and take a -2 circumstance penalty to your next check for a preparation activity. Word spreads around that you're asking after that group or individual, increasing your Awareness Points by 1.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "gossip",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.BCp3tn2HATUOUEdQ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "BKMxC0ZvdYfdhx7C",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Objection",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per minute</p>\n<p><strong>Trigger</strong> You're about to attempt a saving throw against a linguistic effect</p>\n<hr />\n<p><strong>Effect</strong> Your devil's eye crackles with infernal glee as you discover a loophole in the wording of the triggering effect. You roll your saving throw twice, taking the higher result.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "objection",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1M" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.BKMxC0ZvdYfdhx7C" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "BKnN9la3WNrRgZ6n",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Conduct Energy",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Your last action or spell this turn had the acid, cold, electricity, fire, or sonic trait.</p>\n<hr />\n<p>You channel energy into your weapon. The weapon deals 1 additional damage per weapon damage die until the start of your next turn. This damage type matches the trait of the triggering action or spell. If your triggering action or spell had multiple eligible traits, you select one of those traits.</p>\n<p>@UUID[Compendium.pf2e.equipment-effects.Item.lU8IO9FIGK1DXVMy]{Effect: Conduct Energy}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "conduct-energy",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.BKnN9la3WNrRgZ6n" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "BRR0HS8yRhgBfipz",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "A Quick Glimpse Beyond",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a secret check</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You can roll the secret check yourself rather than have the GM roll it. As you roll, draw a harrow card. If the card drawn is from the suit of Stars, the next secret check you make during the next 24 hours can also be rolled by you. Each time you roll your own additional secret check in this way, draw a new harrow card, and each time you draw a card from the suit of Stars, your next secret check in the next 24 hours can also be rolled by you. If you ever critically fail a secret check that you roll yourself as a result of this ability, fate turns away from you, and your Pilgrim's Token no longer functions until the next time you make your daily preparations.</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [],
      "slug": "a-quick-glimpse-beyond",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.BRR0HS8yRhgBfipz" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Ba9EuLV1I2b1ue9P",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Map the Area",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>As long as your group has successfully Reconnoitered the hex, you can use this activity to create an accurate map of the hex with a successful Survival check (typically at a trained or expert DC). When you have an accurate map of the hex, the DC of any check to navigate that hex is reduced by 2.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "map-the-area",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Ba9EuLV1I2b1ue9P" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Bcxarzksqt9ezrs6",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Stride",
    "system": {
      "description": { "gm": "", "value": "<p>You move up to your Speed.</p>" },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "stride",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Bcxarzksqt9ezrs6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "BlAOM2X92SI6HMtJ",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Seek",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You scan an area for signs of creatures or objects. If you're looking for creatures, choose an area you're scanning. If precision is necessary, the GM can have you select a @Template[type:cone|distance:30] or a @Template[type:burst|distance:15] within line of sight. You might take a penalty if you choose an area that's far away.</p>\n<p>If you're using Seek to search for objects (including secret doors and hazards), you search up to a 10-foot square adjacent to you. The GM might determine you need to Seek as an activity, taking more actions or even minutes or hours if you're searching a particularly cluttered area.</p>\n<p>The GM attempts a single secret <span data-pf2-action=\"seek\" data-pf2-glyph=\"A\">Perception</span> check for you and compares the result to the Stealth DCs of any @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected} or @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} creatures in the area or the DC to detect each object in the area (as determined by the GM or by someone @UUID[Compendium.pf2e.actionspf2e.Item.qVNVSmsgpKFGk9hV]{Concealing the Object}). A creature you detect might remain hidden, rather than becoming @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed}, if you're using an imprecise sense or if an effect (such as <em>@UUID[Compendium.pf2e.spells-srd.Item.XXqE1eY3w3z6xJCB]{Invisibility}</em>) prevents the subject from being observed.</p>\n<hr />\n<p><strong>Critical Success</strong> If you were searching for creatures, any undetected or hidden creature you critically succeeded against becomes observed by you. If you were searching for an object, you learn its location.</p>\n<p><strong>Success</strong> If you were searching for creatures, any undetected creature you succeeded against becomes hidden from you instead of undetected, and any hidden creature you succeeded against becomes observed by you. If you were searching for an object, you learn its location or get a clue to its whereabouts, as determined by the GM.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "seek",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "secret"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "CCMemaB1RoVa0aOu",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Bestial Clarity",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You fail a saving throw against an enchantment effect</p>\n<hr />\n<p><strong>Effect</strong> Your bestial manifestation becomes more pronounced, and your mind gains a flash of clarity as your instincts take over. You can reroll the triggering saving throw with a +2 circumstance bonus, but you must use the new result. This is a fortune effect.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Firebrands" },
      "rules": [
        { "key": "FlatModifier", "predicate": ["bestial-clarity"], "selector": "saving-throw", "type": "circumstance", "value": 2 },
        { "domain": "all", "key": "RollOption", "option": "bestial-clarity", "toggleable": true }
      ],
      "slug": "bestial-clarity",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [] },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.CCMemaB1RoVa0aOu" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "CIqiFw9rqYnuzggq",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Practical Research",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirement</strong> You are a conversant or lore-speaker.</p>\n<hr />\n<p>You identify something interesting in the field and perform special research on it. This requires an appropriate check, which the GM will describe when the opportunity arises. The results of the check vary. While they typically include all the benefits of the Study activity, some opportunities for Practical Research also offer unique benefits, such as access to new character options.</p>"
      },
      "source": { "value": "Pathfinder #169: Kindled Magic" },
      "rules": [],
      "slug": "practical-research",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.CIqiFw9rqYnuzggq" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "CPTolKAF55p7D7Sn",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Mirror-Trickery",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You would be hit by a Strike</p>\n<hr />\n<p><strong>Effect</strong> You create an illusory duplicate at the last instant and attempt to trick your foe into striking it instead of you. The attacker attempts a @Check[type:flat|dc:11]; on a failure, the attack hits the duplicate, changing the result from a critical success to a success or a success to a failure.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "mirror-trickery",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "illusion", "occult", "visual"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.CPTolKAF55p7D7Sn" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "CrUPaPlsxy2bswaT",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Mesmerizing Performance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> The companion's last action was a successful Performance check to @UUID[Compendium.pf2e.actionspf2e.Item.EEDElIyin4z60PXx]{Perform}. The companion maintains its performance to captivate a single target within 30 feet that witnessed its successful performance. The target must attempt a Will save.</p>\n<hr />\n<p><strong>Success</strong> The target is unaffected and temporarily immune for 1 hour.</p>\n<p><strong>Failure</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.AdPVz7rbaVSRxHFg]{Fascinated} by the companion for its next action and then is temporarily immune for 1 hour.</p>\n<p><strong>Critical Failure</strong> The target is fascinated by the companion for 1 round. While it remains fascinated, it can't use reactions.</p>"
      },
      "source": { "value": "Pathfinder #152: Legacy of the Lost God" },
      "rules": [],
      "slug": "mesmerizing-performance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "emotion"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.CrUPaPlsxy2bswaT" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "D2PNfIw7U6Ks0VY4",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Steel Your Resolve",
    "system": {
      "description": { "gm": "", "value": "<p><strong>Cost</strong> 1 Resolve Point</p>\n<hr />\n<p>Regain Stamina Points equal to half your maximum.</p>" },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "steel-your-resolve",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common", "selected": { "general": "General" } },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.D2PNfIw7U6Ks0VY4" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "D91jQs0wleU5ml4K",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Drink from the Chalice",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<p><strong>Requirements</strong> You are holding your chalice implement.</p>\n<hr />\n<p>You drink from the liquid that slowly collects in your chalice or administer it to an adjacent ally. The drinker chooses whether to take a small sip or to drain the contents.</p>\n<ul>\n<li><strong>Sip</strong> A sip grants the drinker an amount of temporary Hit Points equal to 2 + half your level that last until the end of your next turn.</li>\n<li><strong>Drain</strong> <em>(healing, positive)</em> Drinking deep instead heals the drinker [[/r (3*@actor.level)[Healing]]]{3 Hit Points for each level} you have. After the chalice is drained, it's left with only its slowly collecting dregs; the chalice can't be drained again, though it can still be sipped from. If 10 minutes pass without anyone drinking from the chalice, it refills itself and can be drained again. If the drinker has negative healing, it can still heal in this way, and the effect has the negative trait instead of healing and positive.</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "drink-from-the-chalice",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["magical", "manipulate", "necromancy", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.D91jQs0wleU5ml4K" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "DCb62iCBrJXy0Ik6",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Request",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can make a request of a creature that's friendly or helpful to you. You must couch the request in terms that the target would accept given their current attitude toward you. The GM sets the DC of the <span data-pf2-action=\"request\" data-pf2-glyph=\"A\">Diplomacy</span> check based on the difficulty of the request. Some requests are unsavory or impossible, and even a helpful NPC would never agree to them.</p>\n<hr />\n<p><strong>Critical Success</strong> The target agrees to your request without qualifications.</p>\n<p><strong>Success</strong> The target agrees to your request, but they might demand added provisions or alterations to the request.</p>\n<p><strong>Failure</strong> The target refuses the request, though they might propose an alternative that is less extreme.</p>\n<p><strong>Critical Failure</strong> Not only does the target refuse the request, but their attitude toward you decreases by one step due to the temerity of the request.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "request",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "linguistic", "mental", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.DCb62iCBrJXy0Ik6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "DFRLID6lIRw7CzOT",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Spring the Trap",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll initiative.</p>\n<hr />\n<p>You can Interact to draw a combination weapon and set it to melee or ranged mode. On your first turn, your movement and ranged attacks don't trigger reactions that are normally triggered by movement or a ranged attack (such as Attack of Opportunity).</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "spring-the-trap",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.DFRLID6lIRw7CzOT" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "DS9sDOWkXrz2xmHi",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Eldritch Shot",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are wielding a bow</p>\n<hr />\n<p>You @UUID[Compendium.pf2e.actionspf2e.Item.aBQ8ajvEBByv45yz]{Cast a Spell} that takes 1 or 2 actions to cast and requires a spell attack roll. The effects of the spell do not occur immediately but are imbued into the bow you're wielding.</p>\n<p>Make a Strike with that bow. Your spell flies with the ammunition, using your attack roll result to determine the effects of both the Strike and the spell. This counts as two attacks for your multiple attack penalty, but you don't apply the penalty until after you've completed both attacks.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "eldritch-shot",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.DS9sDOWkXrz2xmHi" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "DXIZ4DHGxhZiWNWb",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Long-Term Rest",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can spend an entire day and night resting during downtime to recover Hit Points equal to your Constitution modifier (minimum 1) multiplied by twice your level.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "long-term-rest",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.DXIZ4DHGxhZiWNWb" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "DYn1igFjCGJEiP22",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Recall Ammunition",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You miss with a firearm or crossbow Strike while using an ordinary level-0 bolt or bullet</p>\n<hr />\n<p>You amplify the connection between bullet and firearm, calling your missed shot back into your gun. The ammunition you just fired is reloaded back into your gun and immediately ready to fire again.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "recall-ammunition",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["conjuration", "magical", "spellshot", "teleportation"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.DYn1igFjCGJEiP22" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Dt6B1slsBy8ipJu9",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Disarm",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have at least one hand free. The target can't be more than one size larger than you.</p>\n<hr />\n<p>You try to knock something out of a creature's grasp. Attempt an <span data-pf2-action=\"disarm\" data-pf2-glyph=\"A\">Athletics</span> check against the target's Reflex DC.</p>\n<hr />\n<p><strong>Critical Success</strong> You knock the item out of the target's grasp. It falls to the ground in the target's space.</p>\n<p><strong>Success</strong> You weaken your target's grasp on the item. Until the start of that creature's turn, attempts to Disarm the target of that item gain a +2 circumstance bonus, and the target takes a -2 circumstance penalty to attacks with the item or other checks requiring a firm grasp on the item.</p>\n<p>@UUID[Compendium.pf2e.equipment-effects.Item.z3ATL8DcRVrT0Uzt]{Effect: Disarm (Success)}</p>\n<p><strong>Critical Failure</strong> You lose your balance and become @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [{ "key": "FlatModifier", "predicate": ["action:disarm", "target:effect:disarm-success"], "selector": "athletics", "type": "circumstance", "value": 2 }],
      "slug": "disarm",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Dt6B1slsBy8ipJu9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EA5vuSgJfiHH7plD",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Track",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You follow tracks, moving at up to half your travel speed. After a successful check to Track, you can continue following the tracks at half your Speed without attempting additional checks for up to 1 hour. In some cases, you might Track in an encounter. In this case, Track is a single action and doesn't have the exploration trait, but you might need to roll more often because you're in a tense situation. The GM determines how often you must attempt this check.</p>\n<p>You attempt your <span data-pf2-action=\"track\">Survival</span> check when you start Tracking, once every hour you continue tracking, and any time something significant changes in the trail. The GM determines the DCs for such checks, depending on the freshness of the trail, the weather, and the type of ground.</p>\n<hr />\n<p><strong>Success</strong> You find the trail or continue to follow the one you're already following.</p>\n<p><strong>Failure</strong> You lose the trail but can try again after a 1-hour delay.</p>\n<p><strong>Critical Failure</strong> You lose the trail and can't try again for 24 hours.</p>\n<h2 class=\"title\">Sample Track Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> the path of a large army following a road</li>\n<li><strong>Trained</strong> relatively fresh tracks of a rampaging bear through the plains</li>\n<li><strong>Expert</strong> a nimble panther's tracks through a jungle, tracks obscured by rainfall</li>\n<li><strong>Master</strong> tracks obscured by winter snow, tracks of a mouse or smaller creature, tracks left on surfaces that can't hold prints like bare rock</li>\n<li><strong>Legendary</strong> old tracks through a windy desert's sands, tracks obscured by a major blizzard or hurricane</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "track",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "move", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EA5vuSgJfiHH7plD" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EAP98XaChJEbgKcK",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Retributive Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy damages your ally, and both are within 15 feet of you</p>\n<hr />\n<p>You protect your ally and strike your foe. The ally gains resistance to all damage against the triggering damage equal to 2 + your level. If the foe is within reach, make a melee Strike against it.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.DawVHfoPKbPJsz4k]{Effect: Champion's Resistance}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "retributive-strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["champion"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EAP98XaChJEbgKcK" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EEDElIyin4z60PXx",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Perform",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>When making a brief performance-one song, a quick dance, or a few jokes-you use the Perform action. This action is most useful when you want to prove your capability or impress someone quickly. Performing rarely has an impact on its own, but it might influence the DCs of subsequent Diplomacy checks against the observers-or even change their attitudes-if the GM sees fit.</p>\n<table>\n\t<tbody><tr><th>Performance</th><th>Additional Traits</th><th>Examples</th></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"acting\" data-pf2-glyph=\"A\">Acting</span></td><td>Auditory, linguistic, and visual</td><td>Drama, pantomime, puppetry</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"comedy\" data-pf2-glyph=\"A\">Comedy</span></td><td>Auditory, linguistic, and visual</td><td>Buffoonery, joke telling, limericks</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"dance\" data-pf2-glyph=\"A\">Dance</span></td><td>Move and visual</td><td>Ballet, huara, jig, macru</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"keyboards\" data-pf2-glyph=\"A\">Play Keyboard</span></td><td>Auditory and manipulate</td><td>Harpsichord, organ, piano</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"oratory\" data-pf2-glyph=\"A\">Oratory</span></td><td>Auditory and linguistic</td><td>Epic, ode, poetry, storytelling</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"percussion\" data-pf2-glyph=\"A\">Play Percussion</span></td><td>Auditory and manipulate</td><td>Chimes, drum, gong, xylophone</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"singing\" data-pf2-glyph=\"A\">Singing</span></td><td>Auditory and linguistic</td><td>Ballad, chant, melody, rhyming</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"strings\" data-pf2-glyph=\"A\">Play Strings</span></td><td>Auditory and manipulate</td><td>Fiddle, harp, lute, viol</td></tr>\n\t<tr><td><span data-pf2-action=\"perform\" data-pf2-variant=\"winds\" data-pf2-glyph=\"A\">Play Winds</span></td><td>Auditory and manipulate</td><td>Bagpipe, flute, recorder, trumpet</td></tr>\n</tbody></table>\n<hr />\n<p><strong>Critical Success</strong> Your performance impresses the observers, and they're likely to share stories of your ability.</p>\n<p><strong>Success</strong> You prove yourself, and observers appreciate the quality of your performance.</p>\n<p><strong>Failure</strong> Your performance falls flat.</p>\n<p><strong>Critical Failure</strong> You demonstrate only incompetence.</p><h2 class=\"title\">Sample Perform Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> audience of commoners</li>\n<li><strong>Trained</strong> audience of artisans</li>\n<li><strong>Expert</strong> audience of merchants or minor nobles</li>\n<li><strong>Master</strong> audience of high nobility or minor royalty</li>\n<li><strong>Legendary</strong> audience of major royalty or otherworldly beings</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "perform",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EEDElIyin4z60PXx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EHa0owz6mccnmSBf",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Final Surge",
    "system": {
      "description": { "gm": "", "value": "<p>You Stride twice. The @UUID[Compendium.pf2e.equipment-srd.Item.GS4YvQieBS11JNYR]{Drakeheart Mutagen}'s duration ends.</p>" },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "final-surge",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EHa0owz6mccnmSBf" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ERNaJbLeFtdV96cZ",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "De-Animating Gestures (True)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You designate a single construct within 30 feet that you can see or hear. The construct is @UUID[Compendium.pf2e.conditionitems.Item.xYTAsEpcJE1Ccni3]{Slowed 1} for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Society Scenario #1-00: Origin of the Open Road" },
      "rules": [],
      "slug": "de-animating-gestures-true",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ERNaJbLeFtdV96cZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ESMIHOOahLQoqxW1",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Call Gun",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Effect</strong> You hold aloft a free hand and call the firearm or crossbow you chose during your daily preparations into your hand. As long as the weapon you chose is on the same plane, it appears in your hand.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "call-gun",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["conjuration", "magical"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ESMIHOOahLQoqxW1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EcDcowQ8vS6cEfXd",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Scout Location",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You spend time observing the place or group you wish to infiltrate. Attempt a normal, hard, or very hard DC Perception, Society or Stealth check.</p>\n<hr />\n<p><strong>Success</strong> You make observations that provide 1 EP.</p>\n<p><strong>Failure</strong> You learn nothing particularly noteworthy.</p>\n<p><strong>Critical Failure</strong> You misjudge some aspect of what you observed, gaining 1 EP that results in a critical failure instead of a success when used, even if a PC uses the Edge Point after rolling a failure.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "scout-location",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EcDcowQ8vS6cEfXd" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EeM0Czaep7G5ZSh5",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Ten Paces",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll initiative.</p>\n<hr />\n<p>You react to trouble with lightning speed, positioning yourself just right. You gain a +2 circumstance bonus to your initiative roll, and you can Interact to draw a one-handed firearm or one-handed crossbow. As your first action on your first turn, you can Step up to 10 feet as a free action.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [
        { "key": "FlatModifier", "predicate": ["ten-paces"], "selector": "initiative", "type": "circumstance", "value": 2 },
        { "domain": "all", "key": "RollOption", "option": "ten-paces", "toggleable": true }
      ],
      "slug": "ten-paces",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EeM0Czaep7G5ZSh5" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EfjoIuDmtUn4yiow",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Opportune Riposte",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A foe within your reach critically fails a Strike against you</p>\n<hr />\n<p>You take advantage of an opening from your enemy's fumbled attack. You either make a melee Strike against the triggering foe or attempt to @UUID[Compendium.pf2e.actionspf2e.Item.Dt6B1slsBy8ipJu9]{Disarm} it of the weapon it used for the Strike.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "opportune-riposte",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["swashbuckler"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EfjoIuDmtUn4yiow" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EhLvRWFKhZ3HtrZO",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Settle Emotions",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You spend 10 minutes using techniques you've developed to calm your emotions and bring them back under control. This allows you to access your @UUID[Compendium.pf2e.actionspf2e.Item.2424g94rpoiN1IPh]{Catharsis} again.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "settle-emotions",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "emotion", "mental"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EhLvRWFKhZ3HtrZO" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EmFzFAwgQ0lJZwba",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Negative) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[negative]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[negative]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-negative-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation", "negative"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EmFzFAwgQ0lJZwba" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EuoCFSHTzi0VOfuf",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Harrow the Fiend",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You start your turn in combat against a foe or foes you recognize to be fiends</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You gain a +1 status bonus on all Strikes or spell attack rolls against fiends for the duration of combat. Once during combat, you can draw a harrow card after you determine if a Strike or spell attack on a fiend hits but before you determine damage or effects caused to the fiend. If you draw a card from the suit of Hammers, increase the degree of success of your Strike or spell attack by one.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.MSkspeBsbXm6LQ19]{Effect: Harrow the Fiend}</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [],
      "slug": "harrow-the-fiend",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EuoCFSHTzi0VOfuf" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "EwgTZBWsc8qKaViP",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Investigate",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You seek out information about your surroundings while traveling at half speed. You use Recall Knowledge as a secret check to discover clues among the various things you can see and engage with as you journey along. You can use any skill that has a Recall Knowledge action while Investigating, but the GM determines whether the skill is relevant to the clues you could find.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "investigate",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.EwgTZBWsc8qKaViP" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "F0JgJR2rXKOg9k1z",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Upstage",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A foe attempts a skill check and doesn't get a critical success</p>\n<hr />\n<p>After your foe has tried their best, you show everyone how it's really done. Attempt a check using the same skill that triggered this reaction.</p>\n<hr />\n<p><strong>Critical Success</strong> You gain a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks until the end of your next turn.</p>\n<p><strong>Success</strong> As critical success, except you gain the benefits only if the triggering creature failed their skill check.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "upstage",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.F0JgJR2rXKOg9k1z" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "F4Tz0YFz1Lr4eVZR",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "De-Animating Gestures (False)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You designate a single construct within 30 feet that you can see or hear. The construct becomes @UUID[Compendium.pf2e.conditionitems.Item.nlCjDvLMf2EkV2dl]{Quickened 1} for 1 minute and is temporarily immune to this ability for 24 hours. It can use its additional action only to Stride or Strike.</p>"
      },
      "source": { "value": "Pathfinder Society Scenario #1-00: Origin of the Open Road" },
      "rules": [],
      "slug": "de-animating-gestures-false",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.F4Tz0YFz1Lr4eVZR" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Fe487XZBdqEI2InL",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Dispelling Bullet",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You imprint a bullet with a field of abjuration built upon your magical signature, disrupting the magic of whatever it hits. Make a firearm or crossbow Strike against a foe you can see. If you hit, you attempt to counteract a spell effect active on the target (your choice, or the highest-level effect if you don't choose). Your counteract level is equal to half your level (rounded up), and your counteract check modifier is equal to your class DC - 10.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "dispelling-bullet",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["abjuration", "magical", "spellshot"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Fe487XZBdqEI2InL" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Fha8jFmfkOPxAsrZ",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Calculate Threats",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your subconscious automatically calculates vectors and forces when your mind is unleashed, showing you the likely path of incoming attacks to avoid. You gain a +2 circumstance bonus to AC and Reflex saves until the beginning of your next turn.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.P6druSuWIVoLrXJR]{Effect: Calculate Threats}</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "calculate-threats",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["mental", "psyche", "psychic"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Fha8jFmfkOPxAsrZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "FkfWKq9jhhPzKAbb",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Rampaging Ferocity",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You use @UUID[Compendium.pf2e.feats-srd.Item.PlhPpdwIV0rIAJ8K]{Orc Ferocity}</p>\n<hr />\n<p>You lash out viciously even as you fend off death. Make a single melee Strike. If this Strike brings a foe to 0 Hit Points, this activation of Orc Ferocity doesn't count against its frequency.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "rampaging-ferocity",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.FkfWKq9jhhPzKAbb" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "FzZAYGib08aEq5P2",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Accidental Shot",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You make a Strike with a ranged weapon, rolling the attack and damage twice and using the better results for each. The attack ignores circumstance penalties to the attack roll and any flat check required due to the target being @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} or @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden}.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "accidental-shot",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.FzZAYGib08aEq5P2" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "GPd3hmyUSbcSBj39",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Stellar Misfortune",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day;</p>\n<p><strong>Trigger</strong> A creature you can see is about to attempt a saving throw, attack roll, or skill check;</p>\n<p><strong>Requirements</strong> You must be under the night sky with the stars visible;</p>\n<p><strong>Effect</strong> You call upon the power of a dooming star, exacerbating the target's bad luck. The target must roll the triggering check twice and take the worse result.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Travel Guide" },
      "rules": [],
      "slug": "stellar-misfortune",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divination", "misfortune", "occult"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.GPd3hmyUSbcSBj39" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "GkmbTGfg8KcgynOA",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Create a Diversion",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>With a gesture, a trick, or some distracting words, you can create a diversion that draws creatures' attention elsewhere. If you use a gesture or trick, this action gains the manipulate trait. If you use distracting words, it gains the auditory and linguistic traits.</p>\n<p>Attempt a single Deception check (<span data-pf2-action=\"createADiversion\" data-pf2-glyph=\"A\" data-pf2-variant=\"distracting-words\">distracting words</span>, <span data-pf2-action=\"createADiversion\" data-pf2-glyph=\"A\" data-pf2-variant=\"gesture\">gesture</span>, or <span data-pf2-action=\"createADiversion\" data-pf2-glyph=\"A\" data-pf2-variant=\"trick\">trick</span>) and compare it to the Perception DCs of the creatures whose attention you're trying to divert. Whether or not you succeed, creatures you attempt to divert gain a +4 circumstance bonus to their Perception DCs against your attempts to Create a Diversion for 1 minute.</p>\n<hr />\n<p><strong>Success</strong> You become @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} to each creature whose Perception DC is less than or equal to your result. (The hidden condition allows you to @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak} away.) This lasts until the end of your turn or until you do anything except Step or use the @UUID[Compendium.pf2e.actionspf2e.Item.XMcnh4cSI32tljXa]{Hide} or the Sneak action of the Stealth skill. If you Strike a creature, the creature remains @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against that attack, and you then become @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed}. If you do anything else, you become observed just before you act unless the GM determines otherwise.</p>\n<p><strong>Failure</strong> You don't divert the attention of any creatures whose Perception DC exceeds your result, and those creatures are aware you were trying to trick them.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "create-a-diversion",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["mental", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.GkmbTGfg8KcgynOA" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "GmqHs4NEhAjqyAze",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Spiritual Aid",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You fail a Reflex or Will saving throw</p>\n<hr />\n<p><strong>Effect</strong> You reroll the triggering saving throw. You must use the second result, even if it's worse. If you roll a success, you get a critical success instead.</p>"
      },
      "source": { "value": "Pathfinder #188: They Watched the Stars" },
      "rules": [
        { "domain": "all", "key": "RollOption", "option": "spiritual-aid", "toggleable": true },
        { "adjustment": { "success": "one-degree-better" }, "key": "AdjustDegreeOfSuccess", "predicate": ["spiritual-aid"], "selector": "reflex" },
        { "adjustment": { "success": "one-degree-better" }, "key": "AdjustDegreeOfSuccess", "predicate": ["spiritual-aid"], "selector": "will" }
      ],
      "slug": "spiritual-aid",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [] },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.GmqHs4NEhAjqyAze" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "H6v1VgowHaKHnVlG",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Burrow",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have a burrow Speed</p>\n<hr />\n<p>You dig your way through dirt, sand, or a similar loose material at a rate up to your burrow Speed. You can't burrow through rock or other substances denser than dirt unless you have an ability that allows you to do so.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "burrow",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.H6v1VgowHaKHnVlG" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "HAmGozJwLAal5v82",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Intensify Vulnerability",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Prerequisites</strong> Exploit Vulnerability</p>\n<p><strong>Frequency</strong> once per round</p>\n<p><strong>Requirements</strong> You're benefiting from Exploit Vulnerability, you can see the subject, and you haven't used Exploit Vulnerability this round.</p>\n<hr />\n<p>You present your implement and esoterica again, intensifying their effects on the target in a way unique to your implement. You gain the intensified vulnerability benefit from one of the implements you're holding, which lasts until the beginning of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "intensify-vulnerability",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "divination", "esoterica", "magical", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.HAmGozJwLAal5v82" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "HCl3pzVefiv9ZKQW",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Aid",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An ally is about to use an action that requires a skill check or attack roll</p>\n<p><strong>Requirements</strong> The ally is willing to accept your aid, and you have prepared to help (see below)</p>\n<hr />\n<p>You try to help your ally with a task. To use this reaction, you must first prepare to help, usually by using an action during your turn. You must explain to the GM exactly how you're trying to help, and they determine whether you can Aid your ally.</p>\n<p>When you use your Aid reaction, attempt a skill check or attack roll of a type decided by the GM. The typical DC is 20, but the GM might adjust this DC for particularly hard or easy tasks. The GM can add any relevant traits to your preparatory action or to your Aid reaction depending on the situation, or even allow you to Aid checks other than skill checks and attack rolls.</p>\n<hr />\n<p><strong>Critical Success</strong> You grant your ally a +2 circumstance bonus to the triggering check. If you're a master with the check you attempted, the bonus is +3, and if you're legendary, it's +4.</p>\n<p><strong>Success</strong> You grant your ally a +1 circumstance bonus to the triggering check.</p>\n<p><strong>Critical Failure</strong> Your ally takes a -1 circumstance penalty to the triggering check.</p>\n<p>@UUID[Compendium.pf2e.other-effects.Item.AHMUpMbaVkZ5A1KX]{Effect: Aid}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "aid",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.HCl3pzVefiv9ZKQW" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "HYNhdaPtF1QmQbR3",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Drop Prone",
    "system": {
      "description": { "gm": "", "value": "<p>You fall @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>" },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "drop-prone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.HYNhdaPtF1QmQbR3" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "HbejhIywqIufrmVM",
    "img": "systems/pf2e/icons/features/classes/arcane-cascade.webp",
    "name": "Arcane Cascade",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You used your most recent action to Cast a Spell or make a Spellstrike.</p>\n<hr />\n<p>You divert a portion of the spell's magical power and keep it cycling through your body and weapon using specialized forms, breathing, or footwork. While you're in the stance, your melee Strikes deal [[/r {1}]]{1 extra damage}. This damage increases to 2 if you have weapon specialization and 3 if you have greater weapon specialization. Any Strike that benefits from this damage gains the arcane trait, making it magical.</p>\n<p>If your most recent spell before entering the stance was one that can deal damage, the damage from the stance is the same type that spell could deal (or one type of your choice if the spell could deal multiple types of damage). If the spell couldn't deal damage, this stance's bonus damage depends on the spell's school.</p>\n<ul>\n<li><strong>Abjuration</strong> or <strong>Evocation</strong> force</li>\n<li><strong>Conjuration</strong> or <strong>Transmutation</strong> same type as your weapon or unarmed attack</li>\n<li><strong>Divination</strong>, <strong>Enchantment</strong>, or <strong>Illusion</strong> mental</li>\n<li><strong>Necromancy</strong> negative</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "arcane-cascade",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "magus", "stance"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Stance: Arcane Cascade", "uuid": "Compendium.pf2e.feat-effects.Item.fsjO5oTKttsbpaKl" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.HbejhIywqIufrmVM" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "I75R9NSfsVrit6cU",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Cram",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are an initiate, attendant, or conversant, and your branch level for either your primary or secondary branch is 2 or more levels below the limit.</p>\n<hr />\n<p>Realizing that you're falling behind in your studies, you cram more than you probably should. You Study twice, each in a branch that satisfies the activity requirements. However, the extra studying comes at a price. Until the next time you take the Study downtime activity, you're particularly tired from all the extra hours cramming; at the start of each day of adventuring, you must succeed at a @Check[type:flat|dc:8] check or be @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued} for that day.</p>"
      },
      "source": { "value": "Pathfinder #169: Kindled Magic" },
      "rules": [],
      "slug": "cram",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.I75R9NSfsVrit6cU" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "I9k9qe4gOT8UVK4e",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Mist Blending",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature attempts a flat check to target you because you're @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} or @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} due to fog, haze, mist, or smoke</p>\n<hr />\n<p><strong>Effect</strong> You shroud yourself in mist, making it harder for your foe to hit you. If you're concealed, the DC of the flat check increases from 5 to @Check[type:flat|dc:7]; if you're hidden, it increases from 11 to @Check[type:flat|dc:13].</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "mist-blending",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["undine"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.I9k9qe4gOT8UVK4e" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "IE2nThCmoyhQA0Jn",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Avoid Notice",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You attempt a <span data-pf2-action=\"avoidNotice\">Stealth</span> check to avoid notice while traveling at half speed. If you have the @UUID[Compendium.pf2e.feats-srd.Item.Imvu2RV2ggjJ2HZt]{Swift Sneak} feat, you can move at full Speed rather than half, but you still can't use another exploration activity while you do so. If you have the @UUID[Compendium.pf2e.feats-srd.Item.n0urrOL8YlnVBVRQ]{Legendary Sneak} feat, you can move at full Speed and use a second exploration activity. If you're Avoiding Notice at the start of an encounter, you usually roll a Stealth check instead of a Perception check both to determine your initiative and to see if the enemies notice you (based on their Perception DCs, as normal for Sneak, regardless of their initiative check results).</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "avoid-notice",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.IE2nThCmoyhQA0Jn" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "IGPbMkKjnlFW1w1a",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Bribe Contact",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> A bribe worth at least one-tenth of the Currency per Additional PC listed on Core Rulebook 509 (see table below). Doubling this amount grants a +2 circumstance bonus to the check.</p>\n<p><strong>Requirements</strong> You've successfully Gained a Contact. You offer a bribe to your contact to help the heist in some way. Attempt a hard or very hard Deception or Diplomacy check.</p>\n<hr />\n<p><strong>Success</strong> The contact accepts the bribe and you gain 1 EP.</p>\n<p><strong>Failure</strong> You believe you successfully Bribed your Contact and gained 1 EP, but in fact the contact informs the opposition of the attempted bribery, adding 1 AP to the infiltration. The GM can reveal that this Edge Point grants no benefit at any point during the infiltration, as befits the story.</p>\n<p><strong>Critical Failure</strong> As failure, but adding 2 AP to the infiltration.</p>\n<hr />\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>NPC Level</th>\n<th>Minimum</th>\n<th>+2 Bonus</th>\n<th>NPC Level</th>\n<th>Minimum</th>\n<th>+2 Bonus</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>1 gp</td>\n<td>2 gp</td>\n<td>11</td>\n<td>70 gp</td>\n<td>140 gp</td>\n</tr>\n<tr>\n<td>2</td>\n<td>1 gp, 8 sp</td>\n<td>3gp, 6sp</td>\n<td>12</td>\n<td>100 gp</td>\n<td>200 gp</td>\n</tr>\n<tr>\n<td>3</td>\n<td>3 gp</td>\n<td>6 gp</td>\n<td>13</td>\n<td>150 gp</td>\n<td>300 gp</td>\n</tr>\n<tr>\n<td>4</td>\n<td>5 gp</td>\n<td>10 gp</td>\n<td>14</td>\n<td>225 gp</td>\n<td>450 gp</td>\n</tr>\n<tr>\n<td>5</td>\n<td>8 gp</td>\n<td>16 gp</td>\n<td>15</td>\n<td>325 gp</td>\n<td>650 gp</td>\n</tr>\n<tr>\n<td>6</td>\n<td>12 gp, 5 sp</td>\n<td>25 gp</td>\n<td>16</td>\n<td>500 gp</td>\n<td>1,000 gp</td>\n</tr>\n<tr>\n<td>7</td>\n<td>18 gp</td>\n<td>36 gp</td>\n<td>17</td>\n<td>750 gp</td>\n<td>1,500 gp</td>\n</tr>\n<tr>\n<td>8</td>\n<td>25 gp</td>\n<td>50 gp</td>\n<td>18</td>\n<td>1,200 gp</td>\n<td>2,400 gp</td>\n</tr>\n<tr>\n<td>9</td>\n<td>35 gp</td>\n<td>70 gp</td>\n<td>19</td>\n<td>2,000 gp</td>\n<td>4,000 gp</td>\n</tr>\n<tr>\n<td>10</td>\n<td>50 gp</td>\n<td>100 gp</td>\n<td>20</td>\n<td>3,500 gp</td>\n<td>7,000 gp</td>\n</tr>\n</tbody>\n</table>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "bribe-contact",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.IGPbMkKjnlFW1w1a" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "IV8sgoLO6ShD3DCJ",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Expel Maelstrom",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are in a curse maelstrom state</p>\n<hr />\n<p><strong>Effect</strong> You expel the maelstrom from your body, sending the energy to reside in one unlucky creature within 60 feet. Your curse maelstrom state ends. The result depends on the creature's Will save.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature is unaffected, and the curse's energy dissipates harmlessly.</p>\n<p><strong>Success</strong> The creature comes to house the maelstrom's wrath within it. It takes a -1 status penalty to all saving throws and skill checks for 1 minute.</p>\n<p><strong>Failure</strong> The maelstrom strikes deep into the creature's soul. It takes a -2 status penalty to all saving throws and skill checks for 10 minutes.</p>\n<p><strong>Critical Failure</strong> The maelstrom pitches the creature into a single fit of utter misfortune before burrowing into its soul. As failure, but the creature also must roll twice and take the lower result on its next saving throw or skill check; this is a misfortune effect.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "expel-maelstrom",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["curse", "necromancy", "occult"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.IV8sgoLO6ShD3DCJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "IX1VlVCL5sFTptEE",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Liberating Step",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy damages, @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabs}, or @UUID[Compendium.pf2e.actionspf2e.Item.PMbdMWc2QroouFGD]{Grapples} your ally, and both are within 15 feet of you</p>\n<hr />\n<p>You free an ally from restraint.</p>\n<p>If the trigger was an ally taking damage, the ally gains resistance to all damage against the triggering damage equal to 2 + your level.</p>\n<p>The ally can attempt to break free of effects grabbing, restraining, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilizing}, or @UUID[Compendium.pf2e.conditionitems.Item.6uEgoh53GbXuHpTF]{Paralyzing} them. They either attempt a new save against one such effect that allows a save, or attempt to @UUID[Compendium.pf2e.actionspf2e.Item.SkZAQRkLLkmBQNB9]{Escape} from one effect as a free action.</p>\n<p>If they can move, the ally can Step as a free action, even if they didn't need to escape.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.DawVHfoPKbPJsz4k]{Effect: Champion's Resistance}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "liberating-step",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["champion"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.IX1VlVCL5sFTptEE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Iuq8CeNqv3a0oWfQ",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Life Block",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> The spell's target would take damage</p>\n<hr />\n<p><strong>Effect</strong> Reduce the triggering damage by 10, but you lose 5 Hit Points. Even if this reduces the damage to 0, the target still takes any effects that would come with the damage, such as the poison on a viper's fangs Strike.</p>\n<hr />\n<p><strong>Heightened (+2)</strong> The reaction reduces the damage by another 10, and you lose 5 more Hit Points. If you want to lose fewer Hit Points, you can choose to lower the damage reduction and HP lost to what any lower-level version of the spell could do without lowering the spell's actual level.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "life-block",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Iuq8CeNqv3a0oWfQ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JLPY5hl4qiJ1zLi1",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Discover",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You watch or study an NPC to learn more about that NPC's preferences. Attempt a Perception check or an appropriate skill check determined by the GM. The DC is found in the NPC's influence stat block.</p>\n<hr />\n<p><strong>Critical Success</strong> Choose two of the options detailed in Success below; you can choose the same option twice to learn two pieces of information from the same category.</p>\n<p><strong>Success</strong> Choose one of the following: You learn which skill that can Influence the NPC has the lowest DC (skipping any skills that you already know), one of the NPC's personal biases, one of the NPC's resistances, or one of the NPC's weaknesses.</p>\n<p><strong>Failure</strong> You learn no information.</p>\n<p><strong>Critical Failure</strong> Choose a piece of information to learn about, as success, but the information is incorrect.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "discover",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JLPY5hl4qiJ1zLi1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JLyNyaRmxL51jebC",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Energy Emanation (Cold)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>Energy bursts forth from your body. You deal 1d6 cold damage to all adjacent creatures (@Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save using your class DC or spell DC, whichever is higher). At 3rd level, and every 2 levels thereafter, this damage increases by 1d6 damage.</p>\n<p>[[/r (ceil(@actor.level/2))d6[cold]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "energy-emanation-cold",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "primal"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JLyNyaRmxL51jebC" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JPHWzD2soqjffeSU",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Drain Life",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon attacks a living creature and drains some of the creature's life force to feed your shared link. Your eidolon Strikes a living enemy. If the Strike hits and deals damage, the target must attempt a Fortitude save, with the following effects. On a critical hit, the enemy uses the result one degree worse than it rolled.</p>\n<p><strong>Critical Success</strong> No effect.</p>\n<p><strong>Success</strong> Your eidolon drains a small amount of life force. The enemy takes additional negative damage equal to half your level.</p>\n<p><strong>Failure</strong> Your eidolon drains enough life force to satisfy itself. The enemy takes additional negative damage equal to half your level and is @UUID[Compendium.pf2e.conditionitems.Item.4D2KBtexWXa6oUMR]{Drained 1}. Your eidolon gains temporary Hit Points equal to the enemy's level, which last for 1 minute.</p>\n<p><strong>Critical Failure</strong> Your eidolon drains an incredible amount of life force and is thoroughly glutted with energy. As failure, but the enemy is @UUID[Compendium.pf2e.conditionitems.Item.4D2KBtexWXa6oUMR]{Drained 2} and the temporary Hit Points are equal to double the enemy's level.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "drain-life",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divine", "eidolon", "necromancy", "negative"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JPHWzD2soqjffeSU" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JUvAvruz7yRQXfz2",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Long Jump",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You Stride, then make a horizontal Leap and attempt an <span data-pf2-action=\"longJump\" data-pf2-glyph=\"D\">Athletics</span> check to increase the length of your jump. The DC of the Athletics check is equal to the total distance in feet you're attempting to move during your Leap (so you'd need to succeed at a DC 20 check to Leap 20 feet). You can't Leap farther than your Speed.</p>\n<p>If you didn't Stride at least 10 feet, or if you attempt to jump in a different direction than your Stride, you automatically fail your check. This DC might be increased or decreased due to the situation, as determined by the GM.</p>\n<hr />\n<p><strong>Success</strong> Increase the maximum horizontal distance you @UUID[Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk]{Leap} to the desired distance.</p>\n<p><strong>Failure</strong> You Leap normally.</p>\n<p><strong>Critical Failure</strong> You Leap normally, but then fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "long-jump",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JUvAvruz7yRQXfz2" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JYi4MnsdFu618hPm",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Hunt Prey",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You designate a single creature as your prey and focus your attacks against that creature. You must be able to see or hear the prey, or you must be tracking the prey during exploration.</p>\n<p>You gain a +2 circumstance bonus to Perception checks when you @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} your prey and a +2 circumstance bonus to Survival checks when you @UUID[Compendium.pf2e.actionspf2e.Item.EA5vuSgJfiHH7plD]{Track} your prey. You also ignore the penalty for making ranged attacks within your second range increment against the prey you're hunting.</p>\n<p>You can have only one creature designated as your prey at a time. If you use Hunt Prey against a creature when you already have a creature designated, the prior creature loses the designation and the new prey gains the designation. Your designation lasts until your next daily preparations.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [
        { "domain": "all", "key": "RollOption", "label": "PF2E.SpecificRule.HuntPrey.TargetHuntedPrey", "option": "hunted-prey", "toggleable": true },
        {
          "key": "FlatModifier",
          "label": "PF2E.SpecificRule.HuntPrey.SeekHuntedPrey",
          "predicate": ["action:seek", "hunted-prey"],
          "selector": "perception",
          "type": "circumstance",
          "value": 2
        },
        {
          "key": "FlatModifier",
          "label": "PF2E.SpecificRule.HuntPrey.TrackHuntedPrey",
          "predicate": ["action:track", "hunted-prey"],
          "selector": "survival",
          "type": "circumstance",
          "value": 2
        },
        { "domain": "ranged-attack-roll", "key": "RollOption", "option": "ignore-range-penalty:2", "predicate": ["hunted-prey"] }
      ],
      "slug": "hunt-prey",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "ranger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JYi4MnsdFu618hPm" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JpcegMRqdizrkG0m",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Slayer's Identification",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll initiative and can observe a creature you know is undead</p>\n<hr />\n<p>You attempt to Recall Knowledge to identify the undead creature with a +1 circumstance bonus. If you're a master in the skill you're using to Recall Knowledge, you gain a +2 circumstance bonus instead.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "slayers-identification",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JpcegMRqdizrkG0m" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JqThDeWlGobiAPJd",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Fire) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[fire]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[fire]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-fire-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation", "fire"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JqThDeWlGobiAPJd" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "JuqmIAnkL9hVGai8",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Hustle",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You strain yourself to move at double your travel speed. You can Hustle only for a number of minutes equal to your Constitution modifier × 10 (minimum 10 minutes). If you are in a group that is Hustling, use the lowest Constitution modifier among everyone to determine how fast the group can Hustle together.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "hustle",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "move"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.JuqmIAnkL9hVGai8" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "K878asDgf1EF0B9S",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Confident Finisher",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You make an incredibly graceful attack, piercing your foe's defenses. Make a Strike with a weapon or unarmed attack that would apply your precise strike damage, with the following failure effect.</p>\n<hr />\n<p><strong>Failure</strong> You deal half your @UUID[Compendium.pf2e.classfeatures.Item.RQH6vigvhmiYKKjg]{Precise Strike} damage to the target. This damage type is that of the weapon or unarmed attack you used for the Strike.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "confident-finisher",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["finisher", "swashbuckler"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.K878asDgf1EF0B9S" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "KAVf7AmRnbCAHrkT",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Attack of Opportunity",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.</p>\n<hr />\n<p>You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "attack-of-opportunity",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.KAVf7AmRnbCAHrkT" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "KC6o1cvbr45xnMei",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Conjure Bullet",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<hr />\n<p><strong>Effect</strong> You conjure an ordinary level-0 bolt or bullet out of thin air and then immediately Interact to load it into your weapon. If the bolt or bullet isn't fired before the end of your turn, the effect is wasted.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "conjure-bullet",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["conjuration", "magical"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.KC6o1cvbr45xnMei" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "KMKuJ0onVS72t9Fv",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Manifest Soulforged Armament",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> If summoning a weapon or shield, you have the hands free to wield it; if summoning armor, you aren't wearing any armor</p>\n<hr />\n<p><strong>Effect</strong> You immediately wield or wear the soulforged armament bound to you. The soulforged armament remains manifested until you Dismiss this effect.</p>\n<p>Once per day when you use this ability, you can manifest the armament's essence form. You gain the armament's essence power until it's Dismissed. After 1 minute, the essence form armament is automatically Dismissed.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "manifest-soulforged-armament",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "conjuration", "divine", "extradimensional"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.KMKuJ0onVS72t9Fv" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "KjoCEEmPGTeFE4hh",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Treat Poison",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wearing or holding @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Tools}</p>\n<hr />\n<p>You treat a patient to prevent the spread of poison. Attempt a <span data-pf2-action=\"treatPoison\" data-pf2-glyph=\"A\">Medicine</span> check against the poison's DC. After you attempt to Treat a Poison for a creature, you can't try again until after the next time that creature attempts a save against the poison.</p>\n<hr />\n<p><strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the poison.</p>\n<p><strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the poison.</p>\n<p><strong>Critical Failure</strong> Your efforts cause the creature to take a -2 circumstance penalty to its next save against the poison.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "treat-poison",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.KjoCEEmPGTeFE4hh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "KvVdGkUi0iJwapvD",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Fortify Camp",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can spend time fortifying your camp for defense with a successful Crafting check (typically at a trained or expert DC). Anyone keeping watch or defending the camp gains a +2 circumstance bonus to initiative rolls and Perception checks to Seek creatures attempting to sneak up on the camp.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "fortify-camp",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.KvVdGkUi0iJwapvD" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "KyKXp599tK9BgodC",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Dutiful Retaliation",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy within 15 feet of you hits you with a Strike and deals damage to you.</p>\n<p><strong>Requirements</strong> Your eidolon is within 15 feet of you.</p>\n<p>Your eidolon instinctively flashes with ectoplasmic energy, allowing them to strike back against an enemy who dares to harm you. Your eidolon makes a melee unarmed Strike against the triggering enemy, even if that enemy isn't within your eidolon's reach.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "dutiful-retaliation",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon", "occult", "transmutation"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.KyKXp599tK9BgodC" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "LWrR6UiGm3eCAALJ",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Collect Spirit Remnant",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're holding your spirit dwelling</p>\n<hr />\n<p><strong>Effect</strong> You brandish your spirit dwelling at the location where a haunt, ghost, or other incorporeal undead was destroyed within the last minute and pray or recite ritual incantations. You coax the spirit remnant into your spirit dwelling.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "collect-spirit-remnant",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.LWrR6UiGm3eCAALJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "LfsQy2T8GjpuMqAh",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Electricity) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[electricity]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[electricity]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-electricity-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "electricity", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.LfsQy2T8GjpuMqAh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Lt591Og3XRhx5dRx",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Acid) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[acid]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[acid]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-acid-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["acid", "arcane", "eidolon", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Lt591Og3XRhx5dRx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "M76ycLAqHoAgbcej",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Balance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are in a square that contains a narrow surface, uneven ground, or another similar feature</p>\n<hr />\n<p>You move across a narrow surface or uneven ground, attempting an <span data-pf2-action=\"balance\" data-pf2-glyph=\"A\">Acrobatics</span> check against its Balance DC. You are off-guard while on a narrow surface or uneven ground.</p>\n<hr />\n<p><strong>Critical Success</strong> You move up to your Speed.</p>\n<p><strong>Success</strong> You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).</p>\n<p><strong>Failure</strong> You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.</p>\n<p><strong>Critical Failure</strong> You fall and your turn ends.</p><h2 class=\"title\">Sample Balance Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> tangled roots, uneven cobblestones</li>\n<li><strong>Trained</strong> wooden beam</li>\n<li><strong>Expert</strong> deep, loose gravel</li>\n<li><strong>Master</strong> tightrope, smooth sheet of ice</li>\n<li><strong>Legendary</strong> razor's edge, chunks of floor falling in midair </li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "balance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.M76ycLAqHoAgbcej" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "M8RCbthRhB4bxO9t",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Iron Command",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy within 15 feet damages you</p>\n<hr />\n<p><strong>Effect</strong> You put an impertinent foe who dared harm you in their proper place. You command your enemy to kneel before you in obedience. If they dare to refuse, they must pay the price in pain and anguish. The foe must choose one of the following options.</p>\n<ul>\n<li>The enemy kneels, dropping @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone} as a free action.</li>\n<li>The enemy refuses, and you deal @Damage[1d6[mental]] damage to it. This damage increases to @Damage[2d6[mental]] damage at 5th level, @Damage[3d6[mental]] damage at 9th level, @Damage[4d6[mental]] damage at 12th level, @Damage[5d6[mental]] damage at 16th level, and @Damage[6d6[mental]] damage at 19th level.</li>\n</ul>\n<p>In addition, your Strikes against the triggering creature deal [[/r {1}]]{1 extra damage} until the end of your next turn. You choose whether the damage type is evil or negative each time you use this reaction. This extra damage increases to [[/r {2}]]{2 extra damage} at 9th level and [[/r {3}]]{3 extra damage} at 16th level.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [
        {
          "domain": "damage-roll",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Champion.TargetReaction",
          "option": "iron-command",
          "suboptions": [
            { "label": "PF2E.SpecificRule.Champion.NegativeDamage", "value": "negative" },
            { "label": "PF2E.SpecificRule.Champion.EvilDamage", "value": "evil" }
          ],
          "toggleable": true
        },
        {
          "damageType": "{item|flags.pf2e.rulesSelections.ironCommand}",
          "key": "FlatModifier",
          "predicate": ["iron-command"],
          "selector": "strike-damage",
          "slug": "iron-command-damage",
          "value": {
            "brackets": [
              { "end": 8, "value": 1 },
              { "end": 15, "start": 9, "value": 2 },
              { "start": 16, "value": 3 }
            ]
          }
        }
      ],
      "slug": "iron-command",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["champion", "divine", "emotion", "enchantment", "mental"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.M8RCbthRhB4bxO9t" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "MHLuKy4nQO2Z4Am1",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Administer First Aid",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wearing or holding @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Tools}</p>\n<hr />\n<p>You perform first aid on an adjacent creature that is @UUID[Compendium.pf2e.conditionitems.Item.yZRUzMqrMmfLu0V1]{Dying} or @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Bleeding}. If a creature is both dying and bleeding, choose which ailment you're trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.</p>\n<ul>\n<li><strong>Stabilize</strong> Attempt a <span data-pf2-action=\"administerFirstAid\" data-pf2-variant=\"stabilize\" data-pf2-glyph=\"D\">Medicine</span> check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).</li>\n<li><strong>Stop Bleeding</strong> Attempt a <span data-pf2-action=\"administerFirstAid\" data-pf2-variant=\"stop-bleeding\" data-pf2-glyph=\"D\">Medicine</span> check on a creature that is taking persistent bleed damage, giving them a chance to make another flat check to remove the persistent damage. The DC is usually the DC of the effect that caused the bleed.</li>\n</ul>\n<hr />\n<p><strong>Success</strong> If you're trying to stabilize, the creature loses the dying condition (but remains @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}). If you're trying to stop bleeding, the creature attempts a flat check to end the bleeding.</p>\n<p><strong>Critical Failure</strong> If you were trying to stabilize, the creature's dying value increases by 1. If you were trying to stop bleeding, it immediately takes an amount of damage equal to its persistent bleed damage.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "administer-first-aid",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.MHLuKy4nQO2Z4Am1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "MLOkyKi1Y3N6y56Q",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Raise Neck",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You raise your head into a striking position. The fangs Strike granted by your nagaji ancestry gains a reach of 10 feet until the end of your turn.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "raise-neck",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.MLOkyKi1Y3N6y56Q" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "MLchOIG6uLvzK3r0",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Gain Contact",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You try to make contact with an individual who can aid you in the infiltration. Attempt a normal, hard, or very hard DC Diplomacy or Society check, or a check using a Lore skill appropriate to your prospective contact.</p>\n<hr />\n<p><strong>Success</strong> You make contact and gain 1 EP.</p>\n<p><strong>Failure</strong> You fail to make contact.</p>\n<p><strong>Critical Failure</strong> You insult or spook the contact in some way. Future attempts take a -2 circumstance penalty.</p>\n<hr />\n<p><strong>Special</strong> Multiple critical failures might cause the contact to work against the PCs in some way, likely increasing the party's Awareness Points.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "gain-contact",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.MLchOIG6uLvzK3r0" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "MY6z2b4GPhAD2Eoa",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Share Life",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your linked ally takes damage and is within 60 feet</p>\n<hr />\n<p><strong>Effect</strong> The ally takes half damage from the triggering effect (rounded down), and you lose a number of Hit Points equal to the remainder of the damage. You can't trigger this reaction to share damage caused by your ally using this reaction.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "share-life",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.MY6z2b4GPhAD2Eoa" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Ma93dpT4K7JbP9gu",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Prove Peace",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You know the conflict that created a specific siege shard, and the siege shard is @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized}.</p>\n<hr />\n<p>You touch the siege shard, establish a mental connection, and relay facts of the conflict's resolution.</p>\n<p>Attempt a check to @UUID[Compendium.pf2e.actionspf2e.Item.1OagaWtBpVXExToo]{Recall Knowledge} about the conflict that created the shard, using the siege shard's Will DC. If you succeed, you prove the conflict's end, and the siege shard reverts to ordinary stone. On a critical failure, images of the past conflict overwhelm you, and you are @UUID[Compendium.pf2e.conditionitems.Item.yblD8fOR1J8rDwEQ]{Confused} until the end of your next turn.</p>"
      },
      "source": { "value": "Pathfinder #157: Devil at the Dreaming Palace" },
      "rules": [],
      "slug": "prove-peace",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Ma93dpT4K7JbP9gu" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Mh4Vdg6gu8g8RAjh",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Mirror's Reflection",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're holding your mirror implement.</p>\n<hr />\n<p>You reflect an illusory image of yourself into another unoccupied space within 15 feet that you can see. You are treated as being in both spaces until the start of your next turn. For example, you can attack, Seek, and provide flanking-even with yourself. You occupy both spaces.</p>\n<p>Your mirror self mimics your actions exactly, but any effects you generate come from only one of your positions; you decide which each time you act. For example, if you made a melee Strike against a creature within reach of the reflection, you'd mime the actions of the Strike, but only the reflection would actually make the Strike. Anything that targets or would affect your reflection affects you and uses your statistics. Something that would target or affect both of you affects you only once. For example, a fireball that included both of you in its area would require only one save from you and damage you no more than once. When you move, you choose which square to move from, but the mirror effect ends.</p>\n<p>Some events force you to determine which image is the real you, and then end the effect and cause your mirror self to disappear; this happens automatically at the start of your next turn. It also happens if you choose to move out of your space. Other benefits of this implement add more events that can end the reflection. The effect also ends when you fall @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}, at which point you decide which version is truly you.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "mirrors-reflection",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["illusion", "magical", "manipulate", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Mh4Vdg6gu8g8RAjh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "N6U02s9qJKQIvmQd",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Wish for Luck",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You are about to roll an attack roll, saving throw, or skill check</p>\n<hr />\n<p><strong>Effect</strong> You wish aloud for success. Roll the check twice and take the higher result.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "wish-for-luck",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "auditory", "divination", "fortune"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.N6U02s9qJKQIvmQd" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "NEBuuhjZE9BL3I8v",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Poison) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[poison]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[poison]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-poison-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation", "poison"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.NEBuuhjZE9BL3I8v" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "NYR2IdfUiHevdt1V",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Break Them Down",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your foes are but dross from which you carve and shoot your legend. Make a melee Strike and then a ranged Strike with a combination weapon, both against the same enemy; you don't need to change modes to do so. If the melee Strike hits, you gain a +1 circumstance bonus to the attack roll with the ranged Strike. Each attack counts toward your multiple attack penalty, but your multiple attack penalty doesn't increase until you've made both attacks. If both Strikes hit, you deal an additional @Damage[2d6[bleed]] damage to the enemy, and they're @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until this persistent bleed damage ends.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "break-them-down",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.NYR2IdfUiHevdt1V" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "O1iircZOOCo42r9Y",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Ghost Shot",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Make a firearm or crossbow Strike. If you're @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} from or undetected by the target, the Strike adds the additional precision damage from One Shot, One Kill; if you would already receive that additional damage on the Strike, the effects aren't cumulative. If you were undetected or unnoticed by any creatures, you're now hidden from them instead, as the origin of the attack is clear.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "ghost-shot",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["flourish", "gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.O1iircZOOCo42r9Y" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "OJ9cIvPukPT0rppR",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Wyrm's Breath",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per minute</p>\n<p>Your eidolon gathers the power of the mightiest wyrms to make its magical breath even more spectacular. If your eidolon's next action is to use Breath Weapon, both the number of damage dice and area of the Breath Weapon are doubled.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "wyrms-breath",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "eidolon"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1M" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.OJ9cIvPukPT0rppR" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "OQaFzDtVEOMWizJJ",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Repeat a Spell",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You repeatedly cast the same spell while moving at half speed. Typically, this spell is a cantrip that you want to have in effect in the event a combat breaks out, and it must be one you can cast in 2 actions or fewer. In order to prevent fatigue due to repeated casting, you'll likely use this activity only when something out of the ordinary occurs.</p>\n<p>You can instead use this activity to continue @UUID[Compendium.pf2e.actionspf2e.Item.3f5DMFu8fPiqHpRg]{Sustain a Spell} or @UUID[Compendium.pf2e.actionspf2e.Item.XSGlLjI80LDCimAP]{Sustain an Activation} with a sustained duration. Most such spells or item effects can be sustained for 10 minutes, though some specify they can be sustained for a different duration.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "repeat-a-spell",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.OQaFzDtVEOMWizJJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "OSefkMgojBLqmRDh",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Refocus",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have a focus pool, and you have spent at least 1 Focus Point since you last regained any Focus Points.</p>\n<hr />\n<p>You spend 10 minutes performing deeds to restore your magical connection. This restores 1 Focus Point to your focus pool. The deeds you need to perform are specified in the class or ability that gives you your focus spells. These deeds can usually overlap with other tasks that relate to the source of your focus spells. For instance, a cleric with focus spells from a good deity can usually Refocus while tending the wounds of their allies, and a wizard of the illusionist school might be able to Refocus while attempting to @UUID[Compendium.pf2e.actionspf2e.Item.eReSHVEPCsdkSL4G]{Identify Magic} of the illusion school.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "refocus",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common", "selected": { "concentrate": "Concentrate", "exploration": "Exploration" } },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.OSefkMgojBLqmRDh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "OX4fy22hQgUHDr0q",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Make an Impression",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>With at least 1 minute of conversation, during which you engage in charismatic overtures, flattery, and other acts of goodwill, you seek to make a good impression on someone to make them temporarily agreeable. At the end of the conversation, attempt a <span data-pf2-action=\"makeAnImpression\">Diplomacy</span> check against the Will DC of one target, modified by any circumstances the GM sees fit. Good impressions (or bad impressions, on a critical failure) last for only the current social interaction unless the GM decides otherwise.</p>\n<hr />\n<p><strong>Critical Success</strong> The target's attitude toward you improves by two steps.</p>\n<p><strong>Success</strong> The target's attitude toward you improves by one step.</p>\n<p><strong>Critical Failure</strong> The target's attitude toward you decreases by one step.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "make-an-impression",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "exploration", "linguistic", "mental", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.OX4fy22hQgUHDr0q" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "OdIUybJ3ddfL7wzj",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Stand",
    "system": {
      "description": { "gm": "", "value": "<p>You stand up from @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>" },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "stand",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.OdIUybJ3ddfL7wzj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "OizxuPb44g3eHPFh",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Borrow an Arcane Spell",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>If you're an arcane spellcaster who prepares from a spellbook, you can attempt to prepare a spell from someone else's spellbook. The GM sets the DC for the check based on the spell's level and rarity; it's typically a bit easier than @UUID[Compendium.pf2e.actionspf2e.Item.Q5iIYCFdqJFM31GW]{Learning the Spell}.</p>\n<hr />\n<p><strong>Success</strong> You prepare the borrowed spell as part of your normal spell preparation.</p>\n<p><strong>Failure</strong> You fail to prepare the spell, but the spell slot remains available for you to prepare a different spell. You can't try to prepare this spell until the next time you prepare spells.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "borrow-an-arcane-spell",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.OizxuPb44g3eHPFh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "On5CQjX4euWqToly",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Resist Elf Magic",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a saving throw against a magical effect but haven't rolled yet</p>\n<hr />\n<p>Your ancestral resistance to magic protects you. You gain a +1 circumstance bonus to the triggering saving throw. If the triggering effect is arcane, you gain a +2 circumstance bonus instead.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [
        {
          "key": "FlatModifier",
          "predicate": ["resist-elf-magic", { "or": ["magical", "divine", "primal", "occult"] }],
          "selector": "saving-throw",
          "slug": "resist-elf-magic",
          "type": "circumstance",
          "value": 1
        },
        { "key": "AdjustModifier", "mode": "add", "predicate": ["arcane"], "selector": "saving-throw", "slug": "resist-elf-magic", "value": 1 },
        { "domain": "saving-throw", "key": "RollOption", "option": "resist-elf-magic", "toggleable": true }
      ],
      "slug": "resist-elf-magic",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.On5CQjX4euWqToly" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Or6RLXeoZkN8CLdi",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Amulet's Abeyance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> The target of your Exploit Vulnerability would damage you or an ally within 15 feet of you.</p>\n<p><strong>Requirements</strong> You're holding your amulet implement and are benefiting from Exploit Vulnerability.</p>\n<hr />\n<p>You forcefully present your amulet to turn away harm. You or a target ally within 15 feet gain resistance to all damage against the triggering damage. The resistance is equal to 2 + your level.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "amulets-abeyance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["abjuration", "magical", "manipulate", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Or6RLXeoZkN8CLdi" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "PM5jvValFkbFH3TV",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Mount",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are adjacent to a creature that is at least one size larger than you and is willing to be your mount</p>\n<hr />\n<p>You move onto the creature and ride it. If you're already mounted, you can instead use this action to dismount, moving off the mount into a space adjacent to it.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "mount",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.PM5jvValFkbFH3TV" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "PMbdMWc2QroouFGD",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Grapple",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have at least one free hand or have your target grappled or restrained. Your target isn't more than one size larger than you.</p>\n<hr />\n<p>You attempt to grab a creature or object with your free hand. Attempt an <span data-pf2-action=\"grapple\" data-pf2-glyph=\"A\">Athletics</span> check against the target's Fortitude DC. You can Grapple a target you already have grabbed or restrained without having a hand free.</p>\n<hr />\n<p><strong>Critical Success</strong> Your target is @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained} until the end of your next turn unless you move or your target @UUID[Compendium.pf2e.actionspf2e.Item.SkZAQRkLLkmBQNB9]{Escapes}.</p>\n<p><strong>Success</strong> Your target is @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed} until the end of your next turn unless you move or your target Escapes.</p>\n<p><strong>Failure</strong> You fail to grab your target. If you already had the target grabbed or restrained, it breaks free.</p>\n<p><strong>Critical Failure</strong> If you already had the target grabbed or restrained, it breaks free. Your target can either grab you, as if it succeeded at using the Grapple action against you, or force you to fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "grapple",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.PMbdMWc2QroouFGD" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Q4kdWVOf2ztIBFg1",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Identify Alchemy",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have @UUID[Compendium.pf2e.equipment-srd.Item.4ftXXUCBHcf4b0MH]{Alchemist's Tools}.</p>\n<hr />\n<p>You can identify the nature of an alchemical item with 10 minutes of testing using alchemist's tools. If your attempt is interrupted in any way, you must start over.</p>\n<hr />\n<p><strong>Success</strong> You identify the item and the means of activating it.</p>\n<p><strong>Failure</strong> You fail to identify the item but can try again.</p>\n<p><strong>Critical Failure</strong> You misidentify the item as another item of the GM's choice.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "identify-alchemy",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Q4kdWVOf2ztIBFg1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Q5iIYCFdqJFM31GW",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Learn a Spell",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have a spellcasting class feature, and the spell you want to learn is on your magical tradition's spell list.</p>\n<hr />\n<p>You can gain access to a new spell of your tradition from someone who knows that spell or from magical writing like a spellbook or scroll. If you can cast spells of multiple traditions, you can Learn a Spell of any of those traditions, but you must use the corresponding skill to do so. For example, if you were a cleric with the bard multiclass archetype, you couldn't use Religion to add an occult spell to your bardic spell repertoire.</p>\n<p>To learn the spell, you must do the following:</p>\n<ul>\n<li>Spend 1 hour per level of the spell, during which you must remain in conversation with a person who knows the spell or have the magical writing in your possession.</li>\n<li>Have materials with the Price indicated in Table 4-3.</li>\n<li>Attempt a skill check for the skill corresponding to your tradition (DC determined by the GM, often close to the DC on Table 4-3). Uncommon or rare spells have higher DCs.</li>\n</ul>\n<p>If you have a spellbook, Learning a Spell lets you add the spell to your spellbook; if you prepare spells from a list, it's added to your list; if you have a spell repertoire, you can select it when you add or swap spells.</p>\n<hr />\n<p><strong>Critical Success</strong> You expend half the materials and learn the spell.</p>\n<p><strong>Success</strong> You expend the materials and learn the spell.</p>\n<p><strong>Failure</strong> You fail to learn the spell but can try again after you gain a level. The materials aren't expended.</p>\n<p><strong>Critical Failure</strong> As failure, plus you expend half the materials.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "learn-a-spell",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Q5iIYCFdqJFM31GW" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Q8H3lBgiUyGvZYTM",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Telekinetic Assault",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your ghost unleashes a flurry of emotions, causing small objects and debris to fly about in a @Template[type:emanation|distance:20], dealing @Damage[1d6[bludgeoning]] for every 2 levels the ghost has (basic Reflex save). This uses a trained DC using the ghost's Charisma modifier or an expert DC if the ghost is specialized.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "telekinetic-assault",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divine", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1H" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Q8H3lBgiUyGvZYTM" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "QDW9H8XLIjuW2fE4",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Spellstrike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> until recharged (see below)</p>\n<hr />\n<p>You channel a spell into a punch or sword thrust to deliver a combined attack. You Cast a Spell that takes 1 or 2 actions to cast and requires a spell attack roll. The effects of the spell don't occur immediately but are imbued into your attack instead. Make a melee Strike with a weapon or unarmed attack. Your spell is coupled with your attack, using your attack roll result to determine the effects of both the Strike and the spell. This counts as two attacks for your multiple attack penalty, but you don't apply the penalty until after you've completed the Spellstrike. The infusion of spell energy grants your Strike the arcane trait, making it magical.</p>\n<p>After you use Spellstrike, you can't do so again until you recharge your Spellstrike as a single action, which has the concentrate trait. You also recharge your Spellstrike when you cast a conflux spell that takes at least 1 action to cast; casting a focus spell of another type doesn't recharge your Spellstrike.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "spellstrike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["magus"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.QDW9H8XLIjuW2fE4" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "QHFMeJGzFWj2QczA",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Quick Tincture",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 1 versatile vial</p>\n<p><strong>Requirements</strong> You know the formula for the alchemical item you're creating, you are holding or wearing alchemist's tools, and you have a free hand.</p>\n<hr />\n<p>You quickly brew up a short-lived tincture. You create a single alchemical elixir or tool of your level or lower without having to spend the normal monetary cost in alchemical reagents or needing to attempt a Crafting check. This item has the infused trait, but it remains potent only until the end of the current turn.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "quick-tincture",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["investigator", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.QHFMeJGzFWj2QczA" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "QIrJJ1pl4H6DctaQ",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Reconnoiter",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You spend time surveying and exploring a specific area, getting the lay of the land and looking for unusual features and specific sites. Reconnoitering a single hex takes a number of hexploration activities equal to the number of Travel activities necessary to traverse the hex-1 for open terrain, 2 for difficult terrain, and 3 for greater difficult terrain. Traveling on roads doesn't lessen the time required to Reconnoiter. Once the hex has been Reconnoitered, you can Map the Area to reduce your chance of getting lost in that hex. You automatically find any special feature that doesn't require a check to find, and you attempt the appropriate checks to find hidden special features.</p>\n<p>For instance, if you were looking for an obvious rock formation among some hills, you would spend 2 hexploration activities to Reconnoiter the hex, and you'd find the rock formation. But if you were looking for a hidden tengu monastery somewhere in some deep forests, after spending 2 activities to Reconnoiter the forest hex, you would have to succeed at a Perception check as part of your Reconnoiter activity to find the monastery.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "reconnoiter",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.QIrJJ1pl4H6DctaQ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "QNAVeNKtHA0EUw4X",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Feint",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are within melee reach of the target you attempt to Feint.</p>\n<hr />\n<p>With a misleading flourish, you leave an opponent unprepared for your real attack. Attempt a <span data-pf2-action=\"feint\" data-pf2-glyph=\"A\">Deception</span> check against your target's Perception DC.</p>\n<hr />\n<p><strong>Critical Success</strong> You throw your enemy's defenses against you entirely off. The target is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against melee attacks that you attempt against it until the end of your next turn.</p>\n<p><strong>Success</strong> Your foe is fooled, but only momentarily. The target is off-guard against the next melee attack that you attempt against it before the end of your current turn.</p>\n<p><strong>Critical Failure</strong> Your feint backfires. You are off-guard against melee attacks the target attempts against you until the end of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "feint",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["mental", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.QNAVeNKtHA0EUw4X" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "QQQaV7pi9Gv2GpLj",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Piercing) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[piercing]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[piercing]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-piercing-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "eidolon", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.QQQaV7pi9Gv2GpLj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Qf1ylAbdVi1rkc8M",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Maneuver in Flight",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have a fly Speed</p>\n<hr />\n<p>You try a difficult maneuver while flying. Attempt an <span data-pf2-action=\"maneuverInFlight\" data-pf2-glyph=\"A\">Acrobatics</span> check. The GM determines what maneuvers are possible, but they rarely allow you to move farther than your fly Speed.</p>\n<hr />\n<p><strong>Success</strong> You succeed at the maneuver.</p>\n<p><strong>Failure</strong> Your maneuver fails. The GM chooses if you simply can't move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).</p>\n<p><strong>Critical Failure</strong> As failure, but the consequence is more dire.</p><h2 class=\"title\">Sample Maneuver in Flight Tasks</h2>\n<ul>\n<li><strong>Trained</strong> steep ascent or descent</li>\n<li><strong>Expert</strong> fly against the wind, hover midair</li>\n<li><strong>Master</strong> reverse direction</li>\n<li><strong>Legendary</strong> fly through gale force winds</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "maneuver-in-flight",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Qf1ylAbdVi1rkc8M" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Qj36ramjkoKE8kzJ",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Decompose",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> Void energy seeps out of you, decaying everything within a @Template[type:emanation|distance:5] and causing plants and foliage to age and decompose. Natural difficult terrain is destroyed, and creatures in the area with the plant or wood trait take @Damage[1d6[negative]] damage with a @Check[type:fortitude|dc:resolve(@actor.system.attributes.classOrSpellDC.value)|basic:true] save against your class DC or spell DC, whichever is higher.</p>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [],
      "slug": "decompose",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["primal", "void"] },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Qj36ramjkoKE8kzJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "QyzlsLrqM0EEwd7j",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Earn Income",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can use a skill-typically Crafting, Lore, or Performance-to earn money during downtime. You must be trained in the skill to do so. This takes time to set up, and your income depends on your proficiency rank and how lucrative a task you can find. Because this process requires a significant amount of time and involves tracking things outside the progress of adventures, it won't come up in every campaign.</p>\n<p>In some cases, the GM might let you use a different skill to Earn Income through specialized work. Usually, this is scholarly work, such as using Religion in a monastery to study old texts-but giving sermons at a church would still fall under Performance instead of Religion. You also might be able to use physical skills to make money, such as using Acrobatics to perform feats in a circus or Thievery to pick pockets. If you're using a skill other than Crafting, Lore, or Performance, the DC tends to be significantly higher.</p>\n<h2 class=\"title\">Skill Uses</h2>\n<p><strong>Crafting</strong> Earn Income by crafting goods for the market.</p>\n<p><strong>Lore</strong> Earn Income by using your knowledge to practice a trade.</p>\n<p><strong>Performance</strong> Earn Income by staging a performance.</p>\n<h2 class=\"title\">Earn Income</h2>\n<p><span class=\"trait\" title=\"An activity with this trait takes a day or more, and can be used only during downtime.\">Downtime</span></p>\n<hr />\n<p>You use one of your skills to make money during downtime. The GM assigns a task level representing the most lucrative job available. You can search for lower-level tasks, with the GM determining whether you find any. Sometimes you can attempt to find better work than the initial offerings, though this takes time and requires using the Diplomacy skill to Gather Information, doing some research, or socializing.</p>\n<p>When you take on a job, the GM secretly sets the DC of your skill check. After your first day of work, you roll to determine your earnings. You gain an amount of income based on your result, the task's level, and your proficiency rank (as listed on Table 4-2: Income Earned).</p>\n<p>You can continue working at the task on subsequent days without needing to roll again. For each day you spend after the first, you earn the same amount as the first day, up until the task's completion. The GM determines how long you can work at the task. Most tasks last a week or two, though some can take months or even years.</p>\n<h2>Table 4-2: Income Earned</h2>\n<table class=\"pf2-table\">\n<thead>\n<tr>\n<th>Task Level</th>\n<th>Failed</th>\n<th>Trained</th>\n<th>Expert</th>\n<th>Master</th>\n<th>Legendary</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>0</td>\n<td>1 cp</td>\n<td>5 cp</td>\n<td>5 cp</td>\n<td>5 cp</td>\n<td>5 cp</td>\n</tr>\n<tr>\n<td>1</td>\n<td>2 cp</td>\n<td>2 sp</td>\n<td>2 sp</td>\n<td>2 sp</td>\n<td>2 sp</td>\n</tr>\n<tr>\n<td>2</td>\n<td>4 cp</td>\n<td>3 sp</td>\n<td>3 sp</td>\n<td>3 sp</td>\n<td>3 sp</td>\n</tr>\n<tr>\n<td>3</td>\n<td>8 cp</td>\n<td>5 sp</td>\n<td>5 sp</td>\n<td>5 sp</td>\n<td>5 sp</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1 sp</td>\n<td>7 sp</td>\n<td>8 sp</td>\n<td>8 sp</td>\n<td>8 sp</td>\n</tr>\n<tr>\n<td>5</td>\n<td>2 sp</td>\n<td>9 sp</td>\n<td>1 gp</td>\n<td>1 gp</td>\n<td>1 gp</td>\n</tr>\n<tr>\n<td>6</td>\n<td>3 sp</td>\n<td>1 gp, 5 sp</td>\n<td>2 gp</td>\n<td>2 gp</td>\n<td>2 gp</td>\n</tr>\n<tr>\n<td>7</td>\n<td>4 sp</td>\n<td>2 gp</td>\n<td>2 gp, 5 sp</td>\n<td>2 gp, 5 sp</td>\n<td>2 gp, 5 sp</td>\n</tr>\n<tr>\n<td>8</td>\n<td>5 sp</td>\n<td>2 gp, 5 sp</td>\n<td>3 gp</td>\n<td>3 gp</td>\n<td>3 gp</td>\n</tr>\n<tr>\n<td>9</td>\n<td>6 sp</td>\n<td>3 gp</td>\n<td>4 gp</td>\n<td>4 gp</td>\n<td>4 gp</td>\n</tr>\n<tr>\n<td>10</td>\n<td>7 sp</td>\n<td>4 gp</td>\n<td>5 gp</td>\n<td>6 gp</td>\n<td>6 gp</td>\n</tr>\n<tr>\n<td>11</td>\n<td>8 sp</td>\n<td>5 gp</td>\n<td>6 gp</td>\n<td>8 gp</td>\n<td>8 gp</td>\n</tr>\n<tr>\n<td>12</td>\n<td>9 sp</td>\n<td>6 gp</td>\n<td>8 gp</td>\n<td>10 gp</td>\n<td>10 gp</td>\n</tr>\n<tr>\n<td>13</td>\n<td>1 gp</td>\n<td>7 gp</td>\n<td>10 gp</td>\n<td>15 gp</td>\n<td>15 gp</td>\n</tr>\n<tr>\n<td>14</td>\n<td>1 gp, 5 sp</td>\n<td>8 gp</td>\n<td>15 gp</td>\n<td>20 gp</td>\n<td>20 gp</td>\n</tr>\n<tr>\n<td>15</td>\n<td>2 gp</td>\n<td>10 gp</td>\n<td>20 gp</td>\n<td>28 gp</td>\n<td>28 gp</td>\n</tr>\n<tr>\n<td>16</td>\n<td>2 gp, 5 sp</td>\n<td>13 gp</td>\n<td>25 gp</td>\n<td>36 gp</td>\n<td>40 gp</td>\n</tr>\n<tr>\n<td>17</td>\n<td>3 gp</td>\n<td>15 gp</td>\n<td>30 gp</td>\n<td>45 gp</td>\n<td>55 gp</td>\n</tr>\n<tr>\n<td>18</td>\n<td>4 gp</td>\n<td>20 gp</td>\n<td>45 gp</td>\n<td>70 gp</td>\n<td>90 gp</td>\n</tr>\n<tr>\n<td>19</td>\n<td>6 gp</td>\n<td>30 gp</td>\n<td>60 gp</td>\n<td>100 gp</td>\n<td>130 gp</td>\n</tr>\n<tr>\n<td>20</td>\n<td>8 gp</td>\n<td>40 gp</td>\n<td>75 gp</td>\n<td>150 gp</td>\n<td>200 gp</td>\n</tr>\n<tr>\n<td>20 (critical success)</td>\n<td> </td>\n<td>50 gp</td>\n<td>90 gp</td>\n<td>175 gp</td>\n<td>300 gp</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Critical Success</strong> You do outstanding work. Gain the amount of currency listed for the task level + 1 and your proficiency rank.</p>\n<p><strong>Success</strong> You do competent work. Gain the amount of currency listed for the task level and your proficiency rank.</p>\n<p><strong>Failure</strong> You do shoddy work and get paid the bare minimum for your time. Gain the amount of currency listed in the failure column for the task level. The GM will likely reduce how long you can continue at the task.</p>\n<p><strong>Critical Failure</strong> You earn nothing for your work and are fired immediately. You can't continue at the task. Your reputation suffers, potentially making it difficult for you to find rewarding jobs in that community in the future.</p>\n<h2 class=\"title\">Sample Earn Income Tasks</h2>\n<p>These examples use Alcohol Lore to work in a bar or Legal Lore to perform legal work.</p>\n<ul>\n<li><strong>Trained</strong> bartend, do legal research</li>\n<li><strong>Expert</strong> curate drink selection, present minor court cases</li>\n<li><strong>Master</strong> run a large brewery, present important court cases</li>\n<li><strong>Legendary</strong> run an international brewing franchise, present a case in Hell's courts</li>\n</ul>\n<h2 class=\"title\">Crafting Goods for the Market [Crafting]</h2>\n<p>Using Crafting, you can work at producing common items for the market. It's usually easy to find work making basic items whose level is 1 or 2 below your settlement's level. Higher-level tasks represent special commissions, which might require you to Craft a specific item using the Craft downtime activity and sell it to a buyer at full price. These opportunities don't occur as often and might have special requirements-or serious consequences if you disappoint a prominent client.</p>\n<h2 class=\"title\">Practicing a Trade [Lore]</h2>\n<p>You apply the practical benefits of one of your Lore specialties during downtime by practicing your trade. This is most effective for Lore specialties such as business, law, or sailing, where there's high demand for workers. The GM might increase the DC or determine only low-level tasks are available if you're attempting to use an obscure Lore skill to Earn Income. You might also need specialized tools to accept a job, like mining tools to work in a mine or a merchant's scale to buy and sell valuables in a market.</p>\n<h2 class=\"title\">Staging a Performance [Performance]</h2>\n<p>You perform for an audience to make money. The available audiences determine the level of your task, since more discerning audiences are harder to impress but provide a bigger payout. The GM determines the task level based on the audiences available. Performing for a typical audience of commoners on the street is a level 0 task, but a performance for a group of artisans with more refined tastes might be a 2nd- or 3rd-level task, and ones for merchants, nobility, and royalty are increasingly higher level. Your degree of success determines whether you moved your audience and whether you were rewarded with applause or rotten fruit.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "earn-income",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.QyzlsLrqM0EEwd7j" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "RADNqsvAt4gP9FOX",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Raconteur's Reload",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your rapid or forceful words draw the enemy's attention away from your hands long enough to chamber another bullet. Interact to reload and then attempt a Deception check to @UUID[Compendium.pf2e.actionspf2e.Item.GkmbTGfg8KcgynOA]{Create a Diversion} or an Intimidation check to @UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "raconteurs-reload",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.RADNqsvAt4gP9FOX" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "RDXXE7wMrSPCLv5k",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Steal",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You try to take a small object from another creature without being noticed. Typically, you can Steal only an object of negligible Bulk, and you automatically fail if the creature who has the object is in combat or on guard.</p>\n<p>Attempt a <span data-pf2-action=\"steal\" data-pf2-glyph=\"A\">Thievery</span> check to determine if you successfully Steal the object. The DC to Steal is usually the Perception DC of the creature wearing the object. This assumes the object is worn but not closely guarded (like a loosely carried pouch filled with coins, or an object within such a pouch). If the object is in a pocket or similarly protected, you take a -5 penalty to your Thievery check. The GM might increase the DC of your check if the nature of the object makes it harder to steal (such as a very small item in a large pack, or a sheet of parchment mixed in with other documents).</p>\n<p>You might also need to compare your Thievery check result against the Perception DCs of observers other than the person wearing the object. The GM may increase the Perception DCs of these observers if they're distracted.</p>\n<hr />\n<p><strong>Success</strong> You steal the item without the bearer noticing, or an observer doesn't see you take or attempt to take the item.</p>\n<p><strong>Failure</strong> The item's bearer notices your attempt before you can take the object, or an observer sees you take or attempt to take the item. The GM determines the response of any creature that notices your theft.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "steal",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.RDXXE7wMrSPCLv5k" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Rlp7ND33yYfxiEWi",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Master Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your Strike hits an @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} creature and deals damage</p>\n<hr />\n<p>The target attempts a Fortitude save at your class DC. It then becomes temporarily immune to your Master Strike for 1 day.</p>\n<hr />\n<p><strong>Critical Success</strong> The target is unaffected.</p>\n<p><strong>Success</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2} until the end of your next turn.</p>\n<p><strong>Failure</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.6uEgoh53GbXuHpTF]{Paralyzed} for 4 rounds.</p>\n<p><strong>Critical Failure</strong> The target is paralyzed for 4 rounds, knocked @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious} for 2 hours, or killed (your choice).</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "master-strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["incapacitation", "rogue"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Rlp7ND33yYfxiEWi" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Rp7gcG6Mxasurr8o",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Toxic Touch",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Requirements</strong> Your most recent action was to @UUID[Compendium.pf2e.actionspf2e.Item.21WIfSu7Xd7uKqV8]{Tumble Through}, and you successfully moved through an enemy's space</p>\n<hr />\n<p><strong>Effect</strong> Make a melee unarmed Strike against the enemy whose space you moved through. On a hit, the target takes @Damage[1d6[persistent,poison]] damage and is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} (or takes @Damage[2d6[persistent,poison]] and is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 2} on a critical hit).</p>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [],
      "slug": "toxic-touch",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["poison"] },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Rp7gcG6Mxasurr8o" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "RxIPBjodIRm7Pd6W",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Lucky Break",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a skill check during Exploration or Downtime</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> Draw a harrow card, then reroll the skill check. If you draw a card from the suit of Keys, add a +4 status bonus to the original roll and your reroll, then take the result you prefer as your actual result. If you drew any other card, you gain no bonus and must take the result of the rerolled skill check.</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [
        { "domain": "all", "key": "RollOption", "option": "lucky-break", "toggleable": true },
        { "key": "FlatModifier", "predicate": ["lucky-break"], "selector": "skill-check", "type": "status", "value": 4 }
      ],
      "slug": "lucky-break",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.RxIPBjodIRm7Pd6W" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "S9PZFOVe7zhORkUc",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Absorb into the Aegis",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy casts a spell that targets you or an ally within 15 feet of you</p>\n<hr />\n<p>You interpose your shield's ward against the spell. Attempt a counteract check, using your Religion modifier as your counteract modifier. On a success, the spell is counteracted and your shield takes damage equal to four times the spell level as it absorbs and disperses the magical energy. On a failure, the shield takes damage equal to twice the spell's level.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "absorb-into-the-aegis",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.S9PZFOVe7zhORkUc" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "SB7cMECVtE06kByk",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Cover Tracks",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You cover your tracks, moving up to half your travel speed. You don't need to attempt a Survival check to cover your tracks, but anyone tracking you must succeed at a Survival check against your Survival DC if it is higher than the normal DC to @UUID[Compendium.pf2e.actionspf2e.Item.EA5vuSgJfiHH7plD]{Track}.</p>\n<p>In some cases, you might Cover Tracks in an encounter. In this case, Cover Tracks is a single action and doesn't have the exploration trait.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "cover-tracks",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "move", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.SB7cMECVtE06kByk" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "SMF1hTWPHtmlS8Cd",
    "img": "systems/pf2e/icons/equipment/consumables/ammunition/awakened-adamantine-shot.webp",
    "name": "Bullet Dancer Stance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're unarmored and wielding a simple firearm, bayonet, or reinforced stock</p>\n<hr />\n<p><strong>Effect</strong> You enter a specialized stance for a unique martial art centered around the use of simple firearms. While in this stance, the only Strikes you can make are those using bayonets, reinforced stocks, and simple firearms. You can use Flurry of Blows with these weapons. You can use your other monk feats or monk abilities that normally require unarmed attacks with bayonets and reinforced stocks, so long as the feat or ability doesn't require a single, specific Strike. You can also use them with simple firearms when attacking within half the first range increment.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "bullet-dancer-stance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["stance"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Stance: Bullet Dancer Stance", "uuid": "Compendium.pf2e.feat-effects.Item.6ctQFQfSZ6o1uyyZ" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.SMF1hTWPHtmlS8Cd" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "SPtzUNatWJvTK61y",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Spirit's Mercy",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You take positive or negative damage, or you take any type of damage caused by a haunt, ghost, or other incorporeal undead</p>\n<p><strong>Cost</strong> 1 spirit wisp or remnant</p>\n<hr />\n<p><strong>Effect</strong> You purify a spirit by having it perform a final act of mercy to lessen the damage caused by another spirit. This grants you resistance to positive and negative damage (or resistance to all damage if caused by a haunt or incorporeal undead) against the triggering effect. If you expend a spirit wisp, the resistance is equal to twice your level. If you expend a spirit remnant, the resistance is equal to three times the level of the incorporeal undead or haunt from which you gained the remnant.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "spirits-mercy",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["necromancy"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.SPtzUNatWJvTK61y" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "SjmKHgI7a5Z9JzBx",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Force Open",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Using your body, a lever, or some other tool, you attempt to forcefully open a door, window, container or heavy gate. With a high enough result, you can even smash through walls. Without a crowbar, prying something open takes a -2 item penalty to the <span data-pf2-action=\"forceOpen\" data-pf2-glyph=\"A\">Athletics</span> check to Force Open.</p>\n<hr />\n<p><strong>Critical Success</strong> You open the door, window, container, or gate and can avoid damaging it in the process.</p>\n<p><strong>Success</strong> You break the door, window, container, or gate open, and it gains the @UUID[Compendium.pf2e.conditionitems.Item.6dNUvdb1dhToNDj3]{Broken} condition.</p>\n<p><strong>Critical Failure</strong> Your attempt jams the door, window, container, or gate shut, imposing a -2 circumstance penalty on future attempts to Force it Open.</p>\n<h2>Sample Force Open Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> fabric, flimsy glass</li>\n<li><strong>Trained</strong> ice, sturdy glass</li>\n<li><strong>Expert</strong> flimsy wooden door, wooden portcullis</li>\n<li><strong>Master</strong> sturdy wooden door, iron portcullis, metal bar</li>\n<li><strong>Legendary</strong> stone or iron door</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "force-open",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.SjmKHgI7a5Z9JzBx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "SkZAQRkLLkmBQNB9",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Escape",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You attempt to escape from being @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed}, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized}, or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained}. Choose one creature, object, spell effect, hazard, or other impediment imposing any of those conditions on you. Attempt a <span data-pf2-action=\"escape\" data-pf2-glyph=\"A\">check</span> using your <span data-pf2-action=\"escape\" data-pf2-glyph=\"A\" data-pf2-skill=\"unarmed\">unarmed attack modifier</span> against the DC of the effect. This is typically the Athletics DC of a creature grabbing you, the Thievery DC of a creature who tied you up, the spell DC for a spell effect, or the listed Escape DC of an object, hazard, or other impediment. You can attempt an <span data-pf2-action=\"escape\" data-pf2-glyph=\"A\" data-pf2-skill=\"acrobatics\">Acrobatics</span> or <span data-pf2-action=\"escape\" data-pf2-glyph=\"A\" data-pf2-skill=\"athletics\">Athletics</span> check instead of using your attack modifier if you choose (but this action still has the attack trait).</p>\n<hr />\n<p><strong>Critical Success</strong> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target. You can then Stride up to 5 feet.</p>\n<p><strong>Success</strong> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target.</p>\n<p><strong>Critical Failure</strong> You don't get free, and you can't attempt to Escape again until your next turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "escape",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.SkZAQRkLLkmBQNB9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "TC7OcDa7JlWbqMaN",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Treat Disease",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wearing or holding @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Tools}</p>\n<hr />\n<p>You spend at least 8 hours caring for a diseased creature. Attempt a <span data-pf2-action=\"treatDisease\">Medicine</span> check against the disease's DC. After you attempt to Treat a Disease for a creature, you can't try again until after that creature's next save against the disease.</p>\n<hr />\n<p><strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the disease.</p>\n<p><strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the disease.</p>\n<p><strong>Critical Failure</strong> Your efforts cause the creature to take a -2 circumstance penalty to its next save against the disease.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "treat-disease",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.TC7OcDa7JlWbqMaN" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "TMBXArwICQRJdwT6",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Fey's Fortune",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You attempt a skill check and haven't yet rolled</p>\n<hr />\n<p><strong>Effect</strong> Roll the skill check twice and use the better result</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "feys-fortune",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "fortune"], "rarity": "common", "selected": {} },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.TMBXArwICQRJdwT6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "TSDbyYRQwhIyY2Oq",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Energy Shot",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll initiative.</p>\n<hr />\n<p>You unleash a small surge of magical energy into your weapon, shrouding the bullet with potential energy and granting it the ability to deal energy damage to your foes to exploit their weaknesses. You can Interact to draw a ranged weapon. On your first three Strikes of this encounter with a firearm or crossbow, you deal an additional 1 acid, cold, fire or electricity damage. You choose which damage type to deal as part of making each Strike.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.zocU4IYIlWwRKUuE]{Effect: Energy Shot}</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "energy-shot",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "magical", "spellshot"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.TSDbyYRQwhIyY2Oq" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "TXqTIwNGULs3j6CH",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Bullying Press",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a melee Strike against your opponent, but haven't rolled yet.</p>\n<p><strong>Requirements</strong> You're in a duel, you're trained in Intimidation, and you rolled an Intimidation check for initiative this round.</p>\n<hr />\n<p>If you hit, your opponent becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1}. If your opponent is using Perception for initiative when this ability is used, they become @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} instead.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "bullying-press",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["flourish"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.TXqTIwNGULs3j6CH" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "TiNDYUGlMmxzxBYU",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Search",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} meticulously for hidden doors, concealed hazards, and so on. You can usually make an educated guess as to which locations are best to check and move at half speed, but if you want to be thorough and guarantee you checked everything, you need to travel at a Speed of no more than 300 feet per minute, or 150 feet per minute to ensure you check everything before you walk into it. You can always move more slowly while Searching to cover the area more thoroughly, and the @UUID[Compendium.pf2e.feats-srd.Item.GdZLxDtFXaQI3Fop]{Expeditious Search} feat increases these maximum Speeds. If you come across a secret door, item, or hazard while Searching, the GM will attempt a free secret check to Seek to see if you notice the hidden object or hazard. In locations with many objects to search, you have to stop and spend significantly longer to search thoroughly.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "search",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.TiNDYUGlMmxzxBYU" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Tj055UcNm6UEgtCg",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Crawl",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are prone and your Speed is at least 10 feet</p>\n<hr />\n<p>You move 5 feet by crawling and continue to stay @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "crawl",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Tj055UcNm6UEgtCg" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Tlrde2xh7AhesXNB",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "One Shot, One Kill",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll Stealth for initiative.</p>\n<hr />\n<p>Your first shot is the deadliest. Interact to draw a firearm or crossbow. On your first turn, your first Strike with that weapon deals an additional 1d6 precision damage. This precision damage increases to 2d6 at 9th level and 3d6 at 15th level.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [
        { "domain": "damage-roll", "key": "RollOption", "option": "one-shot-one-kill", "toggleable": true },
        {
          "category": "precision",
          "dieSize": "d6",
          "key": "DamageDice",
          "predicate": ["one-shot-one-kill", { "or": ["item:group:firearm", "item:tag:crossbow"] }],
          "selector": "strike-damage",
          "value": {
            "brackets": [
              { "end": 8, "value": { "diceNumber": 1 } },
              { "end": 14, "start": 9, "value": { "diceNumber": 2 } },
              { "start": 15, "value": { "diceNumber": 3 } }
            ]
          }
        }
      ],
      "slug": "one-shot-one-kill",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Tlrde2xh7AhesXNB" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "UAaQk93a30nx0nYY",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Affix a Talisman",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You must use a @UUID[Compendium.pf2e.equipment-srd.Item.vLGDUFrg4yGzpTQX]{Repair Kit}</p>\n<hr />\n<p>You spend 10 minutes affixing a talisman to an item, placing the item on a stable surface and using the repair kit with both hands. You can also use this activity to remove a talisman. If more than one talisman is affixed to an item, the talismans are suppressed; none of them can be activated.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "affix-a-talisman",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "manipulate"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.UAaQk93a30nx0nYY" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "UEkGL7uAGYDPFNfK",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Fire in the Hole",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature moves into the hazard's space</p>\n<hr />\n<p><strong>Effect</strong> The hazard explodes, dealing the bombs' damage and splash damage to the inanimate object. Combine this damage for the purpose of resistances and weaknesses, and this damage ignores an amount of the object's Hardness equal to your level. Any creatures adjacent to the hazard take the bombs' splash damage, similarly combined for the purpose of resistances and weaknesses. As a reminder, since you didn't throw the bombs, @UUID[Compendium.pf2e.feats-srd.Item.UjWLK86BgHxz3Itd]{Calculated Splash} and similar effects don't apply.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "fire-in-the-hole",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.UEkGL7uAGYDPFNfK" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "UHpkTuCtyaPqiCAB",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Step",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Your Speed is at least 10 feet</p>\n<hr />\n<p>You carefully move 5 feet. Unlike most types of movement, Stepping doesn't trigger reactions, such as @UUID[Compendium.pf2e.actionspf2e.Item.KAVf7AmRnbCAHrkT]{Attacks of Opportunity}, that can be triggered by move actions or upon leaving or entering a square.</p>\n<p>You can't Step into difficult terrain, and you can't Step using a Speed other than your land Speed.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "step",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.UHpkTuCtyaPqiCAB" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "UWdRX1VelipCzrCg",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Avert Gaze",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You avert your gaze from danger.</p>\n<p>You gain a +2 circumstance bonus to saves against visual abilities that require you to look at a creature or object, such as a medusa's petrifying gaze. Your gaze remains averted until the start of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "avert-gaze",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.UWdRX1VelipCzrCg" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Ul4I0ER6pj3U5eAk",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Invigorating Fear",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per hour</p>\n<p><strong>Trigger</strong> A creature within 60 feet gains the @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened} condition.</p>\n<hr />\n<p>You are invigorated by the shock of a prank or the thrum of terror. You gain temporary Hit Points equal to the creature's level or 3, whichever is higher. You lose any temporary Hit Points after 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "invigorating-fear",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1H" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Ul4I0ER6pj3U5eAk" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Uq2qy9aGNQ5JcPI1",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Into the Fray",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll initiative.</p>\n<hr />\n<p>You know trouble can lurk around every corner, and your hands never stray far from your holsters. You can Interact to draw a one-handed ranged weapon and can then Interact to draw a one-handed melee weapon. As your first action on your first turn, you can Stride as a free action toward an enemy you can perceive. If you can't perceive any enemies or can't end your movement closer to one, you can't use this Stride.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "into-the-fray",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Uq2qy9aGNQ5JcPI1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "UyMkWfVqdabLTgkH",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Wind Them Up",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Should foes parry your blade or dodge your bullets? Neither— they should be watching their purse. Make a melee Strike with your combination weapon, and then attempt a Thievery check with a –5 penalty to @UUID[Compendium.pf2e.actionspf2e.Item.RDXXE7wMrSPCLv5k]{Steal} from your target; you can't Steal closely guarded objects or objects that would take a long time to pilfer. You don't need a free hand to attempt to Steal something in this manner. If your Thievery check succeeds, the target is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against your ranged attacks until the start of your next turn, and you don't trigger reactions that are normally triggered by movement or a ranged attack. These effects occur even if your target has no objects to Steal.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "wind-them-up",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.UyMkWfVqdabLTgkH" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VAcxOCFQLb3Bap7K",
    "img": "systems/pf2e/icons/spells/mirror-image.webp",
    "name": "Accept Echo",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You allow the echo to inhabit your body, gaining a glowing aura around you, shining pale-green irises, a resonating voice, and the silhouette of the spirit around your own body, all of which can be seen clearly by others. While in this state, you become trained in the weapon you chose and an expert in the skill you chose. Additionally, while you're in this state, the echo can speak and interact with the Material Plane using your body, and you gain a +4 status bonus to all saves against possession effects, as the possessing spirit protects you from other possessions.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.2ca1ZuqQ7VkunAh3]{Effect: Accept Echo}</p>\n<p>This state lasts for 10 minutes, after which the echo disappears completely until the next time you make your daily preparations. You can Dismiss this effect.</p>\n<p>At 7th level you become a master of the skill you chose, at 13th level you become an expert with the weapon you chose, and at 15th level you become legendary with the skill you chose.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "accept-echo",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "selfEffect": { "name": "Effect: Accept Echo", "uuid": "Compendium.pf2e.feat-effects.Item.2ca1ZuqQ7VkunAh3" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VAcxOCFQLb3Bap7K" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VCUz5EnBUJF07j1a",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Sever Conduit",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your eidolon takes damage that would bring you to 0 Hit Points and comes from an effect other than a death effect</p>\n<hr />\n<p><strong>Effect</strong> You quickly shut the buffer in your link with your eidolon, causing your bonded ally to wink out of existence before you can be laid low. Your eidolon unmanifests, and you can't Manifest your Eidolon for 1 minute. In exchange, you don't take the triggering damage, though your eidolon still suffers any other adverse effects that accompanied the damage.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "sever-conduit",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VCUz5EnBUJF07j1a" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VMozDqMMuK5kpoX4",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Sneak",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can attempt to move to another place while becoming or staying @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected}. Stride up to half your Speed. (You can use Sneak while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type; you must move at half that Speed.)</p>\n<p>If you're undetected by a creature and it's impossible for that creature to observe you (for a typical creature, this includes when you're @UUID[Compendium.pf2e.conditionitems.Item.zJxUflt9np0q4yML]{Invisible}, the observer is @UUID[Compendium.pf2e.conditionitems.Item.XgEqL1kFApUbl5Z2]{Blinded}, or you're in darkness and the creature can't see in darkness), for any critical failure you roll on a check to Sneak, you get a failure instead. You also continue to be undetected if you lose cover or greater cover against or are no longer @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} from such a creature.</p>\n<p>At the end of your movement, the GM rolls your <span data-pf2-action=\"sneak\" data-pf2-glyph=\"A\">Stealth</span> check in secret and compares the result to the Perception DC of each creature you were @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} from or undetected by at the start of your movement. If you have cover or greater cover from the creature throughout your Stride, you gain the +2 circumstance bonus from cover (or +4 from greater cover) to your Stealth check. Because you're moving, the bonus increase from @UUID[Compendium.pf2e.actionspf2e.Item.ust1jJSCZQUhBZIz]{Taking Cover} doesn't apply. You don't get to roll against a creature if, at the end of your movement, you neither are concealed from it nor have cover or greater cover against it. You automatically become @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed} by such a creature.</p>\n<hr />\n<p><strong>Success</strong> You're undetected by the creature during your movement and remain undetected by the creature at the end of it.</p>\n<p>You become observed as soon as you do anything other than Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check. If you speak or make a deliberate loud noise, you become hidden instead of undetected.</p>\n<p>If a creature uses @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} and you become hidden to it as a result, you must Sneak if you want to become undetected by that creature again.</p>\n<p><strong>Failure</strong> A telltale sound or other sign gives your position away, though you still remain unseen. You're hidden from the creature throughout your movement and remain so.</p>\n<p><strong>Critical Failure</strong> You're spotted! You're observed by the creature throughout your movement and remain so. If you're invisible and were hidden from the creature, instead of being observed you're hidden throughout your movement and remain so.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "sneak",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VNuOwXIHafSLHvsZ",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Spellsling",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding your bonded beast gun</p>\n<hr />\n<p><strong>Effect</strong> You Cast a Spell that takes 1 or 2 actions to cast and requires a spell attack roll. The effects of the spell do not occur immediately but are imbued into the beast gun you're wielding. Make a Strike with that beast gun. Your spell flies with the ammunition, using your attack roll result to determine the effects of both the Strike and the spell. This counts as two attacks for the purposes of determining your multiple attack penalty, but you don't apply the penalty until after you've completed resolving the attack and spell.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "spellsling",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VNuOwXIHafSLHvsZ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VOEWhPQfN3lvHivK",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Foresight",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> The target of <em>@UUID[Compendium.pf2e.spells-srd.Item.qsNeG9KZpODSACMq]{Foresight}</em> defends against a hostile creature or other danger.</p>\n<hr />\n<p><strong>Effect</strong> If the hostile creature or danger forces the target to roll dice (a saving throw, for example), the target rolls twice and uses the higher result, and this spell gains the fortune trait. But if the hostile creature or danger is rolling against the target (an attack roll or skill check, for example), that hostile creature or danger rolls twice and uses the lower result, and this spell gains the misfortune trait.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "foresight",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VOEWhPQfN3lvHivK" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VQ5OxaDKE0lCj8Mr",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Shadow Step",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> The familiar is in dim light or darkness.</p>\n<hr />\n<p><strong>Effect</strong> The familiar teleports itself up to 30 feet. The destination must be in dim light or darkness and must be within your familiar's line of sight and line of effect.</p>\n<p>This action has the trait matching your tradition of magic, or occult if you aren't a spellcaster.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "shadow-step",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["conjuration", "shadow", "teleportation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VQ5OxaDKE0lCj8Mr" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "VjxZFuUXrCU94MWR",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll the attack roll for the weapon or unarmed attack you are using, and compare the result to the target creature's AC to determine the effect.</p>\n<hr />\n<p><strong>Critical Success</strong> As success, but you deal double damage.</p>\n<p><strong>Success</strong> You deal damage according to the weapon or unarmed attack, including any modifiers, bonuses, and penalties you have to damage.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.VjxZFuUXrCU94MWR" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "W4M8L9WepGLamlHs",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Threatening Approach",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You Stride to be adjacent to a foe and @UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize} that foe. If you succeed, the foe is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} instead of frightened 1.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "threatening-approach",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.W4M8L9WepGLamlHs" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "WpCs3QmPVn8SRbXy",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Touch and Go",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding a combination weapon.</p>\n<hr />\n<p>Your body's shadows mask your hands' steel. You can Step toward an enemy, you can Interact to change your weapon between melee or ranged modes, and you then Interact to reload.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "touch-and-go",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.WpCs3QmPVn8SRbXy" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "XH133DE3daobeav1",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Screaming Skull",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>The skeleton removes its skull and throws it, making a jaws Strike with a range of 20 feet. Regardless of whether it hits, the target and all enemies within 10 feet must attempt a Will save or be @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1}, or @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} on a critical failure. This uses a trained DC using the skeleton's Charisma modifier or an expert DC if the skeleton is specialized. At the start of the skeleton's next turn, the head bounces, rolls, or flies back to reattach. The skeleton is blind while its head is away.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "screaming-skull",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "emotion", "fear", "mental"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.XH133DE3daobeav1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "XMcnh4cSI32tljXa",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Hide",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You huddle behind cover or greater cover or deeper into concealment to become @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden}, rather than @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed}. The GM rolls your <span data-pf2-action=\"hide\" data-pf2-glyph=\"A\">Stealth</span> check in secret and compares the result to the Perception DC of each creature you're observed by but that you have cover or greater cover against or are concealed from. You gain the circumstance bonus from cover or greater cover to your check.</p>\n<hr />\n<p><strong>Success</strong> If the creature could see you, you're now hidden from it instead of observed. If you were hidden from or @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected} by the creature, you retain that condition.</p>\n<p>If you successfully become hidden to a creature but then cease to have cover or greater cover against it or be concealed from it, you become observed again. You cease being hidden if you do anything except Hide, @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak}, or Step. If you attempt to Strike a creature, the creature remains @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check.</p>\n<p>If a creature uses @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} to make you observed by it, you must successfully Hide to become hidden from it again.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "hide",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["secret", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.XMcnh4cSI32tljXa" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "XSGlLjI80LDCimAP",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Sustain an Activation",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have at least one magic item activation that you can sustain and you are not @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued}</p>\n<hr />\n<p>Choose one magic item activation with a sustained duration you have in effect. The duration of that activation continues until the end of your next turn. Some activations may have slightly different or expanded effects if you sustain them. Sustaining an Activation for more than 10 minutes (100 rounds) ends the activation and makes you fatigued unless the item's description states a different maximum duration (such as \"up to 1 minute\" or \"up to 1 hour\").</p>\n<p>If your Sustain an Activation action is disrupted, the item's effect immediately ends.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "sustain-an-activation",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.XSGlLjI80LDCimAP" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Xc5MLIbT5OPhnFIJ",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Indomitable Act",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You are about to attempt a check</p>\n<p><strong>Requirements</strong> You are @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened}</p>\n<hr />\n<p><strong>Effect</strong> You lean into your fear, using it to embolden you. You can roll the triggering check twice and take the higher result. This is a fortune effect.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Firebrands" },
      "rules": [],
      "slug": "indomitable-act",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [] },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Xc5MLIbT5OPhnFIJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "XeZwXzR1KBlJF770",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Resist Magic",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a saving throw against a harmful magical effect but haven't rolled yet.</p>\n<hr />\n<p>Your innate magic protects you. You gain a +1 circumstance bonus to the triggering saving throw. Additionally, if the triggering effect is arcane, if you roll a success, you get a critical success instead.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [
        { "domain": "all", "key": "RollOption", "option": "resist-magic", "toggleable": true },
        {
          "key": "FlatModifier",
          "predicate": ["resist-magic", { "or": ["arcane", "divine", "primal", "occult", "magical"] }],
          "selector": "saving-throw",
          "type": "circumstance",
          "value": 1
        },
        { "adjustment": { "success": "one-degree-better" }, "key": "AdjustDegreeOfSuccess", "predicate": ["resist-magic", "arcane"], "selector": "saving-throw", "type": "save" }
      ],
      "slug": "resist-magic",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.XeZwXzR1KBlJF770" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Xg57qG1rOfSSobke",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Riding Drake)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>The riding drake breathes a @Template[type:cone|distance:30]{30-foot cone} of fire, dealing [[/r ((ceil(@actor.level/2))d6)[fire]]]{1d6 fire damage for every 2 levels the drake has} to all creatures in the area (basic Reflex save). This uses a trained DC using the drake's Constitution modifier or an expert DC if the drake is specialized.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "breath-weapon-riding-drake",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Xg57qG1rOfSSobke" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "XkrN7gxdRXTYYBkX",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Restore the Mind",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your unleashed psyche gives you closer connections to the emotions of your allies, letting you project reassurance and strength that replenishes their mind and body. Choose one of the two benefits to grant one ally within 30 feet that you can see. That ally is then temporarily immune for 10 minutes.</p>\n<ul>\n<li>The ally gains a +1 status bonus to saving throws against mental effects until your psyche ends.</li>\n<li>The ally regains Hit Points equal to [[/r (2+2*@actor.level)[healing]]]{2 + double your level}.</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "restore-the-mind",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["emotion", "enchantment", "healing", "mental", "psyche", "psychic"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.XkrN7gxdRXTYYBkX" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "YMhmebfXAoOFXeSB",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Drifter's Wake",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You drift across the battlefield, striking down foes as you go. You Stride, and you can Strike up to three times at any points during your movement. Each attack must target a different enemy and must be made with a one-handed firearm, crossbow, melee weapon, or unarmed attack. Each attack counts toward your multiple attack penalty, but your multiple attack penalty doesn't increase until you've made all your attacks. Your movement doesn't trigger reactions.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "drifters-wake",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.YMhmebfXAoOFXeSB" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Yb0C1uLzeHrVLl7a",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Detect Magic",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You cast detect magic at regular intervals. You move at half your travel speed or slower. You have no chance of accidentally overlooking a magic aura at a travel speed up to 300 feet per minute, but must be traveling no more than 150 feet per minute to detect magic auras before the party moves into them.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "detect-magic",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Yb0C1uLzeHrVLl7a" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Yfl6q6Pi42FttDRE",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Glimpse Vulnerability",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<p><strong>Requirement</strong> You are holding your implement;</p>\n<hr />\n<p><strong>Effect</strong> You glimpse a hidden vulnerability and then strengthen it to aid you. Select a creature you can see. Until you Glimpse Vulnerability again, that target gains weakness 2 against your unarmed and weapon Strikes.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "glimpse-vulnerability",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["esoterica", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Yfl6q6Pi42FttDRE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "YjrM5G8Up0wv6x0u",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Chaotic Destiny",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You fail a saving throw during a combat</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> Chaos intervenes on your behalf at the last instant as you fail a saving throw. Draw a harrow card and reroll the saving throw you failed. You must take the result of the reroll, but if you drew a card from the suit of Crowns, improve the result by one degree of success.</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [],
      "slug": "chaotic-destiny",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.YjrM5G8Up0wv6x0u" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "YpuEmI1fJBZD3kMc",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Tendril Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Stretching to extend its body to its limits, your eidolon attacks a foe that would normally be beyond its reach. Your eidolon makes a melee unarmed Strike, increasing its reach by 5 feet for that Strike.</p>\n<p>If the unarmed attack has the disarm, shove, or trip trait, the eidolon can use the corresponding action instead of a Strike.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "tendril-strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.YpuEmI1fJBZD3kMc" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "Z8aa6afUterlfh5i",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Travel",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You progress toward moving into an adjacent hex. In open terrain, like a plain, using 1 Travel activity allows you to move from one hex to an adjacent hex. Traversing a hex with difficult terrain (such as a typical forest or desert) requires 2 Travel activities, and hexes of greater difficult terrain (such as a steep mountain or typical swamp) require 3 Travel activities to traverse. Traveling along a road uses a terrain type one step better than the surrounding terrain. For example, if you are traveling on a road over a mountain pass, the terrain is difficult terrain instead of greater difficult terrain.</p>\n<p>The Travel activity assumes you are walking overland. If you are flying or traveling on water, most hexes are open terrain, though there are exceptions. Flying into storms or high winds count as difficult or greater difficult terrain. Traveling down a river is open terrain, but traveling upriver is difficult or greater difficult terrain.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "travel",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.Z8aa6afUterlfh5i" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ZJcc7KGOEsYvN6SE",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Overload Vision",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature within 60 feet would make an attack roll against you</p>\n<hr />\n<p><strong>Effect</strong> The triggering creature must attempt a Fortitude save.</p>\n<hr />\n<p><strong>Critical Success</strong> The target is unaffected.</p>\n<p><strong>Success</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until the end of the current turn.</p>\n<p><strong>Failure</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.XgEqL1kFApUbl5Z2]{Blinded} until the end of the current turn.</p>\n<p><strong>Critical Failure</strong> The target is blinded until the end of the current turn and dazzled for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "overload-vision",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ZJcc7KGOEsYvN6SE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ZUAaBIAntZhFQixm",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Deconstruct",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You deconstruct an item to provide the starting point to convert it into a new item. You need the Alchemical Crafting skill feat to deconstruct alchemical items and the Magical Crafting skill feat to deconstruct magic items.</p>\n<p>To Deconstruct an item, you must meet the following requirements.</p>\n<ul>\n<li>The item is your level or lower. An item that doesn't list a level is level 0. If the item is 9th level or higher, you must be a master in Crafting, and if it's 16th or higher, you must be legendary.</li>\n<li>The item isn't a cursed item, artifact, or other item that is similarly hard to destroy. The item isn't a consumable item.</li>\n<li>The item has a listed Price.</li>\n<li>You must have an appropriate set of tools and, in many cases, a workshop. For example, you need access to a smithy to deconstruct a metal shield or an alchemist's lab to de-concoct alchemical items.</li>\n</ul>\n<p>At the start of this process, you must decide if you're using the deconstructed item to build a new, similar item, of if you are simply breaking it down for raw ingredients that can be used at a later date for any item. In either case, this activity takes 1 day to perform, but if you're using the item to create a new, similar item, that day can be counted as one of the crafting days for the new item.</p>\n<p>At the end of the activity, you must attempt a Crafting check. The GM sets the DC of this check based on the level of the item you are attempting to deconstruct, its rarity, and other circumstances.</p>\n<hr />\n<p><strong>Critical Success</strong> If you are deconstructing the item to make a new, similar item, you can apply 80% of the cost of the deconstructed item to the new item. If you are deconstructing the item for raw materials alone, you can apply 55% of the cost of the deconstructed item to a single new item. In either case, if this is in excess of the new item's cost, the remainder is lost.</p>\n<p><strong>Success</strong> As critical success, but you can only apply 75% of the deconstructed item's cost to the new similar item and 50% of the deconstructed item's cost to any single item.</p>\n<p><strong>Failure</strong> You fail to deconstruct the item, wasting your time. You can try again.</p>\n<p><strong>Critical Failure</strong> You fail to deconstruct the item and damage it in the process. You must either repair it before attempting again, or you can attempt to deconstruct it again but lose 5% of the value of the item.</p>"
      },
      "source": { "value": "Pathfinder Treasure Vault" },
      "rules": [],
      "slug": "deconstruct",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"] },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ZUAaBIAntZhFQixm" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ZhKXvnw7ND2hQ2pp",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Cleanse Soul Path",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You meditate, pray, or otherwise try to reinforce your soul's connection to your soulforged armament. This takes 10 minutes. Attempt a counteract check against your <em>soulforged corruption</em>. The counteract level is half your level rounded up, and the counteract check modifier is your Religion modifier. If successful, reduce the stage of your <em>soulforged corruption</em> by 1 (to a minimum of Stage 1).</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "cleanse-soul-path",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ZhKXvnw7ND2hQ2pp" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "a47Npi5XHXo47y49",
    "img": "systems/pf2e/icons/spells/flowing-strike.webp",
    "name": "Blizzard Evasion",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You take 40 or more physical damage from a single attack</p>\n<hr />\n<p><strong>Effect</strong> You discorporate into a whirling blizzard for up to 3 rounds. During this time, you gain resistance 10 to physical damage and weakness 10 to force damage. You gain a fly speed of 40 feet, but the only action you can take is to @UUID[Compendium.pf2e.actionspf2e.Item.cS9nfDRGD83bNU1p]{Fly}. The first time each round you enter another creature's space while discorporated, or the first time a creature enters your space, that creature takes @Damage[4d8[cold]] damage and must succeed at a @Check[type:fortitude|dc:resolve(@actor.system.attributes.classOrSpellDC.value)] saving throw against your class DC or spell DC, whichever is higher, or else be @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 1}. At the start of your turn, you can end this effect as a free action.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Monsters of Myth" },
      "rules": [],
      "slug": "blizzard-evasion",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "selfEffect": { "name": "Effect: Blizzard Evasion", "uuid": "Compendium.pf2e.feat-effects.Item.JF2xCqL6t4UJZtUi" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.a47Npi5XHXo47y49" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "aBQ8ajvEBByv45yz",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Cast a Spell",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You cast a spell you have prepared or in your repertoire. Casting a Spell is a special activity that takes a variable number of actions depending on the spell, as listed in each spell's stat block. As soon as the spellcasting actions are complete, the spell effect occurs.</p>\n<p>Some spells are cast as a reaction or free action. In those cases, you Cast the Spell as a reaction or free action (as appropriate) instead of as an activity. Such cases will be noted in the spell's stat block-for example, \"[reaction] verbal.\"</p>\n<p><strong>Long Casting</strong> Times Some spells take minutes or hours to cast. The Cast a Spell activity for these spells includes a mix of the listed spell components, but it's not necessary to break down which one you're providing at a given time. You can't use other actions or reactions while casting such a spell, though at the GM's discretion, you might be able to speak a few sentences. As with other activities that take a long time, these spells have the exploration trait, and you can't cast them in an encounter. If combat breaks out while you're casting one, your spell is disrupted.</p>\n<p><strong>Spell Components</strong> Each spell lists the spell components required to cast it after the action icons or text, such as \"[three-actions] material, somatic, verbal.\" The spell components, described in detail below, add traits and requirements to the Cast a Spell activity. If you can't provide the components, you fail to Cast the Spell.</p>\n<ul>\n<li>Material (manipulate)</li>\n<li>Somatic (manipulate)</li>\n<li>Verbal (concentrate)</li>\n<li>Focus (manipulate)</li>\n</ul>\n<p><strong>Disrupted and Lost Spells</strong> Some abilities and spells can disrupt a spell, causing it to have no effect and be lost. When you lose a spell, you've already expended the spell slot, spent the spell's costs and actions, and used the Cast a Spell activity. If a spell is disrupted during a @UUID[Compendium.pf2e.actionspf2e.Item.3f5DMFu8fPiqHpRg]{Sustain a Spell} action, the spell immediately ends.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "cast-a-spell",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.aBQ8ajvEBByv45yz" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "aHE92WSosMDewe33",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Take a Taste",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> The zombie has a creature @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained}.</p>\n<hr />\n<p>The zombie tries to grasp and bite a creature. The zombie makes a jaws Strike against the creature. This Strike uses the same statistics as its normal melee Strike, except its damage die is 1d10 and it deals piercing damage.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "take-a-taste",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.aHE92WSosMDewe33" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "akmQzZoNhyfCKFpL",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Airy Step",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> Once per day</p>\n<p><strong>Trigger</strong> A creature targets you with an attack or other targeted effect, and you can see the attacker.</p>\n<hr />\n<p>You create a blanket of fog in a 5-foot burst centered on one corner of your space. All creatures within that area are concealed, and all others are concealed to them. This concealment applies to the triggering effect, and the fog lasts for 1 minute or until dispersed by a strong wind. After resolving the triggering effect, you Step. If an effect prevents you from Stepping, you attempt to @UUID[Compendium.pf2e.actionspf2e.Item.SkZAQRkLLkmBQNB9]{Escape} the effect and Step if you succeed.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "airy-step",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["sylph"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.akmQzZoNhyfCKFpL" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "auOTjKr8gB1dqFh4",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Cold) (Cone)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[cold]] damage to all creatures in a @Template[type:cone|distance:30], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[cold]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-cold-cone",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "cold", "eidolon", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.auOTjKr8gB1dqFh4" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "b3h3QqvwS5fnaiu1",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Banshee Cry",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature within 30 feet Casts a Spell that has a verbal component or Activates an Item using a command Activation</p>\n<hr />\n<p><strong>Effect</strong> You set off a firework to explode with a loud screech near the creature. The creature must attempt a Will save.</p>\n<hr />\n<p><strong>Success</strong> The creature is unaffected.</p>\n<p><strong>Failure</strong> The creature must use an additional action on the triggering action or activity, or it's disrupted.</p>\n<p><strong>Critical Failure</strong> The triggering action is disrupted.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "banshee-cry",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.b3h3QqvwS5fnaiu1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "b6CanpXyUKJgxEwq",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Salt Wound",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> A creature that has blood and is not at its maximum Hit Points hits you with a melee Strike</p>\n<hr />\n<p><strong>Effect</strong> You channel salt and brine from your blood into the creature's wounds. The creature must attempt a @Check[type:fortitude|dc:resolve(@actor.attributes.classOrSpellDC.value)] using your class DC or spell DC, whichever is higher. On a failure, the creature takes @Damage[1d6[persistent,acid]] damage and is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} by the pain. On a critical failure, it instead takes @Damage[2d6[persistent,acid]] damage and is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 2}.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "salt-wound",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["undine"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.b6CanpXyUKJgxEwq" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "bCDMuu3tE4d6KHrJ",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Pistolero's Retort",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding a one-handed firearm or one-handed crossbow.</p>\n<p><strong>Trigger</strong> A foe within the first range increment of the one-handed firearm or one-handed crossbow you're wielding critically fails an attack roll against you.</p>\n<hr />\n<p>You punish your foe's failure with a shot. Make a Strike against the triggering foe with a one-handed firearm or one-handed crossbow.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "pistoleros-retort",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.bCDMuu3tE4d6KHrJ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "bG91dbtbgOnw7Ofx",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Board",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are adjacent to a point of entry on the vehicle you are attempting to board.</p>\n<p>You board a vehicle through an open top, a door, a portal, or a hatch; if you're already on board, you can instead use this action to disembark into an empty space adjacent to the vehicle's point of entry. Using this action while the vehicle is in motion is challenging, requiring a successful Acrobatics or Athletics check with a DC equal to the vehicle's AC.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "board",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.bG91dbtbgOnw7Ofx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "bT3skovyLUtP22ME",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Repair",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are holding or wearing a @UUID[Compendium.pf2e.equipment-srd.Item.vLGDUFrg4yGzpTQX]{Repair Kit}</p>\n<hr />\n<p>You spend 10 minutes attempting to fix a damaged item, placing the item on a stable surface and using the repair kit with both hands. The GM sets the DC, but it's usually about the same DC to Repair a given item as it is to Craft it in the first place. You can't Repair a destroyed item.</p>\n<hr />\n<p><strong>Critical Success</strong> You restore 10 Hit Points to the item, plus an additional 10 Hit Points per proficiency rank you have in Crafting (a total of 20 HP if you're trained, 30 HP if you're an expert, 40 HP if you're a master, or 50 HP if you're legendary).</p>\n<p><strong>Success</strong> You restore 5 Hit Points to the item, plus an additional 5 per proficiency rank you have in Crafting (for a total of 10 HP if you are trained, 15 HP if you're an expert, 20 HP if you're a master, or 25 HP if you're legendary).</p>\n<p><strong>Critical Failure</strong> You deal [[/r {2d6}]]{2d6 damage} to the item. Apply the item's Hardness to this damage.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "repair",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.bT3skovyLUtP22ME" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "bp0Up04x3dzGK5bB",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Debilitating Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your Strike hits an off-guard creature and deals damage</p>\n<hr />\n<p>You apply one of the following debilitations, which lasts until the end of your next turn:</p>\n<ul>\n<li><strong>Debilitation</strong> The target takes a -10-foot status penalty to its Speeds.</li>\n<li><strong>Debilitation</strong> The target becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1}.</li>\n</ul>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.yBTASi3FvnReAwHy]{Effect: Debilitating Strike}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "debilitating-strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["rogue"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.bp0Up04x3dzGK5bB" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "c8TGiZ48ygoSPofx",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Swim",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You propel yourself through water. In most calm water, you succeed at the action without needing to attempt a check. If you must breathe air and you're submerged in water, you must hold your breath each round. If you fail to hold your breath, you begin to drown. If the water you are swimming in is turbulent or otherwise dangerous, you might have to attempt an <span data-pf2-action=\"swim\" data-pf2-glyph=\"A\">Athletics</span> check to Swim.</p>\n<p>If you end your turn in water and haven't succeeded at a Swim action that turn, you sink 10 feet or get moved by the current, as determined by the GM. However, if your last action on your turn was to enter the water, you don't sink or move with the current that turn.</p>\n<hr />\n<p><strong>Critical Success</strong> You move through the water 10 feet, plus 5 feet per 20 feet of your land Speed (a total of 15 feet for most PCs).</p>\n<p><strong>Success</strong> You move through the water 5 feet, plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).</p>\n<p><strong>Critical Failure</strong> You make no progress, and if you're holding your breath, you lose 1 round of air.</p>\n<h2>Sample Swim Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> lake or other still water</li>\n<li><strong>Trained</strong> flowing water, like a river</li>\n<li><strong>Expert</strong> swiftly flowing river</li>\n<li><strong>Master</strong> stormy sea</li>\n<li><strong>Legendary</strong> maelstrom, waterfall</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "swim",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.c8TGiZ48ygoSPofx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "cS9nfDRGD83bNU1p",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Fly",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have a fly Speed</p>\n<hr />\n<p>You move through the air up to your fly Speed. Moving upward (straight up or diagonally) uses the rules for moving through difficult terrain. You can move straight down 10 feet for every 5 feet of movement you spend. If you Fly to the ground, you don't take falling damage. You can use an action to Fly 0 feet to hover in place. If you're airborne at the end of your turn and didn't use a Fly action this round, you fall.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "fly",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.cS9nfDRGD83bNU1p" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "cYdz2grcOcRt4jk6",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Disable Device",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Some devices require you to use @UUID[Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc]{Thieves' Tools} when disabling them.</p>\n<hr />\n<p>This action allows you to disarm a trap or another complex device. Often, a device requires numerous successes before becoming disabled, depending on its construction and complexity. Thieves' tools are helpful and sometimes even required to Disable a Device, as determined by the GM, and sometimes a device requires a higher proficiency rank in Thievery to disable it.</p>\n<p>Your <span data-pf2-action=\"disableDevice\" data-pf2-glyph=\"D\">Thievery</span> check result determines how much progress you make.</p>\n<hr />\n<p><strong>Critical Success</strong> You disable the device, or you achieve two successes toward disabling a complex device. You leave no trace of your tampering, and you can rearm the device later, if that type of device can be rearmed.</p>\n<p><strong>Success</strong> You disable the device, or you achieve one success toward disabling a complex device.</p>\n<p><strong>Critical Failure</strong> You trigger the device.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "disable-device",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.cYdz2grcOcRt4jk6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "cYtYKa1gDEl7y2N0",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Defend",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You move at half your travel speed with your shield raised. If combat breaks out, you gain the benefits of @UUID[Compendium.pf2e.actionspf2e.Item.xjGwis0uaC2305pm]{Raising a Shield} before your first turn begins.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "defend",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.cYtYKa1gDEl7y2N0" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "cx0juTYewwBmrYWv",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Beast's Charge",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon rushes forward, using its momentum to increase the power of its attack. Your eidolon Strides twice and then Strikes. If the eidolon moved at least 20 feet away from its starting position and moved entirely in a straight line, it gains a +1 circumstance bonus to this attack roll.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "beasts-charge",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.cx0juTYewwBmrYWv" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "cx5tBTy6weK6YSw9",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Thermal Eruption",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You concentrate your thermal energy and explode it outward. All creatures in a @Template[type:emanation|distance:20] take @Damage[14d6[fire]] damage with a basic Reflex save. Afterward, you lose all effects of the Dormant Eruption feat until your next daily preparations.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "thermal-eruption",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "fire", "primal"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.cx5tBTy6weK6YSw9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "d5I6018Mci2SWokk",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Leap",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You take a careful, short jump. You can Leap up to 10 feet horizontally if your Speed is at least 15 feet, or up to 15 feet horizontally if your Speed is at least 30 feet. You land in the space where your Leap ends (meaning you can typically clear a 5-foot gap, or a 10-foot gap if your Speed is 30 feet or more).</p>\n<p>If you Leap vertically, you can move up to 3 feet vertically and 5 feet horizontally onto an elevated surface.</p>\n<p>Jumping a greater distance requires using the Athletics skill.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "leap",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "d9gbpiQjChYDYA2L",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Decipher Writing",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You attempt to decipher complicated writing or literature on an obscure topic. This usually takes 1 minute per page of text, but might take longer (typically an hour per page for decrypting ciphers or the like). The text must be in a language you can read, though the GM might allow you to attempt to decipher text written in an unfamiliar language using <span data-pf2-action=\"decipherWriting\" data-pf2-skill=\"society\">Society</span> instead.</p>\n<p>The DC is determined by the GM based on the state or complexity of the document. The GM might have you roll one check for a short text or a check for each section of a larger text.</p><table><tbody><tr><th>Skill</th><th>Typically used for</th></tr><tr><td><span data-pf2-action=\"decipherWriting\" data-pf2-skill=\"arcana\">Arcana</span></td><td>Writing about magic or science</td></tr><tr><td><span data-pf2-action=\"decipherWriting\" data-pf2-skill=\"occultism\">Occultism</span></td><td>Esoteric texts about mysteries and philosophy</td></tr><tr><td><span data-pf2-action=\"decipherWriting\" data-pf2-skill=\"religion\">Religion</span></td><td>Scripture</td></tr><tr><td><span data-pf2-action=\"decipherWriting\" data-pf2-skill=\"society\">Society</span></td><td>Coded messages or archaic documents</td></tr></tbody></table>\n<hr />\n<p><strong>Critical Success</strong> You understand the true meaning of the text.</p>\n<p><strong>Success</strong> You understand the true meaning of the text. If it was a coded document, you know the general meaning but might not have a word-for-word translation.</p>\n<p><strong>Failure</strong> You can't understand the text and take a -2 circumstance penalty to further checks to decipher it.</p>\n<p><strong>Critical Failure</strong> You believe you understand the text on that page, but you have in fact misconstrued its message.</p><h2 class=\"title\">Sample Decipher Writing Tasks</h2>\n<ul>\n<li><strong>Trained</strong> entry-level philosophy treatise</li>\n<li><strong>Expert</strong> complex code, such as a cipher</li>\n<li><strong>Master</strong> spymaster's code or advanced research notes</li>\n<li><strong>Legendary</strong> esoteric planar text written in metaphor by an ancient celestial</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "decipher-writing",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.d9gbpiQjChYDYA2L" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "dCuvfq3r2K9wXY9g",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Basic Finisher",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You make a graceful, deadly attack. Make a Strike; if you hit and your weapon qualifies for @UUID[Compendium.pf2e.classfeatures.Item.RQH6vigvhmiYKKjg]{Precise Strike}, you deal the full [[/r {1d6}]]{1d6 damage} from precise strike.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "basic-finisher",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["finisher", "swashbuckler"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.dCuvfq3r2K9wXY9g" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "dLgAMt3TbkmLkUqE",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Ready",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You prepare to use an action that will occur outside your turn. Choose a single action or free action you can use, and designate a trigger. Your turn then ends. If the trigger you designated occurs before the start of your next turn, you can use the chosen action as a reaction (provided you still meet the requirements to use it). You can't Ready a free action that already has a trigger.</p>\n<p>If you have a multiple attack penalty and your readied action is an attack action, your readied attack takes the multiple attack penalty you had at the time you used Ready. This is one of the few times the multiple attack penalty applies when it's not your turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "ready",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.dLgAMt3TbkmLkUqE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "dnaPJfA0CDLNrWcW",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Implement's Interruption",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> The target of your Exploit Vulnerability uses a concentrate, manipulate, or move action, or leaves a square during a move action it's using.</p>\n<p><strong>Requirements</strong> You're holding your weapon implement and are benefiting from Exploit Vulnerability against a creature. The creature must be within your reach if you're wielding a melee weapon, or within 10 feet if you're wielding a ranged weapon.</p>\n<hr />\n<p>Your weapon senses a moment of weakness and guides your hand to strike down a foe. Make a Strike against the triggering creature with your weapon implement. If your attack is a critical hit, you disrupt the triggering action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "implements-interruption",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "magical", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.dnaPJfA0CDLNrWcW" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "e2ePMDa7ixbLRryj",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Encouraging Words",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Prerequisites</strong> Trained in Diplomacy</p>\n<p><strong>Requirements</strong> The target ally lost Stamina Points within the last round</p>\n<hr />\n<p>You give an ally within 30 feet a quick pep talk, helping them recover. Attempt a Diplomacy check. The DC is usually 15, though the GM might adjust it based on the circumstances. If you have expert proficiency in Diplomacy, you can instead attempt a DC 20 check to increase the Stamina Points recovered by 5; if you have master proficiency, you can attempt a DC 30 check to increase the Stamina Points by 15; if you have legendary proficiency, you can attempt a DC 40 check to increase the Stamina Points by 25. No matter the result, the ally is temporarily immune to Encouraging Words until they either @UUID[Compendium.pf2e.actionspf2e.Item.qc0VsZ0UesnurUUB]{Take a Breather} or rest for the day.</p>\n<hr />\n<p><strong>Critical Success</strong> The ally recovers [[/r {2d8} #Stamina Points]]{2d8 Stamina Points}.</p>\n<p><strong>Success</strong> The ally recovers [[/r {1d8} #Stamina Points]]{1d8 Stamina Points}.</p>\n<p><strong>Critical Failure</strong> The ally takes @Damage[1d8[mental]] damage, but this can reduce only Stamina Points, never Hit Points.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "encouraging-words",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": {
        "value": ["auditory", "general", "linguistic", "mental", "skill"],
        "rarity": "common",
        "selected": { "auditory": "Auditory", "general": "General", "linguistic": "Linguistic", "mental": "Mental", "skill": "Skill" }
      },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.e2ePMDa7ixbLRryj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "e5JscXqvBUC867oo",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Find Fault",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a saving throw against a spell or magic effect but haven't rolled yet</p>\n<hr />\n<p><strong>Effect</strong> You find some kind of fault with the magic, using that flaw to protect yourself from the effect. You gain a +1 circumstance bonus to your saving throw against the triggering effect, which increases to a +2 circumstance bonus if the effect is divine and originates from a worshipper of the deity you chose for your grudge.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "find-fault",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.e5JscXqvBUC867oo" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "eBgO5gp5kKhGtmk9",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Water Transfer",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per minute</p>\n<p><strong>Requirements</strong> You're on land and adjacent to a body of water</p>\n<hr />\n<p><strong>Effect</strong> You sink into the water and emerge back onto land in another space within 120 feet that's adjacent to the same body of water. You can transport yourself, any items you're wearing and holding, and up to one other willing creature.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "water-transfer",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["conjuration", "primal", "teleportation", "water"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1M" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.eBgO5gp5kKhGtmk9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ePfdZYZRmycMpSWU",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Avoid Dire Fate",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> you have an active harrow omen</p>\n<p><strong>Trigger</strong> you fail or critically fail a check associated with your harrow omen's suit</p>\n<hr />\n<p><strong>Effect</strong> Treat the failure as a success or a critical failure as a failure. You no longer have an active harrow omen.</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [],
      "slug": "avoid-dire-fate",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ePfdZYZRmycMpSWU" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "eReSHVEPCsdkSL4G",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Identify Magic",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Once you discover that an item, location, or ongoing effect is magical, you can spend 10 minutes to try to identify the particulars of its magic. If your attempt is interrupted, you must start over. The GM sets the DC for your check. Cursed or esoteric subjects usually have higher DCs or might even be impossible to identify using this activity alone. Heightening a spell doesn't increase the DC to identify it.</p>\n<hr />\n<p><strong>Critical Success</strong> You learn all the attributes of the magic, including its name (for an effect), what it does, any means of activating it (for an item or location), and whether it is cursed.</p>\n<p><strong>Success</strong> For an item or location, you get a sense of what it does and learn any means of activating it. For an ongoing effect (such as a spell with a duration), you learn the effect's name and what it does. You can't try again in hopes of getting a critical success.</p>\n<p><strong>Failure</strong> You fail to identify the magic and can't try again for 1 day.</p>\n<p><strong>Critical Failure</strong> You misidentify the magic as something else of the GM's choice.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "identify-magic",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.eReSHVEPCsdkSL4G" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "enQieRrITuEQZxx2",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Selfish Shield",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy within 15 feet damages you</p>\n<hr />\n<p>Your self-interest keeps you safe. You gain resistance against the triggering damage equal to 2 + half your level, regardless of damage type.</p>\n<p>In addition, your Strikes against the triggering creature deal [[/r {1}]]{1 damage} extra damage until the end of your next turn. You choose whether this extra damage is evil or negative each time you use this reaction. This extra damage increases to [[/r {2}]]{2 damage} at 9th level and [[/r {3}]]{3 damage} at 16th level.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [
        {
          "domain": "damage-roll",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Champion.TargetReaction",
          "option": "selfish-shield",
          "suboptions": [
            { "label": "PF2E.SpecificRule.Champion.NegativeDamage", "value": "negative" },
            { "label": "PF2E.SpecificRule.Champion.EvilDamage", "value": "evil" }
          ],
          "toggleable": true
        },
        {
          "damageType": "{item|flags.pf2e.rulesSelections.selfishShield}",
          "key": "FlatModifier",
          "predicate": ["selfish-shield"],
          "selector": "strike-damage",
          "slug": "selfish-shield-damage",
          "value": {
            "brackets": [
              { "end": 8, "value": 1 },
              { "end": 15, "start": 9, "value": 2 },
              { "start": 16, "value": 3 }
            ]
          }
        }
      ],
      "slug": "selfish-shield",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["champion"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.enQieRrITuEQZxx2" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ev8OHpBO3xq3Zt08",
    "img": "systems/pf2e/icons/features/ancestry/venomtail-kobold.webp",
    "name": "Tail Toxin",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Requirements</strong> You are wielding a piercing or slashing weapon</p>\n<hr />\n<p>You apply your tail's venom to a piercing or slashing weapon. If your next Strike with that weapon before the end of your next turn hits and deals damage, you deal persistent poison damage equal to your level to the target.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "tail-toxin",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["kobold", "poison"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "selfEffect": { "name": "Effect: Tail Toxin", "uuid": "Compendium.pf2e.feat-effects.Item.Q0DKJRnDuuUnLpvn" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ev8OHpBO3xq3Zt08" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ewwCglB7XOPLUz72",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Lie",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You try to fool someone with an untruth. Doing so takes at least 1 round, or longer if the lie is elaborate. You roll a single <span data-pf2-action=\"lie\">Deception</span> check and compare it against the Perception DC of every creature you are trying to fool. The GM might give them a circumstance bonus based on the situation and the nature of the lie you are trying to tell. Elaborate or highly unbelievable lies are much harder to get a creature to believe than simpler and more believable lies, and some lies are so big that it's impossible to get anyone to believe them.</p>\n<p>At the GM's discretion, if a creature initially believes your lie, it might attempt a Perception check later to @UUID[Compendium.pf2e.actionspf2e.Item.1xRFPTFtWtGJ9ELw]{Sense Motive} against your Deception DC to realize it's a lie. This usually happens if the creature discovers enough evidence to counter your statements.</p>\n<hr />\n<p><strong>Success</strong> The target believes your lie.</p>\n<p><strong>Failure</strong> The target doesn't believe your lie and gains a +4 circumstance bonus against your attempts to Lie for the duration of your conversation. The target is also more likely to be suspicious of you in the future.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "lie",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "linguistic", "mental", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ewwCglB7XOPLUz72" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "fJImDBQfqfjKJOhk",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Sense Direction",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Using the stars, the position of the sun, traits of the geography or flora, or the behavior of fauna, you can stay oriented in the wild. Typically, you attempt a <span data-pf2-action=\"senseDirection\">Survival</span> check only once per day, but some environments or changes might necessitate rolling more often. The GM determines the DC and how long this activity takes (usually just a minute or so). More unusual locales or those you're unfamiliar with might require you to have a minimum proficiency rank to Sense Direction. Without a @UUID[Compendium.pf2e.equipment-srd.Item.wob6DB1FFdWs0mbp]{Compass}, you take a -2 item penalty to checks to Sense Direction.</p>\n<hr />\n<p><strong>Critical Success</strong> You get an excellent sense of where you are. If you are in an environment with cardinal directions, you know them exactly.</p>\n<p><strong>Success</strong> You gain enough orientation to avoid becoming hopelessly lost. If you are in an environment with cardinal directions, you have a sense of those directions.</p>\n<h2 class=\"title\">Sample Sense Direction Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> determine a cardinal direction using the sun</li>\n<li><strong>Trained</strong> find an overgrown path in a forest</li>\n<li><strong>Expert</strong> navigate a hedge maze</li>\n<li><strong>Master</strong> navigate a byzantine labyrinth or relatively featureless desert</li>\n<li><strong>Legendary</strong> navigate an ever-changing dream realm</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "sense-direction",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.fJImDBQfqfjKJOhk" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "fL7FhTBcKxMzLBAs",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Empty Vessel",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You would take mental damage or be affected by a mental effect</p>\n<hr />\n<p><strong>Effect</strong> You gain a +2 circumstance bonus to Will saves and resistance to mental damage equal to your level against the triggering effect. This applies only to the initial effect, not successive saves, persistent mental damage, or other repeated effects.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [
        { "domain": "all", "key": "RollOption", "option": "empty-vessel", "toggleable": true },
        { "key": "FlatModifier", "predicate": ["empty-vessel"], "selector": "will", "type": "circumstance", "value": 2 },
        { "key": "Resistance", "predicate": ["empty-vessel"], "type": "mental", "value": "@actor.level" }
      ],
      "slug": "empty-vessel",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.fL7FhTBcKxMzLBAs" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "fodJ3zuwQsYnBbtk",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Exploit Vulnerability",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<p><strong>Requirements</strong> You are holding your implement.</p>\n<hr />\n<p>You scour your experiences and learning to identify something that might repel your foe. You retrieve an object from your esoterica with the appropriate supernatural qualities, then use your implement to stoke the remnants of its power into a blaze. Select a creature you can see and attempt an Esoteric Lore check against a standard DC for its level, as you retrieve the right object from your esoterica and use your implement to empower it. You gain the following effects until you Exploit Vulnerabilities again.</p>\n<hr />\n<p><strong>Critical Success</strong> You remember the creature's weaknesses, and as you empower your esoterica, you have a flash of insight that grants even more knowledge about the creature. You learn all of the creature's resistances, weaknesses, and immunities, including the amounts of the resistances and weaknesses and any unusual weaknesses or vulnerabilities, such as what spells will pass through a golem's antimagic. You can exploit either the creature's mortal weakness or personal antithesis (see the Exploit Vulnerability class feature). Your unarmed and weapon Strikes against the creature also become magical if they weren't already.</p>\n<p><strong>Success</strong> You recall an important fact about the creature, learning its highest weakness (or one of its highest weaknesses, if it has multiple with the same value) but not its other weaknesses, resistances, or immunities. You can exploit either the creature's mortal weakness or personal antithesis. Your unarmed and weapon Strikes against the creature also become magical if they weren't already.</p>\n<p><strong>Failure</strong> Failing to recall a salient weakness about the creature, you instead attempt to exploit a more personal vulnerability. You can exploit only the creature's personal antithesis. Your unarmed and weapon Strikes against the creature also become magical if they weren't already.</p>\n<p><strong>Critical Failure</strong> You couldn't remember the right object to use and become distracted while you rummage through your esoterica. You become off-guard until the beginning of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "exploit-vulnerability",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["esoterica", "manipulate", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.fodJ3zuwQsYnBbtk" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ftG89SjTSa9DYDOD",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Create Forgery",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You create a forged document, usually over the course of a day or a week. You must have the proper writing material to create a forgery. When you Create a Forgery, the GM rolls a secret <span data-pf2-action=\"createForgery\">Society</span> check. If you succeed, the forgery is of good enough quality that passive observers can't notice the fake. Only those who carefully examine the document and attempt a Perception or Society check against your Society DC can do so.</p>\n<p>If the document's handwriting doesn't need to be specific to a person, you need only to have seen a similar document before, and you gain up to a +4 circumstance bonus to your check, as well as to your DC (the GM determines the bonus). To forge a specific person's handwriting, you need a sample of that person's handwriting.</p>\n<p>If your check result was below 20, the forgery has some obvious signs of being a fake, so the GM compares your result to each passive observer's Perception DC or Society DC, whichever is higher, using the success or failure results below. Once the GM rolls your check for a document, that same result is used against all passive observers' DCs no matter how many creatures passively observe that document.</p>\n<p>An observer who was fooled on a passive glance can still choose to closely scrutinize the documents on the lookout for a forgery, using different techniques and analysis methods beyond the surface elements you successfully forged with your original check. In that case, the observer can attempt a Perception or Society check against your Society DC (if they succeed, they know your document is a forgery).</p>\n<hr />\n<p><strong>Success</strong> The observer does not detect the forgery.</p>\n<p><strong>Failure</strong> The observer knows your document is a forgery.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "create-forgery",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ftG89SjTSa9DYDOD" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "g8QrV39TmZfkbXgE",
    "img": "systems/pf2e/icons/spells/cone-of-cold.webp",
    "name": "Channel Elements",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Your kinetic gate isn't active.</p>\n<hr />\n<p>You tap into your kinetic gate to make elements flow around you. Your kinetic aura activates, and as a part of this action, you can use a 1-action Elemental Blast or a 1-action stance impulse. Your kinetic aura is a 10-foot emanation where pieces of your kinetic element (or all your kinetic elements, if you can channel more than one) flow around you. The kinetic aura can't damage anything or affect the environment around you unless another ability allows it to. Channel Elements has the traits of all your kinetic elements.</p>\n<p>Your kinetic aura automatically deactivates if you're knocked out, you use an impulse with the overflow trait, or you Dismiss the aura. Though you can't use new impulses while your kinetic aura is deactivated, ones you already used remain, and you can still Sustain any that can be sustained. Stance impulses are linked to your kinetic aura and end when the aura deactivates.</p>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [],
      "slug": "channel-elements",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["aura", "kineticist", "primal"] },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Effect: Kinetic Aura", "uuid": "Compendium.pf2e.feat-effects.Item.pLurcSPQb2gjAzoP" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.g8QrV39TmZfkbXgE" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "gBhWEy3ToxQeCLQm",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Covered Reload",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You duck into a safe position or minimize your profile while reloading to make your next attack. Either @UUID[Compendium.pf2e.actionspf2e.Item.ust1jJSCZQUhBZIz]{Take Cover} or attempt to @UUID[Compendium.pf2e.actionspf2e.Item.XMcnh4cSI32tljXa]{Hide}, then Interact to reload. As normal, you must meet the requirements to Take Cover or Hide; you must be @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}, benefiting from cover, or near a feature that allows you to Take Cover, and you need to be benefiting from cover or @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} to a creature to Hide from that creature.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "covered-reload",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.gBhWEy3ToxQeCLQm" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "gU93T2UqxLsX9gyF",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Fated Not to Die",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You are dying</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> Draw a harrow card, and you automatically lose the dying condition, though you remain @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious} at 0 Hit Points. If the card you drew was from the suit of Shields, you awaken and have an amount of Hit Points restored to you equal to [[/r (1d6+@actor.level)[healing]]]{1d6 + your level}.</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [],
      "slug": "fated-not-to-die",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.gU93T2UqxLsX9gyF" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ge56Lu1xXVFYUnLP",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Trip",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have at least one hand free. Your target can't be more than one size larger than you</p>\n<hr />\n<p>You try to knock a creature to the ground. Attempt an <span data-pf2-action=\"trip\" data-pf2-glyph=\"A\">Athletics</span> check against the target's Reflex DC.</p>\n<hr />\n<p><strong>Critical Success</strong> The target falls and lands @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone} and takes @Damage[1d6[bludgeoning]] damage.</p>\n<p><strong>Success</strong> The target falls and lands prone.</p>\n<p><strong>Critical Failure</strong> You lose your balance and fall and land prone.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "trip",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["attack", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ge56Lu1xXVFYUnLP" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "grkggNQnOxWWsjBH",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Cold) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[cold]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[cold]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-cold-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "cold", "eidolon", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.grkggNQnOxWWsjBH" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "gxtq81VAhpmNvEgA",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Tap Ley Line",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You attempt to manipulate the magical essence of a ley line that you're aware of within 30 feet. The GM determines the DC based on the hard DC for the ley line's level.</p>\n<hr />\n<p><strong>Critical Success</strong> You gain the ley line's benefits until the end of your next turn.</p>\n<p><strong>Success</strong> You gain the ley line's benefits until the end of your turn.</p>\n<p><strong>Failure</strong> You take mental damage equal to 1d6 × the ley line's level. You can't Tap the Ley Line again for 1 hour.</p>\n<p><strong>Critical Failure</strong> As failure, and you're subject to the ley line's backlash effect. You can't Tap the Ley Line again for 24 hours.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "tap-ley-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.gxtq81VAhpmNvEgA" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "h4Tzdhqfryp5m2fO",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Harvest Heartsliver",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're inside Kothogaz's body.</p>\n<hr />\n<p>You attempt to steal a section of Kothogaz's heart. Attempt an attack roll or a @Check[type:acrobatics|dc:40], @Check[type:athletics|dc:40], @Check[type:medicine|dc:40], @Check[type:nature|dc:40], @Check[type:occultism|dc:40], or @Check[type:religion|dc:40] check.</p>\n<hr />\n<p><strong>Critical Success</strong> You steal a small disharmonic heartsliver, stow it on your person, and can exit Kothogaz's body.</p>\n<p><strong>Success</strong> As critical success, but you can't exit.</p>\n<p><strong>Failure</strong> You take Kothogaz's Swallow Whole damage.</p>\n<p><strong>Critical Failure</strong> You take double Kothogaz's Swallow Whole damage and are @UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} by its heartbeat for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Monsters of Myth" },
      "rules": [],
      "slug": "harvest-heartsliver",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "rare" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.h4Tzdhqfryp5m2fO" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "hFRHPBj6wjAayNtW",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Jinx",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>You can curse another creature with clumsiness. This curse has a range of 30 feet, and you must be able to see your target. The target gets a @Check[type:will|dc:resolve(@actor.attributes.classOrSpellDC.value)] to resist this jinx, using your class DC or spell DC, whichever is higher.</p>\n<hr />\n<p><strong>Success</strong> The target is unaffected and is temporarily immune for 24 hours.</p>\n<p><strong>Failure</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 1} for 1 minute.</p>\n<p><strong>Critical Failure</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 2} for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "jinx",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["curse", "necromancy", "occult"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.hFRHPBj6wjAayNtW" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "hPZQ5vA9QHEPtjFW",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Spin Tale",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once every 10 minutes</p>\n<hr />\n<p><strong>Effect</strong> You tell a story, designating one of your allies (but not yourself) as the hero of the story, and one enemy as the villain; both must be within 60 feet. The hero gains a +1 status bonus to attack rolls and saving throws against the villain until the start of your next turn. If you Spin a Tale on your next turn, the story continues for another round, for a maximum of 10 rounds. While the tale continues, minor, crude illusions spring into being in your space; these are arcane illusion effects that have no mechanical impact other than illustrating your tale.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.UzIamWcEJTOjwfoA]{Effect: Spin Tale}</p>"
      },
      "source": { "value": "Pathfinder #170: Spoken on the Song Wind" },
      "rules": [],
      "slug": "spin-tale",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "linguistic"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT10M" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.hPZQ5vA9QHEPtjFW" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "hi56uHG1aAb84Zzu",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Fight with Fear",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature that you can see uses a mental effect against you</p>\n<hr />\n<p><strong>Effect</strong> The triggering creature must attempt a Will save, which has the following effects.</p>\n<hr />\n<p><strong>Success</strong> The creature is unaffected.</p>\n<p><strong>Failure</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2}, and you gain a +2 status bonus to your saving throw or other defense against the triggering mental effect.</p>\n<p><strong>Critical Failure</strong> The creature is frightened 2, and you're unaffected by the triggering mental effect.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "fight-with-fear",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "emotion", "fear", "mental"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.hi56uHG1aAb84Zzu" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "iBf9uGn5LOHkWpZ6",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Craft Disharmonic Instrument",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Legendary in Crafting</p>\n<hr />\n<p>You use legendary Vudran techniques to craft a disharmonic instrument that incorporates pieces of Kothogaz's heart. This is likely a tanpura, but legends mention other instruments and even voice enhancers. A disharmonic instrument is a virtuoso musical instrument.</p>\n<p>This activity requires seven disharmonic heartslivers, the formula for a disharmonic instrument, 55,000 gp worth of rare materials, and 7 days of work. At the end of the 7 days, attempt a @Check[type:crafting|dc:40|traits:action:craft] check to Craft.</p>\n<hr />\n<p><strong>Critical Success</strong> You masterfully complete the disharmonic instrument. Holding the instrument grants immunity to Kothogaz's tympanic heartbeat and many-eyed blight.</p>\n<p><strong>Success</strong> You complete the disharmonic instrument.</p>\n<p><strong>Failure</strong> You don't complete the disharmonic instrument, and you contract many-eyed blight from the heartslivers.</p>\n<p><strong>Critical Failure</strong> As failure, and whenever you're on the same plane as Kothogaz, it can immediately teleport to you with its Disharmonic Door ability.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Monsters of Myth" },
      "rules": [],
      "slug": "craft-disharmonic-instrument",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "manipulate"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.iBf9uGn5LOHkWpZ6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "iEYZ5PAim5Cvbila",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Secure Disguises",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You seek to procure or create disguises. Attempt a normal, hard, or very hard Crafting, Deception, Performance, or Society check.</p>\n<hr />\n<p><strong>Success</strong> You procure or creates disguises, gaining 1 EP that can be used only to maintain a cover identity.</p>\n<p><strong>Failure</strong> Your efforts result in an unusable disguise.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "secure-disguises",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.iEYZ5PAim5Cvbila" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "iJLzVonevhsi2uPs",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Visions of Sin",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per 10 minutes</p>\n<p>Your eidolon summons images of its sin into the mind of a target creature within 30 feet, tormenting and confusing the target. The target must attempt a Will save against your spell DC with the following effects. The effects last until the end of your next turn, but your eidolon can use a single action, which has the concentrate trait, to extend the effects until the end of your next turn (like Sustaining a Spell), to a maximum duration of 1 minute.</p>\n<p>If the target is evil, it takes a -2 circumstance penalty to its save. Regardless of whether it succeeds, the target becomes temporarily immune for 1 day.</p>\n<hr />\n<p><strong>Critical Success</strong> The target is unaffected.</p>\n<p><strong>Success</strong> The target can't use reactions.</p>\n<p><strong>Failure</strong> The target is @UUID[Compendium.pf2e.conditionitems.Item.xYTAsEpcJE1Ccni3]{Slowed 1} and can't use reactions.</p>\n<p><strong>Critical Failure</strong> As failure, and the target is also @UUID[Compendium.pf2e.conditionitems.Item.yblD8fOR1J8rDwEQ]{Confused} for 1 round. The confusion can't be extended, but the other effects can.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "visions-of-sin",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon", "emotion", "magical", "mental"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT10M" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.iJLzVonevhsi2uPs" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "iTx0vXAhiS4lKwEi",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Psychic Defense",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your opponent uses a psychic manifestation against you.</p>\n<p><strong>Requirements</strong> You're in a psychic duel and are psychically centered.</p>\n<hr />\n<p>You gain the benefit matching your psychic center against the triggering manifestation. Then your psychic center is expended.</p>\n<p><strong>Armor of Insight (Perception)</strong> Sensing the incoming attack, you make your mind resist psychic harm. You gain resistance equal to half your level (minimum 1) to mental damage against the triggering effect. This resistance is doubled if you're a master in Perception and tripled if you're legendary.</p>\n<p><strong>Empathic Orbit (Diplomacy)</strong> Displaying empathy, you sow doubt in your attacker to diminish their resolve for psychic combat. The opponent is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1} until the end of their next turn or @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 2} if you're legendary in Diplomacy.</p>\n<p><strong>Ire's Spear (Intimidation)</strong> Blazing anger surges in your mind, causing backlash to anyone who harms you. If the manifestation damages you, the opponent takes damage equal to the counteract level of the manifestation it used against you. This damage is doubled if you're a master of Intimidation or tripled if you're legendary.</p>\n<p><strong>Rational Labyrinth (Occultism)</strong> Analytically breaking down the attack, you realign your mind's defenses into a puzzle designed to confound it. You gain a +2 status bonus to your Will save or Will DC, or a +4 status bonus if the effect has the emotion trait.</p>\n<p><strong>Sensory Phantasm (Deception)</strong> Using your guile, you send psychic illusions through your mental link to your foe, making yourself harder to pinpoint. You're @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} against the opponent until the end of its next turn.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "psychic-defense",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "magical"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.iTx0vXAhiS4lKwEi" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ijZ0DDFpMkWqaShd",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Palm an Object",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Palming a small, unattended object without being noticed requires you to roll a single <span data-pf2-action=\"palmAnObject\" data-pf2-glyph=\"A\">Thievery</span> check against the Perception DCs of all creatures who are currently observing you. You take the object whether or not you successfully conceal that you did so. You can typically only Palm Objects of negligible Bulk, though the GM might determine otherwise depending on the situation.</p>\n<hr />\n<p><strong>Success</strong> The creature does not notice you Palming the Object.</p>\n<p><strong>Failure</strong> The creature notices you Palming the Object, and the GM determines the creature's response.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "palm-an-object",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ijZ0DDFpMkWqaShd" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "izvfZ561JTdeyh6i",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Goblin Jubilee",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 3 batches of infused reagents</p>\n<hr />\n<p><strong>Effect</strong> Chaos fills a @Template[type:burst|distance:20] within 120 feet. All creatures in the area takes @Damage[3d6[fire],3d6[sonic]]{3d6 fire damage and 3d6 sonic damage} and must attempt a Fortitude save. A goblin jubilee display costs 3 batches of infused reagents, rather than 1.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature is unaffected.</p>\n<p><strong>Success</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} and @UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} until the end of its next turn and takes half damage.</p>\n<p><strong>Failure</strong> The creature is dazzled and deafened for 1 minute and takes full damage.</p>\n<p><strong>Critical Failure</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.XgEqL1kFApUbl5Z2]{Blinded} for 1 round, dazzled and deafened for 1 minute, and takes double damage.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "goblin-jubilee",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fire", "sonic", "visual"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.izvfZ561JTdeyh6i" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "jSC5AYEfliOPpO3H",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Reloading Strike",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding a firearm or crossbow in one hand, and your other hand either wields a one-handed melee weapon or is empty.</p>\n<hr />\n<p>You make a melee attack and then reload your gun in one fluid movement. Strike an opponent within reach with your one-handed melee weapon (or, if your other hand is empty, with an unarmed attack), and then Interact to reload. You don't need a free hand to reload in this way.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "reloading-strike",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.jSC5AYEfliOPpO3H" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "jZQoAHmGJvi53NRR",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Psychometric Assessment",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> Your bare hands are touching an object in which you detected psychometric resonance</p>\n<hr />\n<p><strong>Effect</strong> You spend 1 minute concentrating on the object to get a vision of the face of the person who imbued the item with such emotion in the first place. If the associated emotion is painfully negative, you might take @Damage[1d6[mental]] damage, as determined by the GM.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "psychometric-assessment",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "divination", "emotion", "exploration", "mental", "occult"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.jZQoAHmGJvi53NRR" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "jbmXxq56swDYw8hy",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Final Spite",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You're reduced to 0 Hit Points</p>\n<hr />\n<p><strong>Effect</strong> You make a Strike before falling @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "final-spite",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.jbmXxq56swDYw8hy" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "jftNJjBNxp2cleoi",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Expeditious Inspection",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per 10 minutes</p>\n<hr />\n<p>You observe and assess your surroundings with great speed. You @UUID[Compendium.pf2e.actionspf2e.Item.1OagaWtBpVXExToo]{Recall Knowledge}, @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek}, or @UUID[Compendium.pf2e.actionspf2e.Item.1xRFPTFtWtGJ9ELw]{Sense Motive}.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "expeditious-inspection",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["investigator"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 10, "per": "PT1M" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.jftNJjBNxp2cleoi" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "jtuWJa6Iyyd3gkVv",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Gallop",
    "system": {
      "description": { "gm": "", "value": "<p>The skeletal mount Strides twice, with a +10‑foot circumstance bonus to its Speed.</p>" },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [{ "key": "FlatModifier", "selector": "speed", "type": "circumstance", "value": 10 }],
      "slug": "gallop",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.jtuWJa6Iyyd3gkVv" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "k5TASjIxghvGCy7g",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Call to Axis",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Given by Rite of Knowing</p>\n<p><strong>Frequency</strong> once per day</p>\n<p><strong>Requirements</strong> You are about to attempt a check to Recall Knowledge. You call upon the knowledge of Axis to ensure the accuracy of your information. You roll a second time and use the higher result. If you roll a critical failure, you get a failure instead. If you roll a success, you get a critical success instead.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: The Mwangi Expanse" },
      "rules": [],
      "slug": "call-to-axis",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.k5TASjIxghvGCy7g" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "kKKHwVUnroKuAnOt",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Toxic Skin",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per hour</p>\n<p><strong>Trigger</strong> A creature touches you, such as by Grappling you, successfully hitting you with an unarmed attack, or using a touch-range spell against you.</p>\n<hr />\n<p>You exude a deadly toxin. The triggering creature takes 1d4 poison damage (@Check[type:fortitude|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true|traits:poison] using your class DC or spell DC, whichever is higher). At 3rd level and every 2 levels thereafter, the damage increases by 1d4.</p>\n<p>[[/r ceil(@actor.level/2)d4[poison]]]{Leveled Poison Damage}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: The Mwangi Expanse" },
      "rules": [],
      "slug": "toxic-skin",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["grippli", "poison"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1H" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.kKKHwVUnroKuAnOt" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "kMcV8e5EZUxa6evt",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Squeeze",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You contort yourself to squeeze through a space so small you can barely fit through. This action is for exceptionally small spaces; many tight spaces are difficult terrain that you can move through more quickly and without a check.</p>\n<hr />\n<p><strong>Critical Success</strong> You squeeze through the tight space in 1 minute per 10 feet of squeezing.</p>\n<p><strong>Success</strong> You squeeze through in 1 minute per 5 feet.</p>\n<p><strong>Critical Failure</strong> You become stuck in the tight space. While you're stuck, you can spend 1 minute attempting another <span data-pf2-action=\"squeeze\">Acrobatics</span> check at the same DC. Any result on that check other than a critical failure causes you to become unstuck.</p><h2 class=\"title\">Sample Squeeze Tasks</h2>\n<ul>\n<li><strong>Trained</strong> space barely fitting your shoulders</li>\n<li><strong>Master</strong> space barely fitting your head</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "squeeze",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "move", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.kMcV8e5EZUxa6evt" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "kRxWINkrHUPSHHYq",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Recall the Teachings",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>The heightened power of your psyche lets you recall every lesson you've ever learned. You search your mind for the right teaching, which at first seems cryptic but comes into clarity when it's most relevant. Until the start of your next turn, you count as having prepared to @UUID[Compendium.pf2e.actionspf2e.Item.HCl3pzVefiv9ZKQW]{Aid} all allies within 30 feet of you. If you use the Aid reaction to help one of them during that time, you roll an @Check[type:occultism|dc:20|traits:action:aid]{Occultism check} for Aid as you recall a lesson to help them. Most lessons take the form of short axioms, parables, or sayings, meaning that conveying them to your ally usually grants your Aid reaction the auditory and linguistic traits.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "recall-the-teachings",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divination", "occult", "psyche", "psychic"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.kRxWINkrHUPSHHYq" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "kUME7DMhhHH6eIiH",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "That's My Number",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You roll your lucky number as your d20 result on a non‑secret attack roll, saving throw, or skill check</p>\n<hr />\n<p><strong>Effect</strong> You call upon the fortune stored within your lucky number and reroll the triggering check. However, pushing your luck has a price: if your result on the reroll is the same number again, you critically fail, regardless of what degree of success you ordinarily would have received.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "thats-my-number",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divination", "fortune"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.kUME7DMhhHH6eIiH" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "kV3XM0YJeS2KCSOb",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Scout",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You scout ahead and behind the group to watch danger, moving at half speed. At the start of the next encounter, every creature in your party gains a +1 circumstance bonus to their initiative rolls.</p>\n<p>@UUID[Compendium.pf2e.other-effects.Item.EMqGwUi3VMhCjTlF]{Effect: Scouting}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "scout",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.kV3XM0YJeS2KCSOb" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "kbUymGTjbesOKsV6",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Primal Roar",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon unleashes a primal roar or other such terrifying noise that fits your eidolon's form. Your eidolon attempts Intimidation checks to @UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize} each enemy that can hear the roar; these Demoralize attempts don't take any penalty for not sharing a language.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "primal-roar",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.kbUymGTjbesOKsV6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "lAvEK4yNL3Y7pVmr",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Assume a Role",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You've spent at least 1 hour studying a creature whose role you intend to copy and have done so within the last 3 days. This could include meeting and learning from someone in that role, tailing and spying on someone, using magic to observe them at work, or some other method, as long as you have a visual source of information</p>\n<hr />\n<p><strong>Effect</strong> You quickly and accurately learn how to do mundane jobs or at least copy the movements enough to appear as if you do. A chosen role can take many forms-from cook, cleaner, or librarian to cult member, priest, or duke-but it's always a role and never a specific individual.</p>\n<p>You perform the @UUID[Compendium.pf2e.actionspf2e.Item.AJstokjdG6iDjVjE]{Impersonate} activity to pass as a member of the role you observed and gain a +1 circumstance bonus to any Deception checks you attempt in your impersonation. This takes the normal amount of time it takes you to Impersonate. You also choose one Lore skill relevant to that role (such as Farming Lore for a farmer). While in your role, you gain a +1 circumstance bonus to checks for that Lore skill, and if you're untrained in it, you can use your level as your proficiency bonus. You stop assuming the role after 24 hours, if you start studying for a new role, or if you choose to.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "assume-a-role",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.lAvEK4yNL3Y7pVmr" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "lH3mlvs1rCyXw6iY",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Recall Under Pressure",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt to Recall Knowledge during a combat</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> Rather than roll a different skill to Recall Knowledge during the fight, your memory flashes back to something you read in some old book. You instead attempt this Recall Knowledge check with an Academia Lore check. If the information you recall ends up being helpful and positive in an obvious way before you take your next turn, draw a random harrow card. You gain a +1 status bonus to saving throws for the remainder of the combat encounter as your morale soars or a +2 status bonus if the card you drew was from the suit of Books.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.CW4zphOOpeaLJIWc]{Effect: Recall Under Pressure}</p>"
      },
      "source": { "value": "Pathfinder: Stolen Fate Player's Guide" },
      "rules": [],
      "slug": "recall-under-pressure",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"] },
      "actionType": { "value": "free" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.lH3mlvs1rCyXw6iY" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "lID4rJHAVZB6tavf",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Run Over",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are piloting a vehicle.</p>\n<p>(reckless) You try to run over creatures with your vehicle, possibly also ramming one larger creature or object. If you maintain control of your vehicle, the vehicle moves up to twice its Speed in a straight line at the vehicle's current heading. You attempt to run over any creatures in your path two sizes smaller than the vehicle or smaller, and you can attempt to ram one target creature or object in your path one size smaller than the vehicle or larger.</p>\n<p>Each creature in your path, including a rammed target, takes the vehicle's collision damage (basic Reflex save at vehicle's collision DC). If the rammed target is a vehicle, its pilot can attempt a piloting check in place of this Reflex save, with the same results. If the target of your ram takes damage, you and your vehicle each take collision damage (no save) and your movement ends.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "run-over",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.lID4rJHAVZB6tavf" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "low5ORd87QeA9Oug",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Extract Element",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You extract elemental matter from a creature's body to weaken it and take its power for your own. Target a creature within 30 feet that has a trait matching one of your kinetic elements or is made of one of your kinetic elements. The target takes [[/r 2d4]] damage (with no damage type) and becomes susceptible to your impulses, depending on its Fortitude save against your class DC.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature is unaffected</p>\n<p><strong>Success</strong> The creature takes half damage, and you add some of its elemental matter to your kinetic aura. Your impulses bypass any immunity the creature has to their elemental trait or traits, and the target takes a -1 circumstance penalty to its saves and AC against your impulses. If the target normally has a resistance that would apply to damage from one of your impulses, ignore that resistance; if it normally would be immune to that damage type, it instead has resistance equal to its level to damage from the impulse. You can't target a creature with Extract Element if elemental matter you extracted from it is already in your kinetic aura. These effects last for 5 minutes or until your kinetic aura ends, whichever comes first</p>\n<p><strong>Failure</strong> As success, but the creature takes full damage.</p>\n<p><strong>Critical Failure</strong> As failure, but the creature takes double damage.</p>\n<hr />\n<p><strong>Level (+2)</strong> The damage increases by [[/r 1d4]].</p>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [],
      "slug": "extract-element",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["impulse", "kineticist", "primal"] },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.low5ORd87QeA9Oug" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "lvqPQDdWT2DDO0k2",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Invest an Item",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You invest your energy in an item with the invested trait as you don it. This process requires 1 or more Interact actions, usually taking the same amount of time it takes to don the item. Once you've Invested the Item, you benefit from its constant magical abilities as long as you meet its other requirements (for most invested items, the only other requirement is that you must be wearing the item). This investiture lasts until you remove the item.</p>\n<p>You can invest no more than 10 items per day. If you remove an invested item, it loses its investiture. The item still counts against your daily limit after it loses its investiture. You reset the limit during your daily preparations, at which point you Invest your Items anew. If you're still wearing items you had invested the previous day, you can typically keep them invested on the new day, but they still count against your limit.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "invest-an-item",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.lvqPQDdWT2DDO0k2" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "m0f2B7G9eaaTmhFL",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Devise a Stratagem",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per round</p>\n<hr />\n<p>You assess a foe's weaknesses in combat and use them to formulate a plan of attack against your enemy. Choose a creature you can see, and roll a d20. If you Strike the chosen creature later this round, you must use the result of the roll you made to Devise a Stratagem for your Strike's attack roll instead of rolling. You make this substitution only for the first Strike you make against the creature this round, not any subsequent attacks.</p>\n<p>When you make this substitution, you can also add your Intelligence modifier to your attack roll instead of your Strength or Dexterity modifier, provided your Strike uses an agile or finesse melee weapon, an agile or finesse unarmed attack, a ranged weapon (which must be agile or finesse if it's a melee weapon with the thrown trait) or @UUID[Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL]{Sap}.</p>\n<p>If you're aware that the creature you choose is the subject of a lead you're pursuing, you can use this ability as a free action.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "devise-a-stratagem",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "fortune", "investigator"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "round" },
      "selfEffect": { "name": "Effect: Devise a Stratagem", "uuid": "Compendium.pf2e.feat-effects.Item.XQpTyjXFYYNexyOk" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.m0f2B7G9eaaTmhFL" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "mVscmsZWWcVACdU5",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Soaring Flight",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> Once per day</p>\n<hr />\n<p>To be a tengu is to be unburdened by the concerns of the world below. You grow a pair of magical wings or expand your existing ones. For 5 minutes, you gain a @UUID[Compendium.pf2e.actionspf2e.Item.cS9nfDRGD83bNU1p]{Fly} Speed equal to your land Speed or 20 feet, whichever is greater.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "soaring-flight",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": {
        "value": ["morph", "primal", "tengu", "transmutation"],
        "rarity": "common",
        "selected": { "morph": "Morph", "primal": "Primal", "tengu": "tengu", "transmutation": "Transmutation" }
      },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.mVscmsZWWcVACdU5" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "mech0dhb4eKbCAu0",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Coughing Dragon",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 2 batches of infused reagents</p>\n<hr />\n<p><strong>Effect</strong> Choose either auditory or visual effects. The display gains that trait, and you attempt to counteract one or more effects within 60 feet that have this trait. On a success, the effect is suppressed until the start of your next turn, rather than ending entirely. Use your Fireworks Lore modifier as your counteract modifier, and your counteract level is equal to half your advanced alchemy level (rounded up). A coughing dragon costs 2 batches of infused reagents rather than 1, but you can increase the cost to 3 batches and spend an additional action to create an even bigger coughing dragon display that attempts to counteract both auditory and visual effects at the same time.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "coughing-dragon",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.mech0dhb4eKbCAu0" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "mk6rzaAzsBBRGJnh",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Call Upon the Brightness",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt an attack roll, skill check, or saving throw while performing the course of action from your <em>@UUID[Compendium.pf2e.spells-srd.Item.41TZEjhO6D1nWw2X]{Augury}</em>, but you haven't rolled yet</p>\n<hr />\n<p>You gain a +1 status bonus to the triggering check, or a +2 status bonus if the result of the augury was \"woe\" and you proceeded anyway.</p>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.xPg5wzzKNxJy18rU]{Effect: Brightness Seeker}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "call-upon-the-brightness",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common", "selected": { "concentrate": "Concentrate" } },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.mk6rzaAzsBBRGJnh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "n5vwBnLSlIXL9ptp",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Manifest Eidolon",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon appears in an open space adjacent to you, and can then take a single action. If your eidolon was already manifested, you unmanifest it instead.</p>\n<p>The conduit that allows your eidolon to manifest is also a tether between you. Your eidolon must remain within 100 feet of you at all times and can't willingly go beyond that limit. If forced beyond this distance, or if you are reduced to 0 Hit Points, your eidolon's physical form dissolves: your eidolon unmanifests, and you need to use Manifest Eidolon to manifest it again.</p>\n<hr />\n<p><strong>Special</strong> This activity has the trait matching your eidolon's tradition (arcane, divine, occult, or primal).</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "manifest-eidolon",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "conjuration", "manipulate", "summoner", "teleportation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.n5vwBnLSlIXL9ptp" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "nSTMF6kYIt6rXhJx",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Seething Frenzy",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon's fury boils over into a reckless, out-of-control frenzy. While frenzied, your eidolon is affected by <em>boost eidolon</em> and gains temporary Hit Points equal to your level, but it takes a -2 penalty to AC. Your eidolon can't voluntarily end the frenzy or start another frenzy while in the frenzy.</p>\n<p>The frenzy lasts for 1 minute, after which it's @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued} for 1 minute and can't start another frenzy for 1 minute.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "seething-frenzy",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "eidolon", "emotion", "mental"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.nSTMF6kYIt6rXhJx" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "nTBrvt2b9wngyr0i",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Base Kinesis",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>It's trivial for you to create some of your element or alter a portion of it that already exists. Choose one of your kinetic elements to affect. This impulse has a range of 30 feet, and the Bulk of the target must be negligible or light. The GM decides what Bulk the element is. You can't affect an element that's magical, secured in place (like a stone mortared in a wall), or attended by a creature unwilling to let you.</p>\n<p>Choose one of the following options, though the GM might allow you to make similar small alterations. Base Kinesis can't deal damage or cause conditions unless otherwise noted.</p>\n<ul>\n<li><strong>Generate</strong> You bring an ordinary, non-magical piece of the chosen element from its elemental plane. The element can be used for any of its normal uses. For example, air can be breathed by an air-breathing creature, and fire casts light and can ignite flammable substances.</li>\n<li><strong>Move</strong> Move an existing piece of the element up to 20 feet in any direction. If you bring it into your space, you can catch it in an open hand. You can Sustain the impulse to keep moving the element.</li>\n<li><strong>Suppress</strong> You destroy an existing piece of element, such as snuffing out a flame or evaporating water from a cup. This affects only natural forms of the element, not durable, crafted goods like a stone statue, metal lock, or wooden door.<hr /><strong>Level (+4)</strong> The range increases by 15 feet, and the maximum Bulk increases by 1 (allowing Bulk 1 at 5th level).</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [],
      "slug": "base-kinesis",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["impulse", "kineticist", "primal"] },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.nTBrvt2b9wngyr0i" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "naKVqd8POxcnGclz",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Explode",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You intentionally take your innovation beyond normal safety limits, making it explode and damage nearby creatures without damaging the innovation... hopefully. The explosion deals [[/r max(2, @actor.level)d6[fire]]]{leveled fire damage} with a @Check[type:reflex|dc:resolve(@actor.attributes.classDC.value)|basic:true] to all creatures in a @Template[type:emanation|distance:5] around you (if you're wearing or holding the innovation) or around your innovation (if your innovation is a minion).</p>\n<p>At 3rd level, and every level thereafter, increase your explosion's damage by 1d6.</p>\n<p>If you have the breakthrough innovation class feature, you can choose either a 5-foot or @Template[type:emanation|distance:10] for the area when you use Explode; if you have the revolutionary innovation class feature, you can choose a 5-foot, 10-foot, or @Template[type:emanation|distance:15].</p>\n<p>@Check[type:flat|dc:17|name:Unstable Flat Check|showDC:all|traits:unstable]{Unstable Check}</p>\n<p>On a failure, the innovation malfunctions in a spectacular (though harmless) fashion, such as a belch of smoke or shower of sparks, and it becomes incapable of being used for further unstable actions.</p>\n<p>On a critical failure, you also take [[/r @actor.level[fire]]]{fire damage equal to your level}.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "explode",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fire", "inventor", "manipulate", "unstable"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.naKVqd8POxcnGclz" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "nbfNETdpee8CVM17",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Flurry of Blows",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Make two unarmed Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to the Strikes normally. As it has the flourish trait, you can use Flurry of Blows only once per turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "flurry-of-blows",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["flourish", "monk"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.nbfNETdpee8CVM17" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ncdryKskPwHMgHFh",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Wicked Thorns",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You're hit with an unarmed Strike or a Strike with a non-reach melee weapon.</p>\n<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>Several of your thorns break off and hook into your attacker's body. You deal 1d8 piercing damage to the triggering creature. It attempts a @Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save against the higher of your class DC or spell DC. On a critical failure, the creature also takes 1d4 bleed damage as your thorns embed in its flesh.</p>\n<p>At 3rd level, and every 2 levels thereafter, this damage increases by 1d8, and the persistent bleed damage increases by 1.</p>\n<p>[[/r (ceil(@actor.level/2)d8)[piercing]]]{Leveled piercing damage}</p>\n<p>[[/r (1d4+ceil(@actor.level/2)-1)[bleed]]]{Leveled bleed damage}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "wicked-thorns",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ncdryKskPwHMgHFh" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "oAGawsNqr6FfMrSG",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Pacifying Infusion",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>If your next action is an impulse, it gains the nonlethal trait. If it has an area, you can exclude creatures you've designated with Safe Elements from its effects.</p>"
      },
      "source": { "value": "Pathfinder Rage of Elements" },
      "rules": [],
      "slug": "pacifying-infusion",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["infusion"] },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.oAGawsNqr6FfMrSG" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "oAWNluJaMlaGysXA",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Barbed Quills",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You are hit with an unarmed strike or a strike with a non-reach melee weapon.</p>\n<hr />\n<p>You break off quills in your attacker's flesh. You deal @Damage[ceil(@actor.level/2)d8[piercing]] damage to the triggering creature (@Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save using your class DC or spell DC, whichever is higher.) On a critical failure, the creature also takes @Damage[(1d4+ceil(@actor.level/2)-1)[bleed]] as your quills hook into its flesh. At 3rd level, and every 2 levels thereafter, this damage increases by 1d8 and the persistent piercing damage increases by 1.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: The Mwangi Expanse" },
      "rules": [],
      "slug": "barbed-quills",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["shisk"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.oAWNluJaMlaGysXA" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "oanRfXGLnBm6mMVg",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Dragon Breath",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per hour</p>\n<hr />\n<p><strong>Effect</strong> You breathe deeply and exhale a line or cone of powerful breath, much like the dragon with which you made the pact. If the dragon had a cone-shaped breath weapon, your breath weapon is a @Template[type:cone|distance:30]. If they had a line-shaped breath weapon, your breath weapon is a @Template[type:line|distance:60]. If they had a burst-shaped breath weapon, your breath weapon is a @Template[type:burst|distance:10] within 60 feet. No matter the shape, it deals [[/r (@actor.level)d6]]{1d6 damage per level}, of the same damage type as the dragon's Breath Weapon, with a @Check[type:reflex|dc:resolve(@actor.system.attributes.classOrSpellDC.value)|basic:true] save, using the higher of your class DC or spell DC. This action has the same traits as the breath weapon of the dragon you made the pact with.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "dragon-breath",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1H" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.oanRfXGLnBm6mMVg" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "orjJjLdm4XNAcFi8",
    "img": "systems/pf2e/icons/actions/ThreeActions.webp",
    "name": "Mark for Death",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You can see and hear the creature you intend to mark</p>\n<hr />\n<p><strong>Effect</strong> You designate a single creature as your mark. This lasts until the mark dies or you use Mark for Death again. You gain a +2 circumstance bonus to Perception checks to @UUID[Compendium.pf2e.actionspf2e.Item.BlAOM2X92SI6HMtJ]{Seek} your mark and on Deception checks to @UUID[Compendium.pf2e.actionspf2e.Item.QNAVeNKtHA0EUw4X]{Feint} against your mark.</p>\n<p>Your agile and finesse weapons and unarmed attacks gain the backstabber and deadly d6 weapon traits when you're attacking your mark.</p>\n<p>If the weapon or unarmed attack already has the deadly trait, increase the size of the deadly damage die by one step instead of giving it deadly d6.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [
        { "domain": "all", "key": "RollOption", "label": "PF2E.SpecificRule.MarkForDeath.TargetMark", "option": "marked-for-death", "toggleable": true },
        {
          "key": "FlatModifier",
          "label": "PF2E.SpecificRule.MarkForDeath.TargetMark",
          "predicate": ["marked-for-death", { "or": ["action:feint", "action:seek"] }],
          "selector": ["perception", "deception"],
          "type": "circumstance",
          "value": 2
        },
        {
          "definition": ["item:trait:deadly-d10", { "or": ["item:trait:agile", "item:trait:finesse"] }],
          "key": "AdjustStrike",
          "mode": "add",
          "predicate": ["marked-for-death"],
          "property": "weapon-traits",
          "value": "deadly-d12"
        },
        {
          "definition": ["item:trait:deadly-d8", { "or": ["item:trait:agile", "item:trait:finesse"] }],
          "key": "AdjustStrike",
          "mode": "add",
          "predicate": ["marked-for-death"],
          "property": "weapon-traits",
          "value": "deadly-d10"
        },
        {
          "definition": ["item:trait:deadly-d6", { "or": ["item:trait:agile", "item:trait:finesse"] }],
          "key": "AdjustStrike",
          "mode": "add",
          "predicate": ["marked-for-death"],
          "property": "weapon-traits",
          "value": "deadly-d8"
        },
        {
          "definition": [
            { "or": ["item:trait:agile", "item:trait:finesse"] },
            { "nor": ["item:trait:deadly-d6", "item:trait:deadly-d8", "item:trait:deadly-d10", "item:trait:deadly-d12"] }
          ],
          "key": "AdjustStrike",
          "mode": "add",
          "predicate": ["marked-for-death"],
          "property": "weapon-traits",
          "value": "deadly-d6"
        },
        {
          "definition": [{ "or": ["item:trait:finesse", "item:trait:agile"] }],
          "key": "AdjustStrike",
          "mode": "add",
          "predicate": ["marked-for-death"],
          "property": "weapon-traits",
          "value": "backstabber"
        }
      ],
      "slug": "mark-for-death",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 3 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.orjJjLdm4XNAcFi8" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "pTHMZLqWDJ3lkan9",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Smoke Blending",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A creature attempts a flat check to target you because you're @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} or @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} due to fog, haze, mist, or smoke</p>\n<hr />\n<p><strong>Effect</strong> You shroud yourself in smoke, making it harder for your foe to hit you. If you're concealed, the DC of the flat check increases from 5 to @Check[type:flat|dc:7]; if you're hidden, it increases from 11 to @Check[type:flat|dc:13].</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "smoke-blending",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["sylph"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.pTHMZLqWDJ3lkan9" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "plBGdZhqq5JBl1D8",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Gather Information",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You canvass local markets, taverns, and gathering places in an attempt to learn about a specific individual or topic. The GM determines the DC of the <span data-pf2-action=\"gatherInformation\">Diplomacy</span> check and the amount of time it takes (typically 2 hours, but sometimes more), along with any benefit you might be able to gain by spending coin on bribes, drinks, or gifts.</p>\n<hr />\n<p><strong>Success</strong> You collect information about the individual or topic. The GM determines the specifics.</p>\n<p><strong>Critical Failure</strong> You collect incorrect information about the individual or topic.</p><h2 class=\"title\">Sample Gather Information Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> talk of the town</li>\n<li><strong>Trained</strong> common rumor</li>\n<li><strong>Expert</strong> obscure rumor, poorly guarded secret</li>\n<li><strong>Master</strong> well-guarded or esoteric information</li>\n<li><strong>Legendary</strong> information known only to an incredibly select few, or only to extraordinary beings </li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "gather-information",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.plBGdZhqq5JBl1D8" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "pprgrYQ1QnIDGZiy",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Climb",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have both hands free</p>\n<hr />\n<p>You move up, down, or across an incline. Unless it's particularly easy, you must attempt an <span data-pf2-action=\"climb\" data-pf2-glyph=\"A\">Athletics</span> check. The GM determines the DC based on the nature of the incline and environmental circumstances. You're @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} unless you have a climb Speed.</p>\n<hr />\n<p><strong>Critical Success</strong> You move up, across, or safely down the incline for 5 feet plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).</p>\n<p><strong>Success</strong> You move up, across, or safely down the incline for 5 feet per 20 feet of your land Speed (a total of 5 feet for most PCs, minimum 5 feet if your Speed is below 20 feet).</p>\n<p><strong>Critical Failure</strong> You fall. If you began the climb on stable ground, you fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.</p>\n<h2>Sample Climb Tasks</h2>\n<ul>\n<li><strong>Untrained</strong> ladder, steep slope, low-branched tree</li>\n<li><strong>Trained</strong> rigging, rope, typical tree</li>\n<li><strong>Expert</strong> wall with small handholds and footholds</li>\n<li><strong>Master</strong> ceiling with handholds and footholds, rock wall</li>\n<li><strong>Legendary</strong> smooth surface</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "climb",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.pprgrYQ1QnIDGZiy" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "pvQ5rY2zrtPI614F",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Interact",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You use your hand or hands to manipulate an object or the terrain. You can grab an unattended or stored object, open a door, or produce some similar effect. You might have to attempt a skill check to determine if your Interact action was successful.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "interact",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.pvQ5rY2zrtPI614F" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "q9nbyIF0PEBqMtYe",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Command an Animal",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You issue an order to an animal. Attempt a <span data-pf2-action=\"commandAnAnimal\" data-pf2-glyph=\"A\">Nature</span> check against the animal's Will DC. The GM might adjust the DC if the animal has a good attitude toward you, you suggest a course of action it was predisposed toward, or you offer it a treat.</p>\n<p>You automatically fail if the animal is hostile or unfriendly to you. If the animal is helpful to you, increase your degree of success by one step. You might be able to Command an Animal more easily with a feat like @UUID[Compendium.pf2e.feats-srd.Item.Rq5wkA8DtsmbzoGV]{Ride}.</p>\n<p>Most animals know the Drop Prone, Leap, Seek, Stand, Stride, and Strike basic actions. If an animal knows an activity, such as a horse's Gallop, you can Command the Animal to perform the activity, but you must spend as many actions on Command an Animal as the activity's number of actions. You can also spend multiple actions to Command the Animal to perform that number of basic actions on its next turn; for instance, you could spend 3 actions to Command an Animal to Stride three times or to Stride twice and then Strike.</p>\n<hr />\n<p><strong>Success</strong> The animal does as you command on its next turn.</p>\n<p><strong>Failure</strong> The animal is hesitant or resistant, and it does nothing.</p>\n<p><strong>Critical Failure</strong> The animal misbehaves or misunderstands, and it takes some other action determined by the GM.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "command-an-animal",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.q9nbyIF0PEBqMtYe" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "qVNVSmsgpKFGk9hV",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Conceal an Object",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You hide a small object on your person (such as a weapon of light Bulk). When you try to sneak a concealed object past someone who might notice it, the GM rolls your <span data-pf2-action=\"concealAnObject\" data-pf2-glyph=\"A\">Stealth</span> check and compares it to this passive observer's Perception DC. Once the GM rolls your check for a concealed object, that same result is used no matter how many passive observers you try to sneak it past. If a creature is specifically searching you for an item, it can attempt a Perception check against your Stealth DC (finding the object on success).</p>\n<p>You can also conceal an object somewhere other than your person, such as among undergrowth or in a secret compartment within a piece of furniture. In this case, characters Seeking in an area compare their Perception check results to your Stealth DC to determine whether they find the object.</p>\n<hr />\n<p><strong>Success</strong> The object remains undetected.</p>\n<p><strong>Failure</strong> The searcher finds the object.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "conceal-an-object",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate", "secret", "skill"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.qVNVSmsgpKFGk9hV" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "qc0VsZ0UesnurUUB",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Take a Breather",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 1 Resolve Point</p>\n<hr />\n<p>You rest for 10 minutes and recover your stamina. After you complete this activity, you regain all your Stamina Points.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "take-a-breather",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "stamina"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.qc0VsZ0UesnurUUB" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "qm7xptMSozAinnPS",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Arrest a Fall",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You fall</p>\n<p><strong>Requirements</strong> You have a fly Speed</p>\n<hr />\n<p>You attempt an Acrobatics check to slow your fall. The DC is typically 15, but it might be higher due to air turbulence or other circumstances.</p>\n<hr />\n<p><strong>Success</strong> You fall gently, taking no damage from the fall.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "arrest-a-fall",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.qm7xptMSozAinnPS" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "r5Uth6yvCoE4tr9z",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Destructive Vengeance",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy within 15 feet damages you</p>\n<hr />\n<p>Bloodshed begets bloodshed as you drag your enemy toward oblivion.</p>\n<p>You increase the amount of damage you take by [[/r {1d6}]]{1d6 damage}, and you deal [[/r {1d6}]]{1d6 damage} to the triggering enemy, choosing evil or negative damage to deal to the enemy each time you use this reaction. In addition, until the end of your next turn, your Strikes against the triggering creature deal 2 extra damage of the type you chose.</p>\n<p>The damage you take and deal when you use this reaction increases to [[/r {2d6}]]{2d6 damage} at 5th level, [[/r {3d6}]]{3d6 damage} at 9th level, [[/r {4d6}]]{4d6 damage} at 12th level, [[/r {5d6}]]{5d6 damage} at 16th level, and [[/r {6d6}]]{6d6 damage} at 19th level.</p>\n<p>The extra damage on your Strikes increases to 4 at 9th level and 6 at 16th level.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [
        {
          "domain": "damage-roll",
          "key": "RollOption",
          "label": "PF2E.SpecificRule.Champion.TargetReaction",
          "option": "destructive-vengeance",
          "suboptions": [
            { "label": "PF2E.SpecificRule.Champion.NegativeDamage", "value": "negative" },
            { "label": "PF2E.SpecificRule.Champion.EvilDamage", "value": "evil" }
          ],
          "toggleable": true
        },
        {
          "damageType": "{item|flags.pf2e.rulesSelections.destructiveVengeance}",
          "key": "FlatModifier",
          "predicate": ["destructive-vengeance"],
          "selector": "strike-damage",
          "slug": "destructive-vengeance-damage",
          "value": {
            "brackets": [
              { "end": 8, "value": 2 },
              { "end": 15, "start": 9, "value": 4 },
              { "start": 16, "value": 6 }
            ]
          }
        }
      ],
      "slug": "destructive-vengeance",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["champion"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.r5Uth6yvCoE4tr9z" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "rI2MSXR1MQzgQUO7",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Grim Swagger",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have a one-handed firearm or one-handed crossbow visibly worn or wielded.</p>\n<hr />\n<p>You attempt to clear the room by promising a grim fate to anyone who doesn't do what you say, and quickly. Attempt a @Check[type:deception] or @Check[type:intimidation] check against the Will DCs of each creature within 30 feet, except for your allies. Regardless of whether you succeed or fail, each subject is temporarily immune to your Grim Swagger for 10 minutes. For example, if you attempt a Deception check, you lie and boast about your prowess or the large group of friends on their way to back you up. If you attempt an Intimidation check, you promise everyone in the room that you're going to be the last thing they see.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 3}. If it's lower level than you, it's also @UUID[Compendium.pf2e.conditionitems.Item.sDPxOjQ9kx2RZE8D]{Fleeing} for 1 round.</p>\n<p><strong>Success</strong> The creature becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2}.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "grim-swagger",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "emotion", "fear", "gunslinger", "linguistic", "mental"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.rI2MSXR1MQzgQUO7" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "rSpCV0leurp2Bg2d",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Instinctive Obfuscation",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Prerequisites</strong> At least one arcane or occult innate spell gained from a gnome heritage or gnome ancestry feat</p>\n<p><strong>Frequency</strong> Once per day</p>\n<p><strong>Trigger</strong> You are attacked by a foe</p>\n<hr />\n<p>The magic within you manifests as a natural reaction to threats. You gain the effects of <em>@UUID[Compendium.pf2e.spells-srd.Item.j8vIoIEWElvpwkcI]{Mirror Image}</em> but with two images instead of three. The tradition of this action matches the tradition of your gnome ancestry options.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "instinctive-obfuscation",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gnome", "illusion", "visual"], "rarity": "common", "selected": {} },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.rSpCV0leurp2Bg2d" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "rmwa3OyhTZ2i2AHl",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Craft",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You can make an item from raw materials. You need the @UUID[Compendium.pf2e.feats-srd.Item.is3Oz9wt11lNq62K]{Alchemical Crafting} skill feat to create alchemical items, the @UUID[Compendium.pf2e.feats-srd.Item.xWY5omyIcILNR7y1]{Magical Crafting} feat to create magic items, and the @UUID[Compendium.pf2e.feats-srd.Item.DMetdzt1VJL2Y62i]{Snare Crafting} feat to create snares.</p>\n<p>To craft an item, you must meet the following requirements:</p>\n<ul>\n<li>The item is your level or lower. An item that doesn't list a level is level 0. If the item is 9th level or higher, you must be a master in Crafting, and if it's 16th or higher, you must be legendary.</li>\n<li>You have the formula for the item; see Getting Formulas below for more information.</li>\n<li>You have an appropriate set of tools and, in many cases, a workshop. For example, you need access to a smithy to forge a metal shield, or an @UUID[Compendium.pf2e.equipment-srd.Item.k6xZkDUpF7E1Totd]{Alchemist's Lab} to produce alchemical items.</li>\n<li>You must supply raw materials worth at least half the item's Price. You always expend at least that amount of raw materials when you Craft successfully. If you're in a settlement, you can usually spend currency to get the amount of raw materials you need, except in the case of rarer precious materials.</li>\n</ul>\n<p>You must spend 4 days at work, at which point you attempt a <span data-pf2-action=\"craft\">Crafting</span> check. The GM determines the DC to Craft the item based on its level, rarity, and other circumstances.</p>\n<p>If your attempt to create the item is successful, you expend the raw materials you supplied. You can pay the remaining portion of the item's price in materials to complete the item immediately, or you can spend additional downtime days working on it. For each additional day you spend, reduce the value of the materials you need to expend to complete the item. This amount is determined using Table 4-2: Income Earned, based on your proficiency rank in Crafting and using your own level instead of a task level. After any of these downtime days, you can complete the item by spending the remaining portion of its price in materials. If the downtime days you spend are interrupted, you can return to finish the item later, continuing where you left off. An example of crafting appears in the sidebar.</p>\n<hr />\n<p><strong>Critical Success</strong> Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level + 1 and your proficiency rank in Crafting.</p>\n<p><strong>Success</strong> Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level and your proficiency rank.</p>\n<p><strong>Failure</strong> You fail to complete the item. You can salvage the raw materials you supplied for their full value. If you want to try again, you must start over.</p>\n<p><strong>Critical Failure</strong> You fail to complete the item. You ruin 10% of the raw materials you supplied, but you can salvage the rest. If you want to try again, you must start over.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "craft",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "manipulate", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.rmwa3OyhTZ2i2AHl" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "rqT4LMH7qbfyScBi",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Reclaim Destiny",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day;</p>\n<p><strong>Trigger</strong> You are about to attempt a check and are affected by a fortune or misfortune effect that modifies the triggering check;</p>\n<p><strong>Effect</strong> You break the influence over your fortunes and claim a stable hold over your fate. You ignore the fortune or misfortune effect and can roll the triggering roll normally.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Travel Guide" },
      "rules": [],
      "slug": "reclaim-destiny",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["divination", "occult"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.rqT4LMH7qbfyScBi" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "s2RrhZx1f1X4YnYV",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Divert Lightning",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You aren't immune to electricity</p>\n<p><strong>Trigger</strong> A creature within 30 feet of you is targeted by an electricity effect or is in the area of an electricity effect.</p>\n<hr />\n<p><strong>Effect</strong> You draw the electricity to yourself like a lightning rod in order to shield the target. If the triggering effect was targeted, it targets you instead of the triggering creature. If it was an area effect, it leaps from the triggering creature's space to fill your space instead. This doesn't divert lightning from any other creatures targeted by or in the area of the lightning. You're automatically hit by or automatically fail your save against the effect. You then can't Divert Lightning for [[/r 1d4 #rounds]]{1d4 rounds}.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "divert-lightning",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["electricity"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.s2RrhZx1f1X4YnYV" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "s4V7JWSMF9JPJAeX",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Envenom",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>Through use of either saliva or blood, you use your innate toxins to apply vishkanyan venom to your weapon or a piece of ammunition. To use your blood, you must be injured, or you can deal @Damage[1[slashing]] damage to yourself as part of the action. The vishkanyan venom remains potent until the end of your next turn, or until you expend it as normal for an injury poison by either hitting a target or critically failing an attack roll.</p>\n<p><strong>Minor Vishkanyan Venom</strong> (injury, poison)</p>\n<hr />\n<p><strong>Saving Throw</strong> @Check[type:fortitude|dc:resolve(@actor.attributes.classOrSpellDC.value)|traits:injury,poison,damaging-effect]</p>\n<p><strong>Maximum Duration</strong> 6 rounds</p>\n<p><strong>Stage 1</strong> @Damage[1d4[poison]] damage (1 round)</p>\n<p><strong>Stage 2</strong> @Damage[1d4[poison]] damage (1 round)</p>\n<p><strong>Stage 3</strong> @Damage[1d4[poison]] damage (1 round)</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Impossible Lands" },
      "rules": [],
      "slug": "envenom",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.s4V7JWSMF9JPJAeX" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "s4s40hJr5uRLOqix",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Change Tradition Focus",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are in a duel and are trained in the skill for the tradition you're changing your focus to (Arcana for arcane, Occultism for occult, Nature for primal, or Religion for divine).</p>\n<hr />\n<p>You change your tradition focus to another magical tradition.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "change-tradition-focus",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.s4s40hJr5uRLOqix" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "sL1J8cFwpy1lI359",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Study",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are an initiate, attendant, or conversant.</p>\n<hr />\n<p>You give everything you have to your studies, in keeping with your branch. Choose either your primary or secondary branch and attempt a skill check with one of the branch's associated skills against a standard DC of the branch's level.</p>\n<hr />\n<p><strong>Critical Success</strong> Incredible results! You ace every exam and cause a stir that all the instructors notice. Increase the level of the branch you chose by 2.</p>\n<p><strong>Success</strong> You succeed in your studies admirably. Increase the level of the branch you chose by 1.</p>\n<p><strong>Failure</strong> You need to work harder and try again. Your branch level remains the same.</p>\n<p><strong>Critical Failure</strong> You make a major mistake that requires you to perform remedial studies. The next time you would get an opportunity to attempt this activity, you must skip that opportunity to catch up.</p>"
      },
      "source": { "value": "Pathfinder #169: Kindled Magic" },
      "rules": [],
      "slug": "study",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.sL1J8cFwpy1lI359" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "slwllcUtVhoCdBuM",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Breath Weapon (Acid) (Line)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon exhales a blast of destructive energy. Your eidolon deals @Damage[1d6[acid]] damage to all creatures in a @Template[type:line|distance:60], with a basic Reflex save against your spell DC.</p>\n<p>Your eidolon then can't use their Breath Weapon again for the next [[/r 1d4 #rounds]]{1d4 rounds}.</p>\n<p>At 3rd level and every 2 levels thereafter, the damage increases by 1d6. [[/r ((ceil(@actor.level/2))d6)[acid]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "breath-weapon-acid-line",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["acid", "arcane", "eidolon", "evocation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.slwllcUtVhoCdBuM" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "sn2hIy1iIJX9Vpgj",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Point Out",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> A creature is undetected by one or more of your allies but isn't undetected by you</p>\n<hr />\n<p>You indicate a creature that you can see to one or more allies, gesturing in a direction and describing the distance verbally. That creature is @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} to your allies, rather than @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected}. This works only for allies who can see you and are in a position where they could potentially detect the target. If your allies can't hear or understand you, they must succeed at a Perception check against the creature's Stealth DC or they misunderstand and believe the target is in a different location.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "point-out",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "manipulate", "visual"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.sn2hIy1iIJX9Vpgj" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "t5nBkpjroaq7QBGK",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Research",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You comb through information to learn more about the topic at hand. Choose your research topic, section of the library, or other division depending on the form of research, and attempt a skill check. The skills to use and the DC for the check depend on the choice you made.</p>\n<hr />\n<p><strong>Critical Success</strong> You gain 2 RP.</p>\n<p><strong>Success</strong> You gain 1 RP.</p>\n<p><strong>Critical Failure</strong> You make a false discovery and lose 1 RP.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "research",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "linguistic"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.t5nBkpjroaq7QBGK" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "tHCqgwjtQtzNqVvd",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Coerce",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>With threats either veiled or overt, you attempt to bully a creature into doing what you want. You must spend at least 1 minute of conversation with a creature you can see and that can either see or sense you. At the end of the conversation, attempt an <span data-pf2-action=\"coerce\">Intimidation</span> check against the target's Will DC, modified by any circumstances the GM determines.</p>\n<hr />\n<p><strong>Critical Success</strong> The target gives you the information you seek or agrees to follow your directives so long as they aren't likely to harm the target in any way. The target continues to comply for an amount of time determined by the GM but not exceeding 1 day, at which point the target becomes unfriendly (if they weren't already unfriendly or hostile). However, the target is too scared of you to retaliate - at least in the short term.</p>\n<p><strong>Success</strong> As critical success, but once the target becomes unfriendly, they might decide to act against you-for example, by reporting you to the authorities or assisting your enemies.</p>\n<p><strong>Failure</strong> The target doesn't do what you say, and if they were not already unfriendly or hostile, they become unfriendly.</p>\n<p><strong>Critical Failure</strong> The target refuses to comply, becomes hostile if they weren't already, and can't be Coerced by you for at least 1 week.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "coerce",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "emotion", "exploration", "linguistic", "mental", "skill"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.tHCqgwjtQtzNqVvd" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "tNrBIYct9l1lrW1I",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Field of Roots",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon extends its roots underground to entangle and possibly damage all foes nearby. All enemies within your eidolon's reach take damage of the same type and amount as your eidolon's most damaging Strike, depending on their Reflex saves. Any ongoing effects of the save last until the enemy either Escapes or leaves your eidolon's reach.</p>\n<p>After using Field of Roots, your eidolon is @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} until it takes a single action, which has the manipulate trait, to detach from the ground; this also ends any remaining effects on enemies from Field of Roots.</p>\n<hr />\n<p><strong>Critical Success</strong> The enemy is unaffected.</p>\n<p><strong>Success</strong> The enemy takes no damage, but takes a -10 foot circumstance penalty to its Speeds.</p>\n<p><strong>Failure</strong> The enemy takes half damage, takes a -10-foot circumstance penalty to its Speeds, and, at the end of each of its turns, takes half damage again.</p>\n<p><strong>Critical Failure</strong> The enemy is immobilized, takes full damage, and, at the end of each of its turns, takes full damage again.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "field-of-roots",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.tNrBIYct9l1lrW1I" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "tfa4Sh7wcxCEqL29",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Follow the Expert",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Choose an ally attempting a recurring skill check while exploring, such as climbing, or performing a different exploration tactic that requires a skill check (like @UUID[Compendium.pf2e.actionspf2e.Item.IE2nThCmoyhQA0Jn]{Avoiding Notice}). The ally must be at least an expert in that skill and must be willing to provide assistance. While Following the Expert, you match their tactic or attempt similar skill checks. Thanks to your ally's assistance, you can add your level as a proficiency bonus to the associated skill check, even if you're untrained. Additionally, you gain a circumstance bonus to your skill check based on your ally's proficiency (+2 for expert, +3 for master, and +4 for legendary).</p>\n<p>@UUID[Compendium.pf2e.other-effects.Item.VCSpuc3Tf3XWMkd3]{Effect: Follow The Expert}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "follow-the-expert",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "exploration", "visual"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.tfa4Sh7wcxCEqL29" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "toxlmkoJqOuy4Vz1",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Energy Emanation (Electricity)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>Energy bursts forth from your body. You deal 1d6 electricity damage to all adjacent creatures (@Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save using your class DC or spell DC, whichever is higher). At 3rd level, and every 2 levels thereafter, this damage increases by 1d6 damage.</p>\n<p>[[/r (ceil(@actor.level/2))d6[electricity]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "energy-emanation-electricity",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "primal"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.toxlmkoJqOuy4Vz1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "tu5viJZT4zFE1sYn",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Whirlwind Maul",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon lashes out in all directions. It makes a melee unarmed Strike against up to four enemies within reach. It can choose different unarmed attacks for each enemy. Each attack counts toward your multiple attack penalty, but you don't increase your penalty until the eidolon has made all its attacks.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "whirlwind-maul",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.tu5viJZT4zFE1sYn" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "tuZnRWHixLArvaIf",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Glimpse of Redemption",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> An enemy damages your ally, and both are within 15 feet of you</p>\n<hr />\n<p>Your foe hesitates under the weight of sin as visions of redemption play in their mind's eye. The foe must choose one of the following options:</p>\n<ul>\n<li>The ally is unharmed by the triggering damage.</li>\n<li>The ally gains resistance to all damage against the triggering damage equal to 2 + your level. After the damaging effect is applied, the enemy becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2} until the end of its next turn.</li>\n</ul>\n<p>@UUID[Compendium.pf2e.feat-effects.Item.DawVHfoPKbPJsz4k]{Effect: Champion's Resistance}</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "glimpse-of-redemption",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["champion"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.tuZnRWHixLArvaIf" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "tw1KDRPdBAkg5DlS",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Clear a Path",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You're wielding a two-handed firearm or two-handed crossbow.</p>\n<hr />\n<p>You push outward with your weapon to clear some space before quickly reloading a fresh round. You make an Athletics check to @UUID[Compendium.pf2e.actionspf2e.Item.7blmbDrQFNfdT731]{Shove} an opponent within your reach using your weapon, then Interact to reload. For this Shove, you don't need a free hand, and you add the weapon's item bonus on attack rolls (if any) to the Athletics check. If your last action was a ranged Strike with the weapon, use the same multiple attack penalty as that Strike for the Shove; the Shove still counts toward your multiple attack penalty on further attacks as normal.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "clear-a-path",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.tw1KDRPdBAkg5DlS" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "uMFB3uw8WTWL0LZD",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Draconic Frenzy",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your eidolon makes one Strike with their primary unarmed attack and two Strikes with their secondary unarmed attack (in any order). If any of these attacks critically hits an enemy, your eidolon instantly recovers the use of their Breath Weapon.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "draconic-frenzy",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["eidolon"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.uMFB3uw8WTWL0LZD" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "uOlyklPCUWLtCaYI",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Chassis Deflection",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> A critical hit deals physical damage to you.</p>\n<hr />\n<p>Attempt a @Check[type:flat|dc:17]. If you are successful, the attack becomes a normal hit.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "chassis-deflection",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["automaton"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.uOlyklPCUWLtCaYI" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "uS3qDAgOkZ7b8ERL",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Drive",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are piloting a vehicle. You pilot your vehicle to move.</p>\n<p>Decide how many actions you intend to spend before you begin Driving. The effects depend on the number of actions you spend. You can't Drive through spaces occupied by creatures, even if they are allies.</p>\n<p><span class=\"pf2-icon\">1</span> Attempt a piloting check. On a success, the vehicle moves up to its Speed and can turn normally. On a failure, the vehicle moves its Speed in a straight line. On a critical failure, the vehicle moves its Speed in a straight line and becomes uncontrolled</p>\n<p><span class=\"pf2-icon\">2 </span>(reckless) The vehicle moves up to twice its Speed in a straight line at the vehicle's current heading.</p>\n<p><span class=\"pf2-icon\">3</span> (reckless) You take a -5 penalty on your piloting check to maintain control of the vehicle. The vehicle moves up to three times its Speed in a straight line at the vehicle's current heading.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "drive",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["move"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.uS3qDAgOkZ7b8ERL" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "uWTQxEOj2pl45Kns",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Sense Weakness",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You attempt a melee Strike against your opponent, but haven't rolled yet.</p>\n<p><strong>Requirements</strong> You're in a duel, you're trained in Perception, and you rolled a Perception check for initiative this round.</p>\n<hr />\n<p>You pick a precise moment to attack, giving you an edge. Your opponent is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against the attack. If your opponent is using Deception for initiative when this ability is used, they are instead off-guard until the start of their next turn.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "sense-weakness",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.uWTQxEOj2pl45Kns" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ublVm5gmCIm3eRdQ",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Ring Bell",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> The target of your Exploit Vulnerability makes a Strike or Casts a Spell that would affect you or one of your allies.</p>\n<p><strong>Requirements</strong> You are holding your bell implement, and the triggering creature is within 30 feet of you.</p>\n<hr />\n<p>Your implement sings out abruptly, disrupting your foe. The piece played depends on whether the trigger was a Strike or Spell, and it applies to the triggering Strike or Spell, except where noted otherwise.</p>\n<ul>\n<li><strong>Distracting Cacophony</strong> The trigger is a spell. You create a musical crash of sonic energy that assails the target and breaks its concentration. The target must succeed at a @Check[type:fortitude|dc:resolve(@actor.system.proficiencies.classDCs.thaumaturge.value)] save against your class DC or become @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1} until the end of your next turn (@UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 2} on a critical failure). The target doesn't have to attempt a flat check to avoid losing the triggering spell, but the discordant ring does lower the spell attack roll or spell DC of the triggering spell from stupefied.</li>\n<li><strong>Disrupting Harmony</strong> The trigger is a Strike. You create a strangely discordant harmony that sinks into your foe's mind and throws its movements off. The target must succeed at a Will save against your class DC or become your choice of @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1} or @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 1} until the end of your next turn (@UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2} or @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 2} on a critical failure).</li>\n</ul>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "ring-bell",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "emotion", "enchantment", "magical", "manipulate", "mental", "thaumaturge"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ublVm5gmCIm3eRdQ" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "ust1jJSCZQUhBZIz",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Take Cover",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are benefiting from cover, are near a feature that allows you to take cover, or are @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}</p>\n<hr />\n<p>You press yourself against a wall or duck behind an obstacle to take better advantage of cover. If you would have standard cover, you instead gain greater cover, which provides a +4 circumstance bonus to AC; to Reflex saves against area effects; and to Stealth checks to @UUID[Compendium.pf2e.actionspf2e.Item.XMcnh4cSI32tljXa]{Hide}, @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak}, or otherwise avoid detection. Otherwise, you gain the benefits of standard cover (a +2 circumstance bonus instead). This lasts until you move from your current space, use an attack action, become @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}, or end this effect as a free action.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "take-cover",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.ust1jJSCZQUhBZIz" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "v82XtjAVN4ffgVVR",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Drain Bonded Item",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>You expend the power stored in your bonded item, as long as the item is on your person. During your turn, you gain the ability to cast one spell you prepared today and already cast, without spending a spell slot. You must still @UUID[Compendium.pf2e.actionspf2e.Item.aBQ8ajvEBByv45yz]{Cast the Spell} and meet the spell's other requirements.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "drain-bonded-item",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["arcane", "wizard"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.v82XtjAVN4ffgVVR" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "vFaNE7s7vFs9BxJW",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Set Free",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per hour</p>\n<p><strong>Trigger</strong> You attempt a check to remove or counteract an effect with the @UUID[Compendium.pf2e.conditionitems.Item.yblD8fOR1J8rDwEQ]{Confused}, @UUID[Compendium.pf2e.conditionitems.Item.9qGBRpbX9NEwtAAr]{Controlled}, @UUID[Compendium.pf2e.conditionitems.Item.AdPVz7rbaVSRxHFg]{Fascinated}, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized}, @UUID[Compendium.pf2e.conditionitems.Item.6uEgoh53GbXuHpTF]{Paralyzed}, or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained} conditions</p>\n<hr />\n<p><strong>Effect</strong> You roll twice and use the better result.</p>"
      },
      "source": { "value": "Pathfinder Dark Archive" },
      "rules": [],
      "slug": "set-free",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT1H" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.vFaNE7s7vFs9BxJW" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "vO0Y1dVjNfbDyT4S",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Vital Shot",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Your careful shot against an unsuspecting opponent pierces a vital artery or organ. Make a ranged Strike. If the target is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard}, the Strike deals an extra die of weapon damage, and the foe takes persistent bleed damage equal to the amount of precision damage from your One Shot, One Kill.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [
        { "domain": "all", "key": "RollOption", "option": "vital-shot", "toggleable": true },
        { "diceNumber": 1, "key": "DamageDice", "predicate": ["vital-shot", "item:ranged", "target:condition:off-guard"], "selector": "strike-damage" },
        {
          "damageType": "bleed",
          "diceNumber": "ternary(gte(@actor.level,15),3,ternary(gte(@actor.level,9),2,1))",
          "dieSize": "d6",
          "key": "DamageDice",
          "predicate": ["vital-shot", "item:ranged", "target:condition:off-guard"],
          "selector": "strike-damage"
        }
      ],
      "slug": "vital-shot",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["gunslinger"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.vO0Y1dVjNfbDyT4S" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "vZltxwRNvF5khf9a",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Boarding Assault",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>Either Stride twice or attempt an Acrobatics check (DC determined by the GM, but usually DC 20) to swing on a rope up to twice your Speed.</p>\n<p>If you boarded or disembarked from a boat or similar vehicle during this movement, you can make a melee Strike that deals one additional weapon damage die.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "boarding-assault",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["flourish"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.vZltxwRNvF5khf9a" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "vblQt8LjvsBEB1J1",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Energy Emanation (Fire)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p>Energy bursts forth from your body. You deal 1d6 fire damage to all adjacent creatures (@Check[type:reflex|dc:resolve(@actor.attributes.classOrSpellDC.value)|basic:true] save using your class DC or spell DC, whichever is higher). At 3rd level, and every 2 levels thereafter, this damage increases by 1d6 damage.</p>\n<p>[[/r (ceil(@actor.level/2))d6[fire]]]{Leveled Damage}</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "energy-emanation-fire",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["evocation", "primal"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.vblQt8LjvsBEB1J1" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "vdnuczo4ktS7ow7N",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Prophecy's Pawn",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> You fail a saving throw, attack roll, or skill check</p>\n<hr />\n<p><strong>Effect</strong> You twist the prophecy in your favor, which will have consequences later. Reroll the failed check. You must use the result of the second roll.</p>\n<p>For 24 hours afterward, the GM can force you to reroll a successful saving throw, attack roll, or skill check as fate balances the scale. This is a misfortune effect. You can't use prophecy's pawn again until the GM uses this option or 24 hours pass, whichever comes first.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "prophecys-pawn",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["abjuration", "divine", "fortune"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.vdnuczo4ktS7ow7N" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "vvYsE7OiSSCXhPdr",
    "img": "systems/pf2e/icons/actions/TwoActions.webp",
    "name": "Set Explosives",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You have 1 or 2 bombs in hand</p>\n<hr />\n<p><strong>Effect</strong> You attach the bombs to an inanimate object within your reach, such as a door, wall, or column, and rig them to detonate at a set time. The bombs explode at a specific time you determine (such as after your next action or at the start of your next turn, to a maximum of 1 minute), dealing their damage and splash damage to the inanimate object. Combine this damage for the purpose of resistances and weaknesses, and this damage ignores an amount of the object's Hardness equal to your level. Any creatures adjacent to the hazard take the bombs' splash damage, also combined for the purpose of resistances and weaknesses. As a reminder, since you didn't throw the bombs, Calculated Splash and similar effects don't apply. Making sure your timing is correct requires concentration, so you can't Set Explosives again while you're waiting for a previously set bomb to detonate.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "set-explosives",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 2 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.vvYsE7OiSSCXhPdr" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "wGTHH6v25CDavO6g",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Shake It Off",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<p><strong>Trigger</strong> You fail or critically fail a saving throw against a condition or adverse effect (such as <em>@UUID[Compendium.pf2e.spells-srd.Item.dN8QBNuTiaBHCKUe]{Baleful Polymorph}</em>)</p>\n<hr />\n<p><strong>Effect</strong> You reroll the triggering save and use the better result.</p>"
      },
      "source": { "value": "Pathfinder #194: Cult of the Cave Worm" },
      "rules": [],
      "slug": "shake-it-off",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["fortune", "primal"] },
      "actionType": { "value": "reaction" },
      "category": "offensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.wGTHH6v25CDavO6g" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "wQYmDStjdjn0I26t",
    "img": "systems/pf2e/icons/actions/FreeAction.webp",
    "name": "Release",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You release something you're holding in your hand or hands. This might mean dropping an item, removing one hand from your weapon while continuing to hold it in another hand, releasing a rope suspending a chandelier, or performing a similar action. Unlike most manipulate actions, Release does not trigger reactions that can be triggered by actions with the manipulate trait (such as Attack of Opportunity).</p>\n<p>If you want to prepare to Release something outside of your turn, use the @UUID[Compendium.pf2e.actionspf2e.Item.dLgAMt3TbkmLkUqE]{Ready} activity.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "release",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general", "manipulate"], "rarity": "common" },
      "actionType": { "value": "free" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.wQYmDStjdjn0I26t" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "wt6jdjjje16Nx34f",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Jumping Jenny",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 2 batches of infused reagents</p>\n<hr />\n<p><strong>Effect</strong> Target a flying creature within 60 feet. Until the start of your next turn, each time that creature attempts to Fly, they must succeed at an Acrobatics check to Maneuver in Flight against the DC of your fireworks display, or the Fly action is disrupted. If all the creature's attempts to Fly are disrupted, at the end of its turn, it falls harmlessly to the ground below. A jumping jenny costs 2 batches of infused reagents, rather than 1.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "jumping-jenny",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.wt6jdjjje16Nx34f" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "wwvPiG2kET2rkSAG",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Change Shape (Kitsune)",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You transform into a specific alternate form determined by your heritage. If your heritage doesn't list a form, your alternate form is a tailless form, which is a common Medium humanoid ancestry prevalent where you grew up (typically human). This form is the same age and body type as your true form and has roughly analogous physical traits, such as hair color. Using Change Shape counts as creating a disguise for the Impersonate use of Deception. You lose any unarmed Strikes you gained from a kitsune heritage or ancestry feat in this form. You can remain in your alternate form indefinitely, and you can shift back to your true kitsune form by using this action again.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Ancestry Guide" },
      "rules": [],
      "slug": "change-shape-kitsune",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "divine", "kitsune", "polymorph", "transmutation"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.wwvPiG2kET2rkSAG" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "x1qSEkzHAviQ5jry",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Lay Down Arms",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You pull your arm off, harmlessly severing it from your body and dropping it in an adjacent square. You can also use this action to reattach your severed arm if it's adjacent to you; it immediately functions normally. If the detached limb was at 0 Hit Points, it takes 10 minutes to reattach it instead of a single action.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "lay-down-arms",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": [], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.x1qSEkzHAviQ5jry" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "xGqOIheAOV12RGU4",
    "img": "systems/pf2e/icons/actions/Reaction.webp",
    "name": "Dueling Counter",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Trigger</strong> Your opponent Casts a Spell from the same tradition as your tradition focus.</p>\n<p><strong>Requirements</strong> You are in a duel and have a tradition focus.</p>\n<hr />\n<p>Expend a prepared spell or spell slot. You then attempt to counteract the triggering spell with the expended spell.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "dueling-counter",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["magical"], "rarity": "common" },
      "actionType": { "value": "reaction" },
      "category": "defensive",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.xGqOIheAOV12RGU4" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "xJEkXFJgEfEida27",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Rally",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Prerequisites</strong> trained in Diplomacy, Intimidation, or Performance</p>\n<hr />\n<p>You spend 1 minute encouraging your ally. Though this action typically has the auditory and linguistic traits, if you're using the Performance skill, the GM might adjust the traits for this action to match the traits for your type of performance.</p>\n<p>Attempt a DC 15 skill check. The GM might adjust this DC based on the circumstances, such as attempting to Rally an ally who just suffered a humiliating defeat.</p>\n<hr />\n<p><strong>Critical Success</strong> The ally can spend 1 Resolve Point to regain all their Stamina Points.</p>\n<p><strong>Success</strong> You can continue encouraging your ally for a total of 10 minutes. If you do, they can spend 1 Resolve Point to regain all their Stamina Points.</p>\n<p><strong>Critical Failure</strong> The ally takes @Damage[1d8[mental]] damage, but this can reduce only Stamina Points, never Hit Points.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "rally",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": {
        "value": ["auditory", "emotion", "exploration", "linguistic", "mental"],
        "rarity": "common",
        "selected": { "auditory": "Auditory", "emotion": "Emotion", "exploration": "Exploration", "linguistic": "Linguistic", "mental": "Mental" }
      },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.xJEkXFJgEfEida27" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "xTK2zsWFyxSJvYbX",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Pursue a Lead",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per 10 minutes</p>\n<hr />\n<p>You spend 1 minute examining the details of one potential clue, designating the subject related to that clue as the target of your active investigation. This subject is typically a single creature, item, or small location (such as a room or corridor), but the GM might allow a different scope for your investigation. You don't need to know the identity, purpose, or nature of the subject, but you do need to be aware of its existence. For instance, finding a footprint is enough to investigate the creature that left it, and seeing a hasty sketch of an item or location can be enough to start your investigation of that subject.</p>\n<p>Whenever you attempt a Perception or skill check to investigate a designated subject, you gain a +1 circumstance bonus to the check. The exact checks this applies to depend on the actions you use to investigate and are determined by the GM, but checks to investigate are typically Perception checks or skill checks that use Intelligence, Wisdom or Charisma.</p>\n<p>You can maintain two active investigations at a time. If you Pursue another Lead after that, the subject must be different from any of your current investigations (or rather, they must be different as far as you know), and you give up on a current subject of your choice. Once you've given up pursuit of a subject, you can't Pursue that Lead again until after the next time you make your daily preparations.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [
        { "domain": "all", "key": "RollOption", "label": "PF2E.SpecificRule.Investigator.PursueALead.Label", "option": "pursue-a-lead", "toggleable": true },
        {
          "key": "FlatModifier",
          "predicate": ["pursue-a-lead"],
          "selector": ["perception", "skill-check"],
          "type": "circumstance",
          "value": {
            "brackets": [
              { "end": 8, "value": 1 },
              { "start": 9, "value": 2 }
            ]
          }
        }
      ],
      "slug": "pursue-a-lead",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["concentrate", "exploration", "investigator"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "PT10M" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.xTK2zsWFyxSJvYbX" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "xccOiNL2W1EtfUYl",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Pointed Question",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You ask a question that charms or needles someone in just the right way. Ask a question of a non-allied creature that you can see and have been conversing with. Attempt a Diplomacy check against the creature's Will DC. The creature is then temporarily immune for 1 hour.</p>\n<hr />\n<p><strong>Critical Success</strong> The target must directly answer your question. It doesn't have to answer truthfully, but you gain a +4 circumstance bonus to your Perception DC if the creature attempts to @UUID[Compendium.pf2e.actionspf2e.Item.ewwCglB7XOPLUz72]{Lie} to you.</p>\n<p><strong>Success</strong> As critical success, but the circumstance bonus is +2.</p>\n<p><strong>Failure</strong> The target can refuse to answer you as normal.</p>\n<p><strong>Critical Failure</strong> The target can refuse to answer you as normal, and its attitude toward you decreases by one step due to your aggravating attention.</p>"
      },
      "source": { "value": "Pathfinder Advanced Player's Guide" },
      "rules": [],
      "slug": "pointed-question",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["auditory", "concentrate", "investigator", "linguistic", "mental"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.xccOiNL2W1EtfUYl" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "xjGwis0uaC2305pm",
    "img": "systems/pf2e/icons/actions/raise-a-shield.webp",
    "name": "Raise a Shield",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are wielding a shield</p>\n<hr />\n<p>You position your shield to protect yourself. When you have Raised a Shield, you gain its listed circumstance bonus to AC. Your shield remains raised until the start of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "raise-a-shield",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["general"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "defensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "selfEffect": { "name": "Effect: Raise a Shield", "uuid": "Compendium.pf2e.equipment-effects.Item.2YgXoHvJfrDHucMr" },
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.xjGwis0uaC2305pm" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "xpsD4DsYHKXCB4ac",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Anchor",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You send your roots deeper into the ground, making it harder for you to stumble. Until you move, you gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to Shove or Trip you (or a +4 circumstance bonus if you're a root leshy). This bonus also applies to saving throws against spells or effects that attempt to move you or knock you prone.</p>\n<p>If an effect forces you to move, you move only half the normal distance, as some of the effort goes to tearing out the roots. At the GM's discretion, this ability might not work on ground that's more resilient than stone, such as metal flooring or magically-reinforced masonry.</p>"
      },
      "source": { "value": "Pathfinder Lost Omens: Character Guide" },
      "rules": [],
      "slug": "anchor",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["leshy"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": null,
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.xpsD4DsYHKXCB4ac" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "yM20ZnvmNxu9qMDV",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Compose Missive",
    "system": {
      "description": { "gm": "", "value": "<p>You spend 10 minutes drawing, writing, or inscribing, covering the missive's surface with text, images, or embossing.</p>" },
      "source": { "value": "Pathfinder Treasure Vault" },
      "rules": [],
      "slug": "compose-missive",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "manipulate"] },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.yM20ZnvmNxu9qMDV" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "yOtu5X3qWfjuX8Vy",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Learn Name",
    "system": {
      "description": {
        "gm": "",
        "value": "<p>You spend a week trying to discover and learn a creature's name. The exact form of your effort varies depending on the skill you use, the resources you have available, and other circumstances. Decide if you are searching for the name of a specific individual or for names in general. If you're looking for the name of an individual, you must be able to clearly identify that individual; for example, \"the general leading the invasion\" is enough, but \"the person who killed the duchess\" isn't, if you don't know who killed the duchess. If you're searching for names more generally, name one creature type.</p>\n<p>The GM chooses a DC, typically based on the level of the creature in question. If you're seeking names more generally, the DC is typically based on the level of the creature whose name the GM decides to provide, usually a creature from the chosen type of your level or lower. The GM might modify the DC of the task based on the resources you have available, or on using an unusually appropriate or inappropriate skill, or on other circumstances. Attempt a check with a skill that could be used to Recall Knowledge about the creature's type. After attempting to Learn a Name, you typically can't try to learn the name of the same individual again unless you gain access to a substantial new source of information, as determined by the GM.</p>\n<hr />\n<p><strong>Critical Success</strong> You find one or more private names of the specific individual you chose, or the private name of a creature with the type you chose and a level equal to the task level. You also find hidden fragments of their true name and, at the GM's discretion, you might find a clue leading to an adventure where you can learn the rest of the true name.</p>\n<p><strong>Success</strong> As critical success, except you find only one private name and don't find hidden fragments of their true name.</p>\n<p><strong>Critical Failure</strong> If you were searching for the name of a specific individual, you find no new information and that individual becomes aware of your efforts. If you were searching for a general name of a specific type, you find a creature's name or names likely to get you in trouble, possibly the names of a different type of creature entirely.</p>"
      },
      "source": { "value": "Pathfinder Secrets of Magic" },
      "rules": [],
      "slug": "learn-name",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["downtime", "secret"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": null,
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.yOtu5X3qWfjuX8Vy" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "yUjuLbBMflVum8Yn",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Launch Fireworks Display",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 1 or more batches of infused reagents</p>\n<p><strong>Requirements</strong> You have a free hand</p>\n<hr />\n<p><strong>Effect</strong> You set off a fireworks display. You can launch a normal firework to simply create a visual or audible signal within 20 feet or you can choose one of the following special effects. A firework display has the listed traits, and if it costs more than 1 batch of infused reagents, it is noted in its Cost entry.</p>\n<p><strong>Comet</strong> <span class=\"pf2-icon\">1</span> (visual) You shoot a streak of shining light in a @Template[type:line|distance:60]. All spaces in that line are lit with bright light until the start of your next turn. As part of this action, you can also Point Out a single creature in the line, and your allies do not need to hear or understand you.</p>\n<p><strong>Flower</strong> <span class=\"pf2-icon\">1</span> (visual) You ignite a ring of sparks, creating a shape that might be reminiscent of a flower blooming in the sky. Each enemy with 20 feet of you must attempt a Fortitude save. On a failure, the enemy is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} for 1 round, and on a critical failure they are dazzled for 2 rounds.</p>\n<p><strong>Salute</strong> <span class=\"pf2-icon\">1</span> (auditory) You create a startling bang or whistle, adding an auditory component to your fireworks display. When you launch a salute display, you can choose a @UUID[Compendium.pf2e.conditionitems.Item.yblD8fOR1J8rDwEQ]{Confused} or @UUID[Compendium.pf2e.conditionitems.Item.AdPVz7rbaVSRxHFg]{Fascinated} ally within 60 feet. If the ally you chose is fascinated, the noise is so violent that it acts as a hostile effect for the purpose of their fascinated condition (though it has no negative repercussions) automatically ending most applications of the fascinated condition. If they're confused, the sound is so loud and violent that it might snap the ally out of confusion. They can immediately attempt the flat check to remove the confused condition which normally occurs when a creature is damaged. If the confused condition has special rules that remove the flat check when taking damage or make the flat check harder, those rules also apply to the salute.</p>"
      },
      "source": { "value": "Pathfinder Guns & Gears" },
      "rules": [],
      "slug": "launch-fireworks-display",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "offensive",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.yUjuLbBMflVum8Yn" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "yXk0G8l0leaqHh1U",
    "img": "systems/pf2e/icons/actions/Passive.webp",
    "name": "Host Spirit",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Frequency</strong> once per day</p>\n<hr />\n<p><strong>Effect</strong> You attempt one skill check to perform an exploration activity, even if it normally requires you to be trained to do so. You're trained in the skill just long enough to make that single check (to a maximum of 10 minutes).</p>\n<p>Whether or not the check succeeds, in the next 24 hours you must perform a minor favor to appease the spirit who aided you, determined by the GM (usually something sensation related, such as tasting a certain food, listening to a specific song, or smoking a pipe). You can't Host Spirit again until you've performed the favor. If you haven't completed it after 24 hours, you're @UUID[Compendium.pf2e.conditionitems.Item.HL2l2VRSaQHu9lUw]{Fatigued} until the obligation is fulfilled.</p>"
      },
      "source": { "value": "Pathfinder Book of the Dead" },
      "rules": [],
      "slug": "host-spirit",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["exploration", "necromancy", "occult"], "rarity": "common" },
      "actionType": { "value": "passive" },
      "category": "interaction",
      "actions": { "value": null },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "frequency": { "max": 1, "per": "day" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.yXk0G8l0leaqHh1U" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "yh9O9BQjwWrAIiuf",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Take Control",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Requirements</strong> You are aboard the vehicle and adjacent to its controls.</p>\n<p>You grab the reins, the wheel, or some other mechanism to control the vehicle. Attempt a piloting check; on a success, you become the vehicle's pilot, or regain control of the vehicle if it was uncontrolled. Some vehicles have complicated controls that cause this action to become a multi-action activity.</p>"
      },
      "source": { "value": "Pathfinder Gamemastery Guide" },
      "rules": [],
      "slug": "take-control",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.yh9O9BQjwWrAIiuf" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  },
  {
    "_id": "yzNJgwzV9XqEhKc6",
    "img": "systems/pf2e/icons/actions/OneAction.webp",
    "name": "Quick Alchemy",
    "system": {
      "description": {
        "gm": "",
        "value": "<p><strong>Cost</strong> 1 batch of infused reagents</p>\n<p><strong>Requirements</strong> You have the formula for the alchemical item you're creating, and you're either holding or wearing the @UUID[Compendium.pf2e.equipment-srd.Item.4ftXXUCBHcf4b0MH]{Alchemist's Tools}.</p>\n<hr />\n<p>You swiftly mix up a short-lived alchemical item to use at a moment's notice. You create a single alchemical consumable item of your advanced alchemy level or lower that's in your formula book without having to spend the normal monetary cost in alchemical reagents or needing to attempt a Crafting check. This item has the infused trait, but it remains potent only until the start of your next turn.</p>"
      },
      "source": { "value": "Pathfinder Core Rulebook" },
      "rules": [],
      "slug": "quick-alchemy",
      "schema": { "version": 0.858, "lastMigration": null },
      "traits": { "value": ["alchemist", "manipulate"], "rarity": "common" },
      "actionType": { "value": "action" },
      "category": "interaction",
      "actions": { "value": 1 },
      "requirements": { "value": "" },
      "trigger": { "value": "" },
      "deathNote": false,
      "weapon": { "value": "" }
    },
    "type": "action",
    "flags": { "core": { "sourceId": "Compendium.pf2e.actionspf2e.Item.yzNJgwzV9XqEhKc6" } },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": { "default": 0 },
    "_stats": { "systemId": null, "systemVersion": null, "coreVersion": null, "createdTime": null, "modifiedTime": null, "lastModifiedBy": null }
  }
]
