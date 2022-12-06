package com.app.domesticflight.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.domesticflight.entity.City;
import com.app.domesticflight.repository.CityRepostory;


@Service
public class CityInfoDAOImpl implements CityInfoDAO {

	 @Autowired
	  private  CityRepostory cityRepostory;
	@Override
	public void addc(City c) {
		// TODO Auto-generated method stub
		 cityRepostory.save(c);
	}
	@Override
	public List<City> all() {
		// TODO Auto-generated method stub
		List<City>c = new ArrayList();
		cityRepostory.findAll().forEach(c::add);;
	    return c;
	}
 
}
