import * as Abstract from "./abstract/module.d.ts";
import * as Constants from "./constants.d.ts";
import * as Data from "./data/module.d.ts";
import * as Documents from "./documents/module.d.ts";
import * as Utils from "./utils/module.d.ts";

// global-modifying module
import "./types.d.ts";

export declare global {
    const CONST: typeof Constants;
    namespace globalThis {
        export import Color = Utils.Color;

        module foundry {
            export import CONST = Constants;
            export import abstract = Abstract;
            export import data = Data;
            export import documents = Documents;
            export import utils = Utils;
        }
    }
}
