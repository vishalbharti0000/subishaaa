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
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private String image;
    private String category;
    private float rate;
    private Timestamp timeStamp;
    private Boolean carouselPriority;
    private Boolean homepagePriority;

    @PrePersist
    protected void onCreate(){
        timeStamp = Timestamp.from(Instant.now());
    }
}
