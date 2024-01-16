package com.Mcom.Backend_shop_cosmetic.coupon;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class CouponDto {
    private Integer id;
    private String couponName;
    private  Double coupon_discount;
    private Boolean active;
    private Date created_at;
}
