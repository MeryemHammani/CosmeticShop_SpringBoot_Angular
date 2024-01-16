package com.Mcom.Backend_shop_cosmetic.User;

import com.Mcom.Backend_shop_cosmetic.Role.RoleEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserDto {
    private UUID id;
    private String firstName;
    private String lastName;
    //private String password;
    private String email;
    private String phone;
    private String country;
    private String city;
    private String gender;
    private Date created_at;
    private List<RoleEntity> roles;
    private String token;
}
