package com.Mcom.Backend_shop_cosmetic.faqItem;

import com.Mcom.Backend_shop_cosmetic.faqCategory.FaqCategoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FaqItemResponseDto {
    private Integer id;
    private String question ;
    private  String answer ;
    private Date created_at;
    private FaqCategoryDto faqCategory;
}
