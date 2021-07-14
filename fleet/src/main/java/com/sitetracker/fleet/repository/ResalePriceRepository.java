package com.sitetracker.fleet.repository;

import com.sitetracker.fleet.pojo.Bus;
import com.sitetracker.fleet.pojo.BusCondition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ResalePriceRepository extends JpaRepository<BusCondition, Long> {

    @Query(value="select selling_price from Resale_Price where seats= :capacity", nativeQuery=true)
    long getStartingSalePrice(int capacity);

}