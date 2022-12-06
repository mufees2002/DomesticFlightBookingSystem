package com.app.domesticflight.service;

import com.app.domesticflight.entity.Login;
import com.app.domesticflight.entity.User;

public interface LoginDAO {
  public Boolean checkuser(Login l);
}
