package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.OrderItems;
import com.app.pojos.User;

public interface IOrderItemsDao extends JpaRepository<OrderItems, Integer> {

	List<OrderItems> findByUser(User user);
}
