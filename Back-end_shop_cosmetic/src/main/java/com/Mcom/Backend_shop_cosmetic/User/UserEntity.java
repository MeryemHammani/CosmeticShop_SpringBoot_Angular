package com.Mcom.Backend_shop_cosmetic.User;

import java.io.Serializable;
import java.util.*;

import com.Mcom.Backend_shop_cosmetic.Role.RoleEntity;
import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartEntity;
import com.Mcom.Backend_shop_cosmetic.coupon.CouponEntity;
import com.Mcom.Backend_shop_cosmetic.order.OrderEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity implements Serializable {
       @Id
        @GeneratedValue(generator = "uuid2")
        @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
        @Column(columnDefinition = "BINARY(16)")
        private UUID id;
        @Column(nullable = false)
        private String firstName;
        @Column(nullable = false)
        private String lastName;
        @Column(nullable = false, unique = true)
        private String email;
        @Column(nullable = false)
        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        private String password;
        @Column(nullable = false)
        private String phone;
        private String country;
        private String city;
        private String gender;
        @CreationTimestamp
        @Temporal(TemporalType.TIMESTAMP)
        private Date created_at;

        @ManyToMany(fetch = FetchType.EAGER)
        @JoinTable(name = "USER_ROLE", joinColumns = {
                        @JoinColumn(name = "USER_ID")
        }, inverseJoinColumns = {
                        @JoinColumn(name = "ROLE_ID")
        })

        private Collection<RoleEntity> roles = new ArrayList<>();

        @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
        private CouponEntity coupon;

        @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
        private List<ReviewEntity> reviews;

        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
        private List<ShopingCartEntity> carts;

        @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
        private List<OrderEntity> order;

        @ManyToMany
        @JoinTable(name = "wishlist", joinColumns = @JoinColumn(name = "userId"), inverseJoinColumns = @JoinColumn(name = "productId"))
        private List<ProductEntity> products;

}
