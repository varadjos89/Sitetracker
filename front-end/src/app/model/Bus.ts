export class Bus{
    public bus_id: number;
    public year: number;
    public wheels : number;
    public odometer_reading: number;
    public air_conditioning : boolean;
    public capacity :number;
    public status: string;
    public bus_url: string;

    constructor(bus_id: number,year: number,wheels : number,odometer_reading: number,air_conditioning : boolean,capacity :number,status: string, bus_url: string) {
        this.bus_id = bus_id;
        this.year = year;
        this.wheels = wheels;
        this.odometer_reading = odometer_reading;
        this.air_conditioning = air_conditioning;
        this.capacity = capacity;
        this.status = status;
        this.bus_url = bus_url;
    }
}