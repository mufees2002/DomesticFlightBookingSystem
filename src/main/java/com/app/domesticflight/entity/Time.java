package com.app.domesticflight.entity;

import java.util.ArrayList;

import javax.persistence.*;


@Entity
public class Time {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	private String time1;
	
	private String time2;
	
	private String time3;


	public Time(String time1, String time2, String time3) {
		this.time1 = time1;
		this.time2 = time2;
		this.time3 = time3;
	}

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getTime1() {
		return time1;
	}


	public void setTime1(String time1) {
		this.time1 = time1;
	}


	public String getTime2() {
		return time2;
	}


	public void setTime2(String time2) {
		this.time2 = time2;
	}


	public String getTime3() {
		return time3;
	}


	public void setTime3(String time3) {
		this.time3 = time3;
	}


	
	
	
   
	

}
