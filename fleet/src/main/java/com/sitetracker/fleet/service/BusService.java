package com.sitetracker.fleet.service;

import com.sitetracker.fleet.pojo.Bus;
import com.sitetracker.fleet.pojo.BusCondition;
import com.sitetracker.fleet.repository.BusConditionRepository;
import com.sitetracker.fleet.repository.BusRepository;
import com.sitetracker.fleet.repository.ResalePriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private ResalePriceRepository priceRepository;

    @Autowired
    private BusConditionRepository conditionRepository;

    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    public Bus findBus(Long id){
        return busRepository.getById(id);
    }

    public double getStartingSalePrice(int capacity){
        return priceRepository.getStartingSalePrice(capacity);
    }

    public List<BusCondition> getBusConditions(){
        return conditionRepository.getStartingSalePrice();
    }

    public Bus saveBus(Bus bus){
          return busRepository.save(bus);
    }
}
