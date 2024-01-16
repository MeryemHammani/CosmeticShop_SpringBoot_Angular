package com.Mcom.Backend_shop_cosmetic.flush;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Repository
public interface FlushDao extends JpaRepository<FlushEntity, Integer> {
    @Query(value="SELECT * FROM `Flushes` WHERE  now() BETWEEN start_date and end_date", nativeQuery = true)
   List<FlushEntity> findCurrentFlush();

}
