package com.Mcom.Backend_shop_cosmetic.catalogue;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class CatalogueDto {
    private Integer id;
    private String title ;
    private String  catalogue;

    private Date created_at;
}
