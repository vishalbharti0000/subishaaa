package com.jewellery.subishaa.entity;

import com.jewellery.subishaa.enums.OrderStatus;
import com.jewellery.subishaa.enums.PaymentMode;
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
@Table(name = "order_table")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long amount;
    private OrderStatus orderStatus;
    private PaymentMode paymentMode;
    private Long productId;
    private Long customerId;
    private String address;
    private String number;
    private Boolean isPaymentDone;
    private Timestamp timeStamp;

    @PrePersist
    protected void onCreate(){
        timeStamp = Timestamp.from(Instant.now());
    }

}
