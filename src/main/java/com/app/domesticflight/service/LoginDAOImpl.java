package com.app.domesticflight.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.domesticflight.entity.Login;
import com.app.domesticflight.entity.User;

@Service
public class LoginDAOImpl implements LoginDAO {
   
	@Autowired
	UserDAOimpl uDaOimpl;
	@Override
	public Boolean checkuser(Login l) {
		// TODO Auto-generated method stub
		User u=uDaOimpl.getbyemail(l.getEmail());
		if(u.getEmail().equals(l.getEmail())&&u.getPassword().equals(l.getPassword())) {
			return true;
		}
		return false;
	}

	

}
