import PlayerRolls from "./PlayerRolls";
import RollPrompt from "./RollPrompt";
import RollSettings from "./RollSettings";
import SETTINGS from "./Settings";
import { socket } from "./socket";

SETTINGS.init("fvtt-roll-on-player");

Hooks.on("init", function () {
  SETTINGS.register(PlayerRolls.PREF_GM_STATE, {
    config: true,
    scope: "world",
    name: "FVTT_ROLL_ON_PLAYER.Settings.GM_Name",
    hint: "FVTT_ROLL_ON_PLAYER.Settings.GM_Hint",
    default: "disabled",
    choices: {
      disabled: "FVTT_ROLL_ON_PLAYER.Setting_Options.Disabled",
      always: "FVTT_ROLL_ON_PLAYER.Setting_Options.Always",
      toggle: "FVTT_ROLL_ON_PLAYER.Setting_Options.Toggle",
    },
    onChange: () => {
      ui.controls.initialize();
    },
  });

  SETTINGS.register(PlayerRolls.PREF_PC_STATE, {
    config: true,
    scope: "world",
    name: "FVTT_ROLL_ON_PLAYER.Settings.PC_Name",
    hint: "FVTT_ROLL_ON_PLAYER.Settings.PC_Hint",
    default: "disabled",
    choices: {
      disabled: "FVTT_ROLL_ON_PLAYER.Setting_Options.Disabled",
      always: "FVTT_ROLL_ON_PLAYER.Setting_Options.Always",
      toggle: "FVTT_ROLL_ON_PLAYER.Setting_Options.Toggle",
    },
    onChange: () => {
      ui.controls.initialize();
    },
  });

  SETTINGS.register(RollPrompt.PREF_FOCUS_INPUT, {
    config: true,
    scope: "client",
    name: "FVTT_ROLL_ON_PLAYER.Settings.FocusInput_Name",
    hint: "FVTT_ROLL_ON_PLAYER.Settings.FocusInput_Hint",
    type: Boolean,
    default: true,
  });

  SETTINGS.register(PlayerRolls.PREF_FLAGGED, {
    name: "FVTT_ROLL_ON_PLAYER.Settings.Flagged_Name",
    hint: "FVTT_ROLL_ON_PLAYER.Settings.Flagged_Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  SETTINGS.register(PlayerRolls.PREF_TOGGLED, {
    config: false,
    scope: "client",
    type: Boolean,
    default: false,
    onChange: (value: boolean) => {
      const button = $("ol#controls>li#df-manual-roll-toggle");
      if (value) button.addClass("active");
      else button.removeClass("active");
    },
  });
  Hooks.on("getSceneControlButtons", (controls: SceneControl[]) => {
    if (!PlayerRolls.toggleable) return;
    controls
      .find((x) => x.name === "token")
      .tools.push({
        icon: "fas fa-dice-d20",
        name: "manualRoll",
        title: "FVTT_ROLL_ON_PLAYER.SceneControlTitle",
        visible: PlayerRolls.toggleable,
        toggle: true,
        active: PlayerRolls.toggled,
        onClick: (toggled: boolean) => PlayerRolls.setToggled(toggled),
      });
  });

  RollSettings.init();
});
Hooks.on("ready", function () {
  if (!game.modules.get("lib-wrapper")?.active && game.user.isGM) {
    ui.notifications.error(
      game.i18n.localize("FVTT_ROLL_ON_PLAYER.Error_libWrapper_Missing")
    );
    return;
  }
  Handlebars.registerHelper({ dfmr_mul: (v1, v2) => v1 * v2 });
  PlayerRolls.patch();
});

Hooks.on("createChatMessage", async (chatMessage: ChatMessage) => {
  if (!chatMessage.user || chatMessage.user.id !== game.userId) return;
  // Ignore non-roll, non-flagged, non-manual messages
  if (
    !chatMessage.isRoll ||
    !PlayerRolls.flagged ||
    !PlayerRolls.shouldRollManually
  )
    return;
  let flavor = game.i18n.localize("FVTT_ROLL_ON_PLAYER.Flag");
  // If all of the manual rolls were cancelled, don't set the flag
  if (
    !chatMessage.roll.terms.some(
      (value: any) =>
        value instanceof DiceTerm && (<any>value.options).isManualRoll
    )
  )
    return;
  if (chatMessage.data.flavor) flavor += " " + chatMessage.data.flavor;
  await chatMessage.update({ flavor: flavor });
});
