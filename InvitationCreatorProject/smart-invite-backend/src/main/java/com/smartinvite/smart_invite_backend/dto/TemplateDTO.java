package com.smartinvite.smart_invite_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.smartinvite.smart_invite_backend.entity.Template;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TemplateDTO {
    private UUID templateId;
    private String name;
    private String category;
    private String imageUrl;
    private boolean isPremium;

    public static TemplateDTO fromEntity(Template template) {
        TemplateDTO dto = new TemplateDTO();
        dto.setTemplateId(template.getTemplateId());
        dto.setName(template.getName());
        dto.setCategory(template.getCategory().name());
        dto.setImageUrl(template.getImageUrl());
        dto.setPremium(template.getIsPremium());
        return dto;
    }
}
