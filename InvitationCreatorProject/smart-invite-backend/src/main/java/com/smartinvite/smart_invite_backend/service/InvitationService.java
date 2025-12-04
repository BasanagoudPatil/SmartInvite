package com.smartinvite.smart_invite_backend.service;


import com.smartinvite.smart_invite_backend.dto.InvitationDTO;
import com.smartinvite.smart_invite_backend.entity.Invitation;
import com.smartinvite.smart_invite_backend.entity.Template;
import com.smartinvite.smart_invite_backend.entity.User;
import com.smartinvite.smart_invite_backend.enums.EventType;
import com.smartinvite.smart_invite_backend.enums.InvitationStatus;
import com.smartinvite.smart_invite_backend.repository.InvitationRepository;
import com.smartinvite.smart_invite_backend.repository.TemplateRepository;
import com.smartinvite.smart_invite_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class InvitationService {

    @Autowired
    private InvitationRepository invitationRepo;

    @Autowired
    private TemplateRepository templateRepo;

    @Autowired
    private UserRepository userRepo;

    public InvitationDTO createInvitation(UUID userId, UUID templateId, InvitationDTO dto) {

        User user = userRepo.findById(userId).orElseThrow();
        Template template = templateRepo.findById(templateId).orElseThrow();

        Invitation inv = Invitation.builder()
                .user(user)
                .template(template)
                .eventType(EventType.valueOf(dto.getEventType().toUpperCase()))
                .eventTitle(dto.getEventTitle())
                .eventDate(dto.getEventDate())
                .eventTime(dto.getEventTime())
                .venueName(dto.getVenueName())
                .venueAddress(dto.getVenueAddress())
                .eventDescription(dto.getEventDescription())
                .status(InvitationStatus.DRAFT)
                .build();

        invitationRepo.save(inv);

        dto.setInvitationId(inv.getInvitationId());
        return dto;
    }
}