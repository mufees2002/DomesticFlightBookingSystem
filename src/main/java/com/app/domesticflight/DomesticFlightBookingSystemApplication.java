package com.app.domesticflight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.function.ServerResponse.SseBuilder;

import com.app.domesticflight.entity.FlightInfo;
import com.app.domesticflight.entity.Time;
import com.app.domesticflight.service.FlightInfoDAOimpl;

@SpringBootApplication
public class DomesticFlightBookingSystemApplication implements CommandLineRunner{
  
	@Autowired
	private FlightInfoDAOimpl flightInfoDAOimpl;
	public static void main(String[] args) {
		SpringApplication.run(DomesticFlightBookingSystemApplication.class, args);
	}

	
	
 
@Override
public void run(String... args) throws Exception {
	// TODO Auto-generated method stub
	FlightInfo f=new FlightInfo();
	f.setCity("abc");
	f.setAirPortName("adsa");
	f.setFlightname("xyx");
	f.setFirst("1");
	f.setMulti("14");
	f.setSingle("133");
	Time t=new Time();
	t.setTime1("11:30");
	t.setTime2("14:00");
	t.setTime3("13:00");
	f.setTime(t);
	flightInfoDAOimpl.savetheflightinfo(f);
}
 
	

}
