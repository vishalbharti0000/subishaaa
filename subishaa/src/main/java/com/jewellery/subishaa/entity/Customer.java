package com.jewellery.subishaa.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private Long contactNumber;
    private Boolean isChecked;
    private Timestamp timeStamp;

    @PrePersist
    protected void onCreate(){
        timeStamp = Timestamp.from(Instant.now());
    }

}
