package com.app.service;



import com.app.pojos.CustomerAddress;

public interface IAddressService {

	CustomerAddress saveShippingAddress(CustomerAddress shippingAddress);
}
