package com.app.domesticflight.service;

import java.util.List;

import com.app.domesticflight.entity.City;

public interface CityInfoDAO {
   public void addc(City c);
   public List<City> all();
}
