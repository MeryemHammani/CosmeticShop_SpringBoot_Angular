package com.Mcom.Backend_shop_cosmetic.ShopingCart;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;


@Embeddable
@Data

public class CartKey implements Serializable{
    @Column(name="user_id")
    private UUID user_id;

    @Column(name="product_id")
    private Integer product_id;
}
