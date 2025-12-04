package com.smartinvite.smart_invite_backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class UserDTO {
    private UUID userId;
    private String name;
    private String email;
    private String role;
    private String profileImageUrl;
}
