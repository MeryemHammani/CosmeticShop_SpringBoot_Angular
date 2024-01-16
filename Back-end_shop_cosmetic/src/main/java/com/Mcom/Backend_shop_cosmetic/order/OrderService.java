package com.Mcom.Backend_shop_cosmetic.order;

import java.util.List;
import java.util.UUID;

public interface OrderService {

       OrderResponseDto save(OrderRequestDto orderDto);
       List<OrderResponseDto> findAll();
       OrderResponseDto findById(Integer id);
       void delete(Integer id);
       OrderResponseDto update(OrderRequestDto orderDto, Integer id);
       List<OrderResponseDto> getUSerOrders(UUID id);


}
