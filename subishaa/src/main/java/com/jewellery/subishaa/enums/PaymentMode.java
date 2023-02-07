package com.jewellery.subishaa.enums;

public enum PaymentMode {
    UPI(0), PAY_0N_DELIVERY(1);
    private final int value;
    PaymentMode(int i) {
        value = i;
    }
    public int getValue() {
        return value;
    }
}
