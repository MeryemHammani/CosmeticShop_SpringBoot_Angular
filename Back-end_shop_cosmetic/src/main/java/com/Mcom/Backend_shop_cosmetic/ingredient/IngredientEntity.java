package com.Mcom.Backend_shop_cosmetic.ingredient;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;


@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="ingredients")
public class IngredientEntity implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable=false , unique = true)
    private String name;
    @Column(nullable=false , unique = false, columnDefinition = "TEXT")
    private String description;
    @Column(columnDefinition = "TEXT")
    private String benefit;
    @Column(nullable=false)
    private String image ;
    private String src;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    //relation

    //1- Ingredient could be contained in  different of products
    @ManyToMany
    @JoinTable(
            name = "ingredient_product",
            joinColumns = @JoinColumn(name = "ingredient_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<ProductEntity> products;



}
