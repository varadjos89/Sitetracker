import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../model/Bus';
import Swal from 'sweetalert2';

@Injectable()

export class ApiService {
    public busget: string = "http://localhost:8080/all";
    public busSave: string = "http://localhost:8080/save";
    public resaleget: string = "http://localhost:8080/calculate";

    constructor(private _http:HttpClient) {} 

    getBuses():Observable<Bus[]> {
     return this._http.get<Bus[]>(this.busget);
    }

    postBus(bus :Bus) {

    this._http.post(this.busSave, 
    {
        "bus_id": bus.bus_id,
        "year": bus.year,
        "wheels": bus.wheels,
        "odometer_reading": bus.odometer_reading,
        "air_conditioning": bus.air_conditioning,
        "capacity": bus.capacity,
        "status": bus.status,
        "bus_url": bus.bus_url    
    },
    { headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(
      (val) => {
          Swal.fire('Success', 'The updates are saved in the database', 'success')
      },
      response => {
          Swal.fire('Error', 'Error fetching resale value', 'error')
      },
      () => {
          console.log("The POST observable is now completed.");
      });;
    }

    getResale(bus: Bus):Observable<Number> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    
    // const params = new HttpParams().append('id', bus.bus_id+'');
    const params = new HttpParams().append('status', bus.status)
                                   .append('capacity', bus.capacity+'')
                                   .append('reading', bus.odometer_reading+'')
                                   .append('ac', bus.air_conditioning+'')
                                   .append('year', bus.year+'')
    return this._http.get<Number>(this.resaleget, {headers, params})

    // return this._http.get<Number>(this.resaleget, {headers, params})
    }
}