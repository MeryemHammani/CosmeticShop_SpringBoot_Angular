package com.Mcom.Backend_shop_cosmetic.flushItem;

import com.Mcom.Backend_shop_cosmetic.flush.FlushEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="flushItems")
public class FlushItemEntity implements Serializable {
    @EmbeddedId
    private FlushItemKey id;
    @Column(nullable = false)
    private Integer discount;

    //relations

    //1- FlushItem contains  a product
    @MapsId("productId")
    @ManyToOne
    private ProductEntity product;

    //1- FlushItem contains  a flush
    @MapsId("flushId")
    @ManyToOne
    private FlushEntity flush;




}
