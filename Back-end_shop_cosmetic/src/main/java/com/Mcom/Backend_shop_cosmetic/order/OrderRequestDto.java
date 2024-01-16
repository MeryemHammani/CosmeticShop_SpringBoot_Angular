package com.Mcom.Backend_shop_cosmetic.order;

import com.Mcom.Backend_shop_cosmetic.User.UserDto;
import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemDto;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class OrderRequestDto {
    private Integer id;
    private BigDecimal amount;
    private String phone;
    private String address;
    private String status;
    private Date order_date;
    private String payment_type;
    private UserDto user ;
    private List<OrderItemDto> orderItems;

}
