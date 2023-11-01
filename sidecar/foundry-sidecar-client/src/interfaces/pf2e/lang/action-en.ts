const en = {
  PF2E: {
    Actions: {
      AdministerFirstAid: {
        Description:
          "<p>You perform first aid on an adjacent creature that is dying or bleeding. If a creature is both dying and bleeding, choose which ailment you're trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.</p><ol><li><strong>Stabilize</strong> Attempt a Medicine check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).</li><li><strong>Stop Bleeding</strong> Attempt a Medicine check on a creature that is taking persistent bleed damage, giving them a chance to make another flat check to remove the persistent damage. The DC is usually the DC of the effect that caused the bleed.</li></ol><p><strong>Success</strong> If you're trying to stabilize, the creature loses the dying condition (but remains unconscious). If you're trying to stop bleeding, the creature attempts a flat check to end the bleeding.<br><strong>Critical Failure</strong> If you were trying to stabilize, the creature's dying value increases by 1. If you were trying to stop bleeding, it immediately takes an amount of damage equal to its persistent bleed damage.</p>",
        Stabilize: {
          Description:
            "<p>You perform first aid on an adjacent creature that is dying. Attempt a Medicine check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).</p><p><strong>Success</strong> The creature loses the dying condition (but remains unconscious).<br><strong>Critical Failure</strong> The creature's dying value increases by 1.</p>",
          DifficultyClass: {
            Label: "Administer First Aid DC",
          },
          Notes: {
            criticalFailure: "<strong>Critical Failure</strong> The creature's dying value increases by 1.",
            success: "<strong>Success</strong> The creature loses the dying condition (but remains unconscious).",
          },
          Title: "Stabilize",
        },
        StopBleeding: {
          Description:
            "<p>You perform first aid on an adjacent creature that is bleeding. Attempt a Medicine check on a creature that is taking persistent bleed damage, giving them a chance to make another flat check to remove the persistent damage. The DC is usually the DC of the effect that caused the bleed.</p><p><strong>Success</strong> The creature attempts a flat check to end the bleeding.<br><strong>Critical Failure</strong> The creature immediately takes an amount of damage equal to its persistent bleed damage.</p>",
          Notes: {
            criticalFailure: "<strong>Critical Failure</strong> The creature immediately takes an amount of damage equal to its persistent bleed damage.",
            success: "<strong>Success</strong> The creature attempts a flat check to end the bleeding.",
          },
          Title: "Stop Bleeding",
        },
        Title: "Administer First Aid",
        Warning: {
          TargetNotDying: "Targeted creature is not dying.",
          UnknownVariant: "Unknown variant {variant} used for Administer First Aid, use one of {variants}.",
        },
      },
      Aid: {
        Description:
          "<p>You try to help your ally with a task. To use this reaction, you must first prepare to help, usually by using an action during your turn. You must explain to the GM exactly how you're trying to help, and they determine whether you can Aid your ally.</p><p>When you use your Aid reaction, attempt a skill check or attack roll of a type decided by the GM. The typical DC is 20, but the GM might adjust this DC for particularly hard or easy tasks. The GM can add any relevant traits to your preparatory action or to your Aid reaction depending on the situation, or even allow you to Aid checks other than skill checks and attack rolls.</p><p><strong>Critical Success</strong> You grant your ally a +2 circumstance bonus to\nthe triggering check. If you're a master with the check you attempted, the bonus is +3, and if you're legendary, it's +4.<br><strong>Success</strong> You grant your ally a +1 circumstance bonus to the triggering check.<br><strong>Critical Failure</strong> Your ally takes a –1 circumstance penalty to the triggering check.</p>",
        Notes: {
          criticalFailure: "Your ally takes a –1 circumstance penalty to the triggering check.",
          criticalSuccess:
            "You grant your ally a +2 circumstance bonus to the triggering check. If you're a master with the check you attempted, the bonus is +3, and if you're legendary, it's +4.",
          success: "You grant your ally a +1 circumstance bonus to the triggering check.",
        },
        Title: "Aid",
        Warning: {
          NoStatistic: "The Aid action can be used with different statistics, and no statistic was specified.",
        },
      },
      ArcaneSlam: {
        Modifier: {
          SizeDifference: "Size Difference",
        },
        Notes: {
          NoTarget:
            "<strong>Size Difference</strong> You take a -2 circumstance penalty to your check if the target is one size larger than you and a -4 circumstance penalty if it's larger than that. You gain a +2 circumstance bonus to your check if the target is one size smaller than you and a +4 circumstance bonus if it's smaller than that.",
          criticalFailure:
            "<strong>Critical Failure</strong> The creature breaks free and is no longer @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{restrained} by you.",
          criticalSuccess:
            "<strong>Critical Success</strong> You slam the foe down and the magical energy overwhelms it. The creature is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{prone}, becomes @UUID[Compendium.pf2e.conditionitems.Item.TkIyaNPgTZFBCCuh]{dazzled} for 1 round, and takes damage equal to [[/r 2d6 + @abilities.str.mod # Damage: Arcane Slam]]{2d6 plus your Strength modifier}. The foe is no longer @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{restrained} by you.",
          failure: "<strong>Failure</strong> You are unable to slam the creature, but your hold on the creature remains.",
          success:
            "<strong>Success</strong> You slam the foe down. The creature is knocked @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{prone} and takes damage equal to your [[/r @abilities.str.mod # Damage: Arcane Slam]]{Strength modifier}. The foe is no longer @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{restrained} by you.",
        },
        Title: "Arcane Slam",
      },
      AvoidNotice: {
        Description:
          "<p>You attempt a Stealth check to avoid notice while traveling at half speed. If you have the Swift Sneak feat, you can move at full Speed rather than half, but you still can't use another exploration activity while you do so. If you have the Legendary Sneak feat, you can move at full Speed and use a second exploration activity. If you're Avoiding Notice at the start of an encounter, you usually roll a Stealth check instead of a Perception check both to determine your initiative and to see if the enemies notice you (based on their Perception DCs, as normal for Sneak, regardless of their initiative check results).</p>",
        Notes: {
          criticalSuccess:
            "<strong>Critical Success</strong> You're @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{undetected} by the creature during your movement and remain undetected by the creature at the end of it.<br/><br/>See the @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak} action for details.",
          success:
            "<strong>Success</strong> You're @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{undetected} by the creature during your movement and remain undetected by the creature at the end of it.<br/><br/>See the @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak} action for details.",
        },
        Title: "Avoid Notice",
      },
      Balance: {
        Description:
          '<p>You move across a narrow surface or uneven ground, attempting an Acrobatics check against its Balance DC. You are off-guard while on a narrow surface or uneven ground.</p><p><strong>Critical Success</strong> You move up to your Speed.<br><strong>Success</strong> You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).<br><strong>Failure</strong> You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.<br><strong>Critical Failure</strong> You fall and your turn ends.</p><section class="sample-tasks"><h2>Sample Balance Tasks</h2><p><strong>Untrained</strong> tangled roots, uneven cobblestones</p><p><strong>Trained</strong> wooden beam</p><p><strong>Expert</strong> deep, loose gravel</p><p><strong>Master</strong> tightrope, smooth sheet of ice</p><p><strong>Legendary</strong> razor\'s edge, chunks of floor falling in midair</p></section>',
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You fall and your turn ends.",
          criticalSuccess: "<strong>Critical Success</strong> You move up to your Speed.",
          failure: "<strong>Failure</strong> You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.",
          success: "<strong>Success</strong> You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).",
        },
        Title: "Balance",
      },
      BonMot: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Your quip is atrocious. You take the same penalty an enemy would take had you succeeded. This ends after 1 minute or if you issue another Bon Mot and succeed. @UUID[Compendium.pf2e.feat-effects.Item.GoSls6SKCFmSoDxT]{Effect: Bon Mot}",
          criticalSuccess:
            "<strong>Critical Success</strong> The target is distracted and takes a -3 status penalty to Perception and Will saves for 1 minute. The target can end the effect early with a retort to your Bon Mot. This can either be a single action that has the concentrate trait or an appropriate skill action to frame their retort. The GM determines which skill actions qualify, though they must take at least 1 action. Typically, the retort needs to use a linguistic Charisma-based skill action. @UUID[Compendium.pf2e.feat-effects.Item.CtrZFI3RV0yPNzTv]{Effect: Bon Mot (Critical Success)}",
          success:
            "<strong>Success</strong> The target is distracted and takes a -2 status penalty to Perception and Will saves for 1 minute. The target can end the effect early with a retort to your Bon Mot. This can either be a single action that has the concentrate trait or an appropriate skill action to frame their retort. The GM determines which skill actions qualify, though they must take at least 1 action. Typically, the retort needs to use a linguistic Charisma-based skill action. @UUID[Compendium.pf2e.feat-effects.Item.GoSls6SKCFmSoDxT]{Effect: Bon Mot}",
        },
        Title: "Bon Mot",
      },
      Climb: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You fall. If you began the climb on stable ground, you fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          criticalSuccess:
            "<strong>Critical Success</strong> You move up, across, or safely down the incline for 5 feet plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).",
          success:
            "<strong>Success</strong> You move up, across, or safely down the incline for 5 feet per 20 feet of your land Speed (a total of 5 feet for most PCs, minimum 5 feet if your Speed is below 20 feet).",
        },
        Title: "Climb",
      },
      Coerce: {
        Description:
          "<p>With threats either veiled or overt, you attempt to bully a creature into doing what you want. You must spend at least 1 minute of conversation with a creature you can see and that can either see or sense you. At the end of the conversation, attempt an Intimidation check against the target's Will DC, modified by any circumstances the GM determines. The attitudes referenced in the effects below are summarized in the Changing Attitudes sidebar and described in full in the Conditions Appendix.</p><p><strong>Critical Success</strong> The target gives you the information you seek or agrees to follow your directives so long as they aren't likely to harm the target in any way. The target continues to comply for an amount of time determined by the GM but not exceeding 1 day, at which point the target becomes unfriendly (if they weren't already unfriendly or hostile). However, the target is too scared of you to retaliate - at least in the short term.<br><strong>Success</strong> As critical success, but once the target becomes unfriendly, they might decide to act against you — for example, by reporting you to the authorities or assisting your enemies.<br><strong>Failure</strong> The target doesn't do what you say, and if they were not already unfriendly or hostile, they become unfriendly.<br><strong>Critical Failure</strong> The target refuses to comply, becomes hostile if they weren't already, and can't be Coerced by you for at least 1 week.</p>",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> The target refuses to comply, becomes hostile if they weren't already, and can't be Coerced by you for at least 1 week.",
          criticalSuccess:
            "<strong>Critical Success</strong> The target gives you the information you seek or agrees to follow your directives so long as they aren't likely to harm the target in any way. The target continues to comply for an amount of time determined by the GM but not exceeding 1 day, at which point the target becomes unfriendly (if they weren't already unfriendly or hostile). However, the target is too scared of you to retaliate—at least in the short term.",
          failure: "<strong>Failure</strong> The target doesn't do what you say, and if they were not already unfriendly or hostile, they become unfriendly.",
          success:
            "<strong>Success</strong> As critical success, but once the target becomes unfriendly, they might decide to act against you—for example, by reporting you to the authorities or assisting your enemies.",
        },
        Title: "Coerce",
      },
      CommandAnAnimal: {
        Description:
          "<p>You issue an order to an animal. Attempt a Nature check against the animal's Will DC. The GM might adjust the DC if the animal has a good attitude toward you, you suggest a course of action it was predisposed toward, or you offer it a treat.</p><p>You automatically fail if the animal is hostile or unfriendly to you. If the animal is helpful to you, increase your degree of success by one step. You might be able to Command an Animal more easily with a feat like Ride.</p><p>Most animals know the Drop Prone, Leap, Seek, Stand, Stride, and Strike basic actions. If an animal knows an activity, such as a horse's Gallop, you can Command the Animal to perform the activity, but you must spend as many actions on Command an Animal as the activity's number of actions. You can also spend multiple actions to Command the Animal to perform that number of basic actions on its next turn; for instance, you could spend 3 actions to Command an Animal to Stride three times or to Stride twice and then Strike.</p><p><strong>Success</strong> The animal does as you command on its next turn.<br><strong>Failure</strong> The animal is hesitant or resistant, and it does nothing.<br><strong>Critical Failure</strong> The animal misbehaves or misunderstands, and it takes some other action determined by the GM.</p>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> The animal misbehaves or misunderstands, and it takes some other action determined by the GM.",
          failure: "<strong>Failure</strong> The animal is hesitant or resistant, and it does nothing.",
          success: "<strong>Success</strong> The animal does as you command on its next turn.",
        },
        Title: "Command an Animal",
      },
      ConcealAnObject: {
        Description:
          "<p>You hide a small object on your person (such as a weapon of light Bulk). When you try to sneak a concealed object past someone who might notice it, the GM rolls your Stealth check and compares it to this passive observer's Perception DC. Once the GM rolls your check for a concealed object, that same result is used no matter how many passive observers you try to sneak it past. If a creature is specifically searching you for an item, it can attempt a Perception check against your Stealth DC (finding the object on success).</p><p>You can also conceal an object somewhere other than your person, such as among undergrowth or in a secret compartment within a piece of furniture. In this case, characters Seeking in an area compare their Perception check results to your Stealth DC to determine whether they find the object.</p><p><strong>Success</strong> The object remains undetected.<br><strong>Failure</strong> The searcher finds the object.</p>",
        Notes: {
          failure: "<strong>Failure</strong> The searcher finds the object.",
          success: "<strong>Success</strong> The object remains undetected.",
        },
        Title: "Conceal an Object",
      },
      Craft: {
        Details: {
          DaysForNoCost: "Days until no Additional Cost:",
          Discount: "Discount Per Day:",
          LostMaterials: "Lose {cost} of Materials",
          PayFull: "Pay {cost} Full Costs and Craft",
          PayMaterials: "Pay {cost} Material Costs and Craft",
          ReceiveItem: "Receive Item",
        },
        Error: {
          ItemReferenceMismatch: "Only accepts physical items for Craft from a compendium or the world's Item Directory.",
        },
        Information: {
          LoseMaterials: "{actorName} loses {cost} of materials.",
          PayAndReceive: "{actorName} pays {cost} crafting costs and receives {quantity}x {itemName}.",
          ReceiveItem: "{actorName} receives {quantity}x {itemName}.",
        },
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You fail to complete the item. You ruin 10% of the raw materials you supplied, but you can salvage the rest. If you want to try again, you must start over.",
          criticalSuccess:
            "<strong>Critical Success</strong> Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level + 1 and your proficiency rank in Crafting.",
          failure:
            "<strong>Failure</strong> You fail to complete the item. You can salvage the raw materials you supplied for their full value. If you want to try again, you must start over.",
          success:
            "<strong>Success</strong> Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level and your proficiency rank.",
        },
        SelectItemDialog: {
          CancelButtonLabel: "Cancel",
          CraftButtonLabel: "Craft",
          DropItemZoneLabel: "Drag item here...",
          Title: "Select item to Craft",
        },
        SelectSpellDialog: {
          CraftButtonLabel: "Craft",
          Title: "Select Spell",
        },
        Title: "Craft",
        Warning: {
          CantAddItem: "Could not add items",
          InsufficientCoins: "Insufficient coins",
          MissingItem: "Unable to Craft unknown item with ID {uuid}.",
          NotPhysicalItem: "Specified item {item} is not a physical item.",
        },
      },
      Crawl: {
        Description: "<p>You move 5 feet by crawling and continue to stay prone.</p>",
        Title: "Crawl",
      },
      CreateADiversion: {
        DistractingWords: {
          Title: "Create a Diversion - Distracting Words",
        },
        Gesture: {
          Title: "Create a Diversion - Gesture",
        },
        Notes: {
          failure:
            "<strong>Failure</strong> You don't divert the attention of any creatures whose Perception DC exceeds your result, and those creatures are aware you were trying to trick them.",
          success:
            "<strong>Success</strong> You become @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} to each creature whose Perception DC is less than or equal to your result. (The hidden condition allows you to @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak} away.) This lasts until the end of your turn or until you do anything except Step or use the @UUID[Compendium.pf2e.actionspf2e.Item.XMcnh4cSI32tljXa]{Hide} or the @UUID[Compendium.pf2e.actionspf2e.Item.VMozDqMMuK5kpoX4]{Sneak} action of the Stealth skill. If you Strike a creature, the creature remains @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against that attack, and you then become @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed}. If you do anything else, you become @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed} just before you act unless the GM determines otherwise.",
        },
        Title: "Create a Diversion",
        Trick: {
          Title: "Create a Diversion - Trick",
        },
        Warning: {
          UnknownVariant: "Unknown variant {variant} used for Create a Diversion, use one of {variants}.",
        },
      },
      CreateForgery: {
        Description:
          "<p>You create a forged document, usually over the course of a day or a week. You must have the proper writing material to create a forgery. When you Create a Forgery, the GM rolls a secret DC 20 Society check. If you succeed, the forgery is of good enough quality that passive observers can't notice the fake. Only those who carefully examine the document and attempt a Perception or Society check against your Society DC can do so.</p><p>If the document's handwriting doesn't need to be specific to a person, you need only to have seen a similar document before, and you gain up to a +4 circumstance bonus to your check, as well as to your DC (the GM determines the bonus). To forge a specific person's handwriting, you need a sample of that person's handwriting.</p><p>If your check result was below 20, the forgery has some obvious signs of being a fake, so the GM compares your result to each passive observer's Perception DC or Society DC, whichever is higher, using the success or failure results below. Once the GM rolls your check for a document, that same result is used against all passive observers' DCs no matter how many creatures passively observe that document.</p><p>An observer who was fooled on a passive glance can still choose to closely scrutinize the documents on the lookout for a forgery, using different techniques and analysis methods beyond the surface elements you successfully forged with your original check. In that case, the observer can attempt a Perception or Society check against your Society DC (if they succeed, they know your document is a forgery).</p><p><strong>Success</strong> The observer does not detect the forgery.<br><strong>Failure</strong> The observer knows your document is a forgery.</p>",
        ForgedDocument: {
          Description:
            "<p>An observer who was fooled on a passive glance can still choose to closely scrutinize the documents on the lookout for a forgery, using different techniques and analysis methods beyond the surface elements you successfully forged with your original check. In that case, the observer can attempt a @Check[type:perception|dc:{societyDC}] or @Check[type:society|dc:{societyDC}] check against your Society DC (if they succeed, they know your document is a forgery).</p>",
          FailureGmNote:
            "<p>The forgery has some obvious signs of being a fake, so the GM compares the result of {total} to each passive observer's Perception DC or Society DC, whichever is higher, using the success or failure results below. The same result is used against all passive observers' DCs no matter how many creatures passively observe that document.</p>\n<p>{success}</p>\n<p>{failure}</p>",
          Name: "Forged Document",
          SuccessGmNote:
            "<p>The forgery is of good enough quality that passive observers can't notice the fake. Only those who carefully examine the document and attempt a @Check[type:perception|dc:{societyDC}|showDC:gm] or @Check[type:society|dc:{societyDC}|showDC:gm] check against your Society DC can do so.</p>",
        },
        ForgedDocumentCreatedNotification: "A forged document has been added to {name}'s inventory.",
        Notes: {
          criticalFailure: "<strong>Failure</strong> The observer knows your document is a forgery.",
          criticalSuccess: "<strong>Success</strong> The observer does not detect the forgery.",
          failure: "<strong>Failure</strong> The observer knows your document is a forgery.",
          success: "<strong>Success</strong> The observer does not detect the forgery.",
        },
        Title: "Create Forgery",
        UnspecificHandwriting: "Unspecific Handwriting",
      },
      DecipherWriting: {
        Description:
          "<p>You attempt to decipher complicated writing or literature on an obscure topic. This usually takes 1 minute per page of text, but might take longer (typically an hour per page for decrypting ciphers or the like). The text must be in a language you can read, though the GM might allow you to attempt to decipher text written in an unfamiliar language using Society instead.</p><p>The DC is determined by the GM based on the state or complexity of the document. The GM might have you roll one check for a short text or a check for each section of a larger text.</p><p><strong>Critical Success</strong> You understand the true meaning of the text.<br><strong>Success</strong> You understand the true meaning of the text. If it was a coded document, you know the general meaning but might not have a word-for-word translation.<br><strong>Failure</strong> You can't understand the text and take a –2 circumstance penalty to further checks to decipher it.<br><strong>Critical Failure</strong> You believe you understand the text on that page, but you have in fact misconstrued its message.</p><section class=\"sample-tasks\"><h2>Sample Decipher Tasks</h2><p><strong>Trained</strong> entry-level philosophy treatise</p><p><strong>Expert</strong> complex code, such as a cipher</p><p><strong>Master</strong> spymaster's code or advanced research notes</p><p><strong>Legendary</strong> esoteric planar text written in metaphor by an ancient celestial</p></section>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You believe you understand the text on that page, but you have in fact misconstrued its message.",
          criticalSuccess: "<strong>Critical Success</strong> You understand the true meaning of the text.",
          failure: "<strong>Failure</strong> You can't understand the text and take a –2 circumstance penalty to further checks to decipher it.",
          success:
            "<strong>Success</strong> You understand the true meaning of the text. If it was a coded document, you know the general meaning but might not have a word-for-word translation.",
        },
        Title: "Decipher Writing",
        Warning: {
          NoSkill:
            "The Decipher Writing action can be used with different skills, and no skill was specified. Arcana is typically used for writing about magic or science, Occultism for esoteric texts about mysteries and philosophy, Religion for scripture, and Society for coded messages or archaic documents.",
        },
      },
      Delay: {
        Description:
          "<p>You wait for the right moment to act. The rest of your turn doesn't happen yet. Instead, you're removed from the initiative order. You can return to the initiative order as a free action triggered by the end of any other creature's turn. This permanently changes your initiative to the new position. You can't use reactions until you return to the initiative order. If you Delay an entire round without returning to the initiative order, the actions from the Delayed turn are lost, your initiative doesn't change, and your next turn occurs at your original position in the initiative order.</p><p>When you Delay, any persistent damage or other negative effects that normally occur at the start or end of your turn occur immediately when you use the Delay action. Any beneficial effects that would end at any point during your turn also end. The GM might determine that other effects end when you Delay as well. Essentially, you can't Delay to avoid negative consequences that would happen on your turn or to extend beneficial effects that would end on your turn.</p>",
        Title: "Delay",
      },
      Demoralize: {
        Description:
          "<p>With a sudden shout, a well-timed taunt, or a cutting put-down, you can shake an enemy's resolve. Choose a creature within 30 feet of you who you're aware of. Attempt an Intimidation check against that target's Will DC. If the target does not understand the language you are speaking, you're not speaking a language, or they can't hear you, you take a –4 circumstance penalty to the check. Regardless of your result, the target is temporarily immune to your attempts to Demoralize it for 10 minutes.</p><p><strong>Critical Success</strong> The target becomes frightened 2.<br><strong>Success</strong> The target becomes frightened 1.</p>",
        Notes: {
          criticalSuccess: "<strong>Critical Success</strong> The target becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 2}.",
          success: "<strong>Success</strong> The target becomes @UUID[Compendium.pf2e.conditionitems.Item.TBSHQspnbcqxsmjL]{Frightened 1}.",
        },
        Title: "Demoralize",
        Unintelligible: "Unintelligible",
      },
      DisableDevice: {
        Description:
          "<p>This action allows you to disarm a trap or another complex device. Often, a device requires numerous successes before becoming disabled, depending on its construction and complexity. Thieves' tools are helpful and sometimes even required to Disable a Device, as determined by the GM, and sometimes a device requires a higher proficiency rank in Thievery to disable it.</p><p>Your Thievery check result determines how much progress you make.</p><p><strong>Critical Success</strong> You disable the device, or you achieve two successes toward disabling a complex device. You leave no trace of your tampering, and you can rearm the device later, if that type of device can be rearmed.<br><strong>Success</strong> You disable the device, or you achieve one success toward disabling a complex device.<br><strong>Critical Failure</strong> You trigger the device.</p>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You trigger the device.",
          criticalSuccess:
            "<strong>Critical Success</strong> You disable the device, or you achieve two successes toward disabling a complex device. You leave no trace of your tampering, and you can rearm the device later, if that type of device can be rearmed.",
          success: "<strong>Success</strong> You disable the device, or you achieve one success toward disabling a complex device.",
        },
        Title: "Disable Device",
      },
      Disarm: {
        EffectLabel: "Using weapon with loose grip",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You lose your balance and become @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} until the start of your next turn.",
          criticalSuccess: "<strong>Critical Success</strong> You knock the item out of the opponent's grasp. It falls to the ground in the opponent's space.",
          success:
            "<strong>Success</strong> You weaken your opponent's grasp on the item. Until the start of that creature's turn, attempts to Disarm the opponent of that item gain a +2 circumstance bonus, and the target takes a -2 circumstance penalty to attacks with the item or other checks requiring a firm grasp on the item. @UUID[Compendium.pf2e.equipment-effects.Item.z3ATL8DcRVrT0Uzt]{Effect: Disarm (Success)}",
        },
        Title: "Disarm",
      },
      DropProne: {
        Description: "<p>You fall prone.</p>",
        Title: "Drop Prone",
      },
      EncouragingWords: {
        BadArgs: "This action must be performed with exactly one character or NPC.",
        Cancel: "Cancel",
        ContentLabel1: "Diplomacy DC:",
        ContentLabel2: "DC Modifier:",
        ContentMain:
          "Select a target DC. Remember that you can't attempt a heal above your proficiency. Attempting to do so will downgrade the DC and amount healed to the highest you're capable of.",
        ContentOption1: "Trained DC 15",
        ContentOption2: "Expert DC 20, +5 Stamina",
        ContentOption3: "Master DC 30, +15 Stamina",
        ContentOption4: "Legendary DC 40, +25 Stamina",
        CritFailure: "Critical Failure",
        CritSuccess: "Critical Success",
        Damage: "Damage",
        Failure: "Failure",
        NotTrained: "{name} is not trained in Diplomacy and doesn't know how to use Encouraging Words.",
        Recovery: "Stamina Recovery",
        StaminaNotEnabled: "The Stamina variant is not enabled.",
        Success: "Success",
        Title: "Encouraging Words",
      },
      Escape: {
        Description:
          "<p>You attempt to escape from being grabbed, immobilized, or restrained. Choose one creature, object, spell effect, hazard, or other impediment imposing any of those conditions on you. Attempt a check using your unarmed attack modifier against the DC of the effect. This is typically the Athletics DC of a creature grabbing you, the Thievery DC of a creature who tied you up, the spell DC for a spell effect, or the listed Escape DC of an object, hazard, or other impediment. You can attempt an Acrobatics or Athletics check instead of using your attack modifier if you choose (but this action still has the attack trait).</p><p><strong>Critical Success</strong> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target. You can then Stride up to 5 feet.<br><strong>Success</strong> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target.<br><strong>Critical Failure</strong> You don't get free, and you can't attempt to Escape again until your next turn.</p>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You don't get free, and you can't attempt to Escape again until your next turn.",
          criticalSuccess:
            "<strong>Critical Success</strong> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target. You can then Stride up to 5 feet.",
          success: "<strong>Success</strong> You get free and remove the grabbed, immobilized, and restrained conditions imposed by your chosen target.",
        },
        Title: "Escape",
      },
      Feint: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Your feint backfires. You are @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against melee attacks the target attempts against you until the end of your next turn.",
          criticalSuccess:
            "<strong>Critical Success</strong> You throw your enemy's defenses against you entirely off. The target is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against melee attacks that you attempt against it until the end of your next turn.",
          success:
            "<strong>Success</strong> Your foe is fooled, but only momentarily. The target is @UUID[Compendium.pf2e.conditionitems.Item.AJh5ex99aV6VTggg]{Off-Guard} against the next melee attack that you attempt against it before the end of your current turn.",
        },
        Title: "Feint",
      },
      ForceOpen: {
        NoCrowbarPenalty: "No Crowbar",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Your attempt jams the door, window, container, or gate shut, imposing a -2 circumstance penalty on future attempts to Force it Open.",
          criticalSuccess: "<strong>Critical Success</strong> You open the door, window, container, or gate and can avoid damaging it in the process.",
          success:
            "<strong>Success</strong> You break the door, window, container, or gate open, and the door, window, container, or gate gains the @UUID[Compendium.pf2e.conditionitems.Item.6dNUvdb1dhToNDj3]{Broken} condition. If it's especially sturdy, the GM might have it take damage but not be broken.",
        },
        Title: "Force Open",
      },
      GatherInformation: {
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You collect incorrect information about the individual or topic.",
          success: "<strong>Success</strong> You collect information about the individual or topic. The GM determines the specifics.",
        },
        Title: "Gather Information",
      },
      Grapple: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> If you already had the opponent @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained}, it breaks free. Your target can either grab you, as if it succeeded at using the @UUID[Compendium.pf2e.actionspf2e.Item.PMbdMWc2QroouFGD]{Grapple} action against you, or force you to fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          criticalSuccess:
            "<strong>Critical Success</strong> Your opponent is @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained} until the end of your next turn unless you move or your opponent @UUID[Compendium.pf2e.actionspf2e.Item.SkZAQRkLLkmBQNB9]{Escapes}.",
          failure:
            "<strong>Failure</strong> You fail to grab your opponent. If you already had the opponent @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained} using a Grapple, those conditions on that creature end.",
          success:
            "<strong>Success</strong> Your opponent is @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed} until the end of your next turn unless you move or your opponent @UUID[Compendium.pf2e.actionspf2e.Item.SkZAQRkLLkmBQNB9]{Escapes}.",
        },
        Title: "Grapple",
      },
      Hide: {
        Description:
          "<p>You huddle behind cover or greater cover or deeper into concealment to become hidden, rather than observed. The GM rolls your Stealth check in secret and compares the result to the Perception DC of each creature you're observed by but that you have cover or greater cover against or are concealed from. You gain the circumstance bonus from cover or greater cover to your check.</p><p><strong>Success</strong>strong> If the creature could see you, you're now hidden from it instead of observed. If you were hidden from or undetected by the creature, you retain that condition.</p><p>If you successfully become hidden to a creature but then cease to have cover or greater cover against it or be concealed from it, you become observed again. You cease being hidden if you do anything except Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains off-guard against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check.</p><p>If a creature uses Seek to make you observed by it, you must successfully Hide to become hidden from it again.</p>",
        Notes: {
          success:
            "<strong>Success</strong> If the creature could see you, you're now @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} from it instead of observed. If you were @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} from or @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected} by the creature, you retain that condition.",
        },
        Title: "Hide",
      },
      HighJump: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You don't @UUID[Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk]{Leap} at all, and instead you fall @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone} in your space.",
          criticalSuccess:
            "<strong>Critical Success</strong> Increase the maximum vertical distance to 8 feet, or increase the maximum vertical distance to 5 feet and maximum horizontal distance to 10 feet.",
          failure: "<strong>Failure</strong> You @UUID[Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk]{Leap} normally.",
          success: "<strong>Success</strong> Increase the maximum vertical distance to 5 feet.",
        },
        Title: "High Jump",
      },
      Impersonate: {
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> The creature can tell you're not who you claim to be, and it recognizes you if it would know you without a disguise.",
          failure: "<strong>Failure</strong> The creature can tell you're not who you claim to be.",
          success:
            "<strong>Success</strong> You trick the creature into thinking you're the person you're disguised as. You might have to attempt a new check if your behavior changes.",
        },
        Title: "Impersonate",
      },
      Interact: {
        Description:
          "<p>You use your hand or hands to manipulate an object or the terrain. You can grab an unattended or stored object, open a door, or produce some similar effect. You might have to attempt a skill check to determine if your Interact action was successful.</p>",
        Draw1H: {
          Description: "{actor} draws their {weapon}.",
          Title: "Draw (1H)",
        },
        Draw2H: {
          Description: "{actor} draws their {weapon}.",
          Title: "Draw (2H)",
        },
        Grip: {
          Description: "{actor} grips their {weapon} with two hands.",
          Title: "Change Grip (2H)",
        },
        Modular: {
          Description: "{actor} adjusts their {weapon} to deal {damageType} damage.",
          Title: "Modular",
        },
        Parenthetical: "Interact {purpose}",
        PickUp1H: {
          Description: "{actor} picks up {weapon} from the ground.",
          Title: "Pick Up (1H)",
        },
        PickUp2H: {
          Description: "{actor} picks up {weapon} from the ground.",
          Title: "Pick Up (2H)",
        },
        Retrieve1H: {
          Description: "{actor} retrieves their {weapon}.",
          Title: "Retrieve (1H)",
        },
        Retrieve2H: {
          Description: "{actor} retrieves their {weapon}.",
          Title: "Retrieve (1H)",
        },
        Sheathe: {
          Description: "{actor} sheathes their {weapon}.",
          Title: "Sheathe",
        },
        Title: "Interact",
      },
      Leap: {
        Description:
          "<p>You take a careful, short jump. You can Leap up to 10 feet horizontally if your Speed is at least 15 feet, or up to 15 feet horizontally if your Speed is at least 30 feet. You land in the space where your Leap ends (meaning you can typically clear a 5-foot gap, or a 10-foot gap if your Speed is 30 feet or more).</p><p>If you Leap vertically, you can move up to 3 feet vertically and 5 feet horizontally onto an elevated surface.</p><p>Jumping a greater distance requires using the Athletics skill.</p>",
        Title: "Leap",
      },
      Lie: {
        Notes: {
          failure:
            "<strong>Failure</strong> The target doesn't believe your lie and gains a +4 circumstance bonus against your attempts to Lie for the duration of your conversation. The target is also more likely to be suspicious of you in the future.",
          success: "<strong>Success</strong> The target believes your lie.",
        },
        Title: "Lie",
      },
      LongJump: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You @UUID[Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk]{Leap} normally, but then fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          failure: "<strong>Failure</strong> You @UUID[Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk]{Leap} normally.",
          success: "<strong>Success</strong> Increase the maximum horizontal distance you @UUID[Compendium.pf2e.actionspf2e.Item.d5I6018Mci2SWokk]{Leap} to the desired distance.",
        },
        Title: "Long Jump",
      },
      MakeAnImpression: {
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> The target's attitude toward you decreases by one step.",
          criticalSuccess: "<strong>Critical Success</strong> The target's attitude toward you improves by two steps.",
          success: "<strong>Success</strong> The target's attitude toward you improves by one step.",
        },
        Title: "Make an Impression",
      },
      ManeuverInFlight: {
        Description:
          '<p>You try a difficult maneuver while flying. Attempt an Acrobatics check. The GM determines what maneuvers are possible, but they rarely allow you to move farther than your fly Speed.</p><p><strong>Success</strong> You succeed at the maneuver.<br><strong>Failure</strong> Your maneuver fails. The GM chooses if you simply can\'t move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).<br><strong>Critical Failure</strong> As failure, but the consequence is more dire.</p><section class="sample-tasks"><h2>Sample Maneuver in Flight Tasks</h2><p><strong>Trained</strong> steep ascent or descent</p><p><strong>Expert</strong> fly against the wind, hover midair</p><p><strong>Master</strong> reverse direction</p><p><strong>Legendary</strong> fly through gale force winds</p></section>',
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> As failure, but the consequence is more dire.",
          failure:
            "<strong>Failure</strong> Your maneuver fails. The GM chooses if you simply can't move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).",
          success: "<strong>Success</strong> You succeed at the maneuver.",
        },
        Title: "Maneuver in Flight",
      },
      PalmAnObject: {
        Description:
          "<p>Palming a small, unattended object without being noticed requires you to roll a single Thievery check against the Perception DCs of all creatures who are currently observing you. You take the object whether or not you successfully conceal that you did so. You can typically only Palm Objects of negligible Bulk, though the GM might determine otherwise depending on the situation.</p><p><strong>Success</strong> The creature does not notice you Palming the Object.<br><strong>Failure</strong> The creature notices you Palming the Object, and the GM determines the creature's response.</p>",
        Notes: {
          failure: "<strong>Failure</strong> The creature notices you Palming the Object, and the GM determines the creature's response.",
          success: "<strong>Success</strong> The creature does not notice you Palming the Object.",
        },
        Title: "Palm an Object",
      },
      Perform: {
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You demonstrate only incompetence.",
          criticalSuccess: "<strong>Critical Success</strong> Your performance impresses the observers, and they're likely to share stories of your ability.",
          failure: "<strong>Failure</strong> Your performance falls flat.",
          success: "<strong>Success</strong> You prove yourself, and observers appreciate the quality of your performance.",
        },
        Acting: {
          Title: "Perform - Acting",
        },
        Comedy: {
          Title: "Perform - Comedy",
        },
        Dance: {
          Title: "Perform - Dance",
        },
        Keyboards: {
          Title: "Perform - Play keyboard instrument",
        },
        Oratory: {
          Title: "Perform - Oratory",
        },
        Percussion: {
          Title: "Perform - Play percussion instrument",
        },
        Singing: {
          Title: "Perform - Singing",
        },
        Strings: {
          Title: "Perform - Play string instrument",
        },
        Winds: {
          Title: "Perform - Play wind instrument",
        },
        Title: "Perform",
        Warning: {
          UnknownVariant: "Unknown variant '{variant}' used for Perform, use either acting, comedy, dance, keyboards, oratory, percussion, singing, strings, or winds.",
        },
      },
      PickALock: {
        Description:
          "<p>Opening a lock without a key is very similar to Disabling a Device, but the DC of the check is determined by the complexity and construction of the lock you are attempting to pick. Locks of higher qualities might require multiple successes to unlock, since otherwise even an unskilled burglar could easily crack the lock by attempting the check until they rolled a natural 20. If you lack the proper tools, the GM might let you used improvised picks, which are treated as shoddy tools, depending on the specifics of the lock.</p><p><strong>Critical Success</strong> You unlock the lock, or you achieve two successes toward opening a complex lock. You leave no trace of your tampering.<br><strong>Success</strong> You open the lock, or you achieve one success toward opening a complex lock.<br><strong>Critical Failure</strong> You break your tools. Fixing them requires using Crafting to Repair them or else swapping in replacement picks (costing 3 sp, or 3 gp for infiltrator thieves' tools).</p>",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You break your tools. Fixing them requires using Crafting to @UUID[Compendium.pf2e.actionspf2e.Item.bT3skovyLUtP22ME]{Repair} them or else swapping in replacement picks (costing 3 sp, or 3 gp for infiltrator thieves' tools).",
          criticalSuccess:
            "<strong>Critical Success</strong> You unlock the lock, or you achieve two successes toward opening a complex lock. You leave no trace of your tampering.",
          success: "<strong>Success</strong> You open the lock, or you achieve one success toward opening a complex lock.",
        },
        Title: "Pick a Lock",
      },
      RaiseAShield: {
        BadArgs: "This action must be performed with exactly one character or NPC.",
        Content: "{actor} raises their shield.",
        NoShieldEquipped: "{actor} must have a shield equipped.",
        ReactionTitle: "Reactive Shield",
        ShieldIsBroken: "{actor}'s {shield} is broken.",
        ShieldIsDestroyed: "{actor}'s {shield} is destroyed.",
        SingleActionTitle: "Raise a Shield",
      },
      Ready: {
        Description:
          "<p>You prepare to use an action that will occur outside your turn. Choose a single action or free action you can use, and designate a trigger. Your turn then ends. If the trigger you designated occurs before the start of your next turn, you can use the chosen action as a reaction (provided you still meet the requirements to use it). You can't Ready a free action that already has a trigger.</p><p>If you have a multiple attack penalty and your readied action is an attack action, your readied attack takes the multiple attack penalty you had at the time you used Ready. This is one of the few times the multiple attack penalty applies when it's not your turn.</p>",
        Title: "Ready",
      },
      Release: {
        Description:
          "<p>You release something you're holding in your hand or hands. This might mean dropping an item, removing one hand from your weapon while continuing to hold it in another hand, releasing a rope suspending a chandelier, or performing a similar action. Unlike most manipulate actions, Release does not trigger reactions that can be triggered by actions with the manipulate trait (such as Attack of Opportunity).</p><p>If you want to prepare to Release something outside of your turn, use the Ready activity.</p>",
        Drop: {
          Description: "{actor} drops their {weapon} onto the ground.",
          Title: "Drop",
        },
        Grip: {
          Description: "{actor} releases a hand from their {weapon}.",
          Title: "Change Grip (1H)",
        },
        Title: "Release",
      },
      Repair: {
        Chat: {
          ItemDamaged: "{itemName} was dealt {damageDealt} points of damage for a total of {afterDamageHitPoints} out of {maximumHitPoints} hit points.",
          ItemRepaired: "{itemName} was repaired for {repairedDamage} points of damage for a total of {afterRepairHitPoints} out of {maximumHitPoints} hit points.",
        },
        Error: {
          ItemReferenceMismatch: "Only accepts physical items for Repair from an actor.",
        },
        Labels: {
          DamageMitigatedByHardness: "The critically failed Repair attempt caused no damage to the item due to hardness.",
          DealItemDamage: "Deal {value} damage to item",
          Hardness: "Hardness",
          ItemLevelRepairDC: "Item level {level} repair DC",
          RestoreItemHitPoints: "Restore {value} Hit Points to item",
          RollItemDamage: "Roll {value} damage",
        },
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You deal 2d6 damage to the item. Apply the item's Hardness to this damage.",
          criticalSuccess:
            "<strong>Critical Success</strong> You restore 10 Hit Points to the item, plus an additional 10 Hit Points per proficiency rank you have in Crafting (a total of 20 HP if you're trained, 30 HP if you're an expert, 40 HP if you're a master, or 50 HP if you're legendary).",
          success:
            "<strong>Success</strong> You restore 5 Hit Points to the item, plus an additional 5 per proficiency rank you have in Crafting (for a total of 10 HP if you are trained, 15 HP if you're an expert, 20 HP if you're a master, or 25 HP if you're legendary).",
        },
        SelectItemDialog: {
          CancelButtonLabel: "Cancel",
          DropItemZoneLabel: "Drag item here...",
          RepairButtonLabel: "Repair",
          Title: "Select item to Repair",
        },
        Title: "Repair",
        Warning: {
          NotPhysicalItem: "Specified item {item} is not a physical item.",
        },
      },
      Request: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Not only does the target refuse the request, but their attitude toward you decreases by one step due to the temerity of the request.",
          criticalSuccess: "<strong>Critical Success</strong> The target agrees to your request without qualifications.",
          failure: "<strong>Failure</strong> The target refuses the request, though they might propose an alternative that is less extreme.",
          success: "<strong>Success</strong> The target agrees to your request, but they might demand added provisions or alterations to the request.",
        },
        Title: "Request",
      },
      Seek: {
        Description:
          "<p>You scan an area for signs of creatures or objects. If you're looking for creatures, choose an area you're scanning. If precision is necessary, the GM can have you select a 30-foot cone or a 15-foot burst within line of sight. You might take a penalty if you choose an area that's far away.</p><p>If you're using Seek to search for objects (including secret doors and hazards), you search up to a 10-foot square adjacent to you. The GM might determine you need to Seek as an activity, taking more actions or even minutes or hours if you're searching a particularly cluttered area.</p><p>The GM attempts a single secret Perception check for you and compares the result to the Stealth DCs of any undetected or hidden creatures in the area or the DC to detect each object in the area (as determined by the GM or by someone Concealing the Object). A creature you detect might remain hidden, rather than becoming observed, if you're using an imprecise sense or if an effect (such as invisibility) prevents the subject from being observed.</p><p><strong>Critical Success</strong> If you were searching for creatures, any undetected or hidden creature you critically succeeded against becomes observed by you. If you were searching for an object, you learn its location.<br><strong>Success</strong> If you were searching for creatures, any undetected creature you succeeded against becomes hidden from you instead of undetected, and any hidden creature you succeeded against becomes observed by you. If you were searching for an object, you learn its location or get a clue to its whereabouts, as determined by the GM.</p>",
        Notes: {
          criticalSuccess:
            "<strong>Critical Success</strong> If you were searching for creatures, any @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected} or @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} creature you critically succeeded against becomes @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed} by you. If you were searching for an object, you learn its location.",
          success:
            "<strong>Success</strong> If you were searching for creatures, any @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected} creature you succeeded against becomes @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} from you instead of @UUID[Compendium.pf2e.conditionitems.Item.VRSef5y1LmL2Hkjf]{Undetected}, and any @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} creature you succeeded against becomes @UUID[Compendium.pf2e.conditionitems.Item.1wQY3JYyhMYeeV2G]{Observed} by you. If you were searching for an object, you learn its location or get a clue to its whereabouts, as determined by the GM.",
        },
        Title: "Seek",
      },
      SenseDirection: {
        Description:
          '<p>Using the stars, the position of the sun, traits of the geography or flora, or the behavior of fauna, you can stay oriented in the wild. Typically, you attempt a Survival check only once per day, but some environments or changes might necessitate rolling more often. The GM determines the DC and how long this activity takes (usually just a minute or so). More unusual locales or those you\'re unfamiliar with might require you to have a minimum proficiency rank to Sense Direction. Without a compass, you take a –2 item penalty to checks to Sense Direction.</p><p><strong>Critical Success</strong> You get an excellent sense of where you are. If you are in an environment with cardinal directions, you know them exactly.<br><strong>Success</strong> You gain enough orientation to avoid becoming hopelessly lost. If you are in an environment with cardinal directions, you have a sense of those directions.</p><section class="sample-tasks"><h2>Sense Direction Tasks</h2><p><strong>Untrained</strong> determine a cardinal direction using the sun</p><p><strong>Trained</strong> find an overgrown path in a forest</p><p><strong>Expert</strong> navigate a hedge maze</p><p><strong>Master</strong> navigate a byzantine labyrinth or relatively featureless desert</p><p><strong>Legendary</strong> navigate an ever-changing dream realm</p></section>',
        Modifier: {
          NoCompass: "No Compass",
        },
        Notes: {
          criticalSuccess:
            "<strong>Critical Success</strong> You get an excellent sense of where you are. If you are in an environment with cardinal directions, you know them exactly.",
          success:
            "<strong>Success</strong> You gain enough orientation to avoid becoming hopelessly lost. If you are in an environment with cardinal directions, you have a sense of those directions.",
        },
        Title: "Sense Direction",
      },
      SenseMotive: {
        Description:
          "<p>You try to tell whether a creature's behavior is abnormal. Choose one creature, and assess it for odd body language, signs of nervousness, and other indicators that it might be trying to deceive someone. The GM attempts a single secret Perception check for you and compares the result to the Deception DC of the creature, the DC of a spell affecting the creature's mental state, or another appropriate DC determined by the GM. You typically can't try to Sense the Motive of the same creature again until the situation changes significantly.</p><p><strong>Critical Success</strong> You determine the creature's true intentions and get a solid idea of any mental magic affecting it.<br><strong>Success</strong> You can tell whether the creature is behaving normally, but you don't know its exact intentions or what magic might be affecting it.<br><strong>Failure</strong> You detect what a deceptive creature wants you to believe. If they're not being deceptive, you believe they're behaving normally.<br><strong>Critical Failure</strong> You get a false sense of the creature's intentions.</p>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You get a false sense of the creature's intentions.",
          criticalSuccess: "<strong>Critical Success</strong> You determine the creature's true intentions and get a solid idea of any mental magic affecting it.",
          failure: "<strong>Failure</strong> You detect what a deceptive creature wants you to believe. If they're not being deceptive, you believe they're behaving normally.",
          success: "<strong>Success</strong> You can tell whether the creature is behaving normally, but you don't know its exact intentions or what magic might be affecting it.",
        },
        Title: "Sense Motive",
      },
      ShieldBlock: {
        SelectAShield: "Select a shield",
      },
      Shove: {
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You lose your balance, fall, and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          criticalSuccess:
            "<strong>Critical Success</strong> You push your opponent up to 10 feet away from you. You can Stride after it, but you must move the same distance and in the same direction.",
          success: "<strong>Success</strong> You push your opponent back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.",
        },
        Title: "Shove",
      },
      Sneak: {
        Description:
          "<p>You can attempt to move to another place while becoming or staying undetected. Stride up to half your Speed. (You can use Sneak while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type; you must move at half that Speed.)</p><p>If you're undetected by a creature and it's impossible for that creature to observe you (for a typical creature, this includes when you're invisible, the observer is blinded, or you're in darkness and the creature can't see in darkness), for any critical failure you roll on a check to Sneak, you get a failure instead. You also continue to be undetected if you lose cover or greater cover against or are no longer concealed from such a creature.</p><p>At the end of your movement, the GM rolls your Stealth check in secret and compares the result to the Perception DC of each creature you were hidden from or undetected by at the start of your movement. If you have cover or greater cover from the creature throughout your Stride, you gain the +2 circumstance bonus from cover (or +4 from greater cover) to your Stealth check. Because you're moving, the bonus increase from Taking Cover doesn't apply. You don't get to roll against a creature if, at the end of your movement, you neither are concealed from it nor have cover or greater cover against it. You automatically become observed by such a creature.</p><p><strong>Success</strong> You're undetected by the creature during your movement and remain undetected by the creature at the end of it. You become observed as soon as you do anything other than Hide, Sneak, or Step. If you attempt to Strike a creature, the creature remains off-guard against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check. If you speak or make a deliberate loud noise, you become hidden instead of undetected. If a creature uses Seek and you become hidden to it as a result, you must Sneak if you want to become undetected by that creature again.<br><strong>Failure</strong> A telltale sound or other sign gives your position away, though you still remain unseen. You’re hidden from the creature throughout your movement and remain so.<br><strong>Critical Failure</strong> You're spotted! You're observed by the creature throughout your movement and remain so. If you're invisible and were hidden from the creature, instead of being observed you're hidden throughout your movement and remain so.</p>",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You're spotted! You're observed by the creature throughout your movement and remain so. If you're invisible and were hidden from the creature, instead of being observed you're hidden throughout your movement and remain so.",
          failure:
            "<strong>Failure</strong> A telltale sound or other sign gives your position away, though you still remain unseen. You're hidden from the creature throughout your movement and remain so",
          success: "<strong>Success</strong> You're undetected by the creature during your movement and remain undetected by the creature at the end of it.",
        },
        Title: "Sneak",
      },
      Squeeze: {
        Description:
          '<p>You contort yourself to squeeze through a space so small you can barely fit through. This action is for exceptionally small spaces; many tight spaces are difficult terrain that you can move through more quickly and without a check.</p><p><strong>Critical Success</strong> You squeeze through the tight space in 1 minute per 10 feet of squeezing.<br><strong>Success</strong> You squeeze through in 1 minute per 5 feet.<br><strong>Critical Failure</strong> You become stuck in the tight space. While you\'re stuck, you can spend 1 minute attempting another Acrobatics check at the same DC. Any result on that check other than a critical failure causes you to become unstuck.</p><section class="sample-tasks"><h2>Sample Squeeze Tasks</h2><p><strong>Trained</strong> space barely fitting your shoulders</p><p><strong>Master</strong> space barely fitting your head</p></section>',
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You become stuck in the tight space. While you're stuck, you can spend 1 minute attempting another Acrobatics check at the same DC. Any result on that check other than a critical failure causes you to become unstuck.",
          criticalSuccess: "<strong>Critical Success</strong> You squeeze through the tight space in 1 minute per 10 feet of squeezing.",
          success: "<strong>Success</strong> You squeeze through in 1 minute per 5 feet.",
        },
        Title: "Squeeze",
      },
      Stand: {
        Description: "<p>You stand up from prone.</p>",
        Title: "Stand",
      },
      Steal: {
        Description:
          "<p>You try to take a small object from another creature without being noticed. Typically, you can Steal only an object of negligible Bulk, and you automatically fail if the creature who has the object is in combat or on guard.</p><p>Attempt a Thievery check to determine if you successfully Steal the object. The DC to Steal is usually the Perception DC of the creature wearing the object. This assumes the object is worn but not closely guarded (like a loosely carried pouch filled with coins, or an object within such a pouch). If the object is in a pocket or similarly protected, you take a –5 penalty to your Thievery check. The GM might increase the DC of your check if the nature of the object makes it harder to steal (such as a very small item in a large pack, or a sheet of parchment mixed in with other documents).</p><p>You might also need to compare your Thievery check result against the Perception DCs of observers other than the person wearing the object. The GM may increase the Perception DCs of these observers if they're distracted.</p><p><strong>Success</strong> You steal the item without the bearer noticing, or an observer doesn't see you take or attempt to take the item.<br><strong>Failure</strong> The item's bearer notices your attempt before you can take the object, or an observer sees you take or attempt to take the item. The GM determines the response of any creature that notices your theft.</p>",
        Notes: {
          failure:
            "<strong>Failure</strong> The item's bearer notices your attempt before you can take the object, or an observer sees you take or attempt to take the item. The GM determines the response of any creature that notices your theft.",
          success: "<strong>Success</strong> You steal the item without the bearer noticing, or an observer doesn't see you take or attempt to take the item.",
        },
        Pocketed: "Object pocketed or protected",
        Title: "Steal",
      },
      SteelYourResolve: {
        BadArgs: "This action must be performed with exactly one character or NPC.",
        Content: "Spend a resolve point and regain stamina?",
        NoStamina: "{name} is tired and needs to go to bed! No resolve points remaining.",
        RecoverStamina: "{name} has {ratio} SP and spends a resolve point, recovering half their maximum Stamina.",
        StaminaNotEnabled: "The Stamina variant is not enabled.",
        Title: "Steel Your Resolve",
      },
      Step: {
        Description:
          "<p>You carefully move 5 feet. Unlike most types of movement, Stepping doesn't trigger reactions, such as Attacks of Opportunity, that can be triggered by move actions or upon leaving or entering a square.</p><p>You can't Step into difficult terrain, and you can't Step using a Speed other than your land Speed.</p>",
        Title: "Step",
      },
      Stride: {
        Description: "<p>You move up to your Speed.</p>",
        Title: "Stride",
      },
      Subsist: {
        AfterExplorationPenalty: "After Exploration",
        Description:
          "<p>You try to provide food and shelter for yourself, and possibly others as well, with a standard of living depending on your degree of success. The GM determines the DC based on the nature of the place where you're trying to Subsist. You might need a minimum proficiency rank to Subsist in particularly strange environments. Unlike most downtime activities, you can Subsist after 8 hours or less of exploration, but if you do, you take a –5 penalty.</p><p><strong>Critical Success</strong> You either provide a subsistence living for yourself and one additional creature, or you improve your own food and shelter, granting yourself a comfortable living.<br><strong>Success</strong> You find enough food and shelter with basic protection from the elements to provide you a subsistence living.<br><strong>Failure</strong> You're exposed to the elements and don't get enough food, becoming fatigued until you attain sufficient food and shelter.<br><strong>Critical Failure</strong> You attract trouble, eat something you shouldn't, or otherwise worsen your situation. You take a –2 circumstance penalty to checks to Subsist for 1 week. You don't find any food at all; if you don't have any stored up, you're in danger of starving or dying of thirst if you continue failing.</p><section class=\"sample-tasks\"><h2>Sample Subsist Tasks</h2><p><strong>Untrained</strong> lush forest with calm weather or large city with plentiful resources</p><p><strong>Trained</strong> typical hillside or village</p><p><strong>Expert</strong> typical mountains or insular hamlet</p><p><strong>Master</strong> typical desert or city under siege</p><p><strong>Legendary</strong> barren wasteland or city of undead</p></section>",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You attract trouble, eat something you shouldn't, or otherwise worsen your situation. You take a –2 circumstance penalty to checks to Subsist for 1 week. You don't find any food at all; if you don't have any stored up, you're in danger of starving or dying of thirst if you continue failing. @UUID[Compendium.pf2e.other-effects.Item.wHWWHkjDXmJl4Ia6]{Effect: Adverse Subsist Situation}",
          criticalSuccess:
            "<strong>Critical Success</strong> You either provide a subsistence living for yourself and one additional creature, or you improve your own food and shelter, granting yourself a comfortable living.",
          failure: "<strong>Failure</strong> You're exposed to the elements and don't get enough food, becoming fatigued until you attain sufficient food and shelter.",
          success: "<strong>Success</strong> You find enough food and shelter with basic protection from the elements to provide you a subsistence living.",
        },
        Title: "Subsist",
        Warning: {
          NoSkill:
            "The Subsist action can be used with different skills, and no skill was specified. This typically uses Society if you're in a settlement or Survival if you're in the wild.",
        },
      },
      Swim: {
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You make no progress, and if you're holding your breath, you lose 1 round of air.",
          criticalSuccess: "<strong>Critical Success</strong> You move through the water 10 feet, plus 5 feet per 20 feet of your land Speed (a total of 15 feet for most PCs).",
          success: "<strong>Success</strong> You move through the water 5 feet, plus 5 feet per 20 feet of your land Speed (a total of 10 feet for most PCs).",
        },
        Title: "Swim",
      },
      TakeCover: {
        Description:
          "<p>You press yourself against a wall or duck behind an obstacle to take better advantage of cover. If you would have standard cover, you instead gain greater cover, which provides a +4 circumstance bonus to AC; to Reflex saves against area effects; and to Stealth checks to Hide, Sneak, or otherwise avoid detection. Otherwise, you gain the benefits of standard cover (a +2 circumstance bonus instead). This lasts until you move from your current space, use an attack action, become unconscious, or end this effect as a free action.</p>",
        Title: "Take Cover",
      },
      Tamper: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Your tampering backfires dramatically, creating a small explosion from your own tools or gear. You take [[/r (@actor.level)[fire] #Tamper Backfire]]{fire damage equal to your level}.",
          criticalSuccess:
            "<strong>Critical Success</strong> Your tampering is incredibly effective. If you tampered with a weapon, the enemy takes a -2 circumstance penalty to attack rolls and damage rolls with that weapon. If you tampered with armor, the armor hampers the enemy's movement, making the enemy off-guard and inflicting a -10-foot penalty to its Speeds. The effect lasts until the enemy Interacts to remove it, regardless of which one you used. @UUID[Compendium.pf2e.feat-effects.Item.rzcpTJU9MvW1x1gz]{Effect: Armor Tampered With (Critical Success)} @UUID[Compendium.pf2e.feat-effects.Item.o7qm13OmaYOMwgib]{Effect: Weapon Tampered With (Critical Success)}",
          success:
            "<strong>Success</strong> Your tampering is temporarily effective. As critical success, but the effect ends at the start of your next turn, even if the enemy doesn't Interact to end it. @UUID[Compendium.pf2e.feat-effects.Item.IfRkgjyh0JzGalIy]{Effect: Armor Tampered With (Success)} @UUID[Compendium.pf2e.feat-effects.Item.4QWayYR3JSL9bk2T]{Effect: Weapon Tampered With (Success)}",
        },
        Title: "Tamper",
      },
      Track: {
        Description:
          "<p>You follow tracks, moving at up to half your travel Speed. After a successful check to Track, you can continue following the tracks at half your Speed without attempting additional checks for up to 1 hour. In some cases, you might Track in an encounter. In this case, Track is a single action and doesn't have the exploration trait, but you might need to roll more often because you're in a tense situation. The GM determines how often you must attempt this check.</p><p>You attempt your Survival check when you start Tracking, once every hour you continue tracking, and any time something significant changes in the trail. The GM determines the DCs for such checks, depending on the freshness of the trail, the weather, and the type of ground.</p><p><strong>Success</strong> You find the trail or continue to follow the one you're already following.<br><strong>Failure</strong> You lose the trail but can try again after a 1-hour delay.<br><strong>Critical Failure</strong> You lose the trail and can't try again for 24 hours.</p><section class=\"sample-tasks\"><h2>Sample Track Tasks</h2><p><strong>Untrained</strong> the path of a large army following a road</p><p><strong>Trained</strong> relatively fresh tracks of a rampaging bear through the plains</p><p><strong>Expert</strong> a nimble panther's tracks through a jungle, tracks obscured by rainfall</p><p><strong>Master</strong> tracks obscured by winter snow, tracks of a mouse or smaller creature, tracks left on surfaces that can't hold prints like bare rock</p><p><strong>Legendary</strong> old tracks through a windy desert's sands, tracks obscured by a major blizzard or hurricane</p></section>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You lose the trail and can't try again for 24 hours.",
          failure: "<strong>Failure</strong> You lose the trail but can try again after a 1-hour delay.",
          success: "<strong>Success</strong> You find the trail or continue to follow the one you're already following.",
        },
        Title: "Track",
      },
      TreatDisease: {
        Description:
          "<p>You spend at least 8 hours caring for a diseased creature. Attempt a Medicine check against the disease's DC. After you attempt to Treat a Disease for a creature, you can't try again until after that creature's next save against the disease.</p><p><strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the disease.<br><strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the disease.<br><strong>Critical Failure</strong> Your efforts cause the creature to take a –2 circumstance penalty to its next save against the disease.</p>",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Your efforts cause the creature to take a -2 circumstance penalty to its next save against the disease.<br/>@UUID[Compendium.pf2e.equipment-effects.Item.5oYKYXAexr0vhx84]{Effect: Treat Disease (Critical Failure)}",
          criticalSuccess:
            "<strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the disease.<br/>@UUID[Compendium.pf2e.equipment-effects.Item.id20P4pj7zDKeLmy]{Effect: Treat Disease (Critical Success)}",
          success:
            "<strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the disease.<br/>@UUID[Compendium.pf2e.equipment-effects.Item.Ee2xfKX1yyqGIDZj]{Effect: Treat Disease (Success)}",
        },
        Title: "Treat Disease",
      },
      TreatPoison: {
        Description:
          "<p>You treat a patient to prevent the spread of poison. Attempt a Medicine check against the poison's DC. After you attempt to Treat a Poison for a creature, you can't try again until after the next time that creature attempts a save against the poison.</p><p><strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the poison.<br><strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the poison.<br><strong>Critical Failure</strong> Your efforts cause the creature to take a –2 circumstance penalty to its next save against the poison.</p>",
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> Your efforts cause the creature to take a -2 circumstance penalty to its next save against the poison.<br/>@UUID[Compendium.pf2e.equipment-effects.Item.ESuBosh3t1pXEcBj]{Effect: Treat Poison (Critical Failure)}",
          criticalSuccess:
            "<strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the poison.<br/>@UUID[Compendium.pf2e.equipment-effects.Item.XwCBalKJf3CiEiFa]{Effect: Treat Poison (Critical Success)}",
          success:
            "<strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the poison.<br/>@UUID[Compendium.pf2e.equipment-effects.Item.XWenziR7J3mwKV4W]{Effect: Treat Poison (Success)}",
        },
        Title: "Treat Poison",
      },
      TreatWounds: {
        Content:
          "Select a target DC. Remember that you can't attempt a heal above your proficiency. Attempting to do so will downgrade the DC and amount healed to the highest you're capable of.",
        DC: {
          Expert: "Expert DC 20, +10 Healing",
          Legendary: "Legendary DC 40, +50 Healing",
          Master: "Master DC 30, +30 Healing",
          Mod: "DC Modifier",
          Trained: "Trained DC 15",
        },
        Error: "Token {name} does not have the medicine skill",
        Feats: {
          MortalHealing: "Mortal Healing",
          RiskySurgery: "Risky Surgery",
        },
        Label: "Treat Wounds",
        Rolls: {
          RiskySurgery: "Damage Roll: Risky Surgery",
          TreatWounds: "Healing Roll: Treat Wounds",
          TreatWoundsCriticalFailure: "Damage Roll: Treat Wounds",
        },
        SkillSelect: "Treat Wounds Skill",
      },
      Trip: {
        Description:
          "<p>You try to knock a creature to the ground. Attempt an Athletics check against the target's Reflex DC.</p><p><strong>Critical Success</strong> The target falls and lands prone and takes 1d6 bludgeoning damage.<br><strong>Success</strong> The target falls and lands prone.<br><strong>Critical Failure</strong> You lose your balance and fall and land prone.</p>",
        Notes: {
          criticalFailure: "<strong>Critical Failure</strong> You lose your balance and fall and land @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          criticalSuccess:
            "<strong>Critical Success</strong> The target falls and lands @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone} and takes [[/r 1d6[bludgeoning] # Bludgeoning damage]]{1d6} bludgeoning damage.",
          success: "<strong>Success</strong> The target falls and lands @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
        },
        Title: "Trip",
      },
      TumbleThrough: {
        Description:
          "<p>You Stride up to your Speed. During this movement, you can try to move through the space of one enemy. Attempt an Acrobatics check against the enemy's Reflex DC as soon as you try to enter its space. You can Tumble Through using Climb, Fly, Swim, or another action instead of Stride in the appropriate environment.</p><p><strong>Success</strong> You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don't have enough Speed to move all the way through its space, you get the same effect as a failure.<br><strong>Failure</strong> Your movement ends, and you trigger reactions as if you had moved out of the square you started in.</p>",
        Notes: {
          failure: "<strong>Failure</strong> Your movement ends, and you trigger reactions as if you had moved out of the square you started in.",
          success:
            "<strong>Success</strong> You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don't have enough Speed to move all the way through its space, you get the same effect as a failure.",
        },
        Title: "Tumble Through",
      },
      WhirlingThrow: {
        Notes: {
          criticalFailure:
            "<strong>Critical Failure</strong> You don't throw the creature, and it's no longer @UUID[Compendium.pf2e.conditionitems.Item.kWc1fhmv9LBiTuei]{Grabbed} or @UUID[Compendium.pf2e.conditionitems.Item.VcDeM8A5oI6VqhbM]{Restrained} by you.",
          criticalSuccess:
            "<strong>Critical Success</strong> You throw the creature the desired distance and it lands @UUID[Compendium.pf2e.conditionitems.Item.j91X7x0XSomq8d60]{Prone}.",
          failure: "<strong>Failure</strong> You don't throw the creature.",
          success: "<strong>Success</strong> You throw the creature the desired distance.",
        },
        Title: "Whirling Throw",
      },
    },
    ActionsCheck: {
      acrobatics: "Acrobatics Check",
      arcana: "Arcana Check",
      athletics: "Athletics Check",
      crafting: "Crafting Check",
      deception: "Deception Check",
      diplomacy: "Diplomacy Check",
      intimidation: "Intimidation Check",
      medicine: "Medicine Check",
      nature: "Nature Check",
      occultism: "Occultism Check",
      perception: "Perception Check",
      performance: "Performance Check",
      religion: "Religion Check",
      society: "Society Check",
      spell: "{type} Spell Attack",
      stealth: "Stealth Check",
      survival: "Survival Check",
      thievery: "Thievery Check",
      unarmed: "Unarmed Attack Roll",
      x: "{type} Check",
      "x-attack-roll": "{type} Attack Roll",
    },
    ActionsWarning: {
      NoActor: "Select at least one token before rolling, or assign a default character.",
      NoStatistic: "Actor {name} ({id}) does not have a statistic for {statistic}.",
      Variants: {
        None: "Action '{action}' has no variants, but variant '{variant}' was requested.",
        Multiple: "Action '{action}' has multiple variants, but no variant was requested.",
        Nonexisting: "Specified variant '{variant}' does not exist for action '{action}'",
      },
    },
  },
};

export default en;
