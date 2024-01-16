package com.Mcom.Backend_shop_cosmetic.banner;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BannerService {
    BannerDto save(BannerDto BannerDto);

    void delete(Integer id);

    BannerDto update(BannerDto BannerDto,Integer id);

    //BannerDto findByTitle(String title);
    BannerDto findById(Integer id);

    List<BannerDto> findAll();

}
