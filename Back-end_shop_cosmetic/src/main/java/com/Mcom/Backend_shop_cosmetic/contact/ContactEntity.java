package com.Mcom.Backend_shop_cosmetic.contact;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "contacts")
public class ContactEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fax;
    @Column( nullable = false)
    private String mobile;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String email;
    private String youtube;
    private String facebook;
    private String instagram;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;
}
