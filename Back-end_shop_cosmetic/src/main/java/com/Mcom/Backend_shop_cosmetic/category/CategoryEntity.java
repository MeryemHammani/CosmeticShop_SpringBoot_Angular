package com.Mcom.Backend_shop_cosmetic.category;

import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="categories")
public class CategoryEntity implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false , unique = true)
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description ;
    @Column(nullable = false)
    private String image;
    private String src;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at ;


    //relation
    //1-  a category contains different subCategories
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<SubCategoryEntity>subCategories;




}
