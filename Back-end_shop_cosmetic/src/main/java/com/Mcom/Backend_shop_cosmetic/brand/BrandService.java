package com.Mcom.Backend_shop_cosmetic.brand;

import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;

import jakarta.transaction.Transactional;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;


import java.util.HashMap;
import java.util.List;

public interface BrandService {
    BrandDto save(BrandDto BrandDto);

    @Transactional
    void deleteByName(String name);
    void delete(Integer id);

    BrandDto update(BrandDto BrandDto,Integer id);

    BrandDto findByName(String name);
    BrandDto findById(Integer id);

    List<BrandDto> findAll();

  HashMap<String,Object>getAllProducts(Integer id,Integer size);
}
