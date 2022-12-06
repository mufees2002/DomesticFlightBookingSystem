package com.app.domesticflight.service;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.domesticflight.entity.File;
import com.app.domesticflight.repository.FileRepository;



@Service
public class FileDAOImpl implements FileDAO {

	@Autowired
	FileRepository fileRepository;
	
	
	
	@Override
	public String Upload(MultipartFile file) {
		// TODO Auto-generated method stub
	   try {
		File f=new File(file.getOriginalFilename(),file.getContentType(),file.getBytes());
		fileRepository.save(f);
	   }catch (Exception e) {
		// TODO: handle exception
		   return e.toString();
	}
	   return "Success";
	}



	@Override
	public List<File> Download() {
		// TODO Auto-generated method stub
		return fileRepository.findAll();
	}
	
	
	
  
}




