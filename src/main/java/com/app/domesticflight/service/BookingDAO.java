package com.app.domesticflight.service;

import com.app.domesticflight.entity.Booking;
import com.app.domesticflight.entity.FlightInfo;

public interface BookingDAO {

    public  int FirstclassCount(String name);

    public  int DoubleClassCount(String name);

    public int SingleSeat(String name);


    public void Book(Booking b);


}
