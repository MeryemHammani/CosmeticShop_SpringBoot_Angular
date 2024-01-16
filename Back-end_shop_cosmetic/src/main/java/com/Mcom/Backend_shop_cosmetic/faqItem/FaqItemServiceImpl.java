package com.Mcom.Backend_shop_cosmetic.faqItem;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class FaqItemServiceImpl implements  FaqItemService{
    private final ModelMapper modelMapper ;
    private final FaqItemDao faqItemDao;

    @Override
    public FaqItemResponseDto save(FaqItemRequestDto faqItemRequestDto) {
       FaqItemEntity faqItemEntity=modelMapper.map(faqItemRequestDto,FaqItemEntity.class);
        return modelMapper.map(faqItemDao.save(faqItemEntity),FaqItemResponseDto.class);

    }

    @Override
    public List<FaqItemResponseDto> findAll() {
        return faqItemDao.findAll().stream().map(el -> modelMapper.map(el ,FaqItemResponseDto.class)).collect(Collectors.toList());

    }

    @Override
    public FaqItemResponseDto findById(Integer id) {
        return modelMapper.map(faqItemDao.findById(id).get(),FaqItemResponseDto.class);

    }

    @Override
    public void delete(Integer id) {
        faqItemDao.deleteById(id);
    }

    @Override
    public FaqItemResponseDto update(FaqItemRequestDto faqItemRequestDto, Integer id) {
       FaqItemEntity faqItem= modelMapper.map(faqItemRequestDto,FaqItemEntity.class);
       faqItem.setId(id);
        return modelMapper.map(faqItemDao.save(faqItem),FaqItemResponseDto.class);
    }
}
