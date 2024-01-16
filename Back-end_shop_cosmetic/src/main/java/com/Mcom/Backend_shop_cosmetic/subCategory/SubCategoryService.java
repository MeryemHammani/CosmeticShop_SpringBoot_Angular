package com.Mcom.Backend_shop_cosmetic.subCategory;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;

import java.util.HashMap;
import java.util.List;

public interface SubCategoryService {
    SubCategoryResponseDto save(SubCategoryRequestDto subCategoryRequestDto);

    void delete(Integer id);

    SubCategoryResponseDto update(SubCategoryRequestDto subCategoryRequestDto, Integer id);

    SubCategoryResponseDto findByName(String name);


    List<SubCategoryResponseDto> findAll();
    SubCategoryResponseDto findById(Integer id);

    //get all products of  a subCategory by giving the subCategory id
   HashMap<String, Object>getAllProduct(Integer id, Integer size);


}
