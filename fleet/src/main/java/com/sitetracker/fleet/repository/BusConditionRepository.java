package com.sitetracker.fleet.repository;

import com.sitetracker.fleet.pojo.BusCondition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusConditionRepository extends JpaRepository<BusCondition,Long> {


    @Query(value="select * from Bus_Condition order by id", nativeQuery=true)
    List<BusCondition> getStartingSalePrice();
}
