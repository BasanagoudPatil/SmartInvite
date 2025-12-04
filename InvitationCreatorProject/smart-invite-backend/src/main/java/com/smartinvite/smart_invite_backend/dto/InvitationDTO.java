package com.smartinvite.smart_invite_backend.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Data
@Builder
public class InvitationDTO {
    private UUID invitationId;
    private UUID templateId;
    private String eventType;
    private String eventTitle;
    private LocalDate eventDate;
    private LocalTime eventTime;
    private String venueName;
    private String venueAddress;
    private String eventDescription;
    private String inviteImageUrl;
    private String rsvpInfo;
    private String status;
}
