package com.jewellery.subishaa.dto;

import com.jewellery.subishaa.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthResponse {
    String token;
    Long id;
    String firstName;
    String lastName;
    String contactNumber;
    String email;

    public JwtAuthResponse(String token, User user) {
        this.token = token;
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.contactNumber = user.getContactNumber();
        this.email = user.getEmail();
    }
}
