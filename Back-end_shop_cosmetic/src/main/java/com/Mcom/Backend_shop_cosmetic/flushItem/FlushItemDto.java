package com.Mcom.Backend_shop_cosmetic.flushItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FlushItemDto {
    private FlushItemKey id;
    private Integer discount;


}
