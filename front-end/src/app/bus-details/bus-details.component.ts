import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../model/Bus';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  changedYear: number=0;
  changedCapacity: number=0;
  changedReading: number=0;
  @Input()ResaleValue: Number=0;
   @Input() msg: Bus = {bus_id: -1, year: 0, wheels: 4, odometer_reading: 2000, air_conditioning: true, capacity: 0, status: "abc", bus_url: ""};
  constructor(private busService:ApiService) { }

  ngOnInit(): void {

  }

  onSave(): void {
    
    if(this.changedYear==0 && this.changedCapacity==0 &&  this.changedReading==0)
        return;
    if(this.changedYear!=0)
        this.msg.year= this.changedYear;
    if(this.changedCapacity!=0)
        this.msg.capacity= this.changedCapacity;
    if(this.changedReading!=0)
         this.msg.odometer_reading= this.changedReading;  

    console.log("status "+ this.msg.status,
        "year "+ this.msg.year,
        "capacity "+ this.msg.capacity,
        "air_conditioning "+ this.msg.air_conditioning,
        "odometer_reading "+ this.msg.odometer_reading,
        "bus_url "+ this.msg.bus_url,
        "bus_id "+ this.msg.bus_id,
        "No_of_wheels "+ this.msg.wheels);
    this.busService.postBus(this.msg);
  }

}
