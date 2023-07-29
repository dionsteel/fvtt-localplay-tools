import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgElement, WithProperties } from "@angular/elements";
import { FoundryAPIService } from "../foundry-api.service";
import { SeatComponent } from "../seat/seat.component";

@Component({
  selector: "app-table-app",
  // // standalone: true,
  // imports: [CommonModule],
  templateUrl: "./table-app.component.html",
  styleUrls: ["./table-app.component.scss"],
})
export class TableAppComponent {
  constructor(public api: FoundryAPIService) {
    console.log("Table App Loaded!");
    // $("#interface").css("display", "none");
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "iph-table-app": NgElement & WithProperties<{}>;
  }
}
