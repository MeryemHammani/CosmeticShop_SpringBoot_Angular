package com.Mcom.Backend_shop_cosmetic.brand;

import jakarta.persistence.Column;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BrandDto {
    private Integer id;
    private String name;
    private String description;
    private String logo ;
    private String src;
    private Date created_at ;

}
