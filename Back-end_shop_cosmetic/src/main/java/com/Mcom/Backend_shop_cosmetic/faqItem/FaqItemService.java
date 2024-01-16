package com.Mcom.Backend_shop_cosmetic.faqItem;



import java.util.List;

public interface FaqItemService {
    FaqItemResponseDto save(  FaqItemRequestDto faqItemRequestDto);
    List<FaqItemResponseDto> findAll();
    FaqItemResponseDto findById(Integer id);
    void delete(Integer id);
    FaqItemResponseDto update(  FaqItemRequestDto faqItemRequestDto, Integer id);

}
