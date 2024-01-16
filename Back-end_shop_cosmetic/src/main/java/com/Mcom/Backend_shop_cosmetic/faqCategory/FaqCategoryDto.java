package com.Mcom.Backend_shop_cosmetic.faqCategory;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FaqCategoryDto {
    private Integer id;
    private String name;
    private String icon;
    private Date created_at;
}
