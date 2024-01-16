package com.Mcom.Backend_shop_cosmetic.User;

import com.Mcom.Backend_shop_cosmetic.Role.RoleEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


public record SignUpDto(String firstName,
                        String lastName,
                        String email,
                        String password,
                        String phone,
                        String country,
                        String city,
                        String gender,
                        List<RoleEntity> roles) { }
