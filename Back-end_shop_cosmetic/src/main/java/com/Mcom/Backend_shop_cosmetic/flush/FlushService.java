package com.Mcom.Backend_shop_cosmetic.flush;


import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;

import java.util.List;

public interface FlushService {
    FlushResponseDto save( FlushRequestDto flushRequestDto);
    List<FlushResponseDto> findAll();
    FlushResponseDto findById(Integer id);
    void delete(Integer id);
    FlushResponseDto update( FlushRequestDto flushRequestDto, Integer id);
     List<ProductDtoResponse> getFlushProducts(Integer id);
     List<FlushResponseDto> getCurrentFlush();
     void EndFlush(Integer id);

}
