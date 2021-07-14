import { Component } from '@angular/core';
import { Bus } from './model/Bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sitetracker';
  currentMsgFromChild1ToChild2: Bus = {bus_id: 0, year: 0, wheels: 0, odometer_reading: 0, air_conditioning: true, capacity: 20, status: "abc", bus_url: ""};
  num: Number=0;
  fwdMsgToSib2($event: Bus) { 
    // this.currentMsgFromChild1ToChild2 = $event; 
  }
}
