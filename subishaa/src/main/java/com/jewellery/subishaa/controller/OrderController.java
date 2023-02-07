package com.jewellery.subishaa.controller;

import com.jewellery.subishaa.dto.RequestAddress;
import com.jewellery.subishaa.entity.Order;
import com.jewellery.subishaa.enums.OrderStatus;
import com.jewellery.subishaa.enums.PaymentMode;
import com.jewellery.subishaa.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping(value = "/order/{customerId}/{productId}/{amount}/{paymentMode}")
    public ResponseEntity<Order> saveOrder(@PathVariable("customerId") Long customerId, @PathVariable("productId") Long productId, @PathVariable("amount") Long amount, @PathVariable("paymentMode") PaymentMode paymentMode, @RequestBody RequestAddress requestAddress) {
        return ResponseEntity.ok(orderService.saveOrder(customerId, productId, amount, paymentMode, requestAddress.getAddress(), requestAddress.getNumber()));
    }

    @PostMapping(value = "/admin/updateOrderStatus/{id}/{orderStatus}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable("id") Long id, @PathVariable OrderStatus orderStatus) {
        var order = orderService.updateOrderStatus(id, orderStatus);
        if(order == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(order);
    }

    @GetMapping(value = "/getOrder/{customerId}")
    public ResponseEntity<Iterable<Order>> getAllOrdersOfCustomers(@PathVariable("customerId") Long customerId) {
        return ResponseEntity.ok(orderService.getAllOrdersOfCustomers(customerId));
    }

    @GetMapping(value = "/admin/getAllOrders")
    public ResponseEntity<Iterable<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping(value = "/admin/getAllOrders/{orderStatus}")
    public ResponseEntity<Iterable<Order>> getAllOrdersByOrderStatus(@PathVariable("orderStatus") OrderStatus orderStatus) {
        return ResponseEntity.ok(orderService.getAllOrdersByOrderStatus(orderStatus));
    }

    @PostMapping(value = "/admin/paymentDone/{orderId}")
    public ResponseEntity<Order> paymentDone(@PathVariable("orderId") Long orderId) {
        var order = orderService.paymentDone(orderId);
        if(order == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(order);
    }

}
