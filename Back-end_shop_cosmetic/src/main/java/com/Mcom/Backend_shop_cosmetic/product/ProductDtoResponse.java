package com.Mcom.Backend_shop_cosmetic.product;


import com.Mcom.Backend_shop_cosmetic.brand.BrandDto;
import com.Mcom.Backend_shop_cosmetic.brand.BrandEntity;
import com.Mcom.Backend_shop_cosmetic.ingredient.IngredientsDto;
import com.Mcom.Backend_shop_cosmetic.multiImages.MultiImageEntity;
import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProductDtoResponse {
    private Integer id;
    private String code;
    private String name;
    private Integer rating;
    private BigDecimal price;
    private Integer quantity;
    private String description;
    private String ingredients;
    private String image;
    private String src;
    private Date created_at;
    private Integer discount;
    private Integer flush_discount;
    private String how_to_use;
    private String size;
    private Boolean pack;
    private boolean offer;
    private BrandDto brand;
    private SubCategoryResponseDto subcategory;
    private List<MultiImageEntity> images;
    private String status;


}
