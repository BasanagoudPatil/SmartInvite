package com.smartinvite.smart_invite_backend.repository;

import com.smartinvite.smart_invite_backend.entity.Template;
import com.smartinvite.smart_invite_backend.enums.TemplateCategory;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TemplateRepository extends JpaRepository<Template, UUID> {
    List<Template> findByCategory(TemplateCategory category);
}