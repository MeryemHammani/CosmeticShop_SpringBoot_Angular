package com.Mcom.Backend_shop_cosmetic.subCategory;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductServiceImp;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SubCategoryServiceImpl implements SubCategoryService{

    private final SubCategoryDao subCategoryDao;
    private final ModelMapper modelMapper;
    private final ProductServiceImp productServiceImp;

    @Override
    public SubCategoryResponseDto save(SubCategoryRequestDto subCategoryRequestDto) {
        SubCategoryEntity  subCategoryEntity = modelMapper.map(subCategoryRequestDto, SubCategoryEntity.class);
        return  modelMapper.map(subCategoryDao.save(subCategoryEntity),SubCategoryResponseDto.class) ;
    }

    @Override
    public void delete(Integer id) {
        subCategoryDao.deleteById(id);
    }



    @Override
    public SubCategoryResponseDto update(SubCategoryRequestDto subCategoryRequestDto, Integer id) {
        SubCategoryEntity subCategoryEntity = modelMapper.map(subCategoryRequestDto, SubCategoryEntity.class);
        subCategoryEntity.setId(id);
        return modelMapper.map(subCategoryDao.save(subCategoryEntity), SubCategoryResponseDto.class);
    }

    @Override
    public SubCategoryResponseDto findByName(String name) {

        return modelMapper.map(subCategoryDao.findByName(name),SubCategoryResponseDto.class);
    }

    @Override
    public SubCategoryResponseDto findById(Integer id) {
        return modelMapper.map(subCategoryDao.findById(id).get(),SubCategoryResponseDto.class);
    }


    @Override
    public List<SubCategoryResponseDto> findAll() {
        return subCategoryDao.findAll().stream().map(el -> modelMapper.map(el, SubCategoryResponseDto.class )).collect(Collectors.toList());
    }

    //list the products of  a subCategory
    @Override
    public HashMap<String, Object> getAllProduct(Integer id, Integer size) {
        SubCategoryEntity  subCategoryEntity=subCategoryDao.getById(id);
        List<ProductDtoResponse>products=subCategoryEntity.getProducts().stream().map(el -> modelMapper.map(el,ProductDtoResponse.class)).collect(Collectors.toList());
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



}
