package com.smartinvite.smart_invite_backend.service;


import com.smartinvite.smart_invite_backend.dto.GuestDTO;
import com.smartinvite.smart_invite_backend.entity.Guest;
import com.smartinvite.smart_invite_backend.entity.Invitation;
import com.smartinvite.smart_invite_backend.enums.RSVPStatus;
import com.smartinvite.smart_invite_backend.repository.GuestRepository;
import com.smartinvite.smart_invite_backend.repository.InvitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class GuestService {

    @Autowired
    private GuestRepository guestRepo;

    @Autowired
    private InvitationRepository invitationRepo;

    public GuestDTO addGuest(UUID invitationId, GuestDTO dto) {

        Invitation invitation = invitationRepo.findById(invitationId).orElseThrow();

        Guest g = Guest.builder()
                .invitation(invitation)
                .guestName(dto.getGuestName())
                .guestEmail(dto.getGuestEmail())
                .rsvpStatus(RSVPStatus.PENDING)
                .build();

        guestRepo.save(g);

        dto.setGuestId(g.getGuestId());
        return dto;
    }
}
