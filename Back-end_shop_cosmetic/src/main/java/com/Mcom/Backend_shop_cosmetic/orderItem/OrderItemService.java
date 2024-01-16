package com.Mcom.Backend_shop_cosmetic.orderItem;


import java.util.List;

public interface OrderItemService {

    OrderItemDto save(OrderItemDto orderItemDto);
    List<OrderItemDto> findAll();
    OrderItemDto findById(OrderItemKey id);
    void delete(OrderItemKey id);
    OrderItemDto update(OrderItemDto orderItemDto);
    
}
