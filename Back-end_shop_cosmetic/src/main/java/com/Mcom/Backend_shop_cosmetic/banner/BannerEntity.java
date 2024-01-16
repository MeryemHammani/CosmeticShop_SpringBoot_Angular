package com.Mcom.Backend_shop_cosmetic.banner;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;


@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="banners")

public class BannerEntity  implements Serializable {
    @Id
    @Column(name = "banner_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String description;

    private String button;
    private String image;
    private String src;
    private String link;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;



}
