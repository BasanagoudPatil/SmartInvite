package com.smartinvite.smart_invite_backend.controller;

import com.smartinvite.smart_invite_backend.dto.InvitationCreateRequest;
import com.smartinvite.smart_invite_backend.dto.InvitationDTO;
import com.smartinvite.smart_invite_backend.entity.Invitation;
import com.smartinvite.smart_invite_backend.service.InvitationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/invitations")
public class InvitationController {

    // @Autowired
    // private InvitationService invitationService;
    // // 🔹 TEST ENDPOINT (VERY IMPORTANT)
    // @GetMapping("/test")
    // public String test() {
    // return "Invitation API working";
    // }

    // @PostMapping("/{userId}/{templateId}")
    // public InvitationDTO createInvitation(
    // @PathVariable UUID userId,
    // @PathVariable UUID templateId,
    // @RequestBody InvitationCreateRequest request) {
    // request.setUserId(userId);
    // request.setTemplateId(templateId);

    // Invitation invitation = invitationService.createInvitation(request);

    // return InvitationDTO.builder()
    // .invitationId(invitation.getInvitationId())
    // .templateId(invitation.getTemplate().getTemplateId())
    // .eventType(invitation.getEventType().name())
    // .eventTitle(invitation.getEventTitle())
    // .eventDate(invitation.getEventDate())
    // .eventTime(invitation.getEventTime())
    // .venueName(invitation.getVenueName())
    // .venueAddress(invitation.getVenueAddress())
    // .eventDescription(invitation.getEventDescription())
    // .inviteImageUrl(invitation.getInviteImageUrl())
    // .rsvpInfo(invitation.getRsvpInfo())
    // .status(invitation.getStatus().name())
    // .build();
    // }
    @GetMapping("/invitation-test")
    public String test() {
        return "Invitation controller detected";
    }
}