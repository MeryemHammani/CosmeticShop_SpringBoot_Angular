package com.Mcom.Backend_shop_cosmetic.Role;


import java.util.List;

public interface RoleService {
    RoleDto save(RoleDto roleDto);
    void delete(String roleName);

    RoleDto update(RoleDto roleDto,String roleName);

    List<RoleDto> findAll();

    RoleDto findByRoleName(String roleName);
}
