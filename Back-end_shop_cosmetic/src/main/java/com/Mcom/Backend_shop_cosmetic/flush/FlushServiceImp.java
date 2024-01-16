package com.Mcom.Backend_shop_cosmetic.flush;


import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemDao;
import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemEntity;
import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemKey;
import com.Mcom.Backend_shop_cosmetic.product.ProductDao;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductServiceImp;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlushServiceImp implements FlushService{
    private final FlushDao flushDao;
    private final FlushItemDao flushItemDao;
    private final ModelMapper modelMapper;
    private final ProductDao productDao;
    private final ProductServiceImp productServiceImp;

    @Override
    public FlushResponseDto save(FlushRequestDto flushRequestDto) {
        FlushEntity flushEntity= modelMapper.map(flushRequestDto, FlushEntity.class);
        List<FlushItemEntity>items=flushEntity.getFlushItems();
        flushEntity.setFlushItems(null);
        FlushEntity saved=flushDao.save(flushEntity);
        Integer id;
        for(int i=0;i<items.size();i++){
            id= items.get(i).getId().getProductId();
            ProductEntity prod=productDao.findById(id).orElseThrow(() -> new AppException("product not found", HttpStatus.NOT_FOUND));
            prod.setFlush_discount(items.get(i).getDiscount());  // set the product flushDiscount as the flushItem discount
            items.get(i).setFlush(saved);
            items.get(i).setProduct(prod);
            flushItemDao.save( items.get(i));
        }
        return modelMapper.map(saved,FlushResponseDto.class);
    }

    @Override
    public List<ProductDtoResponse> getFlushProducts(Integer id) {
        FlushEntity flush=flushDao.findById(id).orElseThrow(() -> new AppException("Unknown flush", HttpStatus.NOT_FOUND));
        ArrayList<ProductDtoResponse>products=new ArrayList<ProductDtoResponse>();
        List<FlushItemEntity>items=flush.getFlushItems();
        for(int i=0;i<items.size();i++){
            ProductDtoResponse prod=modelMapper.map(items.get(i).getProduct(),ProductDtoResponse.class);
            products.add(prod);
        }
        //rating
        productServiceImp.getRatingList(products);


        return products;
    }


   @Override
    public List<FlushResponseDto> getCurrentFlush() {
       List<FlushResponseDto>flushes=flushDao.findCurrentFlush().stream().map(el -> modelMapper.map(el , FlushResponseDto.class)).collect(Collectors.toList());
       Integer id;
        for (int i=0; i<flushes.size();i++ )
       {
           id=flushes.get(i).getId();
           List<ProductDtoResponse>products=this.getFlushProducts(id);
           flushes.get(i).setProducts(products);
       }
        return flushes;
    }

    @Override
    public void EndFlush(Integer id) {
        FlushEntity flush=flushDao.findById(id).orElseThrow(() -> new AppException("Unknown flush", HttpStatus.NOT_FOUND));
        List<FlushItemEntity>items=flush.getFlushItems();
        Integer prod_id;
        for(int i=0;i<items.size();i++){
            prod_id=items.get(i).getId().getProductId();
            ProductEntity prod =productDao.findById(prod_id).orElseThrow(() -> new AppException("Unknown product", HttpStatus.NOT_FOUND));
            prod.setFlush_discount(0);
            productDao.save(prod);
        }
    }

    @Override
    public List<FlushResponseDto> findAll() {
        return flushDao.findAll().stream().map(el -> modelMapper.map(el , FlushResponseDto.class)).collect(Collectors.toList());
    }

    @Override
    public FlushResponseDto findById(Integer id) {
        return modelMapper.map(flushDao.findById(id).get(), FlushResponseDto.class);

    }

    @Override
    public void delete(Integer id) {
        flushDao.deleteById(id);
    }

    @Override
    public FlushResponseDto update(FlushRequestDto flushRequestDto, Integer id) {
        FlushEntity flush= modelMapper.map(flushRequestDto,FlushEntity.class);
        flush.setId(id);
        FlushEntity updated=flushDao.save(flush);
        return modelMapper.map(updated, FlushResponseDto.class);
    }
}
