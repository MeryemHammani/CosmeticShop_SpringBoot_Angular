package com.Mcom.Backend_shop_cosmetic.coupon;

import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;

import java.util.List;

public interface CouponService {
    CouponDto save(CouponDto CouponDto);

    void delete(Integer id);

    CouponDto update(CouponDto CouponDto, Integer id);


    CouponDto findByCouponName(String coupon_name);

    List<CouponDto> findAll();
    void deleteByCouponName(String coupon_name);

}
