import { ɵdetectChanges } from "@angular/core";
import { Subject, debounceTime } from "rxjs";

export class CDComponent {
  dirty: Subject<void | any | undefined> & { next(v?: any): void } = new Subject<void | any | undefined>();
  constructor() {
    this.dirty.pipe(debounceTime(100)).subscribe(() => ɵdetectChanges(this));
  }
}
