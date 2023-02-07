package com.jewellery.subishaa.repository;

import com.jewellery.subishaa.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    @Query(nativeQuery = true, value = "select * from product where carousel_priority=true order by time_stamp desc limit 5")
    List<Product> findTop5CarouselProducts();

    @Query(nativeQuery = true, value = "select * from product where homepage_priority=true order by time_stamp desc limit 10")
    List<Product> findHomepageTop10Products();

    List<Product> findByCategory(String category);

    @Query(nativeQuery = true, value = "select * from product where carousel_priority<>true")
    List<Product> findAllProducts();
}
