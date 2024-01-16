package com.Mcom.Backend_shop_cosmetic.flushItem;


import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.flush.FlushEntity;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlushItemServiceImpl implements FlushItemService {
    private final  FlushItemDao flushItemDao;
    private final ModelMapper modelMapper;
    
    
    @Override
    public FlushItemDto save(FlushItemDto flushItemDto) {
        FlushItemEntity flushItemEntity= modelMapper.map(flushItemDto, FlushItemEntity.class);
        return modelMapper.map(flushItemDao.save(flushItemEntity), FlushItemDto.class);

    }

    @Override
    public List<FlushItemDto> findAll() {
        return flushItemDao.findAll().stream().map(el -> modelMapper.map(el,FlushItemDto.class)).collect(Collectors.toList());

    }

    @Override
    public FlushItemDto findById(FlushItemKey id) {
        return modelMapper.map(flushItemDao.findById(id).get(), FlushItemDto.class);

    }

    @Override
    public void delete(FlushItemKey id) {
        flushItemDao.deleteById(id);
    }

    @Override
    public FlushItemDto update(FlushItemDto flushItemDto) {
        FlushItemEntity  flushItemEntity= modelMapper.map(flushItemDto, FlushItemEntity.class);
        // flushItemEntity.setId(id);
        return modelMapper.map(flushItemDao.save(flushItemEntity),FlushItemDto.class);

    }


}
