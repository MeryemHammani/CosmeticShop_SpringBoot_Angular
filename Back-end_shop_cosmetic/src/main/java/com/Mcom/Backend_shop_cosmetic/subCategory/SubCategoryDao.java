package com.Mcom.Backend_shop_cosmetic.subCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubCategoryDao extends JpaRepository<SubCategoryEntity,Integer> {
    public SubCategoryEntity findByName(String name);
}
