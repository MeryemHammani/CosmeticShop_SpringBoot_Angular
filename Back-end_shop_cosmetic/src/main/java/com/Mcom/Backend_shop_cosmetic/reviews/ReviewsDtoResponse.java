package com.Mcom.Backend_shop_cosmetic.reviews;

import com.Mcom.Backend_shop_cosmetic.User.SignUpDto;
import com.Mcom.Backend_shop_cosmetic.User.UserDto;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReviewsDtoResponse {
    private Integer id;
    private String review;
    private Integer rating;
    private UUID user_id ;
    private String firstName;
    private String lastName;
    private String product_name;
    private String code;
    private String image;
    private boolean valid;
    private Date created_at;
}
