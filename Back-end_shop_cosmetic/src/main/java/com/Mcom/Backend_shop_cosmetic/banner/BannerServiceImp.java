package com.Mcom.Backend_shop_cosmetic.banner;

import com.Mcom.Backend_shop_cosmetic.brand.BrandDto;
import com.Mcom.Backend_shop_cosmetic.category.CategoryDao;
import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;
import com.Mcom.Backend_shop_cosmetic.category.CategoryEntity;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class BannerServiceImp implements BannerService{

    private final BannerDao bannerDao;
    private final ModelMapper modelMapper;
    @Override
    public BannerDto save(BannerDto BannerDto) {
        BannerEntity BannerEntity = modelMapper.map(BannerDto, BannerEntity.class);

        BannerEntity savedBanner = bannerDao.save(BannerEntity);
        return modelMapper.map(savedBanner, BannerDto.class);
    }


    @Override
    public void delete(Integer id) {
        bannerDao.deleteById(id);
    }

    @Override
    public BannerDto update(BannerDto BannerDto,Integer id) {
        Optional<BannerEntity> clientEntityOptional = bannerDao.findById(id);
            BannerEntity bannerEntity = modelMapper.map(BannerDto, BannerEntity.class);
            bannerEntity.setId(id);
            BannerEntity updated = bannerDao.save(bannerEntity);
            return modelMapper.map(updated, BannerDto.class);

    }

    /*@Override
    public BannerDto findByTitle(String title)
        {
        BannerEntity BannerEntity = bannerDao.findByTitle(title);
        return modelMapper.map(BannerEntity, BannerDto.class);
    }

     */

    @Override
    public BannerDto findById(Integer id) {
        BannerEntity bannerEntity = bannerDao.findById(id).get();
        return modelMapper.map(bannerEntity, BannerDto.class);
    }

    @Override
    public List<BannerDto> findAll() {

        return bannerDao.findAll().stream().map(el -> modelMapper.map(el, BannerDto.class)).collect(Collectors.toList());
    }
}
