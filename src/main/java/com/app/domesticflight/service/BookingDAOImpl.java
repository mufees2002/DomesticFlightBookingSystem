package com.app.domesticflight.service;

import com.app.domesticflight.entity.Booking;
import com.app.domesticflight.entity.FlightInfo;
import com.app.domesticflight.repository.BookingRepository;
import com.app.domesticflight.repository.FlightInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingDAOImpl implements  BookingDAO{

   @Autowired
   private BookingRepository bookingRepository;

   @Autowired
   private FlightInfoRepository flightInfoRepository;


    @Override
    public int  FirstclassCount(String name) {
        FlightInfo f=flightInfoRepository.getbyname(name);
        int count= Integer.getInteger(f.getFirst());
       return count;
    }

    @Override
    public int DoubleClassCount(String name) {
        FlightInfo f=flightInfoRepository.getbyname(name);
        int count= Integer.getInteger(f.getMulti());
        return count;
    }

    @Override
    public int SingleSeat(String name) {
        FlightInfo f=flightInfoRepository.getbyname(name);
        int count= Integer.getInteger(f.getSingle());
        return count;
    }


    @Override
    public void Book(Booking b) {
        Booking book=bookingRepository.getbyDat(b.getDate() );
        FlightInfo flightInfo=flightInfoRepository.getbyname(b.getPlace());





    }
}
