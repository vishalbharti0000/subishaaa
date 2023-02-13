package com.jewellery.subishaa.enums;

public enum  AuthProvider {
    LOCAL(0), FACEBOOK(1), GOOGLE(2), GITHUB(3);

    private final int value;
    AuthProvider(int i) {
        value = i;
    }
    public int getValue() {
        return value;
    }
}