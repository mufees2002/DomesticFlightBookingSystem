package com.app.domesticflight.entity;

import javax.persistence.*;
import javax.persistence.GeneratedValue;

@Entity
public class User {

	@Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private Integer id;

	  private String firstname;

	  private String lastname;

	  private String email;
	  
	  private String password;
	  
	  private String confirmpassword;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	}

