package com.smartinvite.smart_invite_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "ai_invitations")
public class AIInvitation {

    // Use same PK as Invitation (mapsId)
    @Id
    @JdbcTypeCode(SqlTypes.CHAR)
    @Column(name = "invitation_id", nullable = false, length = 36)
    private UUID invitationId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "invitation_id")
    private Invitation invitation;

    @Column(name = "event_type", nullable = false)
    private String eventType;

    @Column(name = "event_title", nullable = false)
    private String eventTitle;

    @Column(name = "event_date", nullable = false)
    private LocalDate eventDate;

    @Column(name = "event_time")
    private LocalTime eventTime;

    @Column(name = "venue_name")
    private String venueName;

    @Column(name = "venue_address")
    private String venueAddress;

    @Column(name = "event_description", length = 2000)
    private String eventDescription;

    @Column(name = "image_suggestion")
    private String imageSuggestion;

    @Column(name = "feedback_score")
    private Integer feedbackScore;

    @CreationTimestamp
    @Column(name = "generation_timestamp", nullable = false, updatable = false)
    private LocalDateTime generationTimestamp;
}
