package com.Mcom.Backend_shop_cosmetic.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryDao extends JpaRepository<CategoryEntity,Integer> {
    public CategoryEntity findByName(String name);
}
