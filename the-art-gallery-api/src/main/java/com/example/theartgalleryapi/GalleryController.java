package com.example.theartgalleryapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GalleryController {
	
	@Autowired
	private GalleryService galleryService;
	
	
	@RequestMapping("/images")
	public List<Image> getAllImages(){
		return galleryService.getAllImages();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/images")
	public void addImage(@RequestBody Image image) {
		galleryService.addImage(image);
	}

}
