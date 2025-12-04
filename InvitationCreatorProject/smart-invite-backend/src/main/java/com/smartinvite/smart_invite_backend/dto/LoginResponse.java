package com.smartinvite.smart_invite_backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class LoginResponse {
    private String status;
    private String message;
    private UUID userId;
    private String name;
    private String role;
}
