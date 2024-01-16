package com.Mcom.Backend_shop_cosmetic.blog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BlogDao extends JpaRepository<BlogEntity,Integer> {
}
