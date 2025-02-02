package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javassist.bytecode.ByteArray;

@Entity
@Table(name="products_tbl")
public class Products extends BaseEntity{
    @Column(length=50,unique=true)
	private String name;
    private String category;
    
    private String images;
    @Column(name="type")
    private String brand;
    private String description;
    private double price;
    @Column(name="seat_count")
    private int countInStock;
    private double rating;
    private int numReviews;
    private String source;
    private String destination;
     
	public Products() {
		System.out.println("in products constr:"+getClass().getName());
	}



	public String getSource() {
		return source;
	}



	public void setSource(String source) {
		this.source = source;
	}



	public String getDestination() {
		return destination;
	}



	public void setDestination(String destination) {
		this.destination = destination;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getCountInStock() {
		return countInStock;
	}

	public void setCountInStock(int countInStock) {
		this.countInStock = countInStock;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public int getNumReviews() {
		return numReviews;
	}

	public void setNumReviews(int numReviews) {
		this.numReviews = numReviews;
	}

	@Override
	public String toString() {
		return "Products [name=" + name + ", category=" + category + ", images=" + images + ", brand=" + brand
				+ ", description=" + description + ", price=" + price + ", countInStock=" + countInStock + ", rating="
				+ rating + ", numReviews=" + numReviews + "]";
	}



	public Products(String name, String category, String images, String brand, String description, double price,
			int countInStock, double rating, int numReviews, String source, String destination) {
		super();
		this.name = name;
		this.category = category;
		this.images = images;
		this.brand = brand;
		this.description = description;
		this.price = price;
		this.countInStock = countInStock;
		this.rating = rating;
		this.numReviews = numReviews;
		this.source = source;
		this.destination = destination;
	}

	
	
	
	
}
