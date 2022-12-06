package com.app.domesticflight.service;

import java.util.List;

import com.app.domesticflight.entity.FlightInfo;
import com.app.domesticflight.entity.Time;

public interface FlightInfoDAO {
  
	public  void savetheflightinfo(FlightInfo t);
	public List<FlightInfo> viewthefile();
    
	
	
  
}
