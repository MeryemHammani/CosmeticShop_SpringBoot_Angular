package com.Mcom.Backend_shop_cosmetic.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderDao extends JpaRepository<OrderEntity,Integer> {
    @Query(value="SELECT * FROM `orders` WHERE user_id=:id",nativeQuery = true)
    List<OrderEntity>getUserOrders(@Param("id")UUID id);
}
