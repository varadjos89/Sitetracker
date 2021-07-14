package com.sitetracker.fleet.repository;

import com.sitetracker.fleet.pojo.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BusRepository extends JpaRepository<Bus,Long> {

}