package com.smartinvite.smart_invite_backend.service;

import com.smartinvite.smart_invite_backend.dto.InvitationCreateRequest;
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

    private final InvitationRepository invitationRepository;
    private final TemplateRepository templateRepository;
    private final UserRepository userRepository;

    public InvitationService(
            InvitationRepository invitationRepository,
            TemplateRepository templateRepository,
            UserRepository userRepository) {
        this.invitationRepository = invitationRepository;
        this.templateRepository = templateRepository;
        this.userRepository = userRepository;
    }

    public Invitation createInvitation(InvitationCreateRequest request) {

        Template template = templateRepository.findById(request.getTemplateId())
                .orElseThrow(() -> new RuntimeException("Template not found"));

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Invitation invitation = Invitation.builder()
                .template(template)
                .user(user)
                .eventType(EventType.valueOf(request.getEventType()))
                .eventTitle(request.getEventTitle())
                .eventDate(request.getEventDate())
                .eventTime(request.getEventTime())
                .venueName(request.getVenueName())
                .venueAddress(request.getVenueAddress())
                .eventDescription(request.getEventDescription())
                .status(InvitationStatus.DRAFT)
                .build();

        return invitationRepository.save(invitation);
    }
}