package com.smartinvite.smart_invite_backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class GuestDTO {
    private UUID guestId;
    private String guestName;
    private String guestEmail;
    private String rsvpStatus;
}
