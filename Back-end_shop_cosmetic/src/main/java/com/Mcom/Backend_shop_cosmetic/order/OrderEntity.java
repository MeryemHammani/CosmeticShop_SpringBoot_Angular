package com.Mcom.Backend_shop_cosmetic.order;
import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.orderItem.OrderItemEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;



@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="orders")
public class OrderEntity implements Serializable {
    //---------attributs-------------------
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String status;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date order_date;
    @Column(nullable = false)
    private String payment_type;
    //relation
    //1- user does an order
    @ManyToOne
    private UserEntity user ;
    //2- order contains multiple orderItems
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OrderItemEntity>orderItems;


}
