package com.smartinvite.smart_invite_backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder

public class TemplateDTO {
    private UUID templateId;
    private String name;
    private String category;
    private String imageUrl;
    private boolean isPremium;
}
