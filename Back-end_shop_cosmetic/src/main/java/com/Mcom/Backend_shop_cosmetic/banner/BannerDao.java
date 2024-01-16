package com.Mcom.Backend_shop_cosmetic.banner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BannerDao extends JpaRepository<BannerEntity,Integer> {
    //BannerEntity findByTitle(String title);
}
