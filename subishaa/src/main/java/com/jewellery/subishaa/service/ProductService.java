package com.jewellery.subishaa.service;

import com.jewellery.subishaa.dto.RequestProduct;
import com.jewellery.subishaa.entity.Product;
import com.jewellery.subishaa.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    ModelMapper mapper;

    @Autowired
    AwsS3Service s3Service;

    public Product addProduct(RequestProduct requestProduct) {
        Product product = mapper.map(requestProduct, Product.class);
        Random rand = new Random();

        var uploadURL = s3Service.uploadFile(requestProduct.getName().replace(" ", "") + rand.nextInt(10000000) + ".png", requestProduct.getFile());
        product.setImage(uploadURL);
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return (List<Product>) productRepository.findAll();
    }

    public List<Product> getTop5CarouselProducts() {
        return productRepository.findTop5CarouselProducts();
    }

    public List<Product> getHomepageTop10Products() {
        return productRepository.findHomepageTop10Products();
    }

    public void deleteProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        String fileName = product.get().getImage().replace("https://subishaaa-inventory.s3.amazonaws.com/", "");
        https://subishaaa-inventory.s3.amazonaws.com/diamondring3440390.png
        s3Service.deleteFile(fileName);

        productRepository.deleteById(id);
    }

    public boolean checkUser(String username, String password) {
        return username.equals("yash") && password.equals("yash");
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
}
