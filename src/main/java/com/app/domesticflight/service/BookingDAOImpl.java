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
  private  FlightInfoRepository flightInfoRepository;


    @Override
    public String  Book(Booking b) {
        Booking book=bookingRepository.getbyDat(b.getDate() );
        FlightInfo flightInfo=flightInfoRepository.getbyname(b.getPlace());
         int f=Integer.getInteger(b.getFirst());
         int d=Integer.getInteger(b.getMulti());
         int s=Integer.getInteger(b.getSingle());

         int f1=Integer.getInteger(flightInfo.getFirst());
         int d1=Integer.getInteger(flightInfo.getMulti());
         int s1=Integer.getInteger(flightInfo.getSingle());

        int f2=Integer.getInteger(book.getFirst());
        int d2=Integer.getInteger(book.getMulti());
        int s2=Integer.getInteger(book.getSingle());


        if(f<f1&&d<d1&&s<s1){
            b.setFirst(String.valueOf(f+f2));
            b.setMulti(String.valueOf(d+d1));
            b.setSingle(String.valueOf(s+s1));

        }

       bookingRepository.save(b);

        return" Sucess";
    }
}
