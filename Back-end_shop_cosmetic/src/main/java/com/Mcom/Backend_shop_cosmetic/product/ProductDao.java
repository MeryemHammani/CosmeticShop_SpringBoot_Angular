package com.Mcom.Backend_shop_cosmetic.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductDao extends JpaRepository<ProductEntity,Integer> {
    Long  deleteByCode(String code);
    Optional<ProductEntity> findByCode(String code);

    //select best offers
    @Query(value="SELECT * FROM products WHERE offer = 1",nativeQuery = true)
    Page<ProductEntity> getBestOffers(Pageable page);

    //select new products

    @Query(value=" SELECT * FROM products WHERE created_at >= NOW() - INTERVAL 1 MONTH ORDER BY created_at DESC",nativeQuery = true)
    Page<ProductEntity> getNewProducts(Pageable page);

    @Query(value = "SELECT * FROM products WHERE (name LIKE %:query% OR description LIKE %:query%)", nativeQuery = true)
    Page<ProductEntity>SearchProducts(@Param("query") String query,Pageable page);


    //get product rating
    @Query(value = " SELECT CEILING(SUM(rating) / COUNT(*)) FROM reviews WHERE product_id=:id", nativeQuery = true)
    Integer getProductRating(@Param("id") Integer id);

}


