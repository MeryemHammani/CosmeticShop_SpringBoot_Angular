package com.Mcom.Backend_shop_cosmetic.Role;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class RoleServiceImp implements RoleService{

    private final RoleDao roleDao;
    private final ModelMapper modelMapper;
    @Override
    public RoleDto save(RoleDto roleDto) {
        RoleEntity roleEntity = modelMapper.map(roleDto, RoleEntity.class);
        RoleEntity saved = roleDao.save(roleEntity);
        return modelMapper.map(saved, RoleDto.class);
    }

    @Override
    public void delete(String roleName) {
        roleDao.deleteById(roleName);
    }

    @Override
    public RoleDto update(RoleDto roleDto, String roleName) {
        RoleEntity roleEntity = modelMapper.map(roleDto, RoleEntity.class);
        roleEntity.setRoleName(roleName);
        RoleEntity updated = roleDao.save(roleEntity);
        return modelMapper.map(updated, RoleDto.class);}

    @Override
    public List<RoleDto> findAll() {
        return roleDao.findAll().stream().map(el -> modelMapper.map(el, RoleDto.class)).collect(Collectors.toList());
        
    }

    @Override
    public RoleDto findByRoleName(String roleName) {
        return modelMapper.map(roleDao.findById(roleName).get(),RoleDto.class);
    }

}
