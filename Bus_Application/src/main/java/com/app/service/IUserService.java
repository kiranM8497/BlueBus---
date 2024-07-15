package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.OrderItems;
import com.app.pojos.Products;
import com.app.pojos.User;

public interface IUserService{
	List<User> getAllUser();
	
	User saveUserDetails(User transientUser);
	
	Optional<User> signIn(User user);
	User forgetPassword(User user);
	User save(User user);
	
	Optional<User> getUserDetailsById(int productId);
	
	User updateProfile(User user);
	
	String deleteUser(int userId);
	
	User updateUserDetails(User detachedUser);
	
	List<OrderItems> getAllorders(int userId);
}
