package com.app.domesticflight.service;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.web.multipart.MultipartFile;

import com.app.domesticflight.entity.File;

public interface FileDAO {

	
	public String Upload(MultipartFile File);
	
	public List<File> Download();

	public File getbyName(String name);
}
