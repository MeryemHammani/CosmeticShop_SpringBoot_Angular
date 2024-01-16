package com.Mcom.Backend_shop_cosmetic.subCategory;

import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SubCategoryResponseDto {
    private Integer id;
    private String name;
    private String description ;
    private Date created_at ;
    //optional attribute
    private CategoryDto category;

}
