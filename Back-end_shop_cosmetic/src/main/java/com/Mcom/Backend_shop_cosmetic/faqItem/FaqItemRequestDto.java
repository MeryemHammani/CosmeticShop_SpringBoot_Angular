package com.Mcom.Backend_shop_cosmetic.faqItem;

import com.Mcom.Backend_shop_cosmetic.faqCategory.FaqCategoryEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class FaqItemRequestDto {
    private Integer id;
    private String question ;
    private  String answer ;
    private Date created_at;
    private FaqCategoryEntity faqCategory;
}
