package com.smartinvite.smart_invite_backend.controller;

import com.smartinvite.smart_invite_backend.dto.TemplateDTO;
import com.smartinvite.smart_invite_backend.service.TemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/templates")
public class TemplateController {

    @Autowired
    private TemplateService templateService;

    @GetMapping
    public List<TemplateDTO> getTemplates() {
        return templateService.getAllTemplates();
    }
}
