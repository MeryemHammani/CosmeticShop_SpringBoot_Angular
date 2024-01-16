package com.Mcom.Backend_shop_cosmetic.order;

import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.flush.FlushEntity;
import com.Mcom.Backend_shop_cosmetic.flush.FlushResponseDto;
import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemEntity;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemDao;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemDto;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class OrderServiceImpl implements OrderService{
   private final  ModelMapper modelMapper ;
   private final  OrderDao orderDao;
   private final OrderItemDao itemDao;

    @Override
    public OrderResponseDto save(OrderRequestDto orderDto) {
        OrderEntity order=modelMapper.map(orderDto, OrderEntity.class);
        List<OrderItemEntity>items=order.getOrderItems();
        order.setOrderItems(null);
        OrderEntity saved=orderDao.save(order);
        for(int i=0;i<items.size();i++){
            items.get(i).getId().setOrderId(saved.getId());
            items.get(i).setOrder(saved);
        }
        saved.setOrderItems(items);
        return modelMapper.map(orderDao.save(saved), OrderResponseDto.class);

    }


    @Override
    public List<OrderResponseDto> findAll() {
        return orderDao.findAll().stream().map(el -> modelMapper.map(el , OrderResponseDto.class)).collect(Collectors.toList());
    }

    @Override
    public OrderResponseDto findById(Integer id) {
        return modelMapper.map(orderDao.findById(id).get(), OrderResponseDto.class);
    }

    @Override
    public void delete(Integer id) {
         orderDao.deleteById(id);
    }

    @Override
    public OrderResponseDto update(OrderRequestDto orderDto, Integer id) {
        OrderEntity order= modelMapper.map(orderDto,OrderEntity.class);
        order.setId(id);
        return modelMapper.map(orderDao.save(order), OrderResponseDto.class);
    }

    @Override
    public List<OrderResponseDto> getUSerOrders(UUID id) {
        return orderDao.getUserOrders(id).stream().map(el -> modelMapper.map(el , OrderResponseDto.class)).collect(Collectors.toList());

    }
}
