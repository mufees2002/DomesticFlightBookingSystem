package com.app.domesticflight.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.domesticflight.entity.User;

public interface UserRepository extends CrudRepository<User, Integer>{
    @Query("SELECT u FROM User u WHERE u.email=?1")
	User findbyemail(String email);
}
