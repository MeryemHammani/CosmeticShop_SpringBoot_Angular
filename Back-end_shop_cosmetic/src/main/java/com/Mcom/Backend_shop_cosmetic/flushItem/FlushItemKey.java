package com.Mcom.Backend_shop_cosmetic.flushItem;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;


@Embeddable
@Data
public class FlushItemKey implements Serializable {
    @Column(name = "flush_id")
    private  Integer flushId;
    @Column(name="product_id")

    private Integer productId;
}
