package com.example.theartgalleryapi;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Image {
	
	@Id
	private String id;
	private String imageSource;
	private String imageCaption;
	
	public Image() {}
	
	public Image(String id, String imageSource, String imageCaption) {
		super();
		this.id = id;
		this.imageSource = imageSource;
		this.imageCaption = imageCaption;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImageSource() {
		return imageSource;
	}
	public void setImageSource(String imageSource) {
		this.imageSource = imageSource;
	}
	public String getImageCaption() {
		return imageCaption;
	}
	public void setImageCaption(String imageCaption) {
		this.imageCaption = imageCaption;
	}
}
