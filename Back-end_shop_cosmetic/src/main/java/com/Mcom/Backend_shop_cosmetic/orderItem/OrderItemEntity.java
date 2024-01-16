package com.Mcom.Backend_shop_cosmetic.orderItem;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.order.OrderEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;



@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="order_items")
public class OrderItemEntity implements Serializable {
    @EmbeddedId
    private OrderItemKey id;
    @Column(nullable = false)
    private Integer quantity;
    @Column(nullable = false)
    private BigDecimal amount;

    //relations
    //1- orderItem contains  a product
    @MapsId("product_id")
    @ManyToOne
    private ProductEntity product;

    //1- orderItem  could be contained in an order
    @MapsId("order_id")
    @ManyToOne
    private OrderEntity order ;
}
