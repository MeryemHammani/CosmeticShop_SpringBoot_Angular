package com.Mcom.Backend_shop_cosmetic.ShopingCart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ShopingCartDao extends JpaRepository<ShopingCartEntity,CartKey> {
   @Modifying
   @Query(value = "DELETE FROM ShopingCartEntity c WHERE c.id.user_id = :id")
   void removeAllUserCarts(@Param("id") UUID id);

    // delete  FROM `carts` WHERE user_id = UNHEX('64e02cab-f37d-4281-8221-942d598db86a') ;
}
