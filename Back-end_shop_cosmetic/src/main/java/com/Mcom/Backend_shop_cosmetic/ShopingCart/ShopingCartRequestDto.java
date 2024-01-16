package com.Mcom.Backend_shop_cosmetic.ShopingCart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ShopingCartRequestDto {
    private CartKey id ;
    private Integer quantity;
    private BigDecimal sub_amount;
}
