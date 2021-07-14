package com.sitetracker.fleet.pojo;

import javax.persistence.*;
import java.sql.Date;


@Entity
public class Maintenance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Maintenance_id;
    private Date start_date;
    private Date end_date;
    private String Description;
    private boolean completed;

    @ManyToOne
    @JoinColumn(name="Bus_id", nullable=false)
    private Bus bus;

    @ManyToOne
    @JoinColumn(name="Garage_id", nullable=false)
    private Garage garage;

    public Maintenance() {
    }

    public Long getMaintenance_id() {
        return Maintenance_id;
    }

    public void setMaintenance_id(Long maintenance_id) {
        Maintenance_id = maintenance_id;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public Garage getGarage() {
        return garage;
    }

    public void setGarage(Garage garage) {
        this.garage = garage;
    }
}