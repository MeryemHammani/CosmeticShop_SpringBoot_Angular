package com.Mcom.Backend_shop_cosmetic.ingredient;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class IngredientsDto {
    private Integer id;
    private String name;
    private String description;
    private String benefit;
    private String image ;
    private String src;
    private Date created_at;
}
