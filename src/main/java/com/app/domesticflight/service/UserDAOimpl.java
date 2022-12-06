package com.app.domesticflight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.domesticflight.entity.User;
import com.app.domesticflight.repository.UserRepository;

@Service
public class UserDAOimpl implements UserDAO {

	@Autowired
	UserRepository userRepository;
	
	
	@Override
	public User saveuser(User u) {
		// TODO Auto-generated method stub
		return userRepository.save(u);
	}


	@Override
	public User getbyemail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findbyemail(email);
	}


	

}
