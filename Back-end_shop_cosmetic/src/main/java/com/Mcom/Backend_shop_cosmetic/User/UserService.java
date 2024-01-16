package com.Mcom.Backend_shop_cosmetic.User;

import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartRequestDto;
import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartResponseDto;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UserDto save(SignUpDto UserDto);
    UserDto login(CredentialsDto credentialsDto);

    void delete(UUID id);

    UserDto update(SignUpDto UserDto);


    UserDto updateCredential( CredentialUpdateDto credentialUpdateDto);
    List<UserDto> findAll();
    UserDto findById(UUID id);
    UserDto findByEmail(String email);

    void addRoleToUser(String  userName , String roleName);

    List<ProductDtoResponse>getWishlist(UUID id);

    void addToWishList(UUID id, Integer prod_id);
    void removeFromWishList(UUID id, Integer prod_id);
    void removeAllFromWishList(UUID userId);

    //get all products cart of a user
     List<ShopingCartResponseDto> getCarts(UUID id);

     // get cart  products count

  Integer getProductsCartCount(UUID id);


}
