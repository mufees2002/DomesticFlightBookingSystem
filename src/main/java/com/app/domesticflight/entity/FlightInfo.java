package com.app.domesticflight.entity;



import java.sql.Date;
import java.util.ArrayList;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.print.attribute.standard.DateTimeAtCompleted;

import com.fasterxml.jackson.annotation.JsonBackReference;




@Entity

public class FlightInfo {
   
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer id; 
  
   private String city;
  
   private String flightname;
   
   private String AirPortName;
   
   private String Multi;
   
   private String single;
   
   private String first;
   
   
   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name="time_id",referencedColumnName = "id")
  
   private com.app.domesticflight.entity.Time time;


	public com.app.domesticflight.entity.Time getTime() {
	return time;
}

public void setTime(com.app.domesticflight.entity.Time time) {
	this.time = time;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getFlightname() {
	return flightname;
}

public void setFlightname(String flightname) {
	this.flightname = flightname;
}

public String getAirPortName() {
	return AirPortName;
}

public void setAirPortName(String airPortName) {
	AirPortName = airPortName;
}

public String getMulti() {
	return Multi;
}

public void setMulti(String multi) {
	Multi = multi;
}

public String getSingle() {
	return single;
}

public void setSingle(String single) {
	this.single = single;
}

public String getFirst() {
	return first;
}

public void setFirst(String first) {
	this.first = first;
}
  
   
   
   

    
}
