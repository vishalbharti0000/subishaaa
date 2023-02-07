package com.jewellery.subishaa.controller;

import com.jewellery.subishaa.dto.RequestProduct;
import com.jewellery.subishaa.entity.Product;
import com.jewellery.subishaa.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping(value = "/admin/add/product/{username}/{password}", consumes = {"multipart/form-data"})
    public ResponseEntity<Product> addProduct(@ModelAttribute RequestProduct requestProduct, @PathVariable("username") String username, @PathVariable("password") String password) {
        if(productService.checkUser(username, password))
            return ResponseEntity.ok(productService.addProduct(requestProduct));
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Optional<Product>> getProductWithId(@PathVariable("id") Long id){
        return ResponseEntity.ok(productService.getProductWithId(id));
    }


    @GetMapping("/products/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable("category") String category){
        return ResponseEntity.ok(productService.getProductsByCategory(category));
    }

    @GetMapping("/products/carousel")
    public ResponseEntity<List<Product>> getTop5CarouselProducts(){
        return ResponseEntity.ok(productService.getTop5CarouselProducts());
    }

    @GetMapping("/products/homepage/top10")
    public ResponseEntity<List<Product>> getHomepageTop10Products(){
        return ResponseEntity.ok(productService.getHomepageTop10Products());
    }

    @DeleteMapping("/admin/{username}/{password}/product/{id}")
    public ResponseEntity<String> deleteProductById(@PathVariable("username") String username, @PathVariable("password") String password, @PathVariable("id") Long id){
        if(productService.checkUser(username, password)) {
            productService.deleteProductById(id);
            return ResponseEntity.ok("Product successfully deleted with id " + id);
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
