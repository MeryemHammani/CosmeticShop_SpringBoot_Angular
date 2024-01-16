package com.Mcom.Backend_shop_cosmetic.coupon;

import com.Mcom.Backend_shop_cosmetic.coupon.CouponEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponDao extends JpaRepository<CouponEntity,Integer> {
    CouponEntity findByCouponName(String coupon_name);
    void deleteByCouponName(String name);
}
