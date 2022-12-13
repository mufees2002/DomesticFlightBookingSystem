
package com.app.domesticflight.repository;

import com.app.domesticflight.entity.FlightInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.domesticflight.entity.File;

import java.util.List;

@Repository
public interface FileRepository extends JpaRepository<File, Long>{

    @Query("select f from File f where filename=?1")
    File getbyname(String filename);

}
