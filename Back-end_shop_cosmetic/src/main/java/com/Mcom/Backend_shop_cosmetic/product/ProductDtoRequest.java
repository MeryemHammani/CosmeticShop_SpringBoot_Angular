package com.Mcom.Backend_shop_cosmetic.product;


import com.Mcom.Backend_shop_cosmetic.brand.BrandDto;
import com.Mcom.Backend_shop_cosmetic.ingredient.IngredientEntity;
import com.Mcom.Backend_shop_cosmetic.multiImages.MultiImageEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.Mcom.Backend_shop_cosmetic.brand.BrandEntity;
import  com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryEntity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProductDtoRequest {
    private Integer id;
    private String code;
    private String name;
    private BigDecimal price;

    private Integer quantity;
    private String image;
    private String src;
    private String description;
    private String ingredients;

    private Date created_at;

    private Integer discount;
    private Integer flush_discount;
    private String how_to_use;

    private String size;
    private Boolean pack;
    private boolean offer;
    private BrandEntity brand;
    private SubCategoryEntity subcategory;
    private List<IngredientEntity>  BioIngredients;
    private List<MultiImageEntity> images;
    private String status;





}
