package com.app.domesticflight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.domesticflight.entity.FlightInfo;
import com.app.domesticflight.entity.Time;
import com.app.domesticflight.repository.FlightInfoRepository;


@Service
public class FlightInfoDAOimpl implements FlightInfoDAO {

	@Autowired
	FlightInfoRepository flightInfoRepository;
	
	
	@Override
	public void savetheflightinfo(FlightInfo t) {
		// TODO Auto-generated method stub
		 flightInfoRepository.save(t);
		
	}


	@Override
	public List<FlightInfo> viewthefile() {
		// TODO Auto-generated method stub
		return flightInfoRepository.findAll();
		
	}
    
	
    
	
}
