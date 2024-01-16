package com.Mcom.Backend_shop_cosmetic.catalogue;
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
@Table(name="catalogues")
public class CatalogueEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String title ;
    @Column(nullable = false)
    private String  catalogue;


    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;
}
