import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Bus} from "../model/Bus";
import {ApiService} from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  
  public Buses : Bus[] =[];
  @Output() msgToSibling : EventEmitter<Bus> = new EventEmitter();
  @Output() msgToSibling2 : EventEmitter<string> = new EventEmitter();
  
  constructor(private busService:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  submit(Bus: Bus): void {
    this.msgToSibling.emit(Bus);
    let num;
    this.busService.getResale(Bus).subscribe(
      data => {  
        let currentResaleValue = data + "";
        currentResaleValue = currentResaleValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");        
        this.msgToSibling2.emit((currentResaleValue))},
      err => Swal.fire('Error', "Unable to get the resale value", 'error'),
      () => console.log('done loading Buses')
    );
  }

  getData():void{
    
    this.busService.getBuses().subscribe(
      data => { this.Buses = data; console.log(data)},
      err => Swal.fire('Error', "Unable to get the fleet data", 'error'),
      () => console.log('done loading Buses')
    );
  }

}
