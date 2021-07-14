package com.sitetracker.fleet.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Garage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Garage_id;
    private Long neighbore_id;
    private String city;
    private String state;
    private int pincode;

    public Garage() {
    }


}
