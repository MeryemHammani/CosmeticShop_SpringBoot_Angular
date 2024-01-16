package com.Mcom.Backend_shop_cosmetic.category;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CategoryDto {

    private Integer id;
    private String name;
    private String description ;
    private String image;
    private String src;
    private Date created_at ;


}
