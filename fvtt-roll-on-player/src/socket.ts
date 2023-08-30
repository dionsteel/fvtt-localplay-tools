import SETTINGS from "./Settings";

let socket: socketlib.Socket;
Hooks.once("socketlib.ready", () => {
  socket = socketlib.registerModule("fvtt-roll-on-player");
  // socket.register("hello", showHelloMessage);
  // socket.register("add", add);

  socket.register("displayCustomForm", displayCustomForm);
});

Hooks.once("ready", async () => {
  // Let's send a greeting to all other connected users.
  // Functions can either be called by their given name...
  // socket.executeForEveryone("hello", game.user?.name);
  // ...or by passing in the function that you'd like to call.
  // socket.executeForEveryone(showHelloMessage, game.user?.name);
  // The following function will be executed on a GM client.
  // The return value will be sent back to us.
  // const result = await socket.executeAsGM("add", 5, 3);
  // console.log(`The GM client calculated: ${result}`);
});

function showHelloMessage(userName: string) {
  console.log(`User ${userName} says hello!`);
}

function add(a: number, b: number) {
  console.log("The addition is performed on a GM client.");
  return a + b;
}

export async function displayCustomForm(formName: string, formInput: any) {
  const form: PlayerSlaveForm = new PlayerSlaveForm(
    formInput,
    forms[formName].options
  );
  const result: Promise<any> = new Promise((resolve) => {
    form.onUpdate = resolve;
  });
  await form?.render();
  return await result;
}

export async function displayFormRemotely(
  userId: string,
  formName: string,
  formInput: any
) {
  return await socket.executeAsUser(
    "displayCustomForm",
    userId,
    formName,
    formInput
  );
}

export class PlayerSlaveForm extends FormApplication<
  FormApplicationOptions,
  any
> {
  _resolved = false;
  public onUpdate: AnyFunction = () => {};
  constructor(
    // private onUpdate: AnyFunction,
    object: any,
    options: FormApplicationOptions
  ) {
    super(object, options);
  }

  protected _updateObject(
    event: Event,
    formData?: object | undefined
  ): Promise<unknown> {
    this._resolved = true;
    return this.onUpdate({ success: true, formData });
  }

  async _render(force?: boolean, options?: Application.RenderOptions) {
    await super._render(force, options);
    this.element.find("input")[0]?.focus();
  }
  async close(options: FormApplication.CloseOptions) {
    if (!this._resolved) {
      this.onUpdate({ success: false, data: this.object });
    }
    return super.close(options);
  }
}

const forms: any = {
  manual_roll: {
    options: {
      title: game.i18n.localize("FVTT_ROLL_ON_PLAYER.Prompt.DefaultTitle"),
      template: `modules/${SETTINGS.MOD_NAME}/templates/roll-prompt.hbs`,
      width: 400,
    },
  },
};

export { socket };
