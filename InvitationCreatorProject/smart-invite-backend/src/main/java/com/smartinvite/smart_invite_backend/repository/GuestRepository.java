package com.smartinvite.smart_invite_backend.repository;

import com.smartinvite.smart_invite_backend.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface GuestRepository extends JpaRepository<Guest, UUID> {
    List<Guest> findByInvitation_InvitationId(UUID invitationId);
}