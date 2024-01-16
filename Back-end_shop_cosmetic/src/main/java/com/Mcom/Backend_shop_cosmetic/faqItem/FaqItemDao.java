package com.Mcom.Backend_shop_cosmetic.faqItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaqItemDao extends JpaRepository<FaqItemEntity,Integer> {
}
