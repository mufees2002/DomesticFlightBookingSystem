package com.app.domesticflight.entity;


import javax.persistence.*;
import java.sql.Date;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Integer Id;

    private String  place;

    private  String First;


    private String Multi;


    private  String Single;


    private Date date;


    private Date retdate;



    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getFirst() {
        return First;
    }

    public void setFirst(String first) {
        First = first;
    }

    public String getMulti() {
        return Multi;
    }

    public void setMulti(String multi) {
        Multi = multi;
    }

    public String getSingle() {
        return Single;
    }

    public void setSingle(String single) {
        Single = single;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getRetdate() {
        return retdate;
    }

    public void setRetdate(Date retdate) {
        this.retdate = retdate;
    }
}
