
package com.app.domesticflight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.domesticflight.entity.FlightInfo;
import com.app.domesticflight.entity.Time;

@Repository
public interface FlightInfoRepository  extends JpaRepository<FlightInfo, Integer>{



    @Query("select f from FlightInfo f where f.city=?1")
    FlightInfo getbyname(String city);
	
}
