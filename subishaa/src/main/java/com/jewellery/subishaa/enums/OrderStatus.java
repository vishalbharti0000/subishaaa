package com.jewellery.subishaa.enums;

public enum OrderStatus {
    PAYMENT_STATUS_PENDING(0), PAYMENT_DONE(1), ORDER_DISPATCHED(2), ORDER_DELIVERED(3);
    private final int value;
    OrderStatus(int i) {
            value = i;
    }
    public int getValue() {
        return value;
    }
}
