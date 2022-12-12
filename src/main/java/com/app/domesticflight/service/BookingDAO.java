package com.app.domesticflight.service;

import com.app.domesticflight.entity.Booking;
import com.app.domesticflight.entity.FlightInfo;

public interface BookingDAO {
    public int checkdetails(FlightInfo f);

    public  String Book(Booking b);

}
