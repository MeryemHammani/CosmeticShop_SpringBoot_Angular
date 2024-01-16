package com.Mcom.Backend_shop_cosmetic.coupon;
import java.io.Serializable;
import java.util.Date;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "coupons")
public class CouponEntity implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String couponName;
    @Column(nullable = false)
    private Double coupon_discount;
    @Column(nullable = false)
    private  Boolean active;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity user;
}

