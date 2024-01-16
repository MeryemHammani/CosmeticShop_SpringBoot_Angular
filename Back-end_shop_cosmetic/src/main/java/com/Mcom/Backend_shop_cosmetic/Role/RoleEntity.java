package com.Mcom.Backend_shop_cosmetic.Role;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "roles")
public class RoleEntity implements Serializable {
    @Id
    private String roleName;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    //@ManyToMany(fetch = FetchType.LAZY, mappedBy = "roles")
    //private List<UserEntity> users;
}
