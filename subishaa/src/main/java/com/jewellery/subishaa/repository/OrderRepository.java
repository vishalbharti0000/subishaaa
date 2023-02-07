package com.jewellery.subishaa.repository;

import com.jewellery.subishaa.entity.Order;
import com.jewellery.subishaa.enums.OrderStatus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

    Iterable<Order> findAllByCustomerId(Long customerId);

    Iterable<Order> findAllByOrderStatus(OrderStatus orderStatus);
}
