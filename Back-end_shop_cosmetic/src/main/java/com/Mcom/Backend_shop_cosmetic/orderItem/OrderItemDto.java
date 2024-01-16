package com.Mcom.Backend_shop_cosmetic.orderItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class OrderItemDto {
    private OrderItemKey id;
    private Integer quantity;
    private BigDecimal amount;
}
