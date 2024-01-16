package com.Mcom.Backend_shop_cosmetic.orderItem;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class OrderItemServiceImpl implements OrderItemService{
    private  final OrderItemDao orderItemDao;
    private  final ModelMapper modelMapper;

    @Override
    public OrderItemDto save(OrderItemDto orderItemDto) {
        OrderItemEntity orderItemEntity= modelMapper.map(orderItemDto, OrderItemEntity.class);
        return modelMapper.map(orderItemDao.save(orderItemEntity),OrderItemDto.class);
    }

    @Override
    public List<OrderItemDto> findAll() {
        return orderItemDao.findAll().stream().map(el -> modelMapper.map(el,OrderItemDto.class)).collect(Collectors.toList());
    }

    @Override
    public OrderItemDto findById(OrderItemKey id) {
        return modelMapper.map(orderItemDao.findById(id).get(), OrderItemDto.class);
    }

    @Override
    public void delete(OrderItemKey id) {
        orderItemDao.deleteById(id);
    }

    @Override
    public OrderItemDto update(OrderItemDto orderItemDto) {
        OrderItemEntity  orderItemEntity= modelMapper.map(orderItemDto, OrderItemEntity.class);
       // orderItemEntity.setId(id);
        return modelMapper.map(orderItemDao.save(orderItemEntity),OrderItemDto.class);
    }

}
