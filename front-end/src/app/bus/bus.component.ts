import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Bus} from "../model/Bus";
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  
  public Buses : Bus[] =[];
  @Output() msgToSibling : EventEmitter<Bus> = new EventEmitter();
  @Output() msgToSibling2 : EventEmitter<Number> = new EventEmitter();
  // public Buses:Bus[] = [
  //   {id: 1, year: 1974, wheels: 4, reading: 2000, air_conditioning: true, capacity: 20, status: "abc"},
  //   {id: 2, year: 1998, wheels: 8, reading: 15000, air_conditioning: false, capacity: 34, status: "abc"},
  //   {id: 3, year: 1990, wheels: 12, reading: 10000, air_conditioning: true, capacity: 20, status: "abc"}
  // ];
  constructor(private busService:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  submit(Bus: Bus): void {
    this.msgToSibling.emit(Bus);
    let num;
    this.busService.getResale(Bus).subscribe(
      data => { num = data;  this.msgToSibling2.emit((data))},
      err => console.error(err),
      () => console.log('done loading Buses')
    );
  }

  getData():void{
    
    this.busService.getBuses().subscribe(
      data => { this.Buses = data; console.log(data)},
      err => console.error(err),
      () => console.log('done loading Buses')
    );

    // console.log('JSON Response = ', JSON.stringify(this.Buses));
  }

  

}
