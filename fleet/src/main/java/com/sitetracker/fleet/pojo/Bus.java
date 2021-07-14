package com.sitetracker.fleet.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bus_id;
    private int year;
    private int wheels;
    private long odometer_reading;
    private boolean air_conditioning;
    private int capacity;
    private int status;
    private String bus_url;

    public Bus() {
    }

    public Long getBus_id() {
        return bus_id;
    }

    public void setBus_id(Long bus_id) {
        this.bus_id = bus_id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getWheels() {
        return wheels;
    }

    public void setWheels(int wheels) {
        this.wheels = wheels;
    }

    public long getOdometer_reading() {
        return odometer_reading;
    }

    public void setOdometer_reading(long odometer_reading) {
        this.odometer_reading = odometer_reading;
    }

    public boolean isAir_conditioning() {
        return air_conditioning;
    }

    public void setAir_conditioning(boolean air_conditioning) {
        this.air_conditioning = air_conditioning;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getBus_url() {
        return bus_url;
    }

    public void setBus_url(String bus_url) {
        this.bus_url = bus_url;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "bus_id=" + bus_id +
                ", year=" + year +
                ", wheels=" + wheels +
                ", odometer_reading=" + odometer_reading +
                ", air_conditioning=" + air_conditioning +
                ", capacity=" + capacity +
                ", status=" + status +
                ", bus_url='" + bus_url + '\'' +
                '}';
    }
}
