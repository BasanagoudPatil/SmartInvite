package com.smartinvite.smart_invite_backend.repository;

import com.smartinvite.smart_invite_backend.entity.AIInvitation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AIInvitationRepository extends JpaRepository<AIInvitation, UUID> {
}
