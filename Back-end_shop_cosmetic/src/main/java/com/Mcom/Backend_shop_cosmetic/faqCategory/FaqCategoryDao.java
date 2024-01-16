package com.Mcom.Backend_shop_cosmetic.faqCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface FaqCategoryDao extends JpaRepository<FaqCategoryEntity,Integer> {
    FaqCategoryEntity findByName(String name);
}
