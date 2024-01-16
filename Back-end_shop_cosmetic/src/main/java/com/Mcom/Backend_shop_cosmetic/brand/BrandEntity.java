package com.Mcom.Backend_shop_cosmetic.brand;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.web.multipart.MultipartFile;


@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="brands")
public class BrandEntity implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable=false , unique = true)
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(nullable=false)
    private String logo ;
    private String src;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at ;

    //relations
    //1- a brand contains a lot of products
    @OneToMany(mappedBy = "brand" , cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    private List<ProductEntity>products;



}
