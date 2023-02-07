package com.jewellery.subishaa.service;

import com.jewellery.subishaa.entity.Order;
import com.jewellery.subishaa.enums.OrderStatus;
import com.jewellery.subishaa.enums.PaymentMode;
import com.jewellery.subishaa.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;


    public Order saveOrder(Long customerId, Long productId, Long amount, PaymentMode paymentMode, String address, String number) {
        Order order = new Order(1L, amount, OrderStatus.PAYMENT_STATUS_PENDING, paymentMode, productId, customerId, address, number, false, Timestamp.from(Instant.now()));
        return orderRepository.save(order);
    }

    public Order updateOrderStatus(Long id, OrderStatus orderStatus) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if(optionalOrder.isPresent()){
            var order = optionalOrder.get();
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }
        return null;
    }

    public Iterable<Order> getAllOrdersOfCustomers(Long customerId) {
        return orderRepository.findAllByCustomerId(customerId);
    }

    public Iterable<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Iterable<Order> getAllOrdersByOrderStatus(OrderStatus orderStatus) {
        return orderRepository.findAllByOrderStatus(orderStatus);
    }

    public Order paymentDone(Long orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if(optionalOrder.isPresent()){
            var order = optionalOrder.get();
            order.setIsPaymentDone(true);
            order.setOrderStatus(OrderStatus.PAYMENT_DONE);
            return orderRepository.save(order);
        }
        return null;
    }
}
