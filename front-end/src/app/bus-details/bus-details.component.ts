import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../model/Bus';
import {ApiService} from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  changedYear: number= 0;
  changedCapacity: number=0;
  changedReading: number=0;
  @Input()ResaleValue: Number=0;
   @Input() msg: Bus = {bus_id: -1, year: 0, wheels: 4, odometer_reading: 2000, air_conditioning: true, capacity: 0, status: "abc", bus_url: ""};
  constructor(private busService:ApiService) { }

  ngOnInit(): void {

  }

  onSave(): void {
    
    if(confirm("Are you sure to Update?")) {
    
    if(this.changedYear==0 && this.changedCapacity==0 &&  this.changedReading==0){
      Swal.fire('No updates', 'The values have not been updated', 'info');
      return;
    }

    if(this.changedYear==0)
        this.changedYear= this.msg.year;
    if(this.changedCapacity==0)
        this.changedCapacity=this.msg.capacity;
    if(this.changedReading==0)
        this.changedReading=this.msg.odometer_reading;

    if(this.changedYear==this.msg.year && this.changedCapacity==this.msg.capacity &&  this.changedReading==this.msg.odometer_reading){
      Swal.fire('No updates', 'The values have not been updated', 'info');
      return;
    }

    if(this.changedCapacity!=24 && this.changedCapacity!=36){
      Swal.fire('Error', "The capacity should be either be 24 or 36", 'error');
      return;
    }

    if(this.changedYear<1700 || this.changedYear>new Date().getFullYear()){
      Swal.fire('Error', 'Please enter valid a year', 'error');
      return;
    }

    if(this.changedReading<0)
    {
      Swal.fire('Error', 'Please enter valid a reading', 'error');
      return;
    }

    this.msg.year= this.changedYear;
    this.msg.capacity= this.changedCapacity;
    this.msg.odometer_reading= this.changedReading;
    
    this.busService.getResale(this.msg).subscribe(
      data => { this.ResaleValue = data;},
      err => console.error(err),
      () => console.log('done loading Buses')
    );

    this.busService.postBus(this.msg);
    }
    
  }
}
