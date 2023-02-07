package com.jewellery.subishaa.controller;

import com.jewellery.subishaa.dto.JwtAuthRequest;
import com.jewellery.subishaa.dto.JwtAuthResponse;
import com.jewellery.subishaa.dto.UserResponse;
import com.jewellery.subishaa.entity.User;
import com.jewellery.subishaa.service.MyUserDetailsService;
import com.jewellery.subishaa.service.UserService;
import com.jewellery.subishaa.util.JwtUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class UserController {
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserService userService;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/free/registration")
    public ResponseEntity<User> customerRegistration(@RequestBody User user) {
        return ResponseEntity.ok(userService.saveCustomer(user));
    }

    @GetMapping("/admin/customer/{customerId}")
    public ResponseEntity<UserResponse> getCustomerById(@PathVariable("customerId") Long customerId) {
        return ResponseEntity.ok(userService.getCustomerById(customerId));
    }

    @PostMapping("/free/login")
    public ResponseEntity<Object> generateToken(@RequestBody JwtAuthRequest jwtAuthRequest) throws AuthenticationException {
        try{
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    jwtAuthRequest.getUsername(),
                    jwtAuthRequest.getPassword()));
        } catch(UsernameNotFoundException | BadCredentialsException e) {
            return ResponseEntity.badRequest().body("Bad Credentials");
        }

        var userDetails = this.userDetailsService.loadUserByUsername(jwtAuthRequest.getUsername());

        String token = jwtUtils.generateToken(userDetails);

        var user = userService.getCustomerByEmail(jwtAuthRequest.getUsername());

        return ResponseEntity.ok(new JwtAuthResponse(token, user));
    }
}
