package com.Mcom.Backend_shop_cosmetic.flush;

import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemDto;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FlushResponseDto {
    private Integer id;
    private String description;
    private Date start_date;
    private Date end_date;
    private Date created_at;
    private List<FlushItemDto> flushItems;
    private List<ProductDtoResponse> products;
}
