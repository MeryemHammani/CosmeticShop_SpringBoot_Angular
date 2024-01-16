package com.Mcom.Backend_shop_cosmetic.product;

import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartEntity;

import com.Mcom.Backend_shop_cosmetic.brand.BrandEntity;
import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemEntity;
import com.Mcom.Backend_shop_cosmetic.ingredient.IngredientEntity;
import com.Mcom.Backend_shop_cosmetic.multiImages.MultiImageEntity;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemEntity;
import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryEntity;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewEntity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
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
@Table(name="products")
public class ProductEntity implements Serializable {


    //---------attributs-------------------
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false)
    private String code;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private BigDecimal price;
    @Column(nullable = false)
    private Integer quantity;
    private String image;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(columnDefinition = "TEXT")
    private String ingredients;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;
    @Column(nullable = false)
    private Integer discount;
    private Integer flush_discount;
    private boolean offer;
    @Column(columnDefinition = "TEXT")
    private String how_to_use;
    private String size;
    private Boolean pack;
    private String status;




    // product constructor
    public ProductEntity(Integer id){
           this.id=id;
        }



    //relations



    //1- because a product belongs to a subcategory
     @ManyToOne
     private SubCategoryEntity subcategory;

    //2-product could contain some Ingredient
    @ManyToMany
    @JoinTable(
            name = "ingredient_product",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )

    private List<IngredientEntity> BioIngredients;

    //3-product  can be in an orderItem
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItemEntity> orderItems;

    //4-product can be in flushItem
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<FlushItemEntity> flushItems;


    //5- a product can be added to a  different wishlists


    @ManyToMany
    @JoinTable(name = "wishlist", joinColumns = @JoinColumn(name = "productId"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private List<UserEntity> users;




    //6-a product can be added to a  different shopping carts
    @OneToMany(mappedBy = "product",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<ShopingCartEntity> carts;


    //7-product can have a lot of reviews
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ReviewEntity> reviews;

    //8- a product is belonged to a brand
    @ManyToOne
    private BrandEntity brand;

    //9-product could have multi image
//    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private List<MultiImageEntity> images;




}













