package com.Mcom.Backend_shop_cosmetic.subCategory;

import com.Mcom.Backend_shop_cosmetic.category.CategoryEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="subCategories")
public class SubCategoryEntity implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description ;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at ;

    //relation
    //1- a lot of subcategories could be contained  in a category
    @ManyToOne
    private CategoryEntity category;

    //2-a subcategory  could contain  a lot of products
    @OneToMany(mappedBy = "subcategory" ,cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    private List<ProductEntity>products;


}
