package com.Mcom.Backend_shop_cosmetic.reclamation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReclamationDao extends JpaRepository<ReclamationEntity,Integer> {
}

