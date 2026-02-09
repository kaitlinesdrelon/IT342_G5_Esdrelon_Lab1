package com.it342.lab1.backend.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}