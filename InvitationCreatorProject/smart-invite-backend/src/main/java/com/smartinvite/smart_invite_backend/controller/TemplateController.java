package com.smartinvite.smart_invite_backend.controller;

import com.smartinvite.smart_invite_backend.dto.TemplateCreateRequest;
import com.smartinvite.smart_invite_backend.entity.Template;
import com.smartinvite.smart_invite_backend.service.TemplateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin(origins = "http://localhost:3000")
public class TemplateController {

    private final TemplateService templateService;

    public TemplateController(TemplateService templateService) {
        this.templateService = templateService;
    }

    // ✅ TEST
    @GetMapping("/test")
    public String test() {
        return "Template Controller is working";
    }

    // ✅ GET ALL TEMPLATES ← THIS WAS MISSING OR NOT PICKED
    @GetMapping
    public List<Template> getAllTemplates(
            @RequestParam(required = false) String category) {
        if (category == null || category.equalsIgnoreCase("ALL")) {
            return templateService.getAllTemplates();
        }
        return templateService.getTemplatesByCategory(category);
    }

    // ✅ ADD TEMPLATE (ADMIN)
    @PostMapping("/add")
    public Template addTemplate(@RequestBody TemplateCreateRequest request) {
        return templateService.addTemplate(request);
    }
}
