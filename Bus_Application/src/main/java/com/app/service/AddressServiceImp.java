package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAddressDao;
import com.app.pojos.CustomerAddress;

@Service
@Transactional
public class AddressServiceImp implements IAddressService {

	@Autowired
	private IAddressDao dao;
	
	@Override
	public CustomerAddress saveShippingAddress(CustomerAddress shippingAddress) {
		
		return dao.save(shippingAddress);
	}

}
