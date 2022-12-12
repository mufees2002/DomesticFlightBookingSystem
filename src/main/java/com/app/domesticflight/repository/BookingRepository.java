package com.app.domesticflight.repository;

import com.app.domesticflight.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Integer, Booking> {



}
