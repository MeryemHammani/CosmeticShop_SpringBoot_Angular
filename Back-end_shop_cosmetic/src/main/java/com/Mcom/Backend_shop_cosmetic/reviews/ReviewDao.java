package com.Mcom.Backend_shop_cosmetic.reviews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewDao extends JpaRepository<ReviewEntity,Integer> {
    @Query(value="SELECT * FROM Reviews WHERE valid = 1 and product_id = :prod_id",nativeQuery = true)
    List<ReviewEntity> getValidReviews (  @Param("prod_id") Integer prod_id);
}
