package com.Mcom.Backend_shop_cosmetic.Role;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("roles")


public class RoleController {
    @Autowired

    private RoleService roleService;


    @PostMapping("")
    public ResponseEntity<RoleDto> save(@RequestBody RoleDto roleDto) {
        return  new ResponseEntity<>(roleService.save(roleDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<RoleDto>> getAll(){
        return ResponseEntity.ok().body(roleService.findAll());
    }


    @PutMapping("/id/{id}")
    public ResponseEntity<RoleDto> update(@RequestBody() RoleDto roleDto, @PathVariable() String  roleName)  {
        return ResponseEntity.accepted().body(roleService.update(roleDto, roleName));
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<RoleDto> findById(@PathVariable("id") String  roleName) {
        return ResponseEntity.ok().body(roleService.findByRoleName(roleName));
    }



    @DeleteMapping("/id/{id}")
    public ResponseEntity<RoleDto> delete(@PathVariable("id") String  roleName) {
        roleService.delete(roleName);
        return ResponseEntity.noContent().build();
    }





}
