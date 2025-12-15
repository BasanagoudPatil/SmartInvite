package com.smartinvite.smart_invite_backend.service;

import com.smartinvite.smart_invite_backend.dto.TemplateCreateRequest;
import com.smartinvite.smart_invite_backend.entity.Template;
import com.smartinvite.smart_invite_backend.enums.TemplateCategory;
import com.smartinvite.smart_invite_backend.repository.TemplateRepository;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TemplateService {

    private final TemplateRepository templateRepository;

    public TemplateService(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    public List<Template> getAllTemplates() {
        return templateRepository.findAll();
    }

    public List<Template> getTemplatesByCategory(String category) {
        return templateRepository.findByCategory(
                TemplateCategory.valueOf(category.toUpperCase()));
    }

    public Template addTemplate(TemplateCreateRequest req) {
        Template template = Template.builder()
                .name(req.getName())
                .category(TemplateCategory.valueOf(req.getCategory().toUpperCase()))
                .imageUrl(req.getImageUrl())
                .isPremium(req.isPremium())
                .build();
        return templateRepository.save(template);
    }
}
