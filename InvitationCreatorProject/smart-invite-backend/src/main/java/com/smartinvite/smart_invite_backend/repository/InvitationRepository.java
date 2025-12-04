package com.smartinvite.smart_invite_backend.repository;

import com.smartinvite.smart_invite_backend.entity.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface InvitationRepository extends JpaRepository<Invitation, UUID> {
    Optional<Invitation> findByShareUrl(String shareUrl);
}
