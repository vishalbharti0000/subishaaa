package com.jewellery.subishaa.service;

import com.jewellery.subishaa.dto.UserResponse;
import com.jewellery.subishaa.entity.User;
import com.jewellery.subishaa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User saveCustomer(User user) {
        user.setPassword(getSecuredPassword(user.getPassword()));
        return userRepository.save(user);
    }

    public String getSecuredPassword(String password) {
        var bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
        return bCryptPasswordEncoder.encode(password);

    }

    public User getCustomerByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserResponse getCustomerById(Long customerId) {
        var user = userRepository.findById(customerId).get();
        return new UserResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getContactNumber(), user.getEmail(), user.getTimeStamp());
    }
}
