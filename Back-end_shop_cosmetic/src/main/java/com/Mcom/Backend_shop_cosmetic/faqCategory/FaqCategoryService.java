package com.Mcom.Backend_shop_cosmetic.faqCategory;


import com.Mcom.Backend_shop_cosmetic.faqItem.FaqItemEntity;
import com.Mcom.Backend_shop_cosmetic.faqItem.FaqItemResponseDto;

import java.util.List;

public interface FaqCategoryService {
    FaqCategoryDto save(FaqCategoryDto faqCategoryDto);
    List<FaqCategoryDto> findAll();
    FaqCategoryDto findById(Integer id);
    void delete(Integer id);
    FaqCategoryDto update(FaqCategoryDto faqCategoryDto, Integer id);
    List<FaqItemResponseDto> getFaqItem(String name );
}
