
package com.app.domesticflight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.domesticflight.entity.File;

@Repository
public interface FileRepository extends JpaRepository<File, Long>{
  
}
