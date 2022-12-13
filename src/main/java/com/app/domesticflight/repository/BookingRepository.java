package com.app.domesticflight.repository;

import com.app.domesticflight.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface BookingRepository  extends JpaRepository<Booking,Integer> {

  @Query("select b from Booking b where data=?1")
 Booking getbyDat(Date data);

}
