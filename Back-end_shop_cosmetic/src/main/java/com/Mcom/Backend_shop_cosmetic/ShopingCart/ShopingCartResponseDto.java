package com.Mcom.Backend_shop_cosmetic.ShopingCart;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ShopingCartResponseDto {
    private CartKey id ;
    private Integer quantity;
    private BigDecimal sub_amount;
    private ProductDtoResponse product;

}
