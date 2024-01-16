package com.Mcom.Backend_shop_cosmetic.flushItem;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;

import java.util.List;

public interface FlushItemService {

   FlushItemDto save(FlushItemDto flushItemDto);
    List<FlushItemDto> findAll();
   FlushItemDto findById(FlushItemKey id);
   void delete(FlushItemKey id);
   FlushItemDto update(FlushItemDto flushItemDto);

}
