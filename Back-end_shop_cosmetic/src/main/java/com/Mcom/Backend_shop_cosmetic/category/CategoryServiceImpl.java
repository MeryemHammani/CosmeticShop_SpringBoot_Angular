package com.Mcom.Backend_shop_cosmetic.category;


import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoRequest;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductServiceImp;
import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryEntity;
import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryResponseDto;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{

    private final CategoryDao categoryDao;
    private  final ModelMapper modelMapper;
    private final ProductServiceImp productServiceImp;
    @Override
    public CategoryDto save(CategoryDto categoryDto) {
        CategoryEntity productEntity = modelMapper.map(categoryDto, CategoryEntity.class);
        return modelMapper.map(categoryDao.save(productEntity), CategoryDto.class);
    }


    @Override
    public void delete(Integer id) {
        categoryDao.deleteById(id);
    }

    @Override
    public CategoryDto update(CategoryDto categoryDto ,Integer id) {
        CategoryEntity categoryEntity = modelMapper.map(categoryDto, CategoryEntity.class);
        categoryEntity.setId(id);
        return modelMapper.map(categoryDao.save(categoryEntity) , CategoryDto.class);
    }

    @Override
    public CategoryDto findByName(String name) {
        return modelMapper.map(categoryDao.findByName(name),CategoryDto.class);
    }

    @Override
    public CategoryDto findById(Integer id) {
        return modelMapper.map(categoryDao.findById(id).get(),CategoryDto.class);
    }


    @Override
    public List<CategoryDto> findAll() {
        return categoryDao.findAll().stream().map(el -> modelMapper.map(el, CategoryDto.class)).collect(Collectors.toList());

    }

    @Override
    public List<SubCategoryResponseDto> getSubCategories(Integer id) {
        CategoryEntity categoryEntity=categoryDao.findById(id).orElseThrow(() -> new AppException("category not found", HttpStatus.NOT_FOUND));
        return categoryEntity.getSubCategories().stream().map(el -> modelMapper.map(el, SubCategoryResponseDto.class)).collect(Collectors.toList());
    }

    @Override
    public HashMap<String,Object> getCatProducts(Integer id, Integer size) {
        CategoryEntity categoryEntity=categoryDao.findById(id).orElseThrow(() -> new AppException("category", HttpStatus.NOT_FOUND));
        List<SubCategoryEntity>subCats=categoryEntity.getSubCategories();
        ArrayList<ProductDtoResponse> Products=new ArrayList<ProductDtoResponse>() ;
        for(int i=0; i< subCats.size();i++){
            Products.addAll(subCats.get(i).getProducts().stream().map(el -> modelMapper.map(el, ProductDtoResponse.class)).collect(Collectors.toList()));
        }
        HashMap<String,Object> response=new HashMap<String,Object>();

        if(!Products.isEmpty()){
            response.put("total",Products.size());
            //do pagination
            if(size>=Products.size())
                size=Products.size();

            if(size>=0)
                Products=new ArrayList<>(Products.subList(0, size));
            //rating
            productServiceImp.getRatingList(Products);
            response.put("products",Products);
        }
        return response;
    }

    @Override
    public Integer getProductCount(Integer id) {
        Integer nb=0;
        CategoryEntity categoryEntity=categoryDao.findById(id).orElseThrow(() -> new AppException("category", HttpStatus.NOT_FOUND));
        List<SubCategoryEntity>subCats=categoryEntity.getSubCategories();
        for(int i=0; i< subCats.size();i++){
            nb+=subCats.get(i).getProducts().size();  }
        return nb;
    }
}
