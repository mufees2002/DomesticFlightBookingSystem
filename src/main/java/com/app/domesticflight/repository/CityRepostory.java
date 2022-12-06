package com.app.domesticflight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.domesticflight.entity.City;

@Repository
public interface CityRepostory extends JpaRepository<City, Integer> {

	
}
