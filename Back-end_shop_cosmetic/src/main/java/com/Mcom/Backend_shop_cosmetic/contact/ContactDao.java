package com.Mcom.Backend_shop_cosmetic.contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactDao extends JpaRepository<ContactEntity, Integer> {
}
