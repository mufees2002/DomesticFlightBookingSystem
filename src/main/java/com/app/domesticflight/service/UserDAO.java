package com.app.domesticflight.service;

import java.util.List;

import com.app.domesticflight.entity.User;

public interface UserDAO {

	 public User saveuser(User u);
     public User getbyemail(String email);
    
}
