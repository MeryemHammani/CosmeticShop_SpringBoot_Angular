package com.Mcom.Backend_shop_cosmetic.flushItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlushItemDao extends JpaRepository<FlushItemEntity, FlushItemKey> {
}
