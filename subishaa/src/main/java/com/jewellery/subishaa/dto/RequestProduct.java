package com.jewellery.subishaa.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestProduct {
    private String name;
    private String description;
    private String category;
    private float rate;
    private Boolean carouselPriority;
    private Boolean homepagePriority;
    private MultipartFile file;
}
