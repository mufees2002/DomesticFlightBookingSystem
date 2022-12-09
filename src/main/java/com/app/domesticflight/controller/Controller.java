package com.app.domesticflight.controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.domesticflight.entity.File;
import com.app.domesticflight.entity.FlightInfo;
import com.app.domesticflight.entity.Login;
import com.app.domesticflight.entity.Time;
import com.app.domesticflight.entity.User;
import com.app.domesticflight.service.CityInfoDAOImpl;
import com.app.domesticflight.service.FileDAOImpl;
import com.app.domesticflight.service.FlightInfoDAOimpl;
import com.app.domesticflight.service.LoginDAOImpl;
import com.app.domesticflight.service.StripeClient;
import com.app.domesticflight.service.UserDAOimpl;
import com.stripe.model.Charge;


@RestController

@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class Controller {
     
	private StripeClient stripeClient;
    
	@Autowired
	private FileDAOImpl fileDAOImpl;
	
	@Autowired
	 Controller(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }
	
	@Autowired
	private UserDAOimpl userDAOimpl;
    
	@Autowired
	private LoginDAOImpl  loginDAOImpl;
	
	

	@Autowired
	private CityInfoDAOImpl cityInfoDAOImpl;
	
	@Autowired
	private FlightInfoDAOimpl flightInfoDAOimpl;
	
	@PostMapping("/add")
	public String add(@RequestBody User u) {
		userDAOimpl.saveuser(u);
		return "Added";
	}
	
	@PostMapping("/locate")
	public Boolean findbyemail(@RequestBody Login l){
		String email=l.getEmail();
		User u=userDAOimpl.getbyemail(email);
		System.out.println(l.getPassword());
	   return  loginDAOImpl.checkuser(l);
	}
	
	
    
	
	

	
	
	@GetMapping("/cityflightinfo")
	public String cfinfo() {
		return "HELLO";
	}
	
	@PostMapping("/addflightinfo")
	public String addFlightinfo(@RequestBody FlightInfo f) {
	     flightInfoDAOimpl.savetheflightinfo(f);
		return "Added";
		
	}
	

	
	
	@GetMapping("/allinfo")
    public List<FlightInfo> retall(){
    	return flightInfoDAOimpl.viewthefile();
    }
	
	
	
	@PostMapping("/api/payment")
	public Charge chargeCard(@RequestHeader(value = "token")String token,@RequestHeader(value="amount") Double amount) throws Exception {
		return this.stripeClient.chargenewcard(token, amount);
	}
	

   @PostMapping("/fileupload")
   public String fileUpload(@RequestParam("file") MultipartFile f) {
	   return fileDAOImpl.Upload(f);
   }
   
   @GetMapping("/down")
   public List<File>allfile(){
	   
	   return fileDAOImpl.Download();
	   
   }

   @GetMapping("/singleinfo")
	public FlightInfo getbyname(@RequestParam  String city){
		return  flightInfoDAOimpl.getbycity(city);
   }

   @GetMapping("/singlefile")
   public  File getbyfilename(String filename){
		return fileDAOImpl.getbyName(filename);
   }
}
