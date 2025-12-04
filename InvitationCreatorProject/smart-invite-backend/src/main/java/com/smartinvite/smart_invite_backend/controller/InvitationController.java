package com.smartinvite.smart_invite_backend.controller;

import com.smartinvite.smart_invite_backend.dto.InvitationDTO;
import com.smartinvite.smart_invite_backend.service.InvitationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/invitations")
public class InvitationController {

    @Autowired
    private InvitationService invitationService;

    @PostMapping("/{userId}/{templateId}")
    public InvitationDTO createInvitation(
            @PathVariable UUID userId,
            @PathVariable UUID templateId,
            @RequestBody InvitationDTO dto
    ) {
        return invitationService.createInvitation(userId, templateId, dto);
    }
}
