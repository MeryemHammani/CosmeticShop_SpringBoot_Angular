package com.Mcom.Backend_shop_cosmetic.catalogue;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogueDao extends JpaRepository<CatalogueEntity,Integer> {
}
