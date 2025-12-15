package com.smartinvite.smart_invite_backend.dto;

import lombok.Data;

@Data
public class TemplateCreateRequest {

    private String name;
    private String category;
    private String imageUrl;
    private boolean premium;
}
