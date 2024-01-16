package com.Mcom.Backend_shop_cosmetic.reviews;


import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReviewsDtoRequest {
    private Integer id;
    private String review;
    private Integer rating;
    private UserEntity user;
    private ProductEntity product;
    private Boolean valid ;


}

