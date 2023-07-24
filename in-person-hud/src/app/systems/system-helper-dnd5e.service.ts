import { Injectable } from "@angular/core";
import { SystemHelperService } from "./system-helper.service";
import { FoundryAPIService } from "../foundry-api.service";

@Injectable({
  providedIn: "root",
})
export class SystemHelperDND5eService extends SystemHelperService {
  public static override SYSTEM_NAME: string = 'dnd5e';
  constructor(api: FoundryAPIService) {
    super(api);
  }
}
