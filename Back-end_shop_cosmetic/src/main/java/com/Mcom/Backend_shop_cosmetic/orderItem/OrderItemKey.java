package com.Mcom.Backend_shop_cosmetic.orderItem;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class OrderItemKey implements Serializable {
    @Column(name = "order_id")
    private  Integer orderId;
    @Column(name="product_id")

    private Integer productId;
}
