package com.jewellery.subishaa.service;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class AwsS3Service {
    @Autowired
    private AmazonS3 amazonS3Client;

    @Value("${application.bucket.name}")
    private String bucketName;

    public String uploadFile(String keyName, MultipartFile file) {
        try {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            amazonS3Client.putObject(bucketName, keyName, file.getInputStream(), metadata);
            return String.valueOf(amazonS3Client.getUrl(bucketName, keyName));
        } catch (IOException ioe) {

        } catch (AmazonServiceException serviceException) {
            throw serviceException;
        } catch (AmazonClientException clientException) {
            throw clientException;
        }
        return "File not uploaded: " + keyName;
    }

    public void deleteFile(String fileName) {
        try {
            amazonS3Client.deleteObject(bucketName, fileName);
        }catch (AmazonServiceException serviceException) {
            throw serviceException;
        } catch (AmazonClientException clientException) {
            throw clientException;
        }
    }
}
