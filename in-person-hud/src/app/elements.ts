import { NgElement, WithProperties } from '@angular/elements';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { GMAppComponent } from './gm-app/gm-app.component';
import { TableAppComponent } from './table-app/table-app.component';
export const elements: { [selector: string]: any } = {
  'iph-seat': SeatComponent,
  'iph-gm-app': GMAppComponent,
  'iph-table-app': TableAppComponent
};
// // export default elements;
// declare global {
  // interface HTMLElementTagNameMap {
//     'iph-seat': NgElement & WithProperties<{seatIndex: number; }>
//   }
// }

// document.createElement('div').addEventListener()