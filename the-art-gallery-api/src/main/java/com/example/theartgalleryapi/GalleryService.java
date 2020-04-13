package com.example.theartgalleryapi;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GalleryService {
	
	@Autowired
	private ImageRepository imageRepository;
	
	
	public List<Image> getAllImages(){
		 List<Image> imageList = new ArrayList<>();
		imageRepository.findAll().forEach(imageList::add);
		return imageList;
	}
	
	public void addImage(Image image) {
		imageRepository.save(image);
	}
}
