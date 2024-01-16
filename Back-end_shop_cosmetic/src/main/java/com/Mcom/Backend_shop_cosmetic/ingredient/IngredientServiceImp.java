package com.Mcom.Backend_shop_cosmetic.ingredient;

import com.Mcom.Backend_shop_cosmetic.brand.BrandDto;
import com.Mcom.Backend_shop_cosmetic.brand.BrandEntity;
import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductServiceImp;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

import java.util.HashMap;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IngredientServiceImp implements IngredientService {
    private final IngredientDao ingredientDao;
    private final ModelMapper modelMapper;
    private final ProductServiceImp productServiceImp;


    @Override
    public IngredientsDto save(IngredientsDto ingredientsDto) {
        IngredientEntity ingredientEntity = modelMapper.map(ingredientsDto, IngredientEntity.class);
        IngredientEntity saved = ingredientDao.save(ingredientEntity);
        return modelMapper.map(saved, IngredientsDto.class);
    }

    @Override
    public void delete(Integer id) {
        ingredientDao.deleteById(id);
    }

    @Override
    public IngredientsDto update(IngredientsDto ingredientsDto, Integer id) {
        Optional<IngredientEntity> clientEntityOptional = ingredientDao.findById(id);
        IngredientEntity ingredientEntity = modelMapper.map(ingredientsDto, IngredientEntity.class);
        ingredientEntity.setId(id);
        IngredientEntity updated = ingredientDao.save(ingredientEntity);
        return modelMapper.map(updated, IngredientsDto.class);
    }

    @Override
    public IngredientsDto findByName(String name) {
        IngredientEntity ingredientEntity = ingredientDao.findByName(name);
        return modelMapper.map(ingredientEntity, IngredientsDto.class);
    }

    @Override
    public List<IngredientsDto> findAll() {
        return ingredientDao.findAll().stream()
                .map(el -> modelMapper.map(el, IngredientsDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public IngredientsDto getById(Integer id) {
        IngredientEntity ingredientEntity = ingredientDao.findById(id)
                .orElseThrow(() -> new AppException("Ingredient not found", HttpStatus.NOT_FOUND));
        return modelMapper.map(ingredientEntity, IngredientsDto.class);
    }

    @Override
    public HashMap<String, Object> getAllProducts(Integer id, Integer size){
        IngredientEntity IngredientEntity=ingredientDao.findById(id).get();
        List<ProductDtoResponse> products=IngredientEntity.getProducts().stream().map(el -> modelMapper.map(el,ProductDtoResponse.class)).collect(Collectors.toList());
        HashMap<String,Object> response=new HashMap<String,Object>();

        if(!products.isEmpty()){
            response.put("total",products.size());

            if(size>=products.size())
                size=products.size();

            //do pagination
            if(size>=0)
                products=products.subList(0, size);
            //rating
            productServiceImp.getRatingList(products);
            response.put("products",products);
        }
        return response;

    }





}