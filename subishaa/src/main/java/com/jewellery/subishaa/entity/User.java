package com.jewellery.subishaa.entity;

import com.jewellery.subishaa.enums.AuthProvider;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.Instant;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String contactNumber;
    @Column(unique = true)
    @NotNull
    private String email;
    @NotNull
    private String password;
    private Timestamp timeStamp;

    private String role = "ROLE_USER";

    @PrePersist
    protected void onCreate(){
        timeStamp = Timestamp.from(Instant.now());
    }
}
