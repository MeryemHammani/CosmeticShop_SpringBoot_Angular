package com.Mcom.Backend_shop_cosmetic.orderItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemDao extends JpaRepository<OrderItemEntity,OrderItemKey> {
}
