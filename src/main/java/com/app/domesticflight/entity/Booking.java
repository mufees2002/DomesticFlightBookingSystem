package com.app.domesticflight.entity;


import javax.persistence.*;

import java.util.Date;

@Entity
public class Booking {

  @Id
  @GeneratedValue
  private  Integer id;


  private  String Single;

  private String Double;

  private  String First;

  private String FlightName;


  private Date date;


  private Date RetDate;


}
