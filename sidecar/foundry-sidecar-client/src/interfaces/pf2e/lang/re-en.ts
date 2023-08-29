const en = {
  PF2E: {
    AmmunitionNotes: {
      AntlerArrow: {
        CriticalText: "The DC of the Athletics check to pull the missile free increases to @Check[type:athletics|dc:15|name:Pull the Missile Free|showDC:all]",
        Text: "The target must succeed at a @Check[type:reflex|dc:16|name:Antler Arrow] save or become stuck to the surface, taking the critical specialization effects of a bow",
        Title: "Antler Arrow",
      },
      ExplosiveAmmunition: {
        Greater: {
          Text: "The missile explodes in a @Template[type:burst|distance:10], dealing [[/r 10d6[fire]]] damage to each creature in the area (including the target). Each creature must attempt a @Check[type:reflex|dc:30|basic:true|name:Explosive Ammunition] save.",
          Title: "Explosive Ammunition (Greater)",
        },
        Normal: {
          Text: "The missile explodes in a @Template[type:burst|distance:10], dealing [[/r 6d6[fire]]] damage to each creature in the area (including the target). Each creature must attempt a @Check[type:reflex|dc:25|basic:true|name:Explosive Ammunition] save.",
          Title: "Explosive Ammunition",
        },
      },
      ExsanguinatingAmmunition: {
        Greater: {
          Text: "For 1 minute after you deal damage to a creature with an activated exsanguinating ammunition that creature gains weakness 3 to persistent bleed damage. In addition, the DC of any flat checks to end persistent bleed damage increases from 15 to 17 (from 10 to 12 when receiving particularly effective assistance) for the duration. @UUID[Compendium.pf2e.equipment-effects.Item.5lZWAvm0oGxvF4bm]{Effect: Exsanguinating Ammunition (Greater)}",
          Title: "Exsanguinating Ammunition (Greater)",
        },
        Major: {
          Text: "For 1 minute after you deal damage to a creature with an activated exsanguinating ammunition that creature gains weakness 5 to persistent bleed damage. In addition, the DC of any flat checks to end persistent bleed damage increases from 15 to 17 (from 10 to 12 when receiving particularly effective assistance) for the duration. @UUID[Compendium.pf2e.equipment-effects.Item.mrwg2XftLtSLj197]{Effect: Exsanguinating Ammunition (Major)}",
          Title: "Exsanguinating Ammunition (Major)",
        },
        Normal: {
          Text: "For 1 minute after you deal damage to a creature with an activated exsanguinating ammunition that creature gains weakness 1 to persistent bleed damage. In addition, the DC of any flat checks to end persistent bleed damage increases from 15 to 17 (from 10 to 12 when receiving particularly effective assistance) for the duration. @UUID[Compendium.pf2e.equipment-effects.Item.Fz3cSffzDAxhCh2D]{Effect: Exsanguinating Ammunition}",
          Title: "Exsanguinating Ammunition",
        },
      },
      FreezingAmmunition: {
        Text: "The target must succeed at a @Check[type:fortitude|dc:19] save or be @UUID[Compendium.pf2e.conditionitems.Item.xYTAsEpcJE1Ccni3]{Slowed 1} for 1 round by the intense cold (slowed 1 for 1 minute on a critical failure).",
        Title: "Freezing Ammunition",
      },
      MeteorShot: {
        CriticalFailureText: "On a critical failure, the weapon misfires.",
        Greater: {
          Text: "In addition to the weapon's normal damage, the meteor shot deals fire damage and the ground in the area becomes difficult terrain. The ammunition deals [[/r 6d6[fire]]] damage in a @Template[type:emanation|distance:10] around the target (@Check[type:reflex|dc:29|basic:true|name:Meteor Shot] save).",
          Title: "Meteor Shot (Greater)",
        },
        Major: {
          Text: "In addition to the weapon's normal damage, the meteor shot deals fire damage and the ground in the area becomes difficult terrain. The ammunition deals [[/r 9d6[fire]]] damage in a @Template[type:emanation|distance:20] around the target (@Check[type:reflex|dc:37|basic:true|name:Meteor Shot] save).",
          Title: "Meteor Shot (Major)",
        },
        Normal: {
          Text: "In addition to the weapon's normal damage, the meteor shot deals fire damage and the ground in the area becomes difficult terrain. The ammunition deals [[/r 3d6[fire]]] damage in a @Template[type:emanation|distance:5] around the target (@Check[type:reflex|dc:23|basic:true|name:Meteor Shot] save).",
          Title: "Meteor Shot",
        },
      },
      ShiningAmmunition: {
        Text: "The ammunition sheds bright light in a 20-foot radius (and dim light to the next 20 feet) for 10 minutes. If it hits a target, it sticks, causing the target to shed light in the same radius. @UUID[Compendium.pf2e.equipment-effects.Item.Sf6UO6vgCeicggOK]{Effect: Shining Ammunition}",
        Title: "Shining Ammunition",
      },
    },
    AttackEffects: {
      DropWeapon: "The creature drops the wielded weapon.",
      IgnoreConcealed: "The attack ignores the @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} condition.",
      ReduceHiddenCheck: "The DC of the flat check to target a @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} creature is only @Check[type:flat|dc:5].",
      IgnoreCover: "The target doesn't benefit from lesser cover, and it reduces the AC bonus from standard cover by 2 against the attack.",
      IncreasedCriticalChance: "If the attack hits and the creature rolls a 19 on the d20 roll, the attack is a critical hit. This has no effect if the 19 would be a failure.",
      IncreasedReach5: "Reach increased by 5 feet",
      InterruptAction: "On a hit, the target's action is interrupted.",
      KnockProne: "On a hit, the target is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
    },
    BattleForm: {
      AberrantForm: {
        GugSqueezeNote: "Your multiple joints allow you to fit through tight spaces as if you were a Medium creature.",
      },
      AngelForm: {
        DeafenedNote: "@UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} for 1 round on a critical hit",
      },
      Attack: {
        Antler: "Antler",
        AqueousFist: "Aqueous Fist",
        Beak: "Beak",
        Beard: "Beard",
        Bite: "Bite",
        Body: "Body",
        BoneShard: "Bone Shard",
        Boot: "Boot",
        Branch: "Branch",
        Claw: "Claw",
        CubeFace: "Cube Face",
        Fangs: "Fangs",
        FireMote: "Fire Mote",
        Foot: "Foot",
        Foreleg: "Foreleg",
        Gust: "Gust",
        HolyMace: "Holy Mace",
        Hoof: "Hoof",
        Horn: "Horn",
        Jaws: "Jaws",
        LavaFist: "Lava Fist",
        Leaf: "Leaf",
        Leg: "Leg",
        LightningLash: "Lightning Lash",
        Mandibles: "Mandibles",
        Moonbeam: "Moonbeam",
        PiercingHymn: "Piercing Hymn",
        Pincer: "Pincer",
        Pseudopod: "Pseudopod",
        Rock: "Rock",
        Spikes: "Spikes",
        Spine: "Spine",
        Stinger: "Stinger",
        Sunbeam: "Sunbeam",
        Tail: "Tail",
        Talon: "Talon",
        Tendril: "Tendril",
        Tentacle: "Tentacle",
        TentacleArm: "Tentacle Arm",
        Thorns: "Thorns",
        Tongue: "Tongue",
        Trunk: "Trunk",
        Tusk: "Tusk",
        Vine: "Vine",
        WaterSpout: "Water Spout",
        Wave: "Wave",
        Web: "Web",
        Wing: "Wing",
      },
      CosmicForm: {
        MoonNote: "The target is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 2} for 1 round.",
        SunNote: "The target is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} for 1 round.",
      },
      DaemonForm: {
        CeustodaemonDamageNote: "Any successful jaws or claw Strike deals an additional [[/r {1d6}]]{1d6 damage}, and you take the same amount of damage",
      },
      ElementEmbodied: {
        AirPushNote: "Plus @UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.t6cx9FOODmeZQNYl]{Push} 10 feet",
        WaterPushPullNote: "Plus @UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.t6cx9FOODmeZQNYl]{Push} or Pull 10 feet",
      },
      InsectForm: {
        SpiderWebNote: "A successful Web attack entangles the target for 1 round, but deals no damage",
      },
      MonstrosityForm: {
        ShroudOfFlame: "Shroud of Flame",
      },
      Note: {
        Grab: "You can spend an action immediately after a hit to @UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr]{Grab} the target",
        GrabbingTrunk: {
          Text: "A creature up to two sizes smaller that's hit by your trunk is @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed}. If you succeed at your @UUID[Compendium.pf2e.actionspf2e.Item.PMbdMWc2QroouFGD]{Grapple} check against a creature grabbed by your trunk, you can reposition the creature to another space within your trunk's reach.",
          Title: "Grabbing Trunk",
        },
        Shove:
          "You can spend an action immediately after a hit to push the target 5 feet with the effects of a successful @UUID[Compendium.pf2e.actionspf2e.Item.7blmbDrQFNfdT731]{Shove}",
      },
      OozeForm: {
        GelatinousCubeNote:
          "A creature hit by your cube face Strike must succeed at a @Check[type:fortitude|dc:resolve(@actor.attributes.spellDC.value)|traits:incapacitation] save against your spell DC or be @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 1} (or @UUID[Compendium.pf2e.conditionitems.Item.6uEgoh53GbXuHpTF]{Paralyzed} for 1 round on a critical failure); this save has the incapacitation trait.",
      },
    },
    BombNotes: {
      AcidFlask: {
        Greater: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*3d6)[persistent,acid]]] and [[/r (3[splash])[acid]]]{3 acid splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3d6[persistent,acid]]] and [[/r (3[splash])[acid]]]{3 acid splash damage}.",
        },
        Lesser: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*1d6)[persistent,acid]]] and [[/r (1[splash])[acid]]]{1 acid splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1d6[persistent,acid]]] and [[/r (1[splash])[acid]]]{1 acid splash damage}.",
        },
        Major: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*4d6)[persistent,acid]]] and [[/r (4[splash])[acid]]]{4 acid splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4d6[persistent,acid]]] and [[/r (4[splash])[acid]]]{4 acid splash damage}.",
        },
        Moderate: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*2d6)[persistent,acid]]] and [[/r (2[splash])[acid]]]{2 acid splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 2d6[persistent,acid]]] and [[/r (2[splash])[acid]]]{2 acid splash damage}.",
        },
      },
      AlchemistsFire: {
        Greater: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*3)[persistent,fire]]] and [[/r (3[splash])[fire]]]{3 fire splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3[persistent,fire]]] and [[/r (3[splash])[fire]]]{3 fire splash damage}.",
        },
        Lesser: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*1)[persistent,fire]]] and [[/r (1[splash])[fire]]]{1 fire splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1[persistent,fire]]] and [[/r (1[splash])[fire]]]{1 fire splash damage}.",
        },
        Major: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*4)[persistent,fire]]] and [[/r (4[splash])[fire]]]{4 fire splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4[persistent,fire]]] and [[/r (4[splash])[fire]]]{4 fire splash damage}.",
        },
        Moderate: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*2)[persistent,fire]]] and [[/r (2[splash])[fire]]]{2 fire splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 2[persistent,fire]]] and [[/r (2[splash])[fire]]]{2 fire splash damage}.",
        },
      },
      BioluminescenceBomb: {
        success:
          "<p>Each creature within @Template[type:emanation|distance:10]{10 feet} of where the bomb exploded must succeed at a @Check[type:reflex|dc:17] save or be marked with dye that continues to glow for 24 hours. An affected creature must also attempt a @Check[type:fortitude|dc:17] saving throw against the overwhelming burst of light.</p><p><strong>Success</strong> The creature is unaffected.</p><p><strong>Failure</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} for 1 round.</p><p><strong>Critical Failure</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.XgEqL1kFApUbl5Z2]{Blinded} for 1 round, then dazzled for 1 round.</p>",
      },
      BlightBomb: {
        Greater: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*3d4)[persistent,poison]]] and [[/r (3[splash])[poison]]]{3 poison splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3d4[persistent,poison]]] and [[/r (3[splash])[poison]]]{3 poison splash damage}.",
        },
        Lesser: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*1d4)[persistent,poison]]] and [[/r (1[splash])[poison]]]{1 poison splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1d4[persistent,poison]]] and [[/r (1[splash])[poison]]]{1 poison splash damage}.",
        },
        Major: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*4d4)[persistent,poison]]] and [[/r (4[splash])[poison]]]{4 poison splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4d4[persistent,poison]]] and [[/r (4[splash])[poison]]]{4 poison splash damage}.",
        },
        Moderate: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*2d4)[persistent,poison]]] and [[/r (2[splash])[poison]]]{2 poison splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 2d4[persistent,poison]]] and [[/r (2[splash])[poison]]]{2 poison splash damage}.",
        },
      },
      BottledLightning: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[electricity]]]{3 electricity splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of your next turn.",
        },
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[electricity]]]{1 electricity splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of your next turn.",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[electricity]]]{4 electricity splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of your next turn.",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[electricity]]]{2 electricity splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of your next turn.",
        },
      },
      CrystalShards: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (5[splash])[piercing]]]{5 piercing splash damage} and the splash creates crystals that are @UUID[Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD]{Caltrops} on level surfaces and handholds on vertical surfaces, granting +2 item bonus to the next Athletics check to Climb.",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (6[splash])[piercing]]]{6 piercing splash damage} and the splash creates crystals that are @UUID[Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD]{Caltrops} on level surfaces and handholds on vertical surfaces, granting +3 item bonus to the next Athletics check to Climb.",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[piercing]]]{4 piercing splash damage} and the splash creates crystals that are @UUID[Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD]{Caltrops} on level surfaces and handholds on vertical surfaces, granting +1 item bonus to the next Athletics check to Climb.",
        },
      },
      DreadAmpoule: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[mental]]]{3 mental splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1} (@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} on a critical).",
        },
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[mental]]]{1 mental splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1} (@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} on a critical).",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[mental]]]{4 mental splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1} (@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} on a critical).",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[mental]]]{2 mental splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1} (@UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2} on a critical).",
        },
      },
      DwarvenDaisy: {
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[fire]]]{1 fire splash damage} and the target must succeed at a @Check[type:fortitude|dc:16|traits:damaging-effect|showDC:all] save or become @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} for 1 round.",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[fire]]]{2 fire splash damage} and the target must succeed at a @Check[type:fortitude|dc:18|traits:damaging-effect|showDC:all] save or become @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} for 1 round.",
        },
      },
      FrostVial: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[cold]]]{3 cold splash damage} and the target takes a -10-foot penalty to its Speeds until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.nJRoiSyd67eQ1dYj]{Effect: Frost Vial (Greater)}).",
        },
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[cold]]]{1 cold splash damage} and the target takes a -5-foot penalty to its Speeds until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.RLsdvhmTh64Mmty9]{Effect: Frost Vial (Lesser)}).",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[cold]]]{4 cold splash damage} and the target takes a -15-foot penalty to its Speeds until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.4G9qnI0oRyL6eKFQ]{Effect: Frost Vial (Major)}).",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[cold]]]{2 cold splash damage} and the target takes a -10-foot penalty to its Speeds until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.dv0IKm5syOdP759w]{Effect: Frost Vial (Moderate)}).",
        },
      },
      GhostCharge: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[positive]]]{3 positive splash damage} and the target that takes damage becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2} until the start of my next turn.",
        },
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[positive]]]{1 positive splash damage} and the target that takes damage becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1} until the start of my next turn.",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[positive]]]{4 positive splash damage} and the target that takes damage becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2} until the start of my next turn.",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[positive]]]{2 positive splash damage} and the target that takes damage becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1} until the start of my next turn.",
        },
      },
      GooGrenade: {
        Greater: "Greater",
        Lesser: "Lesser",
        Major: "Major",
        Moderate: "Moderate",
        Prompt: "Select a goo grenade quality.",
        success:
          "<strong>Effect</strong> On a hit, the creature takes a penalty to its Speeds from the clinging goo. @UUID[Compendium.pf2e.equipment-effects.Item.5JYchreCttBg7RcD]{Effect: Goo Grenade}",
      },
      JunkBomb: {
        Greater: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*3)[bleed]]] and [[/r (3[splash])[slashing]]]{3 slashing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3[bleed]]] and [[/r (3[splash])[slashing]]]{3 slashing splash damage}.",
        },
        Lesser: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*1)[bleed]]] and [[/r (1[splash])[slashing]]]{1 slashing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1[bleed]]] and [[/r (1[splash])[slashing]]]{1 slashing splash damage}.",
        },
        Major: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*4)[bleed]]] and [[/r (4[splash])[slashing]]]{4 slashing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4[bleed]]] and [[/r (4[splash])[slashing]]]{4 slashing splash damage}.",
        },
        Moderate: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*2)[bleed]]] and [[/r (2[splash])[slashing]]]{2 slashing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 2[bleed]]] and [[/r (2[splash])[slashing]]]{2 slashing splash damage}.",
        },
      },
      MudBomb: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[bludgeoning]]]{3 bludgeoning splash damage}. The target is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until the start of your next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[bludgeoning]]]{3 bludgeoning splash damage}.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[bludgeoning]]]{1 bludgeoning splash damage}. The target is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until the start of your next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[bludgeoning]]]{1 bludgeoning splash damage}.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[bludgeoning]]]{4 bludgeoning splash damage}. The target is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until the start of your next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[bludgeoning]]]{4 bludgeoning splash damage}.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[bludgeoning]]]{2 bludgeoning splash damage}. The target is @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until the start of your next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[bludgeoning]]]{2 bludgeoning splash damage}.",
        },
      },
      NecroticBomb: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[negative]]]{3 negative splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 3}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[negative]]]{3 negative splash damage}.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[negative]]]{1 negative splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[negative]]]{1 negative splash damage}.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[negative]]]{4 negative splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 4}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[negative]]]{4 negative splash damage}.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[negative]]]{2 negative splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 2}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[negative]]]{2 negative splash damage}.",
        },
      },
      PerniciousSporeBomb: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*3d4)[persistent,piercing]]] and [[/r (3[splash])[poison]]]{3 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r 3d4[persistent,piercing]]] and [[/r (3[splash])[poison]]]{3 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*1d4)[persistent,piercing]]] and [[/r (1[splash])[poison]]]{1 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r 1d4[persistent,piercing]]] and [[/r (1[splash])[poison]]]{1 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*4d4)[persistent,piercing]]] and [[/r (4[splash])[poison]]]{4 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 minute.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r 4d4[persistent,piercing]]] and [[/r (4[splash])[poison]]]{4 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 minute.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*2d4)[persistent,piercing]]] and [[/r (2[splash])[poison]]]{2 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r 2d4[persistent,piercing]]] and [[/r (2[splash])[poison]]]{2 poison splash damage}. The bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
        },
      },
      PeshspineGrenade: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[piercing]]]{3 piercing splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 2} until the end of its turn.",
        },
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[piercing]]]{1 piercing splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1} until the end of its turn.",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[piercing]]]{4 piercing splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 3} until the end of its turn.",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[piercing]]]{2 piercing splash damage} and the target is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1} until the end of its turn.",
        },
      },
      PressureBomb: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[bludgeoning]]]{3 bludgeoning splash damage}, Medium or smaller targets are pushed 5 feet away from you, and the target is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[bludgeoning]]]{3 bludgeoning splash damage}, Medium or smaller targets are pushed 5 feet away from you.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[bludgeoning]]]{1 bludgeoning splash damage}, Tiny or smaller targets are pushed 5 feet away from you, and the target is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[bludgeoning]]]{1 bludgeoning splash damage}, Tiny or smaller targets are pushed 5 feet away from you.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[bludgeoning]]]{4 bludgeoning splash damage}, Medium or smaller creatures who take splash damage are pushed 5 feet away from the target, and then, if the target is Large or smaller, it is pushed 5 feet away from you, and the target is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[bludgeoning]]]{4 bludgeoning splash damage}, Medium or smaller creatures who take splash damage are pushed 5 feet away from the target, and then, if the target is Large or smaller, it is pushed 5 feet away from you.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[bludgeoning]]]{2 bludgeoning splash damage}, Small or smaller targets are pushed 5 feet away from you, and the target is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[bludgeoning]]]{2 bludgeoning splash damage}, Small or smaller targets are pushed 5 feet away from you.",
        },
      },
      RedpitchBomb: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*3d4)[persistent,fire]]] and [[/r (3[splash])[fire]]]{3 fire splash damage}. On a critical hit, the target is @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 2} until the start of my next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3d4[persistent,fire]]] and [[/r (3[splash])[fire]]]{3 fire splash damage}.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*1d4)[persistent,fire]]] and [[/r (1[splash])[fire]]]{1 fire splash damage}. On a critical hit, the target is @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 1} until the start of my next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1d4[persistent,fire]]] and [[/r (1[splash])[fire]]]{1 fire splash damage}.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*4d4)[persistent,fire]]] and [[/r (4[splash])[fire]]]{4 fire splash damage}. On a critical hit, the target is @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 3} until the start of my next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4d4[persistent,fire]]] and [[/r (4[splash])[fire]]]{4 fire splash damage}.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*2d4)[persistent,fire]]] and [[/r (2[splash])[fire]]]{2 fire splash damage}. On a critical hit, the target is @UUID[Compendium.pf2e.conditionitems.Item.i3OJZU2nk64Df3xm]{Clumsy 1} until the start of my next turn.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 2d4[persistent,fire]]] and [[/r (2[splash])[fire]]]{2 fire splash damage}.",
        },
      },
      SulfurBomb: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[acid]]]{3 acid splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[acid]]]{3 acid splash damage} and the target takes a -1 status penalty to Perception checks and attack rolls until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.fuQVJiPPUsvL6fi5]{Effect: Sulfur Bomb (Failure)}).",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[acid]]]{1 acid splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[acid]]]{1 acid splash damage} and the target takes a -1 status penalty to Perception checks and attack rolls until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.fuQVJiPPUsvL6fi5]{Effect: Sulfur Bomb (Failure)}).",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[acid]]]{4 acid splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[acid]]]{4 acid splash damage} and the target takes a -1 status penalty to Perception checks and attack rolls until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.fuQVJiPPUsvL6fi5]{Effect: Sulfur Bomb (Failure)}).",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[acid]]]{2 acid splash damage} and the target becomes @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[acid]]]{2 acid splash damage} and the target takes a -1 status penalty to Perception checks and attack rolls until the end of its next turn (@UUID[Compendium.pf2e.equipment-effects.Item.fuQVJiPPUsvL6fi5]{Effect: Sulfur Bomb (Failure)}).",
        },
      },
      TallowBomb: {
        criticalSuccess:
          "On a critical hit, a living creature taking persistent fire damage from a tallow bomb is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} from the stench of burning fat and can't reduce its sickened value below 1 while the persistent fire damage lasts.",
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*3d4)[persistent,fire]]], [[/r (3[splash])[fire]]]{3 fire splash damage}, and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} from the stench of burning fat. The creature can't reduce its sickened value below 1 while the persistent fire damage lasts.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3d4[persistent,fire]]] and [[/r (3[splash])[fire]]]{3 fire splash damage}.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*1d4)[persistent,fire]]], [[/r (1[splash])[fire]]]{1 fire splash damage}, and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} from the stench of burning fat. The creature can't reduce its sickened value below 1 while the persistent fire damage lasts.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1d4[persistent,fire]]] and [[/r (1[splash])[fire]]]{1 fire splash damage}.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*4d4)[persistent,fire]]], [[/r (4[splash])[fire]]]{4 fire splash damage}, and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} from the stench of burning fat. The creature can't reduce its sickened value below 1 while the persistent fire damage lasts.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4d4[persistent,fire]]] and [[/r (4[splash])[fire]]]{4 fire splash damage}.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2*2d4)[persistent,fire]]], [[/r (2[splash])[fire]]]{2 fire splash damage}, and the target is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1} from the stench of burning fat. The creature can't reduce its sickened value below 1 while the persistent fire damage lasts.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 2d4[persistent,fire]]] and [[/r (2[splash])[fire]]]{2 fire splash damage}.",
        },
      },
      TanglefootBag: {
        Greater: {
          criticalSuccess:
            "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.csA4UAD2tQq7RjT8]{-15 ft Speed Penalty} for 1 minute. On critical hit, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} for 1 round.",
          success: "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.csA4UAD2tQq7RjT8]{-15 ft Speed Penalty} for 1 minute.",
        },
        Lesser: {
          criticalSuccess:
            "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.fYZIanbYu0Vc4JEL]{-10 ft Speed Penalty} for 1 minute. On critical hit, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} for 1 round.",
          success: "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.fYZIanbYu0Vc4JEL]{-10 ft Speed Penalty} for 1 minute.",
        },
        Major: {
          criticalSuccess:
            "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.ITAFsW3dQPupJ3DW]{-20 ft Speed Penalty} for 1 minute. On critical hit, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} for 1 round.",
          success: "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.ITAFsW3dQPupJ3DW]{-20 ft Speed Penalty} for 1 minute.",
        },
        Moderate: {
          criticalSuccess:
            "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.MEreOgnjoRiXPEuq]{-15 ft Speed Penalty} for 1 minute. On critical hit, @UUID[Compendium.pf2e.conditionitems.Item.eIcWbB5o3pP6OIMe]{Immobilized} for 1 round.",
          success: "On hit, @UUID[Compendium.pf2e.equipment-effects.Item.MEreOgnjoRiXPEuq]{-15 ft Speed Penalty} for 1 minute.",
        },
      },
      Thunderstone: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[sonic]]]{3 sonic splash damage} and all creatures within 10 feet must succeed at a @Check[type:fortitude|dc:28|showDC:all] save or be @UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} until the end of its next turn.",
        },
        Lesser: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[sonic]]]{1 sonic splash damage} and all creatures within 10 feet must succeed at a @Check[type:fortitude|dc:17|showDC:all] save or be @UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} until the end of its next turn.",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[sonic]]]{4 sonic splash damage} and all creatures within 10 feet must succeed at a @Check[type:fortitude|dc:36|showDC:all] save or be @UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} until the end of its next turn.",
        },
        Moderate: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[sonic]]]{2 sonic splash damage} and all creatures within 10 feet must succeed at a @Check[type:fortitude|dc:20|showDC:all] save or be @UUID[Compendium.pf2e.conditionitems.Item.9PR9y0bi4JPKnHPR]{Deafened} until the end of its next turn.",
        },
      },
      TwigjackSack: {
        Greater: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*4)[bleed]]] and [[/r (3[splash])[piercing]]]{3 piercing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 4[bleed]]] and [[/r (3[splash])[piercing]]]{3 piercing splash damage}.",
        },
        Lesser: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*1)[bleed]]] and [[/r (1[splash])[piercing]]]{1 piercing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 1[bleed]]] and [[/r (1[splash])[piercing]]]{1 piercing splash damage}.",
        },
        Major: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*5)[bleed]]] and [[/r (4[splash])[piercing]]]{4 piercing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 5[bleed]]] and [[/r (4[splash])[piercing]]]{4 piercing splash damage}.",
        },
        Moderate: {
          criticalSuccess: "<strong>Effect</strong> The bomb also deals [[/r (2*3)[bleed]]] and [[/r (2[splash])[piercing]]]{2 piercing splash damage}.",
          success: "<strong>Effect</strong> The bomb also deals [[/r 3[bleed]]] and [[/r (2[splash])[piercing]]]{2 piercing splash damage}.",
        },
      },
      VexingVapor: {
        Greater: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[mental]]]{3 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts for 1 minute.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[mental]]]{3 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts until the end of its next turn.",
        },
        Lesser: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[mental]]]{1 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts for 1 minute.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[mental]]]{1 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts until the end of its next turn.",
        },
        Major: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[mental]]]{4 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts for 1 minute.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[mental]]]{4 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts until the end of its next turn.",
        },
        Moderate: {
          criticalSuccess:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[mental]]]{2 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts for 1 minute.",
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[mental]]]{2 mental splash damage} and the target must succeed at a @Check[type:flat|dc:5] before taking actions with the concentrate trait, this lasts until the end of its next turn.",
        },
      },
      WaterBomb: {
        Greater: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (3[splash])[bludgeoning]]]{3 nonlethal bludgeoning splash damage}. The bomb extinguishes non-magical fires within its splash area.",
        },
        Lesser: {
          success: "<strong>Effect</strong> The bomb also deals [[/r (1[splash])[bludgeoning]]]{1 nonlethal bludgeoning splash damage}.",
        },
        Major: {
          success:
            "<strong>Effect</strong> The bomb also deals [[/r (4[splash])[bludgeoning]]]{4 nonlethal bludgeoning splash damage}. The bomb extinguishes non-magical fires within its splash area.",
        },
        Moderate: {
          success: "<strong>Effect</strong> The bomb also deals [[/r (2[splash])[bludgeoning]]]{2 nonlethal bludgeoning splash damage}.",
        },
      },
    },
    Mutagens: {
      BestialMutagen: {
        FeralPrompt: "Increase penalty to AC to increase damage dice size?",
      },
    },
    NPCAbility: {
      AncientWisp: {
        PinpointLight: "Pinpoint Light",
      },
      BarghestFeed: "How many times has the Barghest fed?",
      Bunyip: {
        CrocodileLegs: "Crocodile Legs",
        SnakeTail: "Snake Tail",
      },
      Calikang: {
        SixfoldFlurry: "Strikes not taken?",
        SuspendedAnimationEnter: "Enter Suspended Animation",
        SuspendedAnimationExit: "Exit Suspended Animation",
      },
      Charge: {
        AtLeastTen: "Moved at Least 10 feet",
      },
      ChyzaeduAlienVestment: "Shattered Alien Vestment",
      ClockworkLostPlates: "How many plates are lost?",
      ClockworkWindUp: "Standby Mode",
      ConstructArmor: {
        BrokenArmor: "Broken Construct Armor",
        CriticalHit: "Construct Armor Broken by a Critical Hit",
      },
      CrumblingCarapace: {
        CriticalHit: "Carapace Broken by a Critical Hit",
      },
      CustomArmor: {
        BrokenArmor: "Broken Custom Armor",
        CriticalHit: "Custom Armor Broken by a Critical Hit",
      },
      CyclopsBully: {
        TerrorizingSwing:
          "If the creature is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened} and takes damage, it takes an additional 2d10 damage and is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
      },
      DemonInfuseWeapons: "Deal chaotic instead of evil damage",
      DisplacedRobot: {
        DivertPower: {
          Fists: "Divert Power to Fists",
          LaserBeam: "Divert Power to Laser Beam",
        },
        Fists: "Fists",
        LaserBeam: "Laser Beam",
      },
      Dramofir: {
        BittersweetDreamsCriticalFailure: "Critical Failure",
        BittersweetDreamsSuccessFailure: "Success or Failure",
      },
      DuskwalkerHuntPrey: {
        AC: "Designated Prey attacks the Duskwalker",
        Checks: "Duskwalker rolls checks against his Designated Prey",
      },
      Falrok: {
        LazuriteTerrainSwitch: "In lazurite infused terrain",
      },
      GiantAnimatedStatueBrazier: "Brazier is alight",
      HellboundAttorney: {
        OpeningStatementCriticalSuccess: "Opening Statement (Critical Success)",
      },
      HobgoblinFormationArea: "Formation vs. Area Effects",
      IoseffXarwin: {
        FulviasRing: {
          SavePossess: "Save against Target possessing Fulvia's Ring",
          SaveWear: "Save against Target wearing Fulvia's Ring",
          TargetPossess: "Target possesses Fulvia's Ring",
          TargetWear: "Target is wearing Fulvia's Ring",
        },
      },
      KallasDevil: {
        DisguisedAsChild: "Disguised as a Child",
        LyingAboutLoathsomeStench: "Lying about Loathsome Stench",
      },
      KrampusPunishTheNaughty: "Krampus rolls checks against Naughty Target",
      LegionArchon: {
        FlameOfJustice: "Flame of Justice - Critical Hit",
      },
      LemureSubservience: {
        Defend: "Defend",
        Fetch: "Fetch",
        Kill: "Kill",
      },
      MarilithFocusedAssault: {
        Five: "5 Longswords",
        Four: "4 Longswords",
        One: "1 Longsword",
        Prompt: "How many longswords is the Marilith wielding?",
        Six: "6 Longswords",
        Three: "3 Longswords",
        Two: "2 Longswords",
      },
      Marut: {
        Lightning: "Lightning",
        Thunder: "Thunder",
      },
      MinotaurHuntedFear: {
        Demoralize: "Target is in maze or similarly difficult-to-navigate structure",
        Survival: "To Avoid Getting Lost",
      },
      Necrohulk: {
        AlchemicalCartridgeRuptured: "Alchemical Cartridge Ruptured",
      },
      PaleStranger: {
        TargetMurderedPaleStranger: "Target Murdered Pale Stranger",
        TargetNeverKilled: "Target has Never Killed",
      },
      PoltergeistTelekineticStorm: {
        MultiAttackLabel: "Telekinetic Storm - Multiple Targets",
        MultipleTargets: "Multiple Targets",
        SingleAttackEffect: "The attack deals [[/r {1d12}]]{1d12 damage} on a failure.",
        SingleAttackLabel: "Telekinetic Storm - Single Target",
        SingleTarget: "Single Target",
      },
      PunishingStrike: {
        Note: "The reckless attack makes the user @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of their next turn. If they hit, they can add @UUID[Compendium.pf2e.bestiary-ability-glossary-srd.Item.t6cx9FOODmeZQNYl]{Push} to the strike",
      },
      RaptorGuardWight: {
        TerrorMaster: "The Raptor Guard is wearing their dinosaur-skull helm.",
      },
      Seugathi: {
        MindfogSuppression: "Suppress Mindfog Aura",
      },
      SkyDragon: {
        DivineLightningGood: "Divine Lightning - Good Damage",
        DivineLightningPositive: "Divine Lightning - Positive Damage",
      },
      SoulfiredPot: {
        CriticalHit: "Soulfired Pot Broken by a Critical Hit",
      },
      SovereignDragon: {
        InspireEnvoyDragonAdult: "Adult Sovereign Dragon",
        InspireEnvoyDragonAncient: "Ancient Sovereign Dragon",
        InspireEnvoyDragonChoice: "Dragon Granting the Effect",
        InspireEnvoyEffectAC: "Bonus to AC",
        InspireEnvoyEffectAttack: "Bonus to Attack",
        InspireEnvoyEffectChoice: "Granted Effect",
        InspireEnvoyEffectPercWillCha: "Bonus to Will, Perception and Charisma-based skill checks",
      },
      Surgeon: {
        MedicalMalpracticeCriticalSuccess: "Medical Malpractice (Critical Success)",
      },
      TreerazerPlantAttack: "Attack a Plant",
      Vampire: {
        JiangShi: {
          StanceOfDeath: {
            BoneCorpse: {
              Label: "Bone Corpse Stance",
            },
            CloudlessVoid: {
              Label: "Cloudless Void Stance",
            },
            SunderedVeins: {
              Label: "Sundered Veins Stance",
              Note: "The target becomes @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1}",
            },
          },
        },
      },
      YetiNightmareGuardianRage: "Nightmare Guardian Rage",
      Zetogeki: {
        TiltScalesChannelEnergy: "Kinetic Energy Channeled",
        TiltScalesTilted: "Scales Tilted",
      },
    },
    OracleCurses: {
      Ancestor: {
        AncestralInfluence: "Ancestral Influence",
        Label: {
          ExtremeBattle: "Extreme Battle",
          ExtremeSkillful: "Extreme Skillful",
          ExtremeSpellcasting: "Extreme Spellcasting",
          MajorBattle: "Major Battle",
          MajorSkillful: "Major Skillful",
          MajorSpellcasting: "Major Spellcasting",
          Martial: "Martial",
          MinorBattle: "Minor Battle",
          MinorSkillful: "Minor Skillful",
          MinorSpellcasting: "Minor Spellcasting",
          ModerateBattle: "Moderate Battle",
          ModerateSkillful: "Moderate Skillful",
          ModerateSpellcasting: "Moderate Spellcasting",
          Skillful: "Skillful",
          Spellcasting: "Spellcasting",
        },
        MajorFailure: "Your curse interferes with this action, and you must succeed at a @Check[type:flat|dc:8|showDC:owner] or lose the action.",
        MeddlingAncestor: "Meddling Ancestor",
        MinorFailure: "Your curse interferes with this action, and you must succeed at a @Check[type:flat|dc:4|showDC:owner] or lose the action.",
        ModerateFailure: "Your curse interferes with this action, and you must succeed at a @Check[type:flat|dc:6|showDC:owner] or lose the action.",
      },
      Battle: {
        MadeAStrike: "You've made a strike this round",
        NonTrivialEncounter: "In a non-trivial encounter",
      },
      Bones: {
        MajorUpgrade: " When you roll a critical failure at a saving throw against a disease, poison or death effect, you get a failure instead.",
        ModerateUpgrade: "When you roll a success at a saving throw against a disease, poison or death effect, you get a critical success instead.",
      },
      Label: {
        Extreme: "Extreme",
        Major: "Major",
        Minor: "Minor",
        Moderate: "Moderate",
      },
      Life: {
        ToggleLabel: "All targets of Heal are living creatures",
      },
      Time: {
        ACLabel: "Defending against reactions or free actions while moving",
      },
    },
    PersistentDamage: {
      Acid1d4: {
        criticalSuccess: "[[/r (2*1d4)[persistent,acid]]]",
        success: "[[/r 1d4[persistent,acid]]]",
      },
      Acid1d6: {
        criticalSuccess: "[[/r (2*1d6)[persistent,acid]]]",
        success: "[[/r 1d6[persistent,acid]]]",
      },
      Acid2d6: {
        criticalSuccess: "[[/r (2*2d6)[persistent,acid]]]",
        success: "[[/r 2d6[persistent,acid]]]",
      },
      "Acid2d6+2": {
        criticalSuccess: "[[/r (2*2d6+4)[persistent,acid]]]",
        success: "[[/r (2d6+2)[persistent,acid]]]",
      },
      Bleed1: {
        criticalSuccess: "[[/r 2[bleed]]]",
        success: "[[/r 1[bleed]]]",
      },
      Bleed1d10: {
        criticalSuccess: "[[/r (2*1d10)[bleed]]]",
        success: "[[/r 1d10[bleed]]]",
      },
      Bleed1d12: {
        criticalSuccess: "[[/r (2*1d12)[bleed]]]",
        success: "[[/r 1d12[bleed]]]",
      },
      Bleed1d4: {
        criticalSuccess: "[[/r (2*1d4)[bleed]]]",
        success: "[[/r 1d4[bleed]]]",
      },
      Bleed1d6: {
        criticalSuccess: "[[/r (2*1d6)[bleed]]]",
        success: "[[/r 1d6[bleed]]]",
      },
      Bleed1d8: {
        criticalSuccess: "[[/r (2*1d8)[bleed]]]",
        success: "[[/r 1d8[bleed]]]",
      },
      Bleed2: {
        criticalSuccess: "[[/r 4[bleed]]]",
        success: "[[/r 2[bleed]]]",
      },
      Bleed2d10: {
        criticalSuccess: "[[/r (2*2d10)[bleed]]]",
        success: "[[/r 2d10[bleed]]]",
      },
      Bleed2d12: {
        criticalSuccess: "[[/r (2*2d12)[bleed]]]",
        success: "[[/r 2d12[bleed]]]",
      },
      Bleed2d4: {
        criticalSuccess: "[[/r (2*2d4)[bleed]]]",
        success: "[[/r 2d4[bleed]]]",
      },
      Bleed2d6: {
        criticalSuccess: "[[/r (2*2d6)[bleed]]]",
        success: "[[/r 2d6[bleed]]]",
      },
      Bleed2d8: {
        criticalSuccess: "[[/r (2*2d8)[bleed]]]",
        success: "[[/r 2d8[bleed]]]",
      },
      Bleed3d10: {
        criticalSuccess: "[[/r (2*3d10)[bleed]]]",
        success: "[[/r 3d10[bleed]]]",
      },
      Bleed3d6: {
        criticalSuccess: "[[/r (2*3d6)[bleed]]]",
        success: "[[/r 3d6[bleed]]]",
      },
      Bleed3d8: {
        criticalSuccess: "[[/r (2*3d8)[bleed]]]",
        success: "[[/r 3d8[bleed]]]",
      },
      Bleed4d6: {
        criticalSuccess: "[[/r (2*4d6)[bleed]]]",
        success: "[[/r 4d6[bleed]]]",
      },
      Bleed4d8: {
        criticalSuccess: "[[/r (2*4d8)[bleed]]]",
        success: "[[/r 4d8[bleed]]]",
      },
      Bleed6d10: {
        criticalSuccess: "[[/r (2*6d10)[bleed]]]",
        success: "[[/r 6d10[bleed]]]",
      },
      Bleed6d6: {
        criticalSuccess: "[[/r (2*6d6)[bleed]]]",
        success: "[[/r 6d6[bleed]]]",
      },
      Bleed8d4: {
        criticalSuccess: "[[/r (2*8d4)[bleed]]]",
        success: "[[/r 8d4[bleed]]]",
      },
      Cold1d6: {
        criticalSuccess: "[[/r (2*1d6)[persistent,cold]]]",
        success: "[[/r 1d6[persistent,cold]]]",
      },
      Cold1d8: {
        criticalSuccess: "[[/r (2*1d8)[persistent,cold]]]",
        success: "[[/r 1d8[persistent,cold]]]",
      },
      Cold2d6: {
        criticalSuccess: "[[/r (2*2d6)[persistent,cold]]]",
        success: "[[/r 2d6[persistent,cold]]]",
      },
      Cold2d8: {
        criticalSuccess: "[[/r (2*2d8)[persistent,cold]]]",
        success: "[[/r 2d8[persistent,cold]]]",
      },
      Fire1: {
        criticalSuccess: "[[/r 2[persistent,fire]]]",
        success: "[[/r 1[persistent,fire]]]",
      },
      Fire1d10: {
        criticalSuccess: "[[/r (2*1d10)[persistent,fire]]]",
        success: "[[/r 1d10[persistent,fire]]]",
      },
      Fire1d4: {
        criticalSuccess: "[[/r (2*1d4)[persistent,fire]]]",
        success: "[[/r 1d4[persistent,fire]]]",
      },
      Fire1d6: {
        criticalSuccess: "[[/r (2*1d6)[persistent,fire]]]",
        success: "[[/r 1d6[persistent,fire]]]",
      },
      Fire2d10: {
        criticalSuccess: "[[/r (2*2d10)[persistent,fire]]]",
        success: "[[/r 2d10[persistent,fire]]]",
      },
      Fire2d4: {
        criticalSuccess: "[[/r (2*2d4)[persistent,fire]]]",
        success: "[[/r 2d4[persistent,fire]]]",
      },
      Fire2d6: {
        criticalSuccess: "[[/r (2*2d6)[persistent,fire]]]",
        success: "[[/r 2d6[persistent,fire]]]",
      },
      Fire2d8: {
        criticalSuccess: "[[/r (2*2d8)[persistent,fire]]]",
        success: "[[/r 2d8[persistent,fire]]]",
      },
      Fire3d10: {
        criticalSuccess: "[[/r (2*3d10)[persistent,fire]]]",
        success: "[[/r 3d10[persistent,fire]]]",
      },
      Fire3d6: {
        criticalSuccess: "[[/r (2*3d6)[persistent,fire]]]",
        success: "[[/r 3d6[persistent,fire]]]",
      },
      Fire3d8: {
        criticalSuccess: "[[/r (2*3d8)[persistent,fire]]]",
        success: "[[/r 3d8[persistent,fire]]]",
      },
      Fire4d10: {
        criticalSuccess: "[[/r (2*4d10)[persistent,fire]]]",
        success: "[[/r 4d10[persistent,fire]]]",
      },
      Force1d12: {
        criticalSuccess: "[[/r (2*1d12)[persistent,force]]]",
        success: "[[/r 1d12[persistent,force]]]",
      },
      Force2d12: {
        criticalSuccess: "[[/r (2*2d12)[persistent,force]]]",
        success: "[[/r 2d12[persistent,force]]]",
      },
      Mental1d4: {
        criticalSuccess: "[[/r (2*1d4)[persistent,mental]]]",
        success: "[[/r 1d4[persistent,mental]]]",
      },
      Mental1d6: {
        criticalSuccess: "[[/r (2*1d6)[persistent,mental]]]",
        success: "[[/r 1d6[persistent,mental]]]",
      },
      Mental1d8: {
        criticalSuccess: "[[/r (2*1d8)[persistent,mental]]]",
        success: "[[/r 1d8[persistent,mental]]]",
      },
      Mental2d6: {
        criticalSuccess: "[[/r (2*2d6)[persistent,mental]]]",
        success: "[[/r 2d6[persistent,mental]]]",
      },
      Mental3d6: {
        criticalSuccess: "[[/r (2*3d6)[persistent,mental]]]",
        success: "[[/r 3d6[persistent,mental]]]",
      },
      Negative1d10: {
        criticalSuccess: "[[/r (2*1d10)[persistent,negative]]]",
        success: "[[/r 1d10[persistent,negative]]]",
      },
      Negative1d6: {
        criticalSuccess: "[[/r (2*1d6)[persistent,negative]]]",
        success: "[[/r 1d6[persistent,negative]]]",
      },
      Negative1d8: {
        criticalSuccess: "[[/r (2*1d8)[persistent,negative]]]",
        success: "[[/r 1d8[persistent,negative]]]",
      },
      Negative2d10: {
        criticalSuccess: "[[/r (2*2d10)[persistent,negative]]]",
        success: "[[/r 2d10[persistent,negative]]]",
      },
      "Piercing2d8+8": {
        criticalSuccess: "[[/r (2*2d8+16)[persistent,piercing]]]",
        success: "[[/r (2d8+8)[persistent,piercing]]]",
      },
      Poison1d12: {
        criticalSuccess: "[[/r (2*1d12)[persistent,poison]]]",
        success: "[[/r 1d12[persistent,poison]]]",
      },
      Poison1d4: {
        criticalSuccess: "[[/r (2*1d4)[persistent,poison]]]",
        success: "[[/r 1d4[persistent,poison]]]",
      },
      Poison1d6: {
        criticalSuccess: "[[/r (2*1d6)[persistent,poison]]]",
        success: "[[/r 1d6[persistent,poison]]]",
      },
      Poison1d8: {
        criticalSuccess: "[[/r (2*1d8)[persistent,poison]]]",
        success: "[[/r 1d8[persistent,poison]]]",
      },
      Poison2d4: {
        criticalSuccess: "[[/r (2*2d4)[persistent,poison]]]",
        success: "[[/r 2d4[persistent,poison]]]",
      },
      Poison2d6: {
        criticalSuccess: "[[/r (2*2d6)[persistent,poison]]]",
        success: "[[/r 2d6[persistent,poison]]]",
      },
      Poison2d8: {
        criticalSuccess: "[[/r (2*2d8)[persistent,poison]]]",
        success: "[[/r 2d8[persistent,poison]]]",
      },
      Poison3d4: {
        criticalSuccess: "[[/r (2*3d4)[persistent,poison]]]",
        success: "[[/r 3d4[persistent,poison]]]",
      },
      Poison3d6: {
        criticalSuccess: "[[/r (2*3d6)[persistent,poison]]]",
        success: "[[/r 3d6[persistent,poison]]]",
      },
      Poison4d6: {
        criticalSuccess: "[[/r (2*4d6)[persistent,poison]]]",
        success: "[[/r 4d6[persistent,poison]]]",
      },
    },
    RuleEditor: {
      FastHealing: {
        DeactivatedBy: "Deactivated By",
      },
      FlatModifier: {
        HideIfDisabled: "Hide (If Disabled)",
      },
      General: {
        Brackets: "Brackets",
        CriticalBehavior: {
          false: "1x Damage on Crit",
          null: "2x Damage on Crit",
          true: "Critical Damage Only",
        },
        DamageType: "Damage Type",
        Label: "Label",
        Predicate: "Predicate",
        Primitive: "Primitive",
        Range: "Range",
        Selector: "Selector",
        Value: "Value",
      },
      GrantItem: {
        AllowDuplicate: "Allow Duplicates",
        ReevaluateOnUpdate: "Reevaluate on Update",
        ReplaceSelf: "Replace Self",
      },
      Note: {
        Hidden: "Hidden",
        Outcome: "Outcome",
        Text: "Text Content",
        Title: "Title",
      },
    },
    RuleElement: {
      ActiveEffectLike: "ActiveEffect-Like",
      ActorTraits: "Actor Traits",
      AdjustDegreeOfSuccess: "Adjust Degree of Success",
      AdjustModifier: "Adjust Modifier",
      AdjustStrike: "Adjust Strike",
      Aura: "Aura",
      BaseSpeed: "Base Speed",
      BattleForm: "Battle Form",
      ChoiceSet: "Choice Set",
      CraftingEntry: "Crafting Entry",
      CraftingFormula: "Crafting Formula",
      CreatureSize: "Creature Size",
      CriticalSpecialization: "Critical Specialization",
      DamageDice: "Damage Dice",
      DexterityModifierCap: "Dexterity Modifier Cap",
      EphemeralEffect: "Ephemeral Effect",
      FastHealing: "Fast Healing/Regeneration",
      FixedProficiency: "Fixed Proficiency",
      FlatModifier: "Flat Modifier",
      GrantItem: "Grant Item",
      Immunity: "Immunity",
      ItemAlteration: "Item Alteration",
      LoseHitPoints: "Lose Hit Points",
      MarkToken: "Mark Token",
      MartialProficiency: "Martial Proficiency",
      MultipleAttackPenalty: "Multiple Attack Penalty",
      Note: "Note",
      Resistance: "Resistance",
      RollOption: "Roll Option",
      RollTwice: "Roll Twice",
      Sense: "Sense",
      SpecialStatistic: "Special Statistic",
      Strike: "Strike",
      Striking: "Striking",
      SubstituteRoll: "Substitute Roll",
      TempHP: "Temporary Hit Points",
      TempHPShortLabel: "Temp",
      TokenEffectIcon: "Token Effect Icon",
      TokenImage: "Token Image",
      TokenLight: "Token Light",
      TokenName: "Token Name",
      Unrecognized: "Unrecognized Rule Element",
      Weakness: "Weakness",
      WeaponPotency: "Weapon Potency",
    },
    SkillVariant: {
      AboutCaves: "About Caves",
      AcidicEnvironment: "In Acidic Surroundings",
      AgainstDemons: "Against Demons",
      Aid: "To Aid",
      AttemptToFascinateOutdoorsInBrightSun: "Using Fascinating Performance Outdoors in Bright Sun",
      Blacksmithing: "For Blacksmithing",
      BloodOrWater: "In Blood of Water",
      BoundHome: "Within Bound Home",
      Buried: "Buried",
      CanClearlyIdentifyTheStars: "Can Clearly Identify the Stars",
      Climb: "To Climb",
      ClimbHighJumpLongJumpOrDisarm: "To Climb, High Jump, Long Jump, or Disarm",
      ClimbOrSwim: "To Climb or Swim",
      CommandAnAnimal: "To Command an Animal",
      CommandReptile: "To Command an Animal that is a Reptile",
      ConcealAnObject: "To Conceal an Object",
      CraftAlchemical: "To Craft Alchemical Items",
      CraftAlchemicalOrMedicine: "To Craft Alchemical or Medicinal Items",
      CraftBone: "Using Bone",
      CraftJewelry: "To Craft Jewelry",
      CraftSnare: "To Craft Snares",
      CraftTrap: "To Craft Traps",
      CraftTrapSnare: "To Craft Traps and Snares",
      CreateForgery: "To Create Forgery",
      Dance: "To Dance",
      Darkness: "In Darkness",
      DarknessOrSmoke: "In Darkness or Smoke",
      DecayingPlantFungus: "Amid Decaying Plant Matter or Fungus",
      Demoralize: "To Demoralize",
      DemoralizeThreateningLunge: "To Demoralize with Threatening Lunge",
      Deserts: "In Deserts",
      DimLight: "In Dim Light",
      DimLightOrDarkness: "In Dim Light or Darkness",
      DisableADevice: "To Disable a Device",
      Disarm: "To Disarm",
      DisarmGrapple: "To Disarm or Grapple",
      DisarmGrappleAvoidDisarm: "To Disarm, Grapple, or avoid being Disarmed",
      DisarmMetal: "To Disarm a Metal Item",
      DisarmStoneMetal: "To Disarm Stone or Metal Objects",
      DiscernAndPredictWeather: "Discern Weather Patterns and Predict Upcoming Weather Conditions",
      Diversion: "To Create a Diversion",
      Escape: "To Escape",
      EscapeForceOpenOrLift: "To Escape, Force Open, or Lift Heavy Objects",
      Feint: "To Feint",
      ForceOpenGrappleShoveOrTrip: "To Force Open, Grapple, Shove, or Trip",
      Forests: "In Forests",
      ForestsOrGrasslands: "In Forests or Grasslands",
      ForestsOrJungles: "In Forests or Jungles",
      ForestsOrSnow: "In Forests or Snow",
      ForestsOrSwamps: "In Forests or Swamps",
      ForestsOrUnderground: "In Forests or Underground Areas",
      FortuneTelling: "To Tell Fortunes",
      FullMoon: "Full Moon",
      GatherInformation: "to Gather Information",
      Grapple: "To Grapple",
      GrappleShove: "To Grapple or Shove",
      Hide: "To Hide",
      HideInBody: "To Hide Inside a Body",
      HideInDim: "To Hide in Dim Light",
      HideInDimOrDark: "To Hide in Dim Light or Darkness",
      HideSneakInscriptions: "To Hide or Sneak Among Inscriptions",
      HideSneakTree: "To Hide or Sneak while in a Tree",
      HighJumpOrLongJump: "To High Jump or Long Jump",
      IceAndSnow: "In Ice or Snow",
      ImitateStone: "To Imitate Stone",
      ImitateVoice: "To Imitate a Voice",
      Impersonate: "To Impersonate",
      ImpersonateCloakSheetRay: "To Impersonate a Cloak, Sheet, or Ray",
      ImpersonateClothing: "To Impersonate Clothing",
      ImpersonateHumanVersion: "To Impersonate a Human Version of Themselves",
      ImpersonateInanimate: "To Impersonate an Inanimate Object",
      ImpersonateStumpOrLog: "To Impersonate a Stump or Log",
      ImpersonateMound: "To Impersonate a Mound",
      ImpersonatePastSelf: "To Impersonate a Past Self",
      JumpOrClimb: "To Jump or Climb",
      JumpOrSwim: "To Jump or Swim",
      Jungles: "In Jungles",
      JunglesOrFlowerFields: "In Jungles or Flower Fields",
      JunkOrDebris: "In Junk or Debris",
      Lair: "In Lair",
      Lava: "In Lava",
      LeyLine: "Near Ley Line",
      Lie: "To Lie",
      LongJump: "To Long Jump",
      Lute: "To Play the Lute",
      MakeAnImpression: "To Make an Impression",
      ManeuverInFlight: "To Maneuver in Flight",
      Moist: "In Moist Environments",
      Mountains: "In Mountains",
      Navigate: "To Navigate",
      NearTheOcean: "Near The Ocean",
      NighttimeWithMoonVisible: "Nighttime, with the Moon Visible",
      OceansForests: "In Oceans and Forests",
      Orate: "To Orate",
      Paint: "To Paint",
      PalmAnObjectOrSteal: "To Palm an Object or Steal",
      PickALock: "To Pick a Lock",
      Poison: "To Craft Poisons",
      Prophecy: "To Spout Prophecy",
      Raining: "Raining",
      RecallKnowledge: "To Recall Knowledge",
      RecallKnowledgeDeadSubject: "To Recall Knowledge about a deceased subject",
      Rocky: "In Rocky Terrain",
      Ruins: "In Ruins",
      RunningWater: "In Running Water",
      RustyTerrain: "In Areas of Rusty Objects",
      Sand: "In Sand",
      SenseMotive: "to Sense Motive",
      Sewers: "In Sewers",
      SewersScrapyards: "In Sewers and Scrapyards",
      Shoes: "For Shoes",
      ShootingGallery: "In the Shooting Gallery",
      Shove: "To Shove",
      Singing: "Singing",
      Skinless: "When Skinless",
      Snow: "In Snow",
      Squeeze: "To Squeeze",
      Steal: "To Steal",
      StonyOrIcyAreas: "In Stony or Icy Areas",
      StringedInstruments: "For Stringed Instruments",
      Subsist: "To Subsist",
      Swamps: "In Swamps",
      Swardlands: "In the Swardlands",
      Swim: "To Swim",
      TarPit: "In Tar Pits",
      TellTheTruth: "To Tell the Truth",
      ThickVegetation: "In Thick Vegetation",
      Track: "To Track",
      TrackBleedingCreature: "To Track a Bleeding Creature",
      TrackCreator: "To Track Their Creator",
      TrackHalfHealth: "To Track a Creature at Half its Hit Points or Fewer",
      Traps: "Traps",
      TrashAndRubbish: "In Trash and Rubbish",
      Trip: "To Trip",
      TripTangle: "To Trip and Tangle",
      TumbleThrough: "To Tumble Through",
      TumbleThroughMediumOrLarger: "To Tumble Through the Space of a Medium or Larger Creature",
      Tundra: "In Tundra",
      Underground: "Underground",
      Undergrowth: "In Undergrowth",
      Underwater: "Underwater",
      UnderwaterVegetation: "In Underwater Vegetation",
      Vegetation: "In Vegetation",
      VsArthropods: "vs. Arthropods",
      VsControlled: "vs. Controlled effects",
      VsDarknessLightShadow: "vs. Darkness, Light or Shadow effects",
      VsDemons: "vs. Demons",
      VsDiseases: "vs. Diseases",
      VsEmotion: "vs. Emotion effects",
      VsMagic: "vs. Magical effects",
      VsMental: "vs. Mental effects",
      VsPlants: "vs. Plants",
      VsProne: "vs. Prone effects",
      VsShoveOrTrip: "vs. Shove or Trip",
      VsSleeping: "vs. sleeping targets",
      Water: "In Water",
      WaterOrMud: "In Water or Mud",
      Weave: "To Weave",
      Woodworking: "Woodworking",
    },
    SpecificRule: {
      Actions: {
        ThreeActions: "Three Actions",
        TwoActions: "Two Actions",
      },
      AdjustDegreeOfSuccess: {
        Squeeze: {
          CriticalFailureSuccessBetter:
            "When you roll a critical failure on a check to Squeeze, you get a failure instead, and when you roll a success, you get a critical success instead.",
        },
      },
      AdoptedAncestry: {
        Prompt: "Select a common ancestry.",
      },
      AdvancedGeneralTraining: {
        Prompt: "Select a 7th-level or lower general feat.",
      },
      AerialPiledriver: {
        SuccessText: "The target lands @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
        FailureText: "You lose your grip on the target, and it is no longer grabbed or restrained by you.",
        CriticalFailureText: "You fall @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}, and the target is no longer grabbed or restrained by you.",
      },
      AftermathFeats: {
        DormantEruptionToggle: "You've Used Thermal Eruption Today",
        StoneFistLabel: "Stone Fist",
      },
      Aid: {
        Prompt: "Choose the bonus from Aid.",
      },
      Alchemist: {
        AlchemicalCrossbow: {
          Prompt: "Choose a bomb to add to the crossbow.",
        },
        ResearchField: {
          Prompt: "Select a research field.",
        },
      },
      Anadi: {
        SpiderOrHybridForm: "In Spider or Hybrid Form",
      },
      AncestralParagon: {
        Prompt: "Select a 1st-level ancestry feat.",
      },
      AncientElf: {
        Prompt: "Select a multiclass dedication feat.",
      },
      AnimalForm: {
        Ape: "Ape",
        Bat: "Bat",
        Bear: "Bear",
        Bull: "Bull",
        Canine: "Canine",
        Cat: "Cat",
        Centipede: "Centipede",
        Deer: "Deer",
        Frog: "Frog",
        Shark: "Shark",
        Snake: "Snake",
        Toad: "Toad",
        Wolf: "Wolf",
      },
      AnimalSkin: {
        BracersOfArmor: "Animal Skin w/ Bracers of Armor",
        ExplorersClothing: "Animal Skin w/ Explorer's Clothing",
        MageArmor: "Animal Skin w/ Mage Armor",
      },
      AquaticCombat: {
        FireNote: "You can't cast fire spells or use actions with the fire trait underwater.",
        RangedNote:
          "Ranged attacks that deal bludgeoning or slashing damage automatically miss if the attacker or target is underwater, and piercing ranged attacks made by an underwater creature or against an underwater target have their range increments halved.",
      },
      ArtokussFire: {
        Note: "Your Alchemist's Fire deals an additional 1d4 persistent fire damage, and creatures must make two succesful flat checks to end the condition (or one check, if they had assisted recovery that reduces the flat check to DC 10). Your enhanced fire burns underwater, and water does not help to end the persistent damage.",
      },
      Automaton: {
        ArcaneLocomotion: {
          Prompt: "Select a movement type.",
        },
        AutomatonArmament: {
          Prompt: "Select an unarmed strike.",
        },
        CoreCannon: {
          AttackNote: "You need to manually apply your highest Potency rune to this attack roll.",
          CriticalHit:
            "On a critical hit, the target takes [[/r 10[persistent,fire]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent Fire Damage}. Your core cannon does not add critical specialization effects.</p>",
        },
        EnergyBeam: {
          CriticalHit:
            "On a critical hit, the target takes persistent fire damage equal to the number of weapon damage dice. Your eye beam does not add critical specialization effects.",
        },
        EnhanceableFeats: {
          ArcaneCamouflage: "Arcane Camouflage",
          ArcaneCommunication: "Arcane Communication",
          ArcaneEye: "Arcane Eye",
          ArcaneLocomotion: "Arcane Locomotion",
          ArcanePropulsion: "Arcane Propulsion",
          ArcaneSafeguards: "Arcane Safeguards",
          ArcaneSlam: "Arcane Slam",
          AstralBlink: "Astral Blink",
          AutomatonArmament: "Automaton Armament",
          AutomatonLore: "Automaton Lore",
          CoreAttunement: "Core Attunement",
          CoreRejuvenation: "Core Rejuvenation",
          EnergyBeam: "Energy Beam",
          EnlargedChassis: "Enlarged Chassis",
          IntegratedArmament: "Integrated Armament",
          LesserAugmentation: "Lesser Augmentation",
          MagicalResistance: "Magical Resistance",
          RainOfBolts: "Rain of Bolts",
          ReinforcedChassis: "Reinforced Chassis",
        },
        Enhancement: {
          ArcaneLocomotionClimbSpeed: "Gain a climb speed",
          ArcaneLocomotionIncreaseSpeed: "Increase speeds",
          ArcaneLocomotionSwimSpeed: "Gain a swim speed",
          AugmentationPrompt: "Select a feat to augment.",
          EnhancementPrompt: "Select an enhancement.",
          MagicalResistanceAll: "Gain additional resistances",
          MagicalResistanceIncrease: "Enhance existing resistance",
        },
        HunterAutomaton: {
          ToggleLabel: "Running on all fours",
        },
        MagicalResistance: {
          Prompt: "Select a type of energy damage.",
        },
      },
      Barbarian: {
        Animal: {
          Ape: "Ape",
          Bear: "Bear",
          Bull: "Bull",
          Cat: "Cat",
          Deer: "Deer",
          Frog: "Frog",
          Prompt: "Select an animal.",
          Shark: "Shark",
          Snake: "Snake",
          Wolf: "Wolf",
        },
        Elemental: {
          ElementalEvolutionLabel: "Elemental Rage Damage",
        },
        Dragon: {
          NormalRageDamage: "Deal normal rage damage",
          ToggleLabel: "Draconic Rage",
          Prompt: "Select a dragon.",
        },
        Giant: {
          Prompt: "Select an energy type for Raging Resistance.",
        },
        Instinct: {
          Drops: "Level 1 barbarian class feature",
          Prompt: "Select an instinct.",
        },
        InuredToAlchemy: {
          CriticalSuccess: "Each critical success reduces the stage by 3 for an alchemical poison, drug, or addiction.",
          CriticalSuccessVirulent: "Each critical success reduces the stage by 2 for a virulent alchemical poison, drug, or addiction.",
          Success: "Each of your successful saving throws against an alchemical poison, a drug, or an addiction reduces the stage by 2",
          SuccessVirulent: "Each of your successful saving throws against a virulent alchemical poison, a drug, or an addiction reduces the stage by 1",
        },
        Spirit: {
          NegativeDamage: "Negative Damage",
          PositiveDamage: "Positive Damage",
          ToggleLabel: "Spirit Rage",
        },
        Superstition: {
          TargetingCaster: "Target is a caster",
        },
      },
      Bard: {
        Muse: {
          Enigma: "Enigma",
          Maestro: "Maestro",
          Polymath: "Polymath",
          Prompt: "Select a muse.",
          Warrior: "Warrior",
        },
      },
      Beastkin: {
        AnimalSenses: {
          Prompt: "Select a sense available to your inherent animal.",
        },
        Senses: {
          EcholocationImprecise: "Echolocation (Imprecise) 30 feet",
          EcholocationPrecise: "Improve your echolocation to precise",
          Scent: "Scent (Imprecise) 30 feet",
          TremorsenseImprecise: "Tremorsense (Imprecise) 30 feet",
          TremorsensePrecise: "Improve your tremorsense to precise",
        },
      },
      BlessingOfDefiance: {
        Prompt: "Choose one saving throw.",
      },
      BloodlettingKukri: {
        Note: "If the target didn't already have persistent bleed damage when you scored the critical hit, you also gain [[/r 1d8]] temporary Hit Points.",
      },
      BonusLabel: {
        NegativeOne: "-1",
        PlusFour: "+4",
        PlusOne: "+1",
        PlusThree: "+3",
        PlusTwo: "+2",
      },
      BottledOmen: {
        Label: "Use your omen",
      },
      BountyHunterDedication: {
        GatherInfoHuntedPrey: "To Gather Information regarding hunted prey",
      },
      BrevicNoble: {
        Garess: "Garess",
        Lebeda: "Lebeda",
        Lodovka: "Lodovka",
        Medvyed: "Medvyed",
        Orlovsky: "Orlovsky",
        Prompt: "Select a Brevic lineage.",
        Surtova: "Surtova",
      },
      CatharticMage: {
        EmotionalState: {
          Prompt: "Select a catharsis emotion.",
        },
        Love: {
          Toggle: "You cast a spell to benefit your emotional focus",
        },
      },
      CelestialResistance: {
        Prompt: "Select a type of energy associated with your bloodline.",
      },
      Champion: {
        BladeAllyRune: "Select a property rune for your blade ally.",
        DivineSmite: {
          Label: "Divine Smite",
        },
        EvilDamage: "Evil Damage",
        NegativeDamage: "Negative Damage",
        TargetReaction: "Target triggered your champion reaction",
      },
      ChromaticArmor: {
        Acid: "Orange (Acid)",
        Electricity: "Yellow (Electricity)",
        Fire: "Red (Fire)",
        Force: "Violet (Force)",
        Mental: "Indigo (Mental)",
        Poison: "Green (Poison)",
        Prompt: "Select a color.",
        Sonic: "Blue (Sonic)",
      },
      Chronoskimmer: {
        DestabilizeFailureLabel: "Destabilize timestream (Failure)",
        DestabilizeSuccessLabel: "Destabilize timestream (Success)",
        StabilizeLabel: "Stabilize timestream",
      },
      ClanWeapon: {
        ClanPistol: "Clan Pistol (Ancestry Feat)",
        Label: "Clan Weapon",
        Prompt: "Select a clan weapon.",
      },
      Cleric: {
        Doctrine: {
          AllowedDrops: "1st-level cleric class feature",
          Prompt: "Select a doctrine.",
        },
        ReplenishmentOfWar: {
          Note: "When you damage a creature with a Strike using your deity's favored weapon, you gain a number of temporary Hit Points equal to half your level, or equal to your level if the Strike was a critical hit. @UUID[Compendium.pf2e.feat-effects.Item.BJc494USeyM011p3]{Effect: Replenishment of War}",
        },
        SharedReplenishment: {
          Note: "You can grant the temporary Hit Points from Replenishment of War to an ally within 10 feet instead of gaining them yourself.",
        },
      },
      Conditions: {
        Sickened: {
          Reduce: {
            criticalSuccess:
              "When you critically succeed at a Fortitude save to reduce your @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened} value, you reduce it by 3.",
            success: "When you succeed at a Fortitude save to reduce your @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened} value, you reduce it by 2.",
          },
        },
      },
      Conrasu: {
        CeremonyEvenedHand: {
          Prompt: "Select an unarmed attack.",
        },
        RiteOfPassage: {
          Note: "When you use the Acrobatics skill to Balance on narrow surfaces or uneven ground within forests, and you roll a success, you get a critical success instead.",
        },
      },
      Convergent: {
        Tactics: "An ally with Convergent Tactics is within reach of the target.",
      },
      CorrosiveBody: {
        Note: "The first time each round that you deal acid damage to a creature in this way, you gain [[/r 3d6 #Temporary Hit Points]]{3d6 temporary Hit Points}",
        Note9th: "The first time each round that you deal acid damage to a creature in this way, you gain [[/r 5d6 #Temporary Hit Points]]{5d6 temporary Hit Points}",
      },
      Cover: {
        Greater: "Greater",
        Lesser: "Lesser",
        Prompt: "Select a level of cover.",
        Prone: "Prone",
        Standard: "Standard",
      },
      CriticalDeck: {
        Effect: {
          Label: "Critical Effect",
        },
      },
      DancingShield: {
        Prompt: "Select the shield's AC bonus.",
      },
      DedicationCraftingEntry: {
        FireworkTechnician: "Firework Technician",
        Herbalist: "Herbalist",
        Poisoner: "Poisoner",
        Snarecrafter: "Snarecrafter",
        TalismanDabbler: "Talisman Dabbler",
      },
      Defending: {
        FireSpell: "Defending against a fire spell",
      },
      DeityAndCause: {
        AllowedDrops: "1st-level champion class feature",
        Prompt: "Select a champion's cause.",
      },
      DeviantAbilities: {
        AwakenedPower: {
          AwakenedLabel: "Awakened",
          BlastingBeamsAgile: "Blasting Beams: Agile Strikes",
          BlastingBeamsLine: "Blasting Beams: 60-Foot Line",
          BoneSpikesPoison: "Bone Spikes: Poisoned",
          BoneSpikesReach: "Bone Spikes: Reach",
          ConsumeEnergyRange: "Consume Energy: Enhance Range",
          ConsumeEnergyStrikes: "Consume Energy: Enhance Strikes",
          DistantWanderingFly: "Distant Wandering: Flight",
          DistantWanderingQuick: "Distant Wandering: Quickened",
          EerieFlickerCompress: "Eerie Flicker: Compress Flicker",
          EerieFlickerTerrify: "Eerie Flicker: Terrifying Form",
          EnervatingWailEnfeebling: "Enervating Wail: Enfeebling Wail",
          EnervatingWailSilent: "Enervating Wail: Silent Wail",
          GhostlyGraspGrab: "Ghostly Grasp: Grab",
          GhostlyGraspPush: "Ghostly Grasp: Push",
          HighSpeedRegenerationRecovery: "High-Speed Regeneration: Emergency Regeneration",
          HighSpeedRegenerationSpeed: "High-Speed Regeneration: Speed Boost",
          Prompt: "Select an awakening for a deviant feat.",
          PropulsiveLeapSpeed: "Propulsive Leap: Speed Increase",
          PropulsiveLeapWeapon: "Propulsive Leap: Makeshift Weapon",
          StormingBreathEscape: "Storming Breath: Speedy Escape",
          StormingBreathProne: "Storming Breath: Knock Prone",
          TectonicStompStone: "Tectonic Stomp: Stone Cover",
          TectonicStompStun: "Tectonic Stomp: Stun Foes",
          TitanSwingBleed: "Titan Swing: Bleed",
          TitanSwingProne: "Titan Swing: Knockback",
        },
        BoneSpikes: {
          ReachLabel: "Extend bone spikes",
          StrikeLabel: "Bone Spike",
        },
        Dragon: {
          EnergyPrompt: "Select an energy associated with your dragon abilities.",
        },
        Label: "Deviant Ability",
        TitanSwing: {
          NoteFifteenFeet: "The target is pushed back 15 feet.",
          NoteFiveFeet: "The target is pushed back 5 feet.",
          NoteProne: "You push the target back double the normal distance and knock it @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          NoteTenFeet: "The target is pushed back 10 feet.",
        },
      },
      Dhampir: {
        Adhyabhau: {
          SaveNote: "When you roll a success on a Will save against an emotion effect, you get a critical success instead.",
        },
        BloodlettingFangs: {
          AttackNote: "Your fangs Strike deals an additional [[/r 1d4[bleed]]] on a critical hit.",
        },
      },
      DivineAlly: {
        AllowedDrops: "champion class feature",
        Prompt: "Select a divine ally.",
      },
      DragonDisciple: {
        DragonChoice: {
          Black: "Black Dragon",
          Blue: "Blue Dragon",
          Brass: "Brass Dragon",
          Brine: "Brine Dragon",
          Bronze: "Bronze Dragon",
          Cloud: "Cloud Dragon",
          Copper: "Copper Dragon",
          Crystal: "Crystal Dragon",
          Forest: "Forest Dragon",
          Gold: "Gold Dragon",
          Green: "Green Dragon",
          Magma: "Magma Dragon",
          Red: "Red Dragon",
          Sea: "Sea Dragon",
          Silver: "Silver Dragon",
          Sky: "Sky Dragon",
          Sovereign: "Sovereign Dragon",
          Umbral: "Umbral Dragon",
          Underworld: "Underworld Dragon",
          White: "White Dragon",
        },
        Prompt: "Select a dragon.",
        ScalesOfTheDragon: {
          BracersOfArmor: "Scales of the Dragon w/ Bracers of Armor",
          ExplorersClothing: "Scales of the Dragon w/ Explorer's Clothing",
          MageArmor: "Scales of the Dragon w/ Mage Armor",
        },
      },
      Druid: {
        DruidicOrder: {
          Prompt: "Select a druidic order.",
        },
      },
      Dwarf: {
        DeathWardenDwarf: {
          Note: "When you roll a success against a necromancy effect, you get a critical success instead.",
        },
        DwarvenClan: {
          Aringeld: "Clan Aringeld",
          Breakiron: "Clan Breakiron",
          Firecask: "Clan Firecask",
          Gelderon: "Clan Gelderon",
          Grimmark: "Clan Grimmark",
          Ironfist: "Clan Ironfist",
          Molgrade: "Clan Molgrade",
          Oriddus: "Clan Oriddus",
          Prompt: "Select a dwarven clan.",
          Runebinder: "Clan Runebinder",
          Stonefist: "Clan Stonefist",
          Tolorr: "Clan Tolorr",
          Vanderholl: "Clan Vanderholl",
        },
        ElementalHeart: {
          Prompt: "Pick the type of your Elemental Heart",
        },
        ForgeBlessedShot: {
          Note: "Ignore your target's @UUID[Compendium.pf2e.conditionitems.Item.DmAIPqOBomZ7H95W]{Concealed} condition, as well as your target's lesser, standard, and greater cover.",
        },
        KneelForNoGod: {
          Note: "When you roll a success against a divine effect, you get a critical success instead.",
        },
        RockRunner: {
          Note: "When you use the Acrobatics skill to Balance on narrow surfaces or uneven ground made of stone or earth, you aren't off-guard, and when you roll a success at one of these Acrobatics checks, you get a critical success instead.",
        },
        SparkFist: {
          Note: "Each time you succeed on a fist Strike, you take [[/r (1+@weapon.system.runes.striking)[fire]]]{fire damage}.",
        },
        TombWatchersGlare: {
          Note: "When you critically hit an undead creature, they are @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1} for 1 round",
        },
        VengefulHatred: {
          Prompt: "Choose an ancestral foe.",
        },
      },
      EldritchArcher: {
        ArrowOfDeath: {
          Note: "On a critical hit, the target must also succeed at a @Check[type:fortitude|dc:resolve(@actor.attributes.classOrSpellDC.value)|traits:death,incapacitation] saving throw, or be immediately slain.",
        },
        EnchantingArrow: {
          Note: "On a critical hit, the target also becomes @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 1}.",
        },
      },
      Elf: {
        Atavism: {
          Prompt: "Select an elf heritage.",
        },
        BrightnessSeeker: {
          Label: "Call Upon the Brightness",
          Prompt: "Select the outcome of your Augury.",
          Weal: "Weal",
          WealAndWoe: "Weal and Woe",
          Woe: "Woe",
        },
        DemonbaneWarrior: {
          Note: "If your actions force a demon to take damage from its sin vulnerability, increase that damage by [[/r 2]]",
        },
        UnwaveringMien: {
          Note: "Treat your saving throws against effects that would cause you to fall asleep as one degree of success better.",
        },
        Woodcraft: {
          Note: "When in a forest or jungle environment, if you roll a critical failure on a Survival skill check to Sense Direction, Subsist, or Cover Tracks, you get a failure instead, and if you roll a success, you get a critical success instead.",
        },
      },
      Equipment: {
        BoastfulHunter: {
          BoredLabel: "The Boastful Hunter is Bored",
          InsultedLabel: "The Boastful Hunter is Insulted",
          MisfireNote: "All attacks with an insulted <em>boastful hunter</em> incur a @Check[type:flat|dc:5] misfire chance until the weapon is appeased.",
        },
        BravosBrew: {
          Greater: {
            FearLabel: "Greater Bravo's Brew (Vs. Fear)",
          },
          Lesser: {
            FearLabel: "Lesser Bravo's Brew (Vs. Fear)",
          },
          Moderate: {
            FearLabel: "Moderate Bravo's Brew (Vs. Fear)",
          },
        },
        DeckOfDestiny: {
          MatchingSuitPrompt: "Is the drawn card's suit related the check?",
          WealOrWoePrompt: "Select Weal or Woe.",
        },
        EagleEyeElixir: {
          Greater: {
            SecretLabel: "Greater Eagle Eye Elixir (To Find Secret Doors or Traps)",
          },
          Lesser: {
            SecretLabel: "Lesser Eagle Eye Elixir (To Find Secret Doors or Traps)",
          },
          Major: {
            SecretLabel: "Major Eagle Eye Elixir (To Find Secret Doors or Traps)",
          },
          Moderate: {
            SecretLabel: "Moderate Eagle Eye Elixir (To Find Secret Doors or Traps)",
          },
        },
        NosoiCharm: {
          PerformanceLabel: "Nosoi Charm (Play an instrument, orate or sing)",
          RequestLabel: "Nosoi Charm (Request)",
        },
        PhantomShroud: {
          StrikeLabel: "Ghostly Hand",
        },
        ScapularOfShields: {
          CriticalImmunityLabel: "Activate Scapular of Shields to gain critical immunity.",
          ResistAllLabel: "Activate Scapular of Shields to gain resistance to all damage.",
        },
      },
      ExemplaryFinisher: {
        Battledancer: "You can Step as a free action immediately after the finisher.",
        Braggart: "If the foe was temporarily immune to your @UUID[Compendium.pf2e.actionspf2e.Item.2u915NdUyQan6uKF]{Demoralize}, their temporary immunity ends.",
        Fencer: "The foe is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until your next turn.",
        Name: "Exemplary Finisher",
        Wit: "The foe takes a -2 circumstance penalty to attack rolls against you until the start of your next turn.",
      },
      FanesFourberie: {
        Prompt: "Treat Cards as darts or daggers?",
      },
      Fetchling: {
        DeepFetchling: {
          Prompt: "Select a type of energy to resist.",
        },
      },
      Fighter: {
        DazingBlow: {
          Note: "If the Strike hits, the creature must attempt a @Check[type:fortitude|dc:resolve(@actor.attributes.classDC.value)|traits:incapacitation] save against your class DC; this is an incapacitation effect.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature is unaffected.</p>\n<p><strong>Success</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 1}.</p>\n<p><strong>Failure</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 2}.</p>\n<p><strong>Critical Failure</strong> The creature is @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 3}.",
        },
        DoubleSlice: {
          SecondAttackLabel: "Double Slice Second Attack",
        },
      },
      FighterWeaponMasteryLegend: {
        Advanced: {
          axe: "Advanced Axes",
          bomb: "Advanced Bombs",
          bow: "Advanced Bows",
          brawling: "Advanced Brawling",
          club: "Advanced Clubs",
          dart: "Advanced Darts",
          firearm: "Advanced Firearms",
          flail: "Advanced Flails",
          hammer: "Advanced Hammers",
          knife: "Advanced Knives",
          pick: "Advanced Picks",
          polearm: "Advanced Polearms",
          shield: "Advanced Shields",
          sling: "Advanced Slings",
          spear: "Advanced Spears",
          sword: "Advanced Swords",
        },
        SimpleMartial: {
          axe: "Simple & Martial Axes",
          bomb: "Simple & Martial Bombs",
          bow: "Simple & Martial Bows",
          brawling: "Simple & Martial Brawling",
          club: "Simple & Martial Clubs",
          dart: "Simple & Martial Darts",
          firearm: "Simple & Martial Firearms",
          flail: "Simple & Martial Flails",
          hammer: "Simple & Martial Hammers",
          knife: "Simple & Martial Knives",
          pick: "Simple & Martial Picks",
          polearm: "Simple & Martial Polearms",
          shield: "Simple & Martial Shields",
          sling: "Simple & Martial Slings",
          spear: "Simple & Martial Spears",
          sword: "Simple & Martial Swords",
        },
      },
      Fleshwarp: {
        CoatingOfSlime: {
          CriticalHit: "On a critical hit, the target takes [[/r 1d4[persistent,acid]]].",
        },
        LivingWeapon: {
          Prompt: "Select a part of your form to use as a weapon.",
        },
        MutateWeapon: {
          Accuracy: "Gain +1 status bonus to attacks",
          Bonus: "Select a bonus.",
          Reach: "Gain reach 10",
          Target: "Select one of your living weapons.",
        },
      },
      FollowTheExpert: {
        Prompt: "Select expert's proficiency in skill.",
      },
      GameHunterDedication: {
        TargetHuntedPrey: "Target is your Hunted Prey (Animal, Beast, or Dragon Only)",
      },
      Ganzi: {
        Irrepressible: {
          SaveNote: "When you roll a success on a save against an emotion or fear effect, you get a critical success instead.",
        },
      },
      GeneralTraining: {
        Prompt: "Select a 1st-level general feat.",
      },
      Ghoul: {
        FullySatiated: "Fully Satiated",
        Satiated: "Satiated",
        SickeningBite: {
          criticalSuccess:
            "When you critically hit a creature with your jaws, the creature is @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}. This is a disease effect.",
          success: "You can end your satiation to make the target @UUID[Compendium.pf2e.conditionitems.Item.fesd1n5eVhpCSS18]{Sickened 1}",
        },
      },
      Gnome: {
        GrimInsight: {
          SaveNote:
            "When you roll a success on a saving throw against a fear effect, you get a critical success instead, and the source of the fear effect is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} to you until the end of your next turn.",
        },
      },
      Goblin: {
        ChosenOfLamashtu: {
          Prompt: "Select a goblin heritage.",
        },
        CityScavenger: {
          EarnIncome: "City Scavenger - Earn Income",
        },
        ExtraSquishy: {
          Note: "If you roll a success to Squeeze, you get a critical success instead.",
        },
        RecklessAbandon: {
          Note: "If you roll a failure or critical failure on a saving throw against a harmful effect, you get a success instead.",
        },
        TorchGoblin: {
          Note: "As long as you are suffering persistent fire damage, all your melee attacks against adjacent creatures deal an additional [[/r 1[fire]]]{1 Fire Damage} per weapon damage die.",
        },
        ScaldingSpit: {
          BoilingSpit: "Boiling Spit",
        },
      },
      GoldenBladeOfMzali: {
        ElementalFormLabel: "You have cast elemental form using the Golden Blade of Mzali",
        LitLabel: "Golden Blade of Mzali is lit",
        PersistentDamageNote:
          "Unlike normal when taking two types of persistent damage, a creature needs only a single successful flat check to remove both the fire and bleed damage.",
      },
      Gunslinger: {
        Way: {
          Prompt: "Select a way.",
          Spellshot: "Way of the Spellshot (Archetype)",
        },
      },
      HalfElf: {
        EarnedGlory: {
          Note: "If you roll a critical failure when you Make an Impression on an elf, you get a failure instead.",
        },
      },
      Halfling: {
        Innocuous: {
          Note: "If you fail a Deception check to Create a Diversion, humanoid creatures aren't aware that you were trying to trick them unless you get a critical failure on your roll.",
        },
        KeenEyes: {
          Label: "Seek Hidden or Undetected Creature Within 30 Feet",
        },
        SureFeet: {
          BalanceNote: "If you roll a success on an Acrobatics check to Balance, you get a critical success instead. You're not off-guard when you attempt to Balance.",
          ClimbNote: "If you roll a success on an Athletics check to Climb, you get a critical success instead. You're not off-guard when you attempt to Climb.",
        },
      },
      HarrowChosen: {
        Misaligned: "Misaligned",
        PartialMatch: "Partial Match",
        Prompt: "Does your card match your alignment?",
        TrueMatch: "True Match",
        Unmatched: "Unmatched",
      },
      HarrowCourt: {
        Fiend: {
          ToggleLabel: "Repeating a non-strike action",
        },
        BooksSuitPrompt: "Was the drawn card from Books?",
      },
      HarrowDeck: {
        HarrowSuits: {
          Books: "Books",
          Crowns: "Crowns",
          Hammers: "Hammers",
          Keys: "Keys",
          Shields: "Shields",
          Stars: "Stars",
        },
        Prompt: "Select a harrow suit.",
      },
      Hobgoblin: {
        AgonizingRebuke: {
          Note: "When you successfully Demoralize a foe, that foe takes [[/r 1d4[mental]]]{1d4 mental damage} at the start of each of its turns as long as it remains Frightened and continues to engage in combat with you. If you have master proficiency in Intimidation, the damage increases to [[/r 2d4[mental]]]{2d4}, and if you have legendary proficiency, the damage increases to [[/r 3d4[mental]]]{3d4}.",
        },
        CantorianReinforcement: {
          Note: "When you succeed at a saving throw against a disease or poison, you reduce the stage by 2 (or 1 for a virulent disease or poison), and when you critically succeed, you reduce the stage by 3 (or 2 for a virulent disease or poison).",
        },
        WarConditioning: {
          Prompt: "Select a movement type.",
        },
      },
      HouseOfPerfection: {
        Label: "House of Perfection",
        Prompt: "Select a House of Perfection.",
        UnblinkingFlame: "Unblinking Flame",
        UnbreakingWaves: "Unbreaking Waves",
        UnfoldingWind: "Unfolding Wind",
        UntwistingIron: "Untwisting Iron",
      },
      Human: {
        SaocAstrology: {
          Prompt: "Select the circumstance penalty or bonus you obtained when using the Saoc Astrology action.",
        },
        VikingShieldbearer: {
          Prompt: "Select a weapon to become trained in.",
        },
        WitchWarden: {
          SaveNote: " If you roll a success on a saving throw against a curse or a spell cast by a witch or hag, you get a critical success instead.",
        },
      },
      HuntPrey: {
        FirstHitDamage: "First Hit on Hunted Prey",
        FirstHitSwitch: "Hitting Hunted Prey for the First Time This Round",
        SeekHuntedPrey: "To Seek hunted prey",
        TargetHuntedPrey: "Target is your Hunted Prey",
        TrackHuntedPrey: "To Track hunted prey",
      },
      Ifrit: {
        Lavasoul: {
          MagmaSpike: "Magma Spike",
          MagmaSpikeCriticalSpecialization:
            "Instead of the normal critical specialization effect, the target takes [[/r 1d6[persistent,fire]]] damage; you gain a bonus on this persistent damage equal to your item bonus to attack rolls on unarmed attacks.",
        },
      },
      Inventor: {
        Innovation: {
          Armor: {
            AllowedDrops: "level-zero unique armor",
            Prompt: "Select an armor innovation.",
          },
          Construct: {
            Prompt: "Select a construct innovation.",
          },
          Prompt: "Select an innovation.",
          Weapon: {
            Prompt: "Select a weapon innovation.",
          },
        },
        Modification: {
          Breakthrough: {
            AllowedDrops: "7th-level or lower inventor class feature",
            Prompt: "Select a breakthrough modification.",
          },
          Initial: {
            AllowedDrops: "1st-level inventor class feature",
            Prompt: "Select an initial modification.",
          },
          InnovationCollapsed: "Innovation Collapsed",
          NonlethalBluntShot: "Nonlethal Blunt Shot",
          NonlethalModularHead: "Nonlethal Modular Head",
          NonlethalPacificationTools: "Nonlethal Pacification Tools",
        },
      },
      Investigator: {
        Methodology: {
          Prompt: "Select a methodology.",
        },
        PursueALead: {
          Label: "Investigating a designated subject with Pursue a Lead",
        },
      },
      Kineticist: {
        Impulse: {
          ElementalBlast: {
            BlastLabels: {
              AirCold: "Cold (Air)",
              AirElectricity: "Electricity (Air)",
              AirSlashing: "Slashing (Air)",
              EarthBludgeoning: "Bludgeoning (Earth)",
              EarthPiercing: "Piercing (Earth)",
              EarthPoison: "Poison (Earth)",
              FireCold: "Cold (Fire)",
              MetalPiercing: "Piercing (Metal)",
              MetalSlashing: "Slashing (Metal)",
              MetalElectricity: "Electricity (Metal)",
              WaterBludgeoning: "Bludgeoning (Water)",
              WaterCold: "Cold (Water)",
              WaterAcid: "Acid (Water)",
              WoodBludgeoning: "Bludgeoning (Wood)",
              WoodPoison: "Poison (Wood)",
              WoodVitality: "Vitality (Wood)",
            },
          },
          Prompt: "Select an Impulse.",
        },
        KineticGate: {
          DualGate: "Dual Gate",
          ExpandThePortal: "Expand the Portal",
          ForkThePath: "Fork the Path",
          Junction: {
            AuraJunction: "Aura Junction",
            CriticalBlast: "Critical Blast",
            ElementalResistance: "Elemental Resistance",
            ImpulseJunction: "Impulse Junction",
            SkillJunction: "Skill Junction",
          },
          Prompt: {
            AuraSize: "Select a radius for your kinetic aura.",
            Element: "Select an element.",
            ExpandElement: "Select an element to expand.",
            Gate: "Select a kinetic gate.",
            Impulse: "Select an impulse feat.",
            Junction: "Select a gate junction.",
            Threshold: "Select a gate's threshold.",
          },
          SingleGate: "Single Gate",
        },
      },
      Kobold: {
        DragonbloodParagon: {
          Dracomancer: "Dracomancer",
          KoboldBreath: "Kobold Breath",
          StrongjawKobold: "Strongjaw Kobold",
          VenomtailKobold: "Venomtail Kobold",
        },
        DragonsPresence: {
          Note: "When you roll a success on a saving throw against a fear effect, you get a critical success instead. When you roll a failure against a fear effect, you get a critical failure instead.",
        },
      },
      Label: {
        DamageType: "Damage Type",
        Enter: "Enter",
        Exit: "Exit",
        ResistanceType: "Resistance Type",
        SecondAttempt: "Second Attempt",
        ThirdAttempt: "Third Attempt",
      },
      Leshy: {
        Seedpod: {
          Note: "On a critical hit, a seedpod bursts, issuing forth a tangle of vegetation that imposes a -10-foot circumstance penalty on the target's Speed for 1 round. @UUID[Compendium.pf2e.feat-effects.Item.wQDHpOKY3GZqvS2v]{Effect: Seedpod}",
        },
        ThornedSeedpod: {
          Note: "When you critically succeed at a seedpod Strike, vines twist and stab your foe, dealing [[/r 1d4[persistent,piercing]]]",
        },
      },
      Lich: {
        HandOfTheLich: {
          Note: "The creature is @UUID[Compendium.pf2e.conditionitems.Item.xYTAsEpcJE1Ccni3]{Slowed 1} until the end of your next turn unless it succeeds at a @Check[type:fortitude|dc:resolve(@actor.attributes.spellDC.value)] save against your spell DC.",
        },
      },
      LitCandle: "Candle is lit",
      LitCandlecap: "Candlecap is lit",
      LitFirePoi: "Fire Poi is lit",
      LitTorch: "Torch is lit",
      Lizardfolk: {
        GuidedByTheStars: {
          Prompt: "Select saving throw or skill.",
        },
        ParthenogenicHatchling: {
          Note: "Each of your successful saving throws against a disease reduces its stage by 2, or by 1 for a virulent disease. Each critical success against an ongoing disease reduces its stage by 3, or by 2 for a virulent disease.",
        },
      },
      MagicalExperiment: {
        EnhancedSenses: "Enhanced Senses",
        ResistantSkin: "Resistant Skin",
        TouchTelepathy: "Touch Telepathy",
      },
      Magus: {
        ArcaneCascade: {
          WeaponDamage: "Weapon Damage",
        },
        HybridStudy: {
          Prompt: "Select a hybrid study.",
        },
        SparklingTarge: {
          DefendingLabel: "Defending against magic",
        },
      },
      MarkForDeath: {
        DeceiveMark: "To use Deception to Feint your Mark",
        SeekMark: "To Seek your Mark",
        TargetMark: "Target is Marked for Death",
      },
      Marshal: {
        DreadMarshalStance: {
          Title: "Dread Marshal Aura",
          Note: "When you critically hit an enemy with a Strike, that enemy is @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1}.",
        },
      },
      MartialProficiency: {
        AdvancedAzarketiWeapons: "Advanced Azarketi Weapons",
        AdvancedCatfolkWeapons: "Advanced Catfolk Weapons",
        AdvancedConrasuWeapons: "Advanced Conrasu Weapons",
        AdvancedDwarfWeapons: "Advanced Dwarven Weapons",
        AdvancedElfWeapons: "Advanced Elven Weapons",
        AdvancedFirearmsCrossbows: "Advanced Firearms & Crossbows",
        AdvancedGeniekinWeapons: "Advanced Geniekin Weapons",
        AdvancedGhoranWeapons: "Advanced Ghoran Weapons",
        AdvancedGnollWeapons: "Advanced Gnoll Weapons",
        AdvancedGnomeWeapons: "Advanced Gnome Weapons",
        AdvancedGoblinWeapons: "Advanced Goblin Weapons",
        AdvancedGrippliWeapons: "Advanced Grippli Weapons",
        AdvancedGroup: {
          axe: "Advanced Axes",
          bomb: "Advanced Bombs",
          bow: "Advanced Bows",
          brawling: "Advanced Brawling",
          club: "Advanced Clubs",
          dart: "Advanced Darts",
          firearm: "Advanced Firearms",
          flail: "Advanced Flails",
          hammer: "Advanced Hammers",
          knife: "Advanced Knives",
          pick: "Advanced Picks",
          polearm: "Advanced Polearms",
          shield: "Advanced Shields",
          sling: "Advanced Slings",
          spear: "Advanced Spears",
          sword: "Advanced Swords",
        },
        AdvancedHalflingWeapons: "Advanced Halfling Weapons",
        AdvancedHobgoblinWeapons: "Advanced Hobgoblin Weapons",
        AdvancedKoboldWeapons: "Advanced Kobold Weapons",
        AdvancedOrcWeapons: "Advanced Orc Weapons",
        AdvancedTenguWeapons: "Advanced Tengu Weapons",
        AdvancedVanaraWeapons: "Advanced Vanara Weapons",
        AdvancedVishkanyaWeapons: "Advanced Vishkanya Weapons",
        MartialAzarketiWeapons: "Martial Azarketi Weapons",
        MartialBombsFirearms: "Martial Bombs & Firearms",
        MartialCatfolkWeapons: "Martial Catfolk Weapons",
        MartialConrasuWeapons: "Martial Conrasu Weapons",
        MartialDwarfWeapons: "Martial Dwarven Weapons",
        MartialElfWeapons: "Martial Elven Weapons",
        MartialFirearmsCrossbows: "Martial Firearms & Crossbows",
        MartialGeniekinWeapons: "Martial Geniekin Weapons",
        MartialGhoranWeapons: "Martial Ghoran Weapons",
        MartialGnollWeapons: "Martial Gnoll Weapons",
        MartialGnomeWeapons: "Martial Gnome Weapons",
        MartialGoblinWeapons: "Martial Goblin Weapons",
        MartialGrippliWeapons: "Martial Grippli Weapons",
        MartialGroup: {
          axe: "Martial Axes",
          bomb: "Martial Bombs",
          bow: "Martial Bows",
          brawling: "Martial Brawling",
          club: "Martial Clubs",
          dart: "Martial Darts",
          firearm: "Martial Firearms",
          flail: "Martial Flails",
          hammer: "Martial Hammers",
          knife: "Martial Knives",
          pick: "Martial Picks",
          polearm: "Martial Polearms",
          shield: "Martial Shields",
          sling: "Martial Slings",
          spear: "Martial Spears",
          sword: "Martial Swords",
        },
        MartialHalflingWeapons: "Martial Halfling Weapons",
        MartialHobgoblinWeapons: "Martial Hobgoblin Weapons",
        MartialKoboldWeapons: "Martial Kobold Weapons",
        MartialOrcWeapons: "Martial Orc Weapons",
        MartialTenguWeapons: "Martial Tengu Weapons",
        MartialVanaraWeapons: "Martial Vanara Weapons",
        MartialVishkanyaWeapons: "Martial Vishkanya Weapons",
        MonasticArchery: "Monastic Archery",
        SimpleBombsFirearms: "Simple Bombs & Firearms",
        SimpleFirearmsCrossbows: "Simple Firearms & Crossbows",
        SimpleMartialBows: "Simple & Martial Bows",
        SimpleMartialTwoHandedMeleeWeapons: "Simple & Martial Two-Handed Melee Weapons",
      },
      MechanicalTorch: {
        Label: "Mechanical Torch is lit",
        LitCone: "Cone",
        LitRadius: "Radius",
      },
      Mindmoppet: {
        BrokenShell: "Shell is Broken",
      },
      Monk: {
        DragonRoar: {
          Label: "First attack vs. frightened creature",
        },
        OneInchPunch: {
          ThreeActionLabel: "One Inch Punch (Three Actions)",
          TwoActionLabel: "One Inch Punch (Two Actions)",
        },
        SacredKi: {
          Prompt: "Choose your aligned damage.",
        },
        StunningFist: {
          Note: "The target must succeed at a @Check[type:fortitude|dc:resolve(@actor.system.proficiencies.classDCs.monk.value)|traits:incapacitation|overrideTraits:true] save against your class DC or be @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 1} (or @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 3} on a critical failure).",
        },
        WolfDrag: {
          Note: "If the attack succeeds, you knock the target @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
        },
      },
      MountainStance: {
        BracersOfArmor: "Mountain Stance w/ Bracers of Armor",
        ExplorersClothing: "Mountain Stance w/ Explorer's Clothing",
        MageArmor: "Mountain Stance w/ Mage Armor",
      },
      Multitalented: {
        Prompt: "Select a multiclass dedication feat.",
      },
      Mummy: {
        AccursedTouch: {
          Note: {
            Base: "The creature takes [[/r 2d6[persistent,negative]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent negative Damage}. While the creature has this persistent damage, it's also @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1}.",
            FourteenthLevel:
              "The creature takes [[/r 3d6[persistent,negative]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent negative Damage}. While the creature has this persistent damage, it's also @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1}.",
            TwentiethLevel:
              "The creature takes [[/r 4d6[persistent,negative]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent negative Damage}. While the creature has this persistent damage, it's also @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1}.",
          },
        },
        Terrain: {
          Arctic: "Arctic",
          Desert: "Desert",
          Mountain: "Mountain",
          Prompt: "Select a bound terrain.",
          Swamp: "Swamp",
        },
      },
      Nagaji: {
        VenomSpit: {
          CriticalNote: "The target takes [[/r (1+@weapon.system.runes.striking)[persistent,poison]]]{persistent poison damage} equal to the number of weapon damage dice",
          HoodedNote: "The target is also @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{Dazzled} until the start of your next turn.",
          StrikeLabel: "Venomous Spit",
        },
      },
      Obcisidaemon: {
        ConsumeSoul: {
          EmpowerSpell: "Empower Spell",
          EmpowerWeapon: "Empower Weapon",
          Prompt: "Empower a Spell or Weapon?",
        },
      },
      Oracle: {
        Mystery: {
          Prompt: "Select a mystery.",
        },
      },
      Orc: {
        HoldMark: {
          Axe: "Axe (Axe or Pick).",
          Prompt: "Choose the shape of your hold mark.",
          Shield: "Shield (Hammer or Shield).",
          Torch: "Torch (Bomb or Knife).",
        },
        OrcWarmask: {
          Gods: "The Gods",
          Land: "The Land",
          Magic: "Magic",
          Prompt: "Choose the source of your warmask's power.",
          Unknown: "The Unknown",
        },
      },
      OverwhelmingBlow: {
        CriticalHit: "Critically hit with Overwhelming Blow",
      },
      PackAttack: {
        Label: "Target is Within Range of At Least Two Allies",
      },
      Poppet: {
        WashOut: {
          Note: "Each time you succeed at a Fortitude save against an ongoing poison, you reduce its stage by 2, or by 1 against a virulent poison. Each critical success you achieve against an ongoing poison reduces its stage by 3, or by 2 against a virulent poison.",
        },
      },
      PowderPunchStance: {
        Label: "First melee strike this round",
        Note: "The target is pushed back an additional 5 feet.",
      },
      PreciseStrike: {
        Finisher: "Finisher",
      },
      Prompt: {
        AdvancedMulticlassFeat: "Select a class feat up to half your character level.",
        Alignment: "Select an alignment.",
        CantripOrNonCantrip: "Select cantrip or non-cantrip spell.",
        ClassDCAbilityScore: "Select the class DC's ability score.",
        ConsciousMind: "Select a conscious mind.",
        CreatureSize: "Select a creature size.",
        DamageType: "Select a damage type.",
        DegreeOfSuccess: "Select the degree of success.",
        Deity: "Select a deity.",
        DeitysDomain: "Select a deity's domain.",
        DragonBreathWeapon: "Select a dragon's breath weapon.",
        Element: "Select an element.",
        EnergyType: "Select an energy type.",
        EvolutionFeat: "Select a first evolution feat.",
        Feat: "Select a feat.",
        FirstImplement: "Select a first implement.",
        Lesson: "Select a lesson.",
        LevelOneClassFeat: "Select a 1st-level class feat.",
        LevelOneOrTwoClassFeat: "Select a 1st or 2nd-level class feat.",
        Material: "Select a material.",
        PathToPerfection: "Select a path to perfection.",
        Rune: "Select a Rune.",
        SecondImplement: "Select a second implement.",
        Shillelagh: "Select a club or staff.",
        Skill: "Select a skill.",
        SkillFeat: "Select a skill feat.",
        SubconsciousMind: "Select a subconscious mind.",
        ThirdImplement: "Select a third implement.",
        VersatileTrait: "Select a versatile damage type.",
        UnarmedAttack: "Select an unarmed attack.",
        Weapon: "Select a weapon.",
        WeaponGroup: "Select a weapon group.",
        WeaponOrUnarmed: "Select a weapon or unarmed strike.",
        WildShape: "Select a form effect.",
      },
      Psychic: {
        UnleashPsyche: {
          DamageLabel: "Casting a spell from Psychic Spellcasting",
        },
      },
      Ranger: {
        HamstringingStrike: {
          Note: "If you hit your prey, the creature takes a -5-foot status penalty to Speed. If you critically hit your prey, the creature takes a -10-foot status penalty to Speed.\n@UUID[Compendium.pf2e.feat-effects.Item.ESnzqtwSgahLcxg2]{Effect: Hamstringing Strike}",
          Prompt: "Select a hit result.",
        },
        HuntersEdge: {
          Prompt: "Select a hunter's edge.",
          FirstAttack: "First attack on hunted prey this round",
        },
      },
      Ratfolk: {
        LabRat: {
          Note: "If you roll a success on your saving throw against an elixir or poison, you get a critical success instead.",
        },
        WarrenNavigator: {
          Note: "When you Sense Direction, you get a result one degree of success better than you rolled.",
        },
      },
      RelicGift: {
        DivineRetribution: {
          CriticalSuccess:
            "If the target is evil, it is also @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2} until the start of your next turn on a critical hit.",
          Success: "If the target is evil, it is also @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 1} until the start of your next turn on a hit.",
        },
      },
      Rogue: {
        DistractingFeint: {
          Text: "While a creature is off-guard by your Feint, it also takes a -2 circumstance penalty to Perception checks and Reflex saves. @UUID[Compendium.pf2e.feat-effects.Item.7hRgBo0fRQBxMK7g]{Effect: Distracting Feint}",
        },
        EldritchTrickster: {
          Prompt: "Select a spellcasting multiclass archetype.",
        },
        Racket: {
          Prompt: "Select a racket.",
        },
        TrainSkill: {
          Prompt: "Select a skill to become trained in.",
        },
      },
      SaveSuccessToCriticalSuccess: {
        Fortitude: "When you roll a success on a Fortitude save, you get a critical success instead.",
        Reflex: "When you roll a success on a Reflex save, you get a critical success instead.",
        Will: "When you roll a success on a Will save, you get a critical success instead.",
      },
      ScionOfDomora: {
        GuardiansEmbrace: {
          PhysicalAttackLabel: "Guarding Against a Physical Attack",
          ProtectionLabel: "Gain Resistance to Physical Attack",
        },
        SpiritualFlurryNote: "Targets become @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the end of your current turn.",
      },
      Shisk: {
        PiercingQuills: {
          Note: "Your quills unarmed attack deals @Localize[PF2E.PersistentDamage.Bleed1d4.success] on a critical hit.",
        },
        Quills: "Quills",
      },
      Shoony: {
        EsteemedVisitor: {
          Note: "While you are in a settlement, when you roll a critical failure on a Diplomacy check to Gather Information or Make an Impression, you get a failure instead.",
        },
        FishseekerShoony: {
          Note: "If you roll a success on an attempt to Grab an Edge, you get a critical success instead; if you roll a critical failure, you get a failure instead.",
        },
      },
      SkillMastery: {
        ExpertPrompt: "Select a skill to become expert in.",
        MasterPrompt: "Select a skill to become master in.",
      },
      SmokingSword: {
        StokeFlames: "Stoke Flames",
      },
      SneakAttack: "Sneak Attack",
      SnipersAim: {
        Note: "Ignore the target's Concealed condition.",
      },
      SnipingDuoDedication: {
        Label: "Sniping Duo partner hit target with a strike this round",
      },
      Sorcerer: {
        Bloodline: {
          Prompt: "Select a bloodline.",
        },
      },
      SoulWarden: {
        SafeguardSoul: {
          Label: "Defending against manipulation of your soul",
        },
        SpiralSworn: {
          Label: "Target possesses an imprisoned soul or has created undead",
        },
        UndeadNearby: "Undead Nearby",
      },
      SpecialtyCrafting: {
        Alchemy: "Alchemy",
        Artistry: "Artistry",
        Blacksmithing: "Blacksmithing",
        Bookmaking: "Bookmaking",
        Glassmaking: "Glassmaking",
        Leatherworking: "Leatherworking",
        Pottery: "Pottery",
        Prompt: "Select a specialty.",
        Shipbuilding: "Shipbuilding",
        Stonemasonry: "Stonemasonry",
        Tailoring: "Tailoring",
        Weaving: "Weaving",
        Woodworking: "Woodworking",
      },
      SpellEffectEvolutionSurge: {
        Prompt: "Select an evolution.",
        Sight: "Low-light vision and darkvision",
        Amphibious: "Swim Speed",
        Speed: "+20-foot status bonus to Speed",
        Climb: "Climb Speed",
        Fly: "Fly Speed",
      },
      SpellEffectProtection: {
        Prompt: "Choose which alignment trait you are protecting against.",
      },
      Spellheart: {
        BeastmastersSigil: {
          AdjacentLabel: "Target adjacent to beastmaster's sigil summon",
        },
      },
      SpellmastersResilience: {
        Prompt: "Select a magical tradition to gain resistence in.",
      },
      Sprite: {
        LuminousSprite: {
          Light: "Shed Light",
        },
        SpritesSpark: {
          Draxie: "Euphoric Spark",
          Grig: "Dissonant Note",
          LuminousSprite: "Luminous Spark",
          Melixie: "Sting Shot",
          Nyktera: "Ultrasonic Pulse",
          Pixie: "Pixie Dust",
        },
      },
      Stance: {
        Attack: {
          CobraFang: "Cobra Fang",
          CraneWing: "Crane Wing",
          DragonTail: "Dragon Tail",
          FallingStone: "Falling Stone",
          FireTalon: "Fire Talon",
          FlashingSpark: "Flashing Spark",
          FlowingWave: "Flowing Wave",
          GorillaSlam: "Gorilla Slam",
          IronSweep: "Iron Sweep",
          LashingBranch: "Lashing Branch",
          ShadowGrasp: "Shadow Grasp",
          SkywardSlash: "Skyward Slash",
          StingingLash: "Stinging Lash",
          StumblingSwing: "Stumbling Swing",
          TigerClaw: "Tiger Claw",
          WindCrash: "Wind Crash",
          WolfJaws: "Wolf Jaws",
        },
      },
      SteadyBalance: {
        Note: "If you roll a success using the Balance action, you get a critical success instead.",
      },
      SterlingDynamo: {
        AutomaticPercussive: "Automatic Percussive Striker Dynamo",
        AutomaticPower: "Automatic Power Driver Dynamo",
        Label: "Sterling Dynamo",
        ManualPercussive: "Manual Percussive Striker Dynamo",
        ManualPower: "Manual Power Driver Dynamo",
      },
      SubstituteRoll: {
        Assurance: "Assurance",
        EffectType: "{type} ({substitution})",
      },
      Suli: {
        Dualborn: {
          FirstElement: "Pick your first element.",
          SecondElement: "Pick your second element.",
        },
        ElementalAssault: {
          Prompt: "Select an element.",
        },
      },
      Swashbuckler: {
        Panache: "You gain @UUID[Compendium.pf2e.feat-effects.Item.uBJsxCzNhje8m8jj]{Panache}.",
        Style: {
          Prompt: "Select a style.",
        },
      },
      TOTMToggle: {
        FirstRangeIncrement: "Enable abilities that require a target within the first range increment.",
        Incorporeal: "Enable abilities that require an incorporeal target",
        OffGuard: "Enable abilities that require an off-guard target",
        Undead: "Enable abilities that require an undead target",
        Vampire: "Enable abilities that require a vampire target",
      },
      Target: {
        AgainstDemons: "Against Demons",
        AgainstDevils: "Against Devils",
        AgainstHumanoids: "Against Humanoids",
        Necromancer: "Target is a necromancer",
      },
      Tattoo: {
        WildwoodInk: {
          Greater: {
            InForestLabel: "Wildwood Ink (Greater) (In Forest)",
          },
          Major: {
            InForestLabel: "Wildwood Ink (Major) (In Forest)",
          },
          Normal: {
            InForestLabel: "Wildwood Ink (In Forest)",
          },
        },
      },
      TerrainExpertise: {
        Prompt: "Select a terrain.",
      },
      TerrainStalker: {
        Rubble: "Rubble",
        Snow: "Snow",
        Underbrush: "Underbrush",
      },
      Thaumaturge: {
        Implement: {
          Amulet: "Amulet",
          Bell: "Bell",
          Chalice: "Chalice",
          Lantern: "Lantern",
          Mirror: "Mirror",
          Regalia: "Regalia",
          Tome: "Tome",
          Wand: "Wand",
          Weapon: "Weapon",
        },
        TalismanEsoterica: "Talisman Esoterica",
      },
      ToggleProperty: {
        GourdHead: "Gourd Head: Increase perception DC",
        TagTeam: "Flanking with another member of the Secret Society",
        Triangulate: "Spotter can see target",
      },
      TrapFinder: {
        DefendingLabel: "Trap Finder (defending against traps)",
        SearchLabel: "Trap Finder (searching for traps)",
      },
      TrinityGeodeLabel: "Trinity Geode",
      TwinnedDefense: {
        Prompt: "Are you wielding a parry weapon?",
      },
      TwoHanded: {
        BastardSword: "Use Bastard Sword Two-Handed",
        BattleLute: "Use Battle Lute Two-Handed",
        Broom: "Use Broom Two-Handed",
        Cane: "Use Cane Two-Handed",
        Katana: "Use Katana Two-Handed",
        Khakkhara: "Use Khakkhara Two-Handed",
        ReinforcedStock: "Use Reinforced Stock Two-Handed",
        RhokaSword: "Use Rhoka Sword Two-Handed",
        Staff: "Use Staff Two-Handed",
      },
      UndeadSlayer: {
        SlayersPresence: {
          Note: "The target is @UUID[Compendium.pf2e.conditionitems.Item.sDPxOjQ9kx2RZE8D]{Fleeing} for 1 round.",
        },
      },
      Vampire: {
        ViciousFangs: {
          Note: {
            Base: "Your fangs Strike deals an additional [[/r 1d6[bleed]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent bleed Damage}.",
            FourteenthLevel: "Your fangs Strike deals an additional [[/r 2d6[bleed]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent bleed Damage}.",
            TwentiethLevel: "Your fangs Strike deals an additional [[/r 3d6[bleed]]] @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Persistent bleed Damage}.",
          },
        },
      },
      VirtuosicPerformer: {
        Acting: "Acting",
        Comedy: "Comedy",
        Dance: "Dance",
        Keyboards: "Keyboards",
        Oratory: "Oratory",
        Percussion: "Percussion",
        Prompt: "Select a type of performance.",
        Singing: "Singing",
        Strings: "Strings",
        Winds: "Winds",
      },
      Vishkanya: {
        VenomResistantVishkanya: {
          PoisonSaveNote:
            "Each of your successful saving throws against a poison affliction reduces its stage by 2. Each critical success against an ongoing poison reduces its stage by 3.",
          VirulentSaveNote:
            "Each of your successful saving throws against a virulent poison affliction reduces its stage by 1. Each critical success against an ongoing virulent poison reduces its stage by 2.",
        },
      },
      VitalityManipulationStance: {
        Note: "When you use Stunning Fist, instead of saving against being stunned, you can choose to have the target make a @Check[type:fortitude|dc:resolve(@actor.attributes.classDC.value)] save against your class DC with the following results. You must choose to do this before the target rolls its save.</p><hr><p><strong>Critical Success</strong> The target is unaffected.</p><p><strong>Success</strong> The target's muscles become temporarily weaker. For 1 round, the target is @UUID[Compendium.pf2e.conditionitems.Item.MIRkyAjyBeXivMa7]{Enfeebled 2}, and any time it attempts to take an action with the manipulate trait, the action is disrupted unless it succeeds at a flat check with a DC equal to 5 + its enfeebled value.</p><p><strong>Failure</strong> As success, but the duration is 1 minute.</p><p><strong>Critical Failure</strong> As success, but the duration is 1 minute, the flat check is DC 11, and the target takes -10-foot status penalty to all Speeds for the duration.</p>",
        StrikeLabel: "Vitality Blast",
      },
      WardenHuman: {
        Fortitude: "Expert in Fortitude saves",
        HitPoints: "4 Hit Points",
        MediumArmor: "Trained in Medium Armor",
      },
      WardingRune: {
        Prompt: "Select a school of magic other than divination.",
      },
      WellspringMage: {
        CriticalSuccess:
          "You temporarily recover an expended spell slot of any level of your choice. The temporary spell slot lasts for 1 minute, and if you don't use it by then, you experience an immediate @UUID[Compendium.pf2e.rollable-tables.RollTable.N0pDFNCffTe2Du39]{Wellspring Surge}.",
        Failure:
          "You generate a @UUID[Compendium.pf2e.rollable-tables.RollTable.N0pDFNCffTe2Du39]{Wellspring Surge}, with a spell level chosen randomly among your top three levels of spell slots (or all your levels if you have fewer than three)",
        Initiative:
          "When you roll initiative for a non-trivial combat encounter, as well as in other high-stress situations of the GM's choice, magic wells up within you. Attempt a @Check[type:flat|dc:6|traits:wellspring-magic].",
        Success:
          "You temporarily recover an expended spell slot of a spell level chosen randomly among your top three levels of spell slots (or all your levels of spell slots if you have fewer than three). The slot lasts 3 rounds instead of 1 minute, otherwise you experience a @UUID[Compendium.pf2e.rollable-tables.RollTable.N0pDFNCffTe2Du39]{Wellspring Surge}.",
      },
      WildMorph: {
        ElementalMatter: "Elemental Matter",
        LongVines: "Long Vines",
        Prompt: "Select a morph.",
        PromptTwo: "Select a 2nd morph.",
        PromptThree: "Select a 3rd morph.",
        WildClaws: "Wild Claws",
        WildJaws: "Wild Jaws",
        Wings: "Wings",
      },
      Witch: {
        Patron: {
          Prompt: "Select a patron.",
        },
      },
      Wizard: {
        ArcaneSchool: {
          Prompt: "Select an arcane school.",
        },
        ArcaneThesis: {
          Prompt: "Select an arcane thesis.",
        },
        Metamagic1: {
          Prompt: "Select a 1st-level wizard metamagic feat.",
        },
      },
      Zombie: {
        Deteriorated: "Deteriorated",
      },
    },
    Terrain: {
      Aquatic: "Aquatic",
      Arctic: "Arctic",
      Desert: "Desert",
      Forest: "Forest",
      Mountain: "Mountain",
      Plains: "Plains",
      Sky: "Sky",
      Swamp: "Swamp",
      Underground: "Underground",
    },
    UI: {
      RuleElements: {
        ChoiceSet: {
          Decline: "Decline",
          DragHomebrewItem: "Drag a homebrew item here if using one instead of the above options",
          HomebrewItem: "Homebrew Item",
          NoLabel: "No",
          Prompt: "Make a selection.",
          SaveLabel: "Save",
          SkillLabel: "Skill",
          YesLabel: "Yes",
        },
        EffectTarget: {
          Prompt: "Choose the target of this effect.",
        },
        GrantItem: {
          AlreadyHasItem: "{actor} already has {item}, so it has not been added again.",
        },
        MarkTarget: {
          TargetToken: "Target a token by mouse-hovering one and pressing T. Press Escape to cancel.",
          Timeout: "Effect creation cancelled due to lack of target.",
        },
        Prompt: {
          NoSelectionMade: "No selection was made: {item} is inactive.",
          NoValidOptions: "{actor} has no valid options for {item}.",
        },
      },
    },
  },
};
export default en;
