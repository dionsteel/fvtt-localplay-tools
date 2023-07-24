import { Injectable } from "@angular/core";
import { SystemHelperService } from "./system-helper.service";
import { FoundryAPIService } from "../foundry-api.service";

@Injectable({
  providedIn: "root",
})
export class SystemHelperDCCService extends SystemHelperService {
  public static override SYSTEM_NAME: string = 'dcc';
  constructor(api: FoundryAPIService) {
    super(api);
  }
}
