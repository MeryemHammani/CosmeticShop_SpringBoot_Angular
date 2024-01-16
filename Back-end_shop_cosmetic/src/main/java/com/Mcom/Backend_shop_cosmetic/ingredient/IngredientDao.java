package com.Mcom.Backend_shop_cosmetic.ingredient;

import com.Mcom.Backend_shop_cosmetic.brand.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientDao extends JpaRepository<IngredientEntity,Integer> {
    void deleteByName(String name);
    IngredientEntity findByName(String name);
}
