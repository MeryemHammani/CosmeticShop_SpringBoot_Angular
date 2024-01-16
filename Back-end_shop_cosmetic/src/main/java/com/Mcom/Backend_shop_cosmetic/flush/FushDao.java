package com.Mcom.Backend_shop_cosmetic.flush;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FushDao extends JpaRepository<FlushEntity,Integer> {
}
