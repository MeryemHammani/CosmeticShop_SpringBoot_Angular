package com.Mcom.Backend_shop_cosmetic.Role;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RoleDto {
    private String roleName;
    private Date created_at;

}
