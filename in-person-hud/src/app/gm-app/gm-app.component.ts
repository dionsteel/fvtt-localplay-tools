import { ChangeDetectionStrategy, Component, TrackByFunction, ɵdetectChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, Subject, debounceTime, scan, share, take, tap } from "rxjs";
import { EmbeddedCollection } from "src/types/foundry/common/abstract/embedded-collection.mjs";

@Component({
  selector: "app-gm-app",
  // standalone: true,
  // imports: [CommonModule],
  // changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: "./gm-app.component.html",
  styleUrls: ["./gm-app.component.scss"],
})
export class GMAppComponent {
  dirty = new Subject();
  tokens: Token[] = [];
  selectedTokenIds: string[] = [];
  // tracker:TrackByFunction<Token> = ()
  constructor() {
    this.dirty.pipe(debounceTime(2)).subscribe(() => ɵdetectChanges(this));
    console.log("GM APP CREATED!");
  }
  get system() {
    return game.system.id;
  }
  shouldIncludeToken(t: TokenDocument<Scene>) {
    // t.permission;
    CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
    return t.isOwner || (t.actor && (t as any).permission >= CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER);
  }
  ngOnInit() {
    // const bounds = canvas.tokens.getBounds(true);
    // this.tokens = game.canvas.tokens.ownedTokens;

    // const all_tokens = canvas.scene.tokens as Collection<TokenDocument>;
    // console.log("getting tokens", all_tokens);
    // this.tokens = all_tokens.filter((t) => this.shouldIncludeToken(t)).map((t) => t.object);
    // console.log("got tokens", this.tokens);
    //all_tokens.forEach((t) => this.newTokens.next(t));
    // Hooks.on("", () => {
    // const isControlled = existing && controlledTokenIds.includes(existing.id);
    // if (isControlled) {
    //   this.selectedTokenId = document.id;
    // }
    // console.log("updateToken", existing ? existing.id : null, document.id, this.selectedTokenId, isControlled, {
    //   existing,
    //   document,
    //   data,
    //   options,
    //   controlledTokenIds,
    // });
    // ɵdetectChanges(this);
    // });
    if (false) {
      Hooks.on("createToken", (document: TokenDocument, data, options) => {
        console.log("createToken");
        let existing = this.tokens.find((t) => t.id == document.object.id);
        if (!existing) {
          // document.object.id
          existing = document.object;
          this.tokens.push(existing);
        }
        this.selectedTokenIds = canvas?.tokens?.controlled.map((t) => t.id);
        console.log("createToken", { document, data, options, existing, selectedIds: this.selectedTokenIds });
        this.dirty.next(true);
      });
      Hooks.on("updateToken", (document: Token, data, options) => {
        // this.newTokens.next(canvas.tokens.get(document.id));
        // canvas.tokens._controlled[document.id]
        console.log("updateToken");
        let existing = this.tokens.find((t) => t.id == document.id);
        if (!existing) {
          existing = canvas.tokens.get(document.id);
          this.tokens.push(existing);
        }
        this.selectedTokenIds = canvas?.tokens?.controlled.map((t) => t.id);
        console.log("updateToken", { document, data, options, existing, selectedIds: this.selectedTokenIds });
        this.dirty.next(true);
      });
      Hooks.on("deleteToken", (document: Token, data, options) => {
        let existing = this.tokens.findIndex((t) => t.id == document.id);
        if (existing >= 0) {
          this.tokens.splice(existing, 1);
        }
        console.log("Deleted Token", existing, this.tokens);
        this.dirty.next(true);
      });
      Hooks.on("controlToken", (token: Token, data: any, options: any) => {
        this.selectedTokenIds.push(token.id);
        this.dirty.next(true);
      });
    }
  }
}
