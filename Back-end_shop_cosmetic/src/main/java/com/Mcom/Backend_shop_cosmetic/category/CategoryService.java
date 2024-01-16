package com.Mcom.Backend_shop_cosmetic.category;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoRequest;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryResponseDto;

import java.util.HashMap;
import java.util.List;

public interface CategoryService {
    CategoryDto save(CategoryDto categoryDto);
    void delete(Integer id);
    CategoryDto update(CategoryDto categoryDto, Integer id);

    CategoryDto findByName(String name);

    CategoryDto findById(Integer id);


    List<CategoryDto> findAll();

    List<SubCategoryResponseDto>getSubCategories(Integer id);

    //list of category¨products
    HashMap<String,Object>getCatProducts(Integer id, Integer size);

    Integer getProductCount(Integer id);
}
