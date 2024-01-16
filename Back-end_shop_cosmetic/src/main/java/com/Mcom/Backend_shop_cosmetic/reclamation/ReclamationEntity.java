package com.Mcom.Backend_shop_cosmetic.reclamation;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="reclamations")
public class ReclamationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String message;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;
}
