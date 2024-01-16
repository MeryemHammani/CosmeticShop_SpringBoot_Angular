package com.Mcom.Backend_shop_cosmetic.brand;



import com.Mcom.Backend_shop_cosmetic.banner.BannerDto;
import com.Mcom.Backend_shop_cosmetic.product.ProductServiceImp;
import jakarta.transaction.Transactional;

import com.Mcom.Backend_shop_cosmetic.banner.BannerEntity;
import com.Mcom.Backend_shop_cosmetic.category.CategoryDao;
import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;
import com.Mcom.Backend_shop_cosmetic.category.CategoryEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.Clock;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class BrandServiceImp implements BrandService{

    private final BrandDao BrandDao;
    private final ModelMapper modelMapper;
    private final ProductServiceImp productServiceImp;
    @Override


    public BrandDto save(BrandDto brandDto) {
        BrandEntity brandEntity = modelMapper.map(brandDto, BrandEntity.class);
        BrandEntity savedBrand = BrandDao.save(brandEntity);
        return modelMapper.map(savedBrand, BrandDto.class);
    }


    @Transactional
    @Override
    public void deleteByName(String name) {
        BrandDao.deleteByName(name);
    }

    @Override
    public void delete(Integer id) {
        BrandDao.deleteById(id);
    }

    @Override
    public BrandDto update(BrandDto BrandDto,Integer id) {
        Optional<BrandEntity> clientEntityOptional = BrandDao.findById(id);
        BrandEntity brandEntity = modelMapper.map(BrandDto, BrandEntity.class);
        brandEntity.setId(id);
        BrandEntity updated = BrandDao.save(brandEntity);
        return modelMapper.map(updated, BrandDto.class);
    }

    @Override
    public BrandDto findByName(String name) {
        BrandEntity brandEntity = BrandDao.findByName(name);
        return modelMapper.map(brandEntity, BrandDto.class);
    }

    @Override
    public List<BrandDto> findAll() {
        return BrandDao.findAll().stream().map(el -> modelMapper.map(el, BrandDto.class)).collect(Collectors.toList());
    }

    @Override
    public HashMap<String,Object>getAllProducts(Integer id,Integer size) {
        BrandEntity brandEntity=BrandDao.getById(id);
        List<ProductDtoResponse> products=brandEntity.getProducts().stream().map(el -> modelMapper.map(el,ProductDtoResponse.class)).collect(Collectors.toList());
        HashMap<String,Object> response=new HashMap<String,Object>();
        if(!products.isEmpty()){
            response.put("total",products.size());
            //do pagination
            if(size>=products.size())
                size=products.size();
            if(size>=0)
                products=products.subList(0, size);
            //rating
            productServiceImp.getRatingList(products);
            response.put("products",products);
        }
        return response;
    }

    @Override
    public BrandDto findById(Integer id) {
        return modelMapper.map(BrandDao.findById(id).get(),BrandDto.class);
    }


}
