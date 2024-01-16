package com.Mcom.Backend_shop_cosmetic.reviews;
import java.io.Serializable;
import java.util.List;
import java.util.Date;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reviews")
public class ReviewEntity implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false , unique = false, columnDefinition = "TEXT")
    private String review;
    @Column(nullable = false)
    private Integer rating;
    @Column(nullable = false)
    private boolean valid=true;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public boolean getValid() {
        return valid;
    }
}
