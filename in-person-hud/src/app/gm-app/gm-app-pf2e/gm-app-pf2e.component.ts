import { Component } from "@angular/core";
import { Subject, scan, tap, share, BehaviorSubject } from "rxjs";
import { CDComponent } from "src/app/cdcomponent";
import { SystemHelperPF2eService } from "src/app/systems";
import { eventHook } from "src/lib/state";
import { TokenPF2e } from "src/types/pf2e/module/canvas";
import { ActorsPF2e } from "src/types/pf2e/module/collection/actors";
import { ActorPF2e, ChatMessagePF2e, ItemPF2e, MacroPF2e, UserPF2e } from "src/types/pf2e/module/documents";
import { EncounterPF2e } from "src/types/pf2e/module/encounter";
import { ScenePF2e, TokenDocumentPF2e } from "src/types/pf2e/module/scene";

@Component({
  selector: "app-gm-app-pf2e",
  templateUrl: "./gm-app-pf2e.component.html",
  styleUrls: ["./gm-app-pf2e.component.scss"],
})
export class GmAppPf2eComponent extends CDComponent {
  game = this.helper.game;
  newTokens = new Subject<TokenPF2e>();
  currentTokens = this.newTokens.pipe(
    scan<TokenPF2e<any>, TokenPF2e[]>((a, c) => {
      if (!a.includes(c)) {
        a.push(c);
      }
      return a;
    }, []),
    tap<TokenPF2e[]>((v) => {
      console.log("Current Tokens: ", v);
      this.dirty.next();
    }),
    share<TokenPF2e[]>({ connector: () => new BehaviorSubject([]) })
  );
  tokens: TokenPF2e<TokenDocumentPF2e<ScenePF2e>>[];

  constructor(public helper: SystemHelperPF2eService) {
    super();
    this.currentTokens.subscribe((tokens) => (this.tokens = tokens.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))));
  }

  _getId(idx: number, token: Token) {
    return token.id;
  }

  refreshTokens() {
    this.helper.canvas.tokens.ownedTokens.forEach((t) => {
      console.log("tokens", t);
      this.newTokens.next(t);
    });
    this.dirty.next(true);
  }

  ngOnInit() {
    console.log("gmapp oninit", canvas.tokens.ownedTokens);
    this.refreshTokens();

    eventHook("controlToken").subscribe(this.dirty);
    eventHook("updateToken").subscribe(([t]) => {
      this.newTokens.next(t as any);
      this.dirty.next(true);
    });
    eventHook("createToken").subscribe(([t]) => {
      this.newTokens.next(t as any);
      this.dirty.next(true);
    });
  }
}
