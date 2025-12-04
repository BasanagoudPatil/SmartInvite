package com.smartinvite.smart_invite_backend.service;

import com.smartinvite.smart_invite_backend.dto.TemplateDTO;
import com.smartinvite.smart_invite_backend.repository.TemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TemplateService {

    @Autowired
    private TemplateRepository templateRepo;

    public List<TemplateDTO> getAllTemplates() {
        return templateRepo.findAll().stream()
                .map(t -> TemplateDTO.builder()
                        .templateId(t.getTemplateId())
                        .name(t.getName())
                        .category(t.getCategory().name())
                        .imageUrl(t.getImageUrl())
                        .isPremium(t.getIsPremium())
                        .build())
                .collect(Collectors.toList());
    }
}

