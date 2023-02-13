package com.jewellery.subishaa.service;

import com.jewellery.subishaa.entity.User;
import com.jewellery.subishaa.repository.UserRepository;
import com.jewellery.subishaa.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        try{
            Optional<User> user = userRepository.findByEmail(username);
            return user.map(MyUserDetails::new).orElse(null);
        }
        catch(Exception ex){
            throw new UsernameNotFoundException("Error in find by email", ex);
        }
    }
}
