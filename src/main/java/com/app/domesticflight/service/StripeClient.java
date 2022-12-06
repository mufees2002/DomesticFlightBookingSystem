package com.app.domesticflight.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.stripe.model.Customer;

@Component
public class StripeClient {

  @Autowired
   StripeClient() {
		// TODO Auto-generated constructor stub
	   Stripe.apiKey="";
	   
  }
  
  private Customer getcustomerid(String id) throws Exception{
	  return Customer.retrieve(id);
  }
  public Customer createmode(String email,String token) throws Exception {
	  
	  Map<String,Object> customerparams=new HashMap<String, Object>();
	  
	  customerparams.put("email", email);
	  customerparams.put("source", token);
	  
	 return Customer.create(customerparams);
  }
  
  public Charge chargenewcard(String token,double amount) throws Exception {
	  Map<String,Object> chargeparam=new HashMap<>();
	  
	  chargeparam.put("amount",(int)(amount*100));
	  chargeparam.put("currency", "USD");
	  chargeparam.put("token",token);
	  
	  return Charge.create(chargeparam);
	  
  }
  
  
  public Charge chargecustomercard(String customerid,int amount) throws Exception {
	 
	  
	  String sourcecard=getcustomerid(customerid).getDefaultSource();
	  
	  
	  Map<String ,Object> chargeparams=new HashMap<String,Object>();
	  
	  chargeparams.put("amount",amount);
	  chargeparams.put("currency","Rupees");
	  chargeparams.put("customer", customerid);
	  chargeparams.put("source", sourcecard);
	  
	  
	  
	  return Charge.create(chargeparams);
  }
  
  
}
