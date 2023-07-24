import { SystemHelperService } from "./system-helper.service";
import { SystemHelperPF2eService } from "./system-helper-pf2e.service";
import { SystemHelperDND5eService } from "./system-helper-dnd5e.service";
import { SystemHelperStarfinderService } from "./system-helper-starfinder.service";
import { SystemHelperDCCService } from "./system-helper-dcc.service";
const helpers = {
  pf2e: SystemHelperPF2eService,
  dnd5e: SystemHelperDND5eService,
  dcc: SystemHelperDCCService,
  starfinder: SystemHelperStarfinderService,
  generic: SystemHelperService,
};
export default helpers;
export { SystemHelperService, SystemHelperDCCService, SystemHelperDND5eService, SystemHelperPF2eService, SystemHelperStarfinderService };
