package com.Mcom.Backend_shop_cosmetic.ShopingCart;

import java.util.List;
import java.util.UUID;

public interface ShopingCartService {

    ShopingCartResponseDto save(ShopingCartRequestDto ShopingCartDto);

    void delete(CartKey id);

    ShopingCartResponseDto update(ShopingCartRequestDto ShopingCartDto);


    List<ShopingCartResponseDto> findAll();
    //remove all carts of a user
    void removeAllUserCart(UUID userId);

    
}
