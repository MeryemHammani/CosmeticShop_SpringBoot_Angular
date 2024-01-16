package com.Mcom.Backend_shop_cosmetic.ShopingCart;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "carts")

public class ShopingCartEntity implements Serializable {
    @EmbeddedId
    private CartKey id ;
    @Column(nullable = false)
    private Integer quantity;
    @Column(nullable = false)
    private BigDecimal sub_amount;

    @ManyToOne()
    @MapsId("user_id")
    private UserEntity user;

    @ManyToOne()
    @MapsId("product_id")
    private ProductEntity product;





}
