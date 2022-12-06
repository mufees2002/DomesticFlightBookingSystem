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
public class DomesticFlightBookingSystemApplication {
  
	@Autowired
	private FlightInfoDAOimpl flightInfoDAOimpl;
	public static void main(String[] args) {
		SpringApplication.run(DomesticFlightBookingSystemApplication.class, args);
	}

	
	
 

	

}
