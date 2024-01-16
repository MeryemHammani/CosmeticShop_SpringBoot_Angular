package com.Mcom.Backend_shop_cosmetic.banner;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BannerDto {
    private Integer id;
    private String title;
    private String description;
    private String button;
    private String image;
    private String src;
    private String link;
    private Date created_at;
}
