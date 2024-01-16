package com.Mcom.Backend_shop_cosmetic.brand;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandDao  extends JpaRepository<BrandEntity,Integer> {
    void deleteByName(String name);
     BrandEntity findByName(String name);
}
