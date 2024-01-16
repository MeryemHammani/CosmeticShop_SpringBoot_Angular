package com.Mcom.Backend_shop_cosmetic.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDao extends JpaRepository<RoleEntity,String> {
    RoleEntity findByRoleName(String roleName);
}
